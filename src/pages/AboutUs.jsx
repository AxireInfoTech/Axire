import React from "react";
import "../styles/aboutus.scss"

const AboutUs = () => {
  return (
    <>
      <div className="content">
        <div className="flex-center">
          <div className="content-area">
            <p className="about-head">About Us</p>
            <p className="about-subhead">A virtual environment where technology meets the talent.</p>
            <p className="about-desc">We are a service-based firm who is working hard to provide solutions to your digital problems. Customer satisfaction and maintaining the quality is our priority. Once you Axire it, it’s a never-ending bond that keeps you coming to us.</p>
            <div className="line"></div>
            <div className="icons-flex">
              <img src="icons/angular.svg"></img>
              <img src="icons/react.svg"></img>
              <img src="icons/aws.svg"></img>
              <img src="icons/ionic.svg"></img>
              <img src="icons/python.svg"></img>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutUs;
