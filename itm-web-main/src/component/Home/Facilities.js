import React from "react";
import "./Facilities.css";
import icon1 from "../../assets/icon_1.png";
import icon2 from "../../assets/icon_2.png";
import icon3 from "../../assets/icon_3.png";
import icon4 from "../../assets/icon_4.png";
import icon5 from "../../assets/icon_5.png";
import icon6 from "../../assets/icon_6.png";
import icon7 from "../../assets/icon_7.png";
import icon8 from "../../assets/icon_8.png";
function Facilities_itm() {
  return (
    <>
      <div className="facilities_itm">
        <p className="section_two_heading_sansk">Our Facilities</p>
        <div className="greenline_itm"></div>

        <div className="row_one_sansk">
          <div className="box1_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={icon1} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">
                State of the Art Infrastructure
              </p>
            </div>
          </div>
          <div className="box2_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={icon2} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Cosmopolitan Culture</p>
            </div>
          </div>
          <div className="box3_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={icon3} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Top Academicians</p>
            </div>
          </div>
          <div className="box4_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={icon4} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Premium Placements</p>
            </div>
          </div>
          <div className="box5_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={icon5} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Research & Innovation</p>
            </div>
          </div>

          <div className="box6_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={icon6} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">
               Herbal Garden
              </p>
            </div>
          </div>
          <div className="box7_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={icon7} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Pharmacy</p>
            </div>
          </div>
          <div className="box8_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={icon8} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">NCISM Approved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Facilities_itm;