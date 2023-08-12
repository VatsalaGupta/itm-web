import React from 'react'
import img1 from '../assets/1_1.jpg'
import img2 from '../assets/2_2.jpeg'
import img3 from '../assets/3_3.jpeg'
import img4 from '../assets/4_4.jpeg'
import img5 from '../assets/5_5.jpeg'
import img6 from '../assets/6_6.jpeg'
import img7 from '../assets/7_7.jpeg'
import img8 from '../assets/8_8.jpeg'
import img9 from '../assets/9_9.jpg'
import Carousel from 'nuka-carousel'
import './day.css'
function Day() {
  return (
    <div>
        <h1 className='text-center m-12 font-semibold decoration-solid text-blue'>Glims of Ayurveda Day</h1>
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
            <div><img src={img1} alt='' className='img'/> </div>
            <div><img src={img2} alt='' className='img'/> </div>
            <div><img src={img3} alt='' className='img'/> </div>
            <div><img src={img4 } alt='' className='img'/> </div>
            <div><img src={img5} alt='' className='img'/> </div>
            <div><img src={img6} alt='' className='img'/> </div>
            <div><img src={img7} alt='' className='img'/> </div>
            <div><img src={img8} alt='' className='img'/> </div>
            <div><img src={img9} alt='' className='img'/> </div>
          
            
            </Carousel>
    </div>
  )
}

export default Day
