import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  {
    src: "/gallery/gallery1.jpg",
    category: "people",
    title: "Choice of India Signage by Edmonton Sign Company, AB",
  },
  {
    src: "/gallery/gallery2.jpeg",
    category: "product",
    title: "Crafting Bold Impressions Across Edmonton",
  },
  {
    src: "/gallery/gallery3.jpeg",
    category: "product",
    title: "Explore Our Latest Custom Sign Installations",
  },
  {
    src: "/gallery/gallery4.jpg",
    category: "",
    title: "Premium Channel Letters & Storefront Signage",
  },
  {
    src: "/gallery/gallery5.jpg",
    category: "",
    title: "From Local Stores to Landmark Signs",
  },
  {
    src: "/gallery/gallery6.jpg",
    category: "product",
    title: "CUSTOM OLYMPIA LIQUOR CHANNEL LETTER BY EDMONTON SIGNS",
  },
];

export default function SignageGallery() {
  const [selectedFilter] = useState("*");

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true });
  }, []);

  const filteredImages =
    selectedFilter === "*"
      ? images
      : images.filter((img) => img.category === selectedFilter);

  return (
    <section className=" max-w-[1280px] mx-auto py-16 " id="gallery">
      <div >
        <div className="mb-10 text-center" data-aos="fade-up">
          <p className="text-orange-600 uppercase mb-2 text-xl">
            EXPLORE OUR WORK
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#101828]">
            OUR GALLERY<span className="text-orange-600"></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-6 md:px-0">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden shadow-md"
            >
              <img
                src={img.src}
                alt={img.title || "Portfolio Image"}
                className="w-full h-48 sm:h-60 md:h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-none bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4">
                {img.title && (
                  <span className="text-white text-sm sm:text-base font-medium text-center">
                    {img.title}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
