import React from "react";
import { intro } from "../../data/intro";
import { touch } from "../../data/touch";
import { tomato } from "../../data/tomato";
import Header from "../../components/sharing-components/header";
import Intro from "../../components/sharing-components/intro";
import Tomato_01 from "../../components/variety/tomato-01";
import Tomato_02 from "../../components/variety/tomato-02";
import Tomato_03 from "../../components/variety/tomato-03";
import GetInTouch from "../../components/sharing-components/get-in-touch";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";
const Tomato = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro props={intro.variety.tomato} />
      <Tomato_01 props={tomato.heirloom} />
      <Tomato_02 />
      <Tomato_01 props={tomato.salad} />
      <Tomato_03 />
      <Tomato_01 props={tomato.roma} />
      <GetInTouch props={touch.variety.tomato} />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default Tomato;
