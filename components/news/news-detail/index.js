import "./index.scss";
import React from "react";
import Link from "next/link";
import SmallNews from "../../sharing-components/news-small";
import Tags from "../../sharing-components/tags";
import moment from "moment";
import { API } from "../../../config";
import renderHtml from "react-render-html";
import { useState, useEffect } from "react";
import { listPosts } from "../../../controller/post";

const DetailNewsBox = ({ detailNews }) => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    loadLatestNewsListFromEndPoint(0, 10);
  }, []);

  const loadLatestNewsListFromEndPoint = (skip, limit) => {
    return listPosts(skip, limit).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLatestNews(data);
      }
    });
  };

  const renderTagList = () => {
    return detailNews.tags.map((tag, index) => {
      return <Tags key={index} tag={tag} />;
    });
  };

  const renderLatestNewsListToScreen = () => {
    return latestNews
      .filter(item => item._id !== detailNews._id)
      .map((news, index) => {
        return <SmallNews key={index} detailLatestNewsList={news} />;
      });
  };
  return (
    <React.Fragment>
      <div className="news-detail">
        <div className="news-detail_container">
          <div className="news-detail_box">
            <div className="news-detail_box_left">
              <div className="news-detail_box_left_img">
                <img
                  src={`${API}/post/photo/${detailNews.slug}`}
                  alt={detailNews.title}
                />
              </div>
              <div className="news-detail_box_left_content">
                <div className="news-detail_box_left_content_date">
                  <i className="fa fa-calendar"></i>
                  <span>{moment(detailNews.createdAt).format("LL")}</span>
                </div>
                <div className="news-detail_box_left_content_title">
                  {detailNews.title}
                </div>
                <div className="news-detail_box_left_content_description">
                  {renderHtml(detailNews.body)}
                </div>
              </div>
            </div>
            <div className="news-detail_box_right">
              <div className="news-detail_box_right_title">
                <p>MOST READ</p>
              </div>
              <div className="news-detail_box_right_container">
                {renderLatestNewsListToScreen()}
                {/* <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews /> */}
              </div>
              <div className="news-detail_box_right_tags">
                <div className="news-detail_box_right_tags_title">
                  <p>TAGS</p>
                </div>
                <div className="news-detail_box_right_tags_container">
                  {detailNews.tags && renderTagList()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailNewsBox;
