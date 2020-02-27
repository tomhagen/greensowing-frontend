import React from "react";
import Link from "next/link";
import "./index.scss";
import moment from "moment";
import { API } from "../../../config";
import renderHTML from "react-render-html";

const LargeNews = ({
  agresoNewsList,
  agresoTipsList,
  loadAgresoNews,
  loadAgresoTips
}) => {
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
          {loadAgresoNews && (
            <Link href="news/[slug]" as={`news/${loadAgresoNews.slug}`}>
              <a>
                <img
                  src={`${API}/post/photo/${loadAgresoNews.slug}`}
                  alt={loadAgresoNews.title}
                />
              </a>
            </Link>
          )}
          {loadAgresoTips && (
            <Link href="news/[slug]" as={`news/${loadAgresoTips.slug}`}>
              <a>
                <img
                  src={`${API}/post/photo/${loadAgresoTips.slug}`}
                  alt={loadAgresoTips.title}
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
              {loadAgresoNews && moment(loadAgresoNews.createdAt).format("LL")}
              {loadAgresoTips && moment(loadAgresoTips.createdAt).format("LL")}
            </span>
          </div>
          {/* Render title */}
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
            {loadAgresoNews && (
              <Link href="/news/[slug]" as={`news/${loadAgresoNews.slug}`}>
                <a>{loadAgresoNews.title}</a>
              </Link>
            )}
            {loadAgresoTips && (
              <Link href="/news/[slug]" as={`news/${loadAgresoTips.slug}`}>
                <a>{loadAgresoTips.title}</a>
              </Link>
            )}
          </h3>

          {/* Render excerpt */}
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
          {loadAgresoNews && (
            <div
              className="large_news_content_description"
              dangerouslySetInnerHTML={{ __html: loadAgresoNews.excerpt }}
            ></div>
          )}
          {loadAgresoTips && (
            <div
              className="large_news_content_description"
              dangerouslySetInnerHTML={{ __html: loadAgresoTips.excerpt }}
            ></div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LargeNews;
