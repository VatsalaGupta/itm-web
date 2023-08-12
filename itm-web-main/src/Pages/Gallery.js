import React, { useEffect } from "react";
import "./gallery.css";
import campus1 from "../assets/campus1.png";
import campus2 from "../assets/campus2.png";
import campus3 from "../assets/campus3.png";
import campus4 from "../assets/campus4.png";
import campus5 from "../assets/campus5.png";
import campus6 from "../assets/campus6.png";
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";
import gallery7 from "../assets/gallery7.jpeg";
import gallery8 from "../assets/gallery8.jpeg";
import Lib2 from '../assets/lib2.jpg'
import lab1 from '../assets/lab1.jpeg'
import gallery12 from '../assets/gallery12.jpeg'
import gym from '../assets/gym.jpg'
import Carousel from 'nuka-carousel'
function Gallery() {
  return (
    <>
      <div className="gallery_main">
        <h1>Gallery Section</h1>
        <div class="grid-container">
          <div>
            <img class="grid-item grid-item-1" src={gallery1} alt="" />
            <p>PanchKarma Center</p>
          </div>
          <div>
            <img class="grid-item grid-item-2" src={gallery2} alt="" />
            <p>Reception Area</p>
          </div>
          <div>
            <img class="grid-item grid-item-3" src={gallery3} alt="" />
            <p>Bus Services</p>
          </div>
          <div>
            <img class="grid-item grid-item-4" src={gallery4} alt="" />
            <p>Lab Facilities</p>
          </div>
          <div>
            <img class="grid-item grid-item-5" src={gallery5} alt="" />
            <p>Laboratory</p>
          </div>
          <div>
            <img class="grid-item grid-item-6" src={gallery6} alt="" />
            <p>Ayurveda Building</p>
          </div>
          <div>
            <img class="grid-item grid-item-7" src={gallery7} alt="" />
            <p>Play Ground</p>
          </div>
          <div>
            <img class="grid-item grid-item-8" src={gallery8} alt="" />
            <p>Main Gate </p>
          </div>
          <div>
            <img class="grid-item grid-item-9" src={campus5} alt="" />
            <p>100+ Bed availability</p>
          </div>
          <div>
            <img class="grid-item grid-item-10" src={campus6} alt="" />
            <p>Hospital</p>
          </div>
        </div>
        
      </div>
      <Carousel
            defaultControlsConfig={{ nextButtonText: ">", prevButtonText: "<" }}
            autoplay={true}
            autoplayInterval={6000}
            wrapAround={true}
            dragging={true}
            cellAlign="center"
            slidesToShow={window.innerWidth > 768 ? 3 : 1} 
            className="px-12"
          >
            <img src={Lib2} alt="" className="h-60 w-100% m-2 rounded-2xl border-2 border-red-600"/>
            <img src={lab1} alt="" className="h-60 w-100% m-2 rounded-2xl border-2 border-red-600"/>
            <img src={gallery12} alt="" className="h-60 w-100% m-2 rounded-2xl border-2 border-red-600"/>
            <img src={gym} alt="" className="h-60 w-100% m-2 rounded-2xl border-2 border-red-600" />
          
            
            </Carousel>
            
    </>
  );
}

export default Gallery;