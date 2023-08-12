import React from "react";
import department from "../assets/department.jpg";
import './depart.css'
import depart1 from '../assets/depart1.JPG'
import depart2 from '../assets/depart2.JPG'
import depart3 from '../assets/depart3.JPG'
import depart4 from '../assets/depart4.JPG'
import Carousel from 'nuka-carousel'
const Department = () => {
  return (
    <div>
      <p className="text-center underline my-10 text-4xl text-[#072a33] font-extrabold ">
        Departments
      </p>
      <div className="flex items-center justify-between mb-10 lg:mx-40 lg:flex-row flex-col mx-10">
        <p className="lg:w-[600px] mx-2">
          Department of Samhita Siddhnta & Samskruta was established in 2013,
          since then the department is growing and working for upliftment of
          Ayurveda. Vision To establish excellence in basic concepts explained
          in the Samhitas and to conduct outstanding research. Mission
          Empowering the students with the basic tools for approaching the
          science of Ayurveda in a structured manner, which shall enable them in
          understanding the contents of all the branches of Ayurveda and enable
          them to adopt it in their clinical practice. Objectives To educate the
          students to understand the fundamental concepts of Ayurveda And To
          make Samskruta as a speaking language in the campus.
        </p>
        <img
          src={department}
          className="rounded-lg"
          style={{ width: 500, height: 400 }}
        />
      </div>
      <h2 className="text-center underline my-10 text-4xl text-[#072a33] font-extrabold ">Our Department</h2>
      <Carousel
            defaultControlsConfig={{ nextButtonText: ">", prevButtonText: "<" }}
            autoplay={true}
            autoplayInterval={6000}
            wrapAround={true}
            dragging={true}
            cellAlign="center"
            slidesToShow={window.innerWidth > 768 ? 3 : 1} 
            className=""
          >
            
            <div className='department'><img src={depart1} alt='' className='depart_img'/></div>
            <div className='department'><img src={depart2} alt='' className='depart_img'/></div>
            <div className='department'><img src={depart3} alt='' className='depart_img'/></div>
            <div className='department'><img src={depart4} alt='' className='depart_img'/></div>
            
            </Carousel>
    </div>
  );
};

export default Department;
