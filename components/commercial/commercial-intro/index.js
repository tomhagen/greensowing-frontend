import "./index.scss";
import React from "react";

const CommercialIntro = () => {
  return (
    <React.Fragment>
      <div className="commercial-intro">
        <div className="overlay_container">
          <div className="overlay"></div>
          <div className="overlay2"></div>
        </div>
        <div className="commercial-intro_container">
          <div className="commercial-intro_title">
            MRS Commercial <br />
            <span>Greenhouse</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommercialIntro;
