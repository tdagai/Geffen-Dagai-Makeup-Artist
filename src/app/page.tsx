'use client'

import { HomepageHero, PortfolioSection } from "./components";

export default function Home() {
  return (
    <div className="bg-background-green flex flex-1 flex-col items-center gap-y-24 font-sans">
      <HomepageHero />
      <PortfolioSection />
    </div>
  );
}
