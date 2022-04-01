import React from 'react';
import { Button } from 'react-bootstrap';
import './Achievements.css'

import { Link, useNavigate } from 'react-router-dom';

const Achievements = () => {
  return (
    <div id='achievements-container'>
      <div id='achievements-bg'>
        <div id='achievements-card'>

          <p id="achievements-username">Username</p>

          <div className="achievements-display-box">
            <h5>Energy Points:</h5>
            <p>1923</p>
          </div>

          <div className="achievements-display-box">
            <h5>Badges:</h5>
            <p>first 100, 5 months, energy saver</p>

          </div>

          <div className="achievements-display-box">
            <h5>Titles:</h5>
            <p>beginner, intermediate, pro</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Achievements;
