import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExpertMediaAgency = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full md:h-[90vh] h-[120vh]   bg-gray-100" id="about">
      <div className="border-2 h-full mx-auto flex flex-col md:flex-row">
        {/* Left Column */}
        <div
          className="w-full md:w-1/2 h-full md:h-full flex items-center justify-center bg-[url(/second/bg-1.png)] bg-cover md:bg-center p-6 shadow-lg relative"
        >
          <div className="absolute top-0 left-0 flex justify-center items-center  p-6 md:px-5  w-full h-full bg-black/30">
            <h2 className="md:text-7xl text-4xl font-extrabold text-white md:ml-20 text-center md:text-left">
              EXPERT OUT OF MEDIA AGENCY
            </h2>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="w-full md:w-1/2 h-full md:h-auto bg-[url(/second/bg-2.jpg)] bg-cover bg-bottom shadow-lg relative"
        >
          <div className="absolute top-0 left-0 flex flex-col justify-center  w-full h-full bg-black/70 md:px-10 px-5 py-5 md:py-10">
            <h2 className="md:text-3xl text-xl font-semibold text-white text-center md:text-left">
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
    </section>
  );
};

// Progress Bar Component with AOS trigger
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
        <span className="font-medium text-xl text-white">{title}</span>
        <span className="font-medium text-white">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          id={`progress-${title}`}
          className="bg-orange-500 h-2 rounded-full transition-all duration-[2000ms] ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ExpertMediaAgency;
