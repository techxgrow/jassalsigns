import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { MapPin, Mail, Phone, ExternalLink, ChevronRight } from "lucide-react";
import logo from "@/logo.png";
import BmaBadge from "./BmaBadge";
// Flag Components
const CanadaFlag = () => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 24 16"
    className="inline-block mr-2 shadow-sm"
  >
    <rect width="24" height="16" fill="#FF0000" />
    <rect x="8" y="0" width="8" height="16" fill="#FFFFFF" />
    <path
      d="M12 3 L13 6 L16 6 L13.5 8 L14.5 11 L12 9 L9.5 11 L10.5 8 L8 6 L11 6 Z"
      fill="#FF0000"
    />
  </svg>
);

const USAFlag = () => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 24 16"
    className="inline-block mr-2 shadow-sm"
  >
    <rect width="24" height="16" fill="#B22234" />
    <rect y="1" width="24" height="1" fill="#FFFFFF" />
    <rect y="3" width="24" height="1" fill="#FFFFFF" />
    <rect y="5" width="24" height="1" fill="#FFFFFF" />
    <rect y="7" width="24" height="1" fill="#FFFFFF" />
    <rect y="9" width="24" height="1" fill="#FFFFFF" />
    <rect y="11" width="24" height="1" fill="#FFFFFF" />
    <rect y="13" width="24" height="1" fill="#FFFFFF" />
    <rect y="15" width="24" height="1" fill="#FFFFFF" />
    <rect width="10" height="8" fill="#3C3B6E" />
    {[...Array(5)].map((_, row) =>
      [...Array(6)].map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={1 + col * 1.5}
          cy={1 + row * 1.5}
          r="0.3"
          fill="white"
        />
      )),
    )}
  </svg>
);

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
    <footer className="relative bg-[#0a0a0a] text-white pt-24 pb-12 px-6 overflow-hidden">
      {/* Texture Background Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/footer-bg.png')] bg-repeat bg-center"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <img
                src={logo.src}
                alt="Jassal Signs Logo"
                className="h-16 w-auto brightness-110"
              />
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xs font-medium">
              Transforming businesses through elite signage, precision wraps,
              and high-impact printing for over{" "}
              <span className="text-white font-bold">20+ years</span>.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: <FaFacebook />,
                  url: "https://www.facebook.com/jassalsignsltd/",
                  label: "Facebook",
                },
                {
                  icon: <FaInstagram />,
                  url: "https://www.instagram.com/jassal_signs/?hl=en",
                  label: "Instagram",
                },
                {
                  icon: <FaLinkedin />,
                  url: "https://www.linkedin.com/company/jassalsigns/?originalSubdomain=ca",
                  label: "LinkedIn",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  aria-label={social.label}
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-xl hover:bg-[#ED1D26] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xl font-black uppercase tracking-widest text-white mb-8 relative inline-block">
              Sitemap
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ED1D26] rounded-full"></span>
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Franchise", path: "/franchise" },
                { name: "Blogs", path: "/blogs" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white font-bold text-md flex items-center gap-2 transition-all p-1"
                  >
                    <ChevronRight className="w-4 h-4 text-[#ED1D26]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-black uppercase tracking-widest text-white mb-8 relative inline-block">
              Expertise
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ED1D26] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Indoor Signs", path: "/products/indoorsigns" },
                { name: "Vehicle Wraps", path: "/products/vehiclewraps" },
                { name: "Outdoor Signs", path: "/products/outdoorsigns" },
                { name: "Channel Letters", path: "/products/channelletters" },
                { name: "Pylon Signs", path: "/products/pylonsigns" },
                { name: "Printing Services", path: "/products/printmedia" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="text-gray-400 hover:text-white font-bold text-md flex items-center gap-2 transition-all p-1"
                  >
                    <ChevronRight className="w-4 h-4 text-[#ED1D26]" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-xl font-black uppercase tracking-widest text-white mb-8 relative inline-block">
              Find Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ED1D26] rounded-full"></span>
            </h3>
            <div className="space-y-6">
              {[
                {
                  region: "British Columbia",
                  cities: [
                    { name: "Surrey", path: "/citypage/SURREY" },
                    { name: "Cloverdale", path: "/citypage/CLOVERDALE" },
                    { name: "Abbotsford", path: "/citypage/ABBOTSFORD" },
                  ],
                },
                {
                  region: "Alberta",
                  cities: [
                    { name: "Calgary", path: "/citypage/CALGARY" },
                    { name: "Edmonton", path: "/citypage/EDMONTON" },
                  ],
                },
              ].map((group) => (
                <div key={group.region}>
                  <h4 className="text-[#ED1D26] text-[15px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                    {/* Replaced MapPin with CanadaFlag */}
                    <CanadaFlag />
                    {group.region}
                  </h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {group.cities.map((city) => (
                      <button
                        key={city.name}
                        onClick={(e) => handleCityClick(e, city.path)}
                        className="text-gray-400 hover:text-white font-bold text-sm transition-colors"
                      >
                        {city.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <h4 className="text-[#ED1D26] text-[15px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                  {/* Replaced ExternalLink with USAFlag */}
                  <USAFlag />
                  United States
                </h4>
                <a
                  href="https://www.jassalsignssac.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white font-bold text-sm"
                >
                  Sacramento, CA
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-bold text-sm">
            © {new Date().getFullYear()} JASSAL SIGNS. ALL RIGHTS RESERVED.
          </p>

          <BmaBadge />

          <div className="text-gray-500 font-bold text-sm flex gap-8">
            <Link
              href="/terms-of-use"
              className="hover:text-white transition-colors"
            >
              TERMS
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              PRIVACY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CityFooter;
