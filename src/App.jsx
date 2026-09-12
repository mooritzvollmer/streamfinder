import { useEffect, useMemo, useRef, useState } from 'react'
import { apiHeaders, edgeUrl, fromRow, itemKey, readLocalItems, supabase, writeLocalItems } from './lib.js'

const emptyLists = [{ id: null, name: 'Meine Watchlist', is_default: true }]

export function App() {
  const [, renderRoute] = useState(0)
  useEffect(() => {
    const rerender = () => renderRoute((value) => value + 1)
    addEventListener('popstate', rerender)
    return () => removeEventListener('popstate', rerender)
  }, [])
  const params = new URLSearchParams(location.search)
  const isDetail = location.pathname.replace(/\/+$/, '') === '/title' && params.get('id')
  return isDetail ? <TitleDetails /> : params.get('share') ? <SharedList token={params.get('share')} /> : <SearchApp />
}

function Header({ user, username, onLogin, onLogout }) {
  return <nav className="topbar">
    <a className="brand" href="/" aria-label="Streamfinder Startseite"><img src="/logo/mv_logo.svg" alt="" /><span>Stream<strong>Finder</strong></span></a>
    {user ? <div className="account"><button className="account-name" type="button"><HandIcon/><span className="greeting">Hallo, <b>{username || user.email}</b></span></button><button className="quiet logout-button" onClick={onLogout} aria-label="Logout"><LogoutIcon/><span>Logout</span></button></div> : <button className="primary small" onClick={onLogin}>Login</button>}
  </nav>
}

function SearchApp() {
  const initial = new URLSearchParams(location.search)
  const restored = history.state?.streamfinder || {}
  const initialQuery = initial.get('q') || restored.query || ''
  const [query, setQuery] = useState(initialQuery)
  const [tab, setTab] = useState(initial.get('tab') || restored.tab || 'search')
  const [filter, setFilter] = useState(initial.get('filter') || restored.filter || 'all')
  const [results, setResults] = useState(restored.query === initialQuery ? restored.results || [] : [])
  const [items, setItems] = useState(readLocalItems)
  const [lists, setLists] = useState(emptyLists)
  const [activeList, setActiveList] = useState(null)
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [authOpen, setAuthOpen] = useState(false)
  const loaded = useRef(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user || null))
    const { data } = supabase.auth.onAuthStateChange((_event, session) => setUser(session?.user || null))
    loaded.current = true
    return () => data.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!user) { setUsername(''); return }
    setUsername(typeof user.user_metadata?.username === 'string' ? user.user_metadata.username : '')
    loadRemote(user.id)
  }, [user])

  async function loadRemote(userId) {
    setError('')
    let listResult = await supabase.from('watchlists').select('id,name,is_default,is_public,share_token').eq('owner_id', userId).order('created_at')
    const migrated = !listResult.error
    if (migrated && listResult.data?.length) {
      setLists(listResult.data)
      const chosen = listResult.data.find((list) => list.is_default) || listResult.data[0]
      setActiveList(chosen.id)
      const { data, error: itemError } = await supabase.from('watchlist_items').select('id,tmdb_id,media_type,title,year,poster,overview,created_at,watched,watchlist_id').eq('user_id', userId).order('created_at', { ascending: false })
      if (itemError) setError(itemError.message); else setItems((data || []).map(fromRow))
      return
    }
    const { data, error: legacyError } = await supabase.from('watchlist_items').select('tmdb_id,media_type,title,year,poster,overview,created_at').eq('user_id', userId).order('created_at', { ascending: false })
    if (legacyError) setError(legacyError.message); else setItems((data || []).map(fromRow))
  }

  useEffect(() => { if (loaded.current && !user) writeLocalItems(items) }, [items, user])

  useEffect(() => {
    if (query.trim().length < 2) { setResults([]); return }
    const controller = new AbortController()
    const timer = setTimeout(async () => {
      setLoading(true); setError('')
      try {
        const response = await fetch(`${edgeUrl('search')}?q=${encodeURIComponent(query.trim())}&country=DE`, { headers: apiHeaders, signal: controller.signal })
        const json = await response.json()
        if (!response.ok) throw new Error(json.error || 'Suche fehlgeschlagen')
        setResults(json.results || [])
      } catch (reason) { if (reason.name !== 'AbortError') setError(reason.message) }
      finally { setLoading(false) }
    }, 260)
    return () => { clearTimeout(timer); controller.abort() }
  }, [query])

  function updateUrl(next = {}) {
    const p = new URLSearchParams()
    const values = { q: query, tab, filter, ...next }
    if (values.q) p.set('q', values.q)
    if (values.tab !== 'search') p.set('tab', values.tab)
    if (values.filter !== 'all') p.set('filter', values.filter)
    history.replaceState({ ...(history.state || {}), streamfinder: { query: values.q, tab: values.tab, filter: values.filter, results } }, '', `/${p.size ? `?${p}` : ''}`)
  }

  useEffect(() => updateUrl(), [query, tab, filter])

  async function addItem(item) {
    const normalized = { id: item.id, type: item.type, title: item.title, year: item.year || '', poster: item.poster, overview: item.overview || '', watched: false, watchlistId: activeList }
    setItems((old) => old.some((entry) => itemKey(entry) === itemKey(item) && entry.watchlistId === activeList) ? old : [normalized, ...old])
    if (!user) return
    const payload = { user_id: user.id, tmdb_id: item.id, media_type: item.type, title: item.title, year: item.year || null, poster: item.poster, overview: item.overview || null }
    if (activeList) payload.watchlist_id = activeList
    const conflict = activeList ? 'watchlist_id,tmdb_id,media_type' : 'user_id,tmdb_id,media_type'
    const { error } = await supabase.from('watchlist_items').upsert(payload, { onConflict: conflict })
    if (error) setError(error.message)
  }

  async function removeItem(item) {
    setItems((old) => old.filter((entry) => !(itemKey(entry) === itemKey(item) && entry.watchlistId === item.watchlistId)))
    if (!user) return
    let request = supabase.from('watchlist_items').delete().eq('user_id', user.id).eq('tmdb_id', item.id).eq('media_type', item.type)
    if (item.watchlistId) request = request.eq('watchlist_id', item.watchlistId)
    const { error } = await request
    if (error) setError(error.message)
  }

  async function toggleWatched(item) {
    const watched = !item.watched
    setItems((old) => old.map((entry) => itemKey(entry) === itemKey(item) && entry.watchlistId === item.watchlistId ? { ...entry, watched } : entry))
    if (!user) return
    let request = supabase.from('watchlist_items').update({ watched }).eq('user_id', user.id).eq('tmdb_id', item.id).eq('media_type', item.type)
    if (item.watchlistId) request = request.eq('watchlist_id', item.watchlistId)
    const { error } = await request
    if (error) setError('Für „angesehen“ muss noch die vorbereitete Datenbankmigration ausgeführt werden.')
  }

  async function createList() {
    if (!user) { setAuthOpen(true); return }
    const name = prompt('Name der neuen Watchlist')?.trim()
    if (!name) return
    const { data, error } = await supabase.from('watchlists').insert({ owner_id: user.id, name }).select().single()
    if (error) setError('Mehrere Listen werden nach der vorbereiteten Datenbankmigration verfügbar.'); else { setLists((old) => [...old, data]); setActiveList(data.id); setTab('watchlist') }
  }

  const shown = (tab === 'search' ? results : items.filter((item) => !activeList || item.watchlistId === activeList)).filter((item) => filter === 'all' || item.type === filter)
  const keys = useMemo(() => new Set(items.filter((item) => !activeList || item.watchlistId === activeList).map(itemKey)), [items, activeList])
  const openTitle = (item) => {
    updateUrl()
    history.pushState({ detail: true }, '', `/title?type=${item.type}&id=${item.id}`)
    dispatchEvent(new PopStateEvent('popstate'))
  }

  return <PageShell>
    <Header user={user} username={username} onLogin={() => setAuthOpen(true)} onLogout={() => supabase.auth.signOut()} />
    {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    <section className="hero-grid">
      <div className="intro"><p className="eyebrow">Streamen, leihen, kaufen</p><h1>Was willst du <em>heute</em> sehen?</h1><p>Finde in Sekunden heraus, wo Filme und Serien laufen. Deine Watchlist bleibt lokal, bis du dich einloggst. Danach wird sie geräteübergreifend synchronisiert.</p></div>
      <div className="panel">
        <div className="tabs"><button className={tab === 'search' ? 'active' : ''} onClick={() => setTab('search')}>Entdecken</button><button className={tab === 'watchlist' ? 'active' : ''} onClick={() => setTab('watchlist')}>Watchlist <b>{items.length}</b></button></div>
        {tab === 'search' ? <div className="searchbox"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Film oder Serie suchen ..." /><span>⌕</span></div> : <div className="listbar"><select value={activeList || ''} onChange={(event) => setActiveList(event.target.value || null)}>{lists.map((list) => <option key={list.id || 'legacy'} value={list.id || ''}>{list.name}</option>)}</select><button onClick={createList}>+ Neue Liste</button>{activeList && <button onClick={async () => { const list = lists.find((entry) => entry.id === activeList); const { error: shareError } = await supabase.from('watchlists').update({ is_public: true }).eq('id', activeList); if (shareError) { setError('Teilen wird nach der vorbereiteten Datenbankmigration verfügbar.'); return } await navigator.clipboard.writeText(`${location.origin}/?share=${list.share_token}`); alert('Teilbarer Link wurde kopiert.') }}>Teilen</button>}</div>}
        <div className="filters">{[['all','Alle'],['movie','Filme'],['tv','Serien']].map(([value,label]) => <button className={filter === value ? 'active' : ''} onClick={() => setFilter(value)} key={value}>{label}</button>)}</div>
        {error && <p className="notice error">{error}</p>}{loading && <p className="notice">Suche läuft …</p>}
        <div className="cards">{shown.map((item) => <TitleCard key={`${itemKey(item)}-${item.watchlistId || 'default'}`} item={item} inList={keys.has(itemKey(item))} watchlist={tab === 'watchlist'} onOpen={() => openTitle(item)} onAdd={() => addItem(item)} onRemove={() => removeItem(item)} onWatched={() => toggleWatched(item)} />)}{!loading && !shown.length && <p className="notice">{tab === 'watchlist' ? 'Deine Watchlist ist leer.' : query.length >= 2 ? 'Keine Treffer gefunden.' : 'Gib einen Film oder eine Serie ein.'}</p>}</div>
      </div>
    </section>
  </PageShell>
}

function TitleCard({ item, inList, watchlist, readOnly = false, onOpen, onAdd, onRemove, onWatched }) {
  return <article className={`card ${watchlist ? 'watchlist-card' : ''} ${item.watched ? 'watched' : ''}`} onClick={onOpen} tabIndex="0">
    <div className="poster">{item.poster ? <img src={item.poster} alt="" /> : null}</div>
    <div className="card-copy"><div className="card-head"><div><h3>{item.title}</h3><p>{item.year || 'Unbekannt'} · {item.type === 'movie' ? 'Film' : 'Serie'}{item.watched ? ' · Angesehen' : ''}</p></div>{!readOnly && <div className="card-actions">{watchlist && <button aria-label={item.watched ? 'Als ungesehen markieren' : 'Als gesehen markieren'} title={item.watched ? 'Als ungesehen markieren' : 'Als gesehen markieren'} onClick={(e) => { e.stopPropagation(); onWatched() }} className={`card-action watched-action ${item.watched ? 'checked' : ''}`}><EyeIcon checked={item.watched}/><span className="action-label">{item.watched ? 'Angesehen' : 'Als gesehen markieren'}</span></button>}<button aria-label={inList ? 'Aus Watchlist entfernen' : 'Zur Watchlist hinzufügen'} title={inList ? 'Aus Watchlist entfernen' : 'Zur Watchlist hinzufügen'} className={`card-action ${inList ? 'remove-action' : 'add-action'}`} onClick={(e) => { e.stopPropagation(); inList ? onRemove() : onAdd() }}>{inList ? <TrashIcon/> : <PlusIcon/>}<span className="action-label">{inList ? 'Entfernen' : 'Watchlist'}</span></button></div>}</div>{item.overview && <p className="overview">{item.overview}</p>}</div>
    <span className="providers">Streamingdienste ansehen →</span>
  </article>
}

function EyeIcon({ checked }) { return checked ? <svg className="action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg> : <svg className="action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg> }
function TrashIcon() { return <svg className="action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg> }
function PlusIcon() { return <svg className="action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg> }
function HandIcon() { return <svg className="nav-icon hand-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v7M10 10.5V6a2 2 0 0 0-4 0v8M6 13V8a2 2 0 0 0-4 0v9a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8v-2a2 2 0 0 0-4 0v1"/></svg> }
function LogoutIcon() { return <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 17l5-5-5-5m5 5H3m11-9h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5"/></svg> }

function TitleDetails() {
  const p = new URLSearchParams(location.search)
  const type = p.get('type'), id = p.get('id')
  const [title, setTitle] = useState(null), [error, setError] = useState(''), [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null), [items, setItems] = useState(readLocalItems), [defaultListId, setDefaultListId] = useState(null)
  useEffect(() => { supabase.auth.getSession().then(({ data }) => setUser(data.session?.user || null)) }, [])
  useEffect(() => { (async () => { try { const response = await fetch(`${edgeUrl('title')}?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}&country=DE`, { headers: apiHeaders }); const json = await response.json(); if (!response.ok) throw new Error(json.error); setTitle(json.title) } catch (reason) { setError(reason.message || 'Titel konnte nicht geladen werden.') } finally { setLoading(false) } })() }, [type,id])
  useEffect(() => { if (!user) return; (async () => {
    const { data: defaultList } = await supabase.from('watchlists').select('id').eq('owner_id', user.id).eq('is_default', true).maybeSingle()
    setDefaultListId(defaultList?.id || null)
    let result = await supabase.from('watchlist_items').select('tmdb_id,media_type,title,year,poster,overview,created_at,watched,watchlist_id').eq('user_id', user.id)
    if (result.error) result = await supabase.from('watchlist_items').select('tmdb_id,media_type,title,year,poster,overview,created_at').eq('user_id', user.id)
    if (result.data) setItems(result.data.map(fromRow))
  })() }, [user])
  const saved = title && items.some((item) => itemKey(item) === itemKey(title))
  async function toggle() {
    const item = { id: title.id || Number(id), type: title.type || type, title: title.title, year: title.year || '', poster: title.poster, overview: title.overview || '', watchlistId: defaultListId }
    if (saved) {
      setItems((old) => old.filter((entry) => itemKey(entry) !== itemKey(item)))
      if (user) await supabase.from('watchlist_items').delete().eq('user_id', user.id).eq('tmdb_id', item.id).eq('media_type', item.type)
    } else {
      setItems((old) => [item, ...old])
      if (user) {
        const payload = { user_id:user.id,tmdb_id:item.id,media_type:item.type,title:item.title,year:item.year||null,poster:item.poster,overview:item.overview||null }
        if (defaultListId) payload.watchlist_id = defaultListId
        await supabase.from('watchlist_items').upsert(payload,{onConflict:defaultListId?'watchlist_id,tmdb_id,media_type':'user_id,tmdb_id,media_type'})
      }
    }
    if (!user) writeLocalItems(saved ? items.filter((entry) => itemKey(entry) !== itemKey(item)) : [item,...items])
  }
  function goBack() { if (history.length > 1) history.back(); else location.href = '/' }
  return <PageShell narrow><button className="back" onClick={goBack}>← Zurück zur Suche</button><section className="detail">{loading && <p className="notice">Titel wird geladen …</p>}{error && <p className="notice error">{error}</p>}{title && <>{title.backdrop && <img className="backdrop" src={title.backdrop} alt="" />}<div className="detail-grid"><div className="detail-poster">{title.poster && <img src={title.poster} alt="" />}</div><div className="detail-copy"><p className="eyebrow">{title.type === 'movie' ? 'Film' : 'Serie'} · {title.year || 'Unbekannt'}</p><h1>{title.title}</h1><button className={`primary watch-button ${saved ? 'saved' : ''}`} onClick={toggle}>{saved ? '✓ In Watchlist' : '+ Zur Watchlist'}</button><div className="genres">{title.genres?.map((genre) => <span key={genre.id}>{genre.name}</span>)}</div>{title.overview && <p className="detail-overview">{title.overview}</p>}<ProviderGroups providers={title.providers} /></div></div></>}</section></PageShell>
}

function SharedList({ token }) {
  const [list, setList] = useState(null), [items, setItems] = useState([]), [error, setError] = useState(''), [loading, setLoading] = useState(true)
  useEffect(() => { (async () => {
    const { data, error: shareError } = await supabase.rpc('shared_watchlist', { requested_token: token })
    if (shareError || !data) { setError('Diese geteilte Watchlist ist nicht verfügbar.'); setLoading(false); return }
    setList({ name: data.name })
    setItems((data.items || []).map(fromRow))
    setLoading(false)
  })() }, [token])
  const openTitle = (item) => { history.pushState(null, '', `/title?type=${item.type}&id=${item.id}`); dispatchEvent(new PopStateEvent('popstate')) }
  return <PageShell narrow><Header /><a className="back" href="/">← Zum Streamfinder</a><section className="shared"><p className="eyebrow">Geteilte Watchlist</p><h1>{list?.name || 'Watchlist'}</h1>{loading && <p className="notice">Watchlist wird geladen …</p>}{error && <p className="notice error">{error}</p>}<div className="cards">{items.map((item) => <TitleCard key={itemKey(item)} item={item} inList watchlist={false} readOnly onOpen={() => openTitle(item)} />)}</div></section></PageShell>
}

function ProviderGroups({ providers }) {
  if (!providers) return null
  const labels = { flatrate:'Im Abo streamen', rent:'Leihen', buy:'Kaufen' }
  return <div className="provider-groups">{Object.entries(labels).map(([key,label]) => providers[key]?.length ? <div key={key}><h3>{label}</h3><div>{providers[key].slice(0,6).map((provider) => <span className="provider" key={provider.provider_id}>{provider.logo_path && <img src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`} alt="" />}{provider.provider_name}</span>)}</div></div> : null)}{providers.link && <a href={providers.link} target="_blank" rel="noreferrer">Anbieter ansehen</a>}</div>
}

function AuthModal({ onClose }) {
  const [mode, setMode] = useState('login'), [login, setLogin] = useState(''), [email, setEmail] = useState(''), [password, setPassword] = useState(''), [message, setMessage] = useState('')
  async function submit(event) { event.preventDefault(); setMessage(''); let address = email || login; if (mode === 'login' && !address.includes('@')) { const { data } = await supabase.rpc('email_for_username',{login_username:address}); if (!data) { setMessage('Benutzername nicht gefunden.'); return } address = data } const result = mode === 'signup' ? await supabase.auth.signUp({email:address,password,options:{data:{username:login},emailRedirectTo:location.origin}}) : await supabase.auth.signInWithPassword({email:address,password}); if (result.error) setMessage(result.error.message); else onClose() }
  return <div className="modal"><div className="modal-card"><button className="close" onClick={onClose}>×</button><p className="eyebrow">Streamfinder Account</p><h2>{mode === 'login' ? 'Einloggen' : 'Account erstellen'}</h2><div className="auth-tabs"><button className={mode==='login'?'active':''} onClick={()=>setMode('login')}>Login</button><button className={mode==='signup'?'active':''} onClick={()=>setMode('signup')}>Neu</button></div><form onSubmit={submit}>{mode==='signup'&&<input value={login} onChange={e=>setLogin(e.target.value)} placeholder="Benutzername" required/>}<input value={mode==='signup'?email:login} onChange={e=>mode==='signup'?setEmail(e.target.value):setLogin(e.target.value)} placeholder={mode==='signup'?'E-Mail':'Username oder E-Mail'} required/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Passwort" minLength="6" required/><button className="primary" type="submit">{mode==='login'?'Login':'Registrieren'}</button>{message&&<p className="notice error">{message}</p>}</form></div></div>
}

function CursorFollow() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, interactive: false, ready: false })
  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const move = (event) => setCursor({ x: event.clientX, y: event.clientY, interactive: Boolean(event.target instanceof Element && event.target.closest('button,a,input,select,textarea,[role="button"]')), ready: true })
    addEventListener('pointermove', move, { passive: true })
    return () => removeEventListener('pointermove', move)
  }, [])
  const position = { '--mouse-x': cursor.ready ? `${cursor.x}px` : '50vw', '--mouse-y': cursor.ready ? `${cursor.y}px` : '50vh' }
  return <><div className="mouse-glow" style={{ ...position, '--mouse-glow-opacity': cursor.interactive ? .42 : .72 }} aria-hidden="true"/><div className="cursor-dot" style={{ ...position, '--cursor-size': cursor.interactive ? '20px' : '10px', '--cursor-color': cursor.interactive ? 'rgba(255,95,162,.8)' : '#fb64b6', opacity: cursor.interactive ? .8 : 1 }} aria-hidden="true"/></>
}

function PageShell({ children, narrow }) {
  const [userCount, setUserCount] = useState(null)
  useEffect(() => {
    supabase.rpc('streamfinder_user_count').then(({ data, error }) => {
      if (!error && typeof data === 'number') setUserCount(data)
    })
  }, [])
  return <main className={narrow ? 'page narrow' : 'page'}><CursorFollow />{children}<footer><div><img src="/logo/mv_logo.svg" alt=""/><b>StreamFinder</b></div><nav><a href="https://moritzvollmer.de/">Portfolio</a><a href="https://moritzvollmer.de/impressum/">Impressum</a><a href="https://moritzvollmer.de/datenschutz/">Datenschutz</a></nav>{userCount !== null && <p className="user-count">{userCount.toLocaleString('de-DE')} aktive Nutzer:innen</p>}<p>Film- und Seriendaten: TMDB. Verfügbarkeitsdaten: JustWatch über TMDB.</p></footer></main>
}
