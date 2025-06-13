"use client";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import Link from "next/link";

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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-50 transition-all duration-300 ${
        isScrolling
          ? "bg-black/70 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Top bar for desktop */}
      <div
        className={`bg-black hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${
          isScrolling ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
        }`}
      >
        <div className="max-w-[85vw] mx-auto flex items-center justify-between py-2 px-6 md:px-0">
          <div className="flex gap-6 items-center text-white">
       <a href="tel:91 7706087842"  className="flex gap-2 items-center hover:underline">
              <FaPhoneAlt />
              <span>+1 (604) 599 4221</span>
            </a>
            <a href="mailto:someone@example.com" className="flex gap-2 items-center hover:underline">
              <FaEnvelope />
              <span>info@jassalsigns.com</span>
            </a>
          </div>

          <div className="flex space-x-4 items-center text-lg text-white">
            <a
              href="https://www.facebook.com/jassalsignsltd/"
              aria-label="Facebook"
              className="hover:text-[#ED1D26] text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/jassal_signs/?hl=en"
              aria-label="Instagram"
              className="hover:text-[#ED1D26] text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/jassalsigns/?originalSubdomain=ca"
              aria-label="LinkedIn"
              className="hover:text-[#ED1D26] text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-[85vw] mx-auto flex items-center justify-between py-4 px-6 md:px-0">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.png" className="w-[140px]" alt="Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50 text-white" onClick={toggleMenu}>
          {menuOpen ? (
            <IoMdClose className="text-[30px]" />
          ) : (
            <div>
              <div className="w-6 h-1 bg-white mb-1" />
              <div className="w-6 h-1 bg-white mb-1" />
              <div className="w-6 h-1 bg-white" />
            </div>
          )}
        </button>

        {/* Navbar Links */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center transition-all duration-300 md:static md:flex md:flex-row md:justify-end md:items-center md:bg-transparent md:h-auto md:w-auto ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 md:flex-row md:gap-6 text-xl font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ED1D26] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <ScrollLink
                href="#service"
                to="productSection"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ED1D26] transition-colors"
              >
                Products
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="gallerySection"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ED1D26] transition-colors cursor-pointer"
              >
                Gallery
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
               to="blogsSection"
                smooth={true}
                duration={500}
                offset={-50}

                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ED1D26] transition-colors hover:cursor-pointer"
              >
                Blogs
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
               smooth={true}
                duration={500}
                offset={-50}
                to="contactSection"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ED1D26] transition-colors hover:cursor-pointer"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CityNavbar;
