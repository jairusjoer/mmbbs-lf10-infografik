import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../assets/css/components/Chart.scss';

// Browser Fetch API import
var apiStr = 'https://sandbox.iexapis.com/stable';
apiStr += '/stock/IBM/chart/1y';
apiStr += '?token=Tsk_bfcba392ab76443fb243298b50f4ff44';

class Chart extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: false,
            error: null,
        };
    }
    // Stage Management
    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(apiStr)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => this.setState({ data: data, isLoading: false }))
            .catch((error) => this.setState({ error, isLoading: false }));
    }
    // Render Function
    render() {
        const { data, isLoading } = this.state;

        if (isLoading) {
            return (
                <div className='chart'>
                    <p>Loading ...</p>
                </div>
            );
        }
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
    }
}
/*
 */
export default Chart;
