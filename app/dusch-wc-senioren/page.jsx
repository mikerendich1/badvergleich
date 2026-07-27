import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../components/Hero';
import AnimatedBars from '../../components/AnimatedBars';
import DuschWcComparison from '../../components/DuschWcComparison';
import StickyBuyBar from '../../components/StickyBuyBar';

export const metadata = {
  title: 'Dusch-WC für Senioren 2026: die besten Aufsätze für mehr Selbstständigkeit im Bad | BadVergleich',
  description:
    'Dusch-WC für Senioren gesucht? Wir vergleichen 5 Modelle nach einfacher Bedienung, Sitzheizung, Hygiene ohne Bücken und Selbstmontage. Ehrlich statt übertrieben.',
};

const PRODUCT_URL = '/dusch-wc-senioren-sieger';

export default function Page() {
  return (
    <>
      <div className="anzeige-bar">
        <strong>Dusch-WC für Senioren</strong> · Vergleich &amp; Kaufberatung 2026
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
          <span>Für Senioren</span>
        </div>
      </div>

      <div className="shell">
        <main className="shell-main">
          <Hero title="Dusch-WC für Senioren: die besten Aufsätze für mehr Selbstständigkeit im Bad" />

          {/* INTRO (zielgruppenspezifisch: Senioren) */}
          <section style={{ padding: '24px 0 0' }}>
            <div className="wrap narrow">
              <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.7 }}>
                Sich nach dem Toilettengang gründlich zu reinigen, wird mit den Jahren mühsamer: Bücken, Drehen und
                Greifen fallen schwerer. Ein <b>Dusch-WC</b> übernimmt genau das, sanft mit warmem Wasser, auf Knopfdruck.
                Und du brauchst dafür keine neue Toilette: Ein <b>Dusch-WC-Aufsatz</b> ersetzt einfach den vorhandenen
                WC-Sitz und hilft, im eigenen Bad selbstständig zu bleiben.
              </p>

              <p className="honest-note">
                <b>Ehrlich vorab:</b> Ein Dusch-WC ist kein Medizinprodukt und ersetzt keine Pflege oder ärztliche
                Behandlung. Es erleichtert die Intimhygiene und kann mehr Selbstständigkeit geben. Für den Betrieb sind
                ein Wasseranschluss und eine Steckdose in der Nähe nötig; bei eingeschränkter Beweglichkeit hilft für die
                Montage jemand aus der Familie oder ein Handwerker.
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
                Datenblättern und echten Bewertungen. Für Senioren zählt für mich vor allem: eine <b>einfache,
                gut sichtbare Bedienung</b>, ein <b>beheizter Sitz</b>, ein <b>Nachtlicht</b> und eine Montage, die kein
                teures Bauprojekt wird.
              </p>
              <div className="inshort">
                <div className="lbl">Kurz gesagt</div>
                <p>
                  Mein Favorit ist der <b>CaldrisWave Pro</b> (ab 329 €): übersichtliche Fernbedienung mit
                  kontrastreichem Display, Sitzheizung, Nachtlicht und Sitzsensor, dazu warme Wasserreinigung und
                  Selbstmontage ohne Umbau. Ich bewerte ihn mit <b>9,5/10</b>.
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
                      <span>Einfache Bedienung</span>
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
                  <span className="k">Bedienung</span>
                  <strong>Fernbedienung</strong>
                  <span className="s">großes, kontrastreiches Display</span>
                </div>
                <div className="vstat">
                  <span className="k">Komfort</span>
                  <strong>Sitzheizung</strong>
                  <span className="s">plus Nachtlicht &amp; Sitzsensor</span>
                </div>
                <div className="vstat">
                  <span className="k">Montage</span>
                  <strong>Ohne Umbau</strong>
                  <span className="s">Aufsatz statt neuer Toilette</span>
                </div>
              </div>
            </div>
          </section>

          {/* TOP 3 */}
          <section style={{ paddingTop: '8px' }}>
            <div className="wrap narrow">
              <h2 style={{ marginBottom: '10px' }}>Die Top 3 für Seniorinnen und Senioren</h2>
              <p>Bevor es zu den ausführlichen Einzelbewertungen geht, hier die drei besten Modelle in Kürze:</p>
              <ol className="top3">
                <li>
                  <b><a href={PRODUCT_URL}>CaldrisWave Pro</a></b> (9,5/10), ideal dank einfacher Bedienung, Sitzheizung,
                  Nachtlicht und Selbstmontage ohne Umbau.
                </li>
                <li>
                  <b>Geberit AquaClean</b> (8,8/10), technisch top und seniorentauglich, aber teuer und meist mit
                  Fachmontage.
                </li>
                <li>
                  <b>TOTO Washlet</b> (8,4/10), sanfte Reinigung, in Deutschland aber teurer und beim Service weniger
                  zugänglich.
                </li>
              </ol>
            </div>
          </section>

          {/* GEMEINSAMER VERGLEICH (5 Modelle + Tabelle) mit Senioren-Hinweisen */}
          <DuschWcComparison
            productUrl={PRODUCT_URL}
            audienceLabel="Für Senioren"
            audienceNotes={{
              cd: 'Die übersichtliche Fernbedienung mit großem, kontrastreichem Display ist bewusst auch für ältere Menschen und Kinder gemacht. Sitzheizung, Nachtlicht und Sitzsensor erhöhen den Komfort und die Sicherheit, ohne teure Komplettanlage.',
              gb: 'Technisch top und seniorentauglich, aber der hohe Preis und die meist empfohlene Fachmontage sind für viele im Ruhestand eine große Hürde.',
              tt: 'Sanfte, angenehme Reinigung, doch Bedienung, Service und Ersatzteile sind in Deutschland weniger zugänglich, und der Preis liegt deutlich höher.',
              vb: 'Hochwertig und markenstark, aber teuer und über den Fachhandel. Für den reinen Alltagsnutzen im Ruhestand oft zu kostspielig.',
              nn: 'Günstig, aber gerade bei eingeschränkter Mobilität sind unklarer Service und wackelige Elektronik ein echtes Risiko: Wer sich auf das Gerät verlässt, braucht verlässlichen Support.',
            }}
          />

          {/* TRUST (zielgruppenspezifisch) */}
          <section style={{ background: '#eef3f2' }}>
            <div className="wrap">
              <div className="section-tag">Warum's für Senioren mein Favorit ist</div>
              <h2 style={{ marginBottom: '24px' }}>Einfach zu bedienen. Angenehm warm. Kein Umbau.</h2>
              <div className="trust">
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <circle cx="9" cy="9" r="1.6" />
                      <circle cx="15" cy="9" r="1.6" />
                      <path d="M8 15h8" />
                    </svg>
                  </div>
                  <h4>Einfache Bedienung</h4>
                  <p>Übersichtliche Fernbedienung mit großem, kontrastreichem Display, gut lesbar und leicht zu treffen.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M8 3c0 2-2 3-2 5s2 3 2 5M16 3c0 2-2 3-2 5s2 3 2 5" />
                      <path d="M5 21h14" />
                    </svg>
                  </div>
                  <h4>Beheizter Sitz &amp; Nachtlicht</h4>
                  <p>Warmer Sitz und dezentes Nachtlicht machen besonders den nächtlichen Gang angenehmer und sicherer.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
                    </svg>
                  </div>
                  <h4>Hygiene ohne Verrenken</h4>
                  <p>Die warme Wasserreinigung übernimmt das gründliche Säubern, ganz ohne Bücken und Greifen.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <circle cx="12" cy="12" r="3.2" />
                      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
                    </svg>
                  </div>
                  <h4>Kein Umbau nötig</h4>
                  <p>Als Aufsatz ersetzt er nur den WC-Sitz, keine neue Toilette und kein großes Bauprojekt.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ (zielgruppenspezifisch) */}
          <section>
            <div className="wrap narrow faq">
              <div className="section-tag">Häufige Fragen</div>
              <h2 style={{ marginBottom: '22px' }}>Dusch-WC im Alter: was oft gefragt wird</h2>

              <details open>
                <summary>Ist die Bedienung auch für ältere Menschen einfach?</summary>
                <div className="ans">
                  Ja, darauf ist der CaldrisWave Pro ausgelegt. Die Fernbedienung hat ein großes, kontrastreiches Display
                  und klare Symbole. Wichtige Funktionen wie Reinigung und Trocknung sind direkt erreichbar, ohne sich
                  durch Menüs kämpfen zu müssen.
                </div>
              </details>
              <details>
                <summary>Hilft ein Dusch-WC bei eingeschränkter Beweglichkeit?</summary>
                <div className="ans">
                  Es kann die Selbstständigkeit unterstützen: Das gründliche Reinigen übernimmt warmes Wasser auf
                  Knopfdruck, Bücken und Greifen entfallen weitgehend. Ein Heil- oder Pflegeersatz ist es nicht, aber für
                  viele ein spürbarer Gewinn an Komfort und Würde.
                </div>
              </details>
              <details>
                <summary>Muss ich meine Toilette umbauen?</summary>
                <div className="ans">
                  Nein. Der Aufsatz ersetzt nur den vorhandenen WC-Sitz. Du brauchst lediglich einen Wasseranschluss und
                  eine Steckdose in der Nähe. Ein neues WC oder ein größerer Umbau sind nicht nötig.
                </div>
              </details>
              <details>
                <summary>Ist der Sitz beheizt und gibt es ein Nachtlicht?</summary>
                <div className="ans">
                  Ja. Der CaldrisWave Pro hat einen beheizten Sitz und ein Nachtlicht. Gerade nachts macht das den Gang
                  zur Toilette angenehmer und sicherer.
                </div>
              </details>
              <details>
                <summary>Was, wenn ich die Montage nicht selbst schaffe?</summary>
                <div className="ans">
                  Die Montage ist bewusst einfach gehalten: alten Sitz ab, Aufsatz drauf, an Wasser und Steckdose
                  anschließen. Wer das nicht selbst machen möchte, lässt sich von Familie oder einem Handwerker helfen,
                  ein großes Bauprojekt wird es dadurch nicht.
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
                  Ein Dusch-WC ist <b>kein Medizinprodukt</b> und ersetzt keine Pflege oder ärztliche Behandlung. Für den
                  Betrieb sind ein Wasseranschluss und eine Steckdose nötig; die Passform hängt von den Maßen der Toilette
                  ab.
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
              <h3 className="wd-title">Selbstständig im Bad bleiben: worauf es im Alter ankommt</h3>
              <p className="wd-desc">
                Kleine Hilfen mit großer Wirkung: Wir zeigen, wie ein Dusch-WC den Alltag im Bad erleichtern kann, ohne
                großen Umbau.
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
