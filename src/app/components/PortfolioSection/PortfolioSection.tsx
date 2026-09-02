'use client'

import GenericGrid from "../UI/GenericGrid";
import FilmThumbnail from "@assets/homepage/portfolio/film.png"
import PhotographyThumbnail from "@assets/homepage/portfolio/photography.jpg"
import CommercialThumbnail from "@assets/homepage/portfolio/commercial.jpg"
import Image, { StaticImageData } from "next/image";
import StyledButton from "../StyledButton/StyledButton";
import Link from "next/link";

interface PortfolioSectionItemProps {
  text: string;
  imageSrc: StaticImageData;
  alt: string;
  href: string;
}

const PortfolioSection = () => {

  /**
   * TODO: update hrefs to include specific point to jump to on /portfolio
   */
  const itemsList: PortfolioSectionItemProps[] = [
    {
      text: "Film",
      imageSrc: FilmThumbnail,
      alt: "Portfolio Film Thumbnail",
      href: "/portfolio"
    },
    {
      text: "Commercial",
      imageSrc: CommercialThumbnail,
      alt: "Portfolio Commercial Thumbnail",
      href: "/portfolio"
    },
    {
      text: "Photography",
      imageSrc: PhotographyThumbnail,
      alt: "Portfolio Photography Thumbnail",
      href: "/portfolio"
    },
  ]

  return (
    <GenericGrid as="section">
      <div className="bg-secondary shadow-big col-span-4 flex flex-col items-center gap-4 rounded-2xl p-8 md:col-span-10 md:col-start-2 md:gap-6 md:p-10">
        <h2 className="font-young text-primary text-center">My Work Speaks For Itself</h2>
        <div className="flex w-full flex-col-reverse items-center justify-evenly gap-4 md:flex-row">
          {itemsList.map(({ text, imageSrc, alt, href }) => {
            return (
              <Link href={href} key={text}>
                <h3 className="font-young text-primary text-center underline">{text}</h3>
                <div className="max-w-75 max-h-100 overflow-hidden rounded-2xl border border-black">
                  <Image
                    src={imageSrc}
                    alt={alt}
                    className=""
                  />
                </div>
              </Link>
            )
          })}
        </div>
        <Link href="/portfolio" className="mt-8 md:mt-10">
          <StyledButton>
            See My Portfolio Here →
          </StyledButton>
        </Link>
      </div>
    </GenericGrid>
  )
}

export default PortfolioSection;