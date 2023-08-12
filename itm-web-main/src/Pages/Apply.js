import React from 'react'
import './apply.css'
function Apply() {
  return (
    <div className='apply_form'>
      <div className="form_main_sansk1">
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
  )
}

export default Apply
