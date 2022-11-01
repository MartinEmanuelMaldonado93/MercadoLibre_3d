import React, { Suspense } from 'react';
import {Canvas  } from '@react-three/fiber';
import {Environment,OrbitControls, Float } from "@react-three/drei";  
import Caterpillar from '../../3dComponents/Caterpillar';


interface props {
  fondo:string,
  activarfondo:boolean,
}

/* @params Camara vintage */
export default function CanvasProduct01( {fondo,activarfondo}:props ) {
  return (
    <Canvas id='MyCanvas' 
    style={{ 
    border:'1px dotted lightgray', 
    borderRadius:'1rem',
    background:'white',
    position:'relative', 
    aspectRatio:'16:9', 
    height:`450px`,width:`100%`, cursor:'grab' }}  
    camera={{ position: [8, 2, -3], fov: 75,near:1,far:100} }  >

        <ambientLight intensity={0.7} />
        <pointLight position={[-5,-5,-5]} intensity={4} />
        <pointLight position={[ 3, 3, -5]}/>

        <Suspense  >    
          {/* <CamaraVintage /> */}
          <Caterpillar />

        </Suspense> 

        <Environment ground background={activarfondo} files={fondo} /> 
        <OrbitControls 
        minDistance={2} 
        maxDistance={16} 
        enableDamping={true}
        enableZoom={true} 
        enablePan={false} 
        />
    </Canvas>
  )
} 
