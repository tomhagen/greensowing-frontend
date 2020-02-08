import "./index.scss";
import Link from "next/link";
import React from "react";

const Structure = () => {
  return (
    <React.Fragment>
      <div className="structure">
        <div className="structure_container">
          <div className="structure_box">
            <div className="structure_box_title">Structure</div>
            <div className="structure_box_content">
              With a wide range of standard sizes, MRS is able to design to fit
              your needs.
            </div>
            <div className="structure_box_subcontent">
              This structure is designed for rigid coverings or corrugated metal
              coverings, and it accommodates single or double-roof motorized
              vents.
            </div>
            <div className="structure_box_subtitle">MRS Standard</div>
            <div className="structure_box_subcontent">
              Length, width, height
            </div>
            <div className="structure_box_subtitle">MRS Standard</div>
            <div className="structure_box_subcontent">
              Main Girders: Square steel tube 120, coating …, thickness…, Sub
              beams: Square steel tube 120, coating …, thickness…, Aluminum
              profiles: designed according to MRS typical standard Learn more
              about aluminum profiles, click here
            </div>
            <div className="structure_box_btn">
              <div className="structure_box_btn_box">
                <Link href="#">
                  <a>view materials</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Structure;
