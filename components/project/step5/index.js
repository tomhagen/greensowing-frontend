import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Step5 = ({ projectData }) => {
  return (
    <React.Fragment>
      <div className="step5">
        <div className="step5_container">
          <div className="step5_box">
            <div className="step5_box_left">
              <div className="step5_box_left_img">
                <ReactWOW animation="fadeIn" duration="1.5s">
                  <img src="/static/images/project_bg_08.png" alt="" />
                </ReactWOW>
              </div>
            </div>
            <div className="step5_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="step5_box_right_title">
                  {projectData.step5_title}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="0.5s">
                <div
                  className="step5_box_right_subcontent"
                  dangerouslySetInnerHTML={{
                    __html: projectData.step5_subcontent
                  }}
                ></div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Step5;
