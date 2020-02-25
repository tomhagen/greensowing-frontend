import "./index.scss";
import React from "react";
import Link from "next/link";
import ReactWOW from "react-wow";

const GrowingMedia = () => {
  return (
    <React.Fragment>
      <div className="growing">
        <div className="growing_container">
          <div className="growing_box">
            <ReactWOW animation="fadeInUp" duration="1.5s">
              <div className="growing_box_title">Growing media</div>
            </ReactWOW>

            <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
              <div className="growing_box_subcontent">
                There are many types of growing system: NFT (nutrient film
                technique), PVC pipes, sand, ground culture (in the soil),
                troughs, rock wool slabs, and various types of aggregate media,
                peat moss and peat-lite mixes, perlite, rock wool aggregate,
                glass wool, pine bark, and many others.
              </div>
              <div className="growing_box_subcontent">
                In recent years, a wide range of soilless culture techniques
                have been developed and commercially introduced for intensive
                production of horticultural crops, particularly in greenhouses
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
              <div className="growing_box_subtitle">
                Choose the best variety:
              </div>
              <div className="growing_box_subcontent">
                - Size of fruit desired <br />- Disease resistance <br />-
                Aluminum profiles: designed according to MRS typical standard{" "}
                <br />- Lack of physiological problems, cracking, catfacing,
                blossom-end rot <br />- Yield uniformity of fruit size <br />-
                Market demand
              </div>
              <div className="growing_box_btn">
                <div className="growing_box_btn_box">
                  <Link href="/material/glass">
                    <a>view materials</a>
                  </Link>
                </div>
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GrowingMedia;
