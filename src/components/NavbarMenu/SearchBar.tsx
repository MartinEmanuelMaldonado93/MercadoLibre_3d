import React from "react";
import style from './SearchBar.module.scss';
import { FaSistrix } from "react-icons/fa";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { createCss } from "@utils";
const css = createCss(style);

export default function SearchBar() {
  return (
    <div className={css("navbar")}>
      <div className={css('navbar__container')}>
        <img className={css("navbar__logo")}
          src="../logos/logoMeli.png" alt="navbar logo" />

        <div className={css("navbar__searchbar")}>
          <div className={css("navbar__searchbar--icon")}>
            <FaSistrix />
          </div>
          <input className={css('navbar__searchbar--input')} type={'text'} placeholder={"Buscar productos, marcas y  más..."} />
          <div className={css('navbar__searchbar--menu')}>
            <FiMenu />
            <FiShoppingCart />
          </div>
        </div>

        <a className={css("navbar__banner")} href="">
          <img src="../logos/disney1.png" alt="" />
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
