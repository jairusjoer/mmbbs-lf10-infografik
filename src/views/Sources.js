import { createUseStyles } from 'react-jss';
import Chapter from "../components/Chapter";
import Section from "../components/Section";

/* Styles */
const useStyles = createUseStyles({
  Sources: {
    display: 'grid',
    gridTemplateColumns: 'auto [content] minmax(288px, 720px) auto',
    gridGap: '48px 16px',
    padding: '48px 0'
  },
})

/* Scripts */
// Source data formatted for mapping
const sources = [
  {
    type: 'Artikel',
    data: [
      {
        title: 'COVID-19: Implications for business',
        url: 'https://www.mckinsey.com/business-functions/risk/our-insights/covid-19-implications-for-business'
      },
      {
        title: 'Lehman Brothers: The rise and fall of the US investment bank',
        url: 'https://corporatefinanceinstitute.com/resources/knowledge/finance/lehman-brothers/',
      },
      {
        title: 'Let there be darkness! 🌚 Maybe…',
        url: 'https://medium.com/dev-channel/let-there-be-darkness-maybe-9facd9c3023d',
      },
      {
        title: 'MSCI World Index',
        url: 'https://www.msci.com/documents/10199/149ed7bc-316e-4b4c-8ea4-43fcb5bd6523',
      },
      {
        title: 'Reddit’s Profane, Greedy Traders Are Shaking Up the Stock Market',
        url: 'https://www.bloomberg.com/news/articles/2020-02-26/reddit-s-profane-greedy-traders-are-shaking-up-the-stock-market',
      },]
  },
  {
    type: 'Daten',
    data: [
      {
        title: 'Harvard Business School',
        url: 'https://www.hbs.edu/covid-19-business-impact/Insights/Economic-and-Financial-Impacts/Impact-Maps',
      },
      {
        title: 'IEX Cloud',
        url: 'https://iexcloud.io/',
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
        title: 'Nivo',
        url: 'https://nivo.rocks/',
      },
      {
        title: 'ReactJS',
        url: 'https://reactjs.org/',
      },
      {
        title: 'Recharts',
        url: 'https://recharts.org/en-US/',
      },
      {
        title: 'The Inter typeface family',
        url: 'https://rsms.me/inter/',
      },
      {
        title: 'visx',
        url: 'https://airbnb.io/visx/',
      },
    ]
  }
];

/* Structure */
function Sources() {
  const styles = useStyles();
  return (
    <main className={styles.Sources}>
      <Chapter title="Quellen">
        {
          sources.map((section, key) =>
            <Section key={key} title={section.type}>
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
  );
}

export default Sources;