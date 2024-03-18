"use client";

import Link from "next/link";

import { RevealList } from "next-reveal";
import { LiaAwardSolid } from "react-icons/lia";
import { FiChevronRight } from "react-icons/fi";
import { PiProjectorScreenChart, PiUsersThreeLight } from "react-icons/pi";
import { Card, CardContent } from "./ui/card";

const CardList = [
  {
    title: "6+",
    subtitle: "Years of Experience",
    icon: LiaAwardSolid,
    iconColor: "#1f1f1f",
    bgColor: "#e4e4e4",
    link: "#",
  },
  {
    title: "40+",
    subtitle: "Completed Projects",
    icon: PiProjectorScreenChart,
    iconColor: "#e4e4e4",
    bgColor: "#f66e4c",
    link: "#",
  },
  {
    title: "30+",
    subtitle: "Happy Clients",
    icon: PiUsersThreeLight,
    iconColor: "#e4e4e4",
    bgColor: "#1f1f1f",
    link: "#",
  },
];

const LandingCards = () => {
  return (
    <div className="w-full h-screen md:h-[32rem] flex">
      <ul className="flex flex-col md:flex-row gap-5 w-full items-center justify-center">
        <RevealList
          interval={200}
          delay={500}
          className="w-full flex flex-col md:flex-row gap-5"
        >
          {CardList.map((card) => (
            <li className="w-full" key={card.title}>
              <Link
                href={card.link}
                className="flex justify-between items-center w-full"
              >
                <Card className="h-32 flex items-center justify-center w-full">
                  <CardContent className="flex items-center justify-between w-full px-6 py-0">
                    <card.icon
                      size={60}
                      color={card.iconColor}
                      style={{ backgroundColor: card.bgColor }}
                      className="rounded-full p-2"
                    />
                    <div className="text-center">
                      <p className="text-3xl font-semibold text-[#f66e4c]">
                        {card.title}
                      </p>
                      <span className="font-semibold">{card.subtitle}</span>
                    </div>
                    <FiChevronRight size={20} />
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </RevealList>
      </ul>
    </div>
  );
};

export default LandingCards;
