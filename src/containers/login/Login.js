import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { incrementLogin } from '../../components/counter/counterSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div id='login-container'>
      <div id='login-bg'>
        <div id='login-card'>
          <Formik
            onSubmit={(values) => {
              const xhttp = new XMLHttpRequest();

              let params = {
                username: values.username,
                password: values.password
              };
              console.log(values.username);
              console.log(values.password);
              // if (values.password !== "") {
              xhttp.open(
                'POST',
                'http://mincasa.khademsam.com/API/v1/login/',
                true
              );
              xhttp.setRequestHeader('Content-type', 'application/JSON');
              xhttp.send(JSON.stringify(params));
              xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                  console.log('before if' + xhttp.readyState);
                  dispatch(incrementLogin()) && navigate('/admin/admin');
                }
              };
            }}
            initialValues={{
              username: '',
              password: ''
            }}
          >
            {({ handleSubmit, values, handleChange }) => (
              <Form onSubmit={handleSubmit}>
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
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
