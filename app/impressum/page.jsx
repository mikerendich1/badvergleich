import Link from 'next/link';

export const metadata = {
  title: 'Impressum | BadVergleich',
  description: 'Impressum und Anbieterkennzeichnung von BadVergleich.',
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <main className="wrap narrow" style={{ padding: '48px 20px 64px' }}>
      <p style={{ marginBottom: '24px' }}>
        <Link href="/">← Zurück zum Vergleich</Link>
      </p>

      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        ClearPath Ventures OÜ
        <br />
        Tornimäe tn 5, 10145 Tallinn, Estland
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: support@badvergleich.de
        <br />
        Webseite: www.badvergleich.de
      </p>

      <h2>Hinweis: Advertorial / Werbung</h2>
      <p>
        Die auf dieser Website veröffentlichten Inhalte sind als Advertorial – d. h. als bezahlte redaktionelle Werbung –
        zu verstehen. Alle Rankings, Bewertungen und Empfehlungen basieren auf eigener Recherche und redaktioneller
        Einschätzung und stellen keine unabhängige journalistische Berichterstattung dar. Wir erhalten möglicherweise eine
        Provision, wenn Sie über Links auf dieser Seite Einkäufe tätigen. Für Sie entstehen dadurch keine zusätzlichen
        Kosten.
      </p>

      <h2>Haftungsausschluss – Haftung für Inhalte</h2>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt und auf Basis umfangreicher Recherchen erstellt. Alle
        Produktbewertungen und Vergleiche spiegeln die redaktionelle Meinung des Betreibers wider und erheben keinen
        Anspruch auf objektive Vollständigkeit. Wir übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit und
        Aktualität der bereitgestellten Informationen. Eine Haftung für Entscheidungen, die auf Grundlage dieser Inhalte
        getroffen werden, wird ausdrücklich ausgeschlossen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
        Inhalte nach den allgemeinen Gesetzen verantwortlich.
      </p>

      <h2>Haftungsausschluss – Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die
        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Eine dauerhafte
        inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
      </p>

      <h2>Markenrechte &amp; Produktnennungen</h2>
      <p>
        Alle auf dieser Website genannten Produktnamen, Marken und Logos sind Eigentum der jeweiligen Rechteinhaber. Die
        Marke <b>Caldris</b> (einschließlich des Produkts Caldris Flow Plus) ist eine Marke der ClearPath Ventures OÜ. Die
        Nennung erfolgt ausschließlich zu informativen Zwecken. Unsere Bewertungen basieren auf eigener Recherche und
        öffentlich zugänglichen Quellen. Wir beabsichtigen keine Herabsetzung oder Verunglimpfung von Marken oder
        Herstellern. Sollten Sie als Markeninhaber eine sachliche Korrektur wünschen, kontaktieren Sie uns bitte per
        E-Mail.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die
        Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen
        Zustimmung des Betreibers.
      </p>

      <h2>Online-Streitbeilegung</h2>
      <p>
        Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr
        </a>
        <br />
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>
    </main>
  );
}
