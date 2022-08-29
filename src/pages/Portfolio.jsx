import React from "react";
import Slider from "react-slick";
import "../styles/portfolio.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
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
            <div className="portfolio-card">
              <div className="portfolio-card-left">
                <div className="quates">
                  <h3 className="quate-heading">QUALITY IS OUR BEAUTY</h3>
                  <h1 className="quate-content">We make beautiful things</h1>
                </div>
                <div className="project-details">
                  <h1 className="project-name-heading">Project Name</h1>
                  <h1 className="project-name">
                    NEFA - Cryptocurrency Exchange website
                  </h1>
                  <p className="project-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint com
                  </p>
                </div>
                <button className="explore-button">Explore</button>
              </div>
              <div className="portfolio-card-right">
                <div className="project-thumbnail">
                  <div className="project-img-container">
                    <img
                      className="img-relative-0"
                      src="projects/BuggieGarages.png"
                      alt=""
                    />
                    <img
                      className="img-relative-1 "
                      src="projects/BuggieGarages.png"
                      alt=""
                    />
                    <img
                      className="img-relative-2"
                      src="projects/BuggieGarages.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-card-left">
                <div className="quates">
                  <h3 className="quate-heading">QUALITY IS OUR BEAUTY</h3>
                  <h1 className="quate-content">We make beautiful things</h1>
                </div>
                <div className="project-details">
                  <h1 className="project-name-heading">Project Name</h1>
                  <h1 className="project-name">
                    NEFA - Cryptocurrency Exchange website
                  </h1>
                  <p className="project-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint com
                  </p>
                </div>
                <button className="explore-button">Explore</button>
              </div>
              <div className="portfolio-card-right">
                <div className="project-thumbnail">
                  <div className="project-img-container">
                    <img
                      className="img-relative-0"
                      src="projects/TheVFXCompanyV2.png"
                      alt=""
                    />
                    <img
                      className="img-relative-1 "
                      src="projects/TheVFXCompanyV2.png"
                      alt=""
                    />
                    <img
                      className="img-relative-2"
                      src="projects/TheVFXCompanyV2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="portfolio-card">
              <div className="portfolio-card-left">
                <div className="q">aqwreqwerwr</div>
              </div>
              <div className="portfolio-card-right"></div>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
