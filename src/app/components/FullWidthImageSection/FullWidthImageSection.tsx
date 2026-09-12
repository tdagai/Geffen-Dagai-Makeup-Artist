'use client'

import Image from "next/image";
import GenericGrid from "../UI/GenericGrid";
import SectionBg from "@assets/homepage/FullWidthImageSection/SectionBg.png";
import Link from "next/link";
import StyledButton from "../StyledButton/StyledButton";

const FullWidthImageSection = () => {

  console.log(SectionBg)

  return (
    <GenericGrid as="section" className="items-center" >
      <div className="h-164 md:h-245 shadow-big-b col-span-4 overflow-hidden rounded-2xl object-cover md:col-span-12 md:rounded-none md:shadow-none">
        <Image
          src={SectionBg}
          alt="A behind the scenes image of Geffen doing an actress's makeup on set"
          className="m-auto h-full w-full object-cover object-center"
        />
      </div>
      <div className="md:bg-secondary bg-primary-25 md:shadow-big h-164 absolute flex w-full flex-col items-center justify-center gap-6 rounded-2xl p-6 md:ml-12 md:h-auto md:w-auto md:p-16">
        <h3 className="font-young md:text-primary text-4xl! text-shadow-[2px_2px_rgba(1,70,0)] md:text-shadow-none text-center text-white">
          Who Am I?
        </h3>
        <span className="max-w-84 font-instrument text-shadow-[1px_1px_rgba(1,70,0)] md:text-shadow-none text-center text-xl tracking-[3%] text-white md:text-black">
          {"Passionate Makeup Artist with over five years of on-set experience preparing, applying, and removing various styles of makeup including natural, glam, editorial, SFX, and period. Over the years I’ve had the pleasure of connecting and working directly with industry professionals and I'd love to continue to grow my network."}
        </span>
        <Link href="/about">
          <StyledButton>
            {"Wanna Know More? →"}
          </StyledButton>
        </Link>
      </div>
    </GenericGrid>
  )
}

export default FullWidthImageSection;