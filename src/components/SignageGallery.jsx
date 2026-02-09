import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const images = [
  { src: "/gallery/gl1.jpg" },
  // { src: "/gallery/gl2.jpg" },
  { src: "/gallery/gl3.jpg" },
  { src: "/gallery/gl4.jpg" },
  { src: "/gallery/gl5.jpg" },
  // { src: "/gallery/gl6.jpg" },
  { src: "/gallery/gl7.jpg" },
  // { src: "/gallery/gl8.jpg" },
  { src: "/gallery/gl9.jpg" },
];

export default function SignageGallery() {
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true, once: true, offset: 100 });
  }, []);

  const aosAnimations = [
    "fade-up",
    "zoom-in",
    "fade-down",
    "fade-right",
    "fade-left",
  ];

  return (
    <section
      className="md:max-w-[85vw] max-w-[95vw] mx-auto py-16 overflow-hidden"
      id="gallery"
    >
      <div>
        {/* Section heading */}
        <div className="mb-10 text-center" data-aos="zoom-in">
          <p className="text-[#ED1D26] uppercase mb-2 text-xl">
            EXPLORE OUR WORK
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#101828]">
            OUR GALLERY
          </h1>
        </div>

        {/* Gallery images */}
        <PhotoProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-6 md:px-0">
            {images.map((img, index) => (
              <PhotoView key={index} src={img.src}>
                <div
                  className="overflow-hidden shadow-lg rounded-xl cursor-zoom-in group relative aspect-square"
                  data-aos={aosAnimations[index % aosAnimations.length]}
                  data-aos-delay={(index % 4) * 100}
                >
                  <img
                    src={img.src}
                    alt={`Gallery Image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay effect on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white bg-[#ED1D26]/80 px-4 py-2 rounded-full text-sm font-bold scale-50 group-hover:scale-100 transition-transform duration-300">
                      View Signage
                    </span>
                  </div>
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}
