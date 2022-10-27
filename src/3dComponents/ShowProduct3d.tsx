import React, { useState } from 'react';
// import '../styles/Global.scss';
import '../styles/components3d_scss/ShowProduct3d.scss';
// Components
import NavBarMenu from '../components/NavBarMenu';
import CanvasProduct from '../components/CanvasProduct';
import { FaShippingFast, FaStar, FaUndo } from 'react-icons/fa';

const enviroments = [
  'royal_esplanade_1k.hdr',
  'hdrs/autumn_forest_04_1k.hdr',
  'hdrs/ehingen_hillside_1k.hdr',
  'hdrs/park_parking_1k.hdr',
  'hdrs/provence_studio_1k.hdr'];

interface props {
  children: React.ReactNode,
  nextPage: string,
}

function ShowProduct3d({ children, nextPage }: props) {

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [option, setOption] = useState<number>(0);

  const handleOnChange = () => {
    console.log("click !👮‍♂️");
    setIsChecked(!isChecked);
  };

  return (
    <>
      <NavBarMenu />
      <div className='product'>
        <div className='canvas'>
          <CanvasProduct activarfondo={isChecked}
            fondo={enviroments[option]} >
            {children}
          </CanvasProduct>

          <div className="canvas__controls">
            <input
              className="canvas__controls__input"
              id="controls__input"
              type="checkbox"
              onClick={handleOnChange} />

            <div className="canvas__controls__checkbox"
              id="controls__checkbox">
              <span className='checkbox__activar-fondo'>
                Activar fondo
              </span>
              <label
                className='checkbox__label'
                id='checkbox__label'
                htmlFor='controls__input'></label>
            </div>

            <div id="controls__options" className='canvas__controls__options' >
              <div className="options__option" onClick={() => setOption(0)}>Shopping Center</div>
              <div className="options__option" onClick={() => setOption(1)}>Temporada de Otoño</div>
              <div className="options__option" onClick={() => setOption(2)}>Colinas soleadas</div>
              <div className="options__option" onClick={() => setOption(3)}>Parque Campestre</div>
              <div className="options__option" onClick={() => setOption(4)}>Estudio Fotografía</div>
            </div>
          </div>

        </div>
        <div className='other-products'>
          {/* CardPricesssssss */}
          {/* Características */}
          {/* Descripcion */}
          {/* preguntas y respuestas  */}
          {/* PREGUNTAS */}
          {/* OPINIONES */}
        </div>

        <aside className='aside'>
          <div className="nuevo-vendido">Nuevo | 232.999 vendidos</div>
          <div className='title'>Apple iPhone 12 Pro Max (256GB) - Perla </div>
          <div className="stars">
            <span>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </span>
            45 opiniones</div>
          <div className="mas-vendido">
            <span id='span'>MÁS VENDIDO</span>1° en Smarthphones</div>
          <div className="precio">$256.511
            <span>Pagá en cuotas</span></div>
          <div className="envios">
            <span>Llega gratis mañana
              <FaShippingFast />
            </span>
            Ver formas de entrega
            <span>Devolución gratis
              <FaUndo />
            </span>
            Conocer más
          </div>
          <div className="ultima-disponible"></div>
          <div className="compra">
            <div className="btn-comprar">
              Comprar Ahora
            </div>
            <div className="btn-carrito">
              Agregar al Carrito
            </div>

          </div>
          {/* informacion al vendedor */}

        </aside>
      </div>

      <footer className='footer'>
        <h6>**Disclaimer**
          Demo ficticia sin ninguna funcionalidad, solo el único propósito de fomentar nuevas ideas
          y productos dentro de la comunidad web**
        </h6>
      </footer>
    </>
  );
}

export default ShowProduct3d;