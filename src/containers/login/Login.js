import React from "react";
import {Formik}  from 'formik';
import { Form } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <div>
        <Formik
          initialValues={{
            username: "",
            password: "",
        }}>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                // value={values.username}
                // onChange={handleChange}
                required
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                name="password"
                // value={values.username}
                // onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default Login;