import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube003_1: THREE.Mesh;
    Cube003_2: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder006: THREE.Mesh;
    Cylinder007: THREE.Mesh;
    Cylinder008: THREE.Mesh;
    Cylinder009: THREE.Mesh;
    Plane003: THREE.Mesh;
    Text001: THREE.Mesh;
    Text002: THREE.Mesh;
    Text003: THREE.Mesh;
    Text004: THREE.Mesh;
    Text005: THREE.Mesh;
    Text006: THREE.Mesh;
    Text007: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube007_1: THREE.Mesh;
    Cube007_2: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder001_1: THREE.Mesh;
    Cylinder001_2: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cylinder005_1: THREE.Mesh;
    Cylinder005_2: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001_1: THREE.Mesh;
    Plane001_2: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane006: THREE.Mesh;
    Plane007: THREE.Mesh;
    Plane008: THREE.Mesh;
    Plane009: THREE.Mesh;
    type_c: THREE.Mesh;
    MouseThermaltakeBlack: THREE.Mesh;
    MouseThermaltakeBlack001: THREE.Mesh;
    MouseThermaltakeBlack002: THREE.Mesh;
    MouseThermaltakeBlack003_1: THREE.Mesh;
    MouseThermaltakeBlack003_2: THREE.Mesh;
    MouseThermaltakeBlack003_3: THREE.Mesh;
    MouseThermaltakeBlack003_4: THREE.Mesh;
    MouseThermaltakeBlack004: THREE.Mesh;
    MouseThermaltakeBlack005: THREE.Mesh;
    MouseThermaltakeBlack007: THREE.Mesh;
    MouseThermaltakeBlack008: THREE.Mesh;
    MouseThermaltakeBlack009: THREE.Mesh;
    MouseThermaltakeBlack010: THREE.Mesh;
    MouseThermaltakeBlack011: THREE.Mesh;
    MouseThermaltakeBlack012: THREE.Mesh;
    MouseThermaltakeBlack013: THREE.Mesh;
    MouseThermaltakeBlack014: THREE.Mesh;
    MouseThermaltakeBlack015_1: THREE.Mesh;
    MouseThermaltakeBlack015_2: THREE.Mesh;
    MouseThermaltakeBlack015_3: THREE.Mesh;
    Circle_1: THREE.Mesh;
    Circle_2: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Circle001_2: THREE.Mesh;
    Circle002_1: THREE.Mesh;
    Circle002_2: THREE.Mesh;
    Circle003_1: THREE.Mesh;
    Circle003_2: THREE.Mesh;
    Circle004_1: THREE.Mesh;
    Circle004_2: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Body: THREE.SkinnedMesh;
    Wolf3D_Hair: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.025"]: THREE.MeshStandardMaterial;
    ["Material.023"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    ["Material.022"]: THREE.MeshStandardMaterial;
    ["Material.028"]: THREE.MeshStandardMaterial;
    ["Material.021"]: THREE.MeshStandardMaterial;
    ["Material.018"]: THREE.MeshStandardMaterial;
    ["black skin"]: THREE.MeshStandardMaterial;
    outline: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    blue: THREE.MeshStandardMaterial;
    gold: THREE.MeshStandardMaterial;
    hole: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    metal: THREE.MeshStandardMaterial;
    ["Material.024"]: THREE.MeshStandardMaterial;
    ["Material.031"]: THREE.MeshStandardMaterial;
    ["Material.030"]: THREE.MeshStandardMaterial;
    ["main body"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.027"]: THREE.MeshStandardMaterial;
    ["Material.029"]: THREE.MeshStandardMaterial;
    ["Material.026"]: THREE.MeshStandardMaterial;
    ["main body.001"]: THREE.MeshStandardMaterial;
    ["Material.020"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    Plastic: THREE.MeshStandardMaterial;
    ShinyPlastic: THREE.MeshStandardMaterial;
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Body: THREE.MeshStandardMaterial;
    Wolf3D_Hair: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
  };
};

export function HeroModel(props: JSX.IntrinsicElements["group"]) {
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(
    null
  );

  const avatar = useRef<THREE.Group>(null);
  const screen = useRef<THREE.Mesh>(null);

  const { nodes, materials } = useGLTF("/models/hero.glb") as GLTFResult;

  const { animations: typingAnimation } = useFBX("/models/typingAnimation.fbx");
  typingAnimation[0].name = "Typing";
  const { actions } = useAnimations(typingAnimation, avatar);

  useEffect(() => {
    actions["Typing"]!.reset().play();

    const video = document.createElement("video");
    video.src = "/videos/matrix.mp4";
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.play();

    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    setVideoTexture(texture);

    return () => {
      video.pause();
      video.removeAttribute("src");
      video.play();
    };
  }, []);

  return (
    <group {...props} dispose={null}>
      <group
        position={[0.022, 0.679, 0.661]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.379}
      >
        <group
          position={[0, 0.018, 0.045]}
          rotation={[0.048, 0, 0]}
          scale={0.209}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_2.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials["Material.005"]}
            position={[0.022, 0.13, -0.057]}
            rotation={[-1.578, 0, 0]}
            scale={[1.207, 1.001, 3.247]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials["Material.007"]}
            position={[2.543, 0.314, 0.68]}
            rotation={[-1.571, 0, 0]}
            scale={[0.078, 0.093, 0.005]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials["Material.004"]}
            position={[-2.105, 0.246, -0.138]}
            rotation={[-1.578, 0, 0]}
            scale={[1.207, 1, 0.615]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials["Material.025"]}
            position={[-1.984, 0.254, -1.266]}
            scale={0.026}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials["Material.023"]}
            position={[1.872, 0.254, -1.33]}
            scale={[0.018, 0.026, 0.018]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials["Material.019"]}
            position={[-2.126, 0.254, -1.266]}
            scale={0.026}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials["Material.017"]}
            position={[-2.16, 0.233, -1.399]}
            rotation={[1.576, 0, 0]}
            scale={[0.019, 0.06, 0.019]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials["Material.022"]}
            position={[-1.664, 0.255, -1.265]}
            scale={[0.018, 0.026, 0.018]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials["Material.028"]}
            position={[-2.277, 0.28, -1.269]}
            scale={[0.046, 0.046, 0.042]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text001.geometry}
            material={materials["Material.021"]}
            position={[-0.002, 0.237, -1.267]}
            scale={[0.271, 0.268, 0.216]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text002.geometry}
            material={materials["Material.018"]}
            position={[1.52, 0.25, -1.22]}
            scale={[0.098, 0.185, 0.098]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text003.geometry}
            material={nodes.Text003.material}
            position={[-2.322, 0.139, -1.414]}
            rotation={[1.56, -0.007, 3.142]}
            scale={[0.035, 0.04, 0.035]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text004.geometry}
            material={nodes.Text004.material}
            position={[-1.987, 0.136, -1.414]}
            rotation={[1.56, -0.007, 3.142]}
            scale={[0.035, 0.04, 0.035]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text005.geometry}
            material={materials["Material.018"]}
            position={[1.693, 0.25, -1.22]}
            scale={[0.098, 0.185, 0.098]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text006.geometry}
            material={materials["Material.018"]}
            position={[1.87, 0.25, -1.22]}
            scale={[0.098, 0.185, 0.098]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text007.geometry}
            material={materials["Material.021"]}
            position={[-1.513, 0.265, -1.277]}
            scale={0.093}
          />
        </group>
      </group>
      <group position={[0.024, 0, 0]} scale={1.269}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["black skin"]}
          position={[-0.036, 0.296, 0.047]}
          scale={[0.171, 0.22, 0.29]}
        />
        <group
          position={[0.174, 0.295, 0.053]}
          rotation={[-0.12, 0.051, -0.401]}
          scale={0.29}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_1.geometry}
            material={materials["black skin"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_2.geometry}
            material={materials.outline}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["black skin"]}
          position={[-0.036, 0.293, 0.047]}
          scale={[0.175, 0.229, 0.29]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["black skin"]}
          position={[0.161, 0.511, -0.019]}
          rotation={[0, 1.571, 0]}
          scale={0.249}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.003"]}
          position={[-0.043, 0.659, -0.311]}
          rotation={[-0.131, 1.57, 0]}
          scale={0.02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.003"]}
          position={[-0.03, 1.194, -0.141]}
          rotation={[-0.607, Math.PI / 2, 0]}
          scale={0.221}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.003"]}
          position={[0.543, 1.01, 0.296]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.221, 0.169, 0.221]}
        />
        <group
          position={[-0.378, 0.532, 0.305]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 1.337]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_2.geometry}
            material={materials.gold}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["Material.003"]}
          position={[-0.043, 1.192, -0.366]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.042, 0.026, 0.042]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.003"]}
          position={[0.053, 1.195, -0.364]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.231, 0.253, 0.231]}
        />
        <group
          position={[-0.038, 0.532, 0.462]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.156, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_1.geometry}
            material={materials["black skin"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_2.geometry}
            material={materials.hole}
          />
        </group>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={
              new THREE.MeshBasicMaterial({
                map: videoTexture,
                side: THREE.DoubleSide,
                transparent: true,
                color: "#37f713",
                opacity: 0.3,
              })
            }
            position={[-0.043, 1.051, 0.653]}
            rotation={[-3.142, 1.555, 1.571]}
            scale={[0.169, 0.221, 0.263]}
            ref={screen}
          />
          <pointLight color="white" intensity={15} position={[0, 0, 0]} />
        </group>
        <group
          position={[-0.043, 0.748, -0.245]}
          rotation={[1.605, 0, 0]}
          scale={[0.15, 0.163, 0.109]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials["black skin"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={materials.outline}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["black skin"]}
          position={[0.032, 0.916, -0.295]}
          rotation={[1.525, 0, 0]}
          scale={[0.044, 0.038, 0.043]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["black skin"]}
          position={[-0.043, 0.718, -0.321]}
          rotation={[1.605, 0, 0]}
          scale={0.221}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.006"]}
          position={[0.181, 0.273, -0.172]}
          rotation={[-0.123, 0.177, -1.528]}
          scale={0.014}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.006"]}
          position={[0.176, 0.273, -0.171]}
          rotation={[-0.119, 0.179, -1.549]}
          scale={0.014}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["Material.006"]}
          position={[0.176, 0.273, -0.171]}
          rotation={[-0.119, 0.179, -1.549]}
          scale={0.014}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["Material.006"]}
          position={[-0.255, 0.273, -0.171]}
          rotation={[3.023, 0.179, -1.549]}
          scale={-0.014}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials["Material.006"]}
          position={[-0.26, 0.273, -0.172]}
          rotation={[3.019, 0.177, -1.528]}
          scale={-0.014}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.type_c.geometry}
          material={materials.metal}
          position={[-0.365, 0.532, 0.297]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        position={[-0.319, 0.685, 0.65]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={2.76}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack.geometry}
          material={materials["Material.024"]}
          position={[-0.006, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.025, 0.019, 0.019]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack001.geometry}
          material={materials["Material.031"]}
          position={[-0.011, 0.015, 0.009]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack002.geometry}
          material={materials["Material.030"]}
          position={[-0.015, 0.011, -0.006]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <group
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_1.geometry}
            material={materials["main body"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_2.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_3.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_4.geometry}
            material={materials["Material.029"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack004.geometry}
          material={materials["Material.024"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack005.geometry}
          material={materials["Material.026"]}
          position={[0.001, 0, 0.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack007.geometry}
          material={materials["Material.024"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack008.geometry}
          material={materials["main body.001"]}
          position={[0.002, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack009.geometry}
          material={materials["main body"]}
          position={[0.001, 0.007, 0.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack010.geometry}
          material={materials["Material.020"]}
          position={[-0.013, 0.014, 0.004]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack011.geometry}
          material={materials["main body"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack012.geometry}
          material={materials["Material.009"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack013.geometry}
          material={materials["Material.009"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack014.geometry}
          material={materials["Material.011"]}
          position={[0, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <group
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_2.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_3.geometry}
            material={materials["Material.012"]}
          />
        </group>
      </group>
      <group position={[0.001, 0, 0.023]} scale={0.283}>
        <group
          position={[-1.049, 2.471, 0.283]}
          rotation={[0, -1.172, Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[-0.781, 2.471, -0.963]}
          rotation={[-Math.PI, -0.75, -Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[0.487, 2.471, -1.148]}
          rotation={[Math.PI, 0.453, -Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[1.064, 2.471, 0.037]}
          rotation={[Math.PI, 1.119, -Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[0.08, 2.471, 0.905]}
          rotation={[0, 0.998, Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.ShinyPlastic}
          position={[-0.168, 0.549, -0.072]}
          rotation={[0, -0.822, 0]}
          scale={0.57}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials.Plastic}
          position={[-0.051, 0.738, -0.181]}
          rotation={[0, -0.822, 0]}
        />
      </group>
      <group ref={avatar} rotation-x={-Math.PI / 2}>
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <primitive object={nodes.Hips} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/hero.glb");
