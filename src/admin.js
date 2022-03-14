import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementAsync, selectCount,
} from './components/counter/counterSlice';
import styles from './components/counter/Counter.module.css';

const Admin = () => {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
  
  const count = useSelector(selectCount);
  return (
    <div>
      <p>Post request: {count}</p>
      <button
        className={styles.asyncButton}
        onClick={() => dispatch(incrementAsync(incrementValue))}
      >
        Add Async
      </button>
    </div>
  );
};

export default Admin;
