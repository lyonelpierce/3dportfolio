import { useState, useEffect } from "react";
import { Environment, PresentationControls } from "@react-three/drei";

import { HeroModel } from "./Hero";

export const HeroExperience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const heroScale = isMobile ? 2.8 : 2.2;
  const heroPosition = isMobile ? [0.5, -2, 0] : [0.3, -1.7, 0];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={0.5}
        position={[-5, 5, 5]}
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
        <HeroModel scale={heroScale} position={[0.3, -1.7, 0]} />
      </PresentationControls>
      <Environment preset="apartment" />
    </>
  );
};
