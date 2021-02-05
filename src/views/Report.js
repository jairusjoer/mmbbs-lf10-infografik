import { createUseStyles } from 'react-jss'
import Masthead from "../components/Masthead";
import Navigation from "../components/Navigation";
import Chapter from "../components/Chapter";
import Section from "../components/Section";
import ChartComparsion from "../components/ChartComparsion";
/* Styles */
const styles = createUseStyles({
  content: {
    display: 'grid',
    gridTemplateColumns: 'auto [content] minmax(272px, 720px) auto',
    gridGap: '72px 24px',
    padding: '72px 0'
  }
})
/* Structure */
function Report() {
  return (
    <div className="report">
      <Masthead />
      <Navigation />
      <main className={styles().content}>
        <Chapter title='Report'>
          <Section title='One year stock performance of the 5 largest corporations by market capitalization'>
            <ChartComparsion sourceName='Data provided by IEX Cloud' sourceUrl='https://iexcloud.io' />
            <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Eu turpis egestas pretium aenean. Interdum posuere lorem ipsum dolor sit amet. Sem integer vitae justo eget magna fermentum. Consectetur adipiscing elit ut aliquam purus.</p>
          </Section>
          <Section title='One year performance of the MSCI World Index'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Eu turpis egestas pretium aenean. Interdum posuere lorem ipsum dolor sit amet. Sem integer vitae justo eget magna fermentum. Consectetur adipiscing elit ut aliquam purus.</p>
          </Section>
          <Section title='Performance of returns in selected sectors compared to the 2019 fiscal year'>
            {/*<ChartSlider sourceName='Harvard Business School' sourceUrl='https://www.hbs.edu/covid-19-business-impact/Insights/Economic-and-Financial-Impacts/Impact-Maps' />*/}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Eu turpis egestas pretium aenean. Interdum posuere lorem ipsum dolor sit amet. Sem integer vitae justo eget magna fermentum. Consectetur adipiscing elit ut aliquam purus.</p>
          </Section>
        </Chapter>
      </main>
    </div>
  );
}

export default Report;
