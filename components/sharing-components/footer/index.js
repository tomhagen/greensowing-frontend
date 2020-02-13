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
                It is based on grain farming. About half of the world’s land is
                occupied by cereals. Grain along with potatoes Ius case noluisse
                iracundia ne, mei no possim offendit explicari. Vel ea nulla
                doming recteque.
              </div>
            </div>
            <div className="footer_box_item item_service">
              <div className="item_service_title">our service</div>
              <div className="item_service_menu">
                <ul className="item_service_menu_left">
                  <li className="item_service_menu_left_item">
                    <Link href="#">
                      <a>Greenhouse</a>
                    </Link>
                  </li>
                  <li className="item_service_menu_left_item">
                    <Link href="#">
                      <a>Variety</a>
                    </Link>
                  </li>
                  <li className="item_service_menu_left_item">
                    <Link href="#">
                      <a>Crop Cultivation</a>
                    </Link>
                  </li>
                </ul>
                <div className="item_service_menu_right">
                  <li className="item_service_menu_right_item">
                    <Link href="#">
                      <a>Materials</a>
                    </Link>
                  </li>
                  <li className="item_service_menu_right_item">
                    <Link href="#">
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
                    523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA
                  </span>
                </div>
                <div className="item_contact_item">
                  <i className="fa fa-phone"></i>
                  <span>+1 (234) 56789, +1 987 654 3210</span>
                </div>
                <div className="item_contact_item">
                  <i className="fa fa-envelope"></i>
                  <span>support@watchland.com</span>
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
