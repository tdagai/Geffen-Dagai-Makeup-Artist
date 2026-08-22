'use client'
import Link from "next/link";
import NavLogo from "@assets/nav_logo.png";
import Image from "next/image";
import { useMediaPredicate } from "react-media-hook";

const DesktopNav = () => {
  return (
    <div className="bg-secondary h-[134px] w-full sticky hidden md:flex items-center justify-center text-2xl tracking-wide border-primary border-b-4">
      <div className="w-full flex font-instrument justify-evenly">
        <Link
          href="/portfolio"
          className="underline-slide-out"
        >
          Portfolio
        </Link>
        <Link
          href="/resume"
          className="underline-slide-out"
        >
          Resume
        </Link>
      </div>
      <Link href="/">
        <Image
          src={NavLogo}
          alt="website nav logo"
          loading="eager"
          className="transition duration-150 ease-in-out hover:scale-110"
        />
      </Link>
      <div className="w-full flex font-instrument justify-evenly">
        <Link
          href="/about"
          className="underline-slide-out"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="underline-slide-out"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

const MobileNav = () => {
  return (
    <div className="bg-secondary h-[100px] w-full sticky flex items-center justify-center border-primary border-b-4 md:hidden">
      <Link href="/">
        <Image
          src={NavLogo}
          alt="website nav logo"
          loading="eager"
          width={260}
        />
      </Link>
    </div>
  );
}

const ResponsiveNav = () => {
  const mobileSize = useMediaPredicate("(max-width: 768px)");
  return (
    <div className="bg-secondary h-[100px] md:h-[134px] w-full sticky flex items-center justify-between md:justify-center text-2xl tracking-wide border-primary border-b-4">
      <div className="w-full hidden md:flex font-instrument justify-evenly">
        <Link
          href="/portfolio"
          className="underline-slide-out"
        >
          Portfolio
        </Link>
        <Link
          href="/resume"
          className="underline-slide-out"
        >
          Resume
        </Link>
      </div>
      <Link href="/" className="w-[260px] md:w-auto">
        <Image
          src={NavLogo}
          alt="website nav logo"
          loading="eager"
          className="transition duration-150 ease-in-out hover:scale-110"
        />
      </Link>
      <div className="w-full hidden md:flex font-instrument justify-evenly">
        <Link
          href="/about"
          className="underline-slide-out"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="underline-slide-out"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}


const NavBar = () => {

  return (<ResponsiveNav />);
}

export default NavBar;