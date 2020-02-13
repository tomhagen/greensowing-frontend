import React from "react";
import { intro } from "../../data/intro";
import { touch } from "../../data/touch";
import { tomato } from "../../data/tomato";
import Header from "../../components/sharing-components/header";
import Intro from "../../components/sharing-components/intro";
import Preparation from "../../components/cultivation/preparation";
import GrowingMedia from "../../components/cultivation/growing";
import Planting from "../../components/cultivation/planting";
import Husbandry from "../../components/cultivation/husbandry";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";

const Tomato = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro props={intro.cultivation.tomato} />
      <Preparation />
      <GrowingMedia />
      <Planting />
      <Husbandry />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default Tomato;
