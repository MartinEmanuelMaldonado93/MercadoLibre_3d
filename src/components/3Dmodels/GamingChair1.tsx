import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import chair_url from "@assets/models/GamingChair/scene.gltf"; // as string

type GLTFResult = GLTF & {
  nodes: {
    adjustment_aiStandardSurface1_0: THREE.Mesh;
    pCube6_aiStandardSurface1_0: THREE.Mesh;
    pCube9_aiStandardSurface1_0: THREE.Mesh;
    pPlane3_aiStandardSurface1_0: THREE.Mesh;
    pCylinder14_aiStandardSurface1_0: THREE.Mesh;
    pCylinder10_aiStandardSurface1_0: THREE.Mesh;
    Bolt_aiStandardSurface1_0: THREE.Mesh;
    Bolt1_aiStandardSurface1_0: THREE.Mesh;
    Bolt2_aiStandardSurface1_0: THREE.Mesh;
    Bolt3_aiStandardSurface1_0: THREE.Mesh;
    polySurface11_aiStandardSurface1_0: THREE.Mesh;
    wheel_aiStandardSurface1_0: THREE.Mesh;
    wheel2_aiStandardSurface1_0: THREE.Mesh;
    wheel3_aiStandardSurface1_0: THREE.Mesh;
    wheel4_aiStandardSurface1_0: THREE.Mesh;
    polySurface24_aiStandardSurface1_0: THREE.Mesh;
    polySurface43_aiStandardSurface1_0: THREE.Mesh;
    back_bone_aiStandardSurface1_0: THREE.Mesh;
    butt_aiStandardSurface1_0: THREE.Mesh;
    L_handle_aiStandardSurface1_0: THREE.Mesh;
    R_handle_aiStandardSurface1_0: THREE.Mesh;
    back2_aiStandardSurface1_0: THREE.Mesh;
  };
  materials: {
    aiStandardSurface1: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  // const fixed_chair_url = chair_url.replace("models", "/models/"); //only dev 
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(chair_url) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.adjustment_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
          <group
            position={[1.12, -9.45, 1.61]}
            rotation={[0.78, -0.04, 2.35]}
            scale={[0.03, 1.25, 0.74]}
          >
            <mesh
              geometry={nodes.pCube6_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <mesh
            geometry={nodes.pCube9_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
          <mesh
            geometry={nodes.pPlane3_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
          <group
            position={[-0.72, -0.43, -2]}
            rotation={[-0.17, 0, 0]}
            scale={[-1, 1, 1]}
          >
            <mesh
              geometry={nodes.pCylinder14_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <group
            position={[-0.44, -9.59, 1.61]}
            rotation={[-0.17, 0, 0]}
            scale={0.65}
          >
            <mesh
              geometry={nodes.pCylinder10_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <group
            position={[-1.7, -9.01, -0.19]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[0.19, 0.05, 0.19]}
          >
            <mesh
              geometry={nodes.Bolt_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <group
            position={[-1.38, -9.26, -1.91]}
            rotation={[0, 0, 1.44]}
            scale={[0.12, 0.06, 0.12]}
          >
            <mesh
              geometry={nodes.Bolt1_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <group
            position={[0.62, -9.26, -1.91]}
            rotation={[0, 0, 1.69]}
            scale={[0.12, 0.06, 0.12]}
          >
            <mesh
              geometry={nodes.Bolt2_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <group
            position={[0.97, -9.01, -0.19]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[0.19, 0.05, 0.19]}
          >
            <mesh
              geometry={nodes.Bolt3_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <group position={[-0.19, 0.08, 0.36]} scale={[1.96, 1, 1]}>
            <mesh
              geometry={nodes.polySurface11_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <mesh
            geometry={nodes.wheel_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
          <group position={[0.32, 0, -1.27]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              geometry={nodes.wheel2_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <group position={[-1.27, 0, -0.32]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              geometry={nodes.wheel3_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <group
            position={[-0.96, 0, -1.59]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              geometry={nodes.wheel4_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <mesh
            geometry={nodes.polySurface24_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
          <mesh
            geometry={nodes.polySurface43_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
          <mesh
            geometry={nodes.back_bone_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
          <mesh
            geometry={nodes.butt_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
          <mesh
            geometry={nodes.L_handle_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
          <group position={[-0.76, 0, 0]} scale={[-1, 1, 1]}>
            <mesh
              geometry={nodes.R_handle_aiStandardSurface1_0.geometry}
              material={materials.aiStandardSurface1}
            />
          </group>
          <mesh
            geometry={nodes.back2_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
        </group>
      </group>
    </group>
  );
}
useGLTF.preload(chair_url);
