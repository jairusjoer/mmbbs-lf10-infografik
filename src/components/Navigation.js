import '../assets/css/components/Navigation.scss';
import iconMenu from '../assets/img/icon-menu.svg'


const Navigation = (x) => {
    return (
    <div className="head">
        <span className="head-title">COVID-19 – Financial Impact</span>
        <img className="head-icon" src={iconMenu} alt="Menu icon"/>
    </div>
    );
};
export default Navigation;
