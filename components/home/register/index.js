import "./index.scss";
import React from "react";
import Link from "next/link";

const RegisterButton = () => {
  return (
    <React.Fragment>
      <div className="register">
        <div className="register_container">
          <div className="register_box">
            <Link href="#">
              <a>register to visit farm</a>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterButton;
