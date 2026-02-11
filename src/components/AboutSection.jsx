import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";

const AboutSection = () => {
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
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase">
                  We create mass <br />
                  public's eye <span className="text-[#ED1D26]">attention</span>
                </h2>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-1.5 h-full bg-red-600/20 rounded-full"></div>
                <p className="pl-8 text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-2xl">
                  We are a sign, wrap and Print company. With over{" "}
                  <span className="text-gray-900 font-black">
                    30 years of excellence
                  </span>
                  , we're dedicated to bringing your vision to life with our
                  variety of services.
                </p>
              </div>

              {/* <div className="pt-6">
                <div className="inline-flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border-2 border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500">
                    <svg
                      className="w-5 h-5 text-red-600 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-black uppercase tracking-widest text-sm">
                    Discover Our Legacy
                  </span>
                </div>
              </div> */}
            </div>

            {/* Right Stats - Elite Cards */}
            <div className="relative" data-aos="fade-left" ref={ref}>
              {/* Background Accent */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-red-50 rounded-full blur-3xl -z-10 opacity-60"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-red-50 rounded-full blur-3xl -z-10 opacity-60"></div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { label: "Elite Clients", end: 1000, suffix: "+" },
                  { label: "Completed Projects", end: 10000, suffix: "+" },
                  { label: "Bespoke Designs", end: 100000, suffix: "+" },
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
            Our Premium <br />
            <span className="text-gray-300">Signage</span> Products
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
