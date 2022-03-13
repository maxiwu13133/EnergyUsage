import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = (props) => {
  return (
    <div id='login-container'>
      <div id='login-bg'>
        <div id='login-card'>
          <Formik
            onSubmit={
              (values) => {
              // if (values.username === "admin" && values.password === '123abc') {
                props.history.push('/')
              // }
            }}
            initialValues={{
              username: '',
              password: ''
            }}
          >
            {({values, handleChange}) => 
            (<Form>
              <Form.Group>
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
                Login
              </Button>
              <br />

              <Link to='/signup'>
                <p id='login-signup-link'>Create an Account</p>
              </Link>
            </Form>)
            }
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
