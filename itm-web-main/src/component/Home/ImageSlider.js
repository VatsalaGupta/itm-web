import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings} style={{height:"100%",width:"100%"}}>
            
                {images.map((image, index) => (
                    
                    <div key={index}>
                    <div className="absolute  p-96  px-6 ml-6">

                    <h1 className="text-Black font-bold text-6xl p-0" tyle={{ fontSize: "30px" }}>ITM Group Of Institution:<br/>Transforming Ayurvedic<br/> Education
                    
                   </h1>
                    <p className="">
                        Welcome to the official website of ITM Group Of Institution, Maharajganj, showcasing our <br></br>
                        esteemed Ayurvedic college, known for its comprehensive BAMS program integrating traditional <br></br>
                        healing and modern medical advancements, with a commitment to excellence in education and <br></br>
                        holistic healing.
                    </p>
                </div>
                        <img src={image} alt={`Slide ${index + 1}`}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;