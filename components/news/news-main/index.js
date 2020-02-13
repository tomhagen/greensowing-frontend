import "./index.scss";
import React from "react";
import LargeNews from "../../sharing-components/news-large";

const MainNews = () => {
  return (
    <React.Fragment>
      <div className="main_agreso_news">
        <div className="main_agreso_news_container">
          <div className="main_agreso_news_title">
            <p>AGRESO NEWS</p>
          </div>
          <div className="main_agreso_news_box">
            <div className="main_agreso_news_box_item">
              <LargeNews />
            </div>
            <div className="main_agreso_news_box_item">
              <LargeNews />
            </div>
            <div className="main_agreso_news_box_item">
              <LargeNews />
            </div>
            <div className="main_agreso_news_box_item">
              <LargeNews />
            </div>
            <div className="main_agreso_news_box_item">
              <LargeNews />
            </div>
            <div className="main_agreso_news_box_item">
              <LargeNews />
            </div>
          </div>
        </div>
      </div>
      <div className="main_agreso_tips">
        <div className="main_agreso_tips_container">
          <div className="main_agreso_tips_title">
            <p>AGRESO TIPS</p>
          </div>
          <div className="main_agreso_tips_box">
            <div className="main_agreso_tips_box_item">
              <LargeNews />
            </div>
            <div className="main_agreso_tips_box_item">
              <LargeNews />
            </div>
            <div className="main_agreso_tips_box_item">
              <LargeNews />
            </div>
            <div className="main_agreso_tips_box_item">
              <LargeNews />
            </div>
            <div className="main_agreso_tips_box_item">
              <LargeNews />
            </div>
            <div className="main_agreso_tips_box_item">
              <LargeNews />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainNews;
