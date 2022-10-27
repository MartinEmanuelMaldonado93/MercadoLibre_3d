import React from 'react'
import style from '../styles/components_scss/CardMeta.module.scss';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Float, Sparkles } from "@react-three/drei";
import { Link } from "react-router-dom";
// Components 
import Iphone13 from '../3dComponents/Iphone13';
import MountainBike from '../3dComponents/MountainBike';
import GamingChair1 from '../3dComponents/GamingChair1'; 
import { Suspense } from 'react';
//performance={{ max: 0.3 }} gl={{ antialias: false }}
 
export default function CardMeta() {
  return (
    <div className={style.card_container}>

      <div className={style.title}>
        <div className={style.sub_title}>
          <h4 >Lo nuevo...</h4>
          <h1>EXPLORÁ TUS PRODUCTOS FAVORITOS EN 3D !</h1>
        </div>
        <button className={style.btn_cardmeta}>
          <Link style={{ textDecoration: 'none', color: 'white' }}
            to='Page00' target='_blank'>Ver más</Link>
        </button>
      </div>

      <div className={style.three_model} >
<Suspense>
        <Canvas camera={{ position: [0, 0.5, 12],
            fov: 45, near: 0.1, far: 100 }} >

          <ambientLight intensity={0.7} />

          <pointLight color={'red'} position={[0, 3, -5]} />
          <pointLight color={'blue'} position={[0, 2, 0]} />

          <Sparkles size={14} noise={1} color={'white'} scale={6} count={60} speed={1.4} />
          <Float speed={2} rotationIntensity={1} position={[0, -0.2, 0]} floatIntensity={1.2}>
            <MountainBike
              position={[-0.3, -0.8, -2]}
              rotation={[0, 10.08, 0]}
              scale={1.5} />
            <GamingChair1
              position={[4, 1, 1.5]}
              rotation={[0, -0.8, -0.07]}
              scale={0.25} />
          </Float>

          <Float position={[0, -0.7, 0]} speed={2} rotationIntensity={3} floatIntensity={3} >
            <Iphone13 position={[1, 2, 1]}
              rotation={[0, 0, 0]}
              scale={3} />
          </Float>

          <Environment preset='forest' />
          <OrbitControls
            minDistance={10}
            maxDistance={15}
            enableDamping={true}
            enableZoom={true}
            enablePan={true} />
        </Canvas>

</Suspense>
      </div>
    </div>
  )
}
