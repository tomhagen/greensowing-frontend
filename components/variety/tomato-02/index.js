import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Tomato_02 = () => {
  return (
    <React.Fragment>
      <div className="monitoring">
        <div className="monitoring_container">
          <div className="monitoring_left">
            <div className="monitoring_left_box">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="monitoring_left_box_title">Tomato Hybrid</div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="monitoring_left_box_content">
                  Tomaccio TM is a result of 12 years breeding work based on
                  wild Peruvian tomato species.
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="monitoring_left_box_subcontent">
                  The outcome is healthy, deliciously sweet fruits.?These
                  extremely sweet fruits can be consumed fresh or
                  dried.?Tomaccio TM plant is a robust grower and sets fruit
                  early.
                </div>

                <div className="monitoring_left_box_subcontent">
                  Growing temperature: 14-17ºC (56-62F) at night, 23-30ºC
                  (73-86F) at day.Watering: 3-4 times a week.Growth habit:
                  Trellising <br />
                  Plant height: 150cm <br />
                  Planting time: all year Fertilization: Use a 6 months slow
                  release fertilizer with NPK ratio of 3:2:2. <br />
                  Other varieties: Santorini,…
                </div>
              </ReactWOW>
            </div>
          </div>
          <div className="monitoring_right">
            <img src="/static/images/variety_bg_03.png" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tomato_02;
