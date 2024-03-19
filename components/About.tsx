import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

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
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials["Material.001"]}
        position={[0.022, 0.534, -0.001]}
        scale={[0.313, 0.411, 0.322]}
      />
      <group position={[-0.014, 1.125, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_1.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Glass.001"]}
        position={[-0.014, 1.125, 0]}
        scale={1.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Glass.001"]}
        position={[-0.014, 1.125, 0]}
        scale={1.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.015"]}
        position={[-0.014, 1.125, 0]}
        scale={1.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.015"]}
        position={[-0.014, -0.809, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials["Glass.002"]}
        position={[0, 0.829, 0.616]}
        scale={0.069}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials["Glass.002"]}
        position={[0, 0.653, -0.584]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={materials["Glass.002"]}
        position={[0, 0.756, -0.52]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006.geometry}
        material={materials["Glass.002"]}
        position={[0, 0.936, -0.625]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere008.geometry}
        material={materials["Glass.002"]}
        position={[0, 0.882, -0.581]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere009.geometry}
        material={materials["Glass.002"]}
        position={[0, 0.587, 0.509]}
        scale={0.035}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere011.geometry}
        material={materials["Glass.002"]}
        position={[0, 2.117, 0.616]}
        scale={0.078}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere012.geometry}
        material={materials["Glass.002"]}
        position={[0, 1.719, 0.688]}
        scale={0.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere013.geometry}
        material={materials["Glass.002"]}
        position={[-0.071, 2.158, -0.676]}
        scale={0.035}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere014.geometry}
        material={materials["Glass.002"]}
        position={[0, 1.677, -0.644]}
        scale={0.097}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.032"]}
        position={[0, 0.195, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.033"]}
        position={[-0.847, 0.192, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.138}
      />
      <mesh
        name="Wolf3D_Teeth"
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        position={[0, -6.491, 0]}
        rotation={[0, -1.571, 0]}
        scale={4.501}
      />
      <mesh
        name="EyeRight"
        castShadow
        receiveShadow
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        position={[0, -6.491, 0]}
        rotation={[0, -1.571, 0]}
        scale={4.501}
      />
      <mesh
        name="Wolf3D_Head"
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        position={[0, -6.491, 0]}
        rotation={[0, -1.571, 0]}
        scale={4.501}
      />
      <mesh
        name="EyeLeft"
        castShadow
        receiveShadow
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        position={[0, -6.491, 0]}
        rotation={[0, -1.571, 0]}
        scale={4.501}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        position={[0, -6.491, 0]}
        rotation={[0, -1.571, 0]}
        scale={4.501}
      />
    </group>
  );
}

useGLTF.preload("/models/about.glb");
