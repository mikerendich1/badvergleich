import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../components/Hero';
import AnimatedBars from '../../components/AnimatedBars';
import DuschWcComparison from '../../components/DuschWcComparison';
import StickyBuyBar from '../../components/StickyBuyBar';

export const metadata = {
  title: 'Dusch-WC im Test 2026: die 5 besten Modelle im Vergleich | BadVergleich',
  description:
    'Dusch-WC gesucht? Wir vergleichen 5 Modelle (CaldrisWave Pro, Geberit AquaClean, TOTO Washlet, Villeroy & Boch ViClean, No-Name) nach Reinigung, Komfort, Preis und Installation. Ehrlich statt übertrieben.',
};

// Eigener Redirect für diese Vergleichsseite (siehe next.config.mjs) → separate Klick-Zuordnung.
const PRODUCT_URL = '/dusch-wc-sieger';

export default function Page() {
  return (
    <>
      <div className="anzeige-bar">
        <strong>Dusch-WC</strong> · Vergleich &amp; Kaufberatung 2026
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
          <a href="/">Startseite</a>
          <span className="sep">›</span>
          <span>Dusch-WC</span>
        </div>
      </div>

      <div className="shell">
        <main className="shell-main">
          <Hero title="Dusch-WC im Test 2026: meine 5 Favoriten im Vergleich" />

          {/* INTRO (Meta-Review im Vergleichsportal-Stil) */}
          <section style={{ padding: '24px 0 0' }}>
            <div className="wrap narrow">
              <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.7 }}>
                Trockenes Toilettenpapier reinigt nur oberflächlich, reizt bei empfindlicher Haut und fühlt sich nie
                wirklich frisch an. Ein <b>Dusch-WC</b> reinigt stattdessen sanft mit warmem Wasser, spürbar hygienischer
                und angenehmer. Und du brauchst dafür keine neue Toilette: Ein <b>Dusch-WC-Aufsatz</b> ersetzt einfach
                deinen alten WC-Sitz.
              </p>

              <p className="honest-note">
                <b>Ehrlich vorab:</b> Ein Dusch-WC ist kein Medizinprodukt und heilt keine Beschwerden. Es macht die
                Intimhygiene angenehmer und schonender als reines Papier, gerade bei empfindlicher oder gereizter Haut.
                Für den Betrieb brauchst du einen Wasseranschluss und eine Steckdose in der Nähe der Toilette.
              </p>

              <div className="author" style={{ margin: '18px 0' }}>
                <div className="ava">
                  <Image src="/images/lena.jpg" alt="Lena Brandt" width={48} height={48} />
                </div>
                <div>
                  <span className="name">Von Lena Brandt</span>
                  <small>Recherchiert aus persönlichem Interesse zu Bad, Hygiene &amp; Komfort</small>
                </div>
              </div>

              <p>
                Die Modelle unterscheiden sich stark, vom günstigen No-Name-Aufsatz bis zur Premium-Komplettanlage für
                mehrere tausend Euro. Ich habe die bekanntesten in einem <b>Meta-Vergleich</b> ausgewertet, aus
                Herstellerangaben, Datenblättern und echten Bewertungen (Trustpilot, Amazon, Foren), ohne eigene
                Labortests. Für mich zählt vor allem: Wie gut und angenehm reinigt es, wie komplett ist die Ausstattung
                und wie fair sind Preis und Montage.
              </p>
              <div className="inshort">
                <div className="lbl">Kurz gesagt</div>
                <p>
                  Mein Testsieger ist der <b>CaldrisWave Pro</b> (ab 329 €): das beste Gesamtpaket aus warmer
                  Wasserreinigung, voller Komfort-Ausstattung (Sitzheizung, Sofort-Warmwasser, Warmluft-Trocknung) und
                  werkzeugarmer Selbstmontage, ohne Preise wie bei den Premium-Marken. Ich bewerte ihn mit{' '}
                  <b>9,5/10</b>.
                </p>
                <a className="inshort-link" href={PRODUCT_URL}>Zum Anbieter →</a>
              </div>
            </div>
          </section>

          {/* TESTSIEGER (Verdict-Box) */}
          <section id="platz-1" style={{ paddingTop: '8px', scrollMarginTop: '80px' }}>
            <div className="wrap narrow">
              <div className="verdict">
                <div className="verdict-head">
                  <div className="vscore">
                    <b>9,5</b>
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
                    <div className="vname">CaldrisWave Pro</div>
                    <div className="vbrand">von Caldris Home</div>
                  </div>
                </div>
                <div className="vbars">
                  <div className="vbar">
                    <div className="vbar-top">
                      <span>Reinigung &amp; Hygiene</span>
                      <b>9,4/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="94%" />
                    </div>
                  </div>
                  <div className="vbar">
                    <div className="vbar-top">
                      <span>Komfort &amp; Ausstattung</span>
                      <b>9,5/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="95%" />
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
                      <span>Installation &amp; Alltag</span>
                      <b>9,5/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="95%" />
                    </div>
                  </div>
                  <div className="vbar">
                    <div className="vbar-top">
                      <span>Service &amp; Lieferumfang</span>
                      <b>9,3/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="93%" />
                    </div>
                  </div>
                </div>
                <a className="btn btn-block" href={PRODUCT_URL} style={{ marginTop: '18px' }}>
                  Zum Anbieter →
                </a>
              </div>

              <div className="vspecs">
                <div className="vstat">
                  <span className="k">Warmwasser</span>
                  <strong>Sofort-Heizung</strong>
                  <span className="s">Durchlaufprinzip statt kleinem Tank</span>
                </div>
                <div className="vstat">
                  <span className="k">Montage</span>
                  <strong>Selbst</strong>
                  <span className="s">auf vorhandene Toilette, kein Umbau</span>
                </div>
                <div className="vstat">
                  <span className="k">Ausstattung</span>
                  <strong>Voll</strong>
                  <span className="s">Sitzheizung, Föhn, Fernbedienung</span>
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
                  <b><a href={PRODUCT_URL}>CaldrisWave Pro</a></b> (9,5/10), ideal für alle, die volle Dusch-WC-Ausstattung
                  zum fairen Preis und ohne teuren Fachmann wollen.
                </li>
                <li>
                  <b>Geberit AquaClean</b> (8,8/10), ideal für Käufer, die eine bekannte Premium-Marke und Fachhandel
                  bevorzugen und das Budget dafür haben.
                </li>
                <li>
                  <b>TOTO Washlet</b> (8,4/10), ideal für Technik-Fans, die den Pionier aus Japan wollen.
                </li>
              </ol>
            </div>
          </section>

          {/* GEMEINSAMER VERGLEICH (5 Modelle + Tabelle) */}
          <DuschWcComparison productUrl={PRODUCT_URL} />

          {/* TRUST */}
          <section style={{ background: '#eef3f2' }}>
            <div className="wrap">
              <div className="section-tag">Warum's mein Favorit ist</div>
              <h2 style={{ marginBottom: '24px' }}>Voller Komfort. Fairer Preis. Kein Fachmann nötig.</h2>
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
                      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
                    </svg>
                  </div>
                  <h4>Warme Wasserreinigung</h4>
                  <p>Sanfte Reinigung mit einstellbarer Intensität, Gesäß- und separater Ladydusche.</p>
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
                      <path d="M4 14a8 8 0 0 1 16 0" />
                      <path d="M2 14h20M12 6V3M6.5 7.5 5 6M17.5 7.5 19 6" />
                    </svg>
                  </div>
                  <h4>Sofort-Warmwasser</h4>
                  <p>Durchlauf-Heizung liefert dauerhaft warmes Wasser, statt nach Sekunden kalt zu werden.</p>
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
                  <h4>Selbstmontage</h4>
                  <p>Ersetzt als Aufsatz den WC-Sitz auf der vorhandenen Toilette, kein neues WC, kein Umbau.</p>
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
                  <p>Bei Fragen meldest du dich per E-Mail und bekommst echte Hilfe, mit Gewährleistung.</p>
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
                <summary>Was ist der Unterschied zwischen einem Dusch-WC-Aufsatz und einem Komplett-Dusch-WC?</summary>
                <div className="ans">
                  Ein Aufsatz ersetzt nur deinen WC-Sitz auf der vorhandenen Toilette, du brauchst also kein neues WC und
                  keinen großen Umbau. Ein Komplett-Dusch-WC ist eine ganze Keramik samt Technik und wird meist fest
                  installiert, das ist deutlich teurer und aufwändiger. Der CaldrisWave Pro ist ein Aufsatz.
                </div>
              </details>
              <details>
                <summary>Passt der Aufsatz auf meine Toilette?</summary>
                <div className="ans">
                  In den meisten Fällen ja. Wichtig sind drei Maße: der Lochabstand der Befestigung (passend bei ca.
                  11–19 cm), die Breite der Schüssel (mind. ~35 cm) und die Länge (ab ~50 cm). Außerdem brauchst du einen
                  Wasseranschluss und eine Steckdose in der Nähe. Miss vor der Bestellung kurz nach, die genauen
                  Produktmaße stehen im Caldris-Shop.
                </div>
              </details>
              <details>
                <summary>Warum ist der CaldrisWave Pro mein Testsieger?</summary>
                <div className="ans">
                  Weil das Gesamtpaket stimmt: warme Wasserreinigung, Sitzheizung, Sofort-Warmwasser, Warmluft-Trocknung
                  und Fernbedienung, alles zum fairen Preis von 329 €. Er bietet die Ausstattung der Premium-Marken, ohne
                  ihre vierstelligen Preise und ohne teure Fachmontage.
                </div>
              </details>
              <details>
                <summary>Brauche ich für die Montage einen Handwerker?</summary>
                <div className="ans">
                  Nein, das schaffst du in der Regel selbst. Alten WC-Sitz ab, Aufsatz drauf, an Wasseranschluss und
                  Steckdose anschließen, fertig. Anders als bei manchen Premium-Komplettanlagen ist kein Fachbetrieb
                  nötig, solange Wasseranschluss und Steckdose vorhanden sind.
                </div>
              </details>
              <details>
                <summary>Warum ist Sofort-Warmwasser besser als ein Tank?</summary>
                <div className="ans">
                  Viele günstige Aufsätze erwärmen das Wasser in einem kleinen Tank, der nach ein paar Sekunden leer und
                  das Wasser dann kalt ist. Die Sofort-Heizung im Durchlaufprinzip erwärmt das Wasser laufend, es bleibt
                  also durchgehend angenehm warm.
                </div>
              </details>
              <details>
                <summary>Ist ein Dusch-WC hygienischer als Toilettenpapier?</summary>
                <div className="ans">
                  Wasser reinigt sanfter und gründlicher als trockenes Papier, das viele als angenehmer und sauberer
                  empfinden, gerade bei empfindlicher Haut. Die Düse des CaldrisWave Pro reinigt sich vor und nach der
                  Nutzung selbst. Ein Heilversprechen ist das nicht, aber ein spürbares Komfort- und Hygiene-Plus.
                </div>
              </details>
            </div>
          </section>

          {/* ABSCHLUSS-CTA */}
          <section style={{ paddingTop: '4px' }} id="final-cta">
            <div className="wrap narrow" style={{ textAlign: 'center' }}>
              <a className="btn cta-final" href={PRODUCT_URL}>
                Zum Testsieger: CaldrisWave Pro →
              </a>
              <ul className="cta-trust">
                <li>14 Tage Widerrufsrecht</li>
                <li>Sichere Zahlung</li>
                <li>Kostenloser Versand</li>
                <li>Einfache Rückgabe</li>
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
                    Lena ist keine gelernte Sanitär-Fachfrau, sie hat sich aus persönlichem Interesse an mehr Komfort und
                    Hygiene im Bad intensiv ins Thema Dusch-WC eingelesen. Ihre Vergleiche sind Meta-Analysen: Sie testet
                    nicht jedes Gerät selbst, sondern wertet öffentliche Bewertungen, Community-Berichte und
                    Herstellerdaten aus, ehrlich und ohne medizinische Versprechen.
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
                  <b>BadVergleich ist ein Angebot der ClearPath Ventures OÜ</b>, Betreiber dieses Portals und zugleich
                  Hersteller des hier als „Testsieger" ausgezeichneten CaldrisWave Pro. <b>Caldris ist eine Marke der
                  ClearPath Ventures OÜ.</b> Die Seite ist daher <b>kein unabhängiger Warentest</b>: Das eigene Produkt
                  wird beworben, und über die Links zum Caldris-Shop entstehen dem Betreiber Umsätze.
                </p>
                <p>
                  Ein Dusch-WC ist <b>kein Medizinprodukt</b> und ersetzt keine ärztliche Behandlung. Es macht die
                  Intimhygiene angenehmer und schonender als reines Papier. Für den Betrieb sind ein Wasseranschluss und
                  eine Steckdose in der Nähe der Toilette erforderlich; die Passform hängt von den Maßen deiner Toilette
                  ab.
                </p>
                <p>
                  Die Bewertungen und Noten stellen unsere eigene redaktionelle Einschätzung dar, basierend auf öffentlich
                  verfügbaren Hersteller-, Datenblatt- und Bewertungsinformationen (Stand Juli 2026). Es handelt sich
                  nicht um ein behördliches oder unabhängiges Prüfsiegel. Preise, Ausstattung und Verfügbarkeit der
                  genannten Wettbewerbsprodukte können sich jederzeit ändern und variieren je nach Modell und Händler.
                  Genannte Marken (Geberit, TOTO, Villeroy &amp; Boch u. a.) sind Eigentum der jeweiligen Inhaber; es
                  besteht keine Verbindung, Partnerschaft oder Empfehlung durch sie.
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
                  Hierbei handelt es sich um bezahlte Werbung für den CaldrisWave Pro von Caldris Home. Der Inhalt ist
                  ein redaktionell aufbereiteter Meta-Vergleich (kein neutrales, amtliches Testurteil); über die Links
                  können wir eine Provision verdienen.
                </p>
                <p>
                  Geberit, TOTO, Villeroy &amp; Boch u. a. sind Marken der jeweiligen Inhaber; es besteht keine
                  Verbindung, Partnerschaft oder Empfehlung durch sie.
                </p>
              </div>
            </details>
          </div>

          <div className="side-block">
            <div className="wd-eyebrow">Aus dem Magazin</div>
            <div className="wd-card">
              <div className="wd-img photo">
                <Image src="/images/magazin.jpg" alt="Helles, modernes Badezimmer" fill sizes="320px" />
              </div>
              <div className="wd-cat">Ratgeber</div>
              <h3 className="wd-title">Dusch-WC-Aufsatz oder Komplettanlage: was lohnt sich?</h3>
              <p className="wd-desc">
                Aufsatz nachrüsten oder gleich eine ganze Anlage einbauen? Wir erklären, wann sich welcher Weg wirklich
                lohnt, und worauf du bei der Passform achten musst.
              </p>
            </div>
          </div>

          <div className="side-block">
            <div className="wd-eyebrow">Wie wir bewerten</div>
            <p className="wd-desc">
              Unsere Platzierungen sind ein Meta-Vergleich: Wir werten Fachtests, Herstellerangaben und dokumentierte
              Nutzererfahrungen aus und gewichten Reinigung, Komfort, Preis-Leistung, Installation und Lieferumfang.
              Eigene Labortests führen wir nicht durch.
            </p>
          </div>

          <div className="side-block sticky">
            <div className="wd-eyebrow">Testsieger im Detail</div>
            <div className="wd-card">
              <div className="wd-img">
                <Image src="/images/caldriswave-pro.jpg" alt="CaldrisWave Pro Dusch-WC-Aufsatz" fill sizes="320px" />
              </div>
              <div className="wd-cat">Dusch-WC · Testsieger</div>
              <h3 className="wd-title">CaldrisWave Pro: der ausführliche Testsieger-Bericht</h3>
              <p className="wd-desc">
                Der Testsieger im Detail: alle Daten, Stärken und Schwächen des CaldrisWave Pro auf einen Blick.
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
      <StickyBuyBar href={PRODUCT_URL} name="CaldrisWave Pro" price="329 €" />
    </>
  );
}
