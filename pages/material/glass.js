import React from "react";
import { intro } from "../../data/intro";
import { touch } from "../../data/touch";
import Header from "../../components/sharing-components/header";
import Intro from "../../components/sharing-components/intro";
import ClearGlass from "../../components/material/clear";
import DiffuseGlass from "../../components/material/diffuse";
import GetInTouch from "../../components/sharing-components/get-in-touch";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";

const Glass = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro props={intro.material.glass} />
      <ClearGlass />
      <DiffuseGlass />
      <GetInTouch props={touch.material.glass} />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default Glass;
