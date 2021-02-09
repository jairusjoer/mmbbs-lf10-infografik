import { createUseStyles } from 'react-jss'
import Navigation from "../components/Navigation";
import Chapter from "../components/Chapter";
import Section from "../components/Section";
import Footer from '../components/Footer';
/* Styles */
const useStyles = createUseStyles({
  Sources: {
    display: 'grid',
    gridTemplateColumns: 'auto [content] minmax(272px, 720px) auto',
    gridGap: '48px 16px',
    padding: '48px 0'
  },
})
/* Scripts */
const sources = [
  {
    type: 'Artikel',
    data: [
      {
        title: 'Lehman Brothers: The rise and fall of the US investment bank',
        url: 'https://corporatefinanceinstitute.com/resources/knowledge/finance/lehman-brothers/',
      },
      {
        title: 'MSCI World Index',
        url: 'https://www.msci.com/documents/10199/149ed7bc-316e-4b4c-8ea4-43fcb5bd6523',
      },
      {
        title: 'Let there be darkness! 🌚 Maybe…',
        url: 'https://medium.com/dev-channel/let-there-be-darkness-maybe-9facd9c3023d',
      },]
  },
  {
    type: 'Daten',
    data: [
      {
        title: 'IEX Cloud',
        url: 'https://iexcloud.io/',
      },
      {
        title: 'Harvard Business School',
        url: 'https://www.hbs.edu/covid-19-business-impact/Insights/Economic-and-Financial-Impacts/Impact-Maps',
      },
    ]
  },
  {
    type: 'Resourcen',
    data: [
      {
        title: 'Create React App',
        url: 'https://create-react-app.dev/',
      },
      {
        title: 'IBM Design Language',
        url: 'https://www.ibm.com/design/language/color/#specifications',
      },
      {
        title: 'The Inter typeface family',
        url: 'https://rsms.me/inter/',
      },
      {
        title: 'Recharts',
        url: 'https://recharts.org/en-US/',
      },
    ]
  }
];
/* Structure */
function Sources() {
  const styles = useStyles();
  return (
    <div className="Sources">
      <Navigation />
      <main className={styles.Sources}>
        <Chapter title="Quellen">
          {
            sources.map((section, key) =>
              <Section title={section.type}>
                <ul>
                  {section.data.map((item, key) =>
                    <li key={key} className={styles.sourceItem}><a target="_blank" rel="noreferrer" href={item.url} >{item.title}</a></li>
                  )}
                </ul>
              </Section>
            )
          }
        </Chapter>
      </main>
      <Footer/>
    </div>
  );
}

export default Sources;

