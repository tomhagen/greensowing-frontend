import React from "react";
import Header from "../../components/sharing-components/header";
import NewsIntro from "../../components/news/news-intro";
import MainNews from "../../components/news/news-main";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";

const News = () => {
  return (
    <React.Fragment>
      <Header />
      <NewsIntro />
      <MainNews />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default News;
