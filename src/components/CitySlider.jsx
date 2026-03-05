import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SmallTextAnimation from "./ui/SmallTextAnimation";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

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
          // "/rogers_place.jpg",
        ]
      : [];

  return (
    <section
      className="w-full h-[80vh] md:h-[120vh] overflow-hidden relative group"
      id="home"
    >
      {/* Swiper Slider */}
      <div className="absolute inset-0 h-full w-full bg-black">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          className="h-full w-full"
        >
          {slideImages.map((img, idx) => (
            <SwiperSlide key={idx} className="w-full h-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transform transition-transform duration-[8000ms] group-hover:scale-110"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gradient Overlay - Stronger for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />

      <div className="relative z-20 max-w-[90vw] mx-auto flex items-center h-full px-4 md:px-0">
        <div
          className="text-white w-full md:w-2/3 lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div
            className="flex items-center gap-4 mb-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span className="h-[4px] w-16 bg-[#ED1D26]"></span>
            <p className="text-base md:text-xl uppercase tracking-[0.3em] font-bold text-white/90 drop-shadow-md">
              We Bring Brands To Life
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-4 tracking-tighter drop-shadow-2xl">
            JASSAL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              SIGNS
            </span>
          </h1>

          <div
            className="border-l-4 border-[#ED1D26] pl-6 mb-8 bg-gradient-to-r from-white/10 to-transparent py-2 backdrop-blur-sm rounded-r-xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-xl md:text-3xl font-light tracking-wide text-white mb-2">
              SIGNAGE AND PRINTING SERVICES IN
            </h2>
            {mounted && cityName && (
              <div className="relative">
                <SmallTextAnimation
                  text={`${cityName}`}
                  textColor="#ED1D26"
                  fontSize="50px"
                />
              </div>
            )}
          </div>

          <div className="mt-10" data-aos="fade-up" data-aos-delay="600">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#ED1D26] font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-lg overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full -mt-10 transition-all duration-700 ease-out -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:translate-x-full"></span>
              <span className="relative uppercase tracking-widest">
                Get Free Quote
              </span>
              <svg
                className="relative w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
