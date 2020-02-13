import "./index.scss";
import React from "react";
import Link from "next/link";

const SmallNews = () => {
  return (
    <React.Fragment>
      <div className="small_news">
        <div className="small_news_date">
          <i class="fa fa-calendar"></i>
          <span>20 October, 2019</span>
        </div>
        <h3 className="small_news_title">
          <Link href="#">
            <a>3 Ways Consumer Trends Impact Your Farm</a>
          </Link>
        </h3>
      </div>
    </React.Fragment>
  );
};

export default SmallNews;
