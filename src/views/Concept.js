import { createUseStyles } from 'react-jss'
import Chapter from "../components/Chapter";
import Section from "../components/Section";
import ConceptCharts from '../components/concept/ConceptCharts';
import ConceptColors from '../components/concept/ConceptColors';
import ConceptFonts from '../components/concept/ConceptFonts';
import ConceptLibs from '../components/concept/ConceptLibs';

/* Styles */
const useStyles = createUseStyles({
  concept: {
    display: 'grid',
    gridTemplateColumns: 'auto [content] minmax(288px, 720px) auto',
    gridGap: '48px 16px',
    padding: '48px 0'
  },
})

/* Structure */
function Concept() {
  const styles = useStyles();
  return (
    <div className="concept">
      <main className={styles.concept}>
        <Chapter title="Konzept">
          <Section title="Ziel">
            <p>Ziel des Reports ist es, auf Entwicklungen in der Weltwirtschaft während der COVID-19-Rezession hinzuweisen und diese zu visualisieren.</p>
            <p>Einem Großteil der Bevölkerung sind zwar Veänderungen auf dem Arbeitsmarkt bekannt, dennoch wissen diese oft nicht, wie diese Änderungen übereinkommen.</p>
            <p>Ein Großteil dieser Veränderungen spielen sich auf den internationalen Börsenmärkten ab, wo es in den letzten zwei Jahren zu einer der größten Vermögensumverteilungen in der modernen Finanzwirtschaft gekommen ist.</p>
          </Section>
          <Section title="Idee">
            <p>Motiviert zu dieser Idee wurde ich durch den Digitalierungsprozess kleiner und mittlerer Unternehmen.
            Eine kurze Recherche veriet, welche Unternehmen die Profiteure in diesem Prozess stellten und somit erschien es mir als sinnvoll, diese Informationen zumindest zugänglicher zu gestalten.
              </p>
            <p>Inspiriert zur Gestaltung wurde ich von den Finanzreports, wie man sie von <a target="_blank" rel="noreferrer" href="https://www.mckinsey.com/business-functions/risk/our-insights/covid-19-implications-for-business">McKinsey & Company</a> und anderen Finanzinstituten kennt.
                Damit war mir eine Struktur gegeben, an der ich arbeiten konnte – welche ich auch ausbauen konnte. Auch wenn es mir nicht möglich wäre, die komplexen Inhalte in ihrer Gänze darzustellen, so kann ich wichtige Aspekte herauskristallisieren und darstellen.
              </p>
          </Section>
          <Section title="Diagrammtypen">
            <p>Im Report werden Linien-, Bereichs- und Balkendiagramme verwendet, um Börsenwerte zu visualisieren und Daten zu vergleichen.</p>
            <ConceptCharts />
            <p>Das Liniendiagramm wird verwendet, um prozentuale Veränderungen Börsenwerte verschiedener Unternehmen in Verhältnis zueinander zu stellen.</p>
            <p>Das Bereichsdiagramm im Vergleich dazu, dient vor allem zur Darstellung von Börsenwerten einzelner Unternehmen, um diese visuell hervorzuheben.</p>
            <p>Das Balkendiagramm eignet sich zur inkrementellen Darstellung von Veränderungen und wird im Report dementsprechend verwendet.</p>
            <p>Im Allgemeinen habe ich mich an gängigen Diagrammtypen aus der Finanzwelt gehalten, welche über Jahrhunderte Verwendung finden. So sind Liniendiagramme für Vergleiche bekannt, wie es Balkendiagramme für einzelne Dateninhalte sind.</p>
          </Section>
          <Section title="Gestaltung und Anordnung">
            <p>Aufgrund des hohen Textgehalts erschien mir eine Anordnung anhand eines einspaltigen Rasters am effizientesten.
            Damit konnte ich die Struktur eines üblichen Artikels erhalten und weitere Elemente in Teilgitter bei Bedarf unterteilen.
            </p>
            <p>Die Verwendung von <a target="_blank" rel="noreferrer" href="https://reactjs.org/">ReactJS</a> ermöglichte mir die einfache Generierung dynamischer Inhalte, welche ich durch die Integration von Sektionen und Kapitel in Anspruch genommen habe.
            Einzelne Sektionen (wie diese) enthalten einfache Textelemente und eigene Komponenten, wie die der Diagramme.
            </p>
            <p>
              Eine vereinfachte Darstellung und reduzierte Breite des Inhalts unterstützt vor allem den Lese- und Informationsfluss des Nutzers und lenkt durch etwaige Seitenelemente nicht vom Hauptinhalt ab.
              Des Weiteren verringert ein einspaltiges Raster den Aufwand für die responsive Gestaltung, was zeitgleich die Performance der Website verbessert.
            </p>
            <p>Der Einstieg in diese vereinfachte Darstellung beginnt mit dem Masthead, der eine Makroaufnahme der ersten Coronainfektion in den USA zeigt.
              Auch hier sind die Inhalte auf die Maße des folgenden Hauptinhalts zugeschnitten. Dies sorgt für einen geringen Fokusverlust.</p>
            <p>Die Unterteilung der Inhalte in Sektionen hilft zur optischen Unterscheidung von einzelnen Inhaltspunkten.
              Farbverläufe heben nebei innerhalb ihrer Sektionen einzelne Elemente heraus und verschaffen diesen mehr Dynamik durch ihr Dasein.</p>
            <p>Begleitet wird jedes Kapitel und deren Sektionen von einem Inhaltsverzeichnis, welches dynamisch aus den Inhalten generiert wird.
              Dies erlaubt eine angenehmere Navigation vor allem zwischen den einzelnen Seiten.</p>
            <p>Zusammenfassend war das Ziel der Gestaltung, eine seriöse und professionelle Darstellung der Inhalte, welche ihrem Rahmen gerecht wird.</p>
          </Section>
          <Section title="Farbgestaltung und Schriftauswahl">
            <p>Farbgestaltung und Schriftauswahl stammen aus meinem persönlichen Design-System und wurden ohne Änderungen übernommen.</p>
            <ConceptColors />
            <p>Die Farbgestaltung ist eine Untergruppe im von mir vordefinierten System, welche auf den Richtlinien der <a target="_blank" rel="noreferrer" href="https://www.ibm.com/design/language/color/#specifications">IBM Design Language</a> basiert.</p>
            <p>Dunkle Farbtöne ziehen sich durch den kompletten Gestaltungsprozess, um Augenbelastung zu reduzieren und Inhalte hervorzuheben.
              Dies beruht zum einen auf der großen <a target="_blank" rel="noreferrer" href="https://medium.com/dev-channel/let-there-be-darkness-maybe-9facd9c3023d">Popularität</a> von Dark/Night Mode und zum anderen auf persönlicher Präferenz.</p>
            <p>Im Kontrast dazu steht das Schriftbild, welches durch auffällig helle Farbtöne besticht:</p>
            <ConceptFonts />
            <p>Rasmus Anderssons <a target="_blank" rel="noreferrer" href="https://rsms.me/inter/">Inter</a> ist die Schrift meiner Wahl in nahezu jedem Projekt. Zum einen ist sie explizit für digitale Oberflächen gestaltet worden und besitzt klarere und dickere Linien; zum anderen unterstüzt sie Ligaturen und Glyphen für verschiedenste Anwendungsbereiche.</p>
            <p>Das Schriftbild von Inter erinnert an Googles Hausschrift Roboto, welches keinen Zufall darstellt. Beide Schriften teilen mechanische Stilelemente, welche zur trockenen Natur des Projektthemas passen und dieses perfekt widerspiegelt.</p>
          </Section>
          <Section title="Animation und Technik">
            <p>Leichtere Animationen werden zwar global durch <code>transition: all 200ms ease-in-out;</code> angewendet, dennoch werden komplexere Animationen nur für die Darstellung der Diagramme verwendet.
          Die dafür zuständige Bibliothek – <a target="_blank" rel="noreferrer" href="https://recharts.org/en-US/">Recharts</a> – übernimmt das dynamische Rendern und Animieren von Dateneinträgen und Tooltips.</p>
            <p>Auch wenn die Bibliothek diverse Einstellungspunkte zur Konfiguration der Animationen anbietet, habe ich mich dafür entschieden, die von Werk aus eingestellten kurzen und bündigen Animationssets zu übernehmen.
            Dies reduziert die benötigte Zeit zur Darstellung der Inhalte und erleichtert die Wahrnehmung der darzustellenden Inhalte.</p>
            <p>Bezüglich alternativer Techniken erschien mir ein simplerer Ansatz gerechtfertigt, da die Inhalte das Augenmerk darstellen werden und nicht die Animationen darum. Komplexere Bibliotheken wie <a target="_blank" rel="noreferrer" href="https://nivo.rocks/">Nivo.js</a> oder <a target="_blank" rel="noreferrer" href="https://airbnb.io/visx/">visx</a> boten zwar mehr Möglichkeiten zur Konfiguration, erhöhten aber auch den Arbeitsaufwand exponentiell.</p>
            <p>Schlussendlich konnte ich die gewünschte Darstellung auch mit Recharts erzielen, wobei auch hier Probleme wie das responsive Skalieren der generierten Graphen ein Problem darstellte, welches sich durch diverse Bibliotheken zu ziehen geht, sobald es um die Umformatierung großer Datenmengen geht.</p>
          </Section>
          <Section title="Skripte, Bibliotheken, API">
            <h4>Skripte</h4>
            <p>Es wurden keine externen Skripte benötigt, da alle notwendigen Inhalte durch die verwendeten Bibliotheken zur Verfügung gestellt wurden.</p>
            <h4>Bibliotheken</h4>
            <ConceptLibs />
            <h4>API</h4>
            <p>Alle Kursdaten werden von der <a target="_blank" rel="noreferrer" href="https://iexcloud.io/">IEX Cloud</a> gerufen und stellen tagesaktuelle Schlusskurse (Close) dar.</p>
            <p>Da ich im privaten Rahmen auch mit eben dieser API arbeite, war es eine einfache Wahl, für welchen Datenanbieter ich mich entscheiden würde. Ich bin mit der gegebenen Datenstruktur vertraut und weiß diese einzubinden, beziehungsweise umzuformatieren, wie es in diesem Projekt auch der Fall ist.</p>
          </Section>
          <Section title="Reflektion des Arbeitsprozesses">
            <p>Dieses Projekt war für mich in erster Linie ein Selbstversuch mit ReactJS. Die damit zu erwartenden Komplikationen waren mir bewusst und im Verlauf der Entwicklung zu bewerkstelligen.</p>
            <p>Ich durfte viele neue Ansätze und Services entdecken und evaluieren, wie ich diese in dies und zukünftige Projekte einsetzen könnte. Auch wenn dies meinen Arbeitsprozess beeinträchtigt hat, so konnte ich dennoch stetig Fortschritte für mich selbst verbuchen.</p>
            <p>Vor allem die Generierung von dynamischen Inhalten und das Rendern bedingter Inhalte war interessant und herausfordernd. Es ermöglichte mir die Konstruktion des Inhaltsverzeichnis und das Auswerten einzelner Datenstrukturen, wie die der API.</p>
            <p>Das Arbeiten mit weiteren Bibliotheken wie <a target="_blank" rel="noreferrer" href="https://cssinjs.org/?v=v10.5.1">JSS</a> erlaubten mir, meine Komponenten individuell zu strukturieren und Style, Skripte und Struktur in eine Datei zu vereinen, ohne auf das React-Ökosystem verzichten zu müssen.</p>
            <p>Kritisch möchte ich in Bezug auf meine eigene Zeiteinteilung werden; auch wenn ich mir genügend Zeit zur Entwicklung gegeben habe, so fehlte mir an manchen Tagen die Zeit, welche ich für die eigene Evaluation verplant hatte.</p>
            <p>Dies führte mich schlussendlich zum Problem der performanten Skalierung von Graphen, welche komplexere Datensätze verwenden. Meine Recherchen haben nur limitierte Ansätze zur Behebung des Problems finden können und rückblickend hätte ich weniger Zeit für die Suche nach einer Lösung aufbringen können, um andere Aspekte des Projektes fertigzustellen und zu optimieren.</p>
            <p>Letztendlich konnte ich das Projekt nach meiner eigenen Vorstellung fertigstellen und dabei ReactJS als Framework für zukünftige Projekte ausgiebig testen. Dies gibt mir das Gefühl, für zukünftige Projekte besser gewappnet zu sein und kommende Komplikationen besser zu verstehen und beheben.</p>
          </Section>
        </Chapter>
      </main>
    </div>
  );
}

export default Concept;
