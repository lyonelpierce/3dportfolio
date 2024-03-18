"use client";

import Link from "next/link";

import { GithubIcon, LinkedinIcon } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";

const LandingSocial = () => {
  return (
    <div className="hidden fixed bottom-0 left-0 p-8 md:flex flex-col gap-4 justify-center items-center text-[#9e9e9e]">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href="https://github.com/lyonelpierce" target="_blank">
              <GithubIcon className="w-5 h-5 transition-all ease-in-out hover:scale-110 hover:text-white" />
            </Link>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={10}
            className="font-semibold p-2"
          >
            Github
            <TooltipArrow width={11} height={5} className="fill-[#f66e4c]" />
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href="https://www.linkedin.com/in/lyonelpierce/"
              target="_blank"
            >
              <LinkedinIcon className="w-5 h-5 transition-all ease-in-out hover:scale-110 hover:text-white" />
            </Link>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={10}
            className="font-semibold p-2"
          >
            LinkedIn
            <TooltipArrow width={11} height={5} className="fill-[#f66e4c]" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="w-0.5 h-10 bg-[#9e9e9e]" />
    </div>
  );
};

export default LandingSocial;
