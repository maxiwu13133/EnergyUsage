import React, { useState } from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser, updateUser } from '../../components/counter/counterSlice';
import AddBillAlert from './AddBillAlert';

const AddBill = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [ showA, setShowA ] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  console.log(user)
  return (
    <React.Fragment>
      {/* <AddBillAlert show={showA}/> */}
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
              // toggleShowA();
              // setTimeout(() => toggleShowA, 2);
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
        {({ values, handleChange }) => (
          <Form>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type='text'
                placeholder='Bill Amount'
                name='amount'
                value={values.amount}
                onChange={handleChange}
                required
              />
              <Form.Label>Month</Form.Label>
              <Form.Control
                type='text'
                placeholder='Month'
                name='month'
                value={values.month}
                onChange={handleChange}
                required
              />
              <Form.Label>Year</Form.Label>
              <Form.Control
                type='text'
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
