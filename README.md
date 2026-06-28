# Caldris Duschkopf-Vergleich (Next.js)

Vergleichs-Landingpage „VergleichsPilot" als Next.js-App (App Router).

## Starten

```bash
npm install
npm run dev
```

Dann http://localhost:3000 öffnen.

## Build / Produktion

```bash
npm run build
npm start
```

## Struktur

- `app/layout.jsx` – Root-Layout, Metadaten (Title/Description), Google-Fonts (Poppins + Space Grotesk).
- `app/page.jsx` – die komplette Landingpage (statischer Inhalt).
- `app/globals.css` – das gesamte Styling (aus der ursprünglichen HTML-Datei übernommen).
- `components/Hero.jsx` – Hero-Bereich (eine feste Version, kein A/B-Test).

## Bilder

- Alle Bilder liegen lokal in `public/images/` und werden über `next/image` ausgeliefert (kein Hotlinking, keine `remotePatterns` nötig).
- Dateien: `hero-shower.jpg` (Pexels), `caldris-flow-plus.png` (eigenes Produkt) sowie `hello-klean.jpg`, `dupor.png`, `sanquell.jpg`, `doyoo.png` (Wettbewerber).
- **Bildrechte:** Die Wettbewerber-Produktfotos sind urheberrechtlich geschützt. Vor Live-Gang die Nutzung im Vergleich rechtlich prüfen oder durch eigene Aufnahmen ersetzen.

## Rechtsseiten

- `app/impressum/page.jsx` und `app/datenschutz/page.jsx` sind als Routen angelegt (im Footer verlinkt). Beide sind **Vorlagen** mit `[Platzhalter]` – vor Live-Gang ausfüllen und rechtlich prüfen lassen.

## Hinweis

- Werbliche Vergleichsseite: Transparenz-Hinweis ist enthalten; vor Live-Gang rechtlich prüfen.
