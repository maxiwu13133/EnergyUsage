import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

const AddBillAlert = () => {
  const [ show, setShow ] = useState(false);
  const toggleShowA = () => setShow(!show);
  // console.log(user)
  return (
    <React.Fragment>
      <Toast show={show} delay={2000} onClose={() => toggleShowA()}>
        <Toast.Header>
          <strong className='me-auto'>MinCasa</strong>
        </Toast.Header>
        <Toast.Body>Bill Upload Success!</Toast.Body>
      </Toast>
    </React.Fragment>
  );
};

export default AddBillAlert;
