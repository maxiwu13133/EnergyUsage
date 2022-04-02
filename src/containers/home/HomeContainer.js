import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../components/counter/counterSlice';
import Home from './Home';

const HomeContainer = () => {
  let user = useSelector(selectUser);
  console.log(user);
  return <Home />;
};

export default HomeContainer;
