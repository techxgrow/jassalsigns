import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";


const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      mirror: true, 
      anchorPlacement: "top-bottom", 
    });
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-white shadow-2xl border-2" >
      <div
        className="max-w-[1280px] px-6 md:px-0 mx-auto p-5 lg:p-20 bg-white -translate-y-[100px] z-10 relative grid grid-cols-1 gap-10 md:gap-0 lg:grid-cols-2 shadow-xl"
        data-aos="fade-up" id="about"
      >
        {/* Left Side */}
        <div className="flex  flex-col items-center gap-10" data-aos="fade-bottom"  data-aos-duration="2000">
          <h1 className="text-gray-900 md:text-left text-center text-3xl font-extrabold uppercase w-[280px]">
            We create mass public's eye{" "}
            <span className="text-orange-600">attention</span>
          </h1>
          <h4 className="text-gray-900 uppercase underline md:text-left text-center underline-offset-4 decoration-orange-600">
            Who We Are
          </h4>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-10" >
          <p className="text-gray-600 md:text-left text-center text-xl">
          We are a sign, wrap and Print company With over 30 years of excellence, we're dedicated to bringing your vision to life with our variety of services.
          </p>

          {/* Counter Section */}
          <div className="grid grid-cols-3 " ref={ref}>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl text-orange-600 font-extrabold">
                {inView ? <CountUp start={0} end={250} duration={2} /> : "0"}+
              </h1>
              <p className="text-gray-900">Screen Place</p>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl text-orange-600 font-extrabold">
                {inView ? <CountUp start={0} end={78} duration={2} /> : "0"}K
              </h1>
              <p className="text-gray-900">People Reached</p>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl text-orange-600 font-extrabold">
                {inView ? <CountUp start={0} end={49} duration={2} /> : "0"}+
              </h1>
              <p className="text-gray-900">Country Cover</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className=" mb-[30px] text-center" data-aos="fade-up" id="service">
        <p className="md:text-2xl text-xl text-orange-600 uppercase mb-3">what we Do</p>
        <h1 className="md:text-6xl text-4xl text-gray-900 font-extrabold">
          OUR SERVICES <span className="text-orange-600"></span>
        </h1>
      </div>
    </div>
  );
};

export default AboutSection;