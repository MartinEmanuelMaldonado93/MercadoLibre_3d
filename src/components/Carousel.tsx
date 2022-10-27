import React  from "react";
import style from '../styles/components_scss/Carousel.module.scss';


export default function Carousel( ) {
  return (  
      <div className={style.slider}> 
        <div className={style.slider__items} > 
          <li key={'01'} id='slide01'> 
              <img className={style.img__banner} src='../images/slides/slide01.PNG' alt="slide img"/> 
          </li>
          <li key={'02'} id='slide02'> 
              <img className={style.img__banner} src='../images/slides/slide02.PNG' alt="slide img"/> 
          </li> 
          <li key={'03'} id='slide03'> 
              <img className={style.img__banner} src='../images/slides/slide03.PNG' alt="slide img"/> 
          </li> 
          <li key={'04'} id='slide04'> 
              <img className={style.img__banner} src='../images/slides/slide04.PNG' alt="slide img"/> 
          </li>  
        </div> 
         
    </div>
  )
}
