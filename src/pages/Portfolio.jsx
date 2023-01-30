import React from "react";
// import Slider from "react-slick";
import { Helmet } from "react-helmet";
import "../styles/portfolio.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const portfolioData = [
    {
      name: "Mr Racing",
      desc: "Provided a platform for a rising company",
      img: "MrRacing.png",
      tech: ["Angular", "Ionic", "Sass"],
      link: null,
    },
    {
      name: "Buggie Garages",
      desc: " A new emerging start up that is building a network of garages for easy access to the garages around and we contributed in their growing cause.",
      img: "BuggieGarages.png",
      tech: ["Angular", "Sass", "PHP"],
      link: "https://buggiegarages.com/",
    },
    {
      name: "The VFX Company",
      desc: "  A startup that helps creating 3d animations and we helped them showcase their work and give them a boost.",
      img: "TheVFXCompanyV2.png",
      tech: ["Angular", "Tailwind", "Firebase"],
      link: "https://www.thevfxcompany.in/",
    },
    // {
    //   name: "Shreeji Cure Clinic",
    //   desc: "Helped spreading the reach of a medical clinic and spreading information via digital medium.",
    //   img: "ShreejiCureClinic.png",
    //   tech: ['Angular','Tailwind'],
    //   link: 'https://shreejicureclinic.com/#/home'
    // },
  ];
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="portfolio-content">
      <Helmet>
        <title>Portfolio - Axire</title>
        <meta name="title" content="Portfolio"></meta>
        <meta
          name="description"
          content="Here are some samples of our work, we are working hard to make it stronger."
        ></meta>
      </Helmet>
      <div className="center-div">
        <div className="portfolio-area">
          <h1 className="portfolio-heading">Our Portfolio</h1>
          <p className="portfolio-desc">
            Here are some of our top projects! You can be next in our gallery.
          </p>
          <div className="portfolio-card-flex">
            {portfolioData.map((project, index) => (
              <div className="portfolio-card" key={index}>
                <a
                  href={project.link}
                  target={project.link ?? "_blank"}
                  rel="noreferrer"
                >
                  <img src={"projects/" + project.img} alt="ProjectImage"></img>
                </a>
                <h3 className="portfolio-project">{project.name}</h3>
                {project["tech"].map((tech, i) => {
                  return (
                    <p className="portfolio-tech" key={i}>
                      {tech}
                    </p>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="portfolio-slider">
          <Slider {...settings}>
            {portfolioData.map((project, index) => (
              <div className="portfolio-card" key={index}>
                <div className="portfolio-card-child">
                  <div className="portfolio-card-left">
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
                  </div>
                  <div className="portfolio-card-right">
                    <div className="project-thumbnail">
                      <div className="project-img-container">
                        <img
                          className="img-relative-0"
                          src={"projects/" + project.img}
                          alt="PorfolioImg"
                        />
                        <img
                          className="img-relative-1 "
                          src={"projects/" + project.img}
                          alt="PorfolioImg"
                        />
                        <img
                          className="img-relative-2"
                          src={"projects/" + project.img}
                          alt="PorfolioImg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div> */}
    </div>
  );
};

export default Portfolio;
