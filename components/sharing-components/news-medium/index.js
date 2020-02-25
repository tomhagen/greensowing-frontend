import "./index.scss";
import React from "react";
import Link from "next/link";
import moment from "moment";
import { API } from "../../../config";

const MediumNews = ({ mediumNews }) => {
  return (
    <React.Fragment>
      <div className="medium_news">
        <div className="medium_news_img">
          <Link href="news/[slug]" as={`news/${mediumNews.slug}`}>
            <a>
              <img
                src={`${API}/post/photo/${mediumNews.slug}`}
                alt={mediumNews.title}
              />
            </a>
          </Link>
        </div>
        <div className="medium_news_date">
          <i className="fa fa-calendar"></i>
          <span>{moment(mediumNews.createdAt).format("LL")}</span>
        </div>
        <h3 className="medium_news_title">
          <Link href="/news/[slug]" as={`news/${mediumNews.slug}`}>
            <a>{mediumNews.title}</a>
          </Link>
        </h3>
      </div>
    </React.Fragment>
  );
};

export default MediumNews;
