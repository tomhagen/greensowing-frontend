import React, { Component } from "react";
import "./index.scss";
import Slider from "react-slick";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <React.Fragment>
      <div className="home_carousel">
        <div className="home_carousel_container">
          <Slider {...settings}>
            <div className="slick-list-item">
              <div className="slick-list-item-container">
                <div className="slick-list-item-container-center">
                  <div className="slick-list-item-title">
                    MRS Agriculture Solutions
                  </div>
                  <div className="slick-list-item-subtitle-container">
                    <div className="slick-list-item-subtitle">
                      Many commercial glass greenhouses or hothouses are high
                      tech production facilities for vegetables or flowers. The
                      glass greenhouses are filled with equipment including
                      screening installations, heating, cooling, lighting
                    </div>
                  </div>
                </div>
              </div>
              <img src="/static/images/home_bg_01.jpg" alt="" />
              <div className="overlay"></div>
              <div className="overlay2"></div>
            </div>
            <div className="slick-list-item">
              <div className="slick-list-item-container">
                <div className="slick-list-item-container-center">
                  <div className="slick-list-item-title">
                    MRS Agriculture Solutions
                  </div>
                  <div className="slick-list-item-subtitle-container">
                    <div className="slick-list-item-subtitle">
                      Many commercial glass greenhouses or hothouses are high
                      tech production facilities for vegetables or flowers. The
                      glass greenhouses are filled with equipment including
                      screening installations, heating, cooling, lighting
                    </div>
                  </div>
                </div>
              </div>
              <img src="/static/images/project_bg_05.png" alt="" />
              <div className="overlay"></div>
              <div className="overlay2"></div>
            </div>
            <div className="slick-list-item">
              <div className="slick-list-item-container">
                <div className="slick-list-item-container-center">
                  <div className="slick-list-item-title">
                    MRS Agriculture Solutions
                  </div>
                  <div className="slick-list-item-subtitle-container">
                    <div className="slick-list-item-subtitle">
                      Many commercial glass greenhouses or hothouses are high
                      tech production facilities for vegetables or flowers. The
                      glass greenhouses are filled with equipment including
                      screening installations, heating, cooling, lighting
                    </div>
                  </div>
                </div>
              </div>
              <img src="/static/images/tourist_bg_01.png" alt="" />
              <div className="overlay"></div>
              <div className="overlay2"></div>
            </div>
            <div className="slick-list-item">
              <div className="slick-list-item-container">
                <div className="slick-list-item-container-center">
                  <div className="slick-list-item-title">
                    MRS Agriculture Solutions
                  </div>
                  <div className="slick-list-item-subtitle-container">
                    <div className="slick-list-item-subtitle">
                      Many commercial glass greenhouses or hothouses are high
                      tech production facilities for vegetables or flowers. The
                      glass greenhouses are filled with equipment including
                      screening installations, heating, cooling, lighting
                    </div>
                  </div>
                </div>
              </div>
              <img src="/static/images/tourist_bg_02.png" alt="" />
              <div className="overlay"></div>
              <div className="overlay2"></div>
            </div>
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeCarousel;
