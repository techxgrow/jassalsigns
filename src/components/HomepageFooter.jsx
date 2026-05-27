import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import BmaBadge from "./BmaBadge";

const HomepageFooter = () => {
  return (
    <footer className="w-full text-white py-12 px-4 md:px-8 lg:px-12 relative z-50 bg-[#0a0a0a] border-t border-white/20 mt-20">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        {/* Brand Section (3 cols) */}
        <div className="lg:col-span-3 flex flex-col items-start gap-6">
          <img
            src="/logo.png"
            alt="Jassal Signs Logo"
            className="h-10 md:h-12 object-contain bg-white/5 p-1 rounded"
          />
          <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
            Jassal Signs is a full-service signage company specializing in
            high-quality custom signs for businesses across various industries.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/jassalsignsltd/"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ED1D26] hover:text-white transition-all duration-300 border border-white/10"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/jassal_signs/?hl=en"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ED1D26] hover:text-white transition-all duration-300 border border-white/10"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/jassalsigns/?originalSubdomain=ca"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ED1D26] hover:text-white transition-all duration-300 border border-white/10"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Links Section (2 cols) */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-bold font-grotesk tracking-wider mb-6 flex items-center gap-2 text-lg">
            <span className="w-1 h-5 bg-[#ED1D26]"></span> QUICK LINKS
          </h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm font-medium"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/franchise"
                className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm font-medium"
              >
                Franchise With Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section (2 cols) */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-bold font-grotesk tracking-wider mb-6 flex items-center gap-2 text-lg">
            <span className="w-1 h-5 bg-[#ED1D26]"></span> SERVICES
          </h3>
          <ul className="space-y-4 text-sm text-gray-300 font-medium">
            <li>
              <Link
                href="/products/indoorsigns"
                className="hover:text-white transition-colors"
              >
                Indoor Signs
              </Link>
            </li>
            <li>
              <Link
                href="/products/vehiclewraps"
                className="hover:text-white transition-colors"
              >
                Vehicle Wraps
              </Link>
            </li>
            <li>
              <Link
                href="/products/outdoorsigns"
                className="hover:text-white transition-colors"
              >
                Outdoor Signs
              </Link>
            </li>
            <li>
              <Link
                href="/products/channelletters"
                className="hover:text-white transition-colors"
              >
                Channel Letters
              </Link>
            </li>
            <li>
              <Link
                href="/products/pylonsigns"
                className="hover:text-white transition-colors"
              >
                Pylon Signs
              </Link>
            </li>
            <li>
              <Link
                href="/products/printmedia"
                className="hover:text-white transition-colors"
              >
                Printing Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations Section (2 cols) */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-bold font-grotesk tracking-wider mb-6 flex items-center gap-2 text-lg">
            <span className="w-1 h-5 bg-[#ED1D26]"></span> LOCATIONS
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-white/10 pb-1 inline-block">
                British Columbia
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 font-medium">
                <li>
                  <Link
                    href="/citypage/SURREY"
                    className="hover:text-white transition-colors"
                  >
                    Surrey
                  </Link>
                </li>
                <li>
                  <Link
                    href="/citypage/CLOVERDALE"
                    className="hover:text-white transition-colors"
                  >
                    Cloverdale
                  </Link>
                </li>
                <li>
                  <Link
                    href="/citypage/ABBOTSFORD"
                    className="hover:text-white transition-colors"
                  >
                    Abbotsford
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-white/10 pb-1 inline-block">
                Alberta
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 font-medium">
                <li>
                  <Link
                    href="/citypage/CALGARY"
                    className="hover:text-white transition-colors"
                  >
                    Calgary
                  </Link>
                </li>
                <li>
                  <Link
                    href="/citypage/EDMONTON"
                    className="hover:text-white transition-colors"
                  >
                    Edmonton
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subscribe Section (3 cols) */}
        <div className="lg:col-span-3">
          <h3 className="text-white font-bold font-grotesk tracking-wider mb-6 text-lg">
            SUBSCRIBE TO INSIGHTS
          </h3>
          <p className="text-gray-300 text-sm mb-6 font-medium">
            Stay updated with the latest trends in signage and branding.
          </p>
          <form className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ED1D26] focus:bg-white/20 transition-all placeholder:text-gray-400"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ED1D26] focus:bg-white/20 transition-all placeholder:text-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#ED1D26] hover:bg-[#c4121a] text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-[0_4px_14px_0_rgba(237,29,38,0.39)] hover:shadow-[0_6px_20px_rgba(237,29,38,0.23)] hover:-translate-y-0.5"
            >
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">
          © 2025 Jassal Signs Ltd. All Rights Reserved.
        </p>

        <BmaBadge />

        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default HomepageFooter;
