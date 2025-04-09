"use client";

import { useEffect, useState } from "react";
import CustomButton from "./ui/CustomButton";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const CityNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-50 transition-all duration-300 ${
        isScrolling ? "bg-black/70 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between py-4 ">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.webp" className="w-[140px]" alt="Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50 text-white" onClick={toggleMenu}>
          {menuOpen ? <IoMdClose className="text-[30px]" /> : (
            <div>
              <div className="w-6 h-1 bg-white mb-1" />
              <div className="w-6 h-1 bg-white mb-1" />
              <div className="w-6 h-1 bg-white" />
            </div>
          )}
        </button>

        {/* Navbar Links */}
        <div
          className={`absolute top-0 left-0 w-full md:py-0 h-screen bg-black text-white flex flex-col items-center justify-center transition-all duration-300 md:static md:flex md:flex-row md:justify-end md:items-center md:bg-transparent md:h-auto md:w-auto ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 md:flex-row md:gap-6 text-xl font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#service" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors">
                Service
              </Link>
            </li>
            <li>
              <Link href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side Button (Desktop Only) */}
        <div className="hidden md:flex items-center">
          <Link href="#contact">
            <CustomButton>Contact Us</CustomButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CityNavbar;
