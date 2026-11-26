# About-me

Persönliche Portfolio-Webseite, gebaut mit **React 18**, **TypeScript**, **Vite** und **Tailwind CSS**.
Sie stellt Profil, Skills und Projekte vor und lädt die Repositories live von der GitHub-API.

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-vri5h3ks)

## Inhalt

- [Funktionen](#funktionen)
- [Tech-Stack](#tech-stack)
- [Schnellstart](#schnellstart)
- [Projektstruktur](#projektstruktur)
- [Anpassen](#anpassen)
- [Deployment (GitHub Pages)](#deployment-github-pages)
- [Hinweis zum GitHub-Token](#hinweis-zum-github-token)

## Funktionen

Die Seite ist eine Single-Page-App mit fünf Abschnitten:

| Abschnitt | Inhalt |
|---|---|
| Hero | Name, Titel, Kurzbeschreibung |
| About | Werdegang, Ziele, Sprachkenntnisse |
| Skills | Fähigkeiten mit Fortschrittsbalken und Tech-Stack |
| Projects | Repositories des GitHub-Accounts `lulu-830`, live per API geladen (Sprache, Sterne, Forks, Topics, letztes Update) |
| Contact | Kontaktmöglichkeiten |

Die GitHub-Daten (Profil und Repos) kommen über die Hooks `useGitHubUser` und `useGitHubRepos` in `src/useGitHub.ts`.

## Tech-Stack

- React 18 + TypeScript
- Vite 5 (Build und Dev-Server)
- Tailwind CSS 3 + PostCSS
- lucide-react (Icons)
- ESLint (Flat Config) mit `typescript-eslint`

`@supabase/supabase-js` ist als Abhängigkeit eingetragen, wird im Code aber aktuell nicht verwendet.

## Schnellstart

Voraussetzung: Node.js 20 oder neuer.

```bash
git clone https://github.com/lulu-830/About-me.git
cd About-me
npm install
npm run dev
```

Weitere Skripte:

| Befehl | Zweck |
|---|---|
| `npm run dev` | Entwicklungsserver mit Hot Reload |
| `npm run build` | Produktions-Build nach `dist/` |
| `npm run preview` | Produktions-Build lokal ansehen |
| `npm run lint` | ESLint ausführen |
| `npm run typecheck` | TypeScript-Prüfung ohne Build |

## Projektstruktur

```text
About-me/
├── index.html                 HTML-Einstieg
├── vite.config.ts             Vite-Konfiguration (base: '/About-me/')
├── tailwind.config.js         Tailwind-Konfiguration
├── src/
│   ├── main.tsx               React-Einstiegspunkt
│   ├── App.tsx                Alle Abschnitte und Profildaten
│   ├── useGitHub.ts           Hooks für die GitHub-API
│   └── index.css              Tailwind-Direktiven
└── .github/workflows/
    └── deploy.yml             Deployment nach GitHub Pages
```

## Anpassen

- **Profil, Skills, Sprachen:** Die Konstanten `profile`, `skills`, `techStack`, `spokenLanguages` und `languageColors` stehen oben in `src/App.tsx`.
- **Anderer GitHub-Account:** `GITHUB_USERNAME` in `src/useGitHub.ts` ändern.
- **Anderer Repo-Name:** Der Wert `base` in `vite.config.ts` muss dem Repository-Namen entsprechen, sonst findet die Seite auf GitHub Pages ihre Dateien nicht.

## Deployment (GitHub Pages)

Bei jedem Push auf `main` (oder manuell über *Actions → Run workflow*) baut `deploy.yml` die Seite und veröffentlicht `dist/` auf GitHub Pages.

Einmalig einrichten: *Settings → Pages → Source: GitHub Actions*.

## Hinweis zum GitHub-Token

Die App liest optional `VITE_GITHUB_TOKEN`, um das Rate-Limit der GitHub-API zu erhöhen. Variablen mit dem Präfix `VITE_` werden beim Build **in den JavaScript-Code der Webseite eingebettet** und sind damit für jeden Besucher sichtbar.

Deshalb gilt:

- Nutze kein Token mit Schreibrechten und keins mit Zugriff auf private Repos.
- Die Seite funktioniert auch ganz ohne Token. Für öffentliche Daten gilt dann nur das niedrigere Anonym-Limit (60 Anfragen pro Stunde und IP).
- Ist bereits ein Token im Secret `VITE_GITHUB_TOKEN` hinterlegt, widerrufe es auf GitHub und lege es gegebenenfalls ohne Berechtigungen neu an.
