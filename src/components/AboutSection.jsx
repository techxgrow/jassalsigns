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
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-white">
      {/* About Card Section */}
      <div
        id="about"
        data-aos="fade-up"
        className="max-w-[85vw] mx-auto py-6 -translate-y-[40px] p-6 z-10 relative grid grid-cols-1 md:grid-cols-[70%_20%] md:px-20 md:gap-[10%] gap-0"
        style={{
          backgroundImage: "url('/aboutsectionbg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Side */}
        <div
          className="flex mb-8 md:mb-0 flex-col items-center md:items-start gap-4 md:gap-8"
          data-aos="fade-bottom"
          data-aos-duration="2000"
        >
          <h4 className="text-gray-900 uppercase underline md:text-left text-center underline-offset-4 decoration-red-700">
            Who We Are
          </h4>
          <h1 className="text-gray-900 md:text-left text-center text-3xl font-extrabold uppercase w-[280px]">
            We create mass public's eye{" "}
            <span className="text-red-600">attention</span>
          </h1>
          <p className="text-gray-600 md:text-left text-center text-xl">
            We are a sign, wrap and Print company. With over 30 years of excellence, we're dedicated to bringing your vision to life with our variety of services.
          </p>
        </div>

        {/* Right Side */}
        <div>
          {/* Counter Section */}
          <div className="flex flex-col gap-3 mx-auto" ref={ref}>
            <div className="flex flex-col justify-center items-center py-2 rounded-md md:text-left bg-white border border-red-600 md:border-0">
              <h1 className="text-2xl md:text-3xl text-red-600 font-extrabold">
                {inView ? <CountUp start={0} end={250} duration={2} /> : "0"}+
              </h1>
              <p className="text-gray-900">Screen Place</p>
            </div>

            <div className="flex flex-col justify-center items-center py-2 rounded-md md:text-left bg-white border border-red-600 md:border-none">
              <h1 className="text-2xl md:text-3xl text-red-600 font-extrabold">
                {inView ? <CountUp start={0} end={78} duration={2} /> : "0"}K
              </h1>
              <p className="text-gray-900">People Reached</p>
            </div>

            <div className="flex flex-col justify-center items-center py-2 rounded-md md:text-left bg-white border border-red-600 md:border-0">
              <h1 className="text-2xl md:text-3xl text-red-600 font-extrabold">
                {inView ? <CountUp start={0} end={49} duration={2} /> : "0"}+
              </h1>
              <p className="text-gray-900">Country Cover</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="mb-4 text-center" data-aos="fade-up" id="service">
        <p className="md:text-2xl text-xl text-red-600 uppercase mb-2">what we Do</p>
        <h1 className="md:text-6xl text-4xl text-gray-900 font-extrabold">
          OUR SERVICES
        </h1>
      </div>
    </div>
  );
};

export default AboutSection;
