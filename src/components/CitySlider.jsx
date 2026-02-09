import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SmallTextAnimation from "./ui/SmallTextAnimation";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function CitySlider({ cityName }) {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({ duration: 1000, mirror: true });
  }, []);

  const slideImages =
    mounted && cityName
      ? [
          `/citypage/header/${cityName}/${cityName}1.jpg`,
          `/citypage/header/${cityName}/${cityName}2.jpg`,
          `/citypage/header/${cityName}/${cityName}3.jpg`,
        ]
      : [];

  return (
    <section
      className="w-full h-[80vh] md:h-[120vh] overflow-hidden relative group"
      id="home"
    >
      {/* Image Grid with scaling effect */}
      <div className="absolute inset-0 grid grid-cols-3 gap-1 h-full w-full bg-black">
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
          <p className="text-md md:text-xl uppercase tracking-widest font-bold text-white text-center mb-2  md:text-left">
            We Bring Brands To Life
          </p>
          <h1 className="text-3xl  leading-[3rem] text-center max-w-[800px] uppercase md:text-left font-extrabold lg:text-7xl lg:leading-[5.5rem]">
            JASSAL SIGNS
          </h1>
          <h2 className="text-[25px]">SIGNAGE AND PRINTING SERVICES IN</h2>

          {mounted && cityName && (
            <>
              <span className="hidden md:inline">
                <SmallTextAnimation
                  text={`${cityName}`}
                  textColor="linear-gradient(90deg, #ED1C26 0%, #0283CB 100%)"
                  fontSize="70px"
                />
              </span>
              <div className="block md:hidden ">
                <h1 className="text-3xl uppercase">
                  <SmallTextAnimation
                    text={`${cityName}`}
                    textColor="linear-gradient(90deg, #ED1C26 0%, #0283CB 100%)"
                    fontSize="71px"
                  />
                </h1>
              </div>
            </>
          )}

          <div className="mt-8 flex justify-center md:justify-start">
            <ScrollLink
              to="contactSection"
              smooth={true}
              duration={500}
              offset={-50}
              className="bg-[#ED1D26] text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block uppercase tracking-wider"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Get Quote
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
}
