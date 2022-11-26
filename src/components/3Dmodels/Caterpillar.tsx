
import * as THREE from 'three'
import React, { useRef } from 'react'
import { GLTF } from 'three-stdlib'
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    sh_catWorkBoot: THREE.MeshStandardMaterial
  }
};


export default function Caterpillar({ ...props }: JSX.IntrinsicElements['group'],
) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/models/caterpillar/scene.gltf') as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null} scale={5}>
      <group rotation={[-Math.PI / 2, 0, -0.51]}>
        <mesh geometry={nodes.Object_2.geometry}
          material={materials.sh_catWorkBoot} />
      </group>
    </group>
  );
};
