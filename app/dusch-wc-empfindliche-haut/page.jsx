import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../components/Hero';
import AnimatedBars from '../../components/AnimatedBars';
import DuschWcComparison from '../../components/DuschWcComparison';
import StickyBuyBar from '../../components/StickyBuyBar';

export const metadata = {
  title: 'Dusch-WC bei Hämorrhoiden & empfindlicher Haut 2026: sanfte Reinigung mit Wasser im Vergleich | BadVergleich',
  description:
    'Gereizte, empfindliche Haut im Intimbereich? Wir vergleichen 5 Dusch-WCs nach sanfter, warmer Wasserreinigung statt kratzendem Papier. Ehrlich statt übertrieben, ohne Heilversprechen.',
};

const PRODUCT_URL = '/dusch-wc-haut-sieger';

export default function Page() {
  return (
    <>
      <div className="anzeige-bar">
        <strong>Dusch-WC bei empfindlicher Haut</strong> · Vergleich &amp; Kaufberatung 2026
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
          <span>Bei empfindlicher Haut</span>
        </div>
      </div>

      <div className="shell">
        <main className="shell-main">
          <Hero title="Dusch-WC bei Hämorrhoiden & empfindlicher Haut: sanfte Reinigung mit Wasser statt Papier" />

          {/* INTRO (zielgruppenspezifisch: empfindliche Haut) */}
          <section style={{ padding: '24px 0 0' }}>
            <div className="wrap narrow">
              <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.7 }}>
                Wenn die Haut im Intimbereich gereizt oder empfindlich ist, kann trockenes Toilettenpapier unangenehm
                sein: Es reibt und kann die Reizung verstärken. Viele empfinden die <b>sanfte Reinigung mit warmem
                Wasser</b> eines <b>Dusch-WCs</b> als deutlich angenehmer, weil sie ohne Reiben auskommt und sich der
                Wasserdruck weich einstellen lässt.
              </p>

              <p className="honest-note">
                <b>Wichtig vorab:</b> Ein Dusch-WC ist <b>kein Medizinprodukt</b> und <b>keine Behandlung</b> für
                Hämorrhoiden, Ekzeme oder andere Beschwerden. Es kann die tägliche Reinigung angenehmer und schonender
                machen als Papier, mehr verspreche ich ausdrücklich nicht. Bei anhaltenden Beschwerden, Schmerzen oder
                Blutungen ist der Weg zur Ärztin oder zum Arzt der richtige, nicht der zum Dusch-WC.
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
                Datenblättern und echten Bewertungen. Bei empfindlicher Haut zählt für mich vor allem: eine <b>sanfte,
                fein einstellbare Wasserreinigung</b>, <b>warmes Wasser</b> statt kaltem Schwall und ein <b>weicher,
                regelbarer Druck</b>, der nicht zusätzlich reizt.
              </p>
              <div className="inshort">
                <div className="lbl">Kurz gesagt</div>
                <p>
                  Mein Favorit ist der <b>CaldrisWave Pro</b> (ab 329 €): warme Wasserreinigung mit fein einstellbarer
                  Intensität und Temperatur, weicher Druck und Warmluft-Trocknung, damit man ganz auf reibendes Papier
                  verzichten kann. Ich bewerte ihn mit <b>9,5/10</b>.
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
                      <span>Sanfte Reinigung</span>
                      <b>9,5/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="95%" />
                    </div>
                  </div>
                  <div className="vbar">
                    <div className="vbar-top">
                      <span>Warmes Wasser &amp; weicher Druck</span>
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
                  <span className="k">Reinigung</span>
                  <strong>Nur Wasser</strong>
                  <span className="s">ohne reibendes Papier</span>
                </div>
                <div className="vstat">
                  <span className="k">Druck</span>
                  <strong>Weich regelbar</strong>
                  <span className="s">fein einstellbare Intensität</span>
                </div>
                <div className="vstat">
                  <span className="k">Wasser</span>
                  <strong>Warm</strong>
                  <span className="s">Temperatur einstellbar</span>
                </div>
              </div>
            </div>
          </section>

          {/* TOP 3 */}
          <section style={{ paddingTop: '8px' }}>
            <div className="wrap narrow">
              <h2 style={{ marginBottom: '10px' }}>Die Top 3 bei empfindlicher Haut</h2>
              <p>Bevor es zu den ausführlichen Einzelbewertungen geht, hier die drei besten Modelle in Kürze:</p>
              <ol className="top3">
                <li>
                  <b><a href={PRODUCT_URL}>CaldrisWave Pro</a></b> (9,5/10), ideal dank fein einstellbarer, sanfter
                  Wasserreinigung mit warmem Wasser und weichem Druck.
                </li>
                <li>
                  <b>Geberit AquaClean</b> (8,8/10), sehr sanfte Duschtechnik, aber deutlich teurer.
                </li>
                <li>
                  <b>TOTO Washlet</b> (8,4/10), fein dosierte Reinigung, in Deutschland aber teurer und beim Service
                  weniger zugänglich.
                </li>
              </ol>
            </div>
          </section>

          {/* GEMEINSAMER VERGLEICH (5 Modelle + Tabelle) mit Hinweisen zu empfindlicher Haut */}
          <DuschWcComparison
            productUrl={PRODUCT_URL}
            audienceLabel="Bei empfindlicher Haut"
            audienceNotes={{
              cd: 'Wasserdruck, Temperatur und Düsenposition lassen sich fein einstellen, so bleibt die Reinigung angenehm sanft und man kommt ganz ohne reibendes Papier aus. Kein Heilversprechen, aber für viele mit empfindlicher Haut spürbar angenehmer im Alltag.',
              gb: 'Sehr sanfte, ausgereifte Duschtechnik, die gut zu empfindlicher Haut passt, aber der hohe Preis steht in keinem Verhältnis zum Alltagsnutzen.',
              tt: 'Fein dosierte, weiche Reinigung, in Deutschland aber teurer und beim Service umständlicher.',
              vb: 'Hochwertige, gleichmäßige Reinigung, jedoch teuer und über den Fachhandel. Kein spürbarer Vorteil gegenüber einem gut einstellbaren Aufsatz.',
              nn: 'Günstig, aber Tank-Warmwasser wird schnell kalt und der Druck ist oft grob geregelt, gerade bei gereizter Haut ist das eher unangenehm.',
            }}
          />

          {/* TRUST (zielgruppenspezifisch) */}
          <section style={{ background: '#eef3f2' }}>
            <div className="wrap">
              <div className="section-tag">Warum's bei empfindlicher Haut mein Favorit ist</div>
              <h2 style={{ marginBottom: '24px' }}>Sanft mit Wasser. Warm. Fein einstellbar.</h2>
              <div className="trust">
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
                    </svg>
                  </div>
                  <h4>Sanfte Wasserreinigung</h4>
                  <p>Reinigung mit warmem Wasser statt Reiben, angenehm für empfindliche und gereizte Haut.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M4 14a8 8 0 0 1 16 0" />
                      <path d="M2 14h20M12 6V3M6.5 7.5 5 6M17.5 7.5 19 6" />
                    </svg>
                  </div>
                  <h4>Warmes Wasser</h4>
                  <p>Die Sofort-Heizung liefert durchgehend warmes Wasser, kein unangenehmer kalter Schwall.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M4 12h4M16 12h4" />
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 4v2M12 18v2" />
                    </svg>
                  </div>
                  <h4>Weich einstellbarer Druck</h4>
                  <p>Intensität und Position lassen sich so fein regeln, dass nichts zusätzlich reizt.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M3 12h4l2-4 3 8 2-5 2 2h5" />
                    </svg>
                  </div>
                  <h4>Ohne reibendes Papier</h4>
                  <p>Mit Warmluft-Trocknung kommst du ganz ohne kratzendes Toilettenpapier aus.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ (zielgruppenspezifisch) */}
          <section>
            <div className="wrap narrow faq">
              <div className="section-tag">Häufige Fragen</div>
              <h2 style={{ marginBottom: '22px' }}>Empfindliche Haut &amp; Dusch-WC: was oft gefragt wird</h2>

              <details open>
                <summary>Hilft ein Dusch-WC bei Hämorrhoiden?</summary>
                <div className="ans">
                  Ein Dusch-WC ist keine Behandlung und heilt keine Hämorrhoiden. Viele Betroffene empfinden die sanfte
                  Reinigung mit warmem Wasser aber als angenehmer und weniger reizend als trockenes Papier. Bei
                  Beschwerden, Schmerzen oder Blutungen solltest du ärztlichen Rat einholen, das ersetzt kein Gerät.
                </div>
              </details>
              <details>
                <summary>Ist warmes Wasser wirklich schonender als Papier?</summary>
                <div className="ans">
                  Für viele ja. Trockenes Papier reibt, warmes Wasser reinigt berührungsarm. Gerade bei gereizter oder
                  empfindlicher Haut wird das oft als deutlich angenehmer beschrieben. Es ist ein Komfortthema, kein
                  medizinisches Versprechen.
                </div>
              </details>
              <details>
                <summary>Kann ich Druck und Temperatur anpassen?</summary>
                <div className="ans">
                  Ja. Beim CaldrisWave Pro lassen sich Wasserdruck, Temperatur und Düsenposition fein einstellen. So
                  findest du eine sanfte Einstellung, die sich angenehm anfühlt und nicht zusätzlich reizt.
                </div>
              </details>
              <details>
                <summary>Ersetzt ein Dusch-WC eine ärztliche Behandlung?</summary>
                <div className="ans">
                  Nein, ganz klar nicht. Ein Dusch-WC ist ein Komfort- und Hygieneprodukt, kein Medizinprodukt. Bei
                  anhaltenden oder stärker werdenden Beschwerden ist der Gang zur Ärztin oder zum Arzt der richtige Weg.
                </div>
              </details>
              <details>
                <summary>Ist die Reinigung mit Wasser hygienisch?</summary>
                <div className="ans">
                  Ja. Die Reinigung erfolgt berührungslos mit frischem Wasser, und die Düse des CaldrisWave Pro spült
                  sich vor und nach jeder Nutzung selbst. Anschließend trocknet die Warmluft-Funktion, ganz ohne Reiben.
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
                    Lena ist keine gelernte Sanitär-Fachfrau und keine medizinische Fachkraft, sie hat sich aus
                    persönlichem Interesse an mehr Komfort und Hygiene im Bad intensiv ins Thema Dusch-WC eingelesen. Ihre
                    Vergleiche sind Meta-Analysen öffentlicher Bewertungen und Herstellerdaten, ehrlich und ausdrücklich
                    ohne medizinische Versprechen.
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
                  Ein Dusch-WC ist <b>kein Medizinprodukt</b> und <b>keine Behandlung</b> für Hämorrhoiden, Hautreizungen
                  oder andere Beschwerden. Es kann die tägliche Reinigung angenehmer machen, ersetzt aber keine
                  ärztliche Abklärung. Bei anhaltenden Beschwerden, Schmerzen oder Blutungen bitte ärztlichen Rat
                  einholen. Für den Betrieb sind ein Wasseranschluss und eine Steckdose nötig.
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
                  redaktionell aufbereiteter Meta-Vergleich (kein neutrales, amtliches Testurteil, keine medizinische
                  Beratung); über die Links können wir eine Provision verdienen.
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
              <h3 className="wd-title">Sanfte Intimhygiene: warum Wasser oft angenehmer ist als Papier</h3>
              <p className="wd-desc">
                Reiben vermeiden, sanft reinigen: Wir erklären, warum viele mit empfindlicher Haut warmes Wasser als
                angenehmer empfinden, ganz ohne Heilversprechen.
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
