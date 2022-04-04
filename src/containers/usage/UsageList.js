import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { addBills, selectBills } from '../../components/counter/counterSlice';

const UsageList = () => {
  let usageData = useSelector(selectBills);
  let dispatch = useDispatch();

  let deleteBill = (billId, close) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open(
      'DELETE',
      `http://mincasa.khademsam.com/API/v1/usage/bill/?bill_id=${billId}`,
      true
    );
    xhttp.setRequestHeader('Content-type', 'application/JSON');
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(billId + ' deleted successfully');
        let billsNew = usageData.filter((value) => value.bill_id !== billId);
        dispatch(addBills(billsNew));
        close();
      }
    };
  };

  return (
    <React.Fragment>
      <ListGroup>
        {usageData.map((bill) => (
          <ListGroup.Item key={bill.user_id}>
            <p>Amount: {bill.amount}</p>
            <p>Month: {bill.month}</p>
            <p>Year: {bill.year}</p>
            <Popup
              trigger={<button className='delete-button'>Delete</button>}
              modal
            >
              {(close) => (
                <div className='settings-popup'>
                  <p className='settings-popup-question'>
                    Are you sure? This can not be undone.
                  </p>
                  <button
                    className='settings-popup-btn'
                    onClick={() => 
                      deleteBill(bill.bill_id, close)
                    }
                  >
                    Delete Bill
                  </button>
                </div>
              )}
            </Popup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default UsageList;
