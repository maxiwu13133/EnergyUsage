import React from 'react';
import { Button } from 'bootstrap';

import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Button>
        <Link to='/signup'>
          <p id='login-signup-link'>Usage</p>
        </Link>
      </Button>
      <Button>
        <Link to='/signup'>
          <p id='login-signup-link'>Add Bill</p>
        </Link>
      </Button>
      <Button>
        <Link to='/signup'>
          <p id='login-signup-link'>Achievements</p>
        </Link>
      </Button>
      <Button>
        <Link to='/signup'>
          <p id='login-signup-link'>Settings</p>
        </Link>
      </Button>
    </div>
  );
};

export default Home;
