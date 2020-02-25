import React from "react";
import Link from "next/link";
import "./index.scss";
import SmallNews from "../../sharing-components/news-small";
import MediumNews from "../../sharing-components/news-medium";
import moment from "moment";
import { API } from "../../../config";

const NewsIntro = ({ newsList }) => {
  const renderMediumNews = () => {
    return newsList.slice(1, 4).map((item, index) => {
      return (
        <div className="medium_item" key={index}>
          <MediumNews mediumNews={item} />
        </div>
      );
    });
  };

  const renderSmallNews = () => {
    return newsList.slice(4, 14).map((item, index) => {
      return <SmallNews key={index} smallNews={item} />;
    });
  };
  return (
    <React.Fragment>
      <div className="news-intro">
        <div className="news-intro_container">
          <div className="news-intro_box">
            <div className="news-intro_box_left">
              <div className="news-intro_box_left_top">
                <div className="overlay"></div>
                {newsList && newsList.length && (
                  <React.Fragment>
                    <Link href="news/[slug]" as={`news/${newsList[0].slug}`}>
                      <a>
                        <img
                          src={`${API}/post/photo/${newsList[0].slug}`}
                          alt=""
                        />
                      </a>
                    </Link>
                  </React.Fragment>
                )}
                <div className="news-intro_box_left_top_content">
                  <div className="news-intro_box_left_top_content_container">
                    <div className="news-intro_box_left_top_content_date">
                      <i className="fa fa-calendar"></i>
                      <span>
                        {newsList &&
                          newsList.length &&
                          moment(newsList[0].createdAt).format("LL")}
                      </span>
                    </div>
                    <h3 className="news-intro_box_left_top_content_title">
                      {newsList && newsList.length && (
                        <React.Fragment>
                          <Link
                            href="news/[slug]"
                            as={`news/${newsList[0].slug}`}
                          >
                            <a>
                              {newsList && newsList.length && newsList[0].title}
                            </a>
                          </Link>
                        </React.Fragment>
                      )}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="news-intro_box_left_bottom">
                {renderMediumNews()}
              </div>
            </div>
            <div className="news-intro_box_right">
              <div className="news-intro_box_right_title">
                <p>LATEST NEWS</p>
              </div>
              <div className="news-intro_box_right_container">
                {renderSmallNews()}
                {/* <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsIntro;
