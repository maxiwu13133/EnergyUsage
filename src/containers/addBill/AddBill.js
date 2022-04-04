import React, { useState } from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddBill = ({user}) => {
  const [ showA, setShowA ] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  // console.log(user)
  return (
    <React.Fragment>
      
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
              toggleShowA();
              setTimeout(() => toggleShowA(), 4000);
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
