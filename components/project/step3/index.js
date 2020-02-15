import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Step3 = () => {
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
                  Step 3: Contract signing
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="step3_box_right_content">
                  Contract will be signed by two sides to process the project
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="step3_box_right_subcontent">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
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
