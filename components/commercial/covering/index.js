import "./index.scss";
import Link from "next/link";

import React from "react";

const CoveringMaterial = () => {
  return (
    <React.Fragment>
      <div className="covering">
        <div className="covering_container">
          <div className="covering_box">
            <div className="covering_box_left">
              <div className="covering_box_left_img">
                <img src="/static/images/commercial_page2_01.png" alt="" />
              </div>
              <div className="covering_box_left_frame"></div>
            </div>
            <div className="covering_box_right">
              <div className="covering_box_right_title">Covering materials</div>
              <div className="covering_box_right_content">
                Glass offers greater light transmission than any other of the
                most commonly used glazings. Insulated glass offers about the
                same insulating value as double-layer, air-inflated poly
                plastic.
              </div>
              <div className="covering_box_right_subcontent">
                And by any measure, glass offers a far longer service life than
                any other type of greenhouse glazing material. A glass
                greenhouse can potentially offer decades of service. No other
                glazing material can match glass in terms of potential service
                life.  
              </div>
              <div className="covering_box_right_subtitle">
                Criterias to select glass
              </div>
              <div className="covering_box_right_subcontent">
                - Light-transmitting ability: definition, percentage,… <br />-
                Haze: 50%, 70%, 80%,… subject to requirement <br />- Thickness:
                4mm, 5mm,… <br />- Diffusion ability
              </div>
              <div className="covering_box_right_btn">
                <div className="covering_box_right_btn_box">
                  <Link href="#">
                    <a>view glasses</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoveringMaterial;
