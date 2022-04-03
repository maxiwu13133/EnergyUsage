import React from 'react';
import UsageChart from './UsageChart';

const Usage = ({data}) => {
  return (
    <div>
      <UsageChart data={data}/>
    </div>
  )
};

export default Usage;