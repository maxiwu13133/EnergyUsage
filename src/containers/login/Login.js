import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Login.css';
import { getUser } from '../../components/counter/counterAPI';
import { incrementLogin } from '../../components/counter/counterSlice';
import { useDispatch } from 'react-redux';

const Login = (props) => {
  let dispatch = useDispatch();
  const authFunc = async (username, password) => {
    let nameV = "admin";
    let scoreV = "123abc";
    const xhttp = new XMLHttpRequest();
    

    let params = {username: username, password: password };

    // if (validateScore(scoreV)) {
        xhttp.open('post', "mincasa.ictus.tech/api/login/v1", true);
        xhttp.setRequestHeader("Content-type", "application/JSON");
        xhttp.onreadystatechange = function () {
            if (this.readState === 4 && this.status === 200) {
              return dispatch(incrementLogin)
            }
        // }
        // xhttp.send(JSON.stringify(params));
    }
    // else {
    //     document.getElementById("response").innerHTML = "Score must be an integer"
    // }
// }
  return (
    <div id='login-container'>
      <div id='login-bg'>
        <div id='login-card'>
          <Formik
            onSubmit={
              (values) => {
                
              // if (values.username === "admin" && values.password === '123abc') {
                authFunc(values.username, values.password);
                props.history.push('/admin')
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
