import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
/* Styles */
const styles = createUseStyles({
  navigation: {
    position: 'sticky',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    columnGap: 24,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    padding: '0 24px',
    backgroundColor: 'var(--colorBaseBlack)',
    borderBottom: '1px solid var(--colorBaseGray090)',
    zIndex: 420
  },
  link: {
    color: 'var(--colorBaseWhite)',
    padding: '12px 0',
  },
  top: {
    color: 'var(--colorBaseWhite)',
    borderRadius: 8,
    border: '1px solid white',
    lineHeight: 0,
    '&:hover': {
      borderColor: 'var(--colorAccentPrimary)',
      textDecoration: 'none'
    }
  },
  svg: {
    margin: 4,
    height: 16,
    width: 16,
  }
})
/* Structure */
function Navigation() {
  return (
    <div className={styles().navigation}>
      <Link className={styles().link} to="/">Report</Link>
      <Link className={styles().link} to="/concept">Concept</Link>
      <Link className={styles().link} to="/sources">Sources</Link>
      <a className={styles().top} href='/'>
        <svg className={styles().svg} focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 10L26 20 24.6 21.4 16 12.8 7.4 21.4 6 20z"></path><title>Chevron up</title></svg>
      </a>
    </div >
  );
}

export default Navigation;
