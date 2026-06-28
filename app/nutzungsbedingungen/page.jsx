import Link from 'next/link';

export const metadata = {
  title: 'Nutzungsbedingungen | BadVergleich',
  description: 'Nutzungsbedingungen von BadVergleich.',
  robots: { index: false },
};

export default function NutzungsbedingungenPage() {
  return (
    <main className="wrap narrow" style={{ padding: '48px 20px 64px' }}>
      <p style={{ marginBottom: '24px' }}>
        <Link href="/">← Zurück zum Vergleich</Link>
      </p>

      <h1>Nutzungsbedingungen</h1>

      <p style={{ background: '#fbf3df', border: '1px dashed #c9971f', padding: '12px 16px', color: '#8a6a12' }}>
        <b>Hinweis:</b> Dies ist eine Vorlage und keine Rechtsberatung. Bitte vor Veröffentlichung rechtlich prüfen
        lassen.
      </p>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Nutzungsbedingungen gelten für die Nutzung der Website badvergleich.de (nachfolgend „BadVergleich") der
        ClearPath Ventures OÜ, Tornimäe tn 5, 10145 Tallinn, Estland (nachfolgend „Betreiber"). Mit dem Zugriff auf die
        Website erklärst du dich mit diesen Bedingungen einverstanden.
      </p>

      <h2>2. Leistungsbeschreibung &amp; Werbecharakter</h2>
      <p>
        BadVergleich stellt redaktionell aufbereitete Produktvergleiche, Rankings und Empfehlungen bereit. Die Inhalte
        haben <b>werblichen Charakter (Advertorial)</b> und stellen keine unabhängige journalistische Berichterstattung
        und kein amtliches Testurteil dar. Bewertungen geben die redaktionelle Meinung des Betreibers auf Basis eigener
        Recherche und öffentlich zugänglicher Quellen wieder.
      </p>

      <h2>3. Keine Beratung, keine Zusicherung</h2>
      <p>
        Die Inhalte dienen ausschließlich der allgemeinen Information und ersetzen keine individuelle Beratung. Der
        Betreiber übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
        Informationen. Preise, Ausstattung und Verfügbarkeit der genannten Produkte können sich jederzeit ändern.
      </p>

      <h2>4. Affiliate-Links &amp; Provisionen</h2>
      <p>
        Die Website enthält Links zu Angeboten Dritter. Über diese Links können dem Betreiber Provisionen bzw. Umsätze
        entstehen. Für dich entstehen dadurch keine zusätzlichen Kosten. Ein Kaufvertrag kommt ausschließlich zwischen dir
        und dem jeweiligen Anbieter zustande; der Betreiber ist nicht Vertragspartei.
      </p>

      <h2>5. Haftung</h2>
      <p>
        Eine Haftung für Entscheidungen, die auf Grundlage der Inhalte getroffen werden, wird ausgeschlossen. Für Inhalte
        externer, verlinkter Seiten ist stets der jeweilige Anbieter verantwortlich. Im Übrigen haftet der Betreiber nur
        nach den gesetzlichen Bestimmungen, insbesondere bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von
        Leben, Körper oder Gesundheit.
      </p>

      <h2>6. Urheberrecht &amp; Marken</h2>
      <p>
        Die durch den Betreiber erstellten Inhalte unterliegen dem Urheberrecht. Eine Vervielfältigung, Bearbeitung oder
        Verbreitung über die private Nutzung hinaus bedarf der vorherigen schriftlichen Zustimmung. Genannte Produktnamen,
        Marken und Logos sind Eigentum der jeweiligen Rechteinhaber und werden ausschließlich zu informativen Zwecken
        genannt.
      </p>

      <h2>7. Änderungen der Nutzungsbedingungen</h2>
      <p>
        Der Betreiber behält sich vor, diese Nutzungsbedingungen jederzeit mit Wirkung für die Zukunft anzupassen. Es gilt
        die zum Zeitpunkt der Nutzung veröffentlichte Fassung.
      </p>

      <h2>8. Anwendbares Recht</h2>
      <p>
        Es gilt das Recht am Sitz des Betreibers, soweit dem keine zwingenden verbraucherschützenden Vorschriften deines
        Wohnsitzstaates entgegenstehen.
      </p>

      <h2>9. Anbieter</h2>
      <p>
        ClearPath Ventures OÜ, Tornimäe tn 5, 10145 Tallinn, Estland · E-Mail: support@badvergleich.de. Weitere Angaben
        findest du im <Link href="/impressum">Impressum</Link>.
      </p>
    </main>
  );
}
