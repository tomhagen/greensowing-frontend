import React from "react";
import "./index.scss";
import ReactWOW from "react-wow";

const About = () => {
  return (
    <React.Fragment>
      <div className="about">
        <div className="about_container">
          <div className="about_box">
            <div className="about_box_left">
              <ReactWOW animation="slideInLeft" duration="2s">
                <img
                  className="about_box_left_image_top"
                  src="/static/images/home_page2_01.png"
                />
              </ReactWOW>

              <ReactWOW animation="fadeIn" duration="2s">
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
                  about mrs greenhouse
                </div>
              </ReactWOW>

              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="about_box_right_title">
                  We are right place <span>to build your farm</span>
                </div>
              </ReactWOW>

              <div className="about_box_right_text_behind">green house</div>
              <ReactWOW animation="fadeInUp" duration="2s">
                <div className="about_box_right_content">
                  Smells racy free announcing than durable zesty smart exotic
                  far feel. Screamin' affordable secret way absolutely.
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="2.5">
                <div className="about_box_right_sub_content">
                  Stimulates vast a real proven works discount secure care.
                  Market invigorate a awesome handcrafted bigger comes newer
                  recommended lifetime. Lorem ipsum dolor sit, consectetur
                  adipiscing elit eiusmod tempor incididunt ut labore et dol
                  magna aliqua.mollit anim laborum.Duis aute iru dolor in re
                  voluptate velit esse cillum dolore eu quifugi nulla pariatur.
                  Excepteur uino sint occaecat cupidatat
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
