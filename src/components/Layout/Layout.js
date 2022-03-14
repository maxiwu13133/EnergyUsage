import React, {createContext, useState} from "react";
import PropTypes from "prop-types";
import HeaderBar from "./HeaderBar";

// UserContext
export const UserContext = createContext();

const Layout = ({ children }) => {
  // const [user, setUser] = useState(initialState.user);
  return (
    // <UserContext.Provider
    <>
      {
      window.location.pathname !== "/" &&
      window.location.pathname !== "/signup" ? 
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