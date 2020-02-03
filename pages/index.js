import React from "react";
import Link from "next/link";
import Head from "next/head";
import Carousel from "../components/home/carousel";

const Home = () => {
  return (
    <React.Fragment>
      <div style={{ fontSize: "30px" }}>ABCDEFGG GREENHOUSE</div>
      <Carousel />
    </React.Fragment>
  );
};

export default Home;
