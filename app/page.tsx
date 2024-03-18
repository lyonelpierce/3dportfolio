import LandingHero from "@/components/LandingHero";
import LandingCards from "@/components/LandingCards";
import LandingSocial from "@/components/LandingSocial";
import LandingScroll from "@/components/LandingScroll";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-7xl items-center mx-auto justify-center md:justify-between px-4 md:px-12">
      <LandingSocial />
      <LandingScroll />
      <LandingHero />
      <LandingCards />
      {/*
     
      <LandingAbout />
      <LandingSkills />
      <LandingExperience />
      <LandingPortfolio /> */}
    </main>
  );
}
