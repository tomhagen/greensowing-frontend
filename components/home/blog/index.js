import React from "react";
import "./index.scss";
import Link from "next/link";
import ReactWOW from "react-wow";
import moment from "moment";
import { useState, useEffect } from "react";
import { listPosts } from "../../../controller/post";
import { API } from "../../../config";
import renderHTML from "react-render-html";

const Blog = () => {
  const [latestNewsData, setLatestNewsData] = useState([]);

  useEffect(() => {
    loadLatestNewsData();
  }, []);

  const loadLatestNewsData = () => {
    listPosts(0, 3).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLatestNewsData(data);
        // console.log(data);
      }
    });
  };

  const renderBlogItem = () => {
    return latestNewsData.map((item, index) => {
      return (
        <div className="blog_container_bottom_item" key={index}>
          <div className="blog_container_bottom_item_img_box">
            <Link href={`/news/${item.slug}`}>
              <a>
                <img src={`${API}/post/photo/${item.slug}`} alt={item.title} />
              </a>
            </Link>
          </div>
          <div className="blog_container_bottom_item_content_box">
            <div className="item_content_box_date">
              <i className="fa fa-calendar"></i>
              <span>{moment(item.createdAt).format("LL")}</span>
            </div>
            <h3 className="item_content_box_title">
              <Link href="/news/[slug]" as={`/news/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
            </h3>
            <div className="item_content_box_description">
              {renderHTML(item.excerpt)}
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <React.Fragment>
      <div className="blog">
        <div className="blog_container">
          <div className="blog_container_top">
            <div className="blog_container_top_introduction">our blog</div>
            <div className="blog_container_top_title">Latest research</div>
          </div>
          <div className="blog_container_bottom">
            <ReactWOW animation="fadeIn" duration="2s">
              <div className="blog_container_bottom_box">
                {renderBlogItem()}
              </div>
            </ReactWOW>
          </div>
          <div className="blog_container_view_more">
            <div className="blog_container_view_more_box">
              <Link href="/news">
                <a>view more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
