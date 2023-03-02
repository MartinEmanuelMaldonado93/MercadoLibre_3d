import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import chair_url from "@assets/models/GamingChair/scene.gltf"; // as string
type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
  };
  materials: {
    black_metal: THREE.MeshStandardMaterial;
    white_metal: THREE.MeshStandardMaterial;
    black_cloth: THREE.MeshStandardMaterial;
    chair_material: THREE.MeshStandardMaterial;
    plastic: THREE.MeshStandardMaterial;
    plastic_buckle: THREE.MeshStandardMaterial;
  };
};

export default function GamingChair({
  ...props
}: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(chair_url) as unknown as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.black_metal}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.white_metal}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.black_cloth}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.chair_material}
        />
        <mesh geometry={nodes.Object_6.geometry} material={materials.plastic} />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.plastic_buckle}
        />
      </group>
    </group>
  );
}
useGLTF.preload(chair_url);
