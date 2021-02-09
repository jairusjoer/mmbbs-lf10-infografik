import { createUseStyles } from 'react-jss'
import splash from '../assets/img/splash.jpg'

/* Styles */
const useStyles = createUseStyles({
  Mast: {
    minHeight: 'calc(100vh - 48px)',
    display: 'grid',
    gridRowGap: 32,
    alignContent: 'end',
    justifyItems: 'center',
    padding: '48px 24px',
    textAlign: 'center',
    background: 'linear-gradient(rgba(0, 0, 0, 0.333), var(--colorBaseBlack)), url(' + splash + ') no-repeat',
    backgroundSize: 'cover'
  },
  MastTitle: {
    maxWidth: 688,
  },
  MastCaption: {
    color: 'var(--colorBaseWhite)',
    maxWidth: 480,
  },
  MastButton: {
    border: '1px solid var(--colorBaseWhite)',
    height: 48,
    width: 48,
    padding: 12,
    borderRadius: 8
  },
  MastIcon: {
    height: 24,
    width: 24
  }
})

/* Structure */
const Masthead = () => {
  const styles = useStyles();
  return (
    <div className={styles.Mast} id="Masthead">
      <h1 className={styles.MastTitle}>Visualisierung der Auswirkungen von COVID-19 auf den Aktienmarkt</h1>
      <span className={styles.MastCaption}>Ein Überblick über die Auswirkungen und Implikationen von Covid-19 auf die internationale Wirtschaft.</span>
      <a className={styles.MastButton} href="#report">
        <svg className={styles.MastIcon} focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="var(--colorBaseWhite)" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path><title>Klicken, um zum Report zu gelangen</title></svg>
      </a>
    </div>
  );
};

export default Masthead;
