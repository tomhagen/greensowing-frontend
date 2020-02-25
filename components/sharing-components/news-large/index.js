import React from "react";
import Link from "next/link";
import "./index.scss";
import moment from "moment";
import { API } from "../../../config";
import renderHTML from "react-render-html";

const LargeNews = ({ agresoNewsList, agresoTipsList }) => {
  return (
    <React.Fragment>
      <div className="large_news">
        <div className="large_news_img">
          {agresoNewsList && (
            <Link href="news/[slug]" as={`news/${agresoNewsList.slug}`}>
              <a>
                <img
                  src={`${API}/post/photo/${agresoNewsList.slug}`}
                  alt={agresoNewsList.title}
                />
              </a>
            </Link>
          )}
          {agresoTipsList && (
            <Link href="news/[slug]" as={`news/${agresoTipsList.slug}`}>
              <a>
                <img
                  src={`${API}/post/photo/${agresoTipsList.slug}`}
                  alt={agresoTipsList.title}
                />
              </a>
            </Link>
          )}
        </div>
        <div className="large_news_content">
          <div className="large_news_content_date">
            <i className="fa fa-calendar"></i>
            <span>
              {agresoNewsList && moment(agresoNewsList.createdAt).format("LL")}
              {agresoTipsList && moment(agresoTipsList.createdAt).format("LL")}
            </span>
          </div>
          <h3 className="large_news_content_title">
            {agresoNewsList && (
              <Link href="/news/[slug]" as={`news/${agresoNewsList.slug}`}>
                <a>{agresoNewsList.title}</a>
              </Link>
            )}
            {agresoTipsList && (
              <Link href="/news/[slug]" as={`news/${agresoTipsList.slug}`}>
                <a>{agresoTipsList.title}</a>
              </Link>
            )}
          </h3>
          {agresoNewsList && (
            <div className="large_news_content_description">
              {renderHTML(agresoNewsList.excerpt)}
            </div>
          )}
          {agresoTipsList && (
            <div className="large_news_content_description">
              {renderHTML(agresoTipsList.excerpt)}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LargeNews;
