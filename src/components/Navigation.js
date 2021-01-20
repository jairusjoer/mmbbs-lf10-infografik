import '../assets/css/components/Navigation.scss';


const Navigation = () => {
  return (
    <nav className="head">
      <a className="head-link" href="#report">Report</a>
      <hr className="head-line" />
      <a className="head-link" href="#concept">Concept</a>
      <hr className="head-line" />
      <a className="head-link" href="#sources">Sources</a>
      <hr className="head-line" />
      <a className="head-link" href="#masthead">
        <svg className="head-icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 10L26 20 24.6 21.4 16 12.8 7.4 21.4 6 20z"></path><title>Chevron up</title></svg>        </a>
    </nav>
  );
};
export default Navigation;
