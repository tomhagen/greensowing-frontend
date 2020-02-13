import React from "react";
import { intro } from "../../data/intro";
import { touch } from "../../data/touch";
import Header from "../../components/sharing-components/header";
import Intro from "../../components/sharing-components/intro";
import CoveringMaterial from "../../components/commercial/covering";
import Structure from "../../components/commercial/structure";
import IrrigationSystem from "../../components/commercial/irrigation";
import MonitoringSystem from "../../components/commercial/monitoring";
import Cultivation from "../../components/commercial/cultivation";
import GetInTouch from "../../components/sharing-components/get-in-touch";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";

const Commercial = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro props={intro.greenhouse.commercial} />
      <CoveringMaterial />
      <Structure />
      <IrrigationSystem />
      <MonitoringSystem />
      <Cultivation />
      <GetInTouch props={touch.greenhouse.commercial} />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default Commercial;
