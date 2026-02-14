import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExpertMediaAgency = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="w-full h-[75vh] bg-[url(/second/bg.jpg)] bg-cover "
      style={{ backgroundPosition: "-410px center" }}
      id="about"
    >
      <div className="bg-black/60 w-full h-full ">
        {/* <div className="md:max-w-[85vw] max-w-[95vw] h-full mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-start p-6 relative">
            <div className="flex flex-col justify-center items-start w-full text-white text-left  max-w-full">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase leading-tight break-words w-full pr-2">
                PROFESSIONAL SIGNAGE & COMMERCIAL PRINTING SERVICES
              </h2>
              <p className="text-sm md:text-base lg:text-lg max-w-full md:max-w-xl break-words">
                Jassal Signs is a leading signage company and commercial
                printing provider with over 30 years of experience serving
                businesses in Alberta. We create custom business signs, vehicle
                wraps, and high-quality print materials that enhance brand
                visibility and attract customers.
              </p>
              <p className="text-xs md:text-sm lg:text-base max-w-full md:max-w-xl break-words">
                Our comprehensive services include storefront signage, indoor
                and outdoor signs, vehicle graphics, banners, trade show
                displays, and commercial printing. From design to installation,
                Jassal Signs delivers professional solutions that make your
                business stand out.
              </p>
            </div>
          </div>
          <hr className="md:hidden border border-white mx-6" />
          <div className="w-full md:w-1/2 h-full md:h-auto bg-bottom shadow-lg relative">
            <div className="absolute top-0 left-0 flex flex-col justify-center w-full h-full md:pl-10 px-5 md:px-0 py-5 md:py-10">
              <h2 className="md:text-3xl text-xl font-semibold text-white md:text-left">
                Over 30 years of signage & printing expertise.
              </h2>
              <p className="text-white mt-2 font-medium">
                Our Service Excellence:
              </p>

              
              <div className="mt-6 space-y-6">
                <ProgressBar
                  title="Creative Design"
                  percentage={90}
                  subtext="– Custom signage and graphics that match your vision"
                />
                <ProgressBar
                  title="Quality Production"
                  percentage={75}
                  subtext="– Advanced printing and durable materials"
                />
                <ProgressBar
                  title="Professional Service"
                  percentage={80}
                  subtext="– Complete support from concept to completion"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="md:max-w-[95vw] max-w-[95vw] h-full mx-auto flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-lg md:text-2xl lg:text-[40px] font-semibold uppercase leading-tight break-words w-full pr-2 text-white mb-2">
                PROFESSIONAL SIGNAGE & COMMERCIAL PRINTING SERVICES
              </h2>
              <p className="text-sm md:text-base lg:text-lg max-w-full md:max-w-xl break-words text-white mb-1">
                Jassal Signs is a leading signage company and commercial
                printing provider with over 30 years of experience serving
                businesses in Alberta. We create custom business signs, vehicle
                wraps, and high-quality print materials that enhance brand
                visibility and attract customers.
              </p>
              <p className="text-xs md:text-sm lg:text-base max-w-full md:max-w-xl break-words text-white">
                Our comprehensive services include storefront signage, indoor
                and outdoor signs, vehicle graphics, banners, trade show
                displays, and commercial printing. From design to installation,
                Jassal Signs delivers professional solutions that make your
                business stand out.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="md:text-3xl text-xl font-semibold text-white md:text-left">
                Over 30 years of signage & printing expertise.
              </h2>
              <p className="text-white mt-2 font-medium">
                Our Service Excellence:
              </p>
              <ProgressBar
                title="Creative Design"
                percentage={90}
                subtext="– Custom signage and graphics that match your vision"
              />
              <ProgressBar
                title="Quality Production"
                percentage={75}
                subtext="– Advanced printing and durable materials"
              />
              <ProgressBar
                title="Professional Service"
                percentage={80}
                subtext="– Complete support from concept to completion"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Progress Bar Component
const ProgressBar = ({ title, percentage, subtext }) => {
  const [progress, setProgress] = useState(0);
  // Create a safe ID by replacing spaces with hyphens
  const safeTitle = title.replace(/\s+/g, "-");

  useEffect(() => {
    const handleScroll = () => {
      const bar = document.getElementById(`progress-${safeTitle}`);
      if (bar) {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setTimeout(() => setProgress(percentage), 300);
        }
      }
    };

    // Trigger once on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [percentage, safeTitle]);

  return (
    <div className="w-full">
      <div className="flex flex-col mb-2">
        <div className="flex justify-between items-end">
          <span className="font-medium md:text-xl text-md text-white">
            {title}
          </span>
          <span className="font-medium text-white">{progress}%</span>
        </div>
        {subtext && (
          <span className="text-white/80 text-xs md:text-sm mt-1">
            {subtext}
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          id={`progress-${safeTitle}`}
          className="h-2 rounded-full transition-all duration-[2000ms] ease-out"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, #ED1C26 0%, #0283CB 100%)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ExpertMediaAgency;
