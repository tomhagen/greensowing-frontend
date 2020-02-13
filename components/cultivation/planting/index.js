import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Planting = () => {
  return (
    <React.Fragment>
      <div className="planting">
        <div className="planting_container">
          <div className="planting_box">
            <ReactWOW animation="fadeInUp" duration="1.5s">
              <div className="planting_box_title">Planting</div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
              <div className="planting_box_subtitle">Seedlings</div>
              <div className="planting_box_subcontent">
                For the two-crop system, seed the fall crop after the mid- dle
                of July in trays, with one seed per cell and allow plants to
                grow for 4 – 5 weeks. It is preferable to have a separate
                propagation house for new seedlings. If seedlings are grown in
                the same greenhouse with mature plants,
              </div>
            </ReactWOW>

            <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
              <div className="planting_box_subtitle">Transplanting</div>
              <div className="planting_box_subcontent">
                Seed the spring crop in late November, transplanting this crop
                soon after the first of January, when transplants are about 6
                weeks old. This means you will have young seedlings at the same
                time you have mature plants.
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Planting;
