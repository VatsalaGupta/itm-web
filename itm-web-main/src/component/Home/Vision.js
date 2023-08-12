import React from "react";
import "./Vision.css";
import Vision from "../../assets/Vision.jpeg";

function Vision_itm() {
  return (
    <>
      <div className="vision_mission">
        <div className="left_vision">
          <div className="heading_vision">VISION AND MISSION</div>
          <div className="text_vision">
            <ol className="list_vision">
              <h2 className="subheading_vision">
                The Aims and objectives of the National Commission for Indian
                System of Medicine are to -
              </h2>
              <li>
                To promote the growth and development in the field of Ayurveda.
              </li>
              <li>To produce graduates ih the discipline of Ayurveda.</li>
              <li>
                To provide medical care facilities through the traditional
                Ayurvedic system of medicine to the suffering humanity. To
                provide and assist in providing services and facilities of the
                highest order to the human society through the Ayurvedic system
                of Medicine.
              </li>
              <li>
                To conduct experiments and develop patterns of teaching in under
                graduate education in Ayurveda.
              </li>
              <li>
                The chief objective if this Hospital and Institute is to provide
                adequate care.
              </li>
              <li>Treatment and education to its patients and student.</li>
            </ol>
          </div>
        </div>
        <div className="right_vision">
          <img src={Vision} className="image_vision" />
        </div>
      </div>
    </>
  );
}

export default Vision_itm;