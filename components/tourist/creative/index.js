import "./index.scss";
import React from "react";
import Link from "next/link";
import ReactWOW from "react-wow";

const Creative = ({ touristData }) => {
  return (
    <React.Fragment>
      <div className="creative">
        <div className="creative_container">
          <div className="creative_box">
            <ReactWOW animation="fadeInUp" duration="1.5s">
              <div className="creative_box_title">
                {touristData.creative_title}
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
              <div
                className="creative_box_content"
                dangerouslySetInnerHTML={{
                  __html: touristData.creative_content
                }}
              ></div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
              <div
                className="creative_box_subcontent"
                dangerouslySetInnerHTML={{
                  __html: touristData.creative_content
                }}
              ></div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Creative;
