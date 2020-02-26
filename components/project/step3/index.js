import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Step3 = ({ projectData }) => {
  return (
    <React.Fragment>
      <div className="step3">
        <div className="step3_container">
          <div className="step3_box">
            <div className="step3_box_left">
              <div className="step3_box_left_img">
                <ReactWOW animation="fadeIn" duration="1.5s">
                  <img src="/static/images/project_bg_07.png" alt="" />
                </ReactWOW>
              </div>
              <div className="step3_box_left_frame"></div>
            </div>
            <div className="step3_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="step3_box_right_title">
                  {projectData.step3_title}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="step3_box_right_content">
                  {projectData.step3_content}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="step3_box_right_subcontent">
                  {projectData.step3_subcontent}
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Step3;
