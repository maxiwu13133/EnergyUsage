import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addBills, selectUser } from '../../components/counter/counterSlice';
import './Usage.css'
import Usage from './Usage';

const UsageContainer = () => {
  const dispatch = useDispatch();
  let user = useSelector(selectUser);
  useEffect(() => {
    const month = [
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
    const xhttp = new XMLHttpRequest();
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
        response.map((data) => data.month = month[data.month - 1])
        dispatch(addBills(response));
      }
    };
  }, [dispatch, user.username]);
  return (
    <Usage />
  )
}

export default UsageContainer;