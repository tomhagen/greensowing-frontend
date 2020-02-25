import React from "react";
import { useEffect } from "react";
import { isAuth } from "../../../controller/auth";
import Router from "next/router";

const Admin = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push("/");
    } else if (isAuth().role !== 1) {
      Router.push("/");
    }
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};

export default Admin;
