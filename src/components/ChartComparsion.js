import { createUseStyles } from 'react-jss'
import { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend, Tooltip, ReferenceLine } from 'recharts';
/* Styles */
const useStyles = createUseStyles({
  tooltip: {
    backgroundColor: 'var(--colorBaseGray100)',
    padding: 8,
    borderRadius: 6
  },
  tooltipItem: {
    display: 'grid',
    gridTemplateColumns: '108px 36px',
    gridColumnGap: 8,
    fontSize: 12,
    lineHeight: '16px'
  },
  tooltipValue: {
    textAlign: 'right',
    fontFamily: 'monospace'
  },
  chartSource: {
    textAlign: 'center',
    margin: '12px auto 0',
    fontSize: 12,
    lineHeight: '16px',
  },
  loading: {
    padding: 24,
    textAlign: 'center',
    border: '1px solid var(--colorBaseGray090)',
    borderRadius: 12,
  },
})
/* Scripts */
const ChartComparsion = (props) => {
  const styles = useStyles();
  const [data, setData] = useState([]);

  // Custom data merge function
  const customMerge = (input) => {
    var output = [];
    for (const i in input.FB.chart) {
      var json = {
        date: input.FB.chart[i].label,
        fb: input.FB.chart[i].changeOverTime,
        amzn: input.AMZN.chart[i].changeOverTime,
        aapl: input.AAPL.chart[i].changeOverTime,
        nflx: input.NFLX.chart[i].changeOverTime,
        goog: input.GOOG.chart[i].changeOverTime,
      };
      output.push(json);
    }
    setData(output)
  }

  // Fetch data from API and move data to customMerge()
  const fetchData = async (api) => {
    const response = await fetch(api);
    response
      .json()
      .then((response) => customMerge(response))
      .catch((error) => console.error(error));

  }

  // Parse API data to data constant
  useEffect(() => {
    fetchData('https://sandbox.iexapis.com/stable/stock/market/batch?symbols=fb,amzn,aapl,nflx,goog&types=chart&range=2y&token=Tsk_bfcba392ab76443fb243298b50f4ff44');
  }, []);

  // Custom Tooltip Component
  const TooltipContent = ({ payload }) => {
    if (payload) {
      return (
        <div className={styles.tooltip}>
          {payload.map((item, key) => {
            return (
              <div className={styles.tooltipItem} key={key} >
                <span style={{ color: item.stroke }}>
                  {item.name}
                </span>
                <span className={styles.tooltipValue}>{item.value.toFixed(2)}</span>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  /* Structure */
  if (data.length > 0) {
    return (
      <div className='chart'>
        <ResponsiveContainer id width="99%" height={360}>
          <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: -24 }}>
            <XAxis dataKey='date' />
            <YAxis yAxisId='left' />
            <Tooltip content={<TooltipContent />} />
            <Legend />
            <ReferenceLine yAxisId="left" x="Feb 20, 20" stroke="white" strokeDasharray="4 4" />
            <Line dataKey='goog' name="Alphabet" yAxisId='left' type='monotone' dot={false} stroke='#009d9a' />
            <Line dataKey='amzn' name="Amazon.com" yAxisId='left' type='monotone' dot={false} stroke='#4589ff' />
            <Line dataKey='aapl' name="Apple" yAxisId='left' type='monotone' dot={false} stroke='#a56eff' />
            <Line dataKey='fb' name="Facebook" yAxisId='left' type='monotone' dot={false} stroke='#ee5396' />
            <Line dataKey='nflx' name="Netflix" yAxisId='left' type='monotone' dot={false} stroke='#fa4d56' />
          </LineChart>
        </ResponsiveContainer>
        <p className={styles.chartSource}>Source: <a className="chart-link" href={props.sourceUrl} target="_blank" rel="noreferrer">{props.sourceName}</a></p>
      </div>
    );
  }
  return (
    <div className={styles.loading}>Fetching Data from IEX ...</div>
  );
};

export default ChartComparsion;