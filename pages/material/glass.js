import React from "react";
import { intro } from "../../data/intro";
import { touch } from "../../data/touch";
import Head from "next/head";
import Header from "../../components/sharing-components/header";
import Intro from "../../components/sharing-components/intro";
import ClearGlass from "../../components/material/clear";
import DiffuseGlass from "../../components/material/diffuse";
import GetInTouch from "../../components/sharing-components/get-in-touch";
import SubstrateComponent from "../../components/material/substrate";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";
import {
  APP_NAME,
  APP_DESCRIPTION,
  DOMAIN,
  FACEBOOK_APP_ID
} from "../../config";


const Glass = () => {
  const head = () => {
    return (
      <Head>
        <title>
          Greenhouse Glass - MRS Agreso - Agriculture Resource Solutions Co.,
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
        <meta property="fb:app_id" content={`${FACEBOOK_APP_ID}`} />
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
      {/* <Intro props={intro.material.glass} />
      <ClearGlass />
      <DiffuseGlass />
      <GetInTouch props={touch.material.glass} /> */}
      <SubstrateComponent />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default Glass;
