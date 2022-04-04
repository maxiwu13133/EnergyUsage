import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
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
  const data = usageData.slice(0, 6).reverse().map((data) => {
    return { ...data, avg: 122 };
  });
  return (
    <React.Fragment>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
      >
      <Legend verticalAlign="top" height={36}/>
        <Line type='monotone' dataKey='amount' stroke='#8884d8' />
        <Line type='monotone' dataKey='avg' stroke='pink' />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
      </LineChart>
    </React.Fragment>
  );
};

export default UsageChart;
