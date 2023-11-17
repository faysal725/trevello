import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardCarousel.css';

export default function CardCarousel({children, slidesShow=3, }) {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slidesShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      }

      
  return (
    <Slider {...settings}>
        {children}

    </Slider>
  )
}


