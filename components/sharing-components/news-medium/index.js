import "./index.scss";
import React from "react";
import Link from "next/link";

const MediumNews = () => {
  return (
    <React.Fragment>
      <div className="medium_news">
        <div className="medium_news_img">
          <Link href="#">
            <a>
              <img src="/static/images/news.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="medium_news_date">
          <i class="fa fa-calendar"></i>
          <span>20 October, 2019</span>
        </div>
        <h3 className="medium_news_title">
          <Link href="#">
            <a>Velit scaevola persecuti nam ea. Saperet maiorum</a>
          </Link>
        </h3>
      </div>
    </React.Fragment>
  );
};

export default MediumNews;
