import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const DiffuseGlass = () => {
  return (
    <React.Fragment>
      <div className="diffuse">
        <div className="diffuse_container">
          <div className="diffuse_box">
            <div className="diffuse_box_left">
              <div className="diffuse_box_left_img">
                <ReactWOW animation="fadeIn" duration="2s">
                  <img src="/static/images/material_bg_03_v2.jpg" alt="" />
                </ReactWOW>
              </div>
              <div className="diffuse_box_left_frame"></div>
            </div>
            <div className="diffuse_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="diffuse_box_right_title">Diffuse glass</div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="diffuse_box_right_content">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="diffuse_box_right_subcontent">
                  - Thickness: 2mm, 2.5mm, 2.8mm, 3.2mm, 4mm, 5mm, 6mm, 8mm,….{" "}
                  <br />- Size: 1830x2134mm, 1830x2440mm, 1650x2134mm,
                  1650x2440mm, … <br />- Subject to customer’s requirements{" "}
                  <br />
                  - Edge working: just cutting, round edge/C-edge, F-edge,
                  polished edge, seamed edge <br />- Tempered glass <br />-
                  Application: Residental greenhouse, commercial greenhouse 
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DiffuseGlass;
