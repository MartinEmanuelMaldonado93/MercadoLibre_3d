import React, { Suspense, useEffect, useRef, useState } from "react";
import style from "./BuyProduct3D.module.scss";
// Components
import { Navbar, Iphone13, SpinnerLoading } from "@components";
import { FaShippingFast, FaStar, FaUndo } from "react-icons/fa";
import { createCss } from "@utils";
import { Float, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import royalEsplanade from "@assets/hdrs/royal_esplanade_1k.hdr";
import autumForest from "@assets/hdrs/autumn_forest_04_1k.hdr";
import ehingen from "@assets/hdrs/ehingen_hillside_1k.hdr";
import parkParking from "@assets/hdrs/park_parking_1k.hdr";
import studio from "@assets/hdrs/provence_studio_1k.hdr";

const css = createCss(style);
const Enviroments = {
  1: royalEsplanade,
  2: autumForest,
  3: ehingen,
  4: parkParking,
  5: studio,
};
function BuyProduct3D() {
  const [activateBackground, setActivateBackground] = useState<boolean>(false);
  const [option, setOption] = useState<keyof typeof Enviroments>(1);
  const optionsRef = useRef<HTMLDivElement>();
  const toggleOpacity = useRef<Boolean>(true);

  const handleActivateBackground = () => {
    setActivateBackground((prev) => !prev);

    const divs = optionsRef.current.getElementsByTagName("div");
    for (let i = 0; i < divs.length; ++i) {
      const child = divs[i];
      child.style.transitionDelay = `0.${i + 1}s`;
      child.style.opacity = toggleOpacity.current ? "1" : "0";
    }
    
    toggleOpacity.current = !toggleOpacity.current;
  };

  return (
    <>
      <Navbar />
      <div className={css("product")}>
        <div className={css("scene")}>
          <div className={css("scene__canvas")}>
            <Suspense fallback={<SpinnerLoading />}>
              <Canvas
                className={css("scene__canvas")}
                camera={{
                  position: [0, 0, 5],
                  fov: 65,
                  near: 1,
                  far: 500,
                }}
                dpr={[1, 2]}
              >
                <ambientLight intensity={0.7} />
                <pointLight position={[-5, -5, -5]} intensity={4} />
                <pointLight position={[3, 3, -5]} />

                <Float
                  position={[0, -0.7, 0]}
                  rotation={[0.1, 0, 0]}
                  rotationIntensity={3}
                  floatIntensity={2}
                  speed={2}
                >
                  <Iphone13 />
                </Float>

                <Environment
                  ground
                  background={activateBackground}
                  files={Enviroments[option]}
                />
                <OrbitControls
                  minDistance={2}
                  maxDistance={16}
                  enableDamping={true}
                  enableZoom={true}
                  enablePan={false}
                />
              </Canvas>
            </Suspense>
          </div>
          <div className={css("scene__controls")}>
            <div
              className={css("scene__controls--input")}
              onClick={handleActivateBackground}
            >
              Activar fondo
            </div>
            <div ref={optionsRef} className={css("scene__controls--options")}>
              <div onClick={() => setOption(1)}>Shopping Center</div>
              <div onClick={() => setOption(2)}>Temporada de Otoño</div>
              <div onClick={() => setOption(3)}>Colinas soleadas</div>
              <div onClick={() => setOption(4)}>Parque Campestre</div>
              <div onClick={() => setOption(5)}>Estudio Fotografía</div>
            </div>
          </div>
        </div>
        {/* Características */}
        {/* Descripcion */}
        {/* preguntas y respuestas  */}
        {/* PREGUNTAS */}
        {/* OPINIONES */}
        {/* </div> */}
        <aside className={css("aside")}>
          <div className={css("aside__nuevo-vendido")}>
            Nuevo | 232.999 vendidos
          </div>
          <div className={css("aside__title")}>
            Apple iPhone 12 Pro Max (256GB) - Perla{" "}
          </div>
          <div className={css("aside__stars")}>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            45 opiniones
          </div>
          <div className={css("aside__mas-vendido")}>
            <span>MÁS VENDIDO</span> 1° en Smarthphones
          </div>
          <div className={css("aside__precio")}>
            $256.511<span>Pagá en cuotas</span>
          </div>
          <div className={css("aside__envios")}>
            <span>
              Llega gratis mañana
              <FaShippingFast />
            </span>
            Ver formas de entrega
            <span>
              Devolución gratis
              <FaUndo />
            </span>
            Conocer más
          </div>
          <div className={css("aside__btn-comprar")}>Comprar Ahora</div>
          <div className={css("aside__btn-carrito")}>Agregar al Carrito</div>
          {/* informacion al vendedor */}
        </aside>
      </div>
      <footer className={css("footer")}>
        <h6>
          **Disclaimer** Demo ficticia sin ninguna funcionalidad, solo el único
          propósito de fomentar nuevas ideas y productos dentro de la comunidad
          web**
        </h6>
      </footer>
    </>
  );
}

export default BuyProduct3D;
