import React from "react";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <img className="logo" src="logo.png" alt="" />
      <div className="content">
        <div className="flex-center">
          <div className="heading-content">
            <div className="heading">
              <p>Meet Axire.</p>
              <p>The Agency that builds digital solutions for your business.</p>
            </div>
            <div className="sub-heading">
              Give your business a digital boost by by partnering with Axire{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
