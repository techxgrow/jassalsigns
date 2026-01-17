import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SmallTextAnimation from "./ui/SmallTextAnimation";
import Link from "next/link";

export default function CitySlider({ cityName }) {
  const slideImages = [
    `/citypage/header/${cityName}/${cityName}1.jpg`,
    `/citypage/header/${cityName}/${cityName}2.jpg`,
    `/citypage/header/${cityName}/${cityName}3.jpg`,
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true });
  }, []);

  return (
    <section
      className="w-full h-[80vh] md:h-[120vh] overflow-hidden relative group"
      id="home"
    >
      {/* Image Grid wiithhhhhhh scaling effect */}
      <div className="absolute inset-0 grid grid-cols-3 gap-1 h-full w-full">
        {slideImages.map((img, idx) => (
          <div key={idx} className="w-full h-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transform transition-transform duration-[8000ms] group-hover:scale-110"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-[#1703375f]/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[85vw] mx-auto flex items-center h-full">
        <div
          className="text-white  md:justify-start "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-xl md:text-[30px] uppercase tracking-[0.15em] font-bold text-white text-center mb-2 md:text-left opacity-90">
            We Bring Brands To Life
          </p>
          <h1 className="text-[60px] lg:text-[90px] uppercase font-extrabold text-white text-center md:text-left leading-[1.1] mb-2 tracking-[-0.025em]">
            JASSAL SIGNS
          </h1>
          <p className="text-xl md:text-[30px] uppercase tracking-[0.15em] font-bold text-white text-center mb-6 md:text-left whitespace-nowrap opacity-90">
            Signage and Printing Services In
          </p>
          {/* for desktop device*/}
          <div className="hidden md:flex md:justify-start">
            <SmallTextAnimation
              text={cityName.toUpperCase()}
              textColor="linear-gradient(90deg, #ED1C26 0%, #0283CB 100%)"
              fontSize="90px"
              fontWeight="800"
            />
          </div>
          {/* for mobile device */}
          <div className="flex justify-center md:hidden">
            <SmallTextAnimation
              text={cityName.toUpperCase()}
              textColor="linear-gradient(90deg, #ED1C26 0%, #0283CB 100%)"
              fontSize="60px"
              fontWeight="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
