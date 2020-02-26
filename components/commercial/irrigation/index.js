import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const IrrigationSystem = ({ commercialData }) => {
  return (
    <React.Fragment>
      <div className="irrigation">
        <div className="irrigation_container">
          <div className="irrigation_top">
            <ReactWOW animation="fadeInUp" duration="1s">
              <div className="irrigation_top_title">
                {commercialData.irrigation_title}
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" duration="1s" delay="0.5s">
              <div className="irrigation_top_subcontent">
                {commercialData.irrigation_subcontent}
              </div>
            </ReactWOW>
          </div>
          <div className="irrigation_bottom">
            <ReactWOW animation="fadeIn" duration="1.5s">
              <div className="irrigation_bottom_item item_one">
                <div className="irrigation_bottom_item_container">
                  <div className="irrigation_bottom_item_box">
                    <div className="irrigation_bottom_item_icon">
                      <img src="/static/images/commercial_icon1.png" alt="" />
                    </div>
                    <div className="irrigation_bottom_item_title">
                      Labor restriction
                    </div>
                    <div className="irrigation_bottom_item_subcontent">
                      {commercialData.irrigation_item_subcontent1}
                    </div>
                  </div>
                </div>
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="1.5s" delay="0.5s">
              <div className="irrigation_bottom_item item_two">
                <div className="irrigation_bottom_item_container">
                  <div className="irrigation_bottom_item_box">
                    <div className="irrigation_bottom_item_icon">
                      <img src="/static/images/commercial_icon2.png" alt="" />
                    </div>
                    <div className="irrigation_bottom_item_title">
                      High adaptability
                    </div>
                    <div className="irrigation_bottom_item_subcontent">
                      {commercialData.irrigation_item_subcontent2}
                    </div>
                  </div>
                </div>
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
              <div className="irrigation_bottom_item item_three">
                <div className="irrigation_bottom_item_container">
                  <div className="irrigation_bottom_item_box">
                    <div className="irrigation_bottom_item_icon">
                      <img src="/static/images/commercial_icon3.png" alt="" />
                    </div>
                    <div className="irrigation_bottom_item_title">
                      Good regulation
                    </div>
                    <div className="irrigation_bottom_item_subcontent">
                      {commercialData.irrigation_item_subcontent3}
                    </div>
                  </div>
                </div>
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="1.5s" delay="1.5s">
              <div className="irrigation_bottom_item item_four">
                <div className="irrigation_bottom_item_container">
                  <div className="irrigation_bottom_item_box">
                    <div className="irrigation_bottom_item_icon">
                      <img src="/static/images/commercial_icon4.png" alt="" />
                    </div>
                    <div className="irrigation_bottom_item_title">
                      Flexible design
                    </div>
                    <div className="irrigation_bottom_item_subcontent">
                      {commercialData.irrigation_item_subcontent4}
                    </div>
                  </div>
                </div>
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="1.5s" delay="2s">
              <div className="irrigation_bottom_item item_five">
                <div className="irrigation_bottom_item_container">
                  <div className="irrigation_bottom_item_box">
                    <div className="irrigation_bottom_item_icon">
                      <img src="/static/images/commercial_icon5.png" alt="" />
                    </div>
                    <div className="irrigation_bottom_item_title">
                      Labor restriction
                    </div>
                    <div className="irrigation_bottom_item_subcontent">
                      {commercialData.irrigation_item_subcontent5}
                    </div>
                  </div>
                </div>
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IrrigationSystem;
