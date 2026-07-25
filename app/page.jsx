import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';
import AnimatedBars from '../components/AnimatedBars';
import Swot from '../components/Swot';
import DetailHeader from '../components/DetailHeader';
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

      {/* DETAILED ANALYSIS */}
      <section style={{ background: '#eef3f2' }}>
        <div className="wrap">
          <div className="section-tag">Jedes Modell im Detail</div>
          <h2 style={{ marginBottom: '24px' }}>So schneiden die fünf im Vergleich ab</h2>

          {/* Caldris */}
          <article className="detail" id="detail-cd">
            <DetailHeader
              rank={1}
              name="Caldris Flow Plus"
              brand="Caldris Home"
              image="/images/caldris-flow-plus.png"
              grade="A+"
              rating="9,6"
              stars="★★★★★"
              count="345"
              idealFor="design- und wellnessbewusste Haushalte mit hartem Wasser"
              href={PRODUCT_URL}
              top
            />
            <p>
              Genau da, wo die meisten anderen schwächeln, punktet der Caldris Flow Plus: besseres Duschwasser zu einem
              fairen Preis, in einem Design, das in Kundenfotos durchweg gut ankommt. Das{' '}
              <b>5-Stufen-Filtersystem mit Aktivkohle</b> nimmt sich Restchlor, feine Partikel und Rückstände vor, was
              man vor allem in Gegenden mit hartem Wasser merkt. Laut Hersteller und vielen Nutzerberichten ist er in rund
              zwei Minuten montiert: alten Duschkopf ab, Caldris dran, Wasser auf, ganz ohne Werkzeug.
            </p>
            <p>
              Was für mich den Unterschied macht, ist das Drumherum: <b>kein Pflicht-Abo</b> und nachvollziehbare
              Folgekosten, statt dieser Abo-Falle, über die sich bei der Konkurrenz so viele ärgern. Und im Karton liegt
              ein <b>Doppelfilter-System</b>, du musst also nicht sofort einen Ersatzfilter nachkaufen.
            </p>
            <div className="bars">
              <div className="bar-row">
                <div className="lbl">
                  <span>Filterleistung</span>
                  <b>9,5</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="95%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Preis-Leistung &amp; Folgekosten</span>
                  <b>9,7</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="97%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Druck &amp; Wassersparen</span>
                  <b>9,4</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="94%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Installation &amp; Design</span>
                  <b>9,8</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="98%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Service &amp; Lieferumfang</span>
                  <b>9,6</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="96%" />
                </div>
              </div>
            </div>
            <Swot
              pros={[
                {
                  title: 'Spürbar besseres Duschwasser',
                  text: 'Das 5-Stufen-Aktivkohlesystem reduziert Restchlor, Kalk und feine Rückstände. Viele Nutzer berichten von weicherer Haut und geschmeidigerem Haar, gerade in Regionen mit hartem Wasser.',
                },
                {
                  title: 'Faire Folgekosten ohne Abo',
                  text: 'Ersatzfilter kaufst du nur bei Bedarf nach, kein Pflicht-Abo, das automatisch abbucht. Die laufenden Kosten bleiben planbar und niedrig.',
                },
                {
                  title: 'Doppelfilter im Lieferumfang',
                  text: 'Das Doppelfilter-System liegt bereits im Karton bei, du musst nicht sofort einen Ersatzfilter nachkaufen.',
                },
                {
                  title: 'In 2 Minuten montiert',
                  text: 'Passt werkzeuglos auf gängige Standardanschlüsse (G½): alten Duschkopf ab, Caldris dran, Wasser auf, fertig.',
                },
                {
                  title: 'Hochwertiges, alltagstaugliches Design',
                  text: 'Klare, minimalistische Optik in Schwarz und Silber, die laut Kundenfotos in praktisch jedes Bad passt.',
                },
              ]}
              cons={[
                'Junge Marke mit noch wachsender Bewertungsbasis.',
                'Variante Silber ist zeitweise schnell vergriffen.',
              ]}
            />
            <div className="fazit">
              <b>Mein Fazit:</b> der beste Mix aus Filterleistung, Design und ehrlichen Folgekosten. Wenn du dein Bad
              aufwerten willst, ohne dich in ein Abo zu verstricken, bist du hier richtig.
            </div>
            <div style={{ marginTop: '18px' }}>
              <a className="btn btn-block" href={PRODUCT_URL}>
                Zum Anbieter →
              </a>
            </div>
          </article>

          {/* Hello Klean */}
          <article className="detail" id="detail-hk">
            <DetailHeader
              rank={2}
              name="Hello Klean Shower Head 2.0"
              brand="Hello Klean"
              image="/images/hello-klean.png"
              grade="A"
              rating="9,0"
              stars="★★★★½"
              count="554"
              idealFor="Beauty-Fans, die eine bekannte Marke bevorzugen"
            />
            <p>
              Hello Klean ist die wohl bekannteste Marke hier, mit klarem Beauty-Dreh: gefiltertes Wasser für Haut und
              Haar, viele Bewertungen, schöner Auftritt. Drin steckt ein <b>2-Stufen-Filter</b>, der laut Hersteller
              Chlor, Metalle und Verunreinigungen aus hartem Wasser holt. Mein Problem damit: Es dreht sich fast alles
              ums <b>„Smart Refill"-Abo</b>, als Einmalkäufer fühlt man sich fast verloren. Der Einmalkauf liegt bei rund
              <b> 90 €</b> und damit über den meisten Konkurrenten – spürbar günstiger wird es nur mit dem Filter-Abo. Dazu
              war es in der EU zwischendurch ausverkauft.
            </p>
            <div className="bars">
              <div className="bar-row">
                <div className="lbl">
                  <span>Filterleistung</span>
                  <b>9,2</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="92%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Preis-Leistung &amp; Folgekosten</span>
                  <b>7,8</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="78%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Druck &amp; Wassersparen</span>
                  <b>8,8</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="88%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Installation &amp; Design</span>
                  <b>9,4</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="94%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Service &amp; Lieferumfang</span>
                  <b>8,5</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="85%" />
                </div>
              </div>
            </div>
            <Swot
              pros={[
                { title: 'Bekannte Marke', text: 'Hohe Bekanntheit und sehr viele Bewertungen, mit klarem Beauty-Fokus auf Haut und Haar.' },
                { title: 'Hochwertige Markenwelt', text: 'Professioneller Auftritt und ansprechendes Design.' },
              ]}
              cons={[
                'Smart-Refill-Abo als Standard, der Kauf ist für Einmalkäufer unübersichtlich.',
                'Ersatzfilter ca. 40 € alle 3-4 Monate, hohe laufende Kosten.',
                'Teurer Einmalkauf (rund 90 €), günstiger nur mit Filter-Abo.',
                'In der EU zeitweise ausverkauft.',
              ]}
            />
            <div className="fazit">
              <b>Mein Fazit:</b> für Beauty-Fans eine starke Marke, aber wenn du keine Lust auf laufende Abo-Kosten hast,
              kommst du mit meinem Testsieger günstiger und entspannter weg.
            </div>
          </article>

          {/* Dupor */}
          <article className="detail" id="detail-dp">
            <DetailHeader
              rank={3}
              name="Dupor Filterduschkopf"
              brand="Dupor"
              image="/images/dupor.png"
              grade="B+"
              rating="8,4"
              stars="★★★★"
              count="35"
              idealFor="preisbewusste Käufer, die solide Filterung suchen"
            />
            <p>
              Dupor kommt meinem Testsieger inhaltlich am nächsten: deutscher Auftritt, <b>4-Stufen-Filterung</b>{' '}
              (Sediment-, HPS-, HAC-Faserfilter und AG-Ball, teils mit NSF-/FDA-Zertifizierung), Wassersparen und mehr
              Druck. Ersatzfilter gibt's separat, gewechselt wird alle 2-3 Monate. Was mir fehlt: Der Auftritt wirkt
              weniger hochwertig, auf der Produktseite sieht man nur eine Handvoll ausgewählter Stimmen, und die Marke hat
              einfach nicht die Strahlkraft von Hello Klean oder Caldris.
            </p>
            <div className="bars">
              <div className="bar-row">
                <div className="lbl">
                  <span>Filterleistung</span>
                  <b>8,7</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="87%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Preis-Leistung &amp; Folgekosten</span>
                  <b>8,8</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="88%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Druck &amp; Wassersparen</span>
                  <b>8,5</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="85%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Installation &amp; Design</span>
                  <b>7,9</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="79%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Service &amp; Lieferumfang</span>
                  <b>8,1</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="81%" />
                </div>
              </div>
            </div>
            <Swot
              pros={[
                { title: 'Solide Filterung', text: '4-Stufen-System (teils NSF-/FDA-zertifiziert), das Chlor, Kalk und Partikel reduziert.' },
                { title: 'Kein Abo', text: 'Ersatzfilter separat nachkaufbar, deutscher Auftritt mit ordentlichen Filter-Infos.' },
              ]}
              cons={[
                'Kleine, wenig transparente Bewertungsbasis.',
                'Weniger hochwertiges Design.',
                'Schwächere Marken- und Bildwelt.',
              ]}
            />
            <div className="fazit">
              <b>Mein Fazit:</b> eine vernünftige, preisbewusste Alternative, aber beim Gesamtgefühl aus Design, Vertrauen
              und Klarheit liegt Caldris für mich vorn.
            </div>
          </article>

          {/* Sanquell */}
          <article className="detail" id="detail-sq">
            <DetailHeader
              rank={4}
              name="Sanquell Schutzfilter-Duschkopf"
              brand="Sanquell"
              image="/images/sanquell.png"
              grade="B"
              rating="8,0"
              stars="★★★★"
              count="190"
              idealFor="Hotels, Gewerbe und gesundheitlich empfindliche Haushalte"
            />
            <p>
              Sanquell spielt ehrlich gesagt in einer anderen Liga, nur eben einer ganz anderen. Hier geht's um{' '}
              <b>zertifizierte Sicherheitsfilterung</b> (0,085-µm-Hohlfasermembran, Log 8, u. a. nach ASTM F838) für
              Hotels, Gewerbe, Schulen oder gesundheitlich empfindliche Haushalte. Wer wirklich einen Schutzfilter gegen
              Legionellen und Bakterien braucht, ist hier goldrichtig. Fürs ganz normale Wellness-Duschen ist das aber
              überdimensioniert: Das Set kostet rund 115 €, fühlt sich eher medizinisch als gemütlich an, und die{' '}
              <b>Ersatzfilter sind mit ca. 70 € teuer</b> (halten bis zu ~6 Monate bzw. 6.500 L). Beim Wasserdruck und der
              Filterlaufzeit gibt's außerdem Kritik.
            </p>
            <div className="bars">
              <div className="bar-row">
                <div className="lbl">
                  <span>Filterleistung</span>
                  <b>9,3</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="93%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Preis-Leistung &amp; Folgekosten</span>
                  <b>6,8</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="68%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Druck &amp; Wassersparen</span>
                  <b>7,2</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="72%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Installation &amp; Design</span>
                  <b>7,6</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="76%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Service &amp; Lieferumfang</span>
                  <b>8,4</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="84%" />
                </div>
              </div>
            </div>
            <Swot
              pros={[
                { title: 'Zertifizierte Sicherheitsfilterung', text: '0,085-µm-Membran (Log 8, u. a. nach ASTM F838), ideal gegen Legionellen und Bakterien.' },
                { title: 'Hohe technische Glaubwürdigkeit', text: 'Starke Wahl für Hotels, Gewerbe, Schulen und gesundheitlich empfindliche Haushalte.' },
              ]}
              cons={[
                'Teure Ersatzfilter (ca. 70 €).',
                'Kritik an Wasserdruck und Filterlaufzeit.',
                'Medizinisch-nüchtern statt Wellness, fürs Alltagsduschen überdimensioniert.',
                'Hoher Set-Preis (rund 115 €).',
              ]}
            />
            <div className="fazit">
              <b>Mein Fazit:</b> top für Sicherheit und den gewerblichen Einsatz, fürs tägliche Duschen aber zu teuer und
              eine Nummer zu groß.
            </div>
          </article>

          {/* Doyoo */}
          <article className="detail" id="detail-dy">
            <DetailHeader
              rank={5}
              name="Doyoo Pure 3in1 Beauty-Duschkopf"
              brand="Doyoo"
              image="/images/doyoo.png"
              grade="C+"
              rating="7,2"
              stars="★★★½"
              count="169"
              idealFor="Schnäppchenjäger mit Fokus auf den Preis"
            />
            <p>
              Doyoo fährt das volle Verkaufs-Programm: Aktionspreis (69 € statt 159 €), Gratis-Extras (Peeling-Schwamm
              &amp; Reinigungsbürste im Wert von ~49,90 €), Countdown und reichlich Social Proof (4,8★ aus 3.200+
              shop-eigenen Bewertungen). Das macht Lust auf den schnellen Klick. Schaut man aber auf unabhängige Stimmen,
              kippt das Bild: Auf Trustpilot stehen <b>nur 4,0 aus rund 169 Bewertungen</b>, mit auffällig vielen
              1-Stern-Erfahrungen, vor allem wegen <b>langer Lieferzeiten und mühsamer Retouren</b>. Für mich ein
              Vertrauensthema.
            </p>
            <div className="bars">
              <div className="bar-row">
                <div className="lbl">
                  <span>Filterleistung</span>
                  <b>7,6</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="76%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Preis-Leistung &amp; Folgekosten</span>
                  <b>7,8</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="78%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Druck &amp; Wassersparen</span>
                  <b>7,4</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="74%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Installation &amp; Design</span>
                  <b>7,2</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="72%" />
                </div>
              </div>
              <div className="bar-row">
                <div className="lbl">
                  <span>Service &amp; Lieferumfang</span>
                  <b>5,8</b>
                </div>
                <div className="track">
                  <div className="fill" data-width="58%" />
                </div>
              </div>
            </div>
            <Swot
              pros={[
                { title: 'Niedriger Aktionspreis', text: 'Günstiger Einstieg mit Gratis-Extras (Peeling-Schwamm und Reinigungsbürste).' },
                { title: 'Auffälliges Marketing', text: 'Viel Social Proof auf der shop-eigenen Seite.' },
              ]}
              cons={[
                'Trustpilot nur 4,0 mit auffällig vielen 1-Stern-Bewertungen.',
                'Mühsame Retouren- und Reklamationsabwicklung.',
                'Berichte über lange Lieferzeiten.',
                'Folgekosten und Filterwechsel-Intervall unklar.',
              ]}
            />
            <div className="fazit">
              <b>Mein Fazit:</b> günstiger Einstieg für Schnäppchenjäger, aber das Risiko bei Service und Rücksendung
              spricht für mich klar für eine Marke, bei der die Abwicklung zuverlässiger läuft, wie Caldris.
            </div>
          </article>
        </div>
      </section>

      {/* COMPARISON TABLE */}
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
                  <th>Filter</th>
                  <th>Preis</th>
                  <th>Folgekosten</th>
                  <th>Abo nötig?</th>
                  <th>Lieferumfang</th>
                </tr>
              </thead>
              <tbody>
                <tr className="win-row">
                  <td className="col-win pcell">
                    <span className="mob-emp">Unsere Empfehlung</span>
                    <span className="pname">Caldris Flow Plus</span>
                    <br />
                    <span style={{ fontSize: '12px', color: '#8a6a12', fontWeight: 600 }}>Testsieger</span>
                    <br />
                    <a className="tbl-link" href={PRODUCT_URL}>Ansehen →</a>
                  </td>
                  <td className="col-win" data-label="Note">
                    <b>9,6</b>
                  </td>
                  <td className="col-win" data-label="Filter">5-Stufen Aktivkohle</td>
                  <td className="col-win" data-label="Preis">
                    <b>79 €</b>
                  </td>
                  <td className="col-win" data-label="Folgekosten">optional</td>
                  <td className="col-win" data-label="Abo nötig?">
                    <span className="check">Nein ✓</span>
                  </td>
                  <td className="col-win" data-label="Lieferumfang">
                    <span className="check">Doppelfilter, kein Abo</span>
                  </td>
                </tr>
                <tr>
                  <td className="pcell">
                    <span className="pname">Hello Klean 2.0</span>
                  </td>
                  <td data-label="Note">9,0</td>
                  <td data-label="Filter">2-Stufen</td>
                  <td data-label="Preis">90 € (Abo günstiger)</td>
                  <td data-label="Folgekosten">~40 €/3-4 Mon.</td>
                  <td data-label="Abo nötig?">
                    <span className="cross">Abo-Standard</span>
                  </td>
                  <td data-label="Lieferumfang">nur Duschkopf</td>
                </tr>
                <tr>
                  <td className="pcell">
                    <span className="pname">Dupor</span>
                  </td>
                  <td data-label="Note">8,4</td>
                  <td data-label="Filter">4-Stufen</td>
                  <td data-label="Preis">89 €</td>
                  <td data-label="Folgekosten">separat</td>
                  <td data-label="Abo nötig?">
                    <span className="check">Nein</span>
                  </td>
                  <td data-label="Lieferumfang">Komplettset</td>
                </tr>
                <tr>
                  <td className="pcell">
                    <span className="pname">Sanquell</span>
                  </td>
                  <td data-label="Note">8,0</td>
                  <td data-label="Filter">0,085-µm-Membran</td>
                  <td data-label="Preis">115 €</td>
                  <td data-label="Folgekosten">
                    <span className="cross">~70 €/Filter</span>
                  </td>
                  <td data-label="Abo nötig?">
                    <span className="check">Nein</span>
                  </td>
                  <td data-label="Lieferumfang">nur Duschkopf</td>
                </tr>
                <tr>
                  <td className="pcell">
                    <span className="pname">Doyoo</span>
                  </td>
                  <td data-label="Note">7,2</td>
                  <td data-label="Filter">3in1</td>
                  <td data-label="Preis">69 €</td>
                  <td data-label="Folgekosten">unklar</td>
                  <td data-label="Abo nötig?">
                    <span className="check">Nein</span>
                  </td>
                  <td data-label="Lieferumfang">2 Gratis-Aufsätze</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '12px', marginTop: '10px' }}>
            Stand: Juni 2026. Preise &amp; Verfügbarkeiten der Wettbewerber können sich ändern; Angaben basieren auf
            öffentlich verfügbaren Hersteller- und Bewertungsdaten.
          </p>
        </div>
      </section>

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
