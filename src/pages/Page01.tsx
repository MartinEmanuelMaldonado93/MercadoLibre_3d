import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Plane, SpotLight } from '@react-three/drei';
import { MathUtils } from 'three';
import CameraVintage from '../3dComponents/CameraVintage';

const canvasCss = { margin: 0, height: '90vh', width: '100vw', background: 'gray' };

export default function Page01() {
  return (
    <Canvas style={canvasCss} camera={{ position: [0, 6, 5] }}>
      <ambientLight intensity={1.4} />
      <CameraVintage scale={15} />
      <Environment background preset='studio' />
      <OrbitControls />
    </Canvas>

  );
}