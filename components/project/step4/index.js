import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Step4 = ({ projectData }) => {
  return (
    <React.Fragment>
      <div className="step4">
        <div className="step4_container">
          <div className="step4_box">
            <ReactWOW animation="fadeInUp" duration="1.5s">
              <div className="step4_box_title">{projectData.step4_title}</div>
            </ReactWOW>

            <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
              <div
                className="step4_box_subcontent"
                dangerouslySetInnerHTML={{
                  __html: projectData.step4_subcontent
                }}
              ></div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Step4;
