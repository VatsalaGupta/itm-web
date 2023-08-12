import React from 'react'
import img10 from '../assets/1_1_1.jpg'
import img20 from '../assets/2_2_2.jpg'
import img30 from '../assets/3_3_3.jpg'
import img40 from '../assets/4_4_4.jpg'
import img50 from '../assets/5_5_5.jpg'
import img60 from '../assets/6_6_6.jpg'
import Carousel from 'nuka-carousel'
import './day.css'
function Day() {
  return (
    <div>
        <h1 className='text-center m-12 font-semibold decoration-solid text-blue'>Azadi Ka Amrit Mahotsav</h1>
      <Carousel
            defaultControlsConfig={{ nextButtonText: ">", prevButtonText: "<" }}
            autoplay={true}
            autoplayInterval={6000}
            wrapAround={true}
            dragging={true}
            cellAlign="center"
            slidesToShow={window.innerWidth > 768 ? 2 : 1} 
            className="px-12"
          >
            <div className='img_div'><img src={img10} alt='' className='img1'/> </div>
            <div className='img_div'><img src={img20} alt='' className='img1'/> </div>
            <div className='img_div'><img src={img30} alt='' className='img1'/> </div>
            <div className='img_div'><img src={img40 } alt='' className='img1'/> </div>
            <div className='img_div'><img src={img50} alt='' className='img1'/> </div>
            <div className='img_div'><img src={img60} alt='' className='img1'/> </div>
          
            
            </Carousel>
    </div>
  )
}

export default Day
