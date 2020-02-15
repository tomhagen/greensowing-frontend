import React from "react";
import Header from "../../components/sharing-components/header";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import SubstrateComponent from "../../components/material/substrate";

const Accessories = () => {
  return (
    <React.Fragment>
      <Header />
      <SubstrateComponent />
      <Footer />
      <Copyright />
    </React.Fragment>
  );
};

export default Accessories;
