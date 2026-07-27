import DetailHeader from './DetailHeader';
import Swot from './Swot';

// Gemeinsamer, zielgruppen-unabhängiger Teil für die Dusch-WC-Seiten:
// die 5 Modellbewertungen im Detail und die Schnellvergleich-Tabelle.
// Wird von der Haupt-Vergleichsseite (/dusch-wc) und allen zielgruppen-
// spezifischen Landingpages genutzt (eine einzige Datenquelle für
// Modelle/Preise/Noten). productUrl steuert den Redirect-/Affiliate-Link
// (pro Seite unterschiedlich). audienceNotes ergänzt je Modell einen kurzen
// Hinweis mit Blick auf die jeweilige Zielgruppe; audienceLabel ist der
// fette Vorspann dieses Hinweises (z. B. "Für Senioren:").
export default function DuschWcComparison({ productUrl, audienceNotes = {}, audienceLabel = 'Hinweis' }) {
  return (
    <>
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
              href={productUrl}
              top
            />
            <p>
              Genau da, wo die anderen entweder sehr teuer oder sehr abgespeckt sind, trifft der CaldrisWave Pro die
              Mitte: ein smarter Dusch-WC-Aufsatz mit <b>kompletter Ausstattung</b> zu einem Preis, der nicht wehtut.
              An Bord sind warme <b>Wasserreinigung mit einstellbarer Intensität</b> (Gesäß- und separate Ladydusche),{' '}
              <b>bewegliche Reinigung</b>, <b>Sitzheizung</b>, <b>Warmluft-Trocknung</b> und eine{' '}
              <b>selbstreinigende Düse</b>. Bedient wird alles über eine übersichtliche Fernbedienung mit Display,
              bewusst so gestaltet, dass auch ältere Personen und Kinder gut zurechtkommen.
            </p>
            <p>
              Der für mich entscheidende Unterschied steckt im Detail: Das Warmwasser kommt aus einer{' '}
              <b>Sofort-Heizung im Durchlaufprinzip</b>, das Wasser wird also erst warm, wenn's gebraucht wird, statt
              aus einem kleinen Tank, der nach wenigen Sekunden kalt wird. Und weil es ein <b>Aufsatz</b> ist, ersetzt
              er einfach deinen WC-Sitz auf der vorhandenen Toilette: kein neues WC, kein teurer Umbau. Du brauchst nur
              Wasseranschluss und Steckdose in der Nähe (Lochabstand ca. 11–19 cm).
            </p>
            {audienceNotes.cd && (
              <div className="angle-note">
                <b>{audienceLabel}:</b> {audienceNotes.cd}
              </div>
            )}
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
              <a className="btn btn-block" href={productUrl}>
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
              image="/images/geberit.webp"
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
            {audienceNotes.gb && (
              <div className="angle-note">
                <b>{audienceLabel}:</b> {audienceNotes.gb}
              </div>
            )}
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
              image="/images/toto.webp"
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
            {audienceNotes.tt && (
              <div className="angle-note">
                <b>{audienceLabel}:</b> {audienceNotes.tt}
              </div>
            )}
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
              image="/images/viclean.webp"
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
            {audienceNotes.vb && (
              <div className="angle-note">
                <b>{audienceLabel}:</b> {audienceNotes.vb}
              </div>
            )}
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
              <b>Mein Fazit:</b> schön und markenstark, aber du zahlst spürbar fürs Logo. Fürs gleiche Ergebnis reicht
              ein gut ausgestatteter Aufsatz zum Bruchteil des Preises.
            </div>
          </article>

          {/* No-Name Aufsatz */}
          <article className="detail" id="detail-nn">
            <DetailHeader
              rank={5}
              name="No-Name Dusch-WC-Aufsatz"
              brand="diverse Marktplatz-Anbieter"
              image="/images/no-name.jpg"
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
            {audienceNotes.nn && (
              <div className="angle-note">
                <b>{audienceLabel}:</b> {audienceNotes.nn}
              </div>
            )}
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
                    <a className="tbl-link" href={productUrl}>Ansehen →</a>
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
    </>
  );
}
