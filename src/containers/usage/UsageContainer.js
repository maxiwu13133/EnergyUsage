import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addBills, selectUser } from '../../components/counter/counterSlice';
import './Usage.css'
import Usage from './Usage';

const UsageContainer = () => {
  const dispatch = useDispatch();
  const data = [
    { name: 'Page A', uv: 400, pv: 200, amt: 2400 },
    { name: 'Page A', uv: 400, pv: 240, amt: 2400 },
    { name: 'Page A', uv: 400, pv: 2200, amt: 2400 },
    { name: 'Page A', uv: 400, pv: 1400, amt: 2400 }
  ];
  let user = useSelector(selectUser);
  // console.log(user);
  const getUsageData = () => {
    const xhttp = new XMLHttpRequest();
    // if (values.password !== "") {
    xhttp.open(
      'GET',
      `http://mincasa.khademsam.com/API/v1/usage/bills/?username=${user.username}`,
      true
    );
    xhttp.setRequestHeader('Content-type', 'application/JSON');
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log('before if' + xhttp.readyState);
        const response = JSON.parse(this.responseText);
        console.log(response)
        console.log(this.responseText)
        dispatch(addBills(response));
      }
    };
  }
  // useEffect(() => {
  // },);
  // const usageData = getChartValues();
    getUsageData()
  return (
    <Usage data={data} />
  )
}

export default UsageContainer;