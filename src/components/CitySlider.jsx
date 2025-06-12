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
    <section className="w-full h-[80vh] md:h-[120vh] overflow-hidden relative group" id="home">
      {/* Image Grid with scaling effect */}
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
      <div className="relative z-10 max-w-[1280px] mx-auto flex items-center h-full">
        <div className="text-white  md:justify-start " data-aos="fade-up" data-aos-delay="300">
          <p className="text-md md:text-xl uppercase tracking-widest font-bold text-white text-center mb-2  md:text-left">
            We Bring Brands To Life
          </p>
          <h1 className="text-3xl  leading-[3rem] text-center max-w-[800px] uppercase md:text-left font-extrabold lg:text-7xl lg:leading-[5.5rem]">
            JASSAL SIGNS SIGNAGE AND PRINTING SERVICES IN{" "}
            {/* for desktop device*/}
            <span className="hidden md:inline">
               <SmallTextAnimation
              text={`${cityName}`}
              textColor="linear-gradient(90deg, #ED1C26 0%, #0283CB 100%)"
              fontSize="70px"
            />

            </span>
            {/* for mobile device */}
            <div className="block md:hidden">
               <SmallTextAnimation
              text={`${cityName}`}
              textColor="linear-gradient(90deg, #ED1C26 0%, #0283CB 100%)"
              fontSize="40px"
            />
            </div>
           
          </h1>
        </div>
      </div>
    </section>
  );
}
