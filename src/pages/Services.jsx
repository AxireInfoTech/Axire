import React from "react";
import "../styles/services.scss";

const Services = () => {
  const services = [
    {
      name: "Web Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint com",
    },
    {
      name: "App Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint com",
    },
    {
      name: "UI/UX Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint com",
    },
  ];
  return (
    <div className="service-container">
      <div className="center-div">
        <div className="service-content">
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum
          </p>
        </div>
        <div className="service-cards">
          {services.map((service) => (
            <div className="servuce-card">
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
