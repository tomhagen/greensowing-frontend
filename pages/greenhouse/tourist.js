import React from "react";
import { intro } from "../../data/intro";
import { touch } from "../../data/touch";
import Header from "../../components/sharing-components/header";
import Intro from "../../components/sharing-components/intro";
import Unique from "../../components/tourist/unique";
import Creative from "../../components/tourist/creative";
import OptionalFunction from "../../components/tourist/function";
import GetInTouch from "../../components/sharing-components/get-in-touch";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";

const Tourist = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro props={intro.greenhouse.tourist} />
      <Unique />
      <Creative />
      <OptionalFunction />
      <GetInTouch props={touch.greenhouse.tourist} />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default Tourist;
