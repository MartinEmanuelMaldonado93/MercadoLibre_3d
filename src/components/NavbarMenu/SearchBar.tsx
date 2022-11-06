import React from "react";
import style from './SearchBar.module.scss';
import { FaSistrix } from "react-icons/fa";
import { createCss } from "../../../utils/createCss";
const css = createCss(style);

export default function SearchBar() {
  return (
    <div className={css("navbar")}>
      <div className={css('navbar__container')}
      >
        <img className={css("navbar__logo")}
          src="../images/logoMeli.png" alt="navbarlogo" />

        <form className={css("navbar__searchbar")}>
          <input type={'text'}
            placeholder={"Buscar productos, marcas y  más..."} />
          <span >
            <FaSistrix />
          </span>
        </form>

        <a className={css("navbar__banner")} href="">
          <img src="../images/disney1.png" alt="" />
          <p>
            Suscribite al nivel 6 por solo
            <span>
              $399
            </span>
          </p>
        </a>
      </div>
    </div>
  )
};
