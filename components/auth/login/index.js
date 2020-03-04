import React from "react";
import "./index.scss";
import { useState, useEffect } from "react";
import Router from "next/router";
import { signin, authenticate, isAuth } from "../../../controller/auth";

const Login = () => {
  const [values, setValues] = useState({ username: "", password: "" });

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };

  const { username, password } = values;
  const handleSubmit = e => {
    e.preventDefault();
    const user = { username, password };
    signin(user).then(data => {
      if (data.error) {
        window.location.reload(true);
      } else {
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            console.log("authenticated");
          } else {
            console.log("You are not authorized");
            window.location.reload(true);
          }
        });
      }
    });
  };
  return (
    <React.Fragment>
      <div className="login">
        <div className="login_container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="username"
                onChange={handleChange("username")}
              />
              <input
                type="password"
                className="form-control"
                placeholder="password"
                onChange={handleChange("password")}
              />
              <button type="submit" className="btn btn-login">
                Login
              </button>
            </div>
          </form>
          <div className="login_logo">
            <img src="/static/images/logo_agreso2.png" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
