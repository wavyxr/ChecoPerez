import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Sliders = ({Imagen1, Imagen2, Imagen3,Imagen4,Imagen5}) => {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };
    return (
      
    <>
        <Slider {...sliderSettings} className="rounded-xl">
              <div>
                <img
                  src={Imagen1}
                  alt="imagen 1"
                  className="h-full mx-auto  object-cover"
                />
              </div>
              <div>
                <img
                  src={Imagen2}
                  alt="imagen 2"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <img
                  src={Imagen3}
                  alt="imagen 3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <img
                  src={Imagen4}
                  alt="imagen 4"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <img
                  src={Imagen5}
                  alt="imagen 5"
                  className="h-full w-full object-cover"
                />
              </div>
            </Slider>
    
    </>
  )
}

export default Sliders