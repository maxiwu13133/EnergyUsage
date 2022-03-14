import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementAsync, selectCount, selectCountLogin, selectCountSignup, incrementLogin
} from './components/counter/counterSlice';
import styles from './components/counter/Counter.module.css';

const Admin = () => {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
  
  let countLogin = useSelector(selectCountLogin);
  let countSignup = useSelector(selectCountSignup);
  console.log(countLogin)
  return (
    <div>
      <p>Login request: {countLogin}</p>
      <button onClick={() => dispatch(incrementLogin())}>hello</button>
      <p>Signup requests: {countSignup}</p>
    </div>
  );
};

export default Admin;
