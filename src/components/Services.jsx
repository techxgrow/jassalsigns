import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import SmallTextAnimation from "./ui/SmallTextAnimation";



const servicesData = [
 
  { title: "Channel Letters", desc: "Custom 3D letters to enhance your storefront." },
  { title: "Pylon Signs", desc: "High-visibility signs for maximum brand exposure." },
  { title: "Indoor Signs", desc: "Eye-catching interior signage for lobbies, hallways, and offices." },
  { title: "Outdoor Signs", desc: "Durable signs to withstand the elements and attract attention." },
  { title: "Vehicle Wraps", desc: "Turn your vehicle into a moving billboard." },
  
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation duration
      once: true, // Only animate once
      easing: "ease-in-out", // Smoother easing
    });
  }, []);

  return (
    <div className=" mx-auto  text-center py-4">
     
      {/* Section Heading */}
      <h2 data-aos="fade-up" className="text-xl font-medium text-gray-300 tracking-wide uppercase">
        Discover the Difference a Well-Crafted Sign Can Make
      </h2>


     

      <h1 
        data-aos="fade-up" 
        data-aos-delay="200"
        className="text-5xl md:text-6xl font-bold  text-white mt-2"
      >
        {/* <span className="text-[#ED1D26] "></span> */}
        Let’s <SmallTextAnimation text="ILLUMINATE" textColor="#ED1D26" fontSize="60px" /> Your Sign
      </h1>

      {/* Dynamic Grid for Services */}
      <div className="mt-4 grid grid-cols-5 justify-center gap-x-2 gap-y-5   ">
        {servicesData.map((service, index) => (
         <div 
         key={index}
         data-aos="zoom-in"
         data-aos-delay={index * 100}
         className="p-6 rounded-lg md:w-[250px] w-full 
                    shadow-[0_4px_10px_rgba(200,200,200,0.4)] 
                    hover:shadow-[#ED1D26] 
                    hover:scale-110 transition-all duration-300 ease-in-out 
                    service_animation"
       >
         <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
         <p className="text-white mt-2">{service.desc}</p>
       </div>
        ))}
      </div>
      <h2 
        data-aos="fade-up" 
        data-aos-delay="100" 
        className="text-xl font-medium text-gray-300 uppercase mt-6"
      >
        Choose Your Nearest Jassal Signs Location
      </h2>
     
      
    </div>
  );
};

export default Services;