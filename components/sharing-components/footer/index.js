import "./index.scss";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer_container">
          <div className="footer_box">
            <div className="footer_box_item item_about">
              <div className="item_about_title">about us</div>
              <div className="item_about_description">
                MRS Agreso provides comprehensive solutions to develop
                efficient, sustainable and quality agriculture through a
                harmonious combination of technology, production and
                agricultural practices.
              </div>
              <div className="item_about_profile">
                <a
                  href="https://www.flipsnack.com/tomhagen/profile-mrs-agreso-english-version.html"
                  target="_blank"
                >
                  MRS Agreso Profile
                </a>
              </div>
            </div>
            <div className="footer_box_item item_service">
              <div className="item_service_title">our service</div>
              <div className="item_service_menu">
                <ul className="item_service_menu_left">
                  <li className="item_service_menu_left_item">
                    <Link href="/greenhouse/commercial">
                      <a>Greenhouse</a>
                    </Link>
                  </li>
                  <li className="item_service_menu_left_item">
                    <Link href="/variety/tomato">
                      <a>Variety</a>
                    </Link>
                  </li>
                  <li className="item_service_menu_left_item">
                    <Link href="/cultivation/tomato">
                      <a>Crop Cultivation</a>
                    </Link>
                  </li>
                </ul>
                <div className="item_service_menu_right">
                  <li className="item_service_menu_right_item">
                    <Link href="/material/glass">
                      <a>Materials</a>
                    </Link>
                  </li>
                  <li className="item_service_menu_right_item">
                    <Link href="/news">
                      <a>Research</a>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="footer_box_item item_contact">
              <div className="item_contact_title">contact info</div>
              <div className="item_contact_box">
                <div className="item_contact_item">
                  <i className="fa fa-map-marker"></i>
                  <span>
                    25th Floor, Landmark 81, 208 Nguyen Huu Canh St, Binh Thanh
                    Dist, HCMC.
                  </span>
                </div>
                <div className="item_contact_item">
                  <i className="fa fa-phone"></i>
                  <span>+84 776 112 358</span>
                </div>
                <div className="item_contact_item">
                  <i className="fa fa-envelope"></i>
                  <span>pleimou@greensowing.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
