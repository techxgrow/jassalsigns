import React, { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import SmallTextAnimation from "./ui/SmallTextAnimation";
import Link from "next/link";

const servicesData = [
  { title: "Channel Letters", desc: "Custom 3D letters designed to enhance your storefront appearance.", link: "/products/channelletters" },
  { title: "Pylon Signs", desc: "High-visibility signs designed to maximize your brand exposure.", link: "/products/pylonsigns" },
  { title: "Indoor Signs", desc: "Eye-catching interior signage for lobbies, hallways, offices.", link: "/products/indoorsigns" },
  { title: "Outdoor Signs", desc: "Durable signs to withstand the elements and attract attention.", link: "/products/outdoorsigns" },
  { title: "Vehicle Wraps", desc: "Turn your vehicle into a powerful mobile advertising machine.", link: "/products/vehiclewraps" },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);


    const [fontSize, setFontSize] = useState("60px");

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      if (width < 400) setFontSize("50px");
      else if (width < 640) setFontSize("60px");
      else if (width < 768) setFontSize("50px");
      else setFontSize("60px");
    };

    updateFontSize(); // Initial run
    window.addEventListener("resize", updateFontSize); // Update on resize

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
  <div className="mx-auto text-center py-4 w-full md:w-[850px] border-x-0 md:border-x-2 mt-10 px-4">

     <div className="my-4">
       <h2 data-aos="fade-up" className="text-xl font-medium text-gray-300 tracking-wide  uppercase">
        Discover the Difference a Well-Crafted Sign Can Make
      </h2>
         <h2 data-aos="fade-up" className="text-xl mt-3 font-medium text-gray-300 tracking-wide  uppercase">
        Choose Your Nearest Jassal Signs Location
      </h2>
     </div>

      

      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className=" text-4xl sm:text-6xl  md:text-6xl font-bold text-white my-6 flex md:gap-4 flex-col md:flex-row justify-center "
      >
       <span>Let’s</span> 
       <span><SmallTextAnimation
        text="ILLUMINATE"
        textColor="linear-gradient(90deg, #ED1C26 0%, #0283CB 100%)"
        fontSize={fontSize}
      /></span>
       <span>Your Sign</span>
      </h1>

      <div className="mt-8 flex justify-center items-center flex-wrap gap-6 ">
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
      </div>
    </div>
  );
};

export default Services;
