import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Cultivation = () => {
  return (
    <React.Fragment>
      <div className="cultivation">
        <div className="cultivation_container">
          <div className="cultivation_box">
            <div className="cultivation_box_left">
              <ReactWOW animation="fadeIn" duration="1.5s">
                <img
                  className="cultivation_box_left_image_top"
                  src="/static/images/commercial_page6_01.png"
                />
              </ReactWOW>

              <ReactWOW animation="fadeIn" duration="1.5s" delay="0.5s">
                <img
                  className="cultivation_box_left_image_bottom"
                  src="/static/images/commercial_page6_02.png"
                />
              </ReactWOW>
              <div className="cultivation_box_left_image_frame"></div>
            </div>
            <div className="cultivation_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s" >
                <div className="cultivation_box_right_title">
                  Greenhouse Cultivation and Pollination
                </div>
              </ReactWOW>

              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="cultivation_box_right_content">
                  With a wide range of standard sizes, MRS is able to design to
                  fit your needs. Due to our design effort, the CS3 is the most
                  flexible greenhouse option on the market today.
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="1s">
                <div className="cultivation_box_right_subcontent">
                  This structure is designed for rigid coverings or corrugated
                  metal coverings, and it accommodates single or double-roof
                  motorized vents. The CS3 also comes with a standard 12-foot
                  truss spacing, so it can easily accommodate walks, trolley
                  systems, rolling benches, doors, fans and evaporative cooling
                  installations.
                </div>
                <div className="cultivation_box_right_subtitle">
                  MRS Standard
                </div>
                <div className="cultivation_box_right_subcontent">
                  - Length, width, height
                </div>
                <div className="cultivation_box_right_subtitle">
                  MRS Standard
                </div>
                <div className="cultivation_box_right_subcontent">
                  - Main Girders: Square steel tube 120, coating …, thickness…,
                  standard….
                  <br />- Sub beams: Square steel tube 120, coating …,
                  thickness…, standard….
                  <br />- Aluminum profiles: designed according to MRS typical
                  standard Learn more about aluminum profiles, click here
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cultivation;
