import React from "react";
import Head from "next/head";
import Header from "../../components/sharing-components/header";
import NewsIntro from "../../components/news/news-intro";
import MainNews from "../../components/news/news-main";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";
import { useState, useEffect } from "react";
import { listPosts } from "../../controller/post";
import { APP_NAME, APP_DESCRIPTION, DOMAIN } from "../../config";

const News = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    loadNewsListFromEndPoint(0, 12);
  }, []);

  const loadNewsListFromEndPoint = (skip, limit) => {
    return listPosts(skip, limit).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setNewsList(data);
      }
    });
  };
  const head = () => {
    return (
      <Head>
        <title>
          Research - MRS Agreso - Agriculture Resource Solutions Co., Ltd.
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
      <NewsIntro newsList={newsList} />
      <MainNews />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default News;
