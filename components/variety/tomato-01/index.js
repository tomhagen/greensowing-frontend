import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Tomato_01 = ({ props }) => {
  return (
    <React.Fragment>
      <div className="tomato_01">
        <div className="tomato_01_container">
          <div className="tomato_01_box">
            <div className="tomato_01_box_left">
              <div className="tomato_01_box_left_img">
                <ReactWOW animation="fadeIn" duration="1.5s">
                  <img src={`${props.img}`} alt="" />
                </ReactWOW>
              </div>
            </div>
            <div className="tomato_01_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div
                  className="tomato_01_box_right_title"
                  dangerouslySetInnerHTML={{ __html: props.title }}
                ></div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div
                  className="tomato_01_box_right_content"
                  dangerouslySetInnerHTML={{ __html: props.content }}
                ></div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div
                  className="tomato_01_box_right_subcontent"
                  dangerouslySetInnerHTML={{ __html: props.subcontent_1 }}
                ></div>
                <div
                  className="tomato_01_box_right_subcontent"
                  dangerouslySetInnerHTML={{ __html: props.subcontent_2 }}
                ></div>
              </ReactWOW>

              {/* <div className="tomato_01_box_right_profile">
                <a
                  href="https://www.flipsnack.com/tomhagen/profile-tomatoes-english-ver.html"
                  target="_blank"
                >
                  MRS Agreso Tomato Profile
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tomato_01;
