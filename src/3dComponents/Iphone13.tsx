import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_8: THREE.Mesh
    Object_10: THREE.Mesh
    Object_12: THREE.Mesh
    Object_14: THREE.Mesh
    Object_16: THREE.Mesh
    Object_19: THREE.Mesh
    Object_21: THREE.Mesh
    Object_23: THREE.Mesh
    Object_25: THREE.Mesh
    Object_27: THREE.Mesh
    Object_29: THREE.Mesh
    Object_31: THREE.Mesh
    Object_34: THREE.Mesh
    Object_36: THREE.Mesh
    Object_38: THREE.Mesh
    Object_40: THREE.Mesh
    Object_43: THREE.Mesh
    Object_46: THREE.Mesh
    Object_49: THREE.Mesh
    Object_52: THREE.Mesh
    Object_55: THREE.Mesh
    Object_57: THREE.Mesh
    Object_59: THREE.Mesh
    Object_61: THREE.Mesh
    Object_63: THREE.Mesh
    Object_65: THREE.Mesh
    Object_67: THREE.Mesh
    Object_69: THREE.Mesh
    Object_72: THREE.Mesh
  }
  materials: {
    Frame: THREE.MeshStandardMaterial
    Frame2: THREE.MeshStandardMaterial
    Port: THREE.MeshStandardMaterial
    Antenna: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    Bezel: THREE.MeshStandardMaterial
    Body: THREE.MeshStandardMaterial
    Wallpaper: THREE.MeshStandardMaterial
    Camera_Glass: THREE.MeshStandardMaterial
    Lens: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
    ['Camera_Frame.001']: THREE.MeshStandardMaterial
    Screen_Glass: THREE.MeshStandardMaterial
    Logo: THREE.MeshStandardMaterial
    Gray_Glass: THREE.MeshStandardMaterial
    Flash: THREE.MeshStandardMaterial
    Camera_Frame: THREE.MeshStandardMaterial
    Black_Glass: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}


export default function Iphone13({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/models/apple13/scene.gltf') as GLTFResult

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group scale={100}>
                <mesh geometry={nodes.Object_8.geometry} material={materials.Frame} />
                <mesh geometry={nodes.Object_10.geometry} material={materials.Frame2} />
                <mesh geometry={nodes.Object_12.geometry} material={materials.Port} />
                <mesh geometry={nodes.Object_14.geometry} material={materials.Antenna} />
                <mesh geometry={nodes.Object_16.geometry} material={materials.material} />
                <mesh geometry={nodes.Object_19.geometry} material={materials.material} />
                <mesh geometry={nodes.Object_21.geometry} material={materials.Bezel} />
                <mesh geometry={nodes.Object_23.geometry} material={materials.Body} />
                <mesh geometry={nodes.Object_25.geometry} material={materials.Wallpaper} />
                <mesh geometry={nodes.Object_27.geometry} material={materials.Camera_Glass} />
                <mesh geometry={nodes.Object_29.geometry} material={materials.Lens} />
                <mesh geometry={nodes.Object_31.geometry} material={materials.Material} />
                <mesh geometry={nodes.Object_34.geometry} material={materials.Body} />
                <mesh geometry={nodes.Object_36.geometry} material={materials.Glass} />
                <mesh geometry={nodes.Object_38.geometry} material={materials['Camera_Frame.001']} />
                <mesh geometry={nodes.Object_40.geometry} material={materials.material} />
                <mesh geometry={nodes.Object_43.geometry} material={materials.Screen_Glass} />
                <mesh geometry={nodes.Object_46.geometry} material={materials.Frame} />
                <mesh geometry={nodes.Object_49.geometry} material={materials.Frame} />
                <mesh geometry={nodes.Object_52.geometry} material={materials.Logo} />
                <mesh geometry={nodes.Object_55.geometry} material={materials.Body} />
                <mesh geometry={nodes.Object_57.geometry} material={materials.Gray_Glass} />
                <mesh geometry={nodes.Object_59.geometry} material={materials.Flash} />
                <mesh geometry={nodes.Object_61.geometry} material={materials.Port} />
                <mesh geometry={nodes.Object_63.geometry} material={materials.Camera_Frame} />
                <mesh geometry={nodes.Object_65.geometry} material={materials.Camera_Glass} />
                <mesh geometry={nodes.Object_67.geometry} material={materials.Lens} />
                <mesh geometry={nodes.Object_69.geometry} material={materials.Black_Glass} />
                <mesh geometry={nodes.Object_72.geometry} material={materials['Material.002']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

