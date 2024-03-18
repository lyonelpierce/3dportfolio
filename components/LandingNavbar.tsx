import Link from "next/link";

import Logo from "@/components/Logo";
import { Switch } from "@/components/ui/switch";

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
  return (
    <div className="fixed top-0 w-full h-20 z-50">
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
            <Switch />
          </div>
        </header>
      </div>
    </div>
  );
};

export default LandingNavbar;
