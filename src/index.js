import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/pages/index.scss';
import Masthead from './components/Masthead';
import Navigation from './components/Navigation.js';
import Chapter from './components/Chapter'
import Section from './components/Section'
import Chart from './components/Chart';
import Footer from './components/Footer.js';
import reportWebVitals from './utilities/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Masthead />
    <Navigation />
    <main className='index'>
      <Chapter title='Report'>
        <Section title='One year stock performance of the 5 largest corporations by market capitalization' anchor='1'>
          <Chart sourceName='Data provided by IEX Cloud' sourceUrl='https://iexcloud.io' />
          <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Eu turpis egestas pretium aenean. Interdum posuere lorem ipsum dolor sit amet. Sem integer vitae justo eget magna fermentum. Consectetur adipiscing elit ut aliquam purus.</p>
        </Section>
        <Section title='Section 2' anchor='2'>
          <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Eu turpis egestas pretium aenean. Interdum posuere lorem ipsum dolor sit amet. Sem integer vitae justo eget magna fermentum. Consectetur adipiscing elit ut aliquam purus.</p>
        </Section>
      </Chapter>
      <Chapter title="Sources">
        <p className="sources-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam. Vel pharetra vel turpis nunc eget lorem dolor sed.</p>
        <div className="sources-content">
          <span className="sources-disclaimer">Data provided by:</span>
          <ul className="sources-list">
            <li className="sources-item"><a href="" target="_blank">Harvard Business School</a></li>
            <li className="sources-item"><a href="" target="_blank">IEX Cloud</a></li>
            <li className="sources-item"><a href="" target="_blank">The World Bank</a></li>
          </ul>
        </div>
      </Chapter>
    </main>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
