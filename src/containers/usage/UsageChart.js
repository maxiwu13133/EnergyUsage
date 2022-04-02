import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

const UsageChart = () => {
  const data = [ 
    { name: 'Page A', uv: 400, pv: 200, amt: 2400 },
    { name: 'Page A', uv: 400, pv: 240, amt: 2400 },
    { name: 'Page A', uv: 400, pv: 2200, amt: 2400 },
    { name: 'Page A', uv: 400, pv: 1400, amt: 2400 },
   ];
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type='monotone' dataKey='pv' stroke='#8884d8' />
      <Line type='monotone' dataKey='uv' stroke='#8884d8' />
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default UsageChart;
