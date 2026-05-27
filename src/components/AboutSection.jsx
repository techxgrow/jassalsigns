import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import Link from "next/link";

const AboutSection = ({ cityName, localContext }) => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      mirror: true,
      once: true,
      offset: 100,
    });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-white overflow-hidden">
      {/* Elite About Section */}
      <section id="about" className="relative py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-[#ED1D26] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                  Who We Are
                </h4>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tighter uppercase">
                  Edmonton's Best Sign Company. <br className="hidden md:inline" />
                  <span className="text-[#ED1D26]">20+ Years in the Making.</span>
                </h2>
                <h3 className="text-lg md:text-xl font-bold text-gray-700 leading-tight">
                  Custom Signage, Vehicle Wraps & Commercial Printing - Designed, Built & Installed in Alberta.
                </h3>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-1.5 h-full bg-red-600/20 rounded-full"></div>
                <div className="pl-8 space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl text-justify">
                    Jassal Signs started with a simple belief - that the right sign can change the trajectory of a business. For over three decades, we've turned that belief into reality for businesses across Edmonton and Alberta. We handle everything in-house: design, fabrication, and installation - so your project stays on time, on brand, and exactly as you envisioned.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl text-justify">
                    From channel letters and illuminated signs to vehicle wraps, pylon signs, business signs, printing and lobby signage - every piece we produce is built to represent your brand the way it deserves to be represented. No middlemen, no guesswork. Just a skilled team that takes your vision seriously from the first conversation to the final install.
                  </p>
                  <div className="pt-4">
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#ED1D26] text-white font-extrabold rounded-full hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-red-500/20 uppercase tracking-widest text-xs cursor-pointer">
                      Request A Quote <span className="text-sm">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stats - Elite Cards */}
            <div className="relative" data-aos="fade-left" ref={ref}>
              {/* Background Accent */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-red-50 rounded-full blur-3xl -z-10 opacity-60"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-red-50 rounded-full blur-3xl -z-10 opacity-60"></div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { label: "Happy Clients", end: 1200, suffix: "+" },
                  { label: "Projects Completed", end: 15000, suffix: "+" },
                  { label: "Designs", end: 750000, suffix: "+" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white border border-gray-100 p-8 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(237,29,38,0.15)] hover:border-red-100 transition-all duration-700 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                    <div className="relative z-10 flex flex-col items-center md:items-start">
                      <h3 className="text-5xl md:text-6xl font-black text-[#ED1D26] tracking-tighter mb-2">
                        {mounted && inView ? (
                          <CountUp
                            start={0}
                            end={stat.end}
                            duration={2.5}
                            suffix={stat.suffix}
                          />
                        ) : (
                          "0"
                        )}
                      </h3>
                      <p className="text-gray-500 font-black uppercase tracking-widest text-xs md:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Section Header */}
      <div
        className="py-24 border-t border-gray-50"
        data-aos="fade-up"
        id="service"
      >
        <div className="max-w-[1400px] mx-auto px-6 text-center space-y-4">
          <p className="text-[#ED1D26] font-black uppercase tracking-[0.5em] text-xs md:text-sm">
            What We Do
          </p>
          <h2 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter uppercase leading-[0.85]">
            <span className="text-gray-300"> Our</span> Products
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
