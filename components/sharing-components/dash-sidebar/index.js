import "./index.scss";
import React from "react";
import Link from "next/link";

const DashSidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="sidebar_container">
          <div className="sidebar_brand">
            <Link href="/dashboard">
              <a>
                <img src="/static/images/logo_agreso_2.png" alt="" />
              </a>
            </Link>
          </div>
          <hr className="sidebar_divider" />
          <div className="sidebar_item">
            <div className="sidebar_title">
              <i className="fa fa-slack"></i>
              <span>Posts</span>
            </div>
            <div className="sidebar_link">
              <a href="/dashboard-next/posts/create" className="">
                Add Post
              </a>
            </div>
            <div className="sidebar_link">
              <Link href="/dashboard-next/posts/read">
                <a className="">View All Posts</a>
              </Link>
            </div>
          </div>

          <hr className="sidebar_divider" />
          <div className="sidebar_item">
            <div className="sidebar_title">
              <Link href="/dashboard-next/categories/read">
                <a>
                  <i className="fa fa-slack"></i>
                  <span>Categories</span>
                </a>
              </Link>
            </div>
          </div>
          <hr className="sidebar_divider" />
          <div className="sidebar_item">
            <div className="sidebar_title">
              <Link href="/dashboard-next/tags/read">
                <a>
                  <i className="fa fa-slack"></i>
                  <span>Tags</span>
                </a>
              </Link>
            </div>
          </div>
          <hr className="sidebar_divider" />
          <div className="sidebar_item">
            <div className="sidebar_title">
              <Link href="/dashboard-next/form/read">
                <a>
                  <i className="fa fa-slack"></i>
                  <span>Contact Form</span>
                </a>
              </Link>
            </div>
          </div>
          <hr className="sidebar_divider" />
          <div className="sidebar_item">
            <div className="sidebar_title">
              <i className="fa fa-slack"></i>
              <span>User</span>
            </div>
          </div>
          <hr className="sidebar_divider" />
          <div className="sidebar_item">
            <div className="sidebar_title">
              <i className="fa fa-slack"></i>
              <span>Page</span>
            </div>
            <div className="sidebar_subtitle">
              <Link href="/dashboard-next/home/read">
                <a className="">Home</a>
              </Link>
            </div>
            <div className="sidebar_subtitle">
              Greenhouse
              <div className="sidebar_sublink">
                <Link href="#">
                  <a className="">Commercial</a>
                </Link>
              </div>
              <div className="sidebar_sublink">
                <Link href="#">
                  <a className="">Tourist</a>
                </Link>
              </div>
              <div className="sidebar_sublink">
                <Link href="#">
                  <a className="">Project Management</a>
                </Link>
              </div>
            </div>

            <div className="sidebar_subtitle">
              Variety
              <div className="sidebar_sublink">
                <Link href="#">
                  <a className="">Tomato</a>
                </Link>
              </div>
            </div>
            <div className="sidebar_subtitle">
              Crop Cultivation
              <div className="sidebar_sublink">
                <Link href="#">
                  <a className="">Tomato</a>
                </Link>
              </div>
            </div>
            <div className="sidebar_subtitle">
              Materials
              <div className="sidebar_sublink">
                <Link href="#">
                  <a className="">Glass</a>
                </Link>
              </div>
              <div className="sidebar_sublink">
                <Link href="#">
                  <a className="">Substrate</a>
                </Link>
              </div>
              <div className="sidebar_sublink">
                <Link href="#">
                  <a className="">Accessories</a>
                </Link>
              </div>
            </div>
            <div className="sidebar_subtitle">
              <Link href="#">
                <a className="">Research</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashSidebar;
