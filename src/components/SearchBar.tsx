import React  from "react";
import style from './SearchBar.module.scss';
import { FaSistrix } from "react-icons/fa";


export default function SearchBar( ) {
  return ( 
  <div className={style.navbar}>  
    <nav className={style.navbar__boundaries}>
       
      <img className={style.navbar__logo} src="../images/logoMeli.png" alt="" />
       
      <form className={style.navbar__form_searchbar}> 
        <input type={'text'} 
          placeholder={"Buscar productos, marcas y  más..."}/>
        <div className={style.navbar__button_search} >
          <FaSistrix />   
        </div> 
      </form>

      <a className={style.navbar__banner} href="#">
        <img src="../images/disney1.png" alt="" />
        <p>
          Suscribite al nivel 6 por solo  
          <span>
            $399
          </span> 
        </p>
      </a>
    </nav>
  </div>
  )
};
