import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <div className="contact_us_page">
        <h1 className="heading_contact">Contact Us</h1>

        <div class="container_contact">
          <div class="content_contact">
            <div class="left-side_contact">
              <div class="address_contact details_contact">
                <i class="fas fa-map-marker-alt"></i>
                <div class="topic_contact">Address</div>
                <div class="text-one_contact">
                  Chehari, Pharenda-Maharajganj Road,
                </div>
                <div class="text-two_contact">Maharjganj, 273303</div>
              </div>
              <div class="phone_contact details_contact">
                <i class="fas fa-phone-alt"></i>
                <div class="topic_contact">Phone</div>
                <div class="text-one_contact">+91 7881106480</div>
                {/* <div class="text-two_contact">+0096 3434 5678</div> */}
              </div>
              <div class="email details_contact">
                <i class="fas fa-envelope"></i>
                <div class="topic_contact">Email</div>
                <div class="text-one_contact">
                  itmayurvediccollege@gmail.com
                </div>
                {/* <div class="text-two_contact">info.codinglab@gmail.com</div> */}
              </div>
            </div>
            <div class="right-side_contact">
              <div class="topic-text_contact">Send us a message</div>
              <p>
                If you have any work from Us or any query you can send me message from here. It's my pleasure
                to help you.
              </p>
              <form action="#">
                <div class="input-box_contact">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div class="input-box_contact">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <textarea
                  class="input-box_contact message-box_contact textarea_contact"
                  rows="4"
                  cols="50"
                  placeholder="Enter your message"
                ></textarea>
                <div class="button_contact">
                  <input type="button" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="map_contact_box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.166269913059!2d83.4319115753252!3d27.11957247652445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996ae08d08e9159%3A0x426445c618d189d9!2sITM%20Group%20of%20Institutions%2C%20Maharajganj!5e0!3m2!1sen!2sin!4v1690536235937!5m2!1sen!2sin"
            className="map_contact"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactUs;