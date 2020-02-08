import "./index.scss";
import React from "react";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <React.Fragment>
      <div className="touch">
        <div className="touch_container">
          <div className="touch_title">Get in touch with our products</div>
          <div className="touch_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it
          </div>
          <div className="touch_btn">
            <div className="touch_btn_box">
              <Link href="#">
                <a>order now</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GetInTouch;
