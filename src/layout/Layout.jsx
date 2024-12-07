import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import "../styles/layout.scss";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <MobileHeader />
    <Link to={"/"}>
    <img className="logo" src={logo} alt="AxireLogo" />
    </Link>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
