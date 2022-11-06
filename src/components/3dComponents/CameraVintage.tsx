import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Camera_01_strap: THREE.Mesh
    Mesh016: THREE.Mesh
    Mesh016_1: THREE.Mesh
    Mesh016_2: THREE.Mesh
    Mesh016_3: THREE.Mesh
  }
  materials: {
    Camera_01_strap: THREE.MeshStandardMaterial
    Camera_01_lens_body: THREE.MeshStandardMaterial
    Camera_01_lens: THREE.MeshPhysicalMaterial
    Camera_01_body: THREE.MeshStandardMaterial
  }
}

export default function CameraVintage({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/models/CameraModel/Camera_01_1k.gltf') as GLTFResult;
  
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Camera_01_strap.geometry} material={materials.Camera_01_strap} />
      <mesh geometry={nodes.Mesh016.geometry} material={materials.Camera_01_lens_body} />
      <mesh geometry={nodes.Mesh016_1.geometry} material={materials.Camera_01_lens} />
      <mesh geometry={nodes.Mesh016_2.geometry} material={materials.Camera_01_body} />
      <mesh geometry={nodes.Mesh016_3.geometry} material={materials.Camera_01_strap} />
    </group>
  )
}

// useGLTF.preload('/../Camera_01_1k.gltf')
