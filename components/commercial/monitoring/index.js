import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const MonitoringSystem = ({ commercialData }) => {
  return (
    <React.Fragment>
      <div className="monitoring">
        <div className="monitoring_container">
          <div className="monitoring_left">
            <div className="monitoring_left_box">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="monitoring_left_box_title">
                  {commercialData.monitoring_title}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div
                  className="monitoring_left_box_content"
                  dangerouslySetInnerHTML={{
                    __html: commercialData.monitoring_content
                  }}
                ></div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div
                  className="monitoring_left_box_subcontent"
                  dangerouslySetInnerHTML={{
                    __html: commercialData.monitoring_subcontent1
                  }}
                ></div>
                <div
                  className="monitoring_left_box_subtitle"
                  dangerouslySetInnerHTML={{
                    __html: commercialData.monitoring_subtitle
                  }}
                ></div>
                <div
                  className="monitoring_left_box_subcontent"
                  dangerouslySetInnerHTML={{
                    __html: commercialData.monitoring_subcontent2
                  }}
                >
                  {/* - Light-transmitting ability: definition, percentage,…
                  <br />
                  -Haze: 50%, 70%, 80%,… subject to requirement
                  <br /> - Thickness: 4mm, 5mm,…
                  <br /> - Diffusion ability */}
                </div>
              </ReactWOW>
            </div>
          </div>
          <div className="monitoring_right">
            <img src="/static/images/commercial_page5_01.png" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MonitoringSystem;
