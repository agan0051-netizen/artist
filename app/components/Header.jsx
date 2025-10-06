"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 
                 flex items-center justify-between 
                 w-full mt-5 max-w-6xl px-6 md:px-10 py-2 md:py-3
                 backdrop-blur-md bg-white/20 
                 rounded-none md:rounded-4xl shadow-md md:shadow-lg"
    >
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/eames official logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="md:w-10 md:h-10"
          />
        </Link>
        <Link href="/" className="hidden sm:block">
          <span className="font-medium font-[baskerville] tracking-wider text-xl md:text-3xl text-amber-50">
            CHARLES AND RAY EAMES
          </span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 font-medium text-lime-50">
        <li>
          <Link href="/about-charles" className="relative group pb-1">
            <span className="text-[14pt] font-light font-[avenir] text-amber-50">
              About
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-50 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link href="/works" className="relative group pb-1">
            <span className="text-[14pt] font-light font-[avenir] text-amber-50">
              Works
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-50 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link href="/contact" className="relative group pb-1">
            <span className="text-[14pt] font-light font-[avenir] text-amber-50">
              Contact
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-50 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-amber-50 transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-amber-50 transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full right-4 left-4 mt-2 
                    bg-white/90 backdrop-blur-md 
                    rounded-xl shadow-lg p-4 flex flex-col gap-4 
                    text-gray-900 font-medium transition-all duration-300
                    ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <Link href="/about-charles" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link href="/works" onClick={() => setMenuOpen(false)}>
          Works
        </Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  );
}