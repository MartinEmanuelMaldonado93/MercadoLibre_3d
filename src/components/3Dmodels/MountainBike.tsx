import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import mountain_bike_url from "@assets/models/americanmuscle/mountainbike/scene.gltf"; // as string

type GLTFResult = GLTF & {
  nodes: {
    Cylinder_UV2_0: THREE.Mesh;
    Cylinder001_UV6_0: THREE.Mesh;
    Cylinder068_Shiny_Metal_0: THREE.Mesh;
    Cylinder069_UV7_0: THREE.Mesh;
    Cylinder070_Black_Plastic_0: THREE.Mesh;
    Cylinder071_UV1_0: THREE.Mesh;
    Plane_Black_Plastic_0: THREE.Mesh;
    pCube121_Black_Plastic_0: THREE.Mesh;
    pCylinder791_Black_Metal_0: THREE.Mesh;
    pCylinder827_Shiny_Metal_0: THREE.Mesh;
    pCylinder971_Black_Plastic_0: THREE.Mesh;
    pCube137_Black_Plastic_0: THREE.Mesh;
    Cylinder072_Black_Metal_0: THREE.Mesh;
    Cylinder072_Black_Plastic_0: THREE.Mesh;
    Circle_Shiny_Metal_0: THREE.Mesh;
    Circle001_Black_Metal_0: THREE.Mesh;
    Cylinder073_Black_Metal_0: THREE.Mesh;
    Circle002_Rim_0: THREE.Mesh;
    Circle002_Black_Metal_0: THREE.Mesh;
    Mtb_Wheel_Tire_0: THREE.Mesh;
    Cylinder002_Grip_0: THREE.Mesh;
    Cylinder003_Grip_0: THREE.Mesh;
    Shimano_SLX_M675_Black_Metal_0: THREE.Mesh;
    Shimano_SLX_M675_Shiny_Metal_0: THREE.Mesh;
    Circle003_Shifter_0: THREE.Mesh;
    Circle003_Black_Plastic_0: THREE.Mesh;
    ["Hayes_Mag_9_-_Disk_Brake_Caliper_Black_Metal_0"]: THREE.Mesh;
    ["Hayes_Mag_9_-_Disk_Brake_Caliper_Black_Plastic_0"]: THREE.Mesh;
    ["Hayes_Mag_9_-_Disk_Brake_Caliper001_Black_Metal_0"]: THREE.Mesh;
    ["Hayes_Mag_9_-_Disk_Brake_Caliper001_Shiny_Metal_0"]: THREE.Mesh;
    BezierCurve_Black_Plastic_0: THREE.Mesh;
    Mtb_Wheel001_Tire_0: THREE.Mesh;
    Circle005_Rim_0: THREE.Mesh;
    Circle005_Black_Metal_0: THREE.Mesh;
    BezierCurve001_Black_Plastic_0: THREE.Mesh;
    Cube_Black_Plastic_0: THREE.Mesh;
    Cube001_Black_Plastic_0: THREE.Mesh;
    BezierCurve002_Black_Plastic_0: THREE.Mesh;
    Cube004_Black_Metal_0: THREE.Mesh;
    Cube005_Black_Metal_0: THREE.Mesh;
    Circle006_Black_Metal_0: THREE.Mesh;
    Circle006_Black_Plastic_0: THREE.Mesh;
    Circle006_Orange_0: THREE.Mesh;
    Circle006_UV8_0: THREE.Mesh;
    BezierCurve003_Black_Plastic_0: THREE.Mesh;
    Plane001_Shiny_Metal_0: THREE.Mesh;
    Plane001_Metal_0: THREE.Mesh;
    Plane001_Black_Metal_0: THREE.Mesh;
    group_6_Shiny_Metal_0: THREE.Mesh;
    group_6_Shiny_Metal_0_1: THREE.Mesh;
    group_6_Shiny_Metal_0_2: THREE.Mesh;
    Cube002_Metal_0: THREE.Mesh;
    Cube003_Black_Metal_0: THREE.Mesh;
    Circle004_Shiny_Metal_0: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshPhysicalMaterial;
    material_1: THREE.MeshPhysicalMaterial;
    Shiny_Metal: THREE.MeshStandardMaterial;
    material_3: THREE.MeshPhysicalMaterial;
    Black_Plastic: THREE.MeshStandardMaterial;
    material_5: THREE.MeshPhysicalMaterial;
    Black_Metal: THREE.MeshPhysicalMaterial;
    material_7: THREE.MeshStandardMaterial;
    Tire: THREE.MeshStandardMaterial;
    Grip: THREE.MeshStandardMaterial;
    Shifter: THREE.MeshStandardMaterial;
    Orange: THREE.MeshStandardMaterial;
    material_12: THREE.MeshStandardMaterial;
    Metal: THREE.MeshStandardMaterial;
  };
};

export default function MountainBike({
  ...props
}: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    mountain_bike_url
  ) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[34.98, 46, 0]}
            rotation={[-Math.PI / 2, 1.1, 0]}
            scale={2.73}
          >
            <mesh
              geometry={nodes.Cylinder_UV2_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[109.44, -1.1, 0]}
            rotation={[-Math.PI / 2, -0.38, 0]}
            scale={3.17}
          >
            <mesh
              geometry={nodes.Cylinder001_UV6_0.geometry}
              material={materials.material_1}
            />
          </group>
          <group
            position={[55.85, 14.77, 0]}
            rotation={[-Math.PI / 2, -0.39, 0]}
            scale={1.93}
          >
            <mesh
              geometry={nodes.Cylinder068_Shiny_Metal_0.geometry}
              material={materials.Shiny_Metal}
            />
          </group>
          <group
            position={[-44.64, 2.12, 0]}
            rotation={[-Math.PI / 2, 0.9, 0]}
            scale={1.4}
          >
            <mesh
              geometry={nodes.Cylinder069_UV7_0.geometry}
              material={materials.material_3}
            />
          </group>
          <group
            position={[39.25, 49.42, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Cylinder070_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[39.52, 60.17, 0]}
            rotation={[-Math.PI / 2, 1.16, 0]}
            scale={2.22}
          >
            <mesh
              geometry={nodes.Cylinder071_UV1_0.geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-32.52, 60.54, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Plane_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[-41.04, 51.08, -0.01]}
            rotation={[0, 0, 0.28]}
            scale={6.41}
          >
            <mesh
              geometry={nodes.pCube121_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[-45.8, 55.14, -2.28]}
            rotation={[0, 0, -1.43]}
            scale={[0.49, 9.17, 0.41]}
          >
            <mesh
              geometry={nodes.pCylinder791_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
          </group>
          <group
            position={[-44.81, 52.84, -3.09]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.56}
          >
            <mesh
              geometry={nodes.pCylinder827_Shiny_Metal_0.geometry}
              material={materials.Shiny_Metal}
            />
          </group>
          <group
            position={[-32.94, 24.15, 0.12]}
            rotation={[0, 0, 0.28]}
            scale={[2.52, 1.06, 2.35]}
          >
            <mesh
              geometry={nodes.pCylinder971_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[-32.65, 24.43, 3.52]}
            rotation={[0.07, -0.24, 0.3]}
            scale={[8.17, 1.89, 0.63]}
          >
            <mesh
              geometry={nodes.pCube137_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[49.25, 31.05, 0]}
            rotation={[-Math.PI / 2, -0.4, 0]}
            scale={2.52}
          >
            <mesh
              geometry={nodes.Cylinder072_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
            <mesh
              geometry={nodes.Cylinder072_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group position={[75.07, -26.31, -4.97]} scale={8.82}>
            <mesh
              geometry={nodes.Circle_Shiny_Metal_0.geometry}
              material={materials.Shiny_Metal}
            />
          </group>
          <group position={[-74.73, -26.6, 6.88]} scale={1.48}>
            <mesh
              geometry={nodes.Circle001_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
          </group>
          <group position={[43.4, 63.39, 0]} scale={4.6}>
            <mesh
              geometry={nodes.Cylinder073_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
          </group>
          <group position={[-76.77, -26.3, 0.5]} scale={40.91}>
            <mesh
              geometry={nodes.Circle002_Rim_0.geometry}
              material={materials.material_7}
            />
            <mesh
              geometry={nodes.Circle002_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
          </group>
          <group
            position={[74.69, -25.98, 0.48]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1.25}
          >
            <mesh
              geometry={nodes.Mtb_Wheel_Tire_0.geometry}
              material={materials.Tire}
            />
          </group>
          <group
            position={[40.52, 61.97, 44.3]}
            rotation={[-Math.PI, 0.08, -1.37]}
            scale={[-1.55, 1.55, 1.55]}
          >
            <mesh
              geometry={nodes.Cylinder002_Grip_0.geometry}
              material={materials.Grip}
            />
          </group>
          <group
            position={[41.25, 61.97, -34.94]}
            rotation={[-Math.PI, -0.07, -1.37]}
            scale={[-1.55, 1.55, 1.55]}
          >
            <mesh
              geometry={nodes.Cylinder003_Grip_0.geometry}
              material={materials.Grip}
            />
          </group>
          <group
            position={[44.95, 61.8, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={0.09}
          >
            <mesh
              geometry={nodes.Shimano_SLX_M675_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
            <mesh
              geometry={nodes.Shimano_SLX_M675_Shiny_Metal_0.geometry}
              material={materials.Shiny_Metal}
            />
          </group>
          <group
            position={[44.95, 61.8, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Circle003_Shifter_0.geometry}
              material={materials.Shifter}
            />
            <mesh
              geometry={nodes.Circle003_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[63.89, -26.05, -5.31]}
            rotation={[-Math.PI, 0, 2.8]}
            scale={1.13}
          >
            <mesh
              geometry={
                nodes["Hayes_Mag_9_-_Disk_Brake_Caliper_Black_Metal_0"].geometry
              }
              material={materials.Black_Metal}
            />
            <mesh
              geometry={
                nodes["Hayes_Mag_9_-_Disk_Brake_Caliper_Black_Plastic_0"]
                  .geometry
              }
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[-63.62, -26.79, -6.99]}
            rotation={[-Math.PI, 0, -1.19]}
            scale={1.43}
          >
            <mesh
              geometry={
                nodes["Hayes_Mag_9_-_Disk_Brake_Caliper001_Black_Metal_0"]
                  .geometry
              }
              material={materials.Black_Metal}
            />
            <mesh
              geometry={
                nodes["Hayes_Mag_9_-_Disk_Brake_Caliper001_Shiny_Metal_0"]
                  .geometry
              }
              material={materials.Shiny_Metal}
            />
          </group>
          <group
            position={[44.95, 61.8, 0]}
            rotation={[-1.61, -0.1, 1.57]}
            scale={39.84}
          >
            <mesh
              geometry={nodes.BezierCurve_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[-75.44, -26.31, 0.48]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1.25}
          >
            <mesh
              geometry={nodes.Mtb_Wheel001_Tire_0.geometry}
              material={materials.Tire}
            />
          </group>
          <group position={[74.54, -26.35, 9.37]} scale={40.91}>
            <mesh
              geometry={nodes.Circle005_Rim_0.geometry}
              material={materials.material_7}
            />
            <mesh
              geometry={nodes.Circle005_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
          </group>
          <group
            position={[76.4, -26.37, 0.15]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          >
            <mesh
              geometry={nodes.BezierCurve001_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[12.2, 0.62, 0.15]}
            rotation={[-Math.PI / 2, 0.52, Math.PI]}
            scale={[-0.37, 1.48, 0.66]}
          >
            <mesh
              geometry={nodes.Cube_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[32.04, 31.05, 0.15]}
            rotation={[-Math.PI / 2, 0.79, Math.PI]}
            scale={[-0.37, 1.48, 0.66]}
          >
            <mesh
              geometry={nodes.Cube001_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[77.54, -26.37, 0.04]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          >
            <mesh
              geometry={nodes.BezierCurve002_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[74.81, -25.45, -9.77]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.42, 0.11, 0.42]}
          >
            <mesh
              geometry={nodes.Cube004_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
          </group>
          <group
            position={[-75.24, -26.03, -12.34]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.42, 0.11, 0.42]}
          >
            <mesh
              geometry={nodes.Cube005_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
          </group>
          <group
            position={[-573.29, -412.81, -899.98]}
            rotation={[0, -0.95, 0.37]}
            scale={100}
          />
          <group position={[-12.78, -32.72, 8.07]} scale={[4.48, 4.48, 5.69]}>
            <mesh
              geometry={nodes.Circle006_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
            <mesh
              geometry={nodes.Circle006_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
            <mesh
              geometry={nodes.Circle006_Orange_0.geometry}
              material={materials.Orange}
            />
            <mesh
              geometry={nodes.Circle006_UV8_0.geometry}
              material={materials.material_12}
            />
          </group>
          <group
            position={[-14.65, -25.16, 25.1]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          >
            <mesh
              geometry={nodes.BezierCurve003_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
          </group>
          <group
            position={[-71.02, -47.7, -4.7]}
            rotation={[-Math.PI / 2, -0.16, 0]}
            scale={25.13}
          >
            <mesh
              geometry={nodes.Plane001_Shiny_Metal_0.geometry}
              material={materials.Shiny_Metal}
            />
            <mesh
              geometry={nodes.Plane001_Metal_0.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Plane001_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
          </group>
          <group
            position={[667.83, 97.65, -237.71]}
            rotation={[-Math.PI, -1.53, 2.65]}
            scale={100}
          />
          <group position={[212.32, -49.75, 7.28]} scale={3.36}>
            <mesh
              geometry={nodes.group_6_Shiny_Metal_0.geometry}
              material={materials.Shiny_Metal}
            />
            <mesh
              geometry={nodes.group_6_Shiny_Metal_0_1.geometry}
              material={materials.Shiny_Metal}
            />
            <mesh
              geometry={nodes.group_6_Shiny_Metal_0_2.geometry}
              material={materials.Shiny_Metal}
            />
          </group>
          <group
            position={[-22.1, -22.61, 8.97]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Cube002_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[-18.22, -20.62, 7.02]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.56}
          >
            <mesh
              geometry={nodes.Cube003_Black_Metal_0.geometry}
              material={materials.Black_Metal}
            />
          </group>
          <group position={[-75.47, -26.31, -4.97]} scale={8.82}>
            <mesh
              geometry={nodes.Circle004_Shiny_Metal_0.geometry}
              material={materials.Shiny_Metal}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
useGLTF.preload(mountain_bike_url);
