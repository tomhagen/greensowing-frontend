import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Step5 = () => {
  return (
    <React.Fragment>
      <div className="step5">
        <div className="step5_container">
          <div className="step5_box">
            <div className="step5_box_left">
              <div className="step5_box_left_img">
                <ReactWOW animation="fadeIn" duration="1.5s">
                  <img src="/static/images/project_bg_08.png" alt="" />
                </ReactWOW>
              </div>
            </div>
            <div className="step5_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="step5_box_right_title">
                  Step 5: Construction
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="0.5s">
                <div className="step5_box_right_subcontent">
                  Anticorrosive treatment on the surface in contact with the
                  columns shoes using tar. <br />
                  Installation of the capitals.
                  <br />
                  Pre-assembly of the arches in the cover, bar culture,
                  pendolones and arms window for subsequent placement (It may be
                  that the assembly of the arch is made on the ground before
                  installation or elements as bars crop or pendolones are
                  assembled a posteriori once the arc is placed).
                  <br /> Placement of the C Profiles (clamping of the plastic
                  film) in the gutters <br />- Structural profiles (arches,
                  pillars, reinforcements) <br />- Profiles fixing enclosures (H
                  profile, C profile) <br />- Derivatives sheets (gutters,
                  angles, shots...) <br />- Profiles fixing enclosures <br />-
                  Profiles fixing enclosures (PVC Clips...) <br />- Mold Filling
                  (brackets and capitals...) <br />- Enclosures (Plastic)
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Step5;
