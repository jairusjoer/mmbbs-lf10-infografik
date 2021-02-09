import { createUseStyles } from 'react-jss'
/* Styles */
const useStyles = createUseStyles({
  section: {
    display: 'grid',
    borderRadius: 16,
    gridRowGap: 16,
    padding: '48px 16px',
    //backgroundColor: 'var(--colorBaseGray100)',
    background: 'linear-gradient(180deg, var(--colorBaseGray100) 0%, var(--colorBaseBlack) 100%)',
    border: '1px solid var(--colorBaseGray100)',

    '& h4': {
      color: 'var(--colorBaseWhite)'
    }
  },
  sectionLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'var(--colorBaseGray090)'
  }
})
/* Structure */
const Section = (props) => {
  const styles = useStyles();

  return (
    <div className={styles.section} id={props.title.replace(/\s+/g, '-').toLowerCase()}>
      {props.title &&
        <h3>{props.title}</h3>}
      <hr className={styles.sectionLine}></hr>
      {props.children}
    </div>
  );
};

export default Section;
