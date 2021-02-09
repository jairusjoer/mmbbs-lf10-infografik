import { createUseStyles } from 'react-jss'
import Masthead from "../components/Masthead";
import Chapter from "../components/Chapter";
import Section from "../components/Section";
import ChartComparsion from "../components/ChartComparsion";
import ChartGallery from "../components/ChartGallery";
import ChartMSCI from '../components/ChartMSCI';

/* Styles */
const useStyles = createUseStyles({
  reportContent: {
    display: 'grid',
    gridTemplateColumns: 'auto [content] minmax(288px, 720px) auto',
    gridColumnGap: 16,
    padding: '64px 0'
  },
})

/* Structure */
function Report() {
  const styles = useStyles();
  return (
    <div className="report">
      <Masthead />
      <main className={styles.reportContent} id="report">
        <Chapter title='Report'>
          <Section title="Einführung">
            <p>
              Die Auswirkungen von COVID-19 spiegeln sich in nahezu sämtlichen Aspekten der globalen Wirtschaft wider. Weitreichende Veränderungen des alltäglichen Lebens betreffen auch die Finanzmärkte und den Kurs von Wertpapieren und Indexes.
          </p>
            <p>
              In den folgenden Punkten wird beschrieben, wann und wie sich COVID-19 auf die Weltwirtschaft ausgewirkt hat und weiterhin auswirkt.
          </p>
            <p>
              Vorab sei noch anzumerken, dass dieser Report nur die Oberfläche einer komplexen Thematik inspiziert und diese nicht in ihrer Gänze erfassen und darstellen kann.
          </p>
          </Section>
          <Section title='Prozentuale Zweijahresperformance der 5 größten Technologie&shy;unternehmen'>
            <p>
              Die fünf größten (westlichen) Technologieunternehmen der Welt ('Big Tech'; 'FAANG') waren von den Marktschwankungen der folgenden Rezession nicht ausgeschlossen, welche am 20.&nbsp;Februar 2020 (Referenzlinie) auf die Schutz- und Isolationsmaßnahmen inter-/nationaler Gesundheitsbehörden folgte.
            </p>
            <ChartComparsion sourceName='Data provided by IEX Cloud' sourceUrl='https://iexcloud.io' />
            <p>
              War der Ausbruch von COVID-19 der WHO bereits am 31.&nbsp;Dezember&nbsp;2019 bekannt, so kam es erst mit der globalen Rezession im Februar&nbsp;2021 zu starken Kursabweichungen innerhalb der präsentierten Gruppe.
            </p>
            <p>Angemerkt sei, dass die dargstellte Gruppe eine besonders ausgeprägte Präsenz in den Medien und der Finanzwelt besitzt und (normalerweise) eine Ausnahme darstellt. Kursschwankungen sind abhängig von Wertpapier zu Wertpapier und können je nach Sektor und Unternehmen unterschiedlich ausfallen. die COVID-19-Rezession ist insofern besonders, dass nahezu alle Wertpapier in einem ähnlichen Ausmaß betroffen waren und es zu massenhaften Verkäufen von Wertpapieren kam.</p>
            <p>
              Bemerkenswert ist dabei, dass die Unternehmen bereits nach circa drei Monaten nach Inkrafttreten der Einschränkungen wieder auf ursprüngliche Börsenwerte zurückkehrten und diese im Jahresverlauf 2020 sogar stark ausbauen konnten.
            </p>
            <p>
              Im Vergleich zur – durch <a target="_blank" rel="noreferrer" href="https://corporatefinanceinstitute.com/resources/knowledge/finance/lehman-brothers/">Lehman Brothers</a> verursachten – Finanzkrise 2007/8 benötigten Unternehmen aus der gleichen Gruppe im Schnitt zwei Jahre bis ursprüngliche Börsenwerte wieder erreicht und gehalten werden konnten.
            </p>
          </Section>
          <Section title='Absolute Zweijahresperformance des MSCI World Index'>
            <p>
              Der <a target="_blank" rel="noreferrer" href="https://www.msci.com/documents/10199/149ed7bc-316e-4b4c-8ea4-43fcb5bd6523">MSCI World Index</a> bildet große und mittelgroße Unternehmen aus 23&nbsp;Ländern der Developed Markets ab. Mit 1.600 Konstituenten deckt der Index etwa 85&nbsp;% der um den Streubesitz bereinigten Marktkapitalisierung in jedem Land ab.
</p>
            <p>
              Aufgrund des breiten Portfolios und der daraus resultierenden hohen Stabilität des Indexes wird dieser oft als Indikator für die Weltwirtschaftsentwicklung angesehen.
</p>
            <ChartMSCI sourceName='Data provided by IEX Cloud' sourceUrl='https://iexcloud.io' />
            <p>
              Auch wenn Indexes generell geringen Kursschwankungen als Wertpapieren unterliegen, zeichnet sich im Kursdiagramm der gravierende Einfluss von COVID-19 auf die entwickelten Märkte ab. Der MSCI World fiel bis zum 23.&nbsp;März um 33&nbsp;% und erreichte am selben Tag ein Vierjahrestief 67.39&nbsp;Punkten.
            </p>
            <p>
              Auch wenn ursprüngliche Kurswerte bereits sechs Monate nach Beginn der Rezession wieder verzeichnet werden konnten, war dies nicht ohne Konsequenzen. Der COVID-19-Rezession folgte eine der größten Vermögensumverteilungen seit der Finanzkrise 2007/8.
            </p>
            <p>
              Vor allem Technologieunternehmen – welche 22.18&nbsp;% des MSCI World ausmachen – wie die der Big Tech profitierten von den Schutz- und Isolationsmaßnahmen der Gesundheitsbehörden. Die dadurch erzwungene Digitalisierung von Arbeitsplätzen führte zu einem Allzeithoch im Konsum von Produkten und Services von Technologieunternehmen.
            </p>
            <p>Hier wird deutlich, dass Indexes zwar Indikatoren für eine wachsende Wirtschaft sein können, diese aber oft auch die Wahrnehmung verzerren können. Der hohe Anteil an Technologieunternehmen in einem Weltmarkt abdeckenden Index rührt daher, dass dieser Sektor in den letzten zehn Jahren durch vielversprechende Entwicklungen und Start-ups eine nie dagewesene Performance hinlegen konnte. In diesem Kontext spricht man vom Datenzeitalter:</p>
          </Section>
          <Section title="Daten sind das neue Öl">
            <p>Was Clive Humby im Jahre 2006 so passend formulierte, wurde im Jahre 2020 Realität. Isolation und der Drang von zuhause und überhaupt überall arbeiten und vernetzt sein zu können haben eine neue Welle der Digialisierung losgetreten.</p>
            <blockquote>Data is the new oil<span>Clive Humby, 2006</span></blockquote>
            <p>Die Profiteure in dieser Welle sind die Hersteller von Hard- und Software, welche diese Entwicklung antreibt. Länder mit ausbaufähiger digitaler Infrastruktur waren durch das Virus gezwungen, Netze und Kommunikation auszubauen.</p>
            <p>Firmen wie Apple, Alphabet aber auch Huawei oder Ericsson lieferten uns die Technologie und Geräte für eine Welt, in der ein Virus das moderne Leben nicht gnadenlos einschränken kann.</p>
            <p>Den Preis dafür bezahlen die Bürger der Staaten, die Individuen, deren Leben von den Einschränkungen betroffen ist und die Arbeitnehmer, welche die Geräte unter teils gefährlichen Umständen herstellen und exportieren.</p>
            <p>Gewinner sind Aktionäre und Anteilshaber in besagte Firmen. Wer investiert zählt zu den Gewinnern, aber auch zu denen, welche solche Entwicklungen begünstigen.</p>
            <p>Ethische Fragen wie diese kollidieren mit der harschen Realität, dass COVID-19 weiterhin ganze Existenzen bedroht, welche vor allem in entwickelten Ländern, wie den USA, durch ihre Arbeit finanziert werden.</p>
          </Section>
          <Section title='Prozentuale Entwicklung der Rendite im Vergleich zum Geschäftsjahr 2019'>
            <p>
              Neben dem Sektor Informationstechnologie zeichnen sich zunehmend weitere Branchen als Gewinner oder Verlierer der Krise. Die Harvard Business School erfasste im Jahr 2020 erste Daten zur Renditeentwicklung in einzelnen Sektoren, welche hier auf die jeweils drei stärksten Entwicklungen reduziert wurden.
            </p>
            <ChartGallery sourceName='Harvard Business School' sourceUrl='https://www.hbs.edu/covid-19-business-impact/Insights/Economic-and-Financial-Impacts/Impact-Maps' />
            <h4>Fischen, Jagen, Fallenstellen</h4>
            <p>Ein Anstieg von Waffen-, Munitions- und Ausrüstungspreisen, welcher vor allem durch Panikkäufe getrieben wurde, schränkte das Jagdverhalten besonders in den Vereinigten Staaten ein.</p>
            <h4>Luft- und Wassertransport</h4>
            <p>Der Gütertransport stieg durch den allgemeinen Anstieg im Onlineversandhandel. Jedoch nahm der Personentransport (Tourismus eingeschlossen) durch Reisebeschränkungen stark ab. Eine positive Entwicklung für das Jahr 2021 konnte nicht prognostiziert werden.</p>
            <h4>Onlineversand- und Einzelhandel</h4>
            <p>Panikkäufe und die Bequemlichkeiten des Versandhandels haben die Pandemie dominiert. Zurückführen lässt sich dies auf die Quarantänemaßnahmen und der zunehmenden Digitalisierung der allgemeinen Bevölkerung.</p>
            <h4>Land- und forstwirtschaftliche Unterstützungsaktivitäten</h4>
            <p>Einschränkungen im alltäglichen Leben haben zu einer reduzierten Nachfrage in landwirtschaftlichen Erträgen und Holz geführt. Dies gab Nonprofit-Organisationen und der Forstwirtschaft genügend Raum um Wald- und Landbestände wiederherzustellen.</p>
            <p>Renditeentwicklungen wie diese sind unüblich, aber auch mit Vorsicht zu genießen. Die erfassten Daten betrachten nur eine Kleinstzahl an Unternehmen in ihren entsprechenden Sektoren. Dennoch skizzieren sie ein Bild, welches vor allem die Zukunft definieren wird.</p>
          </Section>
          <Section title='Schlusswort'>
            <p>Wie eine Welt nach der Rezession aussehen wird, lässt sich aus diesem Report, aber auch aus den Nachrichten, skizzieren. Wir blicken in eine Welt, in der Kommunikation allgegenwärtig sein wird und Arbeit und Privatleben immer mehr verschmelzen.</p>
            <p>Aber auch eine Welt, in der das Reisen weniger – oder zumindest vorsichtiger – wird und eine Welt, in der Konsum und Nachhaltigkeit möglich sein können.</p>
            <p>Abhängig ist dies aber nicht nur von Akteuren und Profiteuren, sondern auch vom Individuum. <a target="_blank" rel="noreferrer" href="https://www.bloomberg.com/news/articles/2020-02-26/reddit-s-profane-greedy-traders-are-shaking-up-the-stock-market">r/wallstreetbets</a> steht als Beweis dieser kollektiven Tendenz zur Ausübung von Veränderung, aber auch Macht.</p>
          </Section>
        </Chapter>
      </main>
    </div>
  );
}

export default Report;
