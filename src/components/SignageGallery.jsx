import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FaExpand } from "react-icons/fa";
import Link from "next/link";

const allImages = [
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (17).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (1).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (16).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (11).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (7).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (6).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (10).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (9).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (5).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (13).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (12).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (4).jpg" },
  { src: "/gallery/services/pylon/pylon3.jpeg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (8).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (3).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (15).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (19).jpg" },
  { src: "/gallery/services/pylon/pylon.jpeg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (18).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (14).jpg" },
  { src: "/gallery/services/pylon/Jassal Signs-Pylon (2).jpg" },
  { src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (9).jpg" },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (29).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (13).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (25).jpg",
  },
  { src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (5).jpg" },
  { src: "/gallery/services/channel-sales/channel-outdoor-jassalsigns.jpeg" },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (33).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (32).jpg",
  },
  { src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (4).jpg" },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (24).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (12).jpg",
  },
  { src: "/gallery/services/channel-sales/channel-outdoor.jpeg" },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (28).jpg",
  },
  { src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (8).jpg" },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (23).jpg",
  },
  { src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (3).jpg" },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (35).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (19).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (15).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (14).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (18).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (34).jpg",
  },
  { src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (2).jpg" },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (22).jpg",
  },
  { src: "/gallery/services/channel-sales/channel-jassal-signs.jpeg" },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (37).jpg",
  },
  { src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (1).jpg" },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (21).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (17).jpg",
  },
  {
    src: "/gallery/services/channel-sales/channel-outdoor-jassalsigns(1).jpeg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (16).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (20).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (36).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (11).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (31).jpg",
  },
  { src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (7).jpg" },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (27).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (26).jpg",
  },
  { src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (6).jpg" },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (30).jpg",
  },
  {
    src: "/gallery/services/channel-sales/Jassal Signs-Outdoor Signs (10).jpg",
  },
  { src: "/gallery/services/other/pylon4.jpeg" },
  { src: "/gallery/services/printing/printing1-jassalsigns.jpeg" },
  { src: "/gallery/services/channelJassalsigns.jpeg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (11).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (46).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (6).jpg" },
  { src: "/gallery/services/vehicle-wraps/20160812_113741.jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (27).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (31).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (30).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (26).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (7).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (47).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (10).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (21).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (37).jpg" },
  { src: "/gallery/services/vehicle-wraps/vehicle-wraps2.jpeg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (17).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (40).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (1).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (41).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (16).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (36).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (20).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (19).jpg" },
  { src: "/gallery/services/vehicle-wraps/vehicle-wraps.jpeg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (35).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (23).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (2).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (42).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (15).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (39).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (38).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (14).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (43).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (3).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (22).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (34).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (18).jpg" },
  { src: "/gallery/services/vehicle-wraps/vehicle4.jpeg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (4).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (44).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (13).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (29).jpg" },
  { src: "/gallery/services/vehicle-wraps/vehicle3.jpeg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (8).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (48).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (33).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (25).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (24).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (32).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (9).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (28).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (12).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (45).jpg" },
  { src: "/gallery/services/vehicle-wraps/Jassal Signs-Vehicle Wrap (5).jpg" },
  { src: "/gallery/services/printing1-jassalsigns.jpeg" },
  { src: "/gallery/services/channel-jassalsigns.jpeg" },
  { src: "/gallery/services/indoor/indoor2.jpeg" },
  { src: "/gallery/services/indoor/indoor3.jpeg" },
  { src: "/gallery/services/indoor/indoor(1).jpeg" },
  { src: "/gallery/services/indoor/indoor-jassalsigns.jpeg" },
  { src: "/gallery/services/indoor/indoor.jpeg" },
  {
    src: "/gallery/services/indoor/WhatsApp Image 2026-02-25 at 00.43.00.jpeg",
  },
  { src: "/gallery/services/indoor/channel-jassal sings.jpeg" },
  { src: "/gallery/services/outdoor/outdoor16.jpeg" },
  {
    src: "/gallery/services/outdoor/WhatsApp Image 2026-02-25 at 00.56.20.jpeg",
  },
  { src: "/gallery/services/outdoor/outdoor.jpeg" },
  { src: "/gallery/services/outdoor/outdoor2.jpeg" },
  {
    src: "/gallery/services/outdoor/WhatsApp Image 2026-02-25 at 00.43.02.jpeg",
  },
  { src: "/gallery/services/outdoor/outdoor10.jpeg" },
  { src: "/gallery/services/outdoor/outdoor9.jpeg" },
  { src: "/gallery/services/outdoor/outdoor8.jpeg" },
  { src: "/gallery/services/outdoor/outdoor11.jpeg" },
  { src: "/gallery/services/outdoor/outdoor(3).jpeg" },
  { src: "/gallery/services/outdoor/outdoor12.jpeg" },
  { src: "/gallery/services/outdoor/outdoor(1).jpeg" },
  { src: "/gallery/services/outdoor/outdoor(5).jpeg" },
  { src: "/gallery/services/outdoor/outdoor13.jpeg" },
  { src: "/gallery/services/outdoor/outdoor(7).jpeg" },
  { src: "/gallery/services/outdoor/outdoor(2).jpeg" },
  { src: "/gallery/services/outdoor/outdoor14.jpeg" },
  { src: "/gallery/services/outdoor/outdoor15.jpeg" },
  { src: "/gallery/services/outdoor/outdoor(6).jpeg" },
  { src: "/gallery/services/outdoor/outdoor(4).jpeg" },
];

export default function SignageGallery({ limit = 8 }) {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true, once: true, offset: 50 });

    // Shuffle images on mount
    const shuffle = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    setShuffledImages(shuffle(allImages));
  }, []);

  const displayImages = limit ? shuffledImages.slice(0, limit) : shuffledImages;

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
              key={`${img.src}-${index}`}
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
                </div>
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>

      {limit > 0 && allImages.length > limit && (
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
