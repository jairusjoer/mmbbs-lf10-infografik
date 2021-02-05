import { createUseStyles } from 'react-jss'
/* Styles */
const styles = createUseStyles({
  section: {
    paddingTop: 72,
    display: 'grid',
    gridRowGap: 24,
    marginBottom: -24,
  }
})
/* Structure */
const Section = (props) => {
  var str = props.title;
  // Section Component
  return (
    <div className={styles().section} id={props.title.replace(/\s+/g, '-').toLowerCase()}>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
};

export default Section;
