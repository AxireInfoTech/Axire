import React from "react";
import {Helmet} from "react-helmet";
import "../styles/aboutus.scss"

const AboutUs = () => {
  return (
    <>
      <div className="content">
        <Helmet>
          <title>About Us - Axire</title>
          <meta name="title" content="About Us"></meta>
          <meta name="description" content="Tune in now to know more about Axire"></meta>
          <meta name="robots" content="noindex"></meta>
        </Helmet>
        <video className="video-el-1" autoPlay muted loop>
          <source src="animations/MetaBallC.mp4"></source>
        </video>
        <div className="flex-center">
          <div className="content-area">
            <p className="about-head">About Us</p>
            <p className="about-subhead">A virtual environment where technology meets the talent.</p>
            <p className="about-desc">We are a service-based firm who is working hard to provide solutions to your digital problems. Customer satisfaction and maintaining the quality is our priority. Once you Axire it, it’s a never-ending bond that keeps you coming to us.</p>
            <div className="line"></div>
            <div className="icons-flex">
              <img src="icons/angular.svg" alt="AngularIcon"></img>
              <img src="icons/react.svg" alt="ReactIcon"></img>
              <img src="icons/aws.svg" alt="AWSIcon"></img>
              <img src="icons/ionic.svg" alt="IonicIcon"></img>
              <img src="icons/python.svg" alt="PythonIcon"></img>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutUs;
