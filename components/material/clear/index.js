import "./index.scss";
import React from "react";
import Link from "next/link";
import ReactWOW from "react-wow";

const ClearGlass = () => {
  return (
    <React.Fragment>
      <div className="clear">
        <div className="clear_container">
          <div className="clear_box">
            <div className="clear_box_left">
              <div className="clear_box_left_img">
                <ReactWOW animation="fadeIn" duration="2s">
                  <img src="/static/images/material_bg_02.png" alt="" />
                </ReactWOW>
              </div>
            </div>
            <div className="clear_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="clear_box_right_title">Clear float glass</div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="clear_box_right_content">
                  Tomaccio TM is a result of 12 years breeding work based on
                  wild Peruvian tomato species.
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="clear_box_right_subcontent">
                  The outcome is healthy, deliciously sweet fruits.?These
                  extremely sweet fruits can be consumed fresh or
                  dried.?Tomaccio TM plant is a robust grower and sets fruit
                  early.
                </div>

                <div className="clear_box_right_subcontent">
                  Growing temperature: 14-17ºC (56-62F) at night, 23-30ºC
                  (73-86F) at day.Watering: 3-4 times a week.Growth habit:
                  Trellising <br />
                  Plant height: 150cm <br />
                  Planting time: all year <br /> Fertilization: Use a 6 months
                  slow release fertilizer with NPK ratio of 3:2:2. <br />
                  Other varieties: Santorini,…
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClearGlass;
