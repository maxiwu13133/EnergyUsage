import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = (props) => {
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

              <Link to='/login'>
                <p id='login-signup-link'>Back to Login</p>
              </Link>
            </Form>)
            }
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
