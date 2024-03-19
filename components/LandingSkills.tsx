"use client";

import Next from "@/components/icons/Next";
import Javascript from "@/components/icons/Javascript";
import Php from "@/components/icons/Php";
import Python from "@/components/icons/Python";
import Java from "@/components/icons/Java";
import Typescript from "@/components/icons/Typescript";
import Laravel from "@/components/icons/Laravel";
import Three from "@/components/icons/Three.js";
import Django from "@/components/icons/Django";
import SpringBoot from "@/components/icons/SpringBoot";
import Postgres from "@/components/icons/Postgres";
import MySql from "@/components/icons/MySql";
import Mongo from "@/components/icons/Mongo";
import Docker from "@/components/icons/Docker";
import Tailwind from "@/components/icons/Tailwind";
import Bootstrap from "@/components/icons/Bootstrap";
import Vercel from "@/components/icons/Vercel";
import React from "@/components/icons/React";
import Vue from "@/components/icons/Vue";
import Aws from "@/components/icons/Aws";
import Git from "@/components/icons/Git";
import Github from "@/components/icons/Github";
import Shadcn from "@/components/icons/Shadcn";
import Wordpress from "@/components/icons/Wordpress";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { RevealList } from "next-reveal";

const LandingSkills = () => {
  return (
    <div
      id="skills"
      className="flex md:flex-row flex-col justify-between items-center my-20"
    >
      <Tabs defaultValue="skills" className="md:flex gap-32">
        <RevealList
          interval={200}
          delay={500}
          className="w-full flex flex-col md:flex-row gap-5"
        >
          <div className="md:w-1/2 w-full flex flex-col md:flex-row md:gap-8">
            <div className="">
              <div className="uppercase text-lg whitespace-nowrap font-semibold md:-rotate-90 md:flex flex-col md:flex-row-reverse items-center w-2.5">
                My skills
                <div className="md:absolute md:left-1/2 mx-8 md:mx-0 md:-ml-36 w-0.5 h-16 bg-white -rotate-90 mt-[-1.8rem] md:mt-0"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="about-item">
                <h2 className="text-3xl font-bold capitalize">What do my?</h2>
                <h2 className="text-3xl font-bold mb-6 capitalize">
                  Skills include
                </h2>
              </div>
              <p className="text-base text-white leading-loose text-md">
                Experienced web application developer specializing in creating
                visually appealing and functional web solutions using a diverse
                range of design and web technologies.
              </p>
              <div className="flex gap-5 md:flex-row flex-col mt-8 items-center">
                <TabsList className="w-fit">
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:w-1/2 w-full">
            <TooltipProvider>
              <TabsContent
                value="skills"
                className="flex items-center justify-center"
              >
                <ul className="grid grid-rows-3 grid-cols-4 md:grid-rows-2 md:grid-cols-6 gap-4 my-12 justify-center">
                  <Tooltip>
                    <TooltipTrigger>
                      <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                        <Javascript width={50} height={50} />
                      </li>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Javascript</p>
                    </TooltipContent>
                  </Tooltip>

                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Php width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Python width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Java width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Typescript width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <React width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Next width={50} height={50} fill={"#fff"} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Vue width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Laravel width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Three width={50} height={50} stroke={"#fff"} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Django width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <SpringBoot width={50} height={50} />
                  </li>
                </ul>
              </TabsContent>
              <TabsContent
                value="tools"
                className="flex items-center justify-center"
              >
                <ul className="grid grid-rows-3 grid-cols-4 md:grid-rows-2 md:grid-cols-6 gap-4 my-12 justify-center">
                  <Tooltip>
                    <TooltipTrigger>
                      <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                        <Postgres width={50} height={50} />
                      </li>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Javascript</p>
                    </TooltipContent>
                  </Tooltip>

                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <MySql width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Mongo width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Tailwind width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Bootstrap width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Shadcn width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Docker width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Vercel width={50} height={50} fill={"#fff"} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Aws width={50} height={50} fill={"#fff"} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Git width={50} height={50} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Github width={50} height={50} fill={"#fff"} />
                  </li>
                  <li className="bg-[#303030] rounded-md w-fit p-4 shadow-2xl cursor-help">
                    <Wordpress width={50} height={50} />
                  </li>
                </ul>
              </TabsContent>
            </TooltipProvider>
          </div>
        </RevealList>
      </Tabs>
    </div>
  );
};

export default LandingSkills;
