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
    title: "CUSTOM CHANNEL LETTER NAMASTE INDIA BY EDMONTON SIGNS, AB",
  },
  {
    src: "/gallery/gallery3.jpeg",
    category: "product",
    title: "LOCAL SIGN SHOP THE BROKIN YOLK IN EDMONTON, AB",
  },
  {
    src: "/gallery/gallery4.jpg",
    category: "",
    title: "BUSINESS TAMARACK MEDICAL CLINIC BY EDMONTON SIGN, AB",
  },
  {
    src: "/gallery/gallery5.jpg",
    category: "",
    title: "COMMERCIAL CHANNEL LETTER BY EDMONTON SIGN, AB",
  },
  {
    src: "/gallery/gallery6.jpg",
    category: "product",
    title: "CUSTOM OLYMPIA LIQUOR CHANNEL LETTER BY EDMONTON SIGNS, AB",
  },
 
];

export default function SignageGallery() {
  const [selectedFilter, setSelectedFilter] = useState("*");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    AOS.init({ duration: 1000, mirror:true });
  }, []);

  const filteredImages =
    selectedFilter === "*"
      ? images
      : images.filter((img) => img.category === selectedFilter);

  return (
    <section  className="py-20 md:px-20" id="gallery">
       
      <div className="container mx-auto px-4">
      <div className=" mb-[30px] text-center" data-aos="fade-up">
        
          <h1 className="md:text-6xl text-4xl text-[#101828] font-extrabold">
           Our Gallery<span className="text-orange-600"></span>
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer group relative overflow-hidden shadow-md "
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={img.src}
                alt={img.title || "Portfolio Image"}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-none bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {img.title && (
                  <span className="text-white text-lg font-medium px-2 text-center">
                    {img.title}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex >= 0 && (
        <Lightbox
          mainSrc={filteredImages[lightboxIndex].src}
          nextSrc={
            filteredImages[(lightboxIndex + 1) % filteredImages.length].src
          }
          prevSrc={
            filteredImages[
              (lightboxIndex + filteredImages.length - 1) % filteredImages.length
            ].src
          }
          onCloseRequest={() => setLightboxIndex(-1)}
          onMovePrevRequest={() =>
            setLightboxIndex(
              (lightboxIndex + filteredImages.length - 1) % filteredImages.length
            )
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
          }
        />
      )}
    </section>
  );
}