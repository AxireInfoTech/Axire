import React from "react";
import Slider from "react-slick";
import "../styles/portfolio.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const portfolioData = [
    {
      name: "Buggie Garages",
      desc: " A new emerging start up that is building a network of garages for easy access to the garages around and we contributed in their growing cause.",
      img: "BuggieGarages.png",
      tech: "Angular,Sass,PHP",
    },
    {
      name: "The VFX Company",
      desc: "  A startup that helps creating 3d animations and we helped them showcase their work and give them a boost.",
      img: "TheVFXCompanyV2.png",
      tech: "Angular,Tailwind,Firebase",
    },
    {
      name: "Shreeji Cure Clinic",
      desc: " A new emerging start up that is building a network of garages for easy access to the garages around and we contributed in their growing cause.",
      img: "ShreejiCureClinic.png",
      tech: "Angular,Tailwind",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="portfolio-content">
      <div className="portfolio-centered">
        <h1 className="portfolio-heading">Our Portfolio</h1>
        <div className="portfolio-slider">
          <Slider {...settings}>
            {portfolioData.map((project, index) => (
              <div className="portfolio-card" key={index}>
                <div className="portfolio-card-child">
                  <div className="portfolio-card-left">
                    {/* <div className="quates">
                  <h3 className="quate-heading">QUALITY IS OUR BEAUTY</h3>
                  <h1 className="quate-content">We make beautiful things</h1>
                </div> */}
                    <div className="project-details">
                      <h1 className="project-name-heading">Project Name</h1>
                      <h1 className="project-name">{project.name}</h1>
                      <p className="project-desc">{project.desc}</p>
                      <p className="project-techs">
                        {project.tech.split(",").length > 0 &&
                          project.tech
                            .split(",")
                            .map((value) => <span>{value}</span>)}
                      </p>
                    </div>
                    {/* <button className="explore-button">Explore</button> */}
                  </div>
                  <div className="portfolio-card-right">
                    <div className="project-thumbnail">
                      <div className="project-img-container">
                        <img
                          className="img-relative-0"
                          src={"projects/" + project.img}
                          alt=""
                        />
                        <img
                          className="img-relative-1 "
                          src={"projects/" + project.img}
                          alt=""
                        />
                        <img
                          className="img-relative-2"
                          src={"projects/" + project.img}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
