import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const HomepageFooter = () => {
  return (
    <footer className="bg-transparent text-white py-10 px-5 mt-10">
      <div className="mx-auto max-w-[1360px] grid grid-cols-1 md:grid-cols-4 gap-10 ">
        
        {/* About / Logo */}
        <div>
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Mega Signs Logo"
            className="h-12 mb-4"
          />
          {/* About Text */}
          <p className="text-[16px] text-white leading-relaxed">
            Jassal Signs is a full-service signage company. We specialize in high-quality custom signs for businesses
            across various industries.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-lg">
                     <a href="https://www.facebook.com/jassalsignsltd/" aria-label="Facebook" className="hover:text-[#ED1D26] text-2xl">
                       <FaFacebook />
                     </a>
                     <a href="https://www.instagram.com/jassal_signs/?hl=en" aria-label="Instagram" className="hover:text-[#ED1D26] text-2xl">
                       <FaInstagram />
                     </a>
                     <a href="https://www.linkedin.com/company/jassalsigns/?originalSubdomain=ca" aria-label="aedIn" className="hover:text-[#ED1D26] text-2xl">
                       <FaLinkedin />
                     </a>
                   </div>
        </div>

          {/* Quick Links */}
          <div>
          <h2 className="text-lg font-semibold mb-4">QUICK LINKS</h2>
          <ul className="space-y-2 text-white text-sm">
            <li><a href="#" className="text-[16px] hover:text-[#ED1D26]">Home</a></li>
            <li><a href="#" className="text-[16px] hover:text-[#ED1D26]">Products</a></li>
            <li><a href="#" className="text-[16px] hover:text-[#ED1D26]">Blogs</a></li>
            <li><a href="#" className="text-[16px] hover:text-[#ED1D26]">Gallery</a></li>
            <li><a href="#" className="text-[16px] hover:text-[#ED1D26]">Contact Us</a></li>
          </ul>
        </div>

        {/* Products */}

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4">PRODUCTS</h2>
          <ul className="space-y-2 text-white text-sm">
            <li><a href="#indoor-sign" className="hover:text-[#ED1D26] text-[16px]" >Indoor Signs</a></li>

            <li><a href="#vehicle-wrap" className="hover:text-[#ED1D26] text-[16px]">Vehicle Wraps</a></li>
            <li><a href="#outdoor-sign" className="hover:text-[#ED1D26] text-[16px]">Outdoor Signs</a></li>
              <li><a href="#outdoor-sign" className="hover:text-[#ED1D26] text-[16px]">Channel Letters</a></li>
               <li><a href="#outdoor-sign" className="hover:text-[#ED1D26] text-[16px]">Pylon Signs</a></li>
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
              className="w-full cursor-pointer bg-[#ED1D26] transition-all text-white py-2 font-semibold text-sm "
            >
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mx-auto max-w-[1360px] border-white mt-10 pt-6 text-center text-white text-sm">
        <p>2025 © Copyright, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default HomepageFooter;
