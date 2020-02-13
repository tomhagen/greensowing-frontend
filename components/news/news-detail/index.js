import "./index.scss";
import React from "react";
import Link from "next/link";
import SmallNews from "../../sharing-components/news-small";
import Tags from "../../sharing-components/tags";

const DetailNewsBox = () => {
  return (
    <React.Fragment>
      <div className="news-detail">
        <div className="news-detail_container">
          <div className="news-detail_box">
            <div className="news-detail_box_left">
              <div className="news-detail_box_left_img">
                <img src="/static/images/news.png" alt="" />
              </div>
              <div className="news-detail_box_left_content">
                <div className="news-detail_box_left_content_date">
                  <i class="fa fa-calendar"></i>
                  <span>20 October, 2019</span>
                </div>
                <div className="news-detail_box_left_content_title">
                  Glass structures such as greenhouses or outdoor frames provide
                  additional
                </div>
                <div className="news-detail_box_left_content_description">
                  Can be taken to give frost protection, from the simple ones
                  appropriate for smaller gardens to the elaborate coverings
                  used to protect valuable horticultural crops. The modern
                  greenhouse is usually a glass- or plastic-enclosed framed
                  structure that is used for the production of fruits,
                  vegetables, flowers, and any other plants that require special
                  conditions of temperature. The basic structural forms are the
                  span-type greenhouse, which has a double-sloped, or A-shaped,
                  roof, and the lean-to greenhouse, which has only one roof
                  slope and leans against the side of a building. Two or more
                  span-type greenhouses are sometimes joined side by side so
                  that they have fewer external walls, and heating costs are
                  consequently less. A greenhouse has a large expanse of glazing
                  on its sides and roof so that the plants are exposed to
                  natural light for much of the day. Glass has been the
                  traditional glazing material, but plastic films, such as
                  polyethylene or polyvinyl, and fibreglass are also common. The
                  framing of the structure is made of aluminum, galvanized
                  steel, or such woods as redwood, cedar, or cypress. A
                  greenhouse is heated partly by the rays of the Sun and partly
                  by artificial means, such as circulating steam, hot water, or
                  hot air. Because a greenhouse can become too hot as well as
                  too cold, some type of ventilating system is also needed; this
                  usually consists of roof openings, which can be operated
                  mechanically or automatically, and end-wall openings, through
                  which electric fans draw air and circulate
                  <img src="/static/images/commercial_bg_01.png" alt="" />
                  <p>
                    mechanically or automatically, and end-wall openings,
                    through which electric fans draw air and circulate usually
                    consists of roof openings, which can be operated
                    mechanically or automatically, and end-wall openings,
                    through which electric fans draw air and circulate
                  </p>
                </div>
              </div>
            </div>
            <div className="news-detail_box_right">
              <div className="news-detail_box_right_title">
                <p>MOST READ</p>
              </div>
              <div className="news-detail_box_right_container">
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
              </div>
              <div className="news-detail_box_right_tags">
                <div className="news-detail_box_right_tags_title">
                  <p>TAGS</p>
                </div>
                <div className="news-detail_box_right_tags_container">
                  <Tags />
                  <Tags />
                  <Tags />
                  <Tags />
                  <Tags />
                  <Tags />
                  <Tags />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailNewsBox;
