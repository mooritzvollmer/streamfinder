# Streamfinder

Eine Webanwendung zur Suche nach Filmen und Serien sowie deren aktueller Streaming-, Leih- und Kaufverfügbarkeit.

**Live:** [streamfinder.moritzvollmer.de](https://streamfinder.moritzvollmer.de/)

## Funktionen

- Suche nach Filmen und Serien
- Detailseiten mit Genres, Beschreibung und Anbietern
- persönliche Watchlist
- Status „angesehen“
- optionale Anmeldung und geräteübergreifende Synchronisierung
- tatsächliche Nutzerzahl im Footer

## Technische Basis

React, Vite und Supabase. Film- und Seriendaten stammen von TMDB; Verfügbarkeitsinformationen werden über TMDB auf Basis von JustWatch-Daten bereitgestellt.

```sh
npm install
npm run dev
npm run build
```

Für die verbundenen Dienste werden lokale Umgebungsvariablen benötigt. Zugangsdaten und Nutzerdaten gehören nicht in das Repository.

Ein Projekt von [Moritz Vollmer](https://moritzvollmer.de/).
