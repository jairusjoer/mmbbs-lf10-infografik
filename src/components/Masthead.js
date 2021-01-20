import React from 'react';
import '../assets/css/components/Masthead.scss';

const Masthead = () => {
  // Masthead Component
  return (
    <div className='masthead' id="masthead">
      <div className="masthead-content">
        <h1 className='masthead-title'>Visualizing the economic impact of COVID-19</h1>
        <span className="masthead-caption">An overview of the impact and implications of Covid-19 on the international economy.</span>
        <a className="masthead-button" href="#report">
          <svg className="masthead-icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path><title>Chevron down</title></svg>
        </a>
      </div>
    </div>
  );
};

export default Masthead;
