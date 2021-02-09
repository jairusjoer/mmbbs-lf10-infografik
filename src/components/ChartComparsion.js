import { createUseStyles } from 'react-jss'
import { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend, Tooltip, ReferenceLine } from 'recharts';
import Loading from './Loading'
/* Styles */
const useStyles = createUseStyles({
  tooltip: {
    backgroundColor: 'var(--colorBaseGray090)',
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
    flexGrow: 1,
    overflowY: 'hidden'
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  chartSource: {
    display: 'block',
    textAlign: 'center',
    margin: '16px auto 0',
  },
  chartLoading: {
    padding: 24,
    textAlign: 'center',
    border: '1px solid var(--colorBaseGray090)',
    borderRadius: 12,
  },
})
/* Scripts */

/* Structure */
const ChartComparsion = (props) => {
  const styles = useStyles();
  const [data, setData] = useState([]);

  // Custom data merge function
  const customMerge = (input) => {
    var output = [];
    for (const i in input.FB.chart) {
      const regex = /\d{2}[,]/gm;
      var dayDate = input.FB.chart[i].label
      var json = {
        date: input.FB.chart[i].label,
        month: dayDate.replace(regex, ''),
        fb: input.FB.chart[i].changeOverTime * 100,
        amzn: input.AMZN.chart[i].changeOverTime * 100,
        aapl: input.AAPL.chart[i].changeOverTime * 100,
        nflx: input.NFLX.chart[i].changeOverTime * 100,
        goog: input.GOOG.chart[i].changeOverTime * 100,
      };
      output.push(json);
    }
    setData(output)
  }
  // Parse API data to data constant
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
    fetchData('https://sandbox.iexapis.com/stable/stock/market/batch?symbols=fb,amzn,aapl,nflx,goog&types=chart&range=2y&token=Tsk_bfcba392ab76443fb243298b50f4ff44');
  }, []);

  // Custom Tooltip Component
  const TooltipContent = ({ active, payload, label }) => {
    if (payload && payload[0]) {
      return (
        <div className={styles.tooltip}>
          <span className={styles.tooltipDate}>{payload[0].payload.date}</span>
          {payload.map((item, key) =>
            <div className={styles.tooltipItem} key={key} >
              <span style={{ color: item.stroke }}>
                {item.name}
              </span>
              <span className={styles.tooltipValue}>{item.value.toFixed(2)}%</span>
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
          <ResponsiveContainer width="99%" height={360}>
            <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <XAxis minTickGap={32} dataKey='date' stroke="var(--colorBaseGray070)" />
              <YAxis yAxisId='left' stroke="var(--colorBaseGray070)" />
              <Tooltip content={<TooltipContent />} />
              <Legend />
              <ReferenceLine yAxisId="left" x="Feb 20, 20" stroke="var(--colorBaseWhite)" strokeDasharray="4 4" />
              <Line dataKey='goog' name="Alphabet" yAxisId='left' type='monotone' dot={false} stroke='#4caf50' />
              <Line dataKey='amzn' name="Amazon.com" yAxisId='left' type='monotone' dot={false} stroke='#ffc107' />
              <Line dataKey='aapl' name="Apple" yAxisId='left' type='monotone' dot={false} stroke='#9474cc' />
              <Line dataKey='fb' name="Facebook" yAxisId='left' type='monotone' dot={false} stroke='#2196f3' />
              <Line dataKey='nflx' name="Netflix" yAxisId='left' type='monotone' dot={false} stroke='#f44336' />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <span className={styles.chartSource}>Source: <a className="chart-link" href={props.sourceUrl} target="_blank" rel="noreferrer">{props.sourceName}</a></span>
      </div>
    );
  }
  return (
    <Loading/>
  );
};

export default ChartComparsion;