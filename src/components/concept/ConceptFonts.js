import { createUseStyles } from 'react-jss'

/* Styles */
const useStyles = createUseStyles({
  ConceptFonts: {
    display: 'grid',
    gridRowGap: 16,
    padding: 16,
    background: 'linear-gradient(180deg, transparent 0%, var(--colorBaseGray100) 100%)',
    borderRadius: 8,
  },
})

/* Structure */
const ConceptFonts = () => {
  const styles = useStyles();
  return (
    <div className={styles.ConceptFonts}>
      <h3>The quick brown fox jumps over a lazy dog</h3>
    </div>
  );
};

export default ConceptFonts;