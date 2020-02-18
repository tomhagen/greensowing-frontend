import "./index.scss";
import React, { Component, Fragment } from "react";

class Loading extends Component {
  componentDidMount() {
    this.delayPreloader();
  }

  delayPreloader = () => {
    setTimeout(() => {
      this.handlePreloader();
    }, 1500);
  };

  handlePreloader = () => {
    const preloader = document.getElementById("loading");
    preloader.style.display = "none";
  };

  render() {
    return (
      <Fragment>
        <div id="loading"></div>
      </Fragment>
    );
  }
}

export default Loading;
