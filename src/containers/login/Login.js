import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { updateUser } from '../../components/counter/counterSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <React.Fragment>
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
          // dispatch(updateUser(params)) && (params.username === "admin" ? navigate('/admin/admin') : navigate('/home'));
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
              dispatch(updateUser(params)) &&
                (params.username === 'admin'
                  ? (navigate('/admin/admin'))
                  : navigate('/home'));
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
    </React.Fragment>
  );
};

export default Login;
