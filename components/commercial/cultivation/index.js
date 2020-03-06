import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Cultivation = ({ commercialData }) => {
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
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="cultivation_box_right_title">
                  {commercialData.cultivation_title}
                </div>
              </ReactWOW>

              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div
                  className="cultivation_box_right_content"
                  dangerouslySetInnerHTML={{
                    __html: commercialData.cultivation_content
                  }}
                ></div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div
                  className="cultivation_box_right_subcontent"
                  dangerouslySetInnerHTML={{
                    __html: commercialData.cultivation_subcontent1
                  }}
                ></div>
                <div
                  className="cultivation_box_right_subtitle"
                  dangerouslySetInnerHTML={{
                    __html: commercialData.cultivation_subtitle1
                  }}
                ></div>
                <div
                  className="cultivation_box_right_subcontent"
                  dangerouslySetInnerHTML={{
                    __html: commercialData.cultivation_subcontent2
                  }}
                ></div>
                <div
                  className="cultivation_box_right_subtitle"
                  dangerouslySetInnerHTML={{
                    __html: commercialData.cultivation_subtitle2
                  }}
                ></div>
                <div
                  className="cultivation_box_right_subcontent"
                  dangerouslySetInnerHTML={{
                    __html: commercialData.cultivation_subcontent3
                  }}
                ></div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cultivation;
