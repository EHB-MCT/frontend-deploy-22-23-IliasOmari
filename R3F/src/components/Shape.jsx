import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Shape = () => {
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta;
  });

  const meshRef = useRef();

  return (
    <>
      <OrbitControls make default />
      <group ref={meshRef} position={[0, 0, -2]} rotation-y={0} wireframe>
        <mesh position={[-3, 0, 2]} rotation-x={0}>
          <torusGeometry />
          <meshBasicMaterial color="blue" />
        </mesh>

        <mesh>
          <capsuleGeometry />
          <meshBasicMaterial color="green" />
        </mesh>

        <mesh position={[0, 0, -4]} rotation-x={0}>
          <boxGeometry />
          <meshBasicMaterial color="yellow" />
        </mesh>

        <mesh position={[3, 0, 0]} rotation-x={0}>
          <latheGeometry />
          <meshBasicMaterial color="red" />
        </mesh>

        <mesh position={[0, -2, 0]} rotation-x={-1.6} scale={15}>
          <planeGeometry />
          <meshBasicMaterial color="whitesmoke" />
        </mesh>
      </group>
    </>
  );
};
