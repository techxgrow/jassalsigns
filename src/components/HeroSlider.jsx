import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const slides = [
  {
    image: "/slider/slider-image1.jpg",
    title: "JASSAL SIGNS SIGNAGE SERVICES",
    link: "#",
  },
  {
    image: "/slider/slider-image2.jpg",
    title: "JASSAL SIGNS SIGNAGE SERVICES",
    link: "#",
  },
  {
    image: "/slider/slider-image3.jpg",
    title: "JASSAL SIGNS SIGNAGE SERVICES",
    link: "#",
  },
];

const HeroSlider = ({ cityName }) => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, mirror:true });
  });

  return (
    <section className="w-full h-[78vh] xs:h-[60vh] md:h-[120vh]" id="home">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        speed={1000}
        effect="slide"
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center transition-transform duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black to-[#1703375f]"></div>

              <div className="container mx-auto px-6 lg:px-12 text-left relative z-10">
                <div
                  className="max-w-5xl  text-white"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h1 className="text-4xl leading-[3rem] md:text-left text-center  font-extrabold lg:ml-20 lg:text-8xl lg:leading-[7rem]">
                    {slide.title} IN
                    <span className="text-orange-500">
                      {" "}
                      <br /> {cityName}
                    </span>
                  </h1>
                  {/* <div className="mt-6 ml-20">
                    <a
                      href={slide.link}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    >
                      Our Services
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
