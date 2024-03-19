import { OrbitControls, PresentationControls } from "@react-three/drei";
import { AboutModel } from "@/components/About";

export const AboutExperience = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight
        intensity={2}
        position={[55, 15, 40]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <AboutModel
          scale={2.3}
          position={[0, -2.5, 0]}
          rotation={[0, -10.4, 0]}
        />
      </PresentationControls>
    </>
  );
};
