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
  return (
    <React.Fragment>
      {head()}
      <Header />
      <HomeCarousel />
      <About />
      <Product />
      <Blog />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default Home;
