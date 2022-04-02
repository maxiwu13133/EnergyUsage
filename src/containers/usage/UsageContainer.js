import React from 'react';

import { useSelector } from 'react-redux';
import { selectUser } from '../../components/counter/counterSlice';

import Usage from './Usage';

const UsageContainer = () => {
  let user = useSelector(selectUser);
  console.log(user);
  const getChartValues = (values) => {
    const xhttp = new XMLHttpRequest();

    let params = {
      username: values.username,
      password: values.password
    };
    console.log(values.username);
    console.log(values.password);
    // if (values.password !== "") {
    xhttp.open(
      'POST',
      'http://mincasa.khademsam.com/API/v1/login/',
      true
    );
    xhttp.setRequestHeader('Content-type', 'application/JSON');
    xhttp.send(JSON.stringify(params));
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log('before if' + xhttp.readyState);
        // dispatch(incrementLogin()) && navigate('/admin/admin');
      }
    };
  }
  return (
    <Usage />
  )
}

export default UsageContainer;