import React from "react";
import Link from "next/link";
import Head from "next/head";
import HomeCarousel from "../components/home/carousel";
import Header from "../components/home/header";
import About from "../components/home/about";
import Product from "../components/home/product";
import Blog from "../components/home/blog";
import Footer from "../components/home/footer";
import Copyright from "../components/home/copyright";
import RegisterButton from "../components/home/register";

const Home = () => {
  return (
    <React.Fragment>
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
