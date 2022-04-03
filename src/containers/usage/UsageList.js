import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectBills } from '../../components/counter/counterSlice';

const UsageList = () => {
  let usageData = useSelector(selectBills);
  return (
    <React.Fragment>
      <ListGroup>
        {usageData.map((bill) => (
          <ListGroup.Item >
            <p>Amount: {bill.amount}</p>
            <p>Month: {bill.month}</p>
            <p>Year: {bill.year}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default UsageList;
