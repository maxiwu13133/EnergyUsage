import React from "react";
import HeaderBar from "./HeaderBar";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderBar/>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout;