import React from "react";
import style from "./MenuList.module.scss";
import {
  FaMapMarkerAlt,
  FaUserCircle,
  FaBell,
  FaShoppingCart,
} from "react-icons/fa";
import { createCss } from "@utils";
const css = createCss(style);

export default function MenuList() {
  return (
    <div className={css("navmenu")}>
      <div className={css("navmenu__shipping")}>
        <FaMapMarkerAlt className={css("navmenu__shipping--logo")} />
        <div className={css("navmenu__shipping--anchor")}>
          <span>Enviar a</span>
          <span>Buenos Aires 1826</span>
        </div>
      </div>
      <div className={css("navmenu__categories")}>
        <div>Categorías</div>
        <div>Ofertas</div>
        <div>Historial</div>
        <div>Supermercado</div>
        <div>Moda</div>
        <div>Vender</div>
        <div>Ayuda</div>
      </div>
      <div className={css("navmenu__user")}>
        <div>
          <FaUserCircle />
          <span>Usuario</span>
        </div>
        <div>Mis compras</div>
        <div>Favoritos</div>
        <FaBell />
        <FaShoppingCart />
      </div>
    </div>
  );
}
