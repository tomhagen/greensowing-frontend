import React from "react";
import { intro } from "../../data/intro";
import { touch } from "../../data/touch";
import Head from "next/head";
import Header from "../../components/sharing-components/header";
import Intro from "../../components/sharing-components/intro";
import Unique from "../../components/tourist/unique";
import Creative from "../../components/tourist/creative";
import OptionalFunction from "../../components/tourist/function";
import GetInTouch from "../../components/sharing-components/get-in-touch";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";
import { useState, useEffect } from "react";
import { getData } from "../../controller/tourist";
import { APP_NAME, APP_DESCRIPTION, DOMAIN } from "../../config";

const Tourist = () => {
  const [touristData, setTouristData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    return getData().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setTouristData(data);
      }
    });
  };

  const head = () => {
    return (
      <Head>
        <title>
          Tourist Greenhouse - MRS Agreso - Agriculture Resource Solutions Co.,
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
      <Intro props={intro.greenhouse.tourist} />
      <Unique touristData={touristData} />
      <Creative touristData={touristData} />
      <OptionalFunction touristData={touristData} />
      <GetInTouch props={touch.greenhouse.tourist} />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default Tourist;
