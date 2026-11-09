# Aktueller Arbeitsstand

Am 09.11.2026 wurde der neuere PHP-/Session-basierte Live-Build wiederhergestellt. GitHub enthielt noch den alten Supabase-Stand. Die vorhandene Anmeldung, Datenbank und CSRF-Prüfung bleiben erhalten.

Der ursprüngliche neuere JSX-Quellcode war weder lokal noch im Repository verfügbar. src/recovered-live.js enthält deshalb die formatierte ausführbare Live-Fassung einschließlich ihrer React-Laufzeit; src/App.jsx und src/lib.js sind ältere, vom Build nicht mehr verwendete Quellen. Änderungen an der Oberfläche erfolgen bis zur späteren Quellcode-Zusammenführung in recovered-live.js.

Build: npm run build. API: api/index.php wird separat nach streamfinder/api/index.php veröffentlicht. Nicht auf einen anderen Server kopieren: Die API nutzt die bestehende WordPress-Verbindung des Hostingkontos ausschließlich als unveränderte Datenbank-/HTTP-Abhängigkeit. Keine Konfiguration oder Nutzer-/Passwortdaten werden eingecheckt.

Deutsche Darstellung: IMDb mit de-DE und DE-Kontext, ID-basierter Cache für sieben Tage. Originalsprache eines Films ist kein Filter. Fehlende deutsche Beschreibungen bleiben leer; falls keine lokalisierten Metadaten verfügbar sind, bleibt der bekannte Titel als Rückfall erhalten.

Standardliste: watchlist. Die bisherige Meine Watchlist wird unter Erhalt ihrer ID und Einträge umbenannt. Eigene Listen bleiben erhalten. Ohne explizite Zielauswahl wird serverseitig die Standardliste gewählt; diese kann nicht gelöscht oder umbenannt werden. Ein Film kann in mehreren Listen vorkommen; wiederholtes Speichern erzeugt keine Duplikate innerhalb derselben Liste.
