import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { updateUser } from '../../components/counter/counterSlice';
import './SignUp.css';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
          <Formik
            onSubmit={(values) => {
              const xhttp = new XMLHttpRequest();

              let params = {
                username: values.username,
                password: values.password
              };
              xhttp.open(
                'POST',
                'http://mincasa.khademsam.com/API/v1/signup/',
                true
              );
              xhttp.setRequestHeader('Content-type', 'application/JSON');
              xhttp.send(JSON.stringify(params));
              xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                  console.log('before if' + xhttp.readyState);
                  dispatch(updateUser(params)) && navigate('/home')
                  // "admin" === params.username ? navigate('/admin/admin') : navigate('/home')
                }
              };
            }}
            initialValues={{
              firstname: '',
              lastname: '',
              username: '',
              password: ''
            }}
          >
            {({values, handleChange}) => 
            (<Form>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='First Name'
                  name='firstname'
                  value={values.firstname}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Lastname'
                  name='lastname'
                  value={values.lastname}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Username'
                  name='username'
                  value={values.username}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Password'
                  name='password'
                  value={values.password}
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
                Sign Up
              </Button>
              <br />

              <Link to='/'>
                <p id='login-signup-link'>Back to Login</p>
              </Link>
            </Form>)
            }
          </Formik>
        </>
  );
};

export default SignUp;
