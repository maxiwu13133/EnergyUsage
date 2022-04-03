import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './Settings.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, updateUser } from '../../components/counter/counterSlice';

const Settings = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  return (
    <div id='settings-container'>
      <div id='settings-bg'>
        <div id='settings-card'>

          <Formik
            onSubmit={(values) => {
              // const xhttp = new XMLHttpRequest();

              // let params = {
              //   username: user.username,
              //   password: values.password
              // };
              // console.log(values.username);
              // console.log(values.password);
              // // if (values.password !== "") {
              // xhttp.open(
              //   'PUT',
              //   'http://mincasa.khademsam.com/API/v1/settings/password',
              //   true
              // );
              // xhttp.setRequestHeader('Content-type', 'application/JSON');
              // xhttp.send(JSON.stringify(params));
              // xhttp.onreadystatechange = function () {
              //   if (this.readyState === 4 && this.status === 200) {
              //     console.log('before if' + xhttp.readyState);
              //     navigate('/home')
              //   }
              // };
              console.log(user);
            }}
            initialValues={{
              username: '',
              password: ''
            }}
          >
            {({ handleSubmit, values, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Password...'
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
                  Save
                </Button>
                <br />
              </Form>
            )}
          </Formik>

          <br />

          <Popup trigger={<button className="delete-button"> Permanently Delete Account </button>} modal>
              <div className="settings-popup">
                <p className="settings-popup-question">Are you sure? This can not be undone.</p>
                <button className="settings-popup-btn" onClick={() => {

                }}>Delete Account</button>
              </div>

          </Popup>
        </div>
      </div>
    </div>
  );
};

export default Settings;
