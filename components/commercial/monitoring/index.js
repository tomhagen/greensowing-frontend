import "./index.scss";
import React from "react";

const MonitoringSystem = () => {
  return (
    <React.Fragment>
      <div className="monitoring">
        <div className="monitoring_container">
          <div className="monitoring_left">
            <div className="monitoring_left_box">
              <div className="monitoring_left_box_title">
                Monitoring and controlling system
              </div>
              <div className="monitoring_left_box_content">
                Glass offers greater light transmission than any other of the
                most commonly used glazings. Insulated glass offers about the
                same insulating value as double-layer, air-inflated poly
                plastic.
              </div>
              <div className="monitoring_left_box_subcontent">
                And by any measure, glass offers a far longer service life than
                any other type of greenhouse glazing material. A glass
                greenhouse can potentially offer decades of service. No other
                glazing material can match glass in terms of potential service
                life.  
              </div>
              <div className="monitoring_left_box_subtitle">
                Criterias to select glass
              </div>
              <div className="monitoring_left_box_subcontent">
                - Light-transmitting ability: definition, percentage,…
                <br />
                -Haze: 50%, 70%, 80%,… subject to requirement
                <br /> - Thickness: 4mm, 5mm,…
                <br /> - Diffusion ability
              </div>
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
