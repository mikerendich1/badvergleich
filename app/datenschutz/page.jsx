import Link from 'next/link';

export const metadata = {
  title: 'Datenschutzerklärung | BadVergleich',
  description: 'Datenschutzerklärung von BadVergleich.',
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <main className="wrap narrow" style={{ padding: '48px 20px 64px' }}>
      <p style={{ marginBottom: '24px' }}>
        <Link href="/">← Zurück zum Vergleich</Link>
      </p>

      <h1>Datenschutzerklärung</h1>

      <p style={{ background: '#fbf3df', border: '1px dashed #c9971f', padding: '12px 16px', color: '#8a6a12' }}>
        <b>Hinweis:</b> Dies ist eine Vorlage und keine Rechtsberatung. Bitte an die tatsächlich eingesetzten Dienste
        anpassen, die [Platzhalter] ausfüllen und rechtlich prüfen lassen.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        <br />
        ClearPath Ventures OÜ, Tornimäe tn 5, 10145 Tallinn, Estland · E-Mail: support@badvergleich.de
      </p>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird bei [Hosting-Anbieter, z. B. Vercel] gehostet. Beim Aufruf der Seite werden technisch
        notwendige Daten (z. B. IP-Adresse, Datum/Uhrzeit, abgerufene Datei, Browsertyp) in Server-Logfiles
        verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren,
        stabilen Betrieb).
      </p>

      <h2>3. Lokale Speicherung für den A/B-Test</h2>
      <p>
        Zur Anzeige und Auswertung verschiedener Überschriften-Varianten speichern wir im <code>localStorage</code> deines
        Browsers eine zufällig zugewiesene Varianten-Kennung sowie anonyme Zählerstände (Aufrufe/Klicks). Diese Daten
        verbleiben in deinem Browser und werden nicht zur Identifikation einzelner Personen genutzt. Du kannst sie
        jederzeit über die Browser-Einstellungen löschen.
      </p>

      <h2>4. Webanalyse / Tracking (sofern aktiviert)</h2>
      <p>
        Sofern eingebunden, nutzen wir [Google Analytics 4 / Google Tag Manager] zur Reichweitenmessung. Dabei können
        Cookies bzw. ähnliche Technologien sowie die IP-Adresse verarbeitet werden. Der Einsatz erfolgt nur auf
        Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die du über unser Cookie-/Consent-Banner erteilst und
        jederzeit widerrufen kannst. [Anbieter, Empfänger, Drittlandübermittlung und Speicherdauer ergänzen.]
      </p>

      <h2>5. Eingebundene Bilder / externe Inhalte</h2>
      <p>
        Auf dieser Seite werden Bilder von externen Quellen geladen (u. a. [images.pexels.com, cdn.shopify.com] sowie
        Hersteller-CDNs der verglichenen Produkte). Dabei wird deine IP-Adresse an die jeweiligen Anbieter übermittelt.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2>6. Externe Links / Weiterleitungen</h2>
      <p>
        Beim Klick auf Links zum Caldris-Shop verlässt du diese Website. Für die dortige Datenverarbeitung gilt die
        Datenschutzerklärung des Shops.
      </p>

      <h2>7. Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
        sowie Widerspruch. Außerdem steht dir ein Beschwerderecht bei einer Aufsichtsbehörde zu. Wende dich dazu an
        support@badvergleich.de.
      </p>

      <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '24px' }}>Stand: [Datum].</p>
    </main>
  );
}
