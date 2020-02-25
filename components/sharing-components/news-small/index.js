import "./index.scss";
import React from "react";
import Link from "next/link";
import moment from "moment";

const SmallNews = ({ smallNews, detailLatestNewsList }) => {
  return (
    <React.Fragment>
      <div className="small_news">
        <div className="small_news_date">
          <i className="fa fa-calendar"></i>
          <span>{smallNews && moment(smallNews.createdAt).format("LL")}</span>
          <span>
            {detailLatestNewsList &&
              moment(detailLatestNewsList.createdAt).format("LL")}
          </span>
        </div>
        <h3 className="small_news_title">
          {smallNews && (
            <Link href="/news/[slug]" as={`news/${smallNews.slug}`}>
              <a>{smallNews.title}</a>
            </Link>
          )}
          {detailLatestNewsList && (
            <Link href="/news/[slug]" as={`${detailLatestNewsList.slug}`}>
              <a>{detailLatestNewsList.title}</a>
            </Link>
          )}
        </h3>
      </div>
    </React.Fragment>
  );
};

export default SmallNews;
