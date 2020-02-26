import "./index.scss";
import Link from "next/link";
import React from "react";
import ReactWOW from "react-wow";

const Structure = ({ commercialData }) => {
  return (
    <React.Fragment>
      <div className="structure">
        <div className="structure_container">
          <div className="structure_box">
            <ReactWOW animation="fadeInUp" duration="1s">
              <div className="structure_box_title">
                {commercialData.structure_title}
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="2s" delay="0.5s">
              <div className="structure_box_content">
                {commercialData.structure_content}
              </div>
              <div className="structure_box_subcontent">
                {commercialData.structure_subcontent1}
              </div>
              <div className="structure_box_subtitle">
                {commercialData.structure_subtitle1}
              </div>
              <div className="structure_box_subcontent">
                {commercialData.structure_subcontent2}
              </div>
              <div className="structure_box_subtitle">
                {commercialData.structure_subtitle2}
              </div>
              <div className="structure_box_subcontent">
                {commercialData.structure_subcontent3}
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="2s" delay="0.5s">
              <div className="structure_box_btn">
                <div className="structure_box_btn_box">
                  <Link href="/material/glass">
                    <a>view materials</a>
                  </Link>
                </div>
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Structure;
