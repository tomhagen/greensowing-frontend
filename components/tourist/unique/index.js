import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Unique = ({ touristData }) => {
  return (
    <React.Fragment>
      <div className="unique">
        <div className="unique_container">
          <div className="unique_box">
            <div className="unique_box_left">
              <div className="unique_box_left_img">
                <ReactWOW animation="fadeInRight" duration="1.5s">
                  <img src="/static/images/tourist_bg_05.png" alt="" />
                </ReactWOW>
              </div>
              <div className="unique_box_left_frame"></div>
            </div>
            <div className="unique_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="unique_box_right_title">
                  {touristData.unique_title}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="unique_box_right_content">
                  {touristData.unique_content}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="unique_box_right_subcontent">
                  {touristData.unique_subcontent}
                </div>
                <div className="unique_box_right_subcontent">
                  To take a trivial example, which of us ever undertakes
                  laborious physical exercise, except to obtain some advantage
                  from it?
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Unique;
