import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import '../assets/css/components/Chart.scss';

const Chart = (property) => {
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
    var iex = 'https://sandbox.iexapis.com/stable/stock/market/batch?symbols=fb,amzn,aapl,nflx,goog&types=chart&range=2y&token=Tsk_bfcba392ab76443fb243298b50f4ff44'
    fetchData(iex);
  }, []);

  // Custom Tooltip Component
  const TooltipContent = ({ payload }) => {
    return (
      <div className='chart-tooltip'>
        {payload.map((payload) => {
          return (
            <div className='chart-item' key={payload.name} >
              <span className='chart-name' style={{ color: payload.stroke }}>
                {payload.name}
              </span>
              <span className='chart-value'>{payload.value.toFixed(2)}</span>
            </div>
          );
        })}
      </div>
    );
  };
  // Rechart Component
  return (
    <div className='chart' id="report">
      <ResponsiveContainer width="100%" height={360}>
        <LineChart data={data} margin={{left: -24, right: 0}}>
          <XAxis dataKey='date' />
          <YAxis yAxisId='left' />
          <Tooltip content={<TooltipContent />} />
          <Legend />
          <Line dataKey='goog' name="Alphabet" yAxisId='left' type='monotone' dot={false} stroke='#009d9a' />
          <Line dataKey='amzn' name="Amazon.com" yAxisId='left' type='monotone' dot={false} stroke='#4589ff' />
          <Line dataKey='aapl' name="Apple" yAxisId='left' type='monotone' dot={false} stroke='#a56eff' />
          <Line dataKey='fb' name="Facebook" yAxisId='left' type='monotone' dot={false} stroke='#ee5396' />
          <Line dataKey='nflx' name="Netflix" yAxisId='left' type='monotone' dot={false} stroke='#fa4d56' />
        </LineChart>
      </ResponsiveContainer>
      <span className="chart-source">Source: <a className="chart-link" href={property.sourceUrl} target="_blank">{property.sourceName}</a></span>
    </div>
  );
};

export default Chart;