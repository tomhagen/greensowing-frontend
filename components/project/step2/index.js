import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Step2 = ({ projectData }) => {
  return (
    <React.Fragment>
      <div className="step2">
        <div className="step2_container">
          <div className="step2_box">
            <ReactWOW animation="fadeInUp" duration="1.5s">
              <div className="step2_box_title">{projectData.step2_title}</div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
              <div className="step2_box_content">
                {projectData.step2_content}
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
              <div
                className="step2_box_subcontent"
                dangerouslySetInnerHTML={{
                  __html: projectData.step2_subcontent
                }}
              ></div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Step2;
