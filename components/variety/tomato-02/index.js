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
                <div className="monitoring_left_box_title">Tomato Complice</div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="monitoring_left_box_content"></div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="monitoring_left_box_subcontent"></div>

                <div className="monitoring_left_box_subcontent">
                  Weight: 140 - 150 grams
                  <br />
                  <div>
                    <br />
                  </div>
                  Specification of bunches: 3 - 5 fruit / cluster.
                  <br />
                  <div>
                    <br />
                  </div>
                  Brix degree: 4 - 5
                  <br />
                  <div>
                    <br />
                  </div>
                  Planting time : All seasons, in a high-tech greenhouse
                  environment.
                  <br />
                  <div>
                    <br />
                  </div>
                  Color : Bright red when ripe
                  <br />
                </div>
              </ReactWOW>
              {/* <div className="monitoring_left_box_profile">
                <a
                  href="https://www.flipsnack.com/tomhagen/profile-tomatoes-english-ver.html"
                  target="_blank"
                >
                  MRS Agreso Tomato Profile
                </a>
              </div> */}
            </div>
          </div>
          <div className="monitoring_right">
            <img src="/static/images/variety_bg_03_v2.jpg" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tomato_02;
