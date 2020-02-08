import React from "react";
import CommercialIntro from "../../components/commercial/commercial-intro";
import Header from "../../components/home/header";
import CoveringMaterial from "../../components/commercial/covering";
import Structure from "../../components/commercial/structure";
import Footer from "../../components/home/footer";
import IrrigationSystem from "../../components/commercial/irrigation";
import MonitoringSystem from "../../components/commercial/monitoring";
import Cultivation from "../../components/commercial/cultivation";
import GetInTouch from "../../components/commercial/get-in-touch";
import Copyright from "../../components/home/copyright";
import RegisterButton from "../../components/home/register";

const Commercial = () => {
  return (
    <React.Fragment>
      <Header />
      <CommercialIntro />
      <CoveringMaterial />
      <Structure />
      <IrrigationSystem />
      <MonitoringSystem />
      <Cultivation />
      <GetInTouch />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default Commercial;
