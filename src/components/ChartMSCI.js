import { createUseStyles } from 'react-jss'
import { useState, useEffect } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';
import Loading from './Loading';

/* Styles */
const useStyles = createUseStyles({
  tooltip: {
    backgroundColor: 'var(--colorBaseGray100)',
    color: 'var(--colorBaseWhite)',
    padding: 8,
    borderRadius: 8,
    fontSize: 12,
    lineHeight: '16px'
  },
  tooltipDate: {
    borderBottom: '1px solid var(--colorBaseGray080)',
    width: '100%',
    paddingBottom: 4,
    marginBottom: 4,
    display: 'inline-block'
  },
  tooltipItem: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridColumnGap: 48,
  },
  tooltipValue: {
    textAlign: 'right',
    fontFamily: 'monospace'
  },
  chart: {
    padding: 16,
    background: 'linear-gradient(180deg, transparent 0%, var(--colorBaseGray100) 100%)',
    borderRadius: 8,
  },
  chartSource: {
    display: 'block',
    textAlign: 'center',
    margin: '16px auto 16px',
  },
  chartLoading: {
    padding: 24,
    textAlign: 'center',
    border: '1px solid var(--colorBaseGray090)',
    borderRadius: 12,
  },
})

/* Structure */
const ChartMSCI = (props) => {
  const styles = useStyles();
  const [data, setData] = useState([]);
  // Custom data merge function
  const customMerge = (input) => {
    var output = [];
    for (const i in input) {
      var json = {
        date: input[i].label,
        urth: input[i].close,
      };
      output.push(json);
    }
    setData(output)
  }

  // Pass API data to data constant as state
  useEffect(() => {
    // Fetch data from API and move data to customMerge()
    const fetchData = async (api) => {
      const response = await fetch(api);
      response
        .json()
        .then((response) => customMerge(response))
        .catch((error) => console.error(error));

    }
    // Execute function to update data state
    fetchData('https://sandbox.iexapis.com/stable/stock/urth/chart/2y?token=Tsk_bfcba392ab76443fb243298b50f4ff44');
  }, []);

  // Custom Tooltip Component
  const TooltipContent = ({ payload }) => {
    if (payload && payload[0]) {
      return (
        <div className={styles.tooltip}>
          <span className={styles.tooltipDate}>{payload[0].payload.date}</span>
          {payload.map((item, key) =>
            <div className={styles.tooltipItem} key={key} >
              <span style={{ color: item.stroke }}>
                {item.name}
              </span>
              <span className={styles.tooltipValue}>{item.value.toFixed(2)}</span>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  // Rechart Component
  if (data.length > 0) {
    return (
      <div>
        <div className={styles.chart}>
          <ResponsiveContainer id width="99%" height={360}>
            <AreaChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: -24 }}>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--colorAccentPrimary)" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="var(--colorAccentPrimary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis minTickGap={32} dataKey='date' stroke="var(--colorBaseGray070)" />
              <YAxis yAxisId='left' stroke="var(--colorBaseGray070)" />
              <Tooltip content={<TooltipContent />} />
              <ReferenceLine yAxisId="left" x="Feb 20, 20" stroke="var(--colorBaseWhite)" strokeDasharray="4 4" />
              <ReferenceLine yAxisId="left" y="105" stroke="var(--colorBaseWhite)" strokeDasharray="4 4" />
              <Area dataKey='urth' name="iShares MSCI World" yAxisId='left' type='monotone' dot={false} stroke='var(--colorAccentPrimary)' fillOpacity={1} fill="url(#gradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <span className={styles.chartSource}>Source: <a className="chart-link" href={props.sourceUrl} target="_blank" rel="noreferrer">{props.sourceName}</a></span>
      </div>
    );
  }
  return (
    <Loading />
  );
};

export default ChartMSCI;