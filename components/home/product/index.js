import React from "react";
import "./index.scss";
import Link from "next/link";

const Product = () => {
  return (
    <React.Fragment>
      <div className="product">
        <div className="product_container">
          <div className="product_container_top">
            <div className="product_container_top_introduction">
              supportive product
            </div>
            <div className="product_container_top_title">
              Special products for most farmer
            </div>
            <div className="product_container_top_content">
              Morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Vestibulum tortor quam, feugiat vitae,
            </div>
          </div>
          <div className="product_container_bottom">
            <div className="product_container_bottom_box">
              <div className="product_container_bottom_box_item">
                <div className="product_container_bottom_box_item_circle">
                  <img
                    src="/static/images/home_icon1.png"
                    alt=""
                    className="product_container_bottom_box_item_icon"
                  />
                </div>
                <div className="product_container_bottom_box_item_title">
                  <Link href="#">
                    <a>Greenhouse</a>
                  </Link>
                </div>
                <div className="product_container_bottom_box_item_content">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum
                </div>
              </div>
              <div className="product_container_bottom_box_item">
                <div className="product_container_bottom_box_item_circle">
                  <img
                    src="/static/images/home_icon2.png"
                    alt=""
                    className="product_container_bottom_box_item_icon"
                  />
                </div>
                <div className="product_container_bottom_box_item_title">
                  <Link href="#">
                    <a>Variety</a>
                  </Link>
                </div>
                <div className="product_container_bottom_box_item_content">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum
                </div>
              </div>
              <div className="product_container_bottom_box_item">
                <div className="product_container_bottom_box_item_circle">
                  <img
                    src="/static/images/home_icon3.png"
                    alt=""
                    className="product_container_bottom_box_item_icon"
                  />
                </div>
                <div className="product_container_bottom_box_item_title">
                  <Link href="#">
                    <a>Crop Cultivation</a>
                  </Link>
                </div>
                <div className="product_container_bottom_box_item_content">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum
                </div>
              </div>
              <div className="product_container_bottom_box_item">
                <div className="product_container_bottom_box_item_circle">
                  <img
                    src="/static/images/home_icon4.png"
                    alt=""
                    className="product_container_bottom_box_item_icon"
                  />
                </div>
                <div className="product_container_bottom_box_item_title">
                  <Link href="#">
                    <a>Materials</a>
                  </Link>
                </div>
                <div className="product_container_bottom_box_item_content">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
