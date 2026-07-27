import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../components/Hero';
import AnimatedBars from '../../components/AnimatedBars';
import DuschWcComparison from '../../components/DuschWcComparison';
import StickyBuyBar from '../../components/StickyBuyBar';

export const metadata = {
  title: 'Dusch-WC für Familien 2026: die besten Aufsätze für Groß und Klein im Vergleich | BadVergleich',
  description:
    'Dusch-WC für die Familie gesucht? Wir vergleichen 5 Modelle nach sanfter Reinigung für Kinder, individuellen Einstellungen, Nachtlicht und Hygiene für alle. Ehrlich statt übertrieben.',
};

const PRODUCT_URL = '/dusch-wc-familien-sieger';

export default function Page() {
  return (
    <>
      <div className="anzeige-bar">
        <strong>Dusch-WC für Familien</strong> · Vergleich &amp; Kaufberatung 2026
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
          <span>Für Familien</span>
        </div>
      </div>

      <div className="shell">
        <main className="shell-main">
          <Hero title="Dusch-WC für Familien: die besten Aufsätze für Groß und Klein im Vergleich" />

          {/* INTRO (zielgruppenspezifisch: Familien) */}
          <section style={{ padding: '24px 0 0' }}>
            <div className="wrap narrow">
              <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.7 }}>
                In einer Familie teilen sich viele eine Toilette, mit ganz unterschiedlichen Bedürfnissen: Kinder,
                Eltern, vielleicht die Großeltern zu Besuch. Ein <b>Dusch-WC</b> reinigt alle sanft mit warmem Wasser,
                individuell einstellbar und hygienischer als Papier. Und als <b>Dusch-WC-Aufsatz</b> ersetzt es einfach
                den vorhandenen WC-Sitz, ein Gerät für den ganzen Haushalt.
              </p>

              <p className="honest-note">
                <b>Ehrlich vorab:</b> Ein Dusch-WC ist kein Medizinprodukt. Es macht die Intimhygiene für die ganze
                Familie angenehmer und schonender als reines Papier, gerade für empfindliche Kinderhaut. Für den Betrieb
                sind ein Wasseranschluss und eine Steckdose in der Nähe nötig.
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
                Datenblättern und echten Bewertungen. Für Familien zählt für mich vor allem: eine <b>sanfte,
                einstellbare Reinigung</b> für Groß und Klein, ein <b>Nachtlicht</b> für die Kleinen, gute Hygiene bei
                vielen Nutzern und ein Preis, der fürs Familienbudget passt.
              </p>
              <div className="inshort">
                <div className="lbl">Kurz gesagt</div>
                <p>
                  Mein Favorit ist der <b>CaldrisWave Pro</b> (ab 329 €): warme Wasserreinigung mit einstellbarer
                  Intensität und Position, selbstreinigende Düse, Nachtlicht und einfache Fernbedienung, alles zum
                  familientauglichen Preis. Ich bewerte ihn mit <b>9,5/10</b>.
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
                      <span>Sanfte Reinigung für alle</span>
                      <b>9,4/10</b>
                    </div>
                    <div className="vtrack">
                      <div className="vfill" data-width="94%" />
                    </div>
                  </div>
                  <div className="vbar">
                    <div className="vbar-top">
                      <span>Einstellbar &amp; Komfort</span>
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
                  <span className="k">Reinigung</span>
                  <strong>Einstellbar</strong>
                  <span className="s">Druck, Temperatur &amp; Position</span>
                </div>
                <div className="vstat">
                  <span className="k">Für Kinder</span>
                  <strong>Nachtlicht</strong>
                  <span className="s">sanfte Wasserreinigung</span>
                </div>
                <div className="vstat">
                  <span className="k">Hygiene</span>
                  <strong>Selbstreinigend</strong>
                  <span className="s">Düse spült vor &amp; nach Nutzung</span>
                </div>
              </div>
            </div>
          </section>

          {/* TOP 3 */}
          <section style={{ paddingTop: '8px' }}>
            <div className="wrap narrow">
              <h2 style={{ marginBottom: '10px' }}>Die Top 3 für Familien</h2>
              <p>Bevor es zu den ausführlichen Einzelbewertungen geht, hier die drei besten Modelle in Kürze:</p>
              <ol className="top3">
                <li>
                  <b><a href={PRODUCT_URL}>CaldrisWave Pro</a></b> (9,5/10), ideal dank einstellbarer, sanfter Reinigung,
                  Nachtlicht und familientauglichem Preis.
                </li>
                <li>
                  <b>Geberit AquaClean</b> (8,8/10), sehr gut ausgestattet mit Nutzerprofilen, aber für viele Familien
                  schlicht zu teuer.
                </li>
                <li>
                  <b>TOTO Washlet</b> (8,4/10), feine Reinigung, in Deutschland aber teurer und beim Service weniger
                  zugänglich.
                </li>
              </ol>
            </div>
          </section>

          {/* GEMEINSAMER VERGLEICH (5 Modelle + Tabelle) mit Familien-Hinweisen */}
          <DuschWcComparison
            productUrl={PRODUCT_URL}
            audienceLabel="Für Familien"
            audienceNotes={{
              cd: 'Reinigungsintensität, Wassertemperatur und Düsenposition lassen sich individuell einstellen, sanft genug für Kinder, kräftig genug für Erwachsene. Nachtlicht und selbstreinigende Düse sorgen für Sicherheit und Hygiene bei vielen Nutzern, alles zum familientauglichen Preis.',
              gb: 'Sehr komfortabel mit Nutzerprofilen und App, aber der hohe Anschaffungspreis ist für die meisten Familien schwer zu rechtfertigen.',
              tt: 'Feine, angenehme Reinigung, doch Preis und Serviceaufwand in Deutschland passen selten zum Familienbudget.',
              vb: 'Hochwertig und markenstark, aber teuer und über den Fachhandel. Beim reinen Funktionsumfang für die Familie kein Vorsprung.',
              nn: 'Günstig und damit auf den ersten Blick familienfreundlich, aber Tank-Warmwasser, wackelige Elektronik und schwacher Service sprechen gegen den Dauereinsatz mit Kindern.',
            }}
          />

          {/* TRUST (zielgruppenspezifisch) */}
          <section style={{ background: '#eef3f2' }}>
            <div className="wrap">
              <div className="section-tag">Warum's für Familien mein Favorit ist</div>
              <h2 style={{ marginBottom: '24px' }}>Sanft für Kinder. Passend für alle. Fairer Preis.</h2>
              <div className="trust">
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <circle cx="8" cy="8" r="3" />
                      <circle cx="17" cy="10" r="2.2" />
                      <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5M14 20c0-2.2 1.6-3.6 3-3.6s3 1.4 3 3.6" />
                    </svg>
                  </div>
                  <h4>Für Groß und Klein</h4>
                  <p>Warme, sanfte Wasserreinigung, angenehm für Erwachsene und schonend für empfindliche Kinderhaut.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M4 12h4M16 12h4" />
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 4v2M12 18v2" />
                    </svg>
                  </div>
                  <h4>Individuell einstellbar</h4>
                  <p>Wasserdruck, Temperatur und Düsenposition passen sich jedem Familienmitglied an.</p>
                </div>
                <div className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <path d="M12 3a6 6 0 0 0-6 6c0 3 6 12 6 12s6-9 6-12a6 6 0 0 0-6-6z" />
                      <circle cx="12" cy="9" r="1.6" />
                    </svg>
                  </div>
                  <h4>Nachtlicht für Kinder</h4>
                  <p>Das dezente Nachtlicht hilft den Kleinen, sich nachts sicher zu orientieren.</p>
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
                  <h4>Weniger Papier &amp; Müll</h4>
                  <p>Die Wasserreinigung spart im Familienalltag spürbar Toilettenpapier.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ (zielgruppenspezifisch) */}
          <section>
            <div className="wrap narrow faq">
              <div className="section-tag">Häufige Fragen</div>
              <h2 style={{ marginBottom: '22px' }}>Dusch-WC in der Familie: was oft gefragt wird</h2>

              <details open>
                <summary>Ist ein Dusch-WC für Kinder geeignet?</summary>
                <div className="ans">
                  Ja. Die Wasserreinigung ist sanfter als trockenes Papier und lässt sich in Druck und Temperatur so
                  einstellen, dass sie auch für Kinder angenehm ist. Kleinere Kinder nutzen es am besten unter Aufsicht,
                  bis sie die Bedienung sicher beherrschen.
                </div>
              </details>
              <details>
                <summary>Können mehrere Personen unterschiedliche Einstellungen nutzen?</summary>
                <div className="ans">
                  Ja. Wasserdruck, Temperatur und Düsenposition lassen sich per Fernbedienung schnell anpassen, jedes
                  Familienmitglied wählt also seine bevorzugte Einstellung.
                </div>
              </details>
              <details>
                <summary>Ist es hygienisch, wenn viele dasselbe Gerät nutzen?</summary>
                <div className="ans">
                  Gerade dann spielt es seine Stärke aus: Die Düse ist selbstreinigend und spült sich vor und nach jeder
                  Nutzung. Die Reinigung erfolgt berührungslos mit frischem Wasser.
                </div>
              </details>
              <details>
                <summary>Spart ein Dusch-WC Toilettenpapier?</summary>
                <div className="ans">
                  Ja, spürbar. Da die Reinigung mit Wasser erfolgt, braucht man deutlich weniger Papier, nur zum
                  Abtrocknen oder gar nicht, wenn die Warmluft-Trocknung genutzt wird. Das entlastet im Familienalltag
                  Budget und Müll.
                </div>
              </details>
              <details>
                <summary>Passt ein Aufsatz auf unser Familien-WC?</summary>
                <div className="ans">
                  In den meisten Fällen ja. Wichtig sind der Lochabstand der Befestigung (ca. 11–19 cm), die Breite
                  (mind. ~35 cm) und die Länge (ab ~50 cm) der Schüssel sowie ein Wasseranschluss und eine Steckdose in
                  der Nähe. Miss vor der Bestellung kurz nach.
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
                  Ein Dusch-WC ist <b>kein Medizinprodukt</b> und ersetzt keine ärztliche Behandlung. Für den Betrieb sind
                  ein Wasseranschluss und eine Steckdose nötig; die Passform hängt von den Maßen der Toilette ab. Kinder
                  nutzen das Gerät am besten unter Aufsicht.
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
              <h3 className="wd-title">Hygiene im Familienbad: was im Alltag wirklich hilft</h3>
              <p className="wd-desc">
                Vom Papiersparen bis zur sanften Reinigung für Kinder: Wir zeigen, wie ein Dusch-WC den Familienalltag
                erleichtern kann.
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
