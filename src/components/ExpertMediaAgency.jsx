import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExpertMediaAgency = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full h-[90vh]    bg-[url(/second/bg.jpg)] bg-cover" style={{backgroundPosition:"-410px center",}} id="about">
     <div className="bg-black/50 w-full h-full">

     
      <div className=" max-w-[85vw] h-full mx-auto flex flex-col md:flex-row">
        {/* Left Column - Enhanced with Jassal Signs Content */}
        <div className="w-full md:w-1/2 h-full md:h-full flex items-center justify-center  md:bg-center p-6 shadow-lg relative">
          <div className="absolute top-0 left-0 flex flex-col justify-center items-start   w-full h-full px-5 md:px-0  text-white text-left space-y-4">
          
            <h2 className="md:text-3xl text-4xl font-semibold">EXPERT OUT OF MEDIA AGENCY</h2>
            <p className="md:text-lg text-sm max-w-xl">
              Jassal Signs has been a trusted name in the signage and outdoor advertising industry
              for over 25 years. Specializing in high-impact billboard solutions, our team delivers
              custom, creative, and strategic campaigns that elevate your brand visibility.
            </p>
            <p className="md:text-base text-xs max-w-xl">
              From concept to installation, we offer comprehensive services including hoardings,
              glow signs, digital displays, and more. Let Jassal Signs help you capture attention
              and leave a lasting impression.
            </p>
          </div>
        </div>
         <hr className="md:hidden border border-white mx-6"  />
        {/* Right Column */}
        <div className="w-full md:w-1/2 h-full md:h-auto bg-bottom  shadow-lg relative">
          <div className="absolute top-0 left-0 flex flex-col justify-center w-full h-full md:pl-10 px-5 md:px-0  py-5 md:py-10">
            <h2 className="md:text-3xl text-xl  font-semibold text-white  md:text-left">
              Providing expert assistance with billboard advertising for 25 years.
            </h2>

            {/* Progress Bars */}
            <div className="mt-6 space-y-6">
              <ProgressBar title="Strategy" percentage={90} />
              <ProgressBar title="Performance" percentage={75} />
              <ProgressBar title="Planning" percentage={80} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

// Progress Bar Component
const ProgressBar = ({ title, percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const bar = document.getElementById(`progress-${title}`);
      if (bar && bar.getBoundingClientRect().top < window.innerHeight * 0.75) {
        setTimeout(() => setProgress(percentage), 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [percentage, title]);

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="font-medium md:text-xl text-md text-white">{title}</span>
        <span className="font-medium text-white">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          id={`progress-${title}`}
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
