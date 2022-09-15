import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import "../styles/layout.scss";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <MobileHeader />
      <img className="logo" src="logo.png" alt="" />
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
