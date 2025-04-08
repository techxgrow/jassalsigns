import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="big_footer" className="bg-black text-white">
      {/* Primary Footer */}
      <div id="primary_footer" className="py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div className="flex flex-col items-center space-y-2">
            <FaPhone className="text-2xl text-yellow-500" />
            <p className="text-base">(604) 599 4221</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center space-y-2">
            <FaMapMarkerAlt className="text-2xl text-yellow-500" />
            <p className="text-base">
            7728 128 St Unit 101, Surrey <br />
            BC V3W 1L3, Canada
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center space-y-2">
            <FaEnvelope className="text-2xl text-yellow-500" />
            <p className="text-base">
              <a href="mailto:info@jassalsigns.com" className="hover:underline">
              info@jassalsigns.com
              </a>
              {/* <br />
              <a href="mailto:job@example.com" className="hover:underline">
                job@example.com
              </a> */}
            </p>
          </div>
        </div>
      </div>

      {/* Secondary Footer */}
      <div id="secondary_footer" className="bg-black py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500"> Copyright © 2025 JASSAL SIGNS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}