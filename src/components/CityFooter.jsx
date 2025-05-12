import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";


const CityFooter = () => {
  return (
    <footer className="bg-[#111] text-white py-10 px-6 bg-[url('/footer-bg.png')] bg-cover bg-center">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About / Logo */}
        <div>
          {/* Logo */}
          <img src="/logo.png" alt="Mega Signs Logo" className="h-12 mb-4" />
          {/* About Text */}
          <p className="text-[16px] text-gray-300 leading-relaxed">
            Jassal Signs is a full-service signage company. We specialize in
            high-quality cushrefm signs for businesses across various industries.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-[#ED1D26] text-2xl">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#ED1D26] text-2xl">
              <FaInstagram />
            </a>
            <a href="#" aria-label="aedIn" className="hover:text-[#ED1D26] text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick as */}
        <div>
          <h2 className="text-lg font-semibold mb-4">QUICK LINKS</h2>
          <ul className="space-y-2 text-gray-300 ">
            <li>
              <a href="#" className="hover:text-[#ED1D26] text-[16px]">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ED1D26] text-[16px]">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ED1D26] text-[16px]">Products</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ED1D26] text-[16px]">Blogs</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ED1D26] text-[16px]">Gallery</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ED1D26] text-[16px]">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4">PRODUCTS</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#indoor-sign" className="hover:text-[#ED1D26] text-[16px]" >Indoor Signs</a></li>

            <li><a href="#vehicle-wrap" className="hover:text-[#ED1D26] text-[16px]">Vehicle Wraps</a></li>
            <li><a href="#print-media" className="hover:text-[#ED1D26] text-[16px]">Print Media</a></li>
            <li><a href="#outdoor-sign" className="hover:text-[#ED1D26] text-[16px]">Outdoor Signs</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
          SUBSCRIBE TO OUR SIGNAGE INSIGHTS
          </h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-2  bg-white text-black text-sm"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2  bg-white text-black text-sm"
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#ED1D26]  transition-all text-white py-2 px-3 font-semibold text-sm "
            >
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>

      {/* Bothrefm Section */}
      <div className="border-t border-white mt-10 pt-6 text-center text-white text-[14px]">
        <p>2025 © Copyright, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default CityFooter;
