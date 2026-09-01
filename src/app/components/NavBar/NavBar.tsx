'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLogo from "@assets/nav_logo.png";
import HamburgerMenu from "@assets/hamburgerMenu.svg";

const ResponsiveNav = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="bg-secondary h-25 md:h-33.5 border-primary sticky z-20 flex w-full items-center justify-between border-b-4 text-2xl tracking-wide md:justify-center">
        <ul className="font-instrument z-20 hidden w-full justify-evenly md:flex">
          <li>
            <Link
              href="/portfolio"
              as="/portfolio"
              className="underline-slide-out"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              as="/resume"
              className="underline-slide-out"
            >
              Resume
            </Link>
          </li>
        </ul>
        <Link href="/" as="/" className="w-65 z-20 md:w-auto">
          <Image
            src={NavLogo}
            alt="website nav logo"
            loading="eager"
            className="transition duration-150 ease-in-out hover:scale-110"
          />
        </Link>
        <ul className="font-instrument z-20 hidden w-full justify-evenly md:flex">
          <li>
            <Link
              href="/about"
              as="/about"
              className="underline-slide-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              as="/contact"
              className="underline-slide-out"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          className="z-20 md:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          <Image
            src={HamburgerMenu}
            alt="hamburger menu icon"
            loading="eager"
            unoptimized
            height={32}
            className="mr-[1rem]"
          />
        </button>
      </nav>
      <ul className={`text-xl border-primary border-b-4 w-full absolute top-0 left-0 ${navOpen ? "translate-y-[100px]" : "translate-y-0"} transition-all duration-300 ease-in-out bg-secondary flex flex-row z-15 font-instrument justify-evenly py-[1rem] md:hidden`}>
        <li>
          <Link
            href="/portfolio"
            as="/portfolio"
            className="underline-slide-out"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            as="/resume"
            className="underline-slide-out"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            as="/about"
            className="underline-slide-out"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            as="/contact"
            className="underline-slide-out"
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}


const NavBar = () => {

  return (<ResponsiveNav />);
}

export default NavBar;