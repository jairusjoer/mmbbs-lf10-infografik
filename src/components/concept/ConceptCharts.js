import { createUseStyles } from 'react-jss'
import { ResponsiveContainer, LineChart, Line, AreaChart, Area, BarChart, Bar } from 'recharts';
/* Styles */
const useStyles = createUseStyles({
  ConceptCharts: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: 16,
  },
  ConceptChartsItem: {
    padding: 16,
    background: 'linear-gradient(180deg, transparent 0%, var(--colorBaseGray100) 100%)',
    borderRadius: 8,
  }
})
/* Scripts */
const data = [
  {
    value: 4000,
  },
  {
    value: 3000,
  },
  {
    value: 2000,
  },
  {
    value: 2780,
  },
  {
    value: 1890,
  },
  {
    value: 2390,
  },
  {
    value: 3490,
  },
];
/* Structure */
const ConceptCharts = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.ConceptCharts}>
      <div className={styles.ConceptChartsItem}>
        <ResponsiveContainer width="99%" height={120}>
          <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Line dataKey='value' type='monotone' dot={false} stroke='var(--colorAccentPrimary)' />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.ConceptChartsItem}>
        <ResponsiveContainer width="99%" height={120}>
          <AreaChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Area dataKey='value' type='monotone' fill='var(--colorAccentPrimary)' />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.ConceptChartsItem}>
        <ResponsiveContainer width="99%" height={120}>
          <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Bar dataKey='value' type='monotone' fill='var(--colorAccentPrimary)' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ConceptCharts;