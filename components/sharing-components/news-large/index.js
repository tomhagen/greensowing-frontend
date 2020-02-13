import React from "react";
import Link from "next/link";
import "./index.scss";

const LargeNews = () => {
  return (
    <React.Fragment>
      <div className="large_news">
        <div className="large_news_img">
          <Link href="#">
            <a>
              <img src="/static/images/news_01.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="large_news_content">
          <div className="large_news_content_date">
            <i class="fa fa-calendar"></i>
            <span>20 October, 2019</span>
          </div>
          <h3 className="large_news_content_title">
            <Link href="#">
              <a>Spicey choose plush amazing</a>
            </Link>
          </h3>
          <p className="large_news_content_description">
            Although there is no phone number to call for support, when you have
            a critical issue with your website, they get working on it.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LargeNews;
