import React from "react";
import Header from "../../components/sharing-components/header";

const Accessories = () => {
  let styles = {
    backgroundImage: `url("/static/images/construction.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "768px"
  };
  return (
    <React.Fragment>
      <Header />
      <div className="accessories" style={styles}></div>
    </React.Fragment>
  );
};

export default Accessories;
