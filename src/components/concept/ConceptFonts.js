import { createUseStyles } from 'react-jss'
/* Styles */
const useStyles = createUseStyles({
  ConceptFonts: {
    display: 'grid',
    gridRowGap: 16,
    padding: 16,
    background: 'linear-gradient(180deg, transparent 0%, var(--colorBaseGray100) 100%)',
    borderRadius: 8,

    '& > *': {
      opacity: 0.333
    }
  },
})
/* Scripts */

/* Structure */
const ConceptFonts = () => {
  const styles = useStyles();
  return (
    <div className={styles.ConceptFonts}>
      <h1>H1: Inter 500 42/48</h1>
      <h2>H2: Inter 500 68/74</h2>
      <h3>H3: Inter 500 24/30</h3>
      <h4>H4: Inter 500 18/24</h4>
      <p>P: Inter 400 18/24</p>
      <span>Span: Inter 400 12/16</span>
    </div>
  );
};

export default ConceptFonts;