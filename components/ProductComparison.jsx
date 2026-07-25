import DetailHeader from './DetailHeader';
import Swot from './Swot';

// Gemeinsamer, zielgruppen-unabhängiger Teil: die 5 Produktbewertungen im Detail
// und die Schnellvergleich-Tabelle. Wird von der Hauptseite und allen
// Landingpages genutzt (eine einzige Datenquelle für Anbieter/Preise/Noten).
// productUrl steuert den Redirect-/Affiliate-Link (pro Seite unterschiedlich).
export default function ProductComparison({ productUrl, audienceNotes = {} }) {
  return (
    <>
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
              href={productUrl}
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
            {audienceNotes.cd && (
              <div className="angle-note">
                <b>Für Haar &amp; Kopfhaut:</b> {audienceNotes.cd}
              </div>
            )}
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
              <a className="btn btn-block" href={productUrl}>
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
            {audienceNotes.hk && (
              <div className="angle-note">
                <b>Für Haar &amp; Kopfhaut:</b> {audienceNotes.hk}
              </div>
            )}
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
            {audienceNotes.dp && (
              <div className="angle-note">
                <b>Für Haar &amp; Kopfhaut:</b> {audienceNotes.dp}
              </div>
            )}
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
            {audienceNotes.sq && (
              <div className="angle-note">
                <b>Für Haar &amp; Kopfhaut:</b> {audienceNotes.sq}
              </div>
            )}
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
            {audienceNotes.dy && (
              <div className="angle-note">
                <b>Für Haar &amp; Kopfhaut:</b> {audienceNotes.dy}
              </div>
            )}
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
                    <span className="tbl-badge">Testsieger</span>
                    <a className="tbl-link" href={productUrl}>Ansehen →</a>
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
    </>
  );
}
