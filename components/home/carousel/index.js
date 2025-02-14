import React, { Component } from "react";
import "./index.scss";
import Slider from "react-slick";
import ReactWOW from "react-wow";

const HomeCarousel = ({ homeData }) => {
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
                  <ReactWOW animation="fadeInUp" duration="1s">
                    <div className="slick-list-item-title">
                      {homeData.carousel_title1}
                    </div>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" duration="1s" delay="0.5s">
                    <div className="slick-list-item-subtitle-container">
                      <div className="slick-list-item-subtitle">
                        {homeData.carousel_subtitle1}
                      </div>
                    </div>
                  </ReactWOW>
                </div>
              </div>
              <img src="/static/images/home_bg_01.jpg" alt="" />
              <div className="overlay"></div>
              <div className="overlay2"></div>
            </div>
            <div className="slick-list-item">
              <div className="slick-list-item-container">
                <div className="slick-list-item-container-center">
                  <ReactWOW animation="fadeInUp" duration="1s" delay="0.5s">
                    <div className="slick-list-item-title">
                      {homeData.carousel_title2}
                    </div>
                  </ReactWOW>

                  <ReactWOW animation="fadeInUp" duration="1s" delay="0.5s">
                    <div className="slick-list-item-subtitle-container">
                      <div className="slick-list-item-subtitle">
                        {homeData.carousel_subtitle2}
                      </div>
                    </div>
                  </ReactWOW>
                </div>
              </div>
              <img src="/static/images/project_bg_05.jpg" alt="" />
              <div className="overlay"></div>
              <div className="overlay2"></div>
            </div>
            <div className="slick-list-item">
              <div className="slick-list-item-container">
                <div className="slick-list-item-container-center">
                  <div className="slick-list-item-title">
                    {homeData.carousel_title3}
                  </div>
                  <div className="slick-list-item-subtitle-container">
                    <div className="slick-list-item-subtitle">
                      {homeData.carousel_subtitle3}
                    </div>
                  </div>
                </div>
              </div>
              <img src="/static/images/tourist_bg_01.jpg" alt="" />
              <div className="overlay"></div>
              <div className="overlay2"></div>
            </div>
            <div className="slick-list-item">
              <div className="slick-list-item-container">
                <div className="slick-list-item-container-center">
                  <div className="slick-list-item-title">
                    {homeData.carousel_title4}
                  </div>
                  <div className="slick-list-item-subtitle-container">
                    <div className="slick-list-item-subtitle">
                      {homeData.carousel_subtitle4}
                    </div>
                  </div>
                </div>
              </div>
              <img src="/static/images/tourist_bg_02.jpg" alt="" />
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
