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
          </Section>
          <Section title="Idee">
            <p>Motiviert zu dieser Idee wurde ich durch den Digitalierungsprozess kleiner und mittlerer Unternehmen.
            Eine kurze Recherche veriet, welche Unternehmen die Profiteure in diesem Prozess stellten und somit erschien es mir als sinnvoll, dies zumindest im Teil zu visualisieren.
              </p>
          </Section>
          <Section title="Diagrammtypen">
            <p>Im Report werden Linien-, Bereichs- und Balkendiagramme verwendet, um Börsenwerte zu visualisieren und Daten zu vergleichen.</p>
            <ConceptCharts />
            <p>Das Liniendiagramm wird verwendet, um prozentuale Veränderungen Börsenwerte verschiedener Unternehmen in Verhältnis zueinander zu stellen.</p>
            <p>Das Bereichsdiagramm im Vergleich dazu, dient vor allem zur Darstellung von Börsenwerten einzelner Unternehmen, um diese visuell hervorzuheben.</p>
            <p>Das Balkendiagramm eignet sich zur inkrementellen Darstellung von Veränderungen und wird im Report dementsprechend verwendet.</p>
          </Section>
          <Section title="Gestaltung und Anordnung">
            <p>Aufgrund des hohen Textgehalts erschien mir eine Anordnung anhand eines einspaltigen Rasters am effizientesten.
            Damit konnte ich die Struktur eines üblichen Artikels erhalten und weitere Elemente in Teilgitter bei Bedarf unterteilen.
            </p>
            <p>Die Verwendung von <a target="_blank" rel="noreferrer" href="https://reactjs.org/">ReactJS</a> ermöglichte mir die einfache Generierung dynamischer Inhaltsverzeichnisse, welche ich durch die Integration von Sektionen in Anspruch genommen habe.
            Einzelne Sektionen (wie diese) enthalten einfache Textelemente und eigene Komponenten, wie die der Diagramme.
            </p>
            <p>
              Eine vereinfachte Darstellung und reduzierte Breite des Inhalts unterstützt vor allem den Lese- und Informationsfluss des Nutzers und lenkt durch etwaige Seitenelemente nicht vom Hauptinhalt ab.
              Des Weiteren verringert ein einspaltiges Raster den Aufwand für die responsive Gestaltung, was zeitgleich die Performance der Website verbessert.
            </p>
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
            <p>Das Schriftbild von Inter erinnert an Androids Roboto, welches keinen Zufall darstellt. Beide Schriften teilen mechanische Stilelemente, welche zur trockenen Natur des Projektthemas passen und dieses perfekt widerspiegelt.</p>
          </Section>
          <Section title="Animation und Technik">
            <p>Leichtere Animationen werden zwar global durch <code>transition: all 200ms ease-in-out;</code> angewendet, dennoch werden komplexere Animationen nur für die Darstellung der Diagramme verwendet.
          Die dafür zuständige Bibliothek – <a target="_blank" rel="noreferrer" href="https://recharts.org/en-US/">Recharts</a> – übernimmt das dynamische Rendern und Animieren von Dateneinträgen und Tooltips.</p>
            <p>Auch wenn die Bibliothek diverse Einstellungspunkte zur Konfiguration der Animationen anbietet, habe ich mich dafür entschieden, die von Werk aus eingestellten kurzen und bündigen Animationssets zu übernehmen.
            Dies reduziert die benötigte Zeit zur Darstellung der Inhalte und erleichtert die Wahrnehmung der darzustellenden Inhalte.</p>
          </Section>
          <Section title="Skripte, Bibliotheken, API">
            <h4>Skripte</h4>
            <p>Es wurden keine externen Skripte benötigt, da alle notwendigen Inhalte durch die verwendeten Bibliotheken zur Verfügung gestellt wurden.</p>
            <h4>Bibliotheken</h4>
            <ConceptLibs />
            <h4>API</h4>
            <p>Alle Kursdaten werden von der <a target="_blank" rel="noreferrer" href="https://iexcloud.io/">IEX Cloud</a> über die Funktion <code>fetch()</code> gerufen und stellen tagesaktuelle Schlusskurse (Close) dar.</p>
          </Section>
        </Chapter>
      </main>
    </div>
  );
}

export default Concept;
