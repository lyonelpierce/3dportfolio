"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { RevealList } from "next-reveal";
import Image from "next/image";
import { AboutExperience } from "./AboutExperience";

const LandingAbout = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row flex-col justify-between items-center gap-32 my-20"
    >
      <RevealList
        interval={200}
        delay={500}
        className="w-full flex flex-col md:flex-row gap-5"
      >
        <div className="md:w-1/2 w-full relative">
          <Image
            src="/images/blob.svg"
            className="w-full h-full -z-10 select-none"
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
              <AboutExperience />
            </Canvas>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col md:flex-row md:gap-8">
          <div className="">
            <div className="uppercase text-lg whitespace-nowrap font-semibold md:-rotate-90 md:flex flex-col md:flex-row-reverse items-center w-2.5">
              About me
              <div className="md:absolute md:left-1/2 mx-8 md:mx-0 md:-ml-36 w-0.5 h-16 bg-white -rotate-90 mt-[-1.8rem] md:mt-0" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="about-item">
              <h2 className="text-3xl font-bold">Need a Web Application?</h2>
              <h2 className="text-3xl font-bold mb-6">I can Help You!</h2>
            </div>
            <p className="text-base text-white leading-loose text-md">
              Hi! I’m Lyonel Pierce, I’m a Full Stack Developer and Web Designer
              who has passion for building creative and functional web
              applications with intuitive functionality. I enjoy the process of
              coding, and turning ideas into reality using creative solutions.
              I’m always curious about learning new skills, tools, and concepts.
              In addition to working on various solo projects, I have worked
              with creative teams, which involves daily stand-ups,
              communications, version control, and project management.
            </p>
            <div className="flex gap-5 md:flex-row flex-col mt-8">
              <Button className="bg-[#f66e4c] text-base py-6 px-5 rounded-lg font-bold uppercase text-white hover:bg-white hover:text-orange-600">
                Hire Me
              </Button>
              <Link href="/assets/RESUME.pdf" target="_blank">
                <Button
                  className="w-full py-6 text-base uppercase font-bold border-0 ring-1 ring-white ring-inset hover:bg-white hover:text-[#303030]"
                  variant="outline"
                >
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </RevealList>
    </div>
  );
};

export default LandingAbout;
