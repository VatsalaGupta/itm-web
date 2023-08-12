import React from "react";
import "./courses.css";
import { GrFormNext } from "react-icons/gr";

function Courses() {
  return (
    <>
      <div className="courses_main">
        <div className="first_section">
          <div className="inner_box">
            <p className="first_text">
              <a href="" className="second_text">
                Home &nbsp;
              </a>
              / Find Programme
            </p>
            <p className="third_text">ALL PROGRAMME</p>
          </div>
        </div>

        <div className="second_section">
          <div className="left_course">
            <p className="fourth_text">Programmes by Type</p>
            <div className="medical_box">
              <GrFormNext></GrFormNext> <a href="#" className="medical_link">   Medical
              </a>
              
              
            </div>
          </div>

          <div className="right_course">
            <div className="fifth_text">
              Programmes Offered by the
              <span className="college_name"> ITM College</span>
            </div>

            <div className="bams_box">B.A.M.S.</div>

            <p className="course_fees">
              Course Fees: 204600 / Year <br></br>
              Hostel Fees: 65000 / 2 Sheeter Non-AC room
              <span className="course_duration"></span>(Duration: 4.5 +1 years){" "}
            </p>

            <div className="sixth_text">ABOUT THIS PROGRAMME</div>

            <div className="main_text_box">
              <p className="first_line main_line">
                B.A.M.S. intake Capacity - 100 seats.
              </p>

              <p className="second_line main_line">
                Bachelor of Ayurveda Medical & Surgery (BAMS) is a Four and Half
                Year Course undergraduate program that offers an integrated
                course that covers a wide range of subjects of traditional
                Ayurveda and modern medical systems. The five and half a
                year-long course also includes the one-year mandatory
                internship.
              </p>

              <p className="third_line main_line">
                BAMS covers a wide range of subjects such as Ayurved Samhita
                Siddhaint, Rachana Sharir, Kriya Sharir, Dravyaguna, Rasa
                Shastra evam Bhaisjya Kalpana, Rog Nidan evam Vikriti Vigyan,
                Swasthvrutta evam Yoga, Agad Tantra evam Vyavharayurveda Vidhi
                Vaidyak, Prasuti Tantra evam Stri Roga, Kaumarbhiritya
                (Balroga), Kayachikitsa, Panch Karma, Shalya Tantra, Shalakya
                Tantra with Herbal Garden and In Hospital there are 07 OPD and
                06 IPD in different clinical Departments.
              </p>
              <p className="fourth_line main_line">
                Students aspiring for a career in Bachelor of Ayurveda must have
                great power of concentration and determination as the courses
                include a lot of reading of both modern science and ancient
                Ayurveda texts.
              </p>
              <p className="fifth_line main_line">
                Ayurveda is gaining a lot of popularity not only in India but in
                the Western World because of natural healing properties with
                minimum side-effects as these medicines are prepared from
                natural herbs, vegetables, and plants.
              </p>
              <p className="sixth_line main_line">BAMS Course Highlights: -</p>
              <p className="seventh_line main_line">
                Check out the major BAMS course highlights here
              </p>

              <table className="course_table" border="1">
                <tr>
                  <td>Level</td>
                  <td>Undergraduate</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>5 and 1/2 Years Course with 1 Year</td>
                </tr>
                <tr>
                  <td>Minimum Academic Requirement</td>
                  <td>10+2 (Science Stream)</td>
                </tr>
                <tr>
                  <td>Subject Requirement</td>
                  <td>Physics, Chemistry and Biology</td>
                </tr>
                <tr>
                  <td>Minimum Aggregate Score Requirement</td>
                  <td>50% or More</td>
                </tr>
                <tr>
                  <td>Exam Type</td>
                  <td>Annual</td>
                </tr>
                <tr>
                  <td>Admission/ Selection Process</td>
                  <td>NEET Entrance Exam Based</td>
                </tr>
                <tr>
                  <td>Exams Accepted</td>
                  <td>NEET</td>
                </tr>
                <tr>
                  <td>Average Course Fee</td>
                  <td>204600 Per Anum</td>
                </tr>
                <tr>
                  <td>Job Roles</td>
                  <td>
                    Medical Officer, Resident Medical Officer, Resident Surgical
                    Officer, Emergency Medical Officer, Jr. Clinical Trial
                    Coordinator in Government and Private Sector.{" "}
                  </td>
                </tr>
                <tr>
                  <td>Areas of Employment</td>
                  <td>
                    Govt. / Pvt. Hospitals, Nursing Homes, Ayurvedic Clinics,
                    Own Business, Wellness Centers, etc
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;