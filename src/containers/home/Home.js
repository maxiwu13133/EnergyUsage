import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
          <Stack gap={3}>
          <Button
            variant='primary'
            type='submit'
            className='custom-primary-button'
          >
            <Link to='/signup'>
              <p className='link'>Usage</p>
            </Link>
          </Button>
          <Button
            variant='primary'
            type='submit'
            className='custom-primary-button'
          >
            <Link to='/home/add-bill'>
              <p className='link'>Add Bill</p>
            </Link>
          </Button>
          <Button
            variant='primary'
            type='submit'
            className='custom-primary-button'
          >
            <Link to='/signup'>
              <p className='link'>Achievements</p>
            </Link>
          </Button>
          <Button
            variant='primary'
            type='submit'
            className='custom-primary-button'
          >
            <Link to='/signup'>
              <p className='link'>Settings</p>
            </Link>
          </Button>
          </Stack>
    </>
  );
};

export default Home;
