import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const IrrigationSystem = () => {
  return (
    <React.Fragment>
      <div className="irrigation">
        <div className="irrigation_container">
          <div className="irrigation_top">
            <ReactWOW animation="fadeInUp" duration="1s">
              <div className="irrigation_top_title">Irrigation systems</div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" duration="1s" delay="0.5s">
              <div className="irrigation_top_subcontent">
                Market invigorate a awesome handcrafted bigger comes newer
                recommended lifetime. Odor to yummy high racy bonus soaking
                mouthwatering. Evulates vast a real proven works discount secure
                care bigger comes newer
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
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum
                    </div>
                  </div>
                </div>
                <div className="overlay"></div>
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
                      Being suitable for many types of plant web page editors
                      now use Lorem Ipsum
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
                      It is a long established fact that a reader will be
                      distracted by the readable content
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
                      Warning when the figures do not meet MRS standards editors
                      now use Lorem Ipsum
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
                      Designed upon customer’s request and web page editors now
                      use Lorem Ipsum
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
