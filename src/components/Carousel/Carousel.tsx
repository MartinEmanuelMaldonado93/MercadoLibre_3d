import React from "react";
import style from './Carousel.module.scss';
import Slider from 'react-slick';
import "@gs/vendor_slick/slick.scss";
import "@gs/vendor_slick/slick-theme.scss";
import slide01 from "@assets/images/slides/slide01.PNG"
import slide02 from "@assets/images/slides/slide02.PNG"
import slide03 from "@assets/images/slides/slide03.PNG"
import slide04 from "@assets/images/slides/slide04.PNG"
import { createCss } from "@utils";
const css = createCss(style);

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className={css("slider")}>
      <Slider {...settings}>
        <div id='slide01'>
          <img loading="lazy" src={slide01} alt="slide img" />
        </div>
        <div id='slide02'>
          <img loading="lazy" src={slide02} alt="slide img" />
        </div>
        <div id='slide03'>
          <img loading="lazy" src={slide03} alt="slide img" />
        </div>
        <div id='slide04'>
          <img loading="lazy" src={slide04} alt="slide img" />
        </div>
      </Slider>
    </div>
  )
}
