import React from "react";
import style from "./Banner3D.module.scss";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Sparkles } from "@react-three/drei";
import { Link } from "react-router-dom";
// Components
import Iphone13 from "../3Dmodels/Iphone13";
import MountainBike from "../3Dmodels/MountainBike";
import GamingChair1 from "../3Dmodels/GamingChair1";
import { Suspense } from "react";
import { createCss } from "@utils";
import SpinnerLoading from "../SpinerLoading/SpinnerLoading";
const css = createCss(style);

export default function Banner3D() {

  return (
    <div className={css("banner3D")}>
      <div className={css("banner3D__content")}>
        <div className={css("banner3D__title")}>
          <div className={css("banner3D__title--subtitle")}>
            <h4>Lo nuevo...</h4>
            <h1>EXPLORÁ TUS PRODUCTOS FAVORITOS EN 3D !</h1>
          </div>
          <Link
            className={css("banner3D__title--link")}
            style={{ textDecoration: "none", color: "white" }}
            to='buyproduct3d'
            onClick={() => window.scrollTo({ top: 0 })}
          >
            Ver más
          </Link>
        </div>

        <div className={css("banner3D__canvas")}>
          <Suspense fallback={<SpinnerLoading />}>
            <Canvas
              camera={{ position: [0, 0.5, 12], fov: 45, near: 0.1, far: 100 }}
              frameloop='demand'
              dpr={[1, 2]}
            >
              <ambientLight intensity={0.7} />
              <Sparkles
                size={14}
                noise={1}
                color={"white"}
                scale={6}
                count={60}
                speed={2.4}
              />
              <pointLight />
              <MountainBike
                position={[-0.3, -0.8, -2]}
                rotation={[0, 10.08, 0]}
                scale={1.5}
              />
              <GamingChair1
                position={[4, 1, 1.5]}
                rotation={[0, -0.8, -0.07]}
                scale={0.25}
              />
              <Iphone13 position={[1, 2, 1]} rotation={[0, 0, 0]} scale={3} />

              <Environment preset='forest' />
              <OrbitControls
                minDistance={10}
                maxDistance={15}
                enableDamping={true}
                enableZoom={true}
                enablePan={true}
              />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
