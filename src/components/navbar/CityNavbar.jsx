"use client";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "@/logo.png";
const CityNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const dropdownItems = [
    { name: "Indoor Signs", link: "/products/indoorsigns" },
    { name: "Outdoor Signs", link: "/products/outdoorsigns" },
    { name: "Vehicle Wraps", link: "/products/vehiclewraps" },
    { name: "Channel Letters", link: "/products/channelletters" },
    { name: "Pylon Signs", link: "/products/pylonsigns" },
    { name: "Print Media", link: "/products/printmedia" },
    { name: "Other Products", link: "/products/otherproducts" },
  ];

  const [isLightPage, setIsLightPage] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLightPage(
      router.pathname === "/contact" || router.pathname === "/gallery",
    );
  }, [router.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

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
          ? "bg-white backdrop-blur-sm shadow-md"
          : isLightPage
            ? "bg-white shadow-sm py-2"
            : "bg-transparent"
      }`}
    >
      {/* Top bar for desktop */}
      <div
        className={`bg-black hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${
          isScrolling || isLightPage
            ? "max-h-0 opacity-0"
            : "max-h-20 opacity-100"
        }`}
      >
        <div className="md:max-w-[85vw] max-w-[95vw] mx-auto flex items-center justify-between py-2 px-6 md:px-0">
          <div className="flex gap-6 items-center text-white">
            <a
              href="tel:+1 (780) 437-7790"
              className="flex gap-2 items-center hover:underline"
            >
              <FaPhoneAlt />
              <span>+1 (780) 437-7790</span>
            </a>
            <a
              href="mailto:jrbsigns@gmail.com"
              className="flex gap-2 items-center hover:underline"
            >
              <FaEnvelope />
              <span>jrbsigns@gmail.com</span>
            </a>
          </div>

          <div className="flex space-x-4 items-center text-lg text-white">
            <a
              href="https://www.facebook.com/JASSALSIGNSEDMONTON/"
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
      <div className="md:max-w-[85vw] max-w-[90vw] mx-auto flex items-center justify-between py-4 px-6 md:px-0">
        {/* Logo */}
        <Link href="/">
          <img src={logo.src} className="w-[200px]" alt="Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-50 ${
            (isLightPage || isScrolling) && !menuOpen
              ? "text-black"
              : "text-white"
          }`}
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <IoMdClose className="text-[30px]" />
          ) : (
            <div>
              <div
                className={`w-6 h-1 mb-1 ${
                  isLightPage || isScrolling ? "bg-black" : "bg-white"
                }`}
              />
              <div
                className={`w-6 h-1 mb-1 ${
                  isLightPage || isScrolling ? "bg-black" : "bg-white"
                }`}
              />
              <div
                className={`w-6 h-1 ${
                  isLightPage || isScrolling ? "bg-black" : "bg-white"
                }`}
              />
            </div>
          )}
        </button>

        {/* Navbar Links */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center transition-all duration-300 md:static md:flex md:flex-row md:justify-end md:items-center md:bg-transparent md:h-auto md:w-auto ${
            menuOpen ? "block" : "hidden md:flex"
          } ${
            (isLightPage || isScrolling) && !menuOpen
              ? "md:text-black"
              : "md:text-white"
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
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ED1D26] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li
              ref={dropdownRef}
              className="relative group cursor-pointer"
              onMouseEnter={() => {
                if (window.innerWidth >= 768) {
                  setDropdownOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) {
                  setDropdownOpen(false);
                }
              }}
            >
              <div className="flex items-center gap-1 hover:text-[#ED1D26] transition-colors">
                <Link
                  href="/products"
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(false);
                  }}
                  className="transition-colors"
                >
                  Products
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className="p-1 focus:outline-none flex items-center justify-center"
                  aria-expanded={dropdownOpen}
                  aria-label="Toggle products menu"
                >
                  <FaChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown Menu */}
              <div
                className={`
                  transition-all duration-300 ease-in-out overflow-hidden md:overflow-visible
                  ${dropdownOpen 
                    ? "opacity-100 max-h-[400px] mt-3 md:mt-0 md:translate-y-0 md:visible pointer-events-auto" 
                    : "opacity-0 max-h-0 pointer-events-none md:max-h-none md:-translate-y-2 md:invisible"
                  }
                  md:absolute md:left-0 md:top-full md:mt-2 md:rounded-xl md:py-3 md:px-4 md:w-56 md:z-50
                  md:shadow-xl md:border md:text-left
                  ${(isLightPage || isScrolling) 
                    ? "md:bg-white md:text-black md:border-gray-100" 
                    : "md:bg-[#0a0a0a] md:text-white md:border-white/10"
                  }
                  /* Mobile defaults */
                  w-full bg-transparent border-0 shadow-none text-center flex flex-col items-center gap-3
                `}
              >
                <ul className="flex flex-col gap-3 md:gap-2.5 text-base md:text-sm font-medium w-full text-center md:text-left">
                  {dropdownItems.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.link}
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                        className="block py-1 md:py-0.5 hover:text-[#ED1D26] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ED1D26] transition-colors"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ED1D26] transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ED1D26] transition-colors"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ED1D26] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-8 md:mt-0 md:ml-8">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[#ED1D26] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block border border-[#ED1D26]"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CityNavbar;
