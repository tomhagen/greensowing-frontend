import React from "react";
import "./index.scss";
import Link from "next/link";
import ReactWOW from "react-wow";

const Blog = () => {
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
              <div className="blog_container_bottom_item">
                <div className="blog_container_bottom_item_img_box">
                  <Link href="#">
                    <a>
                      <img src="/static/images/news_01.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="blog_container_bottom_item_content_box">
                  <div className="item_content_box_date">
                    <i className="fa fa-calendar"></i>
                    <span>20 October, 2019</span>
                  </div>
                  <h3 className="item_content_box_title">
                    <Link href="#">
                      <a>Spicey choose plush amazing</a>
                    </Link>
                  </h3>
                  <p className="item_content_box_description">
                    Although there is no phone number to call for support, when
                    you have a critical issue with your website, they get
                    working on it.
                  </p>
                </div>
              </div>

              <div className="blog_container_bottom_item">
                <div className="blog_container_bottom_item_img_box">
                  <Link href="#">
                    <a>
                      <img src="/static/images/news_02.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="blog_container_bottom_item_content_box">
                  <div className="item_content_box_date">
                    <i className="fa fa-calendar"></i>
                    <span>20 October, 2019</span>
                  </div>
                  <h3 className="item_content_box_title">
                    <Link href="#">
                      <a>Spicey choose plush amazing</a>
                    </Link>
                  </h3>
                  <p className="item_content_box_description">
                    Although there is no phone number to call for support, when
                    you have a critical issue with your website, they get
                    working on it.
                  </p>
                </div>
              </div>
              <div className="blog_container_bottom_item">
                <div className="blog_container_bottom_item_img_box">
                  <Link href="#">
                    <a>
                      <img src="/static/images/news_03.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="blog_container_bottom_item_content_box">
                  <div className="item_content_box_date">
                    <i className="fa fa-calendar"></i>
                    <span>20 October, 2019</span>
                  </div>
                  <h3 className="item_content_box_title">
                    <Link href="#">
                      <a>Spicey choose plush amazing</a>
                    </Link>
                  </h3>
                  <p className="item_content_box_description">
                    Although there is no phone number to call for support, when
                    you have a critical issue with your website, they get
                    working on it.
                  </p>
                </div>
              </div>
            </ReactWOW>
          </div>
          <div className="blog_container_view_more">
            <div className="blog_container_view_more_box">
              <Link href="#">
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
