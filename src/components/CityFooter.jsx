import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";

const CityFooter = () => {
  const router = useRouter();

  const handleCityClick = (e, path) => {
    const normalizedCurrent = router.asPath
      .split("?")[0]
      .split("#")[0]
      .toLowerCase()
      .replace(/\/$/, "");
    const normalizedTarget = path.toLowerCase().replace(/\/$/, "");

    if (normalizedCurrent === normalizedTarget) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#111] text-white py-12 px-6 bg-[url('/footer-bg.png')] bg-cover bg-center">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* About / Logo */}
        <div>
          <img src="/logo.png" alt="Mega Signs Logo" className="h-12 mb-4" />
          <p className="text-[16px] text-white leading-relaxed">
            Jassal Signs is a full-service signage company. We specialize in
            high-quality custom signs for businesses across various industries.
          </p>
          <div className="flex space-x-4 mt-6 text-lg">
            {/* <a
              href="https://www.facebook.com/jassalsignsltd/"
              aria-label="Facebook"
              className="hover:text-[#ED1D26] text-2xl transition-colors"
            >
              <FaFacebook />
            </a> */}
            <a
              href="https://www.instagram.com/jassalsigns_sacramento?igsh=NXB5YXlvNHM0MmI0"
              aria-label="Instagram"
              className="hover:text-[#ED1D26] text-2xl transition-colors mt-2 "
            >
              <FaInstagram />
            </a>
            {/* <a
            href="https://www.linkedin.com/company/jassalsigns/?originalSubdomain=ca"
            aria-label="LinkedIn"
            className="hover:text-[#ED1D26] text-2xl transition-colors"
            >
            <FaLinkedin />
            </a> */}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:block">
          <h2 className="text-lg font-semibold mb-6 font-grotesk underline underline-offset-4">
            QUICK LINKS
          </h2>
          <ul className="space-y-3 text-white">
            <li>
              <ScrollLink
                to="home"
                smooth
                offset={-60}
                duration={500}
                className="hover:text-[#ED1D26] text-[16px] cursor-pointer transition-colors"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="productSection"
                smooth
                offset={-60}
                duration={500}
                className="hover:text-[#ED1D26] text-[16px] cursor-pointer transition-colors"
              >
                Products
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="blogsSection"
                smooth
                offset={-60}
                duration={500}
                className="hover:text-[#ED1D26] text-[16px] cursor-pointer transition-colors"
              >
                Blogs
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="gallerySection"
                smooth
                offset={-60}
                duration={500}
                className="hover:text-[#ED1D26] text-[16px] cursor-pointer transition-colors"
              >
                Gallery
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth
                offset={-60}
                duration={500}
                className="hover:text-[#ED1D26] text-[16px] cursor-pointer transition-colors"
              >
                Contact Us
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="hidden md:block">
          <h2 className="text-lg font-semibold mb-6 font-grotesk underline underline-offset-4">
            SERVICES
          </h2>
          <ul className="space-y-3 text-white text-sm">
            <li>
              <Link
                href="/products/indoorsigns"
                className="hover:text-[#ED1D26] text-[16px] cursor-pointer transition-colors"
              >
                Indoor Signs
              </Link>
            </li>
            <li>
              <Link
                href="/products/vehiclewraps"
                className="hover:text-[#ED1D26] text-[16px] cursor-pointer transition-colors"
              >
                Vehicle Wraps
              </Link>
            </li>
            <li>
              <Link
                href="/products/outdoorsigns"
                className="hover:text-[#ED1D26] text-[16px] cursor-pointer transition-colors"
              >
                Outdoor Signs
              </Link>
            </li>
            <li>
              <Link
                href="/products/channelletters"
                className="hover:text-[#ED1D26] text-[16px] cursor-pointer transition-colors"
              >
                Channel Letters
              </Link>
            </li>
            <li>
              <Link
                href="/products/pylonsigns"
                className="hover:text-[#ED1D26] text-[16px] cursor-pointer transition-colors"
              >
                Pylon Signs
              </Link>
            </li>
            <li>
              <Link
                href="/products/printmedia"
                className="hover:text-[#ED1D26] text-[16px] cursor-pointer transition-colors"
              >
                Printing Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations Canada */}
        <div className="md:block hidden">
          <h2 className="text-lg font-semibold mb-6 font-grotesk underline underline-offset-4">
            British Columbia
          </h2>
          <ul className="space-y-3 text-white text-sm">
            {[
              { name: "Surrey", path: "/citypage/SURREY" },
              { name: "Cloverdale", path: "/citypage/CLOVERDALE" },
              { name: "Abbotsford", path: "/citypage/ABBOTSFORD" },
            ].map((city) => (
              <li key={city.name}>
                <Link
                  href={"#"}
                  className="hover:text-[#ED1D26] text-[16px] transition-colors"
                  onClick={(e) => handleCityClick(e, city.path)}
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mb-3 mt-6 font-grotesk underline underline-offset-4">
            Alberta
          </h2>
          <ul className="space-y-3 text-white text-sm">
            {[
              { name: "Calgary", path: "/citypage/CALGARY" },
              { name: "Edmonton", path: "/citypage/EDMONTON" },
            ].map((city) => (
              <li key={city.name}>
                <Link
                  href={"#"}
                  className="hover:text-[#ED1D26] text-[16px] transition-colors"
                  onClick={(e) => handleCityClick(e, city.path)}
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations USA */}
        <div className="md:block hidden">
          <h2 className="text-lg font-semibold mb-6 font-grotesk underline underline-offset-4">
            United States
          </h2>
          <ul className="space-y-3 text-white text-sm">
            <li className="flex items-center text-[16px] group">
              <a
                href="https://www.jassalsignssac.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ED1D26] transition-colors"
              >
                Sacramento
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Form */}
        <div className="md:block hidden">
          <h2 className="text-lg font-semibold mb-6 font-grotesk">
            SUBSCRIBE TO OUR SIGNAGE INSIGHTS
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-2 bg-white text-black text-sm outline-none focus:ring-1 focus:ring-[#ED1D26]"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2 bg-white text-black text-sm outline-none focus:ring-1 focus:ring-[#ED1D26]"
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#ED1D26] hover:bg-red-700 transition-all text-white py-2 font-semibold font-grotesk text-sm"
            >
              SUBSCRIBE NOW
            </button>
          </form>
        </div>

        <div className="md:hidden grid grid-cols-2 gap-x-10 gap-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 font-grotesk underline underline-offset-4">
              SERVICES
            </h2>
            <ul className="space-y-2 text-white">
              <li>
                <Link
                  href="/products/indoorsigns"
                  className="hover:text-[#ED1D26] text-[16px]"
                >
                  Indoor Signs
                </Link>
              </li>
              <li>
                <Link
                  href="/products/vehiclewraps"
                  className="hover:text-[#ED1D26] text-[16px]"
                >
                  Vehicle Wraps
                </Link>
              </li>
              <li>
                <Link
                  href="/products/outdoorsigns"
                  className="hover:text-[#ED1D26] text-[16px]"
                >
                  Outdoor Signs
                </Link>
              </li>
              <li>
                <Link
                  href="/products/channelletters"
                  className="hover:text-[#ED1D26] text-[16px]"
                >
                  Channel Letters
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pylonsigns"
                  className="hover:text-[#ED1D26] text-[16px]"
                >
                  Pylon Signs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 font-grotesk underline underline-offset-4">
              LOCATIONS
            </h2>
            <h3 className="font-semibold text-sm mb-2 opacity-80">
              British Columbia
            </h3>
            <ul className="space-y-2 text-white mb-4">
              <li>
                <Link
                  href="/citypage/SURREY"
                  className="hover:text-[#ED1D26] text-[16px]"
                >
                  Surrey
                </Link>
              </li>
              <li>
                <Link
                  href="/citypage/CLOVERDALE"
                  className="hover:text-[#ED1D26] text-[16px]"
                >
                  Cloverdale
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold text-sm mb-2 opacity-80">Alberta</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link
                  href="/citypage/CALGARY"
                  className="hover:text-[#ED1D26] text-[16px]"
                >
                  Calgary
                </Link>
              </li>
              <li>
                <Link
                  href="/citypage/EDMONTON"
                  className="hover:text-[#ED1D26] text-[16px]"
                >
                  Edmonton
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-12 pt-6 text-center text-white text-[14px]">
        <p>2025 © Copyright, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default CityFooter;
