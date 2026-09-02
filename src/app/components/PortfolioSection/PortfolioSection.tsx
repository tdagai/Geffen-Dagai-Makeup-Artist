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
      <div className="bg-secondary shadow-big flex flex-col items-center gap-6 md:col-span-10 md:col-start-2 md:rounded-2xl md:p-10">
        <h2 className="font-young text-primary text-center">My Work Speaks For Itself</h2>
        <div className="flex flex-row justify-evenly gap-4">
          {itemsList.map(({ text, imageSrc, alt, href }) => {
            return (
              <div key={text}>
                <h3 className="font-young text-primary text-center underline">{text}</h3>
                <div className="max-w-75 max-h-100 overflow-hidden rounded-2xl border border-black">
                  <Image
                    src={imageSrc}
                    alt={alt}
                    className=""
                  />
                </div>
              </div>
            )
          })}
        </div>
        <Link href="/portfolio">
          <StyledButton>
            See My Portfolio Here
          </StyledButton>
        </Link>
      </div>
    </GenericGrid>
  )
}

export default PortfolioSection;