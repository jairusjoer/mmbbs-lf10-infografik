import { createUseStyles } from 'react-jss'
import { ResponsiveContainer, BarChart, Bar, ReferenceLine } from 'recharts';

/* Styles */
const useStyles = createUseStyles({
  gallery: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '16px 8px',
    '@media (min-width: 480px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    }
  },
  galleryItem: {
    display: 'grid',
    gridRowGap: 16,
    padding: 16,
    background: 'linear-gradient(180deg, transparent 0%, var(--colorBaseGray100) 100%)',
    borderRadius: 8,
    textAlign: 'center'
  },
  galleryTitle: {
    color: 'var(--colorBaseWhite)',
    minHeight: 90,
    fontWeight: 500
  },
  galleryChange: {
    fontWeight: 500
  },
  gallerySource: {
    gridColumn: '1/-1',
    textAlign: 'center',
    margin: '0 auto',
    fontWeight: 400
  },
})

/* Scripts */
// Financial data formatted for mapping
const data = [
  [{
    name: 'Fischen, Jagen, Fallenstellen',
    previousYear: 1,
    currentYear: 0.291,
    change: -0.709,
    isPositive: false,
    companies: 1
  }],
  [{
    name: 'Lufttransport',
    previousYear: 1,
    currentYear: 0.492,
    change: -0.508,
    isPositive: false,
    companies: 13
  }],
  [{
    name: 'Wassertransport',
    previousYear: 1,
    currentYear: 0.498,
    change: -0.502,
    isPositive: false,
    companies: 6
  }],
  [{
    name: 'Onlineversandhandel',
    previousYear: 1,
    currentYear: 1.677,
    change: 0.677,
    isPositive: true,
    companies: 15
  }],
  [{
    name: 'Land- und forstwirtschaftliche Aktivitäten',
    previousYear: 1,
    currentYear: 1.738,
    change: 0.738,
    isPositive: true,
    companies: 2
  }],
  [{
    name: 'Einzelhandel',
    previousYear: 1,
    currentYear: 1.919,
    change: 0.919,
    isPositive: true,
    companies: 10
  }],
];

/* Structure */
const ChartGallery = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.gallery}>
      {
        data.map((item, key) => (
          <div key={key} className={styles.galleryItem}>
            <p className={styles.galleryTitle}>{item[0].name}</p>
            <ResponsiveContainer width="99%" height={120}>
              <BarChart data={item} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} barGap={12}>
                <Bar dataKey="previousYear" name="2019" fill={item[0].isPositive ? '#6fdc8c' : '#ffb3b8'} />
                <Bar dataKey="currentYear" name="2020" fill={item[0].isPositive ? '#24a148' : '#fa4d56'} />
                <ReferenceLine y="1" stroke="white" strokeDasharray="4 4" />
              </BarChart>
            </ResponsiveContainer>
            <span className={styles.galleryChange} style={{ color: item[0].isPositive ? '#24a148' : '#fa4d56' }}>{(item[0].change * 100).toFixed(2)}%</span>
            <span>Unternehmen: {item[0].companies}</span>
          </div>
        ))
      }
      <span className={styles.gallerySource}>Source: <a className="chart-link" href={props.sourceUrl} target="_blank" rel="noreferrer">{props.sourceName}</a></span>
    </div>
  );
};

export default ChartGallery;