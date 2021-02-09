import { createUseStyles } from 'react-jss'

/* Styles */
const useStyles = createUseStyles({
  Section: {
    display: 'grid',
    borderRadius: 16,
    gridRowGap: 16,
    padding: '48px 16px',
    border: '1px solid var(--colorBaseGray090)',
    '& h4': {
      color: 'var(--colorBaseWhite)'
    }
  },
  SectionLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'var(--colorBaseGray090)'
  }
})

/* Structure */
const Section = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.Section} id={props.title.replace(/\s+/g, '-').toLowerCase()}>
      {props.title &&
        <h3>{props.title}</h3>}
      <hr className={styles.SectionLine}></hr>
      {props.children}
    </div>
  );
};

export default Section;
