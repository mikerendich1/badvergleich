import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../components/Hero';
import AnimatedBars from '../../components/AnimatedBars';
import DetailHeader from '../../components/DetailHeader';
import Swot from '../../components/Swot';
import StickyBuyBar from '../../components/StickyBuyBar';

export const metadata = {
  title: 'Dusch-WC im Test 2026: die 5 besten Dusch-WC-Aufsätze im Vergleich | BadVergleich',
  description:
    'Dusch-WC-Aufsatz gesucht? Wir vergleichen 5 Modelle (CaldrisWave Pro, Geberit AquaClean, TOTO Washlet, Villeroy & Boch ViClean, No-Name) nach Reinigung, Komfort, Preis und Installation. Ehrlich statt übertrieben.',
};

// Eigener Redirect für diese Vergleichsseite (siehe next.config.mjs) → separate Klick-Zuordnung.
const PRODUCT_URL = '/dusch-wc-sieger';

export default function Page() {
  return (
    <>
      <div className="anzeige-bar">
        <strong>Dusch-WC-Aufsätze</strong> · Vergleich &amp; Kaufberatung 2026
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
          <span>Dusch-WC-Aufsätze</span>
        </div>
      </div>

      <div className="shell">
        <main className="shell-main">
          <Hero title="Dusch-WC im Test 2026: meine 5 Favoriten unter den Dusch-WC-Aufsätzen" />

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

          {/* DETAILLIERTE ANALYSE (5 Modelle) */}
          <section style={{ background: '#eef3f2' }}>
            <div className="wrap">
              <div className="section-tag">Jedes Modell im Detail</div>
              <h2 style={{ marginBottom: '24px' }}>So schneiden die fünf im Vergleich ab</h2>

              {/* CaldrisWave Pro */}
              <article className="detail" id="detail-cd">
                <DetailHeader
                  rank={1}
                  name="CaldrisWave Pro"
                  brand="Caldris Home"
                  image="/images/caldriswave-pro.jpg"
                  grade="A+"
                  rating="9,5"
                  stars="★★★★★"
                  count="128"
                  idealFor="komfortbewusste Haushalte, die volle Ausstattung ohne Premium-Preis wollen"
                  href={PRODUCT_URL}
                  top
                />
                <p>
                  Genau da, wo die anderen entweder sehr teuer oder sehr abgespeckt sind, trifft der CaldrisWave Pro die
                  Mitte: ein smarter Dusch-WC-Aufsatz mit <b>kompletter Ausstattung</b> zu einem Preis, der nicht wehtut.
                  An Bord sind warme <b>Wasserreinigung mit einstellbarer Intensität</b> (Gesäß- und separate
                  Ladydusche), <b>bewegliche Reinigung</b>, <b>Sitzheizung</b>, <b>Warmluft-Trocknung</b> und eine{' '}
                  <b>selbstreinigende Düse</b>. Bedient wird alles über eine übersichtliche Fernbedienung mit Display,
                  bewusst so gestaltet, dass auch ältere Personen und Kinder gut zurechtkommen.
                </p>
                <p>
                  Der für mich entscheidende Unterschied steckt im Detail: Das Warmwasser kommt aus einer{' '}
                  <b>Sofort-Heizung im Durchlaufprinzip</b>, das Wasser wird also erst warm, wenn's gebraucht wird, statt
                  aus einem kleinen Tank, der nach wenigen Sekunden kalt wird. Und weil es ein <b>Aufsatz</b> ist,
                  ersetzt er einfach deinen WC-Sitz auf der vorhandenen Toilette: kein neues WC, kein teurer Umbau. Du
                  brauchst nur Wasseranschluss und Steckdose in der Nähe (Lochabstand ca. 11–19 cm).
                </p>
                <div className="bars">
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Reinigung &amp; Hygiene</span>
                      <b>9,4</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="94%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Komfort &amp; Ausstattung</span>
                      <b>9,5</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="95%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Preis-Leistung</span>
                      <b>9,7</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="97%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Installation &amp; Alltag</span>
                      <b>9,5</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="95%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Service &amp; Lieferumfang</span>
                      <b>9,3</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="93%" />
                    </div>
                  </div>
                </div>
                <Swot
                  pros={[
                    {
                      title: 'Volle Ausstattung ohne Premium-Preis',
                      text: 'Warme Wasserreinigung mit einstellbarer Intensität, Gesäß- und Ladydusche, Sitzheizung, Warmluft-Trocknung und Fernbedienung, alles zum fairen Preis von 329 €.',
                    },
                    {
                      title: 'Sofort-Warmwasser statt Tank',
                      text: 'Die Durchlauf-Sofortheizung liefert dauerhaft warmes Wasser, statt nach ein paar Sekunden kalt zu werden wie bei vielen günstigen Tank-Aufsätzen.',
                    },
                    {
                      title: 'Selbstmontage ohne teuren Fachmann',
                      text: 'Ersetzt als Aufsatz einfach den alten WC-Sitz auf der vorhandenen Toilette, kein neues WC und kein Umbau. Benötigt nur Wasseranschluss und Steckdose.',
                    },
                    {
                      title: 'Durchdachte, seniorenfreundliche Bedienung',
                      text: 'Übersichtliche Fernbedienung mit kontrastreichem Display, selbstreinigende Düse, Sitzsensor und Nachtlicht für den Alltag.',
                    },
                    {
                      title: 'Hygienisch dank Selbstreinigung',
                      text: 'Die Düse spült sich vor und nach der Nutzung selbst, einstellbare Düsenposition, Wasserdruck und Temperatur inklusive.',
                    },
                  ]}
                  cons={[
                    'Junge Marke mit noch wachsender Bewertungsbasis.',
                    'Setzt Wasseranschluss und Steckdose neben der Toilette voraus (wie bei jedem Dusch-WC).',
                  ]}
                />
                <div className="fazit">
                  <b>Mein Fazit:</b> der beste Mix aus Komfort, Hygiene und ehrlichem Preis. Wer ein voll ausgestattetes
                  Dusch-WC will, ohne vierstellige Summen für Marke und Fachmontage, ist hier goldrichtig.
                </div>
                <div style={{ marginTop: '18px' }}>
                  <a className="btn btn-block" href={PRODUCT_URL}>
                    Zum Anbieter →
                  </a>
                </div>
              </article>

              {/* Geberit AquaClean */}
              <article className="detail" id="detail-gb">
                <DetailHeader
                  rank={2}
                  name="Geberit AquaClean"
                  brand="Geberit"
                  image="/images/wc-placeholder.svg"
                  grade="A"
                  rating="8,8"
                  stars="★★★★½"
                  count="410"
                  idealFor="Käufer, die eine bekannte Premium-Marke und Fachhandel bevorzugen"
                />
                <p>
                  Geberit ist die wohl bekannteste Marke im Dusch-WC-Regal und technisch über jeden Zweifel erhaben:
                  saubere Verarbeitung, <b>WhirlSpray-Duschtechnik</b>, Geruchsabsaugung, App-Steuerung, je nach Modell
                  bis hin zur Komplettanlage. Wer auf einen großen Namen und Fachhandel Wert legt, macht damit nichts
                  falsch. Mein Punkt ist der <b>Preis</b>: Die Aufsatz-Modelle (z. B. Tuma) starten oft im{' '}
                  <b>hohen vierstelligen</b> Bereich, die Komplettanlagen liegen noch deutlich darüber. Dazu wird häufig
                  eine Montage durch den Fachbetrieb empfohlen, was noch einmal Kosten bedeutet.
                </p>
                <div className="bars">
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Reinigung &amp; Hygiene</span>
                      <b>9,4</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="94%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Komfort &amp; Ausstattung</span>
                      <b>9,3</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="93%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Preis-Leistung</span>
                      <b>7,2</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="72%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Installation &amp; Alltag</span>
                      <b>7,6</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="76%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Service &amp; Lieferumfang</span>
                      <b>9,0</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="90%" />
                    </div>
                  </div>
                </div>
                <Swot
                  pros={[
                    { title: 'Bekannte Premium-Marke', text: 'Sehr gute Verarbeitung, ausgereifte Duschtechnik und breites Händler- und Servicenetz.' },
                    { title: 'Umfangreiche Ausstattung', text: 'Je nach Modell mit Geruchsabsaugung, App-Steuerung und Nutzerprofilen.' },
                  ]}
                  cons={[
                    'Hoher Preis: Aufsätze meist vierstellig, Komplettanlagen noch teurer.',
                    'Fachmontage oft empfohlen, zusätzliche Kosten.',
                    'Für viele Haushalte schlicht überdimensioniert und zu teuer.',
                  ]}
                />
                <div className="fazit">
                  <b>Mein Fazit:</b> technisch top und eine sichere Marke, aber für das gebotene Alltagsergebnis zahlst du
                  ein Vielfaches meines Testsiegers.
                </div>
              </article>

              {/* TOTO Washlet */}
              <article className="detail" id="detail-tt">
                <DetailHeader
                  rank={3}
                  name="TOTO Washlet"
                  brand="TOTO"
                  image="/images/wc-placeholder.svg"
                  grade="A-"
                  rating="8,4"
                  stars="★★★★"
                  count="260"
                  idealFor="Technik-Fans, die den Dusch-WC-Pionier aus Japan wollen"
                />
                <p>
                  TOTO hat das moderne Dusch-WC quasi erfunden, und das merkt man: Die <b>Washlet</b>-Aufsätze reinigen
                  sehr fein dosiert, mit oszillierender Düse, Warmluft-Trocknung und beheiztem Sitz. Qualitativ absolut
                  ernstzunehmen. Meine Vorbehalte sind praktischer Natur: In Deutschland ist die Marke weniger breit
                  vertreten, <b>Ersatzteile und Service</b> können umständlicher sein, und je nach Modell muss man beim{' '}
                  <b>Wasseranschluss und der Passform</b> genauer hinschauen. Preislich liegen die Washlets meist
                  <b> deutlich über</b> einem gut ausgestatteten Aufsatz wie meinem Testsieger.
                </p>
                <div className="bars">
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Reinigung &amp; Hygiene</span>
                      <b>9,3</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="93%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Komfort &amp; Ausstattung</span>
                      <b>9,0</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="90%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Preis-Leistung</span>
                      <b>7,6</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="76%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Installation &amp; Alltag</span>
                      <b>7,8</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="78%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Service &amp; Lieferumfang</span>
                      <b>7,9</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="79%" />
                    </div>
                  </div>
                </div>
                <Swot
                  pros={[
                    { title: 'Pionier mit ausgereifter Technik', text: 'Sehr feine, angenehme Reinigung mit oszillierender Düse, beheiztem Sitz und Warmluft-Trocknung.' },
                    { title: 'Hohe Qualitätsanmutung', text: 'Langjährige Erfahrung und starker Ruf im Dusch-WC-Markt.' },
                  ]}
                  cons={[
                    'In Deutschland weniger verbreitet, Service und Ersatzteile umständlicher.',
                    'Preis meist deutlich höher als bei einem gut ausgestatteten Aufsatz.',
                    'Passform und Wasseranschluss je nach Modell genau prüfen.',
                  ]}
                />
                <div className="fazit">
                  <b>Mein Fazit:</b> für Technik-Enthusiasten eine feine Sache, im deutschen Alltag aber teurer und beim
                  Service etwas fummeliger als nötig.
                </div>
              </article>

              {/* Villeroy & Boch ViClean */}
              <article className="detail" id="detail-vb">
                <DetailHeader
                  rank={4}
                  name="Villeroy & Boch ViClean-U+"
                  brand="Villeroy & Boch"
                  image="/images/wc-placeholder.svg"
                  grade="B+"
                  rating="8,0"
                  stars="★★★★"
                  count="150"
                  idealFor="Design-orientierte Käufer, die im Fachhandel kaufen"
                />
                <p>
                  Villeroy &amp; Boch bringt beim <b>ViClean-U+</b> vor allem eins mit: Design und Markenvertrauen. Der
                  Aufsatz sieht hochwertig aus, reinigt zuverlässig mit warmem Wasser, bietet Sitzheizung, Trocknung und
                  eine Fernbedienung. Als Marke aus der Sanitärwelt wirkt das rundum stimmig. Nur: Der Preis liegt meist
                  im <b>oberen dreistelligen bis vierstelligen</b> Bereich, gekauft wird bevorzugt über den Fachhandel,
                  und beim reinen Funktionsumfang bekommst du woanders für weniger Geld genauso viel. Für mich ein
                  schönes, aber teuer bezahltes Markenprodukt.
                </p>
                <div className="bars">
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Reinigung &amp; Hygiene</span>
                      <b>8,9</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="89%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Komfort &amp; Ausstattung</span>
                      <b>8,6</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="86%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Preis-Leistung</span>
                      <b>7,8</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="78%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Installation &amp; Alltag</span>
                      <b>7,9</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="79%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Service &amp; Lieferumfang</span>
                      <b>8,3</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="83%" />
                    </div>
                  </div>
                </div>
                <Swot
                  pros={[
                    { title: 'Hochwertiges Marken-Design', text: 'Stimmige Optik aus der Sanitärwelt, solide Reinigung mit Sitzheizung und Trocknung.' },
                    { title: 'Vertrauenswürdige Marke', text: 'Etablierter Hersteller mit Fachhandels-Anbindung.' },
                  ]}
                  cons={[
                    'Hoher Preis für den gebotenen Funktionsumfang.',
                    'Kauf meist über den Fachhandel statt unkompliziert online.',
                    'Beim Funktionsumfang kein Vorsprung gegenüber günstigeren Aufsätzen.',
                  ]}
                />
                <div className="fazit">
                  <b>Mein Fazit:</b> schön und markenstark, aber du zahlst spürbar fürs Logo. Fürs gleiche Ergebnis
                  reicht ein gut ausgestatteter Aufsatz zum Bruchteil des Preises.
                </div>
              </article>

              {/* No-Name Aufsatz */}
              <article className="detail" id="detail-nn">
                <DetailHeader
                  rank={5}
                  name="No-Name Dusch-WC-Aufsatz"
                  brand="diverse Marktplatz-Anbieter"
                  image="/images/wc-placeholder.svg"
                  grade="C+"
                  rating="6,8"
                  stars="★★★½"
                  count="95"
                  idealFor="Schnäppchenjäger mit Fokus auf den niedrigsten Preis"
                />
                <p>
                  Auf Amazon &amp; Co. gibt es Dusch-WC-Aufsätze schon ab rund <b>150–250 €</b>, oft mit langer
                  Funktionsliste und vielen Sternen. Für den Einstieg klingt das verlockend. In den unabhängigen
                  Bewertungen kippt das Bild aber häufig: <b>Tank-Warmwasser</b>, das nach wenigen Sekunden kalt wird,
                  schwächelnde Elektronik, <b>unklare Ersatzteile</b> und ein Kundenservice, der bei Problemen schwer
                  erreichbar ist. Gerade bei einem Gerät mit Wasser und Strom ist mir <b>zuverlässiger Support und
                  Gewährleistung</b> zu wichtig, um am falschen Ende zu sparen.
                </p>
                <div className="bars">
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Reinigung &amp; Hygiene</span>
                      <b>7,2</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="72%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Komfort &amp; Ausstattung</span>
                      <b>7,4</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="74%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Preis-Leistung</span>
                      <b>8,0</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="80%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Installation &amp; Alltag</span>
                      <b>7,0</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="70%" />
                    </div>
                  </div>
                  <div className="bar-row">
                    <div className="lbl">
                      <span>Service &amp; Lieferumfang</span>
                      <b>5,6</b>
                    </div>
                    <div className="track">
                      <div className="fill" data-width="56%" />
                    </div>
                  </div>
                </div>
                <Swot
                  pros={[
                    { title: 'Niedriger Einstiegspreis', text: 'Günstigster Weg zum ersten Dusch-WC-Erlebnis, oft mit langer Funktionsliste.' },
                    { title: 'Viele Modelle verfügbar', text: 'Breite Auswahl auf den großen Online-Marktplätzen.' },
                  ]}
                  cons={[
                    'Häufig Tank-Warmwasser, das schnell kalt wird.',
                    'Unklare Ersatzteile und schwer erreichbarer Service.',
                    'Berichte über schwächelnde Elektronik und kurze Haltbarkeit.',
                    'Gewährleistung und Garantie bei Problemen oft mühsam.',
                  ]}
                />
                <div className="fazit">
                  <b>Mein Fazit:</b> günstiger Einstieg, aber bei einem Wasser-Strom-Gerät ist mir Verlässlichkeit wichtiger.
                  Das Risiko bei Service und Haltbarkeit spricht klar für eine Marke mit echtem Support wie Caldris.
                </div>
              </article>
            </div>
          </section>

          {/* SCHNELLVERGLEICH TABELLE */}
          <section>
            <div className="wrap">
              <div className="section-tag">Schnellvergleich</div>
              <h2 style={{ marginBottom: '20px' }}>Alle 5 nebeneinander, damit du's schneller hast</h2>
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Modell</th>
                      <th>Note</th>
                      <th>Typ</th>
                      <th>Preis</th>
                      <th>Warmwasser</th>
                      <th>Montage</th>
                      <th>Ausstattung</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="win-row">
                      <td className="col-win pcell">
                        <span className="mob-emp">Unsere Empfehlung</span>
                        <span className="pname">CaldrisWave Pro</span>
                        <br />
                        <span style={{ fontSize: '12px', color: '#8a6a12', fontWeight: 600 }}>Testsieger</span>
                        <br />
                        <a className="tbl-link" href={PRODUCT_URL}>Ansehen →</a>
                      </td>
                      <td className="col-win" data-label="Note">
                        <b>9,5</b>
                      </td>
                      <td className="col-win" data-label="Typ">Aufsatz</td>
                      <td className="col-win" data-label="Preis">
                        <b>329 €</b>
                      </td>
                      <td className="col-win" data-label="Warmwasser">
                        <span className="check">Sofort-Heizung</span>
                      </td>
                      <td className="col-win" data-label="Montage">
                        <span className="check">Selbst</span>
                      </td>
                      <td className="col-win" data-label="Ausstattung">
                        <span className="check">voll, Fernbedienung</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pcell">
                        <span className="pname">Geberit AquaClean</span>
                      </td>
                      <td data-label="Note">8,8</td>
                      <td data-label="Typ">Aufsatz / Komplett</td>
                      <td data-label="Preis">
                        <span className="cross">ab ~1.800 €</span>
                      </td>
                      <td data-label="Warmwasser">Durchlauf</td>
                      <td data-label="Montage">Fachmann empf.</td>
                      <td data-label="Ausstattung">sehr voll</td>
                    </tr>
                    <tr>
                      <td className="pcell">
                        <span className="pname">TOTO Washlet</span>
                      </td>
                      <td data-label="Note">8,4</td>
                      <td data-label="Typ">Aufsatz</td>
                      <td data-label="Preis">ab ~700 €</td>
                      <td data-label="Warmwasser">Durchlauf</td>
                      <td data-label="Montage">selbst / Fachmann</td>
                      <td data-label="Ausstattung">voll</td>
                    </tr>
                    <tr>
                      <td className="pcell">
                        <span className="pname">V&amp;B ViClean-U+</span>
                      </td>
                      <td data-label="Note">8,0</td>
                      <td data-label="Typ">Aufsatz</td>
                      <td data-label="Preis">ab ~900 €</td>
                      <td data-label="Warmwasser">Durchlauf</td>
                      <td data-label="Montage">Fachhandel</td>
                      <td data-label="Ausstattung">voll</td>
                    </tr>
                    <tr>
                      <td className="pcell">
                        <span className="pname">No-Name Aufsatz</span>
                      </td>
                      <td data-label="Note">6,8</td>
                      <td data-label="Typ">Aufsatz</td>
                      <td data-label="Preis">ab ~150 €</td>
                      <td data-label="Warmwasser">
                        <span className="cross">oft Tank</span>
                      </td>
                      <td data-label="Montage">selbst</td>
                      <td data-label="Ausstattung">variiert</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '12px', marginTop: '10px' }}>
                Stand: Juli 2026. Preise, Ausstattung &amp; Verfügbarkeiten der Wettbewerber können sich ändern und
                variieren je nach Modell/Händler; Angaben basieren auf öffentlich verfügbaren Hersteller- und
                Bewertungsdaten.
              </p>
            </div>
          </section>

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
