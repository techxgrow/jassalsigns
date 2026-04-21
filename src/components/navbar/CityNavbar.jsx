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
import { useRouter } from "next/router";
import logo from "@/logo.png";
const CityNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Use state for home page check to avoid hydration issues
  const [isHomePage, setIsHomePage] = useState(false);
  const [isLightPage, setIsLightPage] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initial check
    setIsHomePage(router.pathname === "/");
    setIsLightPage(
      router.pathname === "/contact" || router.pathname === "/gallery",
    );
  }, [router.pathname]);

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

  // Don't render complex logic until mounted to prevent hydration mismatch
  const NavLink = ({ to, href, children }) => {
    if (!mounted) return <span className="cursor-pointer">{children}</span>;

    // Fixed logic for scrolling: if we are on the home page, use ScrollLink.
    // Ensure the check is robust.
    if (isHomePage) {
      return (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#ED1D26] transition-colors cursor-pointer"
        >
          {children}
        </ScrollLink>
      );
    }
    return (
      <Link
        href={href}
        onClick={() => setMenuOpen(false)}
        className="hover:text-[#ED1D26] transition-colors cursor-pointer"
      >
        {children}
      </Link>
    );
  };

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
              href="tel:+1 916 982 9297"
              className="flex gap-2 items-center hover:underline"
            >
              <FaPhoneAlt />
              <span>+1 916 982 9297</span>
            </a>
            <a
              href="mailto:Jassalsignssac@gmail.com"
              className="flex gap-2 items-center hover:underline"
            >
              <FaEnvelope />
              <span>Jassalsignssac@gmail.com</span>
            </a>
          </div>

          <div className="flex space-x-4 items-center text-lg text-white">
            {/* <a
              href="https://www.facebook.com/JASSALSIGNSsacramento/"
              aria-label="Facebook"
              className="hover:text-[#ED1D26] text-2xl"
            >
              <FaFacebook />
            </a> */}
            <a
              href="https://www.instagram.com/jassalsigns_sacramento?igsh=NXB5YXlvNHM0MmI0"
              aria-label="Instagram"
              className="hover:text-[#ED1D26] text-2xl"
            >
              <FaInstagram />
            </a>
            {/* <a
              href="https://www.linkedin.com/company/jassalsigns/?originalSubdomain=ca"
              aria-label="LinkedIn"
              className="hover:text-[#ED1D26] text-2xl"
            >
              <FaLinkedin />
            </a> */}
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
            <li>
              <NavLink to="productSection" href="/#productSection">
                Products
              </NavLink>
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
