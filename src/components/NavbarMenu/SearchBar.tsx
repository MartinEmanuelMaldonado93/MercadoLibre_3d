import React from "react";
import style from "./SearchBar.module.scss";
import { FaSistrix } from "react-icons/fa";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { createCss } from "@utils";
import logoMeli from "@assets/logos/logoMeli.png";
import logoDisney from "@assets/logos/disney1.png";

const css = createCss(style);

export default function SearchBar() {
  return (
    <div className={css("searchbar")}>
      <img
        className={css("searchbar__meli-logo")}
        src={logoMeli}
        alt='meli logo'
      />
      <div className={css("searchbar__search")}>
        <div className={css("searchbar__search--icon")}>
          <FaSistrix />
        </div>
        <input
          className={css("searchbar__search--input")}
          type={"text"}
          placeholder={"Buscar productos, marcas y  más..."}
        />
        <div className={css("searchbar__search--menu")}>
          <FiMenu />
          <FiShoppingCart />
        </div>
      </div>
      <div className={css("searchbar__banner")}>
        <img src={logoDisney} alt='disney logo' />
        <p>
          Suscribite al nivel 6 por solo
          <span>$399</span>
        </p>
      </div>
    </div>
  );
}
