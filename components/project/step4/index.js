import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Step4 = () => {
  return (
    <React.Fragment>
      <div className="step4">
        <div className="step4_container">
          <div className="step4_box">
            <ReactWOW animation="fadeInUp" duration="1.5s">
              <div className="step4_box_title">
                Step 4: Fabrication for steel structure
              </div>
            </ReactWOW>

            <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
              <div className="step4_box_subcontent">
                - Structural profiles (arches, pillars, reinforcements) <br />-
                Profiles fixing enclosures (H profile, C profile) <br /> -
                Derivatives sheets (gutters, angles, shots...) <br />- Profiles
                fixing enclosures <br />- Profiles fixing enclosures (PVC
                Clips...) <br />- Mold Filling (brackets and capitals...) <br />
                - Enclosures (Plastic) <br />- Enclosures (Mesh) <br />-
                Electrical panels and automation
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Step4;
