import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const CityFooter = () => {
  return (
    <footer className="bg-[#111] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About / Logo */}
        <div>
          {/* Logo */}
          <img
            src="/logo.webp"
            alt="Mega Signs Logo"
            className="h-12 mb-4"
          />
          {/* About Text */}
          <p className="text-sm text-gray-300 leading-relaxed">
            Mega Signs is a full-service signage company. We specialize in high-quality custom signs for businesses
            across various industries.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

          {/* Quick Links */}
          <div>
          <h2 className="text-lg font-semibold mb-4">QUICK LINKS</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="/citypage">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4">PRODUCTS</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Channel Letters</li>
            <li>Indoor Signs</li>
            <li>Outdoor Signs</li>
            <li>Pylon Signs</li>
            <li>Channel Letters</li>
          </ul>
        </div>

      

        {/* Subscribe */}
        <div>
          <h2 className="text-lg font-semibold mb-4">SUBSCRIBE TO OUR SIGNAGE INSIGHTS</h2>
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
              className="w-full cursor-pointer bg-orange-600 hover:bg-orange-700 transition-all text-white py-2 font-semibold text-sm "
            >
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>2025 © Copyright, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default CityFooter;
