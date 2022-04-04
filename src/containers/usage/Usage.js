import React, { useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab  from 'react-bootstrap/Tab'
import UsageChart from './UsageChart';
import UsageList from './UsageList';
import UsageStats from './UsageStats';
import { useDispatch, useSelector } from 'react-redux';
import { addBills, selectUser } from '../../components/counter/counterSlice';

const Usage = () => {
  let user = useSelector(selectUser);
  let dispatch = useDispatch();
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
    <React.Fragment>
      <Tabs fill variant='tabs' defaultActiveKey='stats'>
        <Tab tabClassName='stats' eventKey='stats' title='Stats'>
          <UsageStats />
        </Tab>
        <Tab tabClassName='list' eventKey='list' title='List'>
          <UsageList />
        </Tab>
        <Tab tabClassName='list' eventKey='graph' title='Graph'>
          <UsageChart />
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
