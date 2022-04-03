import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { selectBills } from '../../components/counter/counterSlice';

const UsageChart = () => {
  let usageData = useSelector(selectBills);
  const date = new Date();
  const month = date.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return (
    <React.Fragment>
      <LineChart
        width={600}
        height={300}
        data={usageData.slice(0, 6).reverse()}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type='monotone' dataKey='amount' stroke='#8884d8' />
        <Line type='monotone' dataKey='avg' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
      </LineChart>
    </React.Fragment>
  );
};

export default UsageChart;
