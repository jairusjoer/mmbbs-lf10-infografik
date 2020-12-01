import '../assets/css/pages/App.scss';
import Chart from '../components/Chart.js';

const App = () => {
    return (
        <main className='index'>
            <div className='index-stage'>
                <h1 className='index-title'>Auswirkungen von COVID-19 auf den deutschen Aktienmarkt</h1>
                <h3 className='index-subtitle'>im Zeitraum vom 17.11.2019 bis zum 17.11.2020</h3>
                <p className='index-prologue'>Die globale Ausbreitung von SARS-CoV-2 </p>
            </div>
            <Chart />
        </main>
    );
};
export default App;
