import React from 'react' 
import style from './MenuList.module.scss';
import { FaMapMarkerAlt,FaUserCircle,FaBell,FaShoppingCart } from "react-icons/fa";


export default function MenuList() {
  return (
    <div className={style.navMenu}>  
        <div className={style.navMenu__row}>   
            <div className={style.navMenu__row_location }>
                <FaMapMarkerAlt className={style.icon_location}/>
                <a href="#"> 
                    <span>Enviar a</span>
                    <span>Buenos Aires 1826</span>
                </a>
            </div> 

            <div className={style.navMenu__choices}> 
                <li className={style.navMenu__choices_item }>
                    <button>
                        Categorías 
                    </button>
                </li>
                <li className={style.navMenu__choices_item }>
                    <a href="#">
                        Ofertas
                    </a>  
                </li>
                <li className={style.navMenu__choices_item }>
                    <a href="#">
                        Historial
                    </a>  
                </li>
                <li className={style.navMenu__choices_item }>
                    <a href="#">
                        Supermercado
                    </a>  
                </li>
                <li className={style.navMenu__choices_item }>
                    <a href="#">
                        Moda
                    </a>  
                </li>
                <li className={style.navMenu__choices_item }>
                    <a href="#">
                        Vender
                    </a>  
                </li>
                <li className={style.navMenu__choices_item }>
                    <a href="#">
                        Ayuda
                    </a>  
                </li>
            </div>

            <ul className={style.navMenu_user}> 
                <button><FaUserCircle/> Usuario</button>
                <a href="#">Mis compras</a>
                <button>Favoritos</button> 
                <FaBell/>
                <FaShoppingCart/>
            </ul>
        </div>
    </div>
  );
};
