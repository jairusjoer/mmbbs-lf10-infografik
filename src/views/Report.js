import { createUseStyles } from 'react-jss'
import Masthead from "../components/Masthead";
import Navigation from "../components/Navigation";
import Chapter from "../components/Chapter";
import Section from "../components/Section";
import ChartComparsion from "../components/ChartComparsion";
import ChartGallery from "../components/ChartGallery";
import ChartMSCI from '../components/ChartMSCI';
import Footer from '../components/Footer';
/* Styles */
const useStyles = createUseStyles({
  reportContent: {
    display: 'grid',
    gridTemplateColumns: 'auto [content] minmax(272px, 720px) auto',
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
      <Navigation />
      <main className={styles.reportContent} id="report">
        <Chapter title='Report'>
          <Section title="Einführung">
            <p>
              Die Auswirkungen von COVID-19 spiegeln sich in nahezu sämtlichen Aspekten der globalen Wirtschaft wieder. Weitreichende Veränderungen des alltäglichen Lebens betreffen auch die Finanzmärkte und den Kurs von Wertpapieren und Indexes.
          </p>
            <p>
              In den folgenden Punkten wird beschrieben, wann und wie sich COVID-19 auf die Weltwirtschaft ausgewirkt hat und weiterhin auwirkt.
          </p>
          </Section>
          <Section title='Prozentuale Zweijahresperformance der 5 größten Technologieunternehmen'>
            <p>
              Die fünf größten (westlichen) Technologieunternehmen der Welt ('Big Tech'; 'FAANG') waren von den Marktschwankungen der folgenden Rezession nicht ausgeschlossen, welche am 20. Februar 2020 (Referenzlinie) auf die Schutz- und Isolationsmaßnahmen inter- und nationaler Gesundheitsbehörden folgte.
            </p>
            <ChartComparsion sourceName='Data provided by IEX Cloud' sourceUrl='https://iexcloud.io' />
            <p>
              War der Ausbruch von COVID-19 der WHO bereits am 31. Dezember 2019 bekannt, so kam es erst mit der globalen Rezession im Februar 2021 zu starken Kursabweichungen innerhalb der präsentierten Gruppe.
            </p>
            <p>
              Bemerkenswert ist dabei, dass die Unternehmen bereits nach circa drei Monaten nach Inkrafttreten der Einschränkungen wieder auf ursprüngliche Börsenwerte zurückkehrten und diese im Jahresverlauf 2020 sogar stark ausbauen konnten.
            </p>
            <p>
              Im Vergleich zur – durch <a target="_blank" rel="noreferrer" href="https://corporatefinanceinstitute.com/resources/knowledge/finance/lehman-brothers/">Lehman Brothers</a> verursachten – Finanzkrise 2007/8 benötigten Unternehmen aus der gleichen Gruppe im Schnitt zwei Jahre bis ursprüngliche Börsenwerte wieder erreicht und gehalten werden konnten.
            </p>
          </Section>
          <Section title='Absolute Zweijahresperformance des MSCI World Index'>
            <p>
              Der <a target="_blank" rel="noreferrer" href="https://www.msci.com/documents/10199/149ed7bc-316e-4b4c-8ea4-43fcb5bd6523">MSCI World Index</a> bildet große und mittelgroße Unternehmen aus 23 Ländern der Developed Markets ab. Mit 1.600 Konstituenten deckt der Index etwa 85 % der um den Streubesitz bereinigten Marktkapitalisierung in jedem Land ab.
</p>
            <p>
              Aufgrund des breiten Portfolios und der daraus resultierenden hohen Stabilität des Indexes, wird dieser oft als Indikator für die Weltwirtschaftsentwicklung angesehen.
</p>
            <ChartMSCI sourceName='Data provided by IEX Cloud' sourceUrl='https://iexcloud.io' />
            <p>
              Auch wenn Indexes generell geringen Kursschwankungen als Wertpapieren unterliegen, zeichnet sich im Kursdiagramm der gravierende Einfluss von COVID-19 auf die entwickelten Märkte ab. Der MSCI World fiel bis zum 23. März um 33% und erreichte am gleichen Tag ein Vierjahrestief 67.39 Punkten.
            </p>
            <p>
              Auch wenn ursprüngliche Kursewerte bereits sechs Monate nach Beginn der Rezession wieder verzeichnet werden konnten, war dies nicht ohne Konsequenzen. Der COVID-19-Rezession folgte eine der größten Vermögensumverteilungen seit der Finanzkrise 2007/8.
            </p>
            <p>
              Vor allem Technologieunternehmen – welche 22.18% des MSCI World ausmachen – wie die der Big Tech profitierten von den Schutz- und Isolationsmaßnahmen der Gesundheitsbehörden. Die dadurch erzwungene Digitalisierung von Arbeitsplätzen führte zu einem Allzeithoch im Konsum von Produkten und Services von Technologieunternehmen.
            </p>
          </Section>
          <Section title='Prozentuale Entwicklung der Renditen im Vergleich zum Geschäftsjahr 2019'>
            <p>
              Neben dem Sektor Informationstechnologie zeichnen sich zunehmend weitere Branchen als Gewinner oder Verlierer der Krise. Die Harvard Business School erfasste im Jahr 2020 erste Daten zur Renditenentwicklung in einzelnen Sektoren, welche hier auf die jeweils drei stärksten Entwicklungen reduziert wruden.
            </p>
            <ChartGallery sourceName='Harvard Business School' sourceUrl='https://www.hbs.edu/covid-19-business-impact/Insights/Economic-and-Financial-Impacts/Impact-Maps' />
            <h4>Fischen, Jagen, Fallenstellen</h4>
            <p>Ein Anstieg von Waffen-, Munitions- und Ausrüstungspreisen, welcher vor allem durch Panikkäufe getrieben wurde, schränkte das Jagdverhalten besonders in den Vereinigten Staaten ein.</p>
            <h4>Luft- und Wassertransport</h4>
            <p>Der Gütertransport stieg durch den allgemeinen Anstieg im Onlineversandhandel. Jedoch nahm der Personentransport (Tourismus eingschlossen) durch Reisebeschränkungen stark ab. Eine positive Entwicklung für das Jahr 2021 konnte nicht prognostiziert werden.</p>
            <h4>Onlineversand- und Einzelhandel</h4>
            <p>Panikkäufe und die Bequemlichkeiten des Versandhandels haben die Pandemie dominiert. Zurückführen lässt sich dies auf die Quarantänemaßnahmen und der zunehmenden Digitalisierung der allgemeinen Bevölkerung.</p>
            <h4>Land- und forstwirtschaftliche Unterstützungsaktivitäten</h4>
            <p>Einschränkungen im alltäglichen Leben haben zu einer reduzierten Nachfragen in landwirtschaftlichen Erträgen und Holz geführt. Dies gab Nonprofit-Organisationen und der Forstwirtschaft genügend Raum um Wald- und Landbestände wiederherzustellen.</p>
          </Section>
        </Chapter>
      </main>
      <Footer/>
    </div>
  );
}

export default Report;
