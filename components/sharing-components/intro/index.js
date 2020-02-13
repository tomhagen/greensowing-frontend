import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Intro = ({ props }) => {
  let styles = {
    backgroundImage: `url(${props.img})`
  };
  return (
    <React.Fragment>
      <div className="commercial-intro" style={styles}>
        <div className="overlay_container">
          <div className="overlay"></div>
          <div className="overlay2"></div>
        </div>
        <div className="commercial-intro_container">
          <ReactWOW animation="fadeInUp" duration="1.5s">
            <div className="commercial-intro_title">
              {props.title} <br />
              <span>{props.span}</span>
            </div>
          </ReactWOW>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
