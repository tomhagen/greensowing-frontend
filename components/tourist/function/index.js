import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const OptionalFunction = ({ touristData }) => {
  return (
    <React.Fragment>
      <div className="functions">
        <div className="functions_container">
          <div className="functions_box">
            <div className="functions_box_left">
              <ReactWOW animation="fadeInLeft" duration="1.5s">
                <img
                  className="functions_box_left_image_top"
                  src="/static/images/tourist_page4_01.png"
                />
              </ReactWOW>

              <ReactWOW animation="fadeIn" duration="1.5s" delay="0.5s">
                <img
                  className="functions_box_left_image_bottom"
                  src="/static/images/tourist_page4_02.png"
                />
              </ReactWOW>
              <div className="functions_box_left_image_frame"></div>
            </div>
            <div className="functions_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="functions_box_right_title">
                  {touristData.functions_title}
                </div>
              </ReactWOW>

              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="functions_box_right_content">
                  {touristData.functions_content}
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="functions_box_right_subcontent">
                  {touristData.functions_subcontent}
                </div>

                <div className="functions_box_right_subcontent">
                  Non recusandae. Itaque earum rerum hic tenetur a sapiente
                  delectus, ut aut reiciendis voluptatibus maiores alias
                  consequatur aut perferendis doloribus asperiores repellat
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OptionalFunction;
