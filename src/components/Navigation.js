import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

/* Styles */
const useStyles = createUseStyles({
  Navigation: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    padding: '0 24px',
    backgroundColor: 'var(--colorBaseBlack)',
    borderBottom: '1px solid var(--colorBaseGray090)',
    zIndex: 420
  },
  NavigationLink: {
    color: 'var(--colorBaseWhite)',
    padding: '12px 0',
    '&:nth-child(n+2)': {
      marginLeft: 32
    }
  }
})

/* Structure */
function Navigation() {
  const styles = useStyles();

  return (
    <div className={styles.Navigation}>
      <Link className={styles.NavigationLink} to="/#report">Report</Link>
      <Link className={styles.NavigationLink} to="/concept">Konzept</Link>
      <Link className={styles.NavigationLink} to="/sources">Quellen</Link>
    </div >
  );
}

export default Navigation;
