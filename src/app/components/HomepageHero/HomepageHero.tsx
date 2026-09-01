'use client'

import Image from "next/image";
import StyledButton from "../StyledButton/StyledButton";
import HeroImage from "@assets/homepage/hero.jpg";

const HomepageHero = () => {
  return (
    <section className="mt-24 grid w-full grid-cols-12 gap-8">
      <div className="row-1 col-start-2 col-end-7 flex flex-col justify-evenly">
        <h1 className="text-primary font-young">
          A Versatile Artist For All Your Makeup Needs
        </h1>
        <h3 className="font-instrument tracking-[3%]">
          Done up, dirty, personal, or character, I can make it all come together
        </h3>
        <StyledButton>{"Reach Out!"}</StyledButton>
      </div>
      <div className="col-start-8 col-end-12">
        <Image
          src={HeroImage}
          alt="a picture of Geffen on a lit green background"
          className="shadow-big rounded-2xl"
        />
      </div>
    </section>
  )
}

export default HomepageHero;