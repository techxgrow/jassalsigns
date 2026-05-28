import React from "react";
import { motion } from "framer-motion";

const FranchiseHero = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/extraImages/franchise.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Subtle World Map Overlay */}
        <div
          className="absolute inset-0 opacity-10 invert grayscale mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/world-map.png')",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[85vw] mx-auto w-full text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto md:mx-0"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
            <span className="w-12 h-[2px] bg-[#ED1D26] hidden md:block mt-3"></span>
            <h4 className="text-[#ED1D26] font-bold uppercase tracking-[0.3em] text-sm md:text-base">
              Empowering Entrepreneurs
            </h4>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] uppercase mb-8 tracking-tighter">
            Build Your <br />
            <span className="text-[#ED1D26]">Empire</span> With Us
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0 font-medium">
            Partner with Canada's leading signage experts. Access 20+ years of
            legacy, proven systems, and world-class support to build your own
            profitable business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#application-form"
              className="px-10 py-5 bg-[#ED1D26] text-white font-extrabold rounded-full hover:bg-white hover:text-black transition-all shadow-2xl hover:shadow-red-500/40 uppercase tracking-widest text-xs"
            >
              Apply Now
            </a>
            <a
              href="#benefits"
              className="px-10 py-5 bg-white/5 backdrop-blur-xl text-white border border-white/20 font-extrabold rounded-full hover:bg-white/20 transition-all uppercase tracking-widest text-xs"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseHero;
