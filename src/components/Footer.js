import { createUseStyles } from 'react-jss'
/* Styles */
const useStyles = createUseStyles({
  Footer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto, 1fr)',
    columnGap: 24,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    padding: '0 24px',
    backgroundColor: 'var(--colorBaseBlack)',
    borderTop: '1px solid var(--colorBaseGray090)',
    zIndex: 420
  },
  FooterDisclaimer: {
    lineHeight: '16px',
    padding: 16
  }
})
/* Structure */
function Footer() {
  const styles = useStyles();

  return (
    <div className={styles.Footer}>
      <span className={styles.FooterDisclaimer}>2020 – Jairus Joer</span>
    </div >
  );
}

export default Footer;
