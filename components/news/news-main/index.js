import "./index.scss";
import React from "react";
import LargeNews from "../../sharing-components/news-large";
import { useState, useEffect } from "react";
import { listPostWithCategory } from "../../../controller/post";

const MainNews = () => {
  const [agresoNews, setAgresoNews] = useState([]);
  const [agresoTips, setAgresoTips] = useState([]);

  // const [skip, setSkip] = useState(0);
  // const [limit, setLimit] = useState(6);
  // const [size, setSize] = useState(10);
  // const [loadedPost, setLoadedPost] = useState([]);

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

  // const loadMoreAgresoNews = () => {
  //   let toSkip = skip + limit;
  //   loadAgresoNewsFromEndPoint("agreso-news", 0).then(data => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setLoadedPost(data);
  //       console.log(loadedPost);
  //     }
  //   });
  // };
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
  return (
    <React.Fragment>
      <div className="main_agreso_news">
        <div className="main_agreso_news_container">
          <div className="main_agreso_news_title">
            <p>AGRESO NEWS</p>
          </div>
          <div className="main_agreso_news_box">
            {renderAgresoNewsToScreen()}
          </div>
          {/* <div className="main_agreso_news_loadmorebtn">
            <div
              className="main_agreso_news_loadmorebtn_box"
              onClick={loadMoreAgresoNews}
            >
              More News
            </div>
          </div> */}
        </div>
      </div>
      <div className="main_agreso_tips">
        <div className="main_agreso_tips_container">
          <div className="main_agreso_tips_title">
            <p>AGRESO TIPS</p>
          </div>
          <div className="main_agreso_tips_box">
            {renderAgresoTipsToScreen()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainNews;
