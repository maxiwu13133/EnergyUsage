import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { addStats, selectUser, selectUserStats } from '../../components/counter/counterSlice';

const UsageStats = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const stats = useSelector(selectUserStats);
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
      `http://mincasa.khademsam.com/API/v1/usage/?username=${user.username}`,
      true
    );
    xhttp.setRequestHeader('Content-type', 'application/JSON');
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log('before if' + xhttp.readyState);
        const response = JSON.parse(this.responseText);
        console.log(response)
        dispatch(addStats(response))
      }
    };
  }, [dispatch, user.username])
  return (
    <React.Fragment>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Average Usage</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          ${stats.average.toFixed(2)}
        </Card.Subtitle>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Previous Month's Usage</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            ${stats.prev_amount}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Current Amount</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            ${stats.current_amount}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default UsageStats;
