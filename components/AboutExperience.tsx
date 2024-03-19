import { OrbitControls } from "@react-three/drei";
import { AboutModel } from "@/components/About";

export const AboutExperience = () => {
  return (
    <>
      <ambientLight intensity={2.5} />
      <directionalLight
        intensity={5}
        position={[55, 15, 40]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      <OrbitControls enableZoom={false} enablePan={false} />
      <AboutModel
        scale={2.3}
        position={[0, -2.5, 0]}
        rotation={[0, -10.3, 0]}
      />
    </>
  );
};
