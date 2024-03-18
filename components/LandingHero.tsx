"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Button } from "@/components/ui/button";
import { HeroExperience } from "@/components/HeroExperience";

const LandingHero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center h-dvh w-full justify-center">
      <div className="flex flex-col gap-5 md:w-1/3">
        <h1 className="md:text-left text-center font-bold text-3xl md:text-5xl whitespace-nowrap">
          Lyonel Pierce
        </h1>
        <span className="text-center md:text-left font-medium md:whitespace-nowrap">
          Full Stack Developer | Web Designer | Graphic Designer
        </span>
        <Button
          variant="outline"
          size="sm"
          className="mx-auto md:mx-0 w-[180px] uppercase font-bold text-base py-6 text-[#f66e4c]"
        >
          Get in touch
        </Button>
      </div>
      <div className="flex justify-center md:w-2/3 w-full relative">
        <Image
          src="/images/splash.svg"
          className="w-full h-[32rem] md:h-screen -z-10 select-none"
          width={800}
          height={800}
          alt="Hero"
        />
        <div className="absolute top-0 w-full h-full">
          <Canvas
            shadows
            gl={{ antialias: true }}
            camera={{ position: [5, 2, 11], fov: 35 }}
            className="cursor-pointer"
          >
            <HeroExperience />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
