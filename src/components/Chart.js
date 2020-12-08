import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../assets/css/components/Chart.scss';

// Browser Fetch API import
var apiStr = 'https://sandbox.iexapis.com/stable';
apiStr += '/stock/IBM/chart/1y';
apiStr += '?token=Tsk_bfcba392ab76443fb243298b50f4ff44';

const Chart = () => {
    const [error, setError] = useState(false);
    const [data, setData] = useState({});

    // https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd
    async function fetchData() {
        const response = await fetch(apiStr);
        response
            .json()
            .then((response) => setData(response))
            .catch((error) => setError(error));
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Custom Tooltip Component
    const TooltipContent = ({ active, payload }) => {
        if (active) {
            return (
                <div className='chart-tooltip'>
                    {payload.map((payload) => {
                        return (
                            <p>
                                <span>{payload.name}</span> {payload.value}
                            </p>
                        );
                    })}
                </div>
            );
        }
        return null;
    };
    // Rechart Component
    return (
        <div className='chart'>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey='date' />
                    <YAxis dataKey='high' yAxisId='left' />
                    <Tooltip content={<TooltipContent />} />
                    <Legend />
                    <Line yAxisId='left' type='monotone' dot={false} dataKey='high' stroke='#8884d8' />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
