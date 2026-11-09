<?php
declare(strict_types=1);

// Streamfinder owns its tables and sessions. WordPress is only used as the
// already configured MySQL connection and HTTP client on this hosting account.
require_once dirname(__DIR__, 2) . '/attraktor/dist/wp-load.php';

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_name('streamfinder_session');
    session_set_cookie_params([
        'lifetime' => 60 * 60 * 24 * 30,
        'path' => '/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

global $wpdb;
$prefix = $wpdb->prefix . 'streamfinder_';

function respond($data, int $status = 200): void {
    http_response_code($status);
    echo wp_json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function body(): array {
    $decoded = json_decode((string) file_get_contents('php://input'), true);
    return is_array($decoded) ? $decoded : [];
}

function current_user_id(): int {
    return isset($_SESSION['streamfinder_user_id']) ? (int) $_SESSION['streamfinder_user_id'] : 0;
}

function require_user(): int {
    $id = current_user_id();
    if (!$id) respond(['error' => 'Bitte zuerst einloggen.'], 401);
    return $id;
}

function require_csrf(): void {
    $token = isset($_SERVER['HTTP_X_CSRF_TOKEN']) ? (string) $_SERVER['HTTP_X_CSRF_TOKEN'] : '';
    if (!$token || empty($_SESSION['streamfinder_csrf']) || !hash_equals($_SESSION['streamfinder_csrf'], $token)) {
        respond(['error' => 'Die Sitzung ist abgelaufen. Bitte lade die Seite neu.'], 403);
    }
}

function clean_name($value, int $max = 80): string {
    return mb_substr(trim(wp_strip_all_tags((string) $value)), 0, $max);
}

function install_schema(): void {
    global $wpdb, $prefix;
    $version = '2';
    if (get_option('streamfinder_schema_version') === $version) return;
    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    $charset = $wpdb->get_charset_collate();
    dbDelta("CREATE TABLE {$prefix}users (
      id bigint unsigned NOT NULL AUTO_INCREMENT,
      username varchar(60) NOT NULL,
      email varchar(190) NOT NULL,
      password_hash varchar(255) NOT NULL,
      created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id), UNIQUE KEY username (username), UNIQUE KEY email (email)
    ) $charset;");
    dbDelta("CREATE TABLE {$prefix}lists (
      id bigint unsigned NOT NULL AUTO_INCREMENT,
      user_id bigint unsigned NOT NULL,
      name varchar(80) NOT NULL,
      created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id), KEY owner (user_id)
    ) $charset;");
    dbDelta("CREATE TABLE {$prefix}items (
      id bigint unsigned NOT NULL AUTO_INCREMENT,
      list_id bigint unsigned NOT NULL,
      user_id bigint unsigned NOT NULL,
      media_id varchar(32) NOT NULL,
      media_type varchar(12) NOT NULL,
      title varchar(255) NOT NULL,
      year varchar(12) NULL,
      poster text NULL,
      overview text NULL,
      watched tinyint(1) NOT NULL DEFAULT 0,
      created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id), UNIQUE KEY list_media (list_id,media_id,media_type), KEY owner (user_id), KEY list_owner (list_id,user_id)
    ) $charset;");
    update_option('streamfinder_schema_version', $version, false);
}

function ensure_default_list(int $user_id): int {
    global $wpdb, $prefix;
    $id = (int) $wpdb->get_var($wpdb->prepare("SELECT id FROM {$prefix}lists WHERE user_id=%d AND name=%s ORDER BY id LIMIT 1", $user_id, 'watchlist'));
    if ($id) return $id;
    $legacy = (int) $wpdb->get_var($wpdb->prepare("SELECT id FROM {$prefix}lists WHERE user_id=%d AND name=%s ORDER BY id LIMIT 1", $user_id, 'Meine Watchlist'));
    if ($legacy) { $wpdb->update($prefix . 'lists', ['name'=>'watchlist'], ['id'=>$legacy, 'user_id'=>$user_id]); return $legacy; }
    $wpdb->insert($prefix . 'lists', ['user_id' => $user_id, 'name' => 'watchlist']);
    return (int) $wpdb->insert_id;
}

function owned_list(int $list_id, int $user_id): bool {
    global $wpdb, $prefix;
    return (bool) $wpdb->get_var($wpdb->prepare("SELECT id FROM {$prefix}lists WHERE id=%d AND user_id=%d", $list_id, $user_id));
}

function remote_json(string $url): array {
    $response = wp_remote_get($url, ['timeout' => 12, 'user-agent' => 'Streamfinder/3.0 (+https://streamfinder.moritzvollmer.de)']);
    if (is_wp_error($response)) respond(['error' => 'Der Filmdienst ist gerade nicht erreichbar.'], 502);
    $status = wp_remote_retrieve_response_code($response);
    $json = json_decode((string) wp_remote_retrieve_body($response), true);
    if ($status < 200 || $status >= 300 || !is_array($json)) respond(['error' => 'Ungültige Antwort des Filmdienstes.'], 502);
    return $json;
}

function poster_url(array $entry): ?string {
    if (empty($entry['i']['imageUrl'])) return null;
    return preg_replace('/\._V1_.*\.jpg$/', '._V1_SX300.jpg', (string) $entry['i']['imageUrl']);
}

// German presentation metadata, independent of the original language of a film.
// IMDb IDs remain unchanged so existing list entries and provider links still match.
function german_metadata(array $ids): array {
    $result = []; $missing = [];
    foreach (array_unique($ids) as $id) {
        if (!preg_match('/^tt\d+$/', (string)$id)) continue;
        $cached = get_transient('sf_de_v1_' . $id);
        if (is_array($cached)) $result[$id] = $cached;
        else $missing[] = $id;
    }
    foreach (array_chunk($missing, 20) as $batch) {
        $fields = [];
        foreach ($batch as $i => $id) {
            $fields[] = 't'.$i.':title(id:"'.$id.'"){titleText{text} originalTitleText{text} plot{plotText{plainText}} genres{genres{text}}}';
        }
        $response = wp_remote_post('https://api.graphql.imdb.com/', [
            'timeout' => 12,
            'headers' => ['Content-Type'=>'application/json', 'Accept-Language'=>'de-DE,de;q=0.9',
                'x-imdb-client-name'=>'imdb-web-next-localized', 'x-imdb-user-country'=>'DE', 'x-imdb-user-language'=>'de-DE'],
            'body' => wp_json_encode(['query'=>'{'.implode(' ', $fields).'}']),
        ]);
        if (is_wp_error($response) || wp_remote_retrieve_response_code($response) !== 200) continue;
        $json = json_decode((string)wp_remote_retrieve_body($response), true);
        foreach ($batch as $i => $id) {
            $entry = $json['data']['t'.$i] ?? null;
            if (!is_array($entry) || empty($entry['titleText']['text'])) continue;
            $meta = ['title'=>(string)$entry['titleText']['text'],
                'original_title'=>(string)($entry['originalTitleText']['text']??''),
                'overview'=>(string)($entry['plot']['plotText']['plainText']??''),
                'genres'=>array_column($entry['genres']['genres']??[], 'text')];
            $result[$id] = $meta;
            set_transient('sf_de_v1_'.$id, $meta, 7 * DAY_IN_SECONDS);
        }
    }
    return $result;
}

function localize_entries(array $entries, string $id_key = 'id'): array {
    $metadata = german_metadata(array_column($entries, $id_key));
    foreach ($entries as &$entry) {
        $meta = $metadata[$entry[$id_key]] ?? null;
        $entry['original_title'] = $meta['original_title'] ?? $entry['title'];
        if ($meta) $entry['title'] = $meta['title'];
        // Do not quietly display an English synopsis when a German one is absent.
        $entry['overview'] = $meta['overview'] ?? '';
        if (isset($entry['genres'])) {
            $map = ['Action'=>'Action','Adventure'=>'Abenteuer','Animation'=>'Animation','Biography'=>'Biografie',
                'Comedy'=>'Komödie','Crime'=>'Krimi','Documentary'=>'Dokumentation','Drama'=>'Drama','Family'=>'Familie',
                'Fantasy'=>'Fantasy','History'=>'Geschichte','Horror'=>'Horror','Music'=>'Musik','Musical'=>'Musical',
                'Mystery'=>'Mystery','Romance'=>'Romanze','Sci-Fi'=>'Science-Fiction','Sport'=>'Sport',
                'Thriller'=>'Thriller','War'=>'Krieg','Western'=>'Western','Short'=>'Kurzfilm','News'=>'Nachrichten',
                'Reality-TV'=>'Reality-TV','Talk-Show'=>'Talkshow','Game-Show'=>'Spielshow'];
            $entry['genres'] = array_map(static function($g) use ($map) { return $map[$g] ?? $g; }, $meta['genres'] ?? $entry['genres']);
        }
        $entry['metadata_language'] = $meta ? 'de' : 'original';
    }
    unset($entry);
    return $entries;
}

install_schema();
if (empty($_SESSION['streamfinder_csrf'])) $_SESSION['streamfinder_csrf'] = bin2hex(random_bytes(24));

$action = isset($_GET['action']) ? (string) $_GET['action'] : 'session';
$method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'GET';
if (!in_array($method, ['GET', 'HEAD'], true)) require_csrf();

if ($action === 'session') {
    $user = null;
    if (current_user_id()) {
        $user = $wpdb->get_row($wpdb->prepare("SELECT id,username,email FROM {$prefix}users WHERE id=%d", current_user_id()), ARRAY_A);
    }
    respond(['user' => $user, 'csrf' => $_SESSION['streamfinder_csrf']]);
}

if ($action === 'signup' && $method === 'POST') {
    $input = body();
    $username = clean_name($input['username'] ?? '', 60);
    $email = sanitize_email((string) ($input['email'] ?? ''));
    $password = (string) ($input['password'] ?? '');
    if (mb_strlen($username) < 2 || !is_email($email) || strlen($password) < 8) respond(['error' => 'Bitte Username, gültige E-Mail und mindestens 8 Passwortzeichen angeben.'], 422);
    $exists = $wpdb->get_var($wpdb->prepare("SELECT id FROM {$prefix}users WHERE username=%s OR email=%s", $username, $email));
    if ($exists) respond(['error' => 'Username oder E-Mail ist bereits registriert.'], 409);
    $ok = $wpdb->insert($prefix . 'users', ['username' => $username, 'email' => $email, 'password_hash' => password_hash($password, PASSWORD_DEFAULT)]);
    if (!$ok) respond(['error' => 'Account konnte nicht erstellt werden.'], 500);
    $_SESSION['streamfinder_user_id'] = (int) $wpdb->insert_id;
    ensure_default_list((int) $wpdb->insert_id);
    respond(['user' => ['id' => current_user_id(), 'username' => $username, 'email' => $email]], 201);
}

if ($action === 'login' && $method === 'POST') {
    $input = body();
    $login = trim((string) ($input['login'] ?? ''));
    $row = $wpdb->get_row($wpdb->prepare("SELECT id,username,email,password_hash FROM {$prefix}users WHERE username=%s OR email=%s LIMIT 1", $login, $login), ARRAY_A);
    if (!$row || !password_verify((string) ($input['password'] ?? ''), $row['password_hash'])) respond(['error' => 'Login oder Passwort ist falsch.'], 401);
    session_regenerate_id(true);
    $_SESSION['streamfinder_user_id'] = (int) $row['id'];
    ensure_default_list((int) $row['id']);
    respond(['user' => ['id' => (int) $row['id'], 'username' => $row['username'], 'email' => $row['email']]]);
}

if ($action === 'logout' && $method === 'POST') {
    $_SESSION = [];
    session_destroy();
    respond(['ok' => true]);
}

if ($action === 'lists' && $method === 'GET') {
    $user_id = require_user();
    ensure_default_list($user_id);
    $lists = $wpdb->get_results($wpdb->prepare("SELECT l.id,l.name,l.created_at,COUNT(i.id) item_count FROM {$prefix}lists l LEFT JOIN {$prefix}items i ON i.list_id=l.id WHERE l.user_id=%d GROUP BY l.id ORDER BY l.id", $user_id), ARRAY_A);
    foreach ($lists as &$list) { $list['id'] = (int) $list['id']; $list['item_count'] = (int) $list['item_count']; }
    respond(['lists' => $lists, 'default_list_id' => ensure_default_list($user_id)]);
}

if ($action === 'lists' && $method === 'POST') {
    $user_id = require_user();
    $name = clean_name(body()['name'] ?? '');
    if (mb_strtolower($name) === 'watchlist') respond(['error'=>'Die Standardliste watchlist besteht bereits.'], 409);
    if ($name === '') respond(['error' => 'Bitte einen Listennamen angeben.'], 422);
    $wpdb->insert($prefix . 'lists', ['user_id' => $user_id, 'name' => $name]);
    respond(['list' => ['id' => (int) $wpdb->insert_id, 'name' => $name, 'item_count' => 0]], 201);
}

if ($action === 'list' && $method === 'PATCH') {
    $user_id = require_user(); $input = body(); $id = (int) ($input['id'] ?? 0); $name = clean_name($input['name'] ?? '');
    if (!$id || !owned_list($id, $user_id) || $name === '') respond(['error' => 'Liste nicht gefunden oder Name ungültig.'], 404);
    if ($id === ensure_default_list($user_id)) respond(['error'=>'Die Standardliste heißt immer watchlist.'], 409);
    if (mb_strtolower($name) === 'watchlist') respond(['error'=>'Dieser Name ist für die Standardliste reserviert.'], 409);
    $wpdb->update($prefix . 'lists', ['name' => $name, 'updated_at' => current_time('mysql')], ['id' => $id, 'user_id' => $user_id]);
    respond(['ok' => true]);
}

if ($action === 'list' && $method === 'DELETE') {
    $user_id = require_user(); $id = (int) (body()['id'] ?? 0);
    if (!owned_list($id, $user_id)) respond(['error' => 'Liste nicht gefunden.'], 404);
    if ($id === ensure_default_list($user_id)) respond(['error'=>'Die Standardliste watchlist bleibt bestehen.'], 409);
    $count = (int) $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM {$prefix}lists WHERE user_id=%d", $user_id));
    if ($count <= 1) respond(['error' => 'Mindestens eine Liste muss bestehen bleiben.'], 409);
    $wpdb->delete($prefix . 'items', ['list_id' => $id, 'user_id' => $user_id]);
    $wpdb->delete($prefix . 'lists', ['id' => $id, 'user_id' => $user_id]);
    respond(['ok' => true]);
}

if ($action === 'items' && $method === 'GET') {
    $user_id = require_user(); $list_id = (int) ($_GET['list_id'] ?? 0);
    if (!owned_list($list_id, $user_id)) respond(['error' => 'Liste nicht gefunden.'], 404);
    $items = $wpdb->get_results($wpdb->prepare("SELECT id,media_id,media_type,title,year,poster,overview,watched,created_at FROM {$prefix}items WHERE list_id=%d AND user_id=%d ORDER BY created_at DESC,id DESC", $list_id, $user_id), ARRAY_A);
    foreach ($items as &$item) { $item['id'] = (int) $item['id']; $item['watched'] = (bool) $item['watched']; }
    respond(['items' => localize_entries($items, 'media_id')]);
}

if ($action === 'items' && $method === 'POST') {
    $user_id = require_user(); $input = body(); $list_id = (int) ($input['list_id'] ?? 0);
    if (!$list_id) $list_id = ensure_default_list($user_id);
    if (!owned_list($list_id, $user_id)) respond(['error' => 'Liste nicht gefunden.'], 404);
    $media_id = clean_name($input['media_id'] ?? '', 32); $type = ($input['media_type'] ?? '') === 'tv' ? 'tv' : 'movie'; $title = clean_name($input['title'] ?? '', 255);
    if (!$media_id || !$title) respond(['error' => 'Titel ist unvollständig.'], 422);
    $sql = $wpdb->prepare("INSERT INTO {$prefix}items (list_id,user_id,media_id,media_type,title,year,poster,overview) VALUES (%d,%d,%s,%s,%s,%s,%s,%s) ON DUPLICATE KEY UPDATE title=VALUES(title),year=VALUES(year),poster=VALUES(poster),overview=VALUES(overview)", $list_id,$user_id,$media_id,$type,$title,clean_name($input['year'] ?? '',12),esc_url_raw((string)($input['poster']??'')),sanitize_textarea_field((string)($input['overview']??'')));
    $saved = $wpdb->query($sql);
    if ($saved === false) respond(['error'=>'Der Titel konnte nicht gespeichert werden. Bitte versuche es erneut.'], 500);
    respond(['ok' => true, 'list_id'=>$list_id]);
}

if ($action === 'item' && $method === 'PATCH') {
    $user_id = require_user(); $input = body(); $id = (int) ($input['id'] ?? 0);
    $wpdb->update($prefix . 'items', ['watched' => !empty($input['watched']) ? 1 : 0], ['id' => $id, 'user_id' => $user_id]);
    respond(['ok' => true]);
}

if ($action === 'item' && $method === 'DELETE') {
    $user_id = require_user(); $input = body();
    $wpdb->delete($prefix . 'items', ['list_id' => (int)($input['list_id']??0), 'user_id' => $user_id, 'media_id' => clean_name($input['media_id']??'',32), 'media_type' => ($input['media_type']??'')==='tv'?'tv':'movie']);
    respond(['ok' => true]);
}

if ($action === 'search') {
    $query = clean_name($_GET['q'] ?? '', 100);
    if (mb_strlen($query) < 2) respond(['results' => []]);
    $json = remote_json('https://v3.sg.media-imdb.com/suggestion/x/' . rawurlencode(mb_strtolower($query)) . '.json');
    $results = [];
    foreach (($json['d'] ?? []) as $entry) {
        if (empty($entry['id']) || strpos((string)$entry['id'], 'tt') !== 0 || empty($entry['l'])) continue;
        $qid = (string) ($entry['qid'] ?? '');
        $type = (stripos($qid, 'tv') === 0 && $qid !== 'tvMovie') ? 'tv' : 'movie';
        $results[] = ['id'=>(string)$entry['id'],'type'=>$type,'title'=>(string)$entry['l'],'year'=>(string)($entry['y']??''),'poster'=>poster_url($entry),'overview'=>(string)($entry['s']??'')];
        if (count($results) >= 12) break;
    }
    respond(['results' => localize_entries($results)]);
}

if ($action === 'title') {
    $id = clean_name($_GET['id'] ?? '', 32); $type = ($_GET['type'] ?? '') === 'tv' ? 'tv' : 'movie';
    if (!preg_match('/^tt\d+$/', $id)) respond(['error' => 'Ungültiger Titel.'], 422);
    $stremio_type = $type === 'tv' ? 'series' : 'movie';
    $meta_json = remote_json("https://v3-cinemeta.strem.io/meta/$stremio_type/$id.json");
    $meta = $meta_json['meta'] ?? [];
    $streams_json = remote_json("https://watchhub.strem.io/stream/$stremio_type/$id.json");
    $providers = [];
    foreach (($streams_json['streams'] ?? []) as $stream) {
        if (empty($stream['name']) || empty($stream['externalUrl'])) continue;
        $providers[] = ['provider_name'=>(string)$stream['name'],'offer'=>(string)($stream['title']??''),'link'=>(string)$stream['externalUrl']];
    }
    $localized = localize_entries([['id'=>$id,'type'=>$type,'title'=>(string)($meta['name']??$id),'year'=>substr((string)($meta['releaseInfo']??$meta['released']??''),0,4),'poster'=>$meta['poster']??null,'backdrop'=>!empty($meta['background'])?$meta['background']:null,'overview'=>(string)($meta['description']??''),'genres'=>array_values($meta['genre']??[]),'providers'=>$providers]]);
    respond(['title'=>$localized[0]]);
}

if ($action === 'stats') {
    $count = (int) $wpdb->get_var("SELECT COUNT(*) FROM {$prefix}users");
    respond(['users' => $count]);
}

respond(['error' => 'Endpunkt nicht gefunden.'], 404);
