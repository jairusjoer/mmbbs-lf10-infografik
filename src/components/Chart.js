componentDidMountimport React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../assets/css/components/Chart.scss';

// Browser Fetch API import
var apiStr = 'https://sandbox.iexapis.com/stable/stock/twtr/chart/1y?token=Tsk_bfcba392ab76443fb243298b50f4ff44';

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(apiStr)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((data) => this.setState({ data: data, isLoading: false }))
            .catch((error) => this.setState({ error, isLoading: false }));
    }

    render() {
        const { data, isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="chart">
                    <p>Loading ...</p>
                </div>
            );
        }

        return (
            <div className='chart'>
                <ResponsiveContainer>
                    <LineChart data={data}>
                        <XAxis dataKey='date' />
                        <YAxis dataKey='high' yAxisId='left' />
                        <Legend />
                        <Line yAxisId='left' type='monotone' dot={false} dataKey='high' stroke='#8884d8' />
                        <Line yAxisId='left' type='monotone' dot={false} dataKey='low' stroke='#82ca9d' />
                        <Line yAxisId='left' type='monotone' dot={false} stroke='#ffc658' />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
/*
const TooltipContent = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className='chart-tooltip'>
                <span className='chart-item' style={{ color: '#8884d8' }}>
                    {payload[0].name}
                </span>
                <span className='chart-item'>{payload[0].value}</span>
                <span className='chart-item' style={{ color: '#82ca9d' }}>
                    {payload[1].name}
                </span>
                <span className='chart-item'>{payload[1].value}</span>
                <span className='chart-item' style={{ color: '#ffc658' }}>
                    {payload[2].name}
                </span>
                <span className='chart-item'>{payload[2].value}</span>
            </div>
        );
    }
    return null;
};

const Chart = () => {
    return (
        <div className='chart'>
            <ResponsiveContainer>
                <LineChart>
                    <XAxis dataKey='Date' />
                    <YAxis dataKey='Cases' yAxisId='left' />
                    <Tooltip content={<TooltipContent />} />
                    <Legend />
                    <Line yAxisId='left' type='monotone' dot={false} stroke='#8884d8' />
                    <Line yAxisId='left' type='monotone' dot={false} stroke='#82ca9d' />
                    <Line yAxisId='left' type='monotone' dot={false} stroke='#ffc658' />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
*/
export default Chart;
