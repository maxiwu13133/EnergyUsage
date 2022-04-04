import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './Admin.css';
import {
  updateRequests,
  selectRequests
} from './components/counter/counterSlice';

const Admin = () => {
  const dispatch = useDispatch();

  let requests = useSelector(selectRequests);
  let authFunc = () => {
    const xhttp = new XMLHttpRequest();
    console.log("authfunc")
    // if (values.password !== "") {
    xhttp.open('POST', 'http://mincasa.khademsam.com/API/v1/admin/', true);
    let creds = { 'username': 'admin', 'password': 'abcd1234' };
    xhttp.setRequestHeader('Content-type', 'application/JSON');
    xhttp.send(JSON.stringify(creds));
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log('before if' + xhttp.readyState);
        console.log(this.response)
        const responseJSON = JSON.parse(this.responseText);
        console.log(responseJSON)
        dispatch(updateRequests(responseJSON));
      }
    };
  };
  useEffect(() => {
    //check local token or something
    authFunc();
  }, []);
  return (
    <React.Fragment>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Method</th>
      <th>Endpoint</th>
      <th>Request Count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/API/v1/admin</td>
      <td>{requests.admin}</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/API/v1/login</td>
      <td>{requests.login}</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/API/v1/signup</td>
      <td>{requests.signup}</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/API/v1/settings/password</td>
      <td>{requests.updatePassword}</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/API/v1/settings/delete/?username=</td>
      <td>{requests.deleteUser}</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/API/v1/usage/bill/?bill_id=</td>
      <td>{requests.deleteBill}</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/API/v1/usage/?username=</td>
      <td>{requests.getUsage}</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/API/v1/usage/bills/?username=</td>
      <td>{requests.getBills}</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/API/v1/usage/addbill</td>
      <td>{requests.addBill}</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/API/v1/user/?username=</td>
      <td>{requests.getUser}</td>
    </tr>
  </tbody>
</Table>
    <div>
      <Link to='/admin'>
        <p id='login-signup-link'>Back to Login</p>
      </Link>
      <br />

      <Link to='/signup'>
        <p id='login-signup-link'>Back to sign up</p>
      </Link>
    </div>
</React.Fragment>
  );
};

export default Admin;
