import "./index.scss";
import React from "react";
import ReactWOW from "react-wow";

const Unique = () => {
  return (
    <React.Fragment>
      <div className="unique">
        <div className="unique_container">
          <div className="unique_box">
            <div className="unique_box_left">
              <div className="unique_box_left_img">
                <ReactWOW animation="fadeInRight" duration="1.5s">
                  <img src="/static/images/tourist_bg_05.png" alt="" />
                </ReactWOW>
              </div>
              <div className="unique_box_left_frame"></div>
            </div>
            <div className="unique_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="unique_box_right_title">
                  We create your unique greenhouse
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="unique_box_right_content">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="unique_box_right_subcontent">
                  That they cannot foresee the pain and trouble that are bound
                  to ensue; and equal blame belongs to those who fail in their
                  duty through weakness of will, which is the same as saying
                  through shrinking from toil and pain. These cases are
                  perfectly simple and easy to distinguish. In a free hour, when
                  our power of choice is untrammelled and when nothing prevents
                  our being able to do what we like best, every pleasure is to
                  be welcomed and every pain avoided. But in certain
                  circumstances and owing to the claims of duty or the
                  obligations of business it will frequently occur that
                  pleasures have to be repudiated and annoyances accepted
                </div>
                <div className="unique_box_right_subcontent">
                  To take a trivial example, which of us ever undertakes
                  laborious physical exercise, except to obtain some advantage
                  from it?
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Unique;
