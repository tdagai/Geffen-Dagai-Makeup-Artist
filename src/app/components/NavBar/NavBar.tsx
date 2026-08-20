'use client'
import Link from "next/link";
import NavLogo from "@assets/nav_logo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="bg-secondary h-[134px] w-full sticky flex items-center justify-center text-2xl tracking-wide border-primary border-b-4">
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
  )
}

export default NavBar;