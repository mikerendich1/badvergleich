import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../components/Hero';
import AnimatedBars from '../../components/AnimatedBars';
import DuschWcComparison from '../../components/DuschWcComparison';
import StickyBuyBar from '../../components/StickyBuyBar';

export const metadata = {
  title: 'Nachhaltiges Dusch-WC im Test 2026: weniger Toilettenpapier, gleiche Sauberkeit | BadVergleich',
  description:
    'Weniger Toilettenpapier verbrauchen? Wir vergleichen 5 Dusch-WCs nach Papierersparnis, Energieverbrauch und Langlebigkeit. Ehrlich statt übertrieben, ohne Öko-Wunderversprechen.',
};

const PRODUCT_URL = '/dusch-wc-nachhaltig-sieger';

export default function Page() {
  return (
    <>
      <div className="anzeige-bar">
        <strong>Nachhaltiges Dusch-WC</strong> · Vergleich &amp; Kaufberatung 2026
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
          <span>Nachhaltig</span>
        </div>
      </div>

      <div className="shell">
        <main className="shell-main">
          <Hero title="Nachhaltiges Dusch-WC: weniger Toilettenpapier, gleiche Sauberkeit" />

          {/* INTRO (zielgruppenspezifisch: Nachhaltigkeit) */}
          <section style={{ padding: '24px 0 0' }}>
            <div className="wrap narrow">
              <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.7 }}>
                Toilettenpapier verbraucht Ressourcen: Holz, Wasser und Energie in der Herstellung, dazu Verpackung und
                Transport. Ein <b>Dusch-WC</b> reinigt stattdessen mit Wasser und kann den Papierverbrauch spürbar
                senken, ohne Abstriche bei der Sauberkeit. Wer bewusster leben und nebenbei laufende Kosten sparen will,
                findet hier einen einfachen Hebel.
              </p>

              <p className="honest-note">
                <b>Ehrlich vorab:</b> Ein Dusch-WC verbraucht selbst etwas Wasser und Strom, es macht dich also nicht
                „klimaneutral". Pro Nutzung ist der Verbrauch aber gering, und der eingesparte Papierberg fällt für viele
                deutlich stärker ins Gewicht. Wie groß der Effekt ist, hängt von deinem Nutzungsverhalten ab, ich
                verspreche hier bewusst kein Öko-Wunder.
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
                Datenblättern und echten Bewertungen. Beim Thema Nachhaltigkeit zählt für mich vor allem: wie stark sich{' '}
                <b>Papier einsparen</b> lässt (Warmluft-Trocknung), wie <b>sparsam die Technik</b> arbeitet
                (Sofort-Heizung statt Dauer-Warmhaltetank) und wie <b>langlebig</b> das Gerät ist, statt schnell zu
                Elektroschrott zu werden.
              </p>
              <div className="inshort">
                <div className="lbl">Kurz gesagt</div>
                <p>
                  Mein Favorit ist der <b>CaldrisWave Pro</b> (ab 329 €): Warmluft-Trocknung für (fast) papierloses
                  Duschen, Sofort-Heizung im Durchlaufprinzip statt Standby-Tank und solide Technik für lange Nutzung.
                  Ich bewerte ihn mit <b>9,5/10</b>.
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
                      <span>Papierersparnis</span>
                      <b>9,6/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="96%" />
                    </div>
                  </div>
                  <div className="vbar">
                    <div className="vbar-top">
                      <span>Sparsame Technik</span>
                      <b>9,3/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="93%" />
                    </div>
                  </div>
                  <div className="vbar">
                    <div className="vbar-top">
                      <span>Preis-Leistung &amp; Folgekosten</span>
                      <b>9,7/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="97%" />
                    </div>
                  </div>
                  <div className="vbar">
                    <div className="vbar-top">
                      <span>Langlebigkeit</span>
                      <b>9,3/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="93%" />
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
                  <span className="k">Papier</span>
                  <strong>Fast keins</strong>
                  <span className="s">dank Warmluft-Trocknung</span>
                </div>
                <div className="vstat">
                  <span className="k">Wasser</span>
                  <strong>Nur bei Bedarf</strong>
                  <span className="s">Sofort-Heizung, kein Standby-Tank</span>
                </div>
                <div className="vstat">
                  <span className="k">Kosten</span>
                  <strong>Weniger Papier</strong>
                  <span className="s">spart laufend im Alltag</span>
                </div>
              </div>
            </div>
          </section>

          {/* TOP 3 */}
          <section style={{ paddingTop: '8px' }}>
            <div className="wrap narrow">
              <h2 style={{ marginBottom: '10px' }}>Die Top 3 fürs papiersparende Bad</h2>
              <p>Bevor es zu den ausführlichen Einzelbewertungen geht, hier die drei besten Modelle in Kürze:</p>
              <ol className="top3">
                <li>
                  <b><a href={PRODUCT_URL}>CaldrisWave Pro</a></b> (9,5/10), ideal dank Warmluft-Trocknung, sparsamer
                  Sofort-Heizung und langlebiger Technik zum fairen Preis.
                </li>
                <li>
                  <b>Geberit AquaClean</b> (8,8/10), sehr sparsam nutzbar und langlebig, aber teuer in der Anschaffung.
                </li>
                <li>
                  <b>TOTO Washlet</b> (8,4/10), effiziente Technik, in Deutschland aber teurer und beim Service weniger
                  zugänglich.
                </li>
              </ol>
            </div>
          </section>

          {/* GEMEINSAMER VERGLEICH (5 Modelle + Tabelle) mit Nachhaltigkeits-Hinweisen */}
          <DuschWcComparison
            productUrl={PRODUCT_URL}
            audienceLabel="Für Nachhaltigkeit"
            audienceNotes={{
              cd: 'Die Warmluft-Trocknung ermöglicht das Duschen fast ganz ohne Papier, und die Sofort-Heizung erwärmt Wasser nur bei Bedarf statt es in einem Tank dauerhaft warmzuhalten. Das spart im Alltag Papier und Standby-Energie, bei solider, langlebiger Technik.',
              gb: 'Sehr sparsam nutzbar und langlebig, aber der hohe Anschaffungspreis relativiert die Ersparnis über die Jahre.',
              tt: 'Effiziente Technik mit Warmluft-Trocknung, in Deutschland aber teuer und beim Service umständlicher.',
              vb: 'Gut und papiersparend nutzbar, jedoch teuer und über den Fachhandel, kein Nachhaltigkeitsvorteil gegenüber günstigeren Modellen.',
              nn: 'Günstig, aber Tank-Warmwasser hält Wasser dauerhaft warm (Standby-Energie), und die oft kurze Haltbarkeit ist selbst ein Nachhaltigkeitsproblem: schneller Elektroschrott statt langer Nutzung.',
            }}
          />

          {/* TRUST (zielgruppenspezifisch) */}
          <section style={{ background: '#eef3f2' }}>
            <div className="wrap">
              <div className="section-tag">Warum's für Nachhaltigkeit mein Favorit ist</div>
              <h2 style={{ marginBottom: '24px' }}>Weniger Papier. Sparsame Technik. Lange Nutzung.</h2>
              <div className="trust">
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M12 21c5-2 8-6 8-12V5l-8-2-8 2v4c0 6 3 10 8 12z" />
                      <path d="M12 21c0-5 0-9 0-13" />
                    </svg>
                  </div>
                  <h4>Deutlich weniger Papier</h4>
                  <p>Die Reinigung mit Wasser senkt den Toilettenpapierverbrauch spürbar.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M4 14a8 8 0 0 1 16 0" />
                      <path d="M2 14h20M12 6V3M6.5 7.5 5 6M17.5 7.5 19 6" />
                    </svg>
                  </div>
                  <h4>Warmluft statt Papier</h4>
                  <p>Die Warmluft-Trocknung ermöglicht das Duschen fast ganz ohne Toilettenpapier.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
                    </svg>
                  </div>
                  <h4>Sofort-Heizung, kein Standby</h4>
                  <p>Wasser wird nur bei Bedarf erwärmt, statt in einem Tank dauerhaft warmgehalten zu werden.</p>
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
                  <h4>Langlebig statt Wegwerf</h4>
                  <p>Solide Technik für lange Nutzung, statt billiger Geräte, die schnell zu Elektroschrott werden.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ (zielgruppenspezifisch) */}
          <section>
            <div className="wrap narrow faq">
              <div className="section-tag">Häufige Fragen</div>
              <h2 style={{ marginBottom: '22px' }}>Dusch-WC &amp; Nachhaltigkeit: was oft gefragt wird</h2>

              <details open>
                <summary>Wie viel Toilettenpapier spare ich mit einem Dusch-WC?</summary>
                <div className="ans">
                  Das hängt vom Nutzungsverhalten ab, aber die Ersparnis ist spürbar: Da mit Wasser gereinigt wird,
                  braucht man nur noch wenig Papier zum Abtrocknen, mit der Warmluft-Trocknung sogar fast keins. Über das
                  Jahr summiert sich das deutlich.
                </div>
              </details>
              <details>
                <summary>Verbraucht ein Dusch-WC nicht selbst Wasser und Strom?</summary>
                <div className="ans">
                  Ja, das gehört zur Ehrlichkeit dazu. Pro Nutzung ist der Wasser- und Stromverbrauch aber gering. Für
                  viele wiegt die eingesparte Papierproduktion (die ebenfalls viel Wasser und Energie kostet) schwerer.
                  Ein Klimawunder ist es nicht, aber ein sinnvoller Hebel.
                </div>
              </details>
              <details>
                <summary>Ist das wirklich nachhaltiger als Papier?</summary>
                <div className="ans">
                  Ein Dusch-WC kann den Papierverbrauch stark reduzieren, und Papier hat in Herstellung, Verpackung und
                  Transport einen realen Fußabdruck. Wie groß dein Vorteil ausfällt, hängt von Nutzung und Strommix ab.
                  Wir versprechen bewusst kein pauschales Öko-Siegel, sondern eine spürbare Reduzierung.
                </div>
              </details>
              <details>
                <summary>Kann ich ganz auf Toilettenpapier verzichten?</summary>
                <div className="ans">
                  Weitgehend ja. Nach der Wasserreinigung übernimmt die Warmluft-Trocknung, sodass du praktisch ohne
                  Papier auskommst. Viele nutzen höchstens noch ein kleines Stück, das ist Geschmackssache.
                </div>
              </details>
              <details>
                <summary>Was ist beim Energieverbrauch zu beachten?</summary>
                <div className="ans">
                  Günstige Geräte halten das Wasser oft in einem Tank dauerhaft warm, das kostet Standby-Energie. Der
                  CaldrisWave Pro erwärmt das Wasser per Sofort-Heizung nur bei Bedarf, das ist im Alltag sparsamer.
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
                    Herstellerdaten aus, ehrlich und ohne übertriebene Versprechen.
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
                  Ein Dusch-WC verbraucht selbst Wasser und Strom und ist <b>kein „klimaneutrales" Produkt</b>. Es kann
                  den Toilettenpapierverbrauch reduzieren; der tatsächliche Umwelt- und Kostenvorteil hängt von
                  Nutzungsverhalten, Wasser- und Strompreisen sowie dem Strommix ab. Für den Betrieb sind ein
                  Wasseranschluss und eine Steckdose nötig.
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
              <h3 className="wd-title">Toilettenpapier sparen: was im Alltag wirklich etwas bringt</h3>
              <p className="wd-desc">
                Weniger Papier, weniger Müll, weniger Kosten: Wir zeigen, wie ein Dusch-WC deinen Verbrauch senken kann,
                ehrlich gerechnet.
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
