"use client"

import Image from "next/image";
import { GenericGrid } from "@components/index";
import Logo from "@assets/nav_logo.png";
import FooterCat from "@assets/footer_cat.svg";
import Link from "next/link";

type FooterLinksProps = {
  label: string;
  link: string;
}

interface LinksSectionProps {
  linksList: FooterLinksProps[]
}

const LinksSection = ({ linksList }: LinksSectionProps) => {
  return (
    <ul className="divide-primary divide-x-3 flex justify-center gap-6 pl-6">
      {linksList.map(({ label, link }) => {
        return (
          <li key={label} className="font-instrument flex gap-6 pr-6 text-2xl">
            <Link href={link} className="underline-slide-out">
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
    <GenericGrid as="section" className="md:mt-31 relative mt-20">
      <div className="bg-secondary relative col-span-4 col-start-1 grid grid-rows-2 pt-9 md:col-span-12 md:py-6">
        <div className="row-span-1 row-start-1 flex justify-center">
          <Image
            src={Logo}
            alt="website logo"
            loading="eager"
            className="w-82.5"
          />
        </div>
        <div className="flex items-center justify-center">
          <LinksSection linksList={footerLinks} />
        </div>
      </div>
      <div className="absolute bottom-0 ml-10">
        <Image
          src={FooterCat}
          alt="footer cat"
          loading="eager"
          height={195}
          width={137}
        />
      </div>
    </GenericGrid>
  )
}

export default Footer;