import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh
    defaultMaterial_1: THREE.Mesh
  }
  materials: {
    Rosa_material: THREE.MeshStandardMaterial
    defaultMat_material: THREE.MeshStandardMaterial
  }
}

export default function Skull({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/models/skull/scene.gltf') as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0.02, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Rosa_material} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.defaultMat_material} />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload('/scene.gltf')
