import "./index.scss";
import Link from "next/link";
import React from "react";
import ReactWOW from "react-wow";

const Preparation = () => {
  return (
    <React.Fragment>
      <div className="preparation">
        <div className="preparation_container">
          <div className="preparation_box">
            <div className="preparation_box_left">
              <div className="preparation_box_left_img">
                <ReactWOW animation="fadeIn" duration="1.5s">
                  <img src="/static/images/crop_bg_02.png" alt="" />
                </ReactWOW>
              </div>
              <div className="preparation_box_left_frame"></div>
            </div>
            <div className="preparation_box_right">
              <ReactWOW animation="fadeInUp" duration="1.5s">
                <div className="preparation_box_right_title">Preparation</div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
                <div className="preparation_box_right_subtitle">Climate:</div>
                <div className="preparation_box_right_subcontent">
                  Temperature: between 21 and 24 oC Humidity: Water stress and
                  long dry periods will cause buds and flowers to drop off, and
                  the fruits to split. However, if rains are too heavy and
                  humidity is too high, the growth of mould will increase and
                  the fruit will rot.  
                </div>
                <div className="preparation_box_right_subtitle">
                  Choose the best variety:
                </div>
                <div className="preparation_box_right_subcontent">
                  - Size of fruit desired <br />- Disease resistance <br />-
                  Aluminum profiles: designed according to MRS typical standard{" "}
                  <br />- Lack of physiological problems, i.e., cracking,
                  catfacing, blossom-end rot <br />- Yield uniformity of fruit
                  size <br />- Market demand
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
                <div className="preparation_box_right_subtitle">
                  Tomato Disease Resistance Code:
                </div>
                <div className="preparation_box_right_table">
                  <table>
                    <tr>
                      <td>V</td>
                      <td>Verticillium Wilt</td>
                      <td>A</td>
                      <td>Alternaria</td>
                    </tr>
                    <tr>
                      <td>F</td>
                      <td>Fusarium Wilt</td>
                      <td>T</td>
                      <td>Tobacco Mosaic Virus</td>
                    </tr>
                    <tr>
                      <td>FF</td>
                      <td>Fusarium, races 1 and 2</td>
                      <td>ST</td>
                      <td>Stemphylium (Gray Leaf Spot)</td>
                    </tr>
                    <tr>
                      <td>FFF</td>
                      <td>Fusarium, races 1, 2, and 3</td>
                      <td>TSW</td>
                      <td>Tomato Spotted Wilt Virus</td>
                    </tr>
                    <tr>
                      <td>N</td>
                      <td>Nematodes</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </div>
                <div className="preparation_box_right_btn">
                  <div className="preparation_box_right_btn_box">
                    <Link href="#">
                      <a>view varieties</a>
                    </Link>
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

export default Preparation;
