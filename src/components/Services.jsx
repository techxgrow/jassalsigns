import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

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
    <div className="max-w-6xl mx-auto md:border-x-1 md:border-x-white mb-10 text-center px-6 py-12">
     
      {/* Section Heading */}
      <h2 data-aos="fade-up" className="text-xl font-medium text-gray-300 tracking-wide uppercase">
        Discover the Difference a Well-Crafted Sign Can Make
      </h2>

      <h2 
        data-aos="fade-up" 
        data-aos-delay="100" 
        className="text-xl font-medium text-gray-300 uppercase mt-2"
      >
        Choose Your Nearest Jassal Signs Location
      </h2>

      <h1 
        data-aos="fade-up" 
        data-aos-delay="200"
        className="text-5xl md:text-6xl font-bold text-white mt-6"
      >
        Let’s <span className="text-orange-500">ILLUMINATE</span> Your Sign
      </h1>

      {/* Dynamic Grid for Services */}
      <div className="mt-12 flex flex-wrap justify-center gap-x-3 gap-y-5  ">
        {servicesData.map((service, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Stagger animation
            className=" p-6 rounded-lg shadow-lg md:w-[32%]  w-[100%]
                       hover:scale-105 hover:shadow-lg shadow-gray-500/30 transition-transform duration-600 ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Services;