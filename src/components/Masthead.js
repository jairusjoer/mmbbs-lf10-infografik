import { createUseStyles } from 'react-jss'
import splash from '../assets/img/splash.jpg'
/* Styles */
const useStyles = createUseStyles({
  masthead: {
    minHeight: '100vh',
    display: 'grid',
    gridRowGap: '1.5rem',
    alignContent: 'end',
    justifyItems: 'center',
    padding: '48px 24px',
    textAlign: 'center',
    background: 'linear-gradient(#00000000, #000000), url(' + splash + ') no-repeat',
    backgroundSize: 'cover'
  },
  caption: {
    maxWidth: 480,
  },
  button: {
    border: '1px solid var(--colorBaseWhite)',
    height: 48,
    width: 48,
    padding: 12,
    borderRadius: 8
  },

  svg: {
    height: 24,
    width: 24
  }
})
/* Structure */
const Masthead = () => {
  const styles = useStyles();

  return (
    <div className={styles.masthead} id="masthead">
      <h1>Visualizing the economic impact of COVID-19</h1>
      <span className={styles.caption}>An overview of the impact and implications of Covid-19 on the international economy.</span>
      <a className={styles.button} href="#report">
        <svg className={styles.svg} focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path><title>Chevron down</title></svg>
      </a>
    </div>
  );
};

export default Masthead;
