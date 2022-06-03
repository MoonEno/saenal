import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import data from '../../CONSTANT/chartData';

function Chart() {
    return (
        <ResponsiveContainer width="100%" height="75%">
            <AreaChart
                width={300}
                height={60}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                <XAxis dataKey="name" />
                <YAxis />
                <Area type="monotone" dataKey="uv" stroke="#0CB8A5" fill="#0CB8A5" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Chart;