import React from "react";
import { Helmet } from "react-helmet";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="content">
      <Helmet>
          <title>Axire</title>
          <meta name="title" content="Home"></meta>
          <meta name="description" content="Welcome to home of Axire, let's create a lifetime unbroken bond."></meta>
      </Helmet>
      <video className="bg-video" autoPlay muted loop>
        <source src="animations/EmitterC.mp4"></source>
      </video>
      <div className="flex-center">
        <div className="heading-content">
          <div className="heading">
            <p className="main-head">Namaste from AXIRE</p>
            <p>
              The place that provides digital solutions to your requirements.
            </p>
          </div>
          <div className="sub-heading">
            <p>Want a business with us? Just AXIRE it</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
