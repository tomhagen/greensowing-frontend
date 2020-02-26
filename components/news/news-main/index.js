import "./index.scss";
import React from "react";
import LargeNews from "../../sharing-components/news-large";
import { useState, useEffect } from "react";
import { listPostWithCategory } from "../../../controller/post";
import ReactWOW from "react-wow";

const MainNews = () => {
  const [agresoNews, setAgresoNews] = useState([]);
  const [agresoTips, setAgresoTips] = useState([]);

  const [skipNews, setSkipNews] = useState(0);
  const [limitNews, setLimitNews] = useState(6);

  const [skipTips, setSkipTips] = useState(0);
  const [limitTips, setLimitTips] = useState(6);

  const [loadedAgresoNewsPost, setLoadedAgresoNewsPost] = useState([]);
  const [loadedAgresoTipsPost, setLoadedAgresoTipsPost] = useState([]);

  const [isHideNews, setIsHideNews] = useState(false);
  const [isHideTips, setIsHideTips] = useState(false);

  useEffect(() => {
    loadAgresoNewsFromEndPoint("agreso-news");
    loadAgresoTipsFromEndPoint("agreso-tips");
  }, []);

  const loadAgresoNewsFromEndPoint = (slug, skip, limit) => {
    return listPostWithCategory(slug, skip, limit).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setAgresoNews(data);
      }
    });
  };

  const loadAgresoTipsFromEndPoint = (slug, skip, limit) => {
    return listPostWithCategory(slug, skip, limit).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setAgresoTips(data);
      }
    });
  };

  const loadMoreAgresoNews = () => {
    let toSkipNews = skipNews + limitNews;
    return listPostWithCategory("agreso-news", 6, toSkipNews).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedAgresoNewsPost(data);
        setSkipNews(toSkipNews);
        if (data.length % 6 !== 0) {
          setIsHideNews(true);
        }
      }
    });
  };

  const loadMoreAgresoTips = () => {
    let toSkipTips = skipTips + limitTips;
    return listPostWithCategory("agreso-tips", 6, toSkipTips).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedAgresoTipsPost(data);
        setSkipTips(toSkipTips);
        if (data.length % 6 !== 0) {
          setIsHideTips(true);
        }
      }
    });
  };
  const renderAgresoNewsToScreen = () => {
    return agresoNews.map((news, index) => {
      return (
        <div className="main_agreso_news_box_item" key={index}>
          <LargeNews agresoNewsList={news} />
        </div>
      );
    });
  };

  const renderAgresoTipsToScreen = () => {
    return agresoTips.map((news, index) => {
      return (
        <div className="main_agreso_tips_box_item" key={index}>
          <LargeNews agresoTipsList={news} />
        </div>
      );
    });
  };

  const renderLoadMoreAgresoNewsToScreen = () => {
    return loadedAgresoNewsPost.map((news, index) => {
      return (
        <ReactWOW animation="fadeIn" duration="1s" delay="0.5s" key={index}>
          <div className="main_agreso_news_box_item" key={index}>
            <LargeNews loadAgresoNews={news} />
          </div>
        </ReactWOW>
      );
    });
  };

  const renderLoadMoreAgresoTipsToScreen = () => {
    return loadedAgresoTipsPost.map((news, index) => {
      return (
        <ReactWOW animation="fadeIn" duration="1s" delay="0.5s" key={index}>
          <div className="main_agreso_tips_box_item" key={index}>
            <LargeNews loadAgresoTips={news} />
          </div>
        </ReactWOW>
      );
    });
  };
  return (
    <React.Fragment>
      <div className="main_agreso_news">
        <div className="main_agreso_news_container">
          <div className="main_agreso_news_title">
            <p>AGRESO NEWS</p>
          </div>
          <div className="main_agreso_news_box">
            {renderAgresoNewsToScreen()}
            {renderLoadMoreAgresoNewsToScreen()}
          </div>
          <div
            className={`main_agreso_news_loadmorebtn ${
              isHideNews ? "hide" : ""
            }`}
          >
            <div
              className="main_agreso_news_loadmorebtn_box"
              onClick={loadMoreAgresoNews}
            >
              More News
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
            {renderAgresoTipsToScreen()}
            {renderLoadMoreAgresoTipsToScreen()}
          </div>
          <div
            className={`main_agreso_tips_loadmorebtn ${
              isHideTips ? "hide" : ""
            }`}
          >
            <div
              className="main_agreso_tips_loadmorebtn_box"
              onClick={loadMoreAgresoTips}
            >
              More News
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainNews;
