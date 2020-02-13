import React from "react";
import Header from "../../components/sharing-components/header";
import DetailNewsBox from "../../components/news/news-detail";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";

const Detail = () => {
  return (
    <React.Fragment>
      <Header />
      <DetailNewsBox />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default Detail;
