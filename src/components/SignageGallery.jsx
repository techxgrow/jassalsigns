import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FaExpand } from "react-icons/fa";
import Link from "next/link";

const images = [
  { src: "/gallery/gl1.jpg" },
  { src: "/gallery/gl3.jpg" },
  { src: "/gallery/gl4.jpg" },
  { src: "/gallery/gl5.jpg" },
  { src: "/gallery/gl7.jpg" },
  { src: "/gallery/gl9.jpg" },
  { src: "/citypage/services/channelletters.jpg" },
  { src: "/citypage/services/pylonsigns.jpg" },
  { src: "/products/product1.jpg" },
];

export default function SignageGallery({ limit = 8 }) {
  const displayImages = limit ? images.slice(0, limit) : images;

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true, once: true, offset: 50 });
  }, []);

  return (
    <section
      className="max-w-[1600px] mx-auto py-24 px-4 md:px-8 overflow-hidden"
      id="gallery"
    >
      {/* Header */}
      <div className="mb-16 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-3 mb-4" data-aos="fade-down">
          <span className="h-[1px] w-12 bg-red-600"></span>
          <span className="text-[#ED1D26] font-bold uppercase tracking-[0.3em] text-sm">
            Our Masterpieces
          </span>
          <span className="h-[1px] w-12 bg-red-600"></span>
        </div>
        <h1
          className="text-5xl md:text-7xl font-black text-[#101828] uppercase tracking-tighter leading-none"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Selected{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
            Works
          </span>
        </h1>
      </div>

      {/* Uniform Grid */}
      <PhotoProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {displayImages.map((img, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden cursor-zoom-in shadow-lg hover:shadow-[0_20px_50px_rgba(237,29,38,0.3)] transition-all duration-500 aspect-[4/3]"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <PhotoView src={img.src}>
                <div className="w-full h-full relative">
                  <img
                    src={img.src}
                    alt={`Gallery Image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    {/* Glass Icon */}
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 hover:bg-red-600 hover:border-red-600 shadow-2xl">
                      <FaExpand className="text-white text-2xl" />
                    </div>
                  </div>

                  {/* Bottom Gradient for Text contrast (optional, keeping it clean for now per uniform request) */}
                </div>
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>

      {limit > 0 && images.length > limit && (
        <div className="mt-12 flex justify-center" data-aos="fade-up">
          <Link
            href="/gallery"
            className="px-10 py-4 bg-[#ED1D26] text-white font-bold tracking-[0.2em] rounded-full uppercase hover:bg-[#101828] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View More
          </Link>
        </div>
      )}
    </section>
  );
}
