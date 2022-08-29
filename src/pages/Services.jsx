import React from "react";
import "../styles/services.scss";

const Services = () => {
  const services = [
    {
      name: "Web Development",
      desc: "We work through variety of technologies like React.js, Angular.js, Node.js, PHP, etc. Based on your requirements we work through the best technology suitable for your project.",
    },
    {
      name: "App Development",
      desc: "People find applications as comfy options for their relative business or as a pocket friendly management asset that keeps you updated every moment.",
    },
    {
      name: "UI/UX Design",
      desc: "Designing is crucial part of any model, prototype or even of a proper platform as well. We are ready to present you with some aesthetic designs at your convenience.",
    },
  ];
  return (
    <div className="service-container">
      <video className="bg-video-services" autoPlay muted loop>
        <source src="animations/TubeC.mp4"></source>
      </video>
      <div className="center-div">
        <div className="service-content">
          <h1>Our Services</h1>
          <p>
          We work diligently to make your objectives meaningful. Here’s some of the top services we provide, but we are not limited to this. If you require any IT related solution we are here to help and you are just single step away from your goal. 
          </p>
        </div>
        <div className="service-cards">
          {services.map((service) => (
            <div className="service-card">
              <h1>{service.name}</h1>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
