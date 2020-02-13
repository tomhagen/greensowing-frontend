import React from "react";
import Link from "next/link";
import "./index.scss";
import SmallNews from "../../sharing-components/news-small";
import MediumNews from "../../sharing-components/news-medium";

const NewsIntro = () => {
  return (
    <React.Fragment>
      <div className="news-intro">
        <div className="news-intro_container">
          <div className="news-intro_box">
            <div className="news-intro_box_left">
              <div className="news-intro_box_left_top">
                <Link href="#">
                  <a>
                    <img src="/static/images/news.png" alt="" />
                  </a>
                </Link>
                <div className="news-intro_box_left_top_content">
                  <div className="news-intro_box_left_top_content_container">
                    <div className="news-intro_box_left_top_content_date">
                      <i className="fa fa-calendar"></i>
                      <span>20 October, 2019</span>
                    </div>
                    <h3 className="news-intro_box_left_top_content_title">
                      <Link href="#">
                        <a>
                          How to Build Your Own Greenhouse: Designs and Plans to
                          Meet Your Growing Needs,
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="news-intro_box_left_bottom">
                <div className="medium_item">
                  <MediumNews />
                </div>
                <div className="medium_item">
                  <MediumNews />
                </div>
                <div className="medium_item">
                  <MediumNews />
                </div>
              </div>
            </div>
            <div className="news-intro_box_right">
              <div className="news-intro_box_right_title">
                <p>MOST READ</p>
              </div>
              <div className="news-intro_box_right_container">
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsIntro;
