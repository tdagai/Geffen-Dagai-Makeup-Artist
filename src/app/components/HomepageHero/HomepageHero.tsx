'use client'

import Image from "next/image";
import StyledButton from "../StyledButton/StyledButton";
import HeroImage from "@assets/homepage/hero.jpg";

const HomepageHero = () => {
  return (
    <section className="grid w-full gap-4 sm:grid-cols-4 md:mt-24 md:grid-cols-12">
      <div className="flex flex-col justify-evenly gap-8 sm:col-start-1 sm:col-end-5 sm:row-start-2 md:col-start-2 md:col-end-7 md:row-start-1">
        <h1 className="text-primary font-young">
          A Versatile Artist For All Your Makeup Needs
        </h1>
        <h3 className="font-instrument tracking-[3%]">
          Done up, dirty, personal, or character, I can make it all come together
        </h3>
        <StyledButton>{"Reach Out!"}</StyledButton>
      </div>
      <div className="row-start-1 sm:col-start-1 sm:col-end-5 sm:w-full md:col-start-8 md:col-end-12 md:w-auto">
        <Image
          src={HeroImage}
          alt="a picture of Geffen on a lit green background"
          className="shadow-big rounded-b-2xl md:rounded-2xl"
        />
      </div>
    </section>
  )
}

export default HomepageHero;