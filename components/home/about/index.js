import React from "react";
import "./index.scss";
import ReactWOW from "react-wow";
import renderHTML from "react-render-html";

const About = ({ homeData }) => {
  return (
    <React.Fragment>
      <div className="about">
        <div className="about_container">
          <div className="about_box">
            <div className="about_box_left">
              <ReactWOW animation="slideInLeft" duration="1.5s">
                <img
                  className="about_box_left_image_top"
                  src="/static/images/home_page2_01_v2.jpg"
                />
              </ReactWOW>

              <ReactWOW animation="fadeIn" duration="1.5s">
                <img
                  className="about_box_left_image_bottom"
                  src="/static/images/home_page2_02.png"
                />
              </ReactWOW>
              <div className="about_box_left_image_frame"></div>
            </div>
            <div className="about_box_right">
              <ReactWOW animation="fadeInUp" duration="1s">
                <div className="about_box_right_introduction">
                  about mrs agreso
                </div>
              </ReactWOW>

              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="about_box_right_title">
                  We are right place <span>to build your farm</span>
                </div>
              </ReactWOW>

              <div className="about_box_right_text_behind">green house</div>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="about_box_right_content">
                  {homeData.about_content}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="about_box_right_sub_content">
                  {homeData.about_subcontent && renderHTML(homeData.about_subcontent)}
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
