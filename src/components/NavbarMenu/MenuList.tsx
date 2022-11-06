import React from 'react'
import style from "./MenuList.module.scss";
import { FaMapMarkerAlt, FaUserCircle, FaBell, FaShoppingCart } from "react-icons/fa";
import { createCss } from '../../../utils/createCss';
const css = createCss(style);

export default function MenuList() {
    return (
        <div className={css('navmenu')}>
            <div>
                <div className={css('navmenu__envios')}>
                    <FaMapMarkerAlt className={css('navmenu__envios--logo')}
                    />
                    <a href="" className='navmenu__envios--anchor'>
                        <span>Enviar a</span>
                        <span>Buenos Aires 1826</span>
                    </a>
                </div>

                <div className={css('navmenu__choices')} >
                    <li >
                        <button>
                            Categorías
                        </button>
                    </li>
                    <li >
                        <a href="#">
                            Ofertas
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            Historial
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            Supermercado
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            Moda
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            Vender
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            Ayuda
                        </a>
                    </li>
                </div>

                <div className={css('navmenu__user')}>
                    <div><FaUserCircle /> Usuario</div>
                    <a href="#">Mis compras</a>
                    <div>Favoritos</div>
                    <FaBell />
                    <FaShoppingCart />
                </div>
            </div>
        </div >
    );
};
