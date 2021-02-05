import { StyleSheet, css } from 'aphrodite/no-important';
import { ResponsiveContainer, Bar, BarChart } from 'recharts';

const style = StyleSheet.create({
  slider: {
    width: 'calc(100vw - 80px)',
    maxWidth: 672,
  }
});

const losses = [
  {
    name: 'Fishing, Hunting, Trapping',
    previousYear: 1,
    currentYear: 0.291,
    change: -0.709,
  },
  {
    name: 'Air Transportation',
    previousYear: 1,
    currentYear: 0.492,
    change: -0.508,
  },
  {
    name: 'Water Transportation',
    previousYear: 1,
    currentYear: 0.498,
    change: -0.502,
  },
];

const gains = [
  {
    name: 'Nonstore retailers',
    previousYear: 1,
    currentYear: 1.677,
    change: 0.677,
  },
  {
    name: 'Agriculture and Forestry Support Activities',
    previousYear: 1,
    currentYear: 1.738,
    change: 0.738,
  },
  {
    name: 'Miscellaneous Store Retailers',
    previousYear: 1,
    currentYear: 1.919,
    change: 0.919,
  },
]

var settings = {
  arrows: false,
  dots: false,
  infinite: true,
  variableWidth: true,
};

const ChartSlider = (props) => {
  // Rechart Component
  return (
    <div>
        <ResponsiveContainer width="99%" height={180}>
          <BarChart data={losses} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} barGap={12}>
            <Bar dataKey="previousYear" name={'2019'} fill="#282828" />
            <Bar dataKey="currentYear" name="2020" fill="#fa4d56" />
          </BarChart>
        </ResponsiveContainer>
      <span className="chart-source">Source: <a className="chart-link" href={props.sourceUrl} target="_blank" rel="noreferrer">{props.sourceName}</a></span>
    </div>
  );
};

export default ChartSlider;