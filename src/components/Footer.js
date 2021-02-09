import { createUseStyles } from 'react-jss'

/* Styles */
const useStyles = createUseStyles({
  Footer: {
    display: 'flex',
    columnGap: 24,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 24px',
    borderTop: '1px solid var(--colorBaseGray090)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
      <span className={styles.FooterDisclaimer}>&copy; {new Date().getFullYear()} – Jairus Joer</span>
    </div >
  );
}

export default Footer;
