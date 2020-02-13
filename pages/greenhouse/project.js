import React from "react";
import { intro } from "../../data/intro";
import { touch } from "../../data/touch";
import Header from "../../components/sharing-components/header";
import Intro from "../../components/sharing-components/intro";
import Step1 from "../../components/project/step-1";
import Step2 from "../../components/project/step2";
import Step3 from "../../components/project/step3";
import Step4 from "../../components/project/step4";
import Step5 from "../../components/project/step5";
import Step6 from "../../components/project/step6";
import GetInTouch from "../../components/sharing-components/get-in-touch";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";

const ProjectManagement = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro props={intro.greenhouse.project} />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <GetInTouch props={touch.greenhouse.project} />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default ProjectManagement;
