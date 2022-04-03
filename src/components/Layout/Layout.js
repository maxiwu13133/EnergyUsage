import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from './HeaderBar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div id='login-container'>
      <div id='login-bg'>
        <div id='login-card'>
          {window.location.pathname !== '' ||
          window.location.pathname !== '/' ||
          window.location.pathname !== '/signup' ||
          window.location.pathname !== '/admin' ? (
            <HeaderBar />
          ) : null}
          {/* <div> */}
          <div className='appContent'>
            {children}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
