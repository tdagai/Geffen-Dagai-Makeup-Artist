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
      <nav className="bg-secondary h-[100px] md:h-[134px] w-full sticky flex items-center justify-between md:justify-center text-2xl tracking-wide border-primary border-b-4 z-20">
        <ul className="w-full hidden md:flex font-instrument justify-evenly z-20">
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
        <Link href="/" as="/" className="w-[260px] md:w-auto z-20">
          <Image
            src={NavLogo}
            alt="website nav logo"
            loading="eager"
            className="transition duration-150 ease-in-out hover:scale-110"
          />
        </Link>
        <ul className="w-full hidden md:flex font-instrument justify-evenly z-20">
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
      <ul className={`text-xl border-primary border-b-4 w-full absolute top-[100px] left-0 ${navOpen ? "-translate-y-full" : ""} transition-transform duration-300 ease-in-out bg-secondary flex flex-row z-15 font-instrument justify-evenly py-[1rem] md:hidden`}>
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