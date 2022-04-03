import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectBills } from '../../components/counter/counterSlice';

const UsageList = ({ data }) => {
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
  let usageData = useSelector(selectBills);
  return (
    <React.Fragment>
      <ListGroup>
        {usageData.map((user) => (
          <ListGroup.Item>
            Amount: {user.amount}
            Month: {month[user.month - 1]}
            Year: {user.year}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default UsageList;
