import React from "react";
import { intro } from "../../data/intro";
import { touch } from "../../data/touch";
import Head from "next/head";
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
import { useState, useEffect } from "react";
import { getData } from "../../controller/project";
import { APP_NAME, APP_DESCRIPTION, DOMAIN } from "../../config";

const ProjectManagement = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    return getData().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProjectData(data);
      }
    });
  };

  const head = () => {
    return (
      <Head>
        <title>
          Project Management - MRS Agreso - Agriculture Resource Solutions Co.,
          Ltd.
        </title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="cannonical" href={`${DOMAIN}`} />
        <meta property="og:title" content={`${APP_NAME}`} />
        <meta property="og:description" content={`${APP_DESCRIPTION}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${DOMAIN}`} />
        <meta
          property="og:site_name"
          content={`${APP_NAME} - ${APP_DESCRIPTION}`}
        />
        <meta
          property="og:image"
          content={` ${DOMAIN}/static/images/logo_agreso2.png`}
        />
        <meta
          property="og:image:secure_url"
          content={`${DOMAIN}/static/images/logo_agreso2.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="MRS Agreso" />
        <meta name="twitter:description" content={`${APP_DESCRIPTION}`} />
        <meta
          name="twitter:title"
          content={`${APP_NAME} - ${APP_DESCRIPTION}`}
        />
        <link rel="icon" href="/static/images/logo_new.png" />
      </Head>
    );
  };

  return (
    <React.Fragment>
      {head()}
      <Header />
      <Intro props={intro.greenhouse.project} />
      <Step1 projectData={projectData} />
      <Step2 projectData={projectData} />
      <Step3 projectData={projectData} />
      <Step4 projectData={projectData} />
      <Step5 projectData={projectData} />
      <Step6 />
      <GetInTouch props={touch.greenhouse.project} />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default ProjectManagement;
