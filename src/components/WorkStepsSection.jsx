import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Lightbulb, PenTool, Wrench, HardHat, ShieldCheck, ChevronRight } from "lucide-react";

const WorkStepsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      title: "Tell Us What You Need",
      icon: <Lightbulb className="w-10 h-10 text-[#ED1D26] group-hover:scale-110 transition-transform duration-300" />
    },
    {
      title: "We Design Around Your Brand",
      icon: <PenTool className="w-10 h-10 text-[#ED1D26] group-hover:scale-110 transition-transform duration-300" />
    },
    {
      title: "Built in Our Own Shop",
      icon: <Wrench className="w-10 h-10 text-[#ED1D26] group-hover:scale-110 transition-transform duration-300" />
    },
    {
      title: "Installed by Our Crew",
      icon: <HardHat className="w-10 h-10 text-[#ED1D26] group-hover:scale-110 transition-transform duration-300" />
    },
    {
      title: "We're Here After Install Too",
      icon: <ShieldCheck className="w-10 h-10 text-[#ED1D26] group-hover:scale-110 transition-transform duration-300" />
    }
  ];

  return (
    <section className="bg-[#FAF9F9] py-20 md:py-32 overflow-hidden border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header - Bold & Spacious */}
        <div className="border-b border-gray-200/60 pb-8" data-aos="fade-up">
          <div>
            <span className="text-[#ED1D26] font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-2 block">
              Our Process Flow
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-[1.05]">
              How We Work <span className="text-gray-400 font-medium">· Every Step, One Team</span>
            </h2>
          </div>
        </div>

        {/* Steps Process Grid without Numbers */}
        <div className="relative" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-8 xl:gap-4">
            {steps.map((item, idx) => (
              <React.Fragment key={idx}>
                {/* Step Card */}
                <div className="group flex flex-col items-center text-center max-w-[240px]">
                  {/* Premium Rounded Icon Box */}
                  <div className="w-28 h-28 bg-white border border-gray-100 rounded-[32px] shadow-sm flex items-center justify-center group-hover:border-red-500 group-hover:bg-[#ED1D26]/5 group-hover:shadow-md transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  {/* Step Title */}
                  <h4 className="text-lg md:text-xl font-extrabold text-gray-900 uppercase tracking-tight leading-tight group-hover:text-[#ED1D26] transition-colors duration-300 mt-8 min-h-[48px] flex items-center">
                    {item.title}
                  </h4>
                </div>

                {/* Connection Chevron (Desktop only, omit for last item) */}
                {idx < steps.length - 1 && (
                  <div className="hidden xl:flex items-center justify-center h-28 self-start pt-9">
                    <ChevronRight className="w-8 h-8 text-gray-300 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkStepsSection;
