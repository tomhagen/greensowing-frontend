import "./index.scss";
import React from "react";
import Link from "next/link";
import ReactWOW from "react-wow";

const Husbandry = () => {
  return (
    <React.Fragment>
      <div className="husbandry">
        <div className="husbandry_container">
          <ReactWOW animation="fadeInUp" duration="1.5s">
            <div className="husbandry_title">Crop Husbandry</div>
          </ReactWOW>
          <ReactWOW animation="fadeIn" duration="1.5s" delay="0.5s">
            <div className="husbandry_subtitle">Fertilizers</div>
            <div className="husbandry_table">
              <table>
                <tr>
                  <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                    stage of growth
                  </th>
                  <th>nitroge N</th>
                  <th>Total dissolved solids TDS</th>
                  <th> Electroconductivity ED</th>
                </tr>
                <tr>
                  <th>(ppm)</th>
                  <th>(ppm)</th>
                  <th>(mmhos)</th>
                </tr>
                <tr>
                  <td>Germination to first true leaf fully expanded</td>
                  <td>50</td>
                  <td>450-550</td>
                  <td>0.6-0.7</td>
                </tr>
                <tr>
                  <td>First true leaf to third true leaf fully expanded</td>
                  <td>50 - 75</td>
                  <td>550-600</td>
                  <td>0.6-0.7</td>
                </tr>
                <tr>
                  <td>Third leaf to transplant</td>
                  <td>75 - 100</td>
                  <td>600-800</td>
                  <td>0.7-0.9</td>
                </tr>
                <tr>
                  <td>Transplant to second cluster set</td>
                  <td>100 - 125</td>
                  <td>800-1,100</td>
                  <td>0.9-1.8</td>
                </tr>
                <tr>
                  <td>Second cluster to topping</td>
                  <td>125 - 200</td>
                  <td>1,100-1,600</td>
                  <td>1.8-2.2</td>
                </tr>
              </table>
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeIn" duration="1.5s" delay="1s">
            <div className="husbandry_subtitle">How to balance pH level ?</div>
            <div className="husbandry_subcontent">
              The optimum pH range for the nutrient solution is 5.8 to 6.2. If
              the pH of the solution is too high, caused by alkaline water, add
              an acid in small quantities to lower the pH to within this range.
              The choices of materials to use are sulfuric acid (H2SO4), nitric
              acid (HNO3), or phosphoric acid (H3PO4). Sulfuric acid, the least
              expensive, can be purchased from an auto supply store as battery
              acid. However, there is an advantage to using phosphoric or nitric
              acid, since they supply nutrients in addition to lowering the pH.
              (Phosphoric acid supplies phosphorus and nitric acid supplies
              nitrogen.) Although they are more expensive than sul- furic acid,
              they may be preferred for this reason. Phosphoric acid and nitric
              acid are inexpensive sources of these elements when compared to
              other fertilizers.
            </div>
            <div className="husbandry_subcontent">
              Handle all acids very carefully because they can cause injury.
              Nitric acid can be very hazardous. Phosphoric acid lowers pH more
              than the other two for a given volume. It is advisable to use
              these acids directly from the drum or con- tainer in which they
              are purchased so there is no risk involved while pouring them.
              Never use vinegar (acetic acid) or swimming pool acid (sodium
              bisulfate) to lower the pH.
            </div>
            <div className="husbandry_subtitle">Irrigation</div>
            <div className="husbandry_subcontent">
              Each watering should include fertilizer (see section on
              Fertility); therefore, the process is more appropriately referred
              to as “fertigation.” Most growers use from 8 to 12 waterings per
              day once plants are established. In a medium that drains extremely
              well, such as rice hulls, 12 or more waterings per day may be
              needed to keep plants from drying out between waterings. In pine
              bark, 8 to 12 waterings per day are usually adequate. The
              important point is that plants should receive enough water so they
              do not wilt. A wilting plant is not growing. If the permanent
              wilting point is reached because of a prolonged period without
              water, the growing point may be killed. To be certain
            </div>
            <div className="husbandry_btn">
              <div className="husbandry_btn_box">
                <Link href="#">
                  <a>our training course</a>
                </Link>
              </div>
            </div>
          </ReactWOW>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Husbandry;
