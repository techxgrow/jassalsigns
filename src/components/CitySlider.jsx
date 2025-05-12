import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SmallTextAnimation from "./ui/SmallTextAnimation";
import Link from "next/link";





const CitySlider = ({cityName}) => {

    const slide = {
        image: `/citypage/${cityName}.jpg`,
        title: "JASSAL SIGNS SIGNAGE SERVICES",
      };

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true });
  }, []);

  return (
    <section className="w-full  h-[80vh] md:h-[120vh] overflow-hidden" id="home">
      <div className="relative w-full h-full group px-6 md:px-0">
        {/* Zooming Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-100 group-hover:scale-105 transition-transform duration-[6000ms] ease-out will-change-transform"
          style={{ backgroundImage: `url(${slide.image})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-[#1703375f]"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto  flex items-center h-full">
          <div className=" text-white" data-aos="fade-up" data-aos-delay="300">
            <p className="text-lg uppercase tracking-widest font-medium text-[#ED1D26] mb-2 text-center  md:text-left">
              We Bring Brands To Life
            </p>
            <h1 className="text-4xl leading-[3rem] text-center max-w-[800px]  uppercase md:text-left font-extrabold  lg:text-7xl lg:leading-[6.5rem]">
              {slide.title} IN <SmallTextAnimation text={`${cityName}`} textColor="#ED1D26" fontSize="70px"  className="text-[#ED1D26]"></SmallTextAnimation>
            </h1>

       
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitySlider;