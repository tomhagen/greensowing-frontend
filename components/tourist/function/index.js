import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const OptionalFunction = () => {
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
                  More optional functions
                </div>
              </ReactWOW>

              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="functions_box_right_content">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="functions_box_right_subcontent">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae
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
