import "./index.scss";
import Link from "next/link";
import React from "react";
import ReactWOW from "react-wow";

const CoveringMaterial = ({ commercialData }) => {
  return (
    <React.Fragment>
      <div className="covering">
        <div className="covering_container">
          <div className="covering_box">
            <div className="covering_box_left">
              <div className="covering_box_left_img">
                <ReactWOW animation="fadeInLeft" duration="1.5s">
                  <img src="/static/images/commercial_page2_01.png" alt="" />
                </ReactWOW>
              </div>
              <div className="covering_box_left_frame"></div>
            </div>
            <div className="covering_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="covering_box_right_title">
                  {commercialData.covering_title}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="covering_box_right_content">
                  {commercialData.covering_content}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="1s">
                <div className="covering_box_right_subcontent">
                  {commercialData.covering_subcontent1}
                </div>
                <div className="covering_box_right_subtitle">
                  {commercialData.covering_subtitle}
                </div>
                <div
                  className="covering_box_right_subcontent"
                  dangerouslySetInnerHTML={{
                    __html: commercialData.covering_subcontent2
                  }}
                >
                  {/* - Light-transmitting ability: definition, percentage,… <br />-
                  Haze: 50%, 70%, 80%,… subject to requirement <br />-
                  Thickness: 4mm, 5mm,… <br />- Diffusion ability */}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1.5s">
                <div className="covering_box_right_btn">
                  <div className="covering_box_right_btn_box">
                    <Link href="/material/glass">
                      <a>view glasses</a>
                    </Link>
                  </div>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoveringMaterial;
