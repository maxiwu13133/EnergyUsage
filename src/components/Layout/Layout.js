import React from "react";
import PropTypes from "prop-types";
import HeaderBar from "./HeaderBar";

const Layout = ({ children }) => {
  return (
    <>
      {
      window.location.pathname !== "/" &&
      window.location.pathname !== "/sign-up" ? 
      (<HeaderBar/>) : null}
      {/* <div> */}
      <div className="appContent">{children}</div>
      {/* </div> */}
    </>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;