import React from "react";
import "./index.scss";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import { useState, useEffect } from "react";

const Header = () => {
  const [state, setState] = useState({ left: false });
  const [scroll, setScroll] = useState(false);

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
        Mobile Menu
  */
  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      className="header_mobile"
    >
      <ul className="header_mobile_menu">
        <li className="header_mobile_menu_item">
          <Link href="/">
            <a className="header_mobile_menu_item_a">home</a>
          </Link>
        </li>
        <li className="header_mobile_menu_item">
          <Link href="/">
            <a className="header_mobile_menu_item_a arrow-down">greenhouse</a>
          </Link>

          <ul className="header_mobile_sub_menu">
            <li className="header_mobile_sub_menu_item">
              <Link href="#">
                <a className="header_mobile_sub_menu_item_a">
                  MRS Commercial Greenhouse
                </a>
              </Link>
            </li>
            <li className="header_mobile_sub_menu_item">
              <Link href="#">
                <a className="header_mobile_sub_menu_item_a">
                  MRS Tourist Greenhouse
                </a>
              </Link>
            </li>
            <li className="header_mobile_sub_menu_item">
              <Link href="#">
                <a className="header_mobile_sub_menu_item_a">
                  Project Management
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="header_mobile_menu_item">
          <Link href="/">
            <a className="header_mobile_menu_item_a arrow-down">variety</a>
          </Link>
          <ul className="header_mobile_sub_menu">
            <li className="header_mobile_sub_menu_item">
              <Link href="#">
                <a className="header_mobile_sub_menu_item_a">
                  Greenhouse Tomato
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="header_mobile_menu_item">
          <Link href="/">
            <a className="header_mobile_menu_item_a arrow-down">
              crop cultivation
            </a>
          </Link>
          <ul className="header_mobile_sub_menu">
            <li className="header_mobile_sub_menu_item">
              <Link href="#">
                <a className="header_mobile_sub_menu_item_a">
                  Tomato Cultivation
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="header_mobile_menu_item">
          <Link href="/">
            <a className="header_mobile_menu_item_a arrow-down">materials</a>
          </Link>
          <ul className="header_mobile_sub_menu">
            <li className="header_mobile_sub_menu_item">
              <Link href="#">
                <a className="header_mobile_sub_menu_item_a">
                  Greenhouse Glass
                </a>
              </Link>
            </li>
            <li className="header_mobile_sub_menu_item">
              <Link href="#">
                <a className="header_mobile_sub_menu_item_a">
                  Greenhouse Substrate
                </a>
              </Link>
            </li>
            <li className="header_mobile_sub_menu_item">
              <Link href="#">
                <a className="header_mobile_sub_menu_item_a">
                  Greenhouse Accessories
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="header_mobile_menu_item">
          <Link href="/">
            <a className="header_mobile_menu_item_a">research</a>
          </Link>
        </li>
      </ul>
    </div>
  );

  /* 
        Add color to header when scroll
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
                    src="/static/images/logo_agreso.png"
                    alt="Agreso_logo"
                    className={`${scroll ? "logo_change" : ""}`}
                  />
                </a>
              </Link>
            </div>
            <div className="header_main_menu_container">
              {/* 
                    Desktop Menu
                */}
              <ul className="header_main_menu">
                <li className="header_main_menu_item">
                  <Link href="/">
                    <a className="header_main_menu_item_a ">home</a>
                  </Link>
                </li>
                <li className="header_main_menu_item">
                  <Link href="#">
                    <a className="header_main_menu_item_a arrow-down">
                      greenhouse
                    </a>
                  </Link>
                  <ul className="header_sub_menu">
                    <li className="header_sub_menu_item">
                      <Link href="/greenhouse/commercial">
                        <a className="header_sub_menu_item_a">
                          MRS Commercial Greenhouse
                        </a>
                      </Link>
                    </li>
                    <li className="header_sub_menu_item">
                      <Link href="/greenhouse/tourist">
                        <a className="header_sub_menu_item_a">
                          MRS Tourist Greenhouse
                        </a>
                      </Link>
                    </li>
                    <li className="header_sub_menu_item">
                      <Link href="/greenhouse/project">
                        <a className="header_sub_menu_item_a">
                          Project Management
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header_main_menu_item">
                  <Link href="#">
                    <a className="header_main_menu_item_a arrow-down">
                      variety
                    </a>
                  </Link>
                  <ul className="header_sub_menu">
                    <li className="header_sub_menu_item">
                      <Link href="/variety/tomato">
                        <a className="header_sub_menu_item_a">
                          Greenhouse Tomato
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header_main_menu_item">
                  <Link href="#">
                    <a className="header_main_menu_item_a arrow-down">
                      crop cultivation
                    </a>
                  </Link>
                  <ul className="header_sub_menu">
                    <li className="header_sub_menu_item">
                      <Link href="/cultivation/tomato">
                        <a className="header_sub_menu_item_a">
                          Tomato Cultivation
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header_main_menu_item">
                  <Link href="#">
                    <a className="header_main_menu_item_a arrow-down">
                      materials
                    </a>
                  </Link>
                  <ul className="header_sub_menu_material">
                    <li className="header_sub_menu_item">
                      <Link href="/material/glass">
                        <a className="header_sub_menu_item_a">
                          Greenhouse Glass
                        </a>
                      </Link>
                    </li>
                    <li className="header_sub_menu_item">
                      <Link href="/material/substrate">
                        <a className="header_sub_menu_item_a">
                          Greenhouse Substrate
                        </a>
                      </Link>
                    </li>
                    <li className="header_sub_menu_item">
                      <Link href="/material/accessories">
                        <a className="header_sub_menu_item_a">
                          Greenhouse Accessories
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header_main_menu_item">
                  <Link href="/news">
                    <a className="header_main_menu_item_a">research</a>
                  </Link>
                </li>
              </ul>

              {/* 
                    Mobile Menu 
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
