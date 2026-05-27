import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const ExpertMediaAgency = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 border-t border-gray-900 bg-gray-950">
      
      {/* Dynamic Product Gallery Collage Background */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-5 gap-2 opacity-60 pointer-events-none z-0">
        <div className="w-full h-full overflow-hidden">
          <img src="/gallery/gl1.jpg" className="w-full h-full object-cover" alt="Storefront Signage" />
        </div>
        <div className="w-full h-full overflow-hidden">
          <img src="/gallery/gl2.jpg" className="w-full h-full object-cover" alt="Illuminated Channel Letters" />
        </div>
        <div className="w-full h-full overflow-hidden">
          <img src="/gallery/gl3.jpg" className="w-full h-full object-cover" alt="Window Decals" />
        </div>
        <div className="w-full h-full overflow-hidden">
          <img src="/gallery/gl4.jpg" className="w-full h-full object-cover" alt="Business Signs" />
        </div>
        <div className="w-full h-full overflow-hidden">
          <img src="/gallery/services/channel-sales/channel-jassal-signs.jpeg" className="w-full h-full object-cover" alt="Illuminated Channel Letters" />
        </div>
      </div>

      {/* Premium Glassmorphic Black Mask Overlay */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] z-0"></div>

      {/* Radial brand-red glow centered behind the text */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/5 mix-blend-color-dodge z-0"></div>
      
      {/* Glowing radial red spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ED1D26]/20 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Subtle top & bottom linear dark fade for layout seamless blend */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-950 to-transparent pointer-events-none z-0"></div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/40 border border-red-500/20 text-[#ED1D26] rounded-full text-xs font-black uppercase tracking-[0.2em]" data-aos="fade-down">
          Proven Local Authority & Legacy
        </div>

        <h2 
          className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tighter text-white max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Signage & Printing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED1D26] to-red-400">
            That Works as Hard as You Do
          </span>
        </h2>

        <div 
          className="max-w-4xl mx-auto text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed font-medium text-justify"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            Jassal Signs has been helping Edmonton and Alberta businesses build their brand presence for over 20 years. We don't outsource, we don't cut corners—every sign, wrap, and print piece is designed, produced, and installed by our own team. From your first conversation to the moment your sign goes up—and long after—we own every step of the process.
          </p>
        </div>

        <div className="pt-4" data-aos="zoom-in" data-aos-delay="300">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#ED1D26] text-white font-extrabold rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(237,29,38,0.3)] hover:shadow-white/20 uppercase tracking-widest text-xs cursor-pointer"
          >
            Start Your Project Today <span className="text-sm">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertMediaAgency;
