import React from "react";
import { Helmet } from "react-helmet";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="content">
      <Helmet>
          <title>Axire</title>
          <meta name="title" content="Home"></meta>
          <meta name="description" content="Axire is a Dynamic Web & App Development company that builds you a platform in affirmative Technologies so let's create a lifetime unbreakable bond."></meta>
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
