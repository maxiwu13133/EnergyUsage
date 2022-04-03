import React from 'react';
import AddBill from './AddBill';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser, updateUser } from '../../components/counter/counterSlice';

const AddBillContainer = () => {

  const user = useSelector(selectUser);
  return (
    <AddBill user={user}/>
  )
}

export default AddBillContainer;
