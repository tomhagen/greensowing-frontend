import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Step2 = () => {
  return (
    <React.Fragment>
      <div className="step2">
        <div className="step2_container">
          <div className="step2_box">
            <ReactWOW animation="fadeInUp" duration="1.5s">
              <div className="step2_box_title">Step 2: Design</div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
              <div className="step2_box_content">Let us draw your idea.</div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
              <div className="step2_box_subcontent">
                After receiving Customer’s information, design of project will
                be done: <br />- Structure of Greenhouse <br />- System of
                Greenhouse
                <br />- Growing system of Greenhouse
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Step2;
