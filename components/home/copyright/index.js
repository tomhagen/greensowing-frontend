import "./index.scss";
import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <React.Fragment>
      <div className="copyright">
        <div className="copyright_container">
          <p className="copyright_container_content">
            Copyright © 2019 by <span>MRS Greenhouse</span> . All rights
            reserved.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Copyright;
