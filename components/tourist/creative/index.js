import "./index.scss";
import React from "react";
import Link from "next/link";
import ReactWOW from "react-wow";

const Creative = () => {
  return (
    <React.Fragment>
      <div className="creative">
        <div className="creative_container">
          <div className="creative_box">
            <ReactWOW animation="fadeInUp" duration="1.5s">
              <div className="creative_box_title">
                Creative Architect and perspiciatis unde omnis iste natus error
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
              <div className="creative_box_content">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
              <div className="creative_box_subcontent">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Creative;
