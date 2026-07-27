import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../components/Hero';
import AnimatedBars from '../../components/AnimatedBars';
import DuschWcComparison from '../../components/DuschWcComparison';
import StickyBuyBar from '../../components/StickyBuyBar';

export const metadata = {
  title: 'Dusch-WC für Mieter 2026: die besten Aufsätze ohne Umbau und rückbaubar | BadVergleich',
  description:
    'Dusch-WC als Mieter nachrüsten? Wir vergleichen 5 Modelle nach Aufsätzen ohne baulichen Umbau, rückbaubar und beim Umzug mitnehmbar. Ehrlich statt übertrieben.',
};

const PRODUCT_URL = '/dusch-wc-mieter-sieger';

export default function Page() {
  return (
    <>
      <div className="anzeige-bar">
        <strong>Dusch-WC für Mieter</strong> · Vergleich &amp; Kaufberatung 2026
      </div>

      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="brand">
            Bad<span>Vergleich</span>
            <em className="tld">.de</em>
          </div>
          <div className="navsearch" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
          <a href="/dusch-wc">Dusch-WC</a>
          <span className="sep">›</span>
          <span>Für Mieter</span>
        </div>
      </div>

      <div className="shell">
        <main className="shell-main">
          <Hero title="Dusch-WC für Mieter: die besten Aufsätze ohne Umbau und rückbaubar" />

          {/* INTRO (zielgruppenspezifisch: Mieter) */}
          <section style={{ padding: '24px 0 0' }}>
            <div className="wrap narrow">
              <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.7 }}>
                Ein Dusch-WC in der Mietwohnung? Das geht einfacher, als viele denken. Du brauchst dafür weder ein neues
                WC noch einen Eingriff in die Bausubstanz. Ein <b>Dusch-WC-Aufsatz</b> ersetzt nur den vorhandenen
                WC-Sitz, ist <b>rückstandslos rückbaubar</b> und wandert beim Umzug einfach mit in die nächste Wohnung.
              </p>

              <p className="honest-note">
                <b>Ehrlich vorab:</b> Ein Aufsatz ist kein baulicher Umbau. Für die Wasserzuleitung wird meist ein
                kleines T-Stück am vorhandenen Eckventil gesetzt, das sich später wieder entfernen lässt; eine Steckdose
                in der Nähe wird ebenfalls gebraucht. Solche rückbaubaren Maßnahmen sind in der Regel unproblematisch, im
                Zweifel informierst du deinen Vermieter kurz vorab.
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
                Ich habe die bekanntesten Dusch-WCs in einem <b>Meta-Vergleich</b> ausgewertet, aus Herstellerangaben,
                Datenblättern und echten Bewertungen. Für Mieter zählt für mich vor allem: <b>kein baulicher Umbau</b>,{' '}
                <b>rückbaubar ohne Schäden</b>, <b>beim Umzug mitnehmbar</b> und ein Preis, den man auch ohne
                Eigentümer-Perspektive gern investiert.
              </p>
              <div className="inshort">
                <div className="lbl">Kurz gesagt</div>
                <p>
                  Mein Favorit ist der <b>CaldrisWave Pro</b> (ab 329 €): ein voll ausgestatteter Aufsatz, der nur den
                  WC-Sitz ersetzt, rückbaubar ist und mitgenommen werden kann, ohne teure Premium-Komplettanlage. Ich
                  bewerte ihn mit <b>9,5/10</b>.
                </p>
                <a className="inshort-link" href={PRODUCT_URL}>Zum Anbieter →</a>
              </div>
            </div>
          </section>

          {/* EMPFEHLUNG (Verdict-Box) */}
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
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
                      </svg>
                      Unsere Empfehlung 2026
                    </span>
                    <div className="vname">CaldrisWave Pro</div>
                    <div className="vbrand">von Caldris Home</div>
                  </div>
                </div>
                <div className="vbars">
                  <div className="vbar">
                    <div className="vbar-top">
                      <span>Rückbaubar &amp; mietfreundlich</span>
                      <b>9,6/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="96%" />
                    </div>
                  </div>
                  <div className="vbar">
                    <div className="vbar-top">
                      <span>Reinigung &amp; Komfort</span>
                      <b>9,4/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="94%" />
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
                      <span>Installation ohne Umbau</span>
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
                  <span className="k">Umbau</span>
                  <strong>Keiner</strong>
                  <span className="s">nur der WC-Sitz wird getauscht</span>
                </div>
                <div className="vstat">
                  <span className="k">Rückbau</span>
                  <strong>Reversibel</strong>
                  <span className="s">alten Sitz aufheben &amp; zurück</span>
                </div>
                <div className="vstat">
                  <span className="k">Umzug</span>
                  <strong>Mitnehmbar</strong>
                  <span className="s">wandert in die nächste Wohnung</span>
                </div>
              </div>
            </div>
          </section>

          {/* TOP 3 */}
          <section style={{ paddingTop: '8px' }}>
            <div className="wrap narrow">
              <h2 style={{ marginBottom: '10px' }}>Die Top 3 für Mieterinnen und Mieter</h2>
              <p>Bevor es zu den ausführlichen Einzelbewertungen geht, hier die drei besten Modelle in Kürze:</p>
              <ol className="top3">
                <li>
                  <b><a href={PRODUCT_URL}>CaldrisWave Pro</a></b> (9,5/10), ideal weil rückbaubar, mitnehmbar und ohne
                  baulichen Umbau montiert.
                </li>
                <li>
                  <b>Geberit AquaClean</b> (8,8/10), sehr gut, aber als Komplettanlage oft mit festem Einbau und daher
                  für Mieter weniger praktisch.
                </li>
                <li>
                  <b>TOTO Washlet</b> (8,4/10), ebenfalls ein Aufsatz, in Deutschland aber teurer und beim Service
                  weniger zugänglich.
                </li>
              </ol>
            </div>
          </section>

          {/* GEMEINSAMER VERGLEICH (5 Modelle + Tabelle) mit Mieter-Hinweisen */}
          <DuschWcComparison
            productUrl={PRODUCT_URL}
            audienceLabel="Für Mieter"
            audienceNotes={{
              cd: 'Als Aufsatz ersetzt er nur den WC-Sitz, kein baulicher Umbau, rückstandslos rückbaubar und beim Umzug mitnehmbar. Genau das, was man als Mieter braucht: vollwertiges Dusch-WC ohne Eingriff in fremdes Eigentum.',
              gb: 'Sehr gut, aber häufig als fest installierte Komplettanlage gedacht. Für Mieter ist das mit Einbau und Rückbau deutlich aufwändiger und teurer.',
              tt: 'Ebenfalls ein Aufsatz und damit grundsätzlich mietfreundlich, in Deutschland aber teurer und beim Anschluss/Service umständlicher.',
              vb: 'Aufsatz-Lösung, aber teuer und über den Fachhandel. Für eine rückbaubare Mieter-Nachrüstung zahlt man hier viel fürs Markenlogo.',
              nn: 'Günstig und rückbaubar, aber unklare Ersatzteile und schwacher Service sind ärgerlich, wenn beim Umzug oder Defekt niemand hilft.',
            }}
          />

          {/* TRUST (zielgruppenspezifisch) */}
          <section style={{ background: '#eef3f2' }}>
            <div className="wrap">
              <div className="section-tag">Warum's für Mieter mein Favorit ist</div>
              <h2 style={{ marginBottom: '24px' }}>Kein Umbau. Rückbaubar. Umzugssicher.</h2>
              <div className="trust">
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M3 11l9-7 9 7" />
                      <path d="M5 10v10h14V10" />
                      <path d="M9 20v-6h6v6" />
                    </svg>
                  </div>
                  <h4>Kein baulicher Umbau</h4>
                  <p>Der Aufsatz ersetzt nur den WC-Sitz, kein Eingriff in Keramik oder Bausubstanz.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M20 11a8 8 0 0 0-14-4L4 9" />
                      <path d="M4 4v5h5" />
                      <path d="M4 13a8 8 0 0 0 14 4l2-2" />
                      <path d="M20 20v-5h-5" />
                    </svg>
                  </div>
                  <h4>Rückstandslos rückbaubar</h4>
                  <p>Alten Sitz aufheben, beim Auszug zurücktauschen, alles ohne bleibende Spuren.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <rect x="2" y="7" width="13" height="10" rx="1.5" />
                      <path d="M15 10h4l3 3v4h-7z" />
                      <circle cx="6" cy="18" r="1.8" />
                      <circle cx="18" cy="18" r="1.8" />
                    </svg>
                  </div>
                  <h4>Beim Umzug mitnehmen</h4>
                  <p>Dein Dusch-WC wandert einfach mit in die nächste Wohnung.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <circle cx="12" cy="12" r="3.2" />
                      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
                    </svg>
                  </div>
                  <h4>Schnell selbst montiert</h4>
                  <p>Nur Wasseranschluss und Steckdose nötig, kein Handwerkertermin, kein Bauantrag.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ (zielgruppenspezifisch) */}
          <section>
            <div className="wrap narrow faq">
              <div className="section-tag">Häufige Fragen</div>
              <h2 style={{ marginBottom: '22px' }}>Dusch-WC zur Miete: was oft gefragt wird</h2>

              <details open>
                <summary>Darf ich als Mieter ein Dusch-WC installieren?</summary>
                <div className="ans">
                  Ein Aufsatz ersetzt nur den WC-Sitz und ist rückbaubar, das ist in aller Regel unproblematisch, weil du
                  nicht in die Bausubstanz eingreifst. Da für die Wasserzuleitung meist ein kleines T-Stück am Eckventil
                  gesetzt wird, informierst du deinen Vermieter im Zweifel kurz vorab. Rechtsberatung ersetzt dieser
                  Hinweis nicht.
                </div>
              </details>
              <details>
                <summary>Muss ich den Vermieter um Erlaubnis fragen?</summary>
                <div className="ans">
                  Für einen rückbaubaren Aufsatz ist meist keine Genehmigung nötig, anders als beim Austausch der ganzen
                  Toilette. Ein kurzer Hinweis an den Vermieter schafft trotzdem Klarheit und beugt Missverständnissen
                  beim Auszug vor.
                </div>
              </details>
              <details>
                <summary>Kann ich das Dusch-WC beim Auszug mitnehmen?</summary>
                <div className="ans">
                  Ja. Du entfernst den Aufsatz, montierst den ursprünglichen WC-Sitz wieder und nimmst dein Dusch-WC in
                  die neue Wohnung mit. Deshalb lohnt sich die Anschaffung gerade zur Miete.
                </div>
              </details>
              <details>
                <summary>Hinterlässt der Einbau Schäden?</summary>
                <div className="ans">
                  Nein. Es werden dieselben Befestigungslöcher wie beim normalen WC-Sitz genutzt, und die Wasseranbindung
                  über das T-Stück am Eckventil lässt sich wieder entfernen. Nach dem Rückbau bleibt die Toilette im
                  Originalzustand.
                </div>
              </details>
              <details>
                <summary>Was brauche ich dafür in der Wohnung?</summary>
                <div className="ans">
                  Einen Wasseranschluss (das übliche Eckventil an der Toilette) und eine Steckdose in der Nähe. Beides ist
                  in den meisten Bädern vorhanden. Zusätzlich passen sollten Lochabstand (ca. 11–19 cm), Breite (mind.
                  ~35 cm) und Länge (ab ~50 cm) der Schüssel.
                </div>
              </details>
            </div>
          </section>

          {/* ABSCHLUSS-CTA */}
          <section style={{ paddingTop: '4px' }} id="final-cta">
            <div className="wrap narrow" style={{ textAlign: 'center' }}>
              <a className="btn cta-final" href={PRODUCT_URL}>
                Zum Favoriten: CaldrisWave Pro →
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
                  Hersteller des hier empfohlenen CaldrisWave Pro. <b>Caldris ist eine Marke der ClearPath Ventures OÜ.</b>{' '}
                  Die Seite ist daher <b>kein unabhängiger Warentest</b>: Das eigene Produkt wird beworben, und über die
                  Links zum Caldris-Shop entstehen dem Betreiber Umsätze.
                </p>
                <p>
                  Ein Dusch-WC-Aufsatz ist eine <b>rückbaubare</b> Nachrüstung und kein baulicher Umbau. Dieser Hinweis
                  ist <b>keine Rechtsberatung</b>: Mietverträge können abweichende Regelungen enthalten, im Zweifel den
                  Vermieter informieren. Für den Betrieb sind ein Wasseranschluss und eine Steckdose nötig.
                </p>
                <p>
                  Die Bewertungen und Noten stellen unsere eigene redaktionelle Einschätzung dar, basierend auf öffentlich
                  verfügbaren Hersteller-, Datenblatt- und Bewertungsinformationen (Stand Juli 2026). Preise, Ausstattung
                  und Verfügbarkeit der genannten Wettbewerbsprodukte können sich jederzeit ändern und variieren je nach
                  Modell und Händler. Genannte Marken (Geberit, TOTO, Villeroy &amp; Boch u. a.) sind Eigentum der
                  jeweiligen Inhaber; es besteht keine Verbindung, Partnerschaft oder Empfehlung durch sie.
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
                  Hierbei handelt es sich um bezahlte Werbung für den CaldrisWave Pro von Caldris Home. Der Inhalt ist ein
                  redaktionell aufbereiteter Meta-Vergleich (kein neutrales, amtliches Testurteil); über die Links können
                  wir eine Provision verdienen.
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
              <h3 className="wd-title">Nachrüsten zur Miete: was erlaubt ist und was nicht</h3>
              <p className="wd-desc">
                Rückbaubar statt fest verbaut: Wir erklären, wie du dein Bad als Mieter aufwertest, ohne Ärger beim
                Auszug.
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
            <div className="wd-eyebrow">Empfehlung im Detail</div>
            <div className="wd-card">
              <div className="wd-img">
                <Image src="/images/caldriswave-pro.jpg" alt="CaldrisWave Pro Dusch-WC-Aufsatz" fill sizes="320px" />
              </div>
              <div className="wd-cat">Dusch-WC · Empfehlung</div>
              <h3 className="wd-title">CaldrisWave Pro: der ausführliche Bericht</h3>
              <p className="wd-desc">
                Die Empfehlung im Detail: alle Daten, Stärken und Schwächen des CaldrisWave Pro auf einen Blick.
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
