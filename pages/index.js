import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/sharing-components/header";
import HomeCarousel from "../components/home/carousel";
import About from "../components/home/about";
import Product from "../components/home/product";
import Blog from "../components/home/blog";
import Footer from "../components/sharing-components/footer";
import Copyright from "../components/sharing-components/copyright";
import RegisterButton from "../components/sharing-components/register";
import { useState, useEffect } from "react";
import Loading from "../components/sharing-components/loading";
import { getData } from "../controller/home";

const Home = () => {
  const head = () => {
    return (
      <Head>
        <title>
          Home - MRS Agreso - Agriculture Resource Solutions Co., Ltd.
        </title>
        <link rel="icon" href="/static/images/logo.png" />
      </Head>
    );
  };

  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = () => {
    return getData().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHomeData(data);
      }
    });
  };

  return (
    <React.Fragment>
      {head()}
      <Loading />
      <Header />
      <HomeCarousel homeData={homeData} />
      <About homeData={homeData} />
      <Product homeData={homeData} />
      <Blog />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default Home;
