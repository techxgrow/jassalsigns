import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const servicesData = [
  {
    title: "Channel Letters",
    desc: "3D storefront perfection with illuminated precision.",
    link: "/products/channelletters",
    image: "/services/channelletter.jpg",
  },
  {
    title: "Pylon Signs",
    desc: "Maximize visibility with towering pylon structures.",
    link: "/products/pylonsigns",
    image: "/services/pylonsigns.jpg",
  },
  {
    title: "Indoor Signs",
    desc: "Elegant lobby branding and wayfinding solutions.",
    link: "/products/indoorsigns",
    image: "/services/indoor.png",
  },
  {
    title: "Outdoor Signs",
    desc: "Durable, high-impact signage for any environment.",
    link: "/products/outdoorsigns",
    image: "/services/outdoorsigns.jpg",
  },
  {
    title: "Vehicle Wraps",
    desc: "Turn your fleet into mobile advertising machines.",
    link: "/products/vehiclewraps",
    image: "/services/vehiclewraps1.jpg",
  },
  {
    title: "Printing Services",
    desc: "High-quality large format printing for all needs.",
    link: "/products/printmedia",
    image: "/services/printmedia1.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const Services = () => {
  return (
    <motion.div
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {servicesData.map((service, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
        >
          <Link href={service.link} className="block w-full h-full relative">
            {/* Background Image with Zoom Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            />

            {/* Dark Gradient Overlay - Always visible for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Hover Highlight Overlay */}
            <div className="absolute inset-0 bg-[#ED1D26]/0 group-hover:bg-[#ED1D26]/10 transition-colors duration-500 mix-blend-overlay" />

            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
              {/* Title & Arrow Row */}
              <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold font-grotesk text-white group-hover:text-[#ED1D26] transition-colors duration-300">
                  {service.title}
                </h3>

                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[#ED1D26] group-hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                  <FaArrowRight className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>

              {/* Description Reveal */}
              <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-in-out">
                <p className="text-gray-300 text-sm mt-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {service.desc}
                </p>
                <div className="h-1 w-12 bg-[#ED1D26] mt-4 rounded-full" />
              </div>
            </div>

            {/* Default State Indicator (subtle line or icon if needed) */}
            <div className="absolute bottom-6 left-6 w-8 h-1 bg-white/20 rounded-full group-hover:opacity-0 transition-opacity duration-300" />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Services;
