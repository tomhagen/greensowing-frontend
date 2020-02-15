import "./index.scss";
import React from "react";
import Link from "next/link";
import ReactWOW from "react-wow";

const GetInTouch = ({ props }) => {
  let styles = {
    backgroundImage: `url(${props.img})`
  };
  return (
    <React.Fragment>
      <div className="touch" style={styles}>
        <div className="touch_container">
          <ReactWOW animation="fadeInUp" duration="1.5s">
            <div className="touch_title">{props.title}</div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
            <div className="touch_content">{props.content}</div>
          </ReactWOW>
          <ReactWOW animation="fadeIn" duration="1.5s" delay="0.5s">
            <div className="touch_btn">
              <div className="touch_btn_box">
                <Link href="#">
                  <a>{props.btn}</a>
                </Link>
              </div>
            </div>
          </ReactWOW>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GetInTouch;
