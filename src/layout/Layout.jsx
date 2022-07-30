import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
