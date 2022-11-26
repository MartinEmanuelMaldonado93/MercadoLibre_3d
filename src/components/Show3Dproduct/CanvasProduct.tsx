import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Float } from "@react-three/drei";


interface backgroundProps {
  fondo: string,
  activarfondo: boolean,
  children: React.ReactNode,
}
function CanvasProduct({ fondo, activarfondo, children }: backgroundProps) {

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50, near: 0.1, far: 500 }} >

      <ambientLight intensity={0.7} />
      <pointLight position={[-5, -5, -5]} intensity={4} />
      <pointLight position={[3, 3, -5]} />

      <Suspense fallback={'loading...'}>
        <Float
          position={[0, -0.7, 0]}
          rotation={[0.1, 0, 0]}
          rotationIntensity={3}
          floatIntensity={2}
          speed={2} >

          {children}

        </Float>
      </Suspense>

      <Environment ground background={activarfondo} files={fondo} />
      <OrbitControls
        minDistance={2}
        maxDistance={16}
        enableDamping={true}
        enableZoom={true}
        enablePan={false} />
    </Canvas>
  );
}

export default CanvasProduct;