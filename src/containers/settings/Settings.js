import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './Settings.css'

import { Link, useNavigate } from 'react-router-dom';

const Settings = () => {
  return (
    <div id='settings-container'>
      <div id='settings-bg'>
        <div id='settings-card'>
          {/* <Stack gap={5}>
            <Button className="custom-primary-button">
              <Link to='/signup'>
                <p className='login-signup-link'>Change Name</p>
              </Link>
            </Button>
            <Button className="custom-primary-button">
              <Link to='/signup'>
                <p className='login-signup-link'>Change Password</p>
              </Link>
            </Button>
            <Button className="custom-primary-button">
              <Link to='/signup'>
                <p className='login-signup-link'>Delete Account</p>
              </Link>
            </Button>
          </Stack> */}
          <Formik>
            <Form >
              <Form.Group>
                <Form.Label>New Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='New name'
                  name='Name'
                  // value={values.username}
                  // onChange={handleChange}
                  required
                />
                <br />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='New Password'
                  name='password'
                  // value={values.password}
                  // onChange={handleChange}
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

              {/* Pop-up or create second page for account deletion confirmation */}
              <Link to='/signup'>
                <p id='delete-account-link'>Permanently Delete Account</p>
              </Link>
            </Form>
          </Formik>

        </div>
      </div>
    </div>
  );
};

export default Settings;
