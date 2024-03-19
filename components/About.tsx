import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useCursor, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

type GLTFResult = GLTF & {
  nodes: {
    Torus: THREE.Mesh;
    Cylinder010: THREE.Mesh;
    Cylinder010_1: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Sphere002: THREE.Mesh;
    Sphere003: THREE.Mesh;
    Sphere005: THREE.Mesh;
    Sphere006: THREE.Mesh;
    Sphere008: THREE.Mesh;
    Sphere009: THREE.Mesh;
    Sphere011: THREE.Mesh;
    Sphere012: THREE.Mesh;
    Sphere013: THREE.Mesh;
    Sphere014: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Text: THREE.Mesh;
    Wolf3D_Teeth: THREE.Mesh;
    EyeRight: THREE.Mesh;
    Wolf3D_Head: THREE.Mesh;
    EyeLeft: THREE.Mesh;
    Wolf3D_Hair: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshPhysicalMaterial;
    Glass: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Glass.001"]: THREE.MeshStandardMaterial;
    ["Glass.001"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Glass.002"]: THREE.MeshStandardMaterial;
    ["Material.032"]: THREE.MeshStandardMaterial;
    ["Material.033"]: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Hair: THREE.MeshStandardMaterial;
  };
};

export function AboutModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/about.glb") as GLTFResult;

  const headRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  useCursor(hovered);

  const glass = new THREE.MeshStandardMaterial({
    color: "#30d5c8",
    metalness: 0.5,
    roughness: 0.5,
    transparent: true,
    opacity: 0.2,
    side: THREE.DoubleSide,
  });

  const water = new THREE.MeshStandardMaterial({
    color: "#30d5c8",
    metalness: 0.5,
    roughness: 0.5,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide,
  });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const mouseX = event.clientX;
      const windowWidth = window.innerWidth;

      const mouseY = event.clientY;
      const windowHeight = window.innerHeight;

      const normalizedMouseX = (mouseX / windowWidth) * 2 - 1;
      const normalizedMouseY = (mouseY / windowHeight) * 2 - 1;

      setMouseX(normalizedMouseX);
      setMouseY(normalizedMouseY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    easing.dampE(
      headRef.current!.rotation,
      [0, mouseX * (state.camera.position.z > 1 ? 1 : -1), 0],
      0.4,
      delta
    );
    easing.dampE(headRef.current!.rotation, [0, 0, mouseY * 0.2], 0.4, delta);
  });

  return (
    <group
      {...props}
      dispose={null}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={water}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={water}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.015"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.015"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials["Glass.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials["Glass.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={materials["Glass.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006.geometry}
        material={materials["Glass.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere008.geometry}
        material={materials["Glass.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere009.geometry}
        material={materials["Glass.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere011.geometry}
        material={materials["Glass.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere012.geometry}
        material={materials["Glass.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere013.geometry}
        material={materials["Glass.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere014.geometry}
        material={materials["Glass.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.032"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.033"]}
      />
      <group ref={headRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          name="Wolf3D_Teeth"
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <mesh
          name="EyeRight"
          castShadow
          receiveShadow
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <mesh
          name="Wolf3D_Head"
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <mesh
          name="EyeLeft"
          castShadow
          receiveShadow
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010_1.geometry}
        material={materials["Material.013"]}
      />
    </group>
  );
}

useGLTF.preload("/models/about.glb");
