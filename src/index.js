import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/pages/index.scss';
import Navigation from './components/Navigation.js';
import App from './pages/App.js';
import Footer from './components/Footer.js';
import reportWebVitals from './utilities/reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Navigation/>
        <App />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
