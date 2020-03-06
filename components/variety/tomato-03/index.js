import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Tomato_03 = () => {
  return (
    <React.Fragment>
      <div className="tomato_03">
        <div className="tomato_03_container">
          <div className="tomato_03_box">
            <ReactWOW animation="fadeInUp" duration="1.5s">
              <div className="tomato_03_box_title">Tomato Komeett</div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
              <div className="tomato_03_box_content"></div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
              <div className="tomato_03_box_subcontent"></div>
              <div className="tomato_03_box_subcontent">
                Weight: 150 - 160 grams
                <br />
                <div>
                  <br />
                </div>
                Specification of bunches: 4 - 6 fruit / cluster.
                <br />
                <div>
                  <br />
                </div>
                Brix degree: 4 - 5
                <br />
                <div>
                  <br />
                </div>
                Planting time : All seasons, in a high-tech greenhouse
                environment.
                <br />
                <div>
                  <br />
                </div>
                Color : Bright red when ripe
                <br />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tomato_03;
