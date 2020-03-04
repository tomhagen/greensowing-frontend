import React from "react";
import { intro } from "../../data/intro";
import { touch } from "../../data/touch";
import { tomato } from "../../data/tomato";
import Head from "next/head";
import Header from "../../components/sharing-components/header";
import Intro from "../../components/sharing-components/intro";
import Tomato_01 from "../../components/variety/tomato-01";
import Tomato_02 from "../../components/variety/tomato-02";
import Tomato_03 from "../../components/variety/tomato-03";
import GetInTouch from "../../components/sharing-components/get-in-touch";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";
import {
  APP_NAME,
  APP_DESCRIPTION,
  DOMAIN,
  FACEBOOK_APP_ID
} from "../../config";

const Tomato = () => {
  const head = () => {
    return (
      <Head>
        <title>
          Variety Tomato - MRS Agreso - Agriculture Resource Solutions Co., Ltd.
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
