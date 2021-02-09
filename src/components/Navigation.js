import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
/* Styles */
const useStyles = createUseStyles({
  navigation: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    padding: '0 24px',
    backgroundColor: 'var(--colorBaseBlack)',
    borderBottom: '1px solid var(--colorBaseGray090)',
    zIndex: 420
  },
  navigationLink: {
    color: 'var(--colorBaseWhite)',
    padding: '12px 0',

    '&:nth-child(n+2)': {
      marginLeft: 32
    }
  },
  navigationIcon: {
    margin: 4,
    height: 16,
    width: 16,
  }
})
/* Structure */
function Navigation() {
  const styles = useStyles();

  return (
    <div className={styles.navigation}>
      <Link className={styles.navigationLink} to="/#report">Report</Link>
      <Link className={styles.navigationLink} to="/concept">Konzept</Link>
      <Link className={styles.navigationLink} to="/sources">Quellen</Link>
    </div >
  );
}

export default Navigation;
