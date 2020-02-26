import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Step1 = ({ projectData }) => {
  return (
    <React.Fragment>
      <div className="step1">
        <div className="step1_container">
          <div className="step1_box">
            <div className="step1_box_left">
              <div className="step1_box_left_img">
                <ReactWOW animation="fadeIn" duration="1.5s">
                  <img src="/static/images/project_bg_06.png" alt="" />
                </ReactWOW>
              </div>
            </div>
            <div className="step1_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="step1_box_right_title">
                  {projectData.step1_title}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="step1_box_right_content">
                  {projectData.step1_content}
                </div>
                <div className="step1_box_right_subcontent">
                  {projectData.step1_subcontent}
                </div>
              </ReactWOW>
              <hr />
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="step1_box_right_icon">
                  <div className="step1_box_right_icon_container">
                    <div className="step1_box_right_icon_item">
                      <img src="/static/images/project_icon1.png" alt="" />
                      <p>purpose</p>
                    </div>
                    <div className="step1_box_right_icon_item">
                      <img src="/static/images/project_icon2.png" alt="" />
                      <p>location</p>
                    </div>
                    <div className="step1_box_right_icon_item">
                      <img src="/static/images/project_icon3.png" alt="" />
                      <p>scale</p>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Step1;
