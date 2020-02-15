import "./index.scss";
import React from "react";

const ProfileEmbeded = () => {
  return (
    <React.Fragment>
      <div className="profile">
        <div className="profile_container">
          {/* <h2 className="proflie_title">MRS Agreso Profile</h2> */}
          <div className="profile_description">
            <div className="profile_description_container">
              <iframe
                src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fv7nykp1w"
                width="100%"
                height="200"
                seamless="seamless"
                scrolling="no"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileEmbeded;
