import React from "react";
import style from './Carousel.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createCss } from "../../../utils/createCss";
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
          <img loading="lazy" src='../images/slides/slide01.PNG' alt="slide img" />
        </div>
        <div id='slide02'>
          <img loading="lazy" src='../images/slides/slide02.PNG' alt="slide img" />
        </div>
        <div id='slide03'>
          <img loading="lazy" src='../images/slides/slide03.PNG' alt="slide img" />
        </div>
        <div id='slide04'>
          <img loading="lazy" src='../images/slides/slide04.PNG' alt="slide img" />
        </div>
      </Slider>
    </div>
  )
}
