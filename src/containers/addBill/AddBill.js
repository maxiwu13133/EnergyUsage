import React, { useState } from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'
import AddBillAlert from './AddBillAlert';
import { render } from '@testing-library/react';
function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

const AddBill = ({user}) => {
  const navigate = useNavigate();
  const [ showA, setShowA ] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  // console.log(user)
  return (
    <React.Fragment>
      
      <AddBillAlert show={showA} toggleShow={toggleShowA} />
      <Formik
        onSubmit={(values) => {
          const xhttp = new XMLHttpRequest();
          console.log(user.username + ' - in addbill');

          let params = {
            username: user.username,
            month: values.month,
            year: values.year,
            amount: values.amount
          };
          console.log('outsidee')
          xhttp.open(
            'POST',
            'http://mincasa.khademsam.com/API/v1/usage/addbill/',
            true
          );
          console.log(params);
          // request = {username: ... , month: ... , year: ... , amount: ... }
          xhttp.setRequestHeader('Content-type', 'application/JSON');
          xhttp.send(JSON.stringify(params));
          xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
              console.log('before if' + xhttp.readyState);
              console.log(params)
              console.log("success")
              render(<AlertDismissibleExample/>);
              toggleShowA();
              setTimeout(() => toggleShowA(), 2000);
              // "admin" === params.username ? navigate('/admin/admin') : navigate('/home')
            }
          };
        }}
        initialValues={{
          month: 0,
          year: 0,
          amount: 0
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type='number'
                placeholder='Bill Amount'
                name='amount'
                value={values.amount}
                onChange={handleChange}
                required
              />
              <Form.Label>Month</Form.Label>
              <Form.Control
                type='number'
                placeholder='Month'
                name='month'
                value={values.month}
                onChange={handleChange}
                required
              />
              <Form.Label>Year</Form.Label>
              <Form.Control
                type='number'
                placeholder='Year'
                name='year'
                value={values.year}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <br />
            <Button
              variant='primary'
              type='submit'
              className='custom-primary-button'
            >
              Submit
            </Button>
            <br />
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default AddBill;