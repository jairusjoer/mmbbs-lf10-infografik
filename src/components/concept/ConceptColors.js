import { createUseStyles } from 'react-jss'

/* Styles */
const useStyles = createUseStyles({
  ConceptColors: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 8,

    '@media (min-width: 480px)': {
      gridTemplateColumns: '1fr 1fr',
    },

    '@media (min-width: 720px)': {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    }
  },
  ConceptColorsItem: {
    display: 'grid',
    lineHeight: '24px',
    padding: '8px 16px',
    width: '100%',
    borderRadius: 8,
    border: '1px solid var(--colorBaseGray080)',
  },
  ConceptColorsName: {
    fontWeight: 500,
  },
  ConceptColorsCode: {
    opacity: .666
  }
})

/* Scripts */
// Color data formatted for mapping
const colors = [
  {
    name: 'colorBaseBlack',
    code: '#000000',
    font: '#FFFFFF'
  },
  {
    name: 'colorBaseGray100',
    code: '#181818',
    font: '#FFFFFF'
  },
  {
    name: 'colorBaseGray090',
    code: '#282828',
    font: '#FFFFFF'
  },
  {
    name: 'colorBaseGray080',
    code: '#383838',
    font: '#FFFFFF'
  },
  {
    name: 'colorBaseGray070',
    code: '#505050',
    font: '#FFFFFF'
  },
  {
    name: 'colorBaseGray050',
    code: '#909090',
    font: '#000000'
  },
  {
    name: 'colorBaseWhite',
    code: '#FFFFFF',
    font: '#000000'
  },
  {
    name: 'colorAccentPrimary',
    code: '#408FFF',
    font: '#000000'
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