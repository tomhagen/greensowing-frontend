import "./index.scss";
import React from "react";

const DashNavBar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar_container">
          <div className="navbar_search"></div>
          
          <div className="navbar_welcome">
            <p>
              Welcome, <span>Tuyen Tran</span>
            </p>
            <div className="logout">
              <img src="/static/images/logo.png" alt="" />
            </div>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashNavBar;
