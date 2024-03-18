import LandingHero from "@/components/LandingHero";
import LandingSocial from "@/components/LandingSocial";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-7xl items-center mx-auto justify-center md:justify-between px-12">
      <LandingSocial />
      <LandingHero />
      {/* <LandingHero />
      <LandingCards />
      <LandingAbout />
      <LandingSkills />
      <LandingExperience />
      <LandingPortfolio /> */}
    </main>
  );
}
