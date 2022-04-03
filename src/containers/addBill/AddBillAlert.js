import React from 'react';
import { Toast } from 'react-bootstrap';

const AddBillAlert = ({ show, toggleShowA }) => {
  return (
    <React.Fragment>
      <Toast show={show} delay={2000} onClose={toggleShowA}>
        <Toast.Header>
          <strong className='me-auto'>MinCasa</strong>
        </Toast.Header>
        <Toast.Body>Bill Upload Success!</Toast.Body>
      </Toast>
    </React.Fragment>
  );
};

export default AddBillAlert;
