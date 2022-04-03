import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab  from 'react-bootstrap/Tab'
import UsageChart from './UsageChart';
import UsageList from './UsageList';

import { useSelector } from 'react-redux';
import { selectUser } from '../../components/counter/counterSlice';

const Usage = ({ data }) => {
  const [ showList, toggleList ] = useState(true);
  let user = useSelector(selectUser);
  // const getChartValues = () => {
  //   const xhttp = new XMLHttpRequest();
  //   // if (values.password !== "") {
  //   xhttp.open(
  //     'GET',
  //     `http://mincasa.khademsam.com/API/v1/usage/bills/?username=${user.username}`,
  //     true
  //   );
  //   xhttp.setRequestHeader('Content-type', 'application/JSON');
  //   xhttp.send();
  //   xhttp.onreadystatechange = function() {
  //     if (this.readyState === 4 && this.status === 200) {
  //       console.log('before if' + xhttp.readyState);
  //       const response = JSON.parse(this.responseText);
  //       return response;
  //     }
  //   };
  // }
  const handleSelect = (eventKey) =>
    eventKey === 'list' ? () => toggleList(true) : () => toggleList(false);
  // const toggleListShow = (willShow) => toggleList(willShow);
  // const usageData = getChartValues();
  // console.log(usageData)
  return (
    <React.Fragment>
      <Tabs fill variant='tabs' defaultActiveKey='list'>
        <Tab eventKey='list' title='List'>
          <UsageList data={data} />
        </Tab>
        <Tab eventKey='graph' title='Graph'>
          <UsageChart data={data} />
        </Tab>
      </Tabs>
      {/* {showList ? (
        <UsageList data={data} />
      ) : (
        <UsageChart data={data} />
      )} */}
    </React.Fragment>
  );
};

export default Usage;
