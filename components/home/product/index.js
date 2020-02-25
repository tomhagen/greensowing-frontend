import React from "react";
import "./index.scss";
import Link from "next/link";
import ReactWOW from "react-wow";

const Product = ({ homeData }) => {
  return (
    <React.Fragment>
      <div className="product">
        <div className="product_container">
          <ReactWOW animation="fadeInUp" duration="1.5s">
            <div className="product_container_top">
              <div className="product_container_top_introduction">
                supportive product
              </div>
              <div className="product_container_top_title">
                {homeData.product_title}
              </div>
              <div className="product_container_top_content">
                {homeData.product_content}
              </div>
            </div>
          </ReactWOW>
          <div className="product_container_bottom">
            <div className="product_container_bottom_box">
              <ReactWOW animation="fadeIn" duration="1.5s">
                <div className="product_container_bottom_box_item">
                  <div className="product_container_bottom_box_item_circle">
                    <img
                      src="/static/images/home_icon1.png"
                      alt=""
                      className="product_container_bottom_box_item_icon"
                    />
                  </div>
                  <div className="product_container_bottom_box_item_title">
                    <Link href="/greenhouse/commercial">
                      <a>Greenhouse</a>
                    </Link>
                  </div>
                  <div className="product_container_bottom_box_item_content">
                    {homeData.product_greenhouse}
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="0.5s">
                <div className="product_container_bottom_box_item">
                  <div className="product_container_bottom_box_item_circle">
                    <img
                      src="/static/images/home_icon2.png"
                      alt=""
                      className="product_container_bottom_box_item_icon"
                    />
                  </div>
                  <div className="product_container_bottom_box_item_title">
                    <Link href="/variety/tomato">
                      <a>Variety</a>
                    </Link>
                  </div>
                  <div className="product_container_bottom_box_item_content">
                    {homeData.product_variety}
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="product_container_bottom_box_item">
                  <div className="product_container_bottom_box_item_circle">
                    <img
                      src="/static/images/home_icon3.png"
                      alt=""
                      className="product_container_bottom_box_item_icon"
                    />
                  </div>
                  <div className="product_container_bottom_box_item_title">
                    <Link href="/cultivation/tomato">
                      <a>Crop Cultivation</a>
                    </Link>
                  </div>
                  <div className="product_container_bottom_box_item_content">
                    {homeData.product_cultivation}
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1.5s">
                <div className="product_container_bottom_box_item">
                  <div className="product_container_bottom_box_item_circle">
                    <img
                      src="/static/images/home_icon4.png"
                      alt=""
                      className="product_container_bottom_box_item_icon"
                    />
                  </div>
                  <div className="product_container_bottom_box_item_title">
                    <Link href="/material/glass">
                      <a>Materials</a>
                    </Link>
                  </div>
                  <div className="product_container_bottom_box_item_content">
                    {homeData.product_material}
                  </div>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
