import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';
import AnimatedBars from '../components/AnimatedBars';
import ProductComparison from '../components/ProductComparison';
import StickyBuyBar from '../components/StickyBuyBar';

// Interner Redirect (siehe next.config.mjs) → leitet auf die Caldris-Produktseite weiter.
const PRODUCT_URL = '/duschkopf-sieger';

export default function Page() {
  return (
    <>
      <div className="anzeige-bar">
        <strong>Duschköpfe mit Filter</strong> · Vergleich &amp; Kaufberatung 2026
      </div>

      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="brand">
            Bad<span>Vergleich</span>
            <em className="tld">.de</em>
          </div>
          <div className="navsearch" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span className="navsearch-ph">Produkt suchen …</span>
          </div>
          <a className="btn btn-sm" href={PRODUCT_URL}>
            Zum Testsieger →
          </a>
        </div>
      </nav>

      <div className="breadcrumb">
        <div className="wrap">
          <a href="#">Startseite</a>
          <span className="sep">›</span>
          <span>Duschköpfe mit Filter</span>
        </div>
      </div>

      <div className="shell">
        <main className="shell-main">
          <Hero />

      {/* INTRO (Meta-Review im Vergleichsportal-Stil) */}
      <section style={{ padding: '24px 0 0' }}>
        <div className="wrap narrow">
          <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.7 }}>
            Nach dem Duschen fühlen sich Haut und Haare oft trockener an statt frischer – schuld ist meist nicht das
            Shampoo, sondern hartes, gechlortes Wasser. Ein <b>Filterduschkopf</b> kann Chlor, Kalk und Rückstände
            reduzieren, direkt beim Duschen und ohne Umbau.
          </p>

          <div className="author" style={{ margin: '18px 0' }}>
            <div className="ava">
              <Image src="/images/lena.jpg" alt="Lena Brandt" width={48} height={48} />
            </div>
            <div>
              <span className="name">Von Lena Brandt</span>
              <small>Recherchiert aus persönlichem Interesse zu Wasserqualität, Haut &amp; Haar</small>
            </div>
          </div>

          <p>
            Die Modelle unterscheiden sich aber stark. Ich hab die bekanntesten in einem <b>Meta-Vergleich</b> ausgewertet
            – aus Herstellerangaben, Datenblättern und echten Bewertungen (Trustpilot, Amazon, Foren), ohne eigene
            Labortests. Wunder verspreche ich dabei nicht: Ein Filter mindert Rückstände, ersetzt aber keine
            Trinkwasseraufbereitung.
          </p>
          <div className="inshort">
            <div className="lbl">Kurz gesagt</div>
            <p>
              Mein Testsieger ist der <b>Caldris Flow Plus</b> (ab 79 €): mein klarer Favorit. Bestes Gesamtpaket aus
              Filterleistung, fairen Folgekosten ohne Abo und werkzeugloser Montage. Ich bewerte ihn mit <b>9,6/10</b>.
            </p>
            <a className="inshort-link" href={PRODUCT_URL}>Zum Anbieter →</a>
          </div>
        </div>
      </section>

      {/* TESTSIEGER (nüchterne Verdict-Box im Testseiten-Stil) */}
      <section id="platz-1" style={{ paddingTop: '8px', scrollMarginTop: '80px' }}>
        <div className="wrap narrow">
          <div className="verdict">
            <div className="verdict-head">
              <div className="vscore">
                <b>9,6</b>
                <span>von 10</span>
              </div>
              <div>
                <span className="vbadge">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
                  </svg>
                  Testsieger 2026
                </span>
                <div className="vname">Caldris Flow Plus</div>
                <div className="vbrand">von Caldris Home</div>
              </div>
            </div>
            <div className="vbars">
              <div className="vbar">
                <div className="vbar-top">
                  <span>Filterleistung</span>
                  <b>9,5/10</b>
                </div>
                <div className="vtrack">
                  <div className="vfill" data-width="95%" />
                </div>
              </div>
              <div className="vbar">
                <div className="vbar-top">
                  <span>Gesamtqualität</span>
                  <b>9,6/10</b>
                </div>
                <div className="vtrack">
                  <div className="vfill" data-width="96%" />
                </div>
              </div>
              <div className="vbar">
                <div className="vbar-top">
                  <span>Preis-Leistung</span>
                  <b>9,7/10</b>
                </div>
                <div className="vtrack">
                  <div className="vfill" data-width="97%" />
                </div>
              </div>
              <div className="vbar">
                <div className="vbar-top">
                  <span>Anwendung</span>
                  <b>9,8/10</b>
                </div>
                <div className="vtrack">
                  <div className="vfill" data-width="98%" />
                </div>
              </div>
              <div className="vbar">
                <div className="vbar-top">
                  <span>Kundenzufriedenheit</span>
                  <b>9,4/10</b>
                </div>
                <div className="vtrack">
                  <div className="vfill" data-width="94%" />
                </div>
              </div>
            </div>
            <a className="btn btn-block" href={PRODUCT_URL} style={{ marginTop: '18px' }}>
              Zum Anbieter →
            </a>
          </div>

          <div className="vspecs">
            <div className="vstat">
              <span className="k">Filter</span>
              <strong>5 Stufen</strong>
              <span className="s">Aktivkohle gegen Chlor &amp; Kalk</span>
            </div>
            <div className="vstat">
              <span className="k">Montage</span>
              <strong>2 Min.</strong>
              <span className="s">werkzeuglos, Anschluss G½</span>
            </div>
            <div className="vstat">
              <span className="k">Lieferumfang</span>
              <strong>Doppelfilter</strong>
              <span className="s">im Karton, kein Abo</span>
            </div>
          </div>
        </div>
      </section>

      {/* TOP 3 AUF EINEN BLICK */}
      <section style={{ paddingTop: '8px' }}>
        <div className="wrap narrow">
          <h2 style={{ marginBottom: '10px' }}>Die Top 3 auf einen Blick</h2>
          <p>Bevor es zu den ausführlichen Einzelbewertungen geht, hier die drei besten Modelle in Kürze:</p>
          <ol className="top3">
            <li>
              <b><a href={PRODUCT_URL}>Caldris Flow Plus</a></b> (9,6/10), ideal für design- und wellnessbewusste Haushalte mit hartem Wasser.
            </li>
            <li>
              <b>Hello Klean Shower Head 2.0</b> (9,0/10), ideal für Beauty-Fans, die eine bekannte Marke bevorzugen.
            </li>
            <li>
              <b>Dupor Filterduschkopf</b> (8,4/10), ideal für preisbewusste Käufer, die solide Filterung suchen.
            </li>
          </ol>
        </div>
      </section>

      <ProductComparison productUrl={PRODUCT_URL} />

      {/* TRUST */}
      <section style={{ background: '#eef3f2' }}>
        <div className="wrap">
          <div className="section-tag">Warum's mein Favorit ist</div>
          <h2 style={{ marginBottom: '24px' }}>Kein Abo. Keine Wunderversprechen. Mehr im Karton.</h2>
          <div className="trust">
            <div className="tcard">
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="var(--teal)"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ display: 'block', margin: '0 auto' }}
                >
                  <path d="M3 7l9-4 9 4-9 4z" />
                  <path d="M3 12l9 4 9-4" />
                  <path d="M3 17l9 4 9-4" />
                </svg>
              </div>
              <h4>Doppelfilter-System</h4>
              <p>Holt Chlor, Kalk und feine Rückstände mehrstufig aus dem Wasser.</p>
            </div>
            <div className="tcard">
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="var(--teal)"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ display: 'block', margin: '0 auto' }}
                >
                  <circle cx="12" cy="12" r="3.2" />
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
                </svg>
              </div>
              <h4>Werkzeuglose Montage</h4>
              <p>In rund 2 Minuten ohne Werkzeug am Standardanschluss (G½) montiert.</p>
            </div>
            <div className="tcard">
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="var(--teal)"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ display: 'block', margin: '0 auto' }}
                >
                  <path d="M20 11a8 8 0 0 0-14-4L4 9" />
                  <path d="M4 4v5h5" />
                  <path d="M4 13a8 8 0 0 0 14 4l2-2" />
                  <path d="M20 20v-5h-5" />
                </svg>
              </div>
              <h4>Kein Abo-Zwang</h4>
              <p>Filter kaufst du nach, wenn du willst, nichts bucht automatisch ab.</p>
            </div>
            <div className="tcard">
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="var(--teal)"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ display: 'block', margin: '0 auto' }}
                >
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l.8-5.5A8 8 0 1 1 21 12z" />
                </svg>
              </div>
              <h4>Echter Support</h4>
              <p>Bei Problemen meldest du dich per E-Mail und bekommst echte Hilfe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap narrow faq">
          <div className="section-tag">Häufige Fragen</div>
          <h2 style={{ marginBottom: '22px' }}>Das wurde ich am häufigsten gefragt</h2>

          <details open>
            <summary>Bringt ein Filterduschkopf wirklich etwas, oder ist das nur Marketing?</summary>
            <div className="ans">
              Ja, aber ohne Zauberei. Ein guter Filter holt Restchlor, feine Partikel und Rückstände aus dem Duschwasser.
              Sehr viele Käufer berichten, dass sich Haut und Haare danach weicher anfühlen, gerade bei hartem Wasser.
              Heilversprechen gibt's von mir trotzdem keine: Es ist ein spürbares Komfort-Plus, kein Medikament.
            </div>
          </details>
          <details>
            <summary>Warum ist der Caldris Flow Plus mein Testsieger?</summary>
            <div className="ans">
              Weil für mich einfach das Gesamtpaket stimmt: 5-Stufen-Aktivkohlefilter, faire Folgekosten ohne Abo,
              werkzeuglose Montage, schönes Design und obendrein das Doppelfilter-System im Karton. Er
              bündelt die Stärken der anderen, ohne ihre typischen Macken wie das Zwangs-Abo.
            </div>
          </details>
          <details>
            <summary>Brauche ich für die Montage einen Handwerker?</summary>
            <div className="ans">
              Nein, das schaffst du selbst. Der Caldris passt auf gängige Standardanschlüsse (z. B. G½). Alten Duschkopf
              abschrauben, neuen dran, Wasser auf, laut Nutzerberichten in gut zwei Minuten erledigt, ganz ohne Werkzeug.
            </div>
          </details>
          <details>
            <summary>Wie oft muss der Filter gewechselt werden und was kostet das?</summary>
            <div className="ans">
              Je nach Wasser und wie oft du duschst, etwa alle 2-3 Monate. Den Ersatzfilter kaufst du nach, wenn er dran
              ist, kein Abo, das automatisch abbucht. So bleiben die Kosten überschaubar und du behältst die Kontrolle.
            </div>
          </details>
          <details>
            <summary>Was ist im Lieferumfang enthalten?</summary>
            <div className="ans">
              Außer dem Duschkopf bekommst du das <b>Doppelfilter-System</b>, du musst also nicht sofort Ersatz
              besorgen. Und beim Online-Kauf hast du als
              Verbraucher natürlich dein gesetzliches Widerrufsrecht; die Details stehen in der Widerrufsbelehrung im
              Caldris-Shop.
            </div>
          </details>
        </div>
      </section>

      {/* ABSCHLUSS-CTA */}
      <section style={{ paddingTop: '4px' }} id="final-cta">
        <div className="wrap narrow" style={{ textAlign: 'center' }}>
          <a className="btn cta-final" href={PRODUCT_URL}>
            Zum Testsieger: Caldris Flow Plus →
          </a>
          <ul className="cta-trust">
            <li>14 Tage Widerrufsrecht</li>
            <li>Sichere Zahlung</li>
            <li>Schneller Versand</li>
            <li>4,8 von 5 aus 345 Bewertungen</li>
          </ul>
        </div>
      </section>

      {/* AUTHOR BIO */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap narrow">
          <div className="author" style={{ alignItems: 'flex-start' }}>
            <div className="ava">
              <Image src="/images/lena.jpg" alt="Lena Brandt" width={48} height={48} />
            </div>
            <div>
              <span className="name">Über die Autorin · Lena Brandt</span>
              <p style={{ fontSize: '14px', margin: '8px 0 0' }}>
                Lena ist keine gelernte Sanitär-Fachfrau, sie hat sich nach eigenen Erfahrungen mit hartem Wasser,
                trockener Haut und strohigem Haar intensiv ins Thema gefiltertes Duschwasser eingelesen. Ihre Vergleiche
                sind Meta-Analysen: Sie testet nicht jedes Gerät selbst, sondern wertet öffentliche Bewertungen,
                Community-Berichte und Herstellerdaten aus, ehrlich und ohne medizinische Versprechen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLOSURE */}
      <section style={{ paddingTop: 0 }} id="transparenz">
        <div className="wrap narrow">
          <div className="disclosure">
            <h4>Transparenz-Hinweis · Anzeige</h4>
            <p>
              Dieser Beitrag ist eine werbliche Vergleichs- und Kaufberatung („Advertorial").{' '}
              <b>BadVergleich ist ein Angebot der ClearPath Ventures OÜ</b>, Betreiber dieses Portals und zugleich Hersteller
              des hier als „Testsieger" ausgezeichneten Caldris Flow Plus. <b>Caldris ist eine Marke der ClearPath Ventures
              OÜ.</b> Die Seite ist daher{' '}
              <b>kein unabhängiger Warentest</b>: Das eigene Produkt wird beworben, und über die Links zum Caldris-Shop
              entstehen dem Betreiber Umsätze.
            </p>
            <p>
              Die Bewertungen und Noten stellen unsere eigene redaktionelle Einschätzung dar, basierend auf öffentlich
              verfügbaren Hersteller-, Datenblatt- und Bewertungsinformationen (Stand Juni 2026). Es handelt sich nicht um
              ein behördliches oder unabhängiges Prüfsiegel. Preise, Ausstattung und Verfügbarkeit der genannten
              Wettbewerbsprodukte können sich jederzeit ändern. Genannte Marken sind Eigentum der jeweiligen Inhaber. Der
              Caldris Flow Plus ist kein Medizinprodukt und ersetzt keine Trinkwasseraufbereitung oder
              Legionellen-Filterung.
            </p>
          </div>
        </div>
      </section>

        </main>

        <aside className="shell-side">
          <div className="side-block">
            <details className="adnotice">
              <summary>Anzeige von Caldris Home · Hinweis</summary>
              <div className="adnotice-body">
                <p>
                  Hierbei handelt es sich um bezahlte Werbung für den Caldris Flow Plus von Caldris Home. Der Inhalt ist
                  ein redaktionell aufbereiteter Meta-Vergleich (kein neutrales, amtliches Testurteil); über die Links
                  können wir eine Provision verdienen.
                </p>
                <p>
                  Hello Klean, Dupor, Sanquell, Doyoo u. a. sind Marken der jeweiligen Inhaber; es besteht keine
                  Verbindung, Partnerschaft oder Empfehlung durch sie.
                </p>
              </div>
            </details>
          </div>

          <div className="side-block">
            <div className="wd-eyebrow">Aus dem Magazin</div>
            <div className="wd-card">
              <div className="wd-img photo">
                <Image src="/images/magazin.jpg" alt="Wasseroberfläche mit Wellenringen" fill sizes="320px" />
              </div>
              <div className="wd-cat">Ratgeber</div>
              <h3 className="wd-title">Hartes Wasser verstehen: wann ein Filter wirklich hilft</h3>
              <p className="wd-desc">
                Trockene Haut und strohiges Haar nach dem Duschen? Wir erklären, wann gefiltertes Wasser im Alltag
                wirklich einen Unterschied macht.
              </p>
            </div>
          </div>

          <div className="side-block">
            <div className="wd-eyebrow">Wie wir bewerten</div>
            <p className="wd-desc">
              Unsere Platzierungen sind ein Meta-Vergleich: Wir werten Fachtests, Herstellerangaben und dokumentierte
              Nutzererfahrungen aus und gewichten Filterleistung, Folgekosten, Wasserdruck, Installation und Lieferumfang.
              Eigene Labortests führen wir nicht durch.
            </p>
          </div>

          <div className="side-block sticky">
            <div className="wd-eyebrow">Testsieger im Detail</div>
            <div className="wd-card">
              <div className="wd-img">
                <Image src="/images/caldris-flow-plus.png" alt="Caldris Flow Plus" fill sizes="320px" />
              </div>
              <div className="wd-cat">Duschköpfe · Testsieger</div>
              <h3 className="wd-title">Caldris Flow Plus: der ausführliche Testsieger-Bericht</h3>
              <p className="wd-desc">
                Der Testsieger im Detail: alle Daten, Stärken und Schwächen des Caldris Flow Plus auf einen Blick.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <div className="wrap">
          <div className="frow">
            <span className="brand">BadVergleich</span>
          </div>
          <div className="frow">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/nutzungsbedingungen">Nutzungsbedingungen</Link>
            <a href="#transparenz">Transparenz / Werbung</a>
            <a href={PRODUCT_URL}>Zum Caldris-Shop ↗</a>
          </div>
          <p style={{ margin: 0, color: '#7f9591' }}>
            Betreiber: BadVergleich ist ein Angebot der ClearPath Ventures OÜ, Tornimäe tn 5, 10145 Tallinn (Estland).
            © 2026 BadVergleich · Anzeige / werblicher Vergleich. Genannte Marken sind Eigentum der jeweiligen Inhaber.
          </p>
        </div>
      </footer>

      <AnimatedBars />
      <StickyBuyBar href={PRODUCT_URL} />
    </>
  );
}
