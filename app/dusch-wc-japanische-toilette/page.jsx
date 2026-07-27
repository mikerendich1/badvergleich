import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../components/Hero';
import AnimatedBars from '../../components/AnimatedBars';
import DuschWcComparison from '../../components/DuschWcComparison';
import StickyBuyBar from '../../components/StickyBuyBar';

export const metadata = {
  title: 'Japanisches Dusch-WC im Test 2026: das Washlet-Gefühl fürs eigene Bad | BadVergleich',
  description:
    'Japanische Toilette (Washlet) für zu Hause? Wir vergleichen 5 Dusch-WCs nach Reinigung, Komfort und Anschluss in Deutschland, damit du das Japan-Gefühl ohne teuren Import bekommst. Ehrlich statt übertrieben.',
};

const PRODUCT_URL = '/dusch-wc-japan-sieger';

export default function Page() {
  return (
    <>
      <div className="anzeige-bar">
        <strong>Japanisches Dusch-WC (Washlet)</strong> · Vergleich &amp; Kaufberatung 2026
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
          <span>Japanische Toilette</span>
        </div>
      </div>

      <div className="shell">
        <main className="shell-main">
          <Hero title="Japanisches Dusch-WC: das Washlet-Gefühl fürs eigene Bad, ohne teuren Import" />

          {/* INTRO (zielgruppenspezifisch: Japan-Fans) */}
          <section style={{ padding: '24px 0 0' }}>
            <div className="wrap narrow">
              <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.7 }}>
                Wer einmal auf einer japanischen Toilette saß, versteht die Begeisterung: warme Wasserreinigung,
                beheizter Sitz, Warmluft-Trocknung, alles auf Knopfdruck. In Japan heißt das <b>Washlet</b> und ist dort
                Standard. Das gleiche Gefühl gibt es auch hier, ohne dass du ein teures Originalgerät importieren und dich
                mit Adaptern und Spannung herumschlagen musst.
              </p>

              <p className="honest-note">
                <b>Ehrlich vorab:</b> Ein Washlet bzw. Dusch-WC ist ein Komfortprodukt, kein Medizinprodukt. Für den
                Betrieb brauchst du einen Wasseranschluss und eine Steckdose in der Nähe. Importierte japanische
                Originalgeräte sind auf den japanischen Markt ausgelegt und benötigen für den deutschen Anschluss teils
                Adapter, das solltest du vor einem Import bedenken.
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
                Datenblättern und echten Bewertungen. Beim „Japan-Gefühl" zählt für mich vor allem: <b>der volle
                Washlet-Funktionsumfang</b> (warme Wasserreinigung, oszillierende Düse, beheizter Sitz, Warmluft), eine
                gute <b>Fernbedienung</b> und ein Gerät, das direkt an den <b>deutschen Standardanschluss</b> passt.
              </p>
              <div className="inshort">
                <div className="lbl">Kurz gesagt</div>
                <p>
                  Mein Favorit ist der <b>CaldrisWave Pro</b> (ab 329 €): bringt die typischen Washlet-Funktionen fürs
                  Japan-Gefühl, passt direkt an den deutschen Anschluss und kostet einen Bruchteil eines importierten
                  Originals. Ich bewerte ihn mit <b>9,5/10</b>.
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
                      <span>Washlet-Funktionsumfang</span>
                      <b>9,5/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="95%" />
                    </div>
                  </div>
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
                      <span>Preis-Leistung</span>
                      <b>9,7/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="97%" />
                    </div>
                  </div>
                  <div className="vbar">
                    <div className="vbar-top">
                      <span>Anschluss in Deutschland</span>
                      <b>9,6/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="96%" />
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
                  <span className="k">Funktionen</span>
                  <strong>Washlet-Set</strong>
                  <span className="s">Wasser, Sitzheizung, Föhn, Düse</span>
                </div>
                <div className="vstat">
                  <span className="k">Anschluss</span>
                  <strong>DE-Standard</strong>
                  <span className="s">kein Import, kein Adapter</span>
                </div>
                <div className="vstat">
                  <span className="k">Preis</span>
                  <strong>329 €</strong>
                  <span className="s">Bruchteil eines Originals</span>
                </div>
              </div>
            </div>
          </section>

          {/* TOP 3 */}
          <section style={{ paddingTop: '8px' }}>
            <div className="wrap narrow">
              <h2 style={{ marginBottom: '10px' }}>Die Top 3 fürs Japan-Gefühl</h2>
              <p>Bevor es zu den ausführlichen Einzelbewertungen geht, hier die drei besten Modelle in Kürze:</p>
              <ol className="top3">
                <li>
                  <b><a href={PRODUCT_URL}>CaldrisWave Pro</a></b> (9,5/10), ideal für alle, die die Washlet-Funktionen
                  wollen, aber keinen teuren Import mit Adapter.
                </li>
                <li>
                  <b>TOTO Washlet</b> (8,4/10), das japanische Original und Erfinder des Washlets, technisch top, in
                  Deutschland aber teuer und beim Anschluss/Service umständlich.
                </li>
                <li>
                  <b>Geberit AquaClean</b> (8,8/10), sehr komfortabel, aber keine japanische Marke und deutlich teurer.
                </li>
              </ol>
            </div>
          </section>

          {/* GEMEINSAMER VERGLEICH (5 Modelle + Tabelle) mit Japan-Hinweisen */}
          <DuschWcComparison
            productUrl={PRODUCT_URL}
            audienceLabel="Fürs Japan-Gefühl"
            audienceNotes={{
              cd: 'Bringt die typischen Washlet-Funktionen (warme Wasserreinigung mit Gesäß- und Ladydusche, bewegliche Reinigung, beheizter Sitz, Warmluft-Trocknung, selbstreinigende Düse, Fernbedienung) und passt direkt an den deutschen Standardanschluss, das Japan-Gefühl ohne Import und Adapter-Gefummel.',
              gb: 'Sehr komfortabel und ausgereift, aber eine europäische Marke ohne den japanischen Ursprung und deutlich teurer.',
              tt: 'Das japanische Original und Erfinder des Washlets, technisch erstklassig. In Deutschland aber teuer, und beim Anschluss, der Spannung und dem Service ist ein Original oft umständlicher, mehr Prestige als Alltagsvernunft.',
              vb: 'Europäische Marke mit gutem Washlet-Komfort, aber teuer und über den Fachhandel, ohne den japanischen Ursprung.',
              nn: 'Günstige Nachbauten werben mit dem Washlet-Gefühl, liefern aber oft nur Tank-Warmwasser und wackelige Technik, das echte Gefühl bleibt auf der Strecke.',
            }}
          />

          {/* TRUST (zielgruppenspezifisch) */}
          <section style={{ background: '#eef3f2' }}>
            <div className="wrap">
              <div className="section-tag">Warum's fürs Japan-Gefühl mein Favorit ist</div>
              <h2 style={{ marginBottom: '24px' }}>Alle Washlet-Funktionen. Deutscher Anschluss. Fairer Preis.</h2>
              <div className="trust">
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
                    </svg>
                  </div>
                  <h4>Warme Wasserreinigung</h4>
                  <p>Gesäß- und Ladydusche mit oszillierender Düse, genau das, was das Washlet-Gefühl ausmacht.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M8 3c0 2-2 3-2 5s2 3 2 5M16 3c0 2-2 3-2 5s2 3 2 5" />
                      <path d="M5 21h14" />
                    </svg>
                  </div>
                  <h4>Beheizter Sitz &amp; Föhn</h4>
                  <p>Warmer Sitz und Warmluft-Trocknung, das komplette Komfortpaket wie im japanischen Original.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <rect x="3" y="4" width="18" height="14" rx="2" />
                      <path d="M8 21h8M12 18v3" />
                      <circle cx="9" cy="11" r="1.4" />
                      <circle cx="15" cy="11" r="1.4" />
                    </svg>
                  </div>
                  <h4>Passt an deutschen Anschluss</h4>
                  <p>Kein Import, keine Adapter, kein Spannungsthema, direkt an Standardanschluss und Steckdose.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M12 2v20M5 9l7-5 7 5M6 20h12" />
                    </svg>
                  </div>
                  <h4>Bruchteil des Originalpreises</h4>
                  <p>Das Japan-Gefühl zum fairen Preis, statt vierstellig für ein importiertes Gerät.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ (zielgruppenspezifisch) */}
          <section>
            <div className="wrap narrow faq">
              <div className="section-tag">Häufige Fragen</div>
              <h2 style={{ marginBottom: '22px' }}>Japanische Toilette für zu Hause: was oft gefragt wird</h2>

              <details open>
                <summary>Was ist ein Washlet bzw. eine japanische Toilette?</summary>
                <div className="ans">
                  „Washlet" ist der in Japan geprägte Begriff für ein Dusch-WC: eine Toilette bzw. ein WC-Sitz mit warmer
                  Wasserreinigung, beheiztem Sitz, Warmluft-Trocknung und Fernbedienung. In Japan ist das seit Jahrzehnten
                  Standard, bei uns wird es zunehmend beliebter.
                </div>
              </details>
              <details>
                <summary>Bekomme ich das Japan-Gefühl auch ohne teures Originalgerät?</summary>
                <div className="ans">
                  Ja. Die Funktionen, die das Gefühl ausmachen, warme Wasserreinigung, oszillierende Düse, Sitzheizung und
                  Warmluft, bietet der CaldrisWave Pro ebenfalls, zu einem Bruchteil des Preises eines importierten
                  Originals und ohne Adapter-Aufwand.
                </div>
              </details>
              <details>
                <summary>Passt ein japanisches Dusch-WC an deutsche Anschlüsse?</summary>
                <div className="ans">
                  Importierte Originale sind auf den japanischen Markt ausgelegt und brauchen für Wasseranschluss und
                  Spannung teils Adapter. Der CaldrisWave Pro ist dagegen für den deutschen Standardanschluss gemacht,
                  du montierst ihn direkt an Eckventil und Steckdose.
                </div>
              </details>
              <details>
                <summary>Welche Funktionen machen das japanische Gefühl aus?</summary>
                <div className="ans">
                  Vor allem die warme Wasserreinigung mit beweglicher Düse, der beheizte Sitz, die Warmluft-Trocknung, die
                  selbstreinigende Düse und die einfache Bedienung per Fernbedienung. Genau dieses Paket steckt im
                  CaldrisWave Pro.
                </div>
              </details>
              <details>
                <summary>Lohnt sich der Import eines TOTO-Originals?</summary>
                <div className="ans">
                  TOTO ist der Erfinder des Washlets und technisch hervorragend, keine Frage. Für den Alltag in Deutschland
                  sprechen aber der hohe Preis, mögliche Adapter für Anschluss und Spannung sowie ein umständlicherer
                  Service dagegen. Für die meisten ist ein hier erhältliches Gerät die vernünftigere Wahl.
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
                  „Washlet" ist eine etablierte Bezeichnung für japanische Dusch-WCs. Ein Dusch-WC ist kein
                  Medizinprodukt. Für den Betrieb sind ein Wasseranschluss und eine Steckdose nötig; importierte Geräte
                  können abweichende Anschluss- und Spannungsanforderungen haben.
                </p>
                <p>
                  Die Bewertungen und Noten stellen unsere eigene redaktionelle Einschätzung dar, basierend auf öffentlich
                  verfügbaren Hersteller-, Datenblatt- und Bewertungsinformationen (Stand Juli 2026). Preise, Ausstattung
                  und Verfügbarkeit der genannten Wettbewerbsprodukte können sich jederzeit ändern und variieren je nach
                  Modell und Händler. Genannte Marken (TOTO, Geberit, Villeroy &amp; Boch u. a.) sind Eigentum der
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
                  TOTO, Geberit, Villeroy &amp; Boch u. a. sind Marken der jeweiligen Inhaber; es besteht keine
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
              <h3 className="wd-title">Washlet erklärt: warum Japan aufs Dusch-WC schwört</h3>
              <p className="wd-desc">
                Vom beheizten Sitz bis zur Wasserreinigung: Wir erklären, was das japanische Toilettengefühl ausmacht und
                wie du es zu Hause bekommst.
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
