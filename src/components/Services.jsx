import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SmallTextAnimation from "./ui/SmallTextAnimation";
import Link from "next/link";

const servicesData = [
  {
    title: "Channel Letters",
    desc: "Custom 3D letters designed to enhance your storefront appearance.",
    link: "/products/channelletters",
  },
  {
    title: "Pylon Signs",
    desc: "High-visibility signs designed to maximize your brand exposure.",
    link: "/products/pylonsigns",
  },
  {
    title: "Indoor Signs",
    desc: "Eye-catching interior signage for lobbies, hallways, offices.",
    link: "/products/indoorsigns",
  },
  {
    title: "Outdoor Signs",
    desc: "Durable signs to withstand the elements and attract attention.",
    link: "/products/outdoorsigns",
  },
  {
    title: "Vehicle Wraps",
    desc: "Turn your vehicle into a powerful mobile advertising machine.",
    link: "/products/vehiclewraps",
  },
  {
    title: "Printing Services",
    desc: "Printing Services Now at Jassal Signs – Bold, Bright, Persuasive!",
    link: "/products/printmedia",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const [fontSize, setFontSize] = useState("48px");

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      if (width < 640) setFontSize("24px");
      else if (width < 768) setFontSize("30px");
      else if (width < 1024) setFontSize("36px");
      else setFontSize("48px");
    };

    updateFontSize(); // Initial run
    window.addEventListener("resize", updateFontSize); // Update on resize

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    <div className="mx-auto text-center py-4 w-full border-x-0 md:border-x-2 mt-10 px-4">
      <div className="my-4">
        <h2
          data-aos="fade-up"
          className="text-sm sm:text-md md:text-lg lg:text:xl font-medium text-gray-300 tracking-wide uppercase"
        >
          Discover the Difference a Well-Crafted Sign Can Make
        </h2>
        <h2
          data-aos="fade-up"
          className="text-sm sm:text-md md:text-lg lg:text:xl mt-3 font-medium text-gray-300 tracking-wide uppercase"
        >
          Choose Your Nearest Jassal Signs Location
        </h2>
      </div>

      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white my-6"
      >
        <span>Let’s</span>&nbsp;
        <span>
          <SmallTextAnimation
            text="ILLUMINATE"
            textColor="linear-gradient(90deg, #ED1C26 0%, #0283CB 100%)"
            fontSize={fontSize}
          />
        </span>&nbsp;
        <span>Your Sign</span>
      </h1>

      <div className="flex flex-row flex-wrap">
         {servicesData.map((service, index) => (
          <div className="h-[150px] w-full sm:w-full md:w-full lg:w-1/3 p-2">
          <Link
            key={index}
            href={service.link}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="w-full h-full"
          >
            <div className="w-full h-full px-2 py-4 rounded-lg shadow-[0_4px_10px_rgba(200,200,200,0.4)] 
                       hover:shadow-[rgb(237,29,38)] hover:scale-110 transition-all 
                       duration-300 ease-in-out service_animation ">
            <h3 className="text-xl sm:text-xl md:text-2xl font-medium font-grotesk text-white">{service.title}</h3>
            <p className="text-white mt-2 text-sm sm:text-md">{service.desc}</p>
            </div>
          </Link>
          </div>
        ))}
      </div>
        

      {/* <div className="mt-8 flex justify-center items-center flex-wrap gap-6 ">
        {servicesData.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="md:p-6 py-6 px-4 rounded-lg md:w-[250px] w-[95%] shadow-[0_4px_10px_rgba(200,200,200,0.4)] 
                       hover:shadow-[#ED1D26] hover:scale-110 transition-all 
                       duration-300 ease-in-out service_animation"
          >
            <h3 className="text-2xl font-semibold font-grotesk text-white">{service.title}</h3>
            <p className="text-white mt-2">{service.desc}</p>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default Services;
