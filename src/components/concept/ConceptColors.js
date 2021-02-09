import { createUseStyles } from 'react-jss'
/* Styles */
const useStyles = createUseStyles({
  ConceptColors: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 8
  },
  ConceptColorsItem: {
    display: 'grid',
    lineHeight: '24px',
    padding: '8px 16px',
    width: '100%',
    borderRadius: 8,
    border: '1px solid var(--colorBaseGray090)',
  },
  ConceptColorsName: {
    fontWeight: 500,
  },
  ConceptColorsCode: {
    opacity: .666
  }
})
/* Scripts */
const colors = [
  {
    name: 'colorBaseBlack',
    code: '#000000',
    font: '#ffffff'
  },
  {
    name: 'colorBaseGray100',
    code: '#181818',
    font: '#ffffff'
  },
  {
    name: 'colorBaseGray090',
    code: '#282828',
    font: '#ffffff'
  },
  {
    name: 'colorBaseGray080',
    code: '#383838',
    font: '#ffffff'
  },
  {
    name: 'colorBaseGray070',
    code: '#505050',
    font: '#ffffff'
  },
  {
    name: 'colorBaseGray050',
    code: '#909090',
    font: '#ffffff'
  },
  {
    name: 'colorBaseWhite',
    code: '#ffffff',
    font: '#000000'
  },
  {
    name: 'colorAccentPrimary',
    code: '#408FFF',
    font: '#ffffff'
  }
]

/* Structure */
const ConceptColors = () => {
  const styles = useStyles();
  return (
    <div className={styles.ConceptColors}>
      {colors.map((item, key) =>
        <div key={key} className={styles.ConceptColorsItem} style={{ backgroundColor: item.code, color: item.font }}>
          <span className={styles.ConceptColorsName}>{item.name}</span>
          <span className={styles.ConceptColorsCode}>{item.code}</span>
        </div>
      )}

    </div>
  );
};

export default ConceptColors;