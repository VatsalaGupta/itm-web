import React from "react";
import "./hero.css";
import Hero1 from "../../assets/Hero1.jpeg";
import Hero2 from "../../assets/Hero2.jpeg";
import Hero3 from "../../assets/Hero3.jpeg";

import Carousel from "nuka-carousel";
function Hero_ITM() {
  return (
    <div>
      <div className="hero_itm">
        <Carousel
          defaultControlsConfig={{ nextButtonText: ">", prevButtonText: "<" }}
          autoplay={true}
          autoplayInterval={6000}
          wrapAround={true}
          dragging={true}
          cellAlign="center"
          slidesToShow={window.innerWidth > 1768 ? 3 : 1}
          className=""
        >
          <div className="department_itm department_itm1">
            <img src={Hero2} alt="" className="department_img" />
            <div className="textarea_itm">
              <p className="first_heading_itm">
                ITM Ayurvedic Medical College and Hospital: 
              </p>
              <p className="second_heading_itm">
                Welcome to the official website of  ITM Ayurvedic Medical College and Hospital,
                Maharajganj, showcasing our esteemed Ayurvedic college, known
                for its comprehensive BAMS program integrating traditional
                healing and modern medical advancements, with a commitment to
                excellence in education and holistic healing.
              </p>
            </div>
            <div className="form_main_sansk">
              <div className="heading_form_section1">
                Get Started On Your Journey
              </div>
              <div className="subheading_form_section1">Admission Query 👇</div>

              <div class="container">
                <input
                  type="text"
                  className="form_details1_section1 form_section1_details "
                  placeholder="Full Name"
                  // name="entry.425690120"
                  required
                />
                <input
                  type="email"
                  className="form_details2_section1 form_section1_details "
                  placeholder="Email"
                  // name="entry.8440419"
                  required
                />
                <input
                  type="number"
                  className="form_details3_section1 form_section1_details "
                  placeholder="Mobile Number"
                  // name="entry.1978827230"
                  required
                />
                <select
                  name=""
                  id=""
                  className="form_details4_section1 form_section1_details "
                >
                  <option value="" selected disabled>
                    Select Course
                  </option>
                  <option value="">BAMS</option>
                 
                </select>
                <input
                  type="number"
                  // name="entry.1377876186"
                  className="form_details5_section1 form_section1_details form-control"
                  placeholder="NEET Score"
                  required
                />
                <button
                  className="reserve_seat_button btn bnn-primary"
                  type="submit"
                  // disabled
                  // target="_blank"
                  // rel="noreferrer noopener"
                >
                  <a href="">Reserve A seat for me</a>
                </button>
              </div>
            </div>
          </div> 
          <div className="department_itm department_itm2">
            <img src={Hero3} alt="" className="department_img" />
            <div className="textarea_itm">
              <p className="first_heading_itm">
              ITM Ayurvedic Medical College and Hospital: 
              </p>
              <p className="second_heading_itm">
                Welcome to the official website of  ITM Ayurvedic Medical College and Hospital,
                Maharajganj, showcasing our esteemed Ayurvedic college, known
                for its comprehensive BAMS program integrating traditional
                healing and modern medical advancements, with a commitment to
                excellence in education and holistic healing.
              </p>
            </div>
            <div className="form_main_sansk">
              <div className="heading_form_section1">
                Get Started On Your Journey
              </div>
              <div className="subheading_form_section1">Admission Query 👇</div>

              <div class="container">
                <input
                  type="text"
                  className="form_details1_section1 form_section1_details "
                  placeholder="Full Name"
                  // name="entry.425690120"
                  required
                />
                <input
                  type="email"
                  className="form_details2_section1 form_section1_details "
                  placeholder="Email"
                  // name="entry.8440419"
                  required
                />
                <input
                  type="number"
                  className="form_details3_section1 form_section1_details "
                  placeholder="Mobile Number"
                  // name="entry.1978827230"
                  required
                />
                <select
                  name=""
                  id=""
                  className="form_details4_section1 form_section1_details "
                >
                  <option value="" selected disabled>
                    Select Course
                  </option>
                  <option value="">xyz</option>
                  <option value="">xyz</option>
                  <option value="">xyz</option>
                </select>
                <input
                  type="number"
                  // name="entry.1377876186"
                  className="form_details5_section1 form_section1_details form-control"
                  placeholder="NEET Score"
                  required
                />
                <button
                  className="reserve_seat_button btn bnn-primary"
                  type="submit"
                  // disabled
                  // target="_blank"
                  // rel="noreferrer noopener"
                >
                  <a href="">Reserve A seat for me</a>
                </button>
              </div>
            </div>
          </div>
          <div className="department_itm department_itm3">
            <img src={Hero1} alt="" className="department_img " />
            <div className="textarea_itm">
              <p className="first_heading_itm">
              ITM Ayurvedic Medical College and Hospital: 
              </p>
              <p className="second_heading_itm">
                Welcome to the official website of  ITM Ayurvedic Medical College and Hospital,
                Maharajganj, showcasing our esteemed Ayurvedic college, known
                for its comprehensive BAMS program integrating traditional
                healing and modern medical advancements, with a commitment to
                excellence in education and holistic healing.
              </p>
            </div>
            <div className="form_main_sansk">
              <div className="heading_form_section1">
                Get Started On Your Journey
              </div>
              <div className="subheading_form_section1">Admission Query 👇</div>

              <div class="container">
                <input
                  type="text"
                  className="form_details1_section1 form_section1_details "
                  placeholder="Full Name"
                  // name="entry.425690120"
                  required
                />
                <input
                  type="email"
                  className="form_details2_section1 form_section1_details "
                  placeholder="Email"
                  // name="entry.8440419"
                  required
                />
                <input
                  type="number"
                  className="form_details3_section1 form_section1_details "
                  placeholder="Mobile Number"
                  // name="entry.1978827230"
                  required
                />
                <select
                  name=""
                  id=""
                  className="form_details4_section1 form_section1_details "
                >
                  <option value="" selected disabled>
                    Select Course
                  </option>
                  <option value="">xyz</option>
                  <option value="">xyz</option>
                  <option value="">xyz</option>
                </select>
                <input
                  type="number"
                  // name="entry.1377876186"
                  className="form_details5_section1 form_section1_details form-control"
                  placeholder="NEET Score"
                  required
                />
                <button
                  className="reserve_seat_button btn bnn-primary"
                  type="submit"
                  // disabled
                  // target="_blank"
                  // rel="noreferrer noopener"
                >
                  <a href="">Reserve A seat for me</a>
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero_ITM;