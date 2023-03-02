import { Group, Mesh, MeshStandardMaterial } from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import iphone_url from "@assets/models/apple13/scene.gltf"; // as string

type GLTFResult = GLTF & {
  nodes: {
    Object_8: Mesh;
    Object_10: Mesh;
    Object_12: Mesh;
    Object_14: Mesh;
    Object_16: Mesh;
    Object_19: Mesh;
    Object_21: Mesh;
    Object_23: Mesh;
    Object_25: Mesh;
    Object_27: Mesh;
    Object_29: Mesh;
    Object_31: Mesh;
    Object_34: Mesh;
    Object_36: Mesh;
    Object_38: Mesh;
    Object_40: Mesh;
    Object_43: Mesh;
    Object_46: Mesh;
    Object_49: Mesh;
    Object_52: Mesh;
    Object_55: Mesh;
    Object_57: Mesh;
    Object_59: Mesh;
    Object_61: Mesh;
    Object_63: Mesh;
    Object_65: Mesh;
    Object_67: Mesh;
    Object_69: Mesh;
    Object_72: Mesh;
  };
  materials: {
    Frame: MeshStandardMaterial;
    Frame2: MeshStandardMaterial;
    Port: MeshStandardMaterial;
    Antenna: MeshStandardMaterial;
    material: MeshStandardMaterial;
    Bezel: MeshStandardMaterial;
    Body: MeshStandardMaterial;
    Wallpaper: MeshStandardMaterial;
    Camera_Glass: MeshStandardMaterial;
    Lens: MeshStandardMaterial;
    Material: MeshStandardMaterial;
    Glass: MeshStandardMaterial;
    ["Camera_Frame.001"]: MeshStandardMaterial;
    Screen_Glass: MeshStandardMaterial;
    Logo: MeshStandardMaterial;
    Gray_Glass: MeshStandardMaterial;
    Flash: MeshStandardMaterial;
    Camera_Frame: MeshStandardMaterial;
    Black_Glass: MeshStandardMaterial;
    ["Material.002"]: MeshStandardMaterial;
  };
};
export default function Iphone13({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<Group>(null);
  const { nodes, materials } = useGLTF(iphone_url) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group scale={100}>
                <mesh
                  geometry={nodes.Object_8.geometry}
                  material={materials.Frame}
                />
                <mesh
                  geometry={nodes.Object_10.geometry}
                  material={materials.Frame2}
                />
                <mesh
                  geometry={nodes.Object_12.geometry}
                  material={materials.Port}
                />
                <mesh
                  geometry={nodes.Object_14.geometry}
                  material={materials.Antenna}
                />
                <mesh
                  geometry={nodes.Object_16.geometry}
                  material={materials.material}
                />
                <mesh
                  geometry={nodes.Object_19.geometry}
                  material={materials.material}
                />
                <mesh
                  geometry={nodes.Object_21.geometry}
                  material={materials.Bezel}
                />
                <mesh
                  geometry={nodes.Object_23.geometry}
                  material={materials.Body}
                />
                <mesh
                  geometry={nodes.Object_25.geometry}
                  material={materials.Wallpaper}
                />
                <mesh
                  geometry={nodes.Object_27.geometry}
                  material={materials.Camera_Glass}
                />
                <mesh
                  geometry={nodes.Object_29.geometry}
                  material={materials.Lens}
                />
                <mesh
                  geometry={nodes.Object_31.geometry}
                  material={materials.Material}
                />
                <mesh
                  geometry={nodes.Object_34.geometry}
                  material={materials.Body}
                />
                <mesh
                  geometry={nodes.Object_36.geometry}
                  material={materials.Glass}
                />
                <mesh
                  geometry={nodes.Object_38.geometry}
                  material={materials["Camera_Frame.001"]}
                />
                <mesh
                  geometry={nodes.Object_40.geometry}
                  material={materials.material}
                />
                <mesh
                  geometry={nodes.Object_43.geometry}
                  material={materials.Screen_Glass}
                />
                <mesh
                  geometry={nodes.Object_46.geometry}
                  material={materials.Frame}
                />
                <mesh
                  geometry={nodes.Object_49.geometry}
                  material={materials.Frame}
                />
                <mesh
                  geometry={nodes.Object_52.geometry}
                  material={materials.Logo}
                />
                <mesh
                  geometry={nodes.Object_55.geometry}
                  material={materials.Body}
                />
                <mesh
                  geometry={nodes.Object_57.geometry}
                  material={materials.Gray_Glass}
                />
                <mesh
                  geometry={nodes.Object_59.geometry}
                  material={materials.Flash}
                />
                <mesh
                  geometry={nodes.Object_61.geometry}
                  material={materials.Port}
                />
                <mesh
                  geometry={nodes.Object_63.geometry}
                  material={materials.Camera_Frame}
                />
                <mesh
                  geometry={nodes.Object_65.geometry}
                  material={materials.Camera_Glass}
                />
                <mesh
                  geometry={nodes.Object_67.geometry}
                  material={materials.Lens}
                />
                <mesh
                  geometry={nodes.Object_69.geometry}
                  material={materials.Black_Glass}
                />
                <mesh
                  geometry={nodes.Object_72.geometry}
                  material={materials["Material.002"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
useGLTF.preload(iphone_url);
