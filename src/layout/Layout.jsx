import React from "react";
import Header from "../components/Header";
import "../styles/layout.scss";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <img className="logo" src="logo.png" alt="" />
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
