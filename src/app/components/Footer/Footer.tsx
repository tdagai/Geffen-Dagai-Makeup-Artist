"use client"

import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { GenericGrid } from "@components/index";
import Logo from "@assets/nav_logo.png";
import FooterCat from "@assets/footer_cat.svg";

type FooterLinksProps = {
  label: string;
  link: string;
}

interface LinksSectionProps {
  linksList: FooterLinksProps[]
}

const LinksSection = ({ linksList }: LinksSectionProps) => {
  return (
    <ul className="divide-primary divide-x-3 flex flex-wrap justify-center gap-3 pl-3 md:gap-6 md:pl-6">
      {linksList.map(({ label, link }) => {
        return (
          <li key={label} className="font-instrument text-md flex items-center gap-3 pr-3 md:gap-6 md:pr-6 md:text-2xl">
            <Link href={link} className="underline-slide-out text-center">
              {label}
            </Link>
          </li>
        )
      })
      }
    </ul>
  )
}

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 768px)', {
    initializeWithValue: false,
  });

  const footerLinks: FooterLinksProps[] = [
    {
      label: "Instagram",
      link: "https://www.instagram.com/makeupbygeffen/",
    },
    {
      label: "Portfolio",
      link: "/portfolio",
    },
    {
      label: "Resume",
      link: "/resume",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Contact Me",
      link: "/contact",
    },
    {
      label: "FAQ",
      link: "/faq",
    },
  ]

  return (
    <GenericGrid as="section" className="md:mt-31 relative mt-20 max-w-full">
      <div className="bg-secondary relative col-span-4 col-start-1 grid grid-rows-2 pt-9 md:col-span-12 md:pt-6">
        <div className="row-span-1 row-start-1 flex justify-center">
          <Image
            src={Logo}
            alt="website logo"
            loading="eager"
            className="w-64.5 md:w-82.5"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <LinksSection linksList={footerLinks} />
        </div>
      </div>
      <div className="bottom-21 absolute ml-4 md:bottom-0 md:ml-10">
        <Image
          src={FooterCat}
          alt="footer cat"
          loading="eager"
          style={{ width: isMobile ? 60 : 137, height: isMobile ? 86 : 195 }}
        />
      </div>
    </GenericGrid>
  )
}

export default Footer;