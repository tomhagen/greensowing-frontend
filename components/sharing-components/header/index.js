import React from "react";
import "./index.scss";
// import Link from "next/link";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import { useState, useEffect } from "react";
import Link from "../../../helper/ActiveLink";
import { useRouter } from "next/router";

const Header = () => {
  const [state, setState] = useState({ left: false });
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  /* 
    MOBILE MENU DRAWER EFFECT
  */
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  /* 
        MOBILE MENU DECORATOR
  */
  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      className="header_mobile"
    >
      <ul className="header_mobile_menu">
        <li className="header_mobile_menu_item">
          <Link href="/" activeClassName="mobile_active">
            <a className="header_mobile_menu_item_a">home</a>
          </Link>
        </li>
        <li className="header_mobile_menu_item">
          <a
            as="/greenhouse"
            className={`header_mobile_menu_item_a arrow-down ${
              router.pathname.split("/")[1] === "greenhouse"
                ? "mobile_active"
                : ""
            }`}
          >
            greenhouse
          </a>

          <ul className="header_mobile_sub_menu">
            <li className="header_mobile_sub_menu_item">
              <Link
                href="/greenhouse/commercial"
                as="/greenhouse/commercial"
                activeClassName="mobile_sub_active"
              >
                <a className="header_mobile_sub_menu_item_a">
                  MRS Commercial Greenhouse
                </a>
              </Link>
            </li>
            <li className="header_mobile_sub_menu_item">
              <Link
                href="/greenhouse/tourist"
                as="/greenhouse/tourist"
                activeClassName="mobile_sub_active"
              >
                <a className="header_mobile_sub_menu_item_a">
                  MRS Tourist Greenhouse
                </a>
              </Link>
            </li>
            <li className="header_mobile_sub_menu_item">
              <Link
                href="/greenhouse/project"
                as="/greenhouse/project"
                activeClassName="mobile_sub_active"
              >
                <a className="header_mobile_sub_menu_item_a">
                  Project Management
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="header_mobile_menu_item">
          <a
            as="/variety"
            className={`header_mobile_menu_item_a arrow-down ${
              router.pathname.split("/")[1] === "variety" ? "mobile_active" : ""
            }`}
          >
            variety
          </a>

          <ul className="header_mobile_sub_menu">
            <li className="header_mobile_sub_menu_item">
              <Link
                href="/variety/tomato"
                as="/variety/tomato"
                activeClassName="mobile_sub_active"
              >
                <a className="header_mobile_sub_menu_item_a">
                  Greenhouse Tomato
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="header_mobile_menu_item">
          <a
            as="/cultivation"
            className={`header_mobile_menu_item_a arrow-down ${
              router.pathname.split("/")[1] === "cultivation"
                ? "mobile_active"
                : ""
            }`}
          >
            crop cultivation
          </a>

          <ul className="header_mobile_sub_menu">
            <li className="header_mobile_sub_menu_item">
              <Link
                href="/cultivation/tomato"
                as="/cultivation/tomato"
                activeClassName="mobile_sub_active"
              >
                <a className="header_mobile_sub_menu_item_a">
                  Tomato Cultivation
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="header_mobile_menu_item">
          <a
            as="/material"
            className={`header_mobile_menu_item_a arrow-down ${
              router.pathname.split("/")[1] === "material"
                ? "mobile_active"
                : ""
            }`}
          >
            materials
          </a>

          <ul className="header_mobile_sub_menu">
            <li className="header_mobile_sub_menu_item">
              <Link
                href="/material/glass"
                as="/material/glass"
                activeClassName="mobile_sub_active"
              >
                <a className="header_mobile_sub_menu_item_a">
                  Greenhouse Glass
                </a>
              </Link>
            </li>
            <li className="header_mobile_sub_menu_item">
              <Link
                href="/material/substrate"
                as="/material/substrate"
                activeClassName="mobile_sub_active"
              >
                <a className="header_mobile_sub_menu_item_a">
                  Greenhouse Substrate
                </a>
              </Link>
            </li>
            <li className="header_mobile_sub_menu_item">
              <Link
                href="/material/accessories"
                as="/material/accessories"
                activeClassName="mobile_sub_active"
              >
                <a className="header_mobile_sub_menu_item_a">
                  Greenhouse Accessories
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="header_mobile_menu_item">
          <Link href="/news" activeClassName="mobile_active">
            <a className="header_mobile_menu_item_a">research</a>
          </Link>
        </li>
      </ul>
    </div>
  );

  /* 
       CHANGE HEADER STYLE WHEN SCROLL
  */
  useEffect(() => {
    let isMounted = true;
    const handleScroll = () => {
      const currentYOffset = window.pageYOffset;
      if (currentYOffset > 100) {
        if (isMounted) {
          setScroll(true);
        }
      } else {
        if (isMounted) {
          setScroll(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => (isMounted = false);
  }, []);

  return (
    <React.Fragment>
      <div className={`header ${scroll ? "header_change" : ""}`}>
        <div className="header_container">
          <div className="header_box">
            <div className="header_logo">
              <Link href="/">
                <a>
                  <img
                    src="/static/images/logo_agreso2.png"
                    alt="Agreso_logo"
                    className={`${scroll ? "logo_change" : ""}`}
                  />
                </a>
              </Link>
            </div>
            <div className="header_main_menu_container">
              {/* 
                    DESKTOP MENU
                */}
              <ul className="header_main_menu">
                <li className="header_main_menu_item">
                  <Link href="/" activeClassName="active">
                    <a className="header_main_menu_item_a ">home</a>
                  </Link>
                </li>
                <li className="header_main_menu_item">
                  <a
                    as="/greenhouse"
                    className={`header_main_menu_item_a arrow-down ${
                      router.pathname.split("/")[1] === "greenhouse"
                        ? "active"
                        : ""
                    }`}
                  >
                    greenhouse
                  </a>

                  <ul className="header_sub_menu">
                    <li className="header_sub_menu_item">
                      <Link
                        href="/greenhouse/commercial"
                        as="/greenhouse/commercial"
                        activeClassName="sub_active"
                      >
                        <a className="header_sub_menu_item_a">
                          MRS Commercial Greenhouse
                        </a>
                      </Link>
                    </li>
                    <li className="header_sub_menu_item">
                      <Link
                        href="/greenhouse/tourist"
                        as="/greenhouse/tourist"
                        activeClassName="sub_active"
                      >
                        <a className="header_sub_menu_item_a">
                          MRS Tourist Greenhouse
                        </a>
                      </Link>
                    </li>
                    <li className="header_sub_menu_item">
                      <Link
                        href="/greenhouse/project"
                        as="/greenhouse/project"
                        activeClassName="sub_active"
                      >
                        <a className="header_sub_menu_item_a">
                          Project Management
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header_main_menu_item">
                  <a
                    as="/variety"
                    className={`header_main_menu_item_a arrow-down ${
                      router.pathname.split("/")[1] === "variety"
                        ? "active"
                        : ""
                    }`}
                  >
                    variety
                  </a>

                  <ul className="header_sub_menu">
                    <li className="header_sub_menu_item">
                      <Link
                        href="/variety/tomato"
                        as="/variety/tomato"
                        activeClassName="sub_active"
                      >
                        <a className="header_sub_menu_item_a">
                          Greenhouse Tomato
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header_main_menu_item">
                  <a
                    as="/cultivation"
                    className={`header_main_menu_item_a arrow-down ${
                      router.pathname.split("/")[1] === "cultivation"
                        ? "active"
                        : ""
                    }`}
                  >
                    crop cultivation
                  </a>

                  <ul className="header_sub_menu">
                    <li className="header_sub_menu_item">
                      <Link
                        href="/cultivation/tomato"
                        as="/cultivation/tomato"
                        activeClassName="sub_active"
                      >
                        <a className="header_sub_menu_item_a">
                          Tomato Cultivation
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header_main_menu_item">
                  <a
                    as="/material"
                    className={`header_main_menu_item_a arrow-down ${
                      router.pathname.split("/")[1] === "material"
                        ? "active"
                        : ""
                    }`}
                  >
                    materials
                  </a>

                  <ul className="header_sub_menu_material">
                    <li className="header_sub_menu_item">
                      <Link
                        href="/material/glass"
                        as="/material/glass"
                        activeClassName="sub_active"
                      >
                        <a className="header_sub_menu_item_a">
                          Greenhouse Glass
                        </a>
                      </Link>
                    </li>
                    <li className="header_sub_menu_item">
                      <Link
                        href="/material/substrate"
                        as="/material/substrate"
                        activeClassName="sub_active"
                      >
                        <a className="header_sub_menu_item_a">
                          Greenhouse Substrate
                        </a>
                      </Link>
                    </li>
                    <li className="header_sub_menu_item">
                      <Link
                        href="/material/accessories"
                        as="/material/accessories"
                        activeClassName="sub_active"
                      >
                        <a className="header_sub_menu_item_a">
                          Greenhouse Accessories
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header_main_menu_item">
                  <Link href="/news" activeClassName="active">
                    <a className="header_main_menu_item_a">research</a>
                  </Link>
                </li>
              </ul>

              {/* 
                    MOBILE MENU HAMBURGER
                */}
              <Button
                onClick={toggleDrawer("left", true)}
                className="btn__collapse"
              >
                <i className="fa fa-bars"></i>
              </Button>

              <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
                {sideList("left")}
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
