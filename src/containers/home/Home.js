import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <React.Fragment>
      <Stack gap={3}>
        <Button
          variant='primary'
          type='submit'
          className='custom-primary-button'
        >
          <Link to='/usage'>
            <p className='link'>Usage</p>
          </Link>
        </Button>
        <Button
          variant='primary'
          type='submit'
          className='custom-primary-button'
        >
          <Link to='/add-bill'>
            <p className='link'>Add Bill</p>
          </Link>
        </Button>
        <Button
          variant='primary'
          type='submit'
          className='custom-primary-button'
        >
          <Link to='/achievements'>
            <p className='link'>Achievements</p>
          </Link>
        </Button>
        <Button
          variant='primary'
          type='submit'
          className='custom-primary-button'
        >
          <Link to='/settings'>
            <p className='link'>Settings</p>
          </Link>
        </Button>
      </Stack>
    </React.Fragment>
  );
};

export default Home;
