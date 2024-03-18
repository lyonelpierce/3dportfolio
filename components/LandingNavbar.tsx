"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Logo from "@/components/Logo";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const NavMenu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 w-full h-24 z-50 transition-all ease-in-out duration-500",
        scrolled && "bg-[#303030] h-16 shadow-xl"
      )}
    >
      <div className="max-w-7xl mx-auto h-full">
        <header className="flex items-center justify-between h-full">
          <div>
            <Logo fill="white" />
          </div>
          <ul className="flex gap-10">
            {NavMenu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="font-semibold transition-all ease-in-out hover:text-orange-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <Switch
              className={cn(scrolled && "data-[state=unchecked]:bg-[#1f1f1f]")}
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default LandingNavbar;
