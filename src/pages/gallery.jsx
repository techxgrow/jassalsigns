import React, { useEffect, useState } from "react";
import CityNavbar from "@/components/navbar/CityNavbar";
import CityFooter from "@/components/CityFooter";
import Head from "next/head";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

const GalleryPage = () => {
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true, once: true, offset: 50 });

    // Fetch all images and categories
    fetch("/api/gallery")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Expected JSON response from server");
        }
        return res.json();
      })
      .then((data) => {
        if (data.categories) setCategories(data.categories);
        if (data.images) setImages(data.images);
      })
      .catch((err) => console.error("Error fetching gallery data", err));
  }, []);

  // Reset to first page when changing tabs
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const filteredImages =
    activeTab === "all"
      ? images
      : images.filter((img) => img.category === activeTab);

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Head>
        <title>Our Gallery | Jassal Signs</title>
        <meta
          name="description"
          content="Explore our complete line of masterpieces and signage works."
        />
      </Head>
      <CityNavbar />

      <div className="pt-32 pb-24 min-h-screen bg-[#fafafa]">
        <div className="max-w-[85vw] mx-auto px-4 md:px-0">
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
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Portfolio
              </span>
            </h1>
            <h2 className="sr-only">Explore Custom Business Signs and Decals by Category</h2>
          </div>

          {/* Tabs */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-[#ED1D26] text-white shadow-lg shadow-red-500/30"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <PhotoProvider>
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 min-h-[500px]"
            >
              <AnimatePresence mode="popLayout">
                {currentImages.map((img, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    key={img.src}
                  >
                    <PhotoView src={img.src}>
                      <div className="relative group rounded-3xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-2xl transition-all duration-500 aspect-[4/3] bg-white">
                        <img
                          src={img.src}
                          alt={`${img.categoryName} Work ${index + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="11" cy="11" r="8"></circle>
                              <line
                                x1="21"
                                y1="21"
                                x2="16.65"
                                y2="16.65"
                              ></line>
                              <line x1="11" y1="8" x2="11" y2="14"></line>
                              <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                            <span className="text-white font-black uppercase tracking-tighter text-sm">
                              Expand
                            </span>
                          </div>
                        </div>
                      </div>
                    </PhotoView>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {currentImages.length === 0 && images.length > 0 && (
              <div className="text-center py-20 text-gray-500 font-bold text-xl">
                No images available in this category yet.
              </div>
            )}

            {images.length === 0 && (
              <div className="text-center py-20 text-gray-500 font-medium">
                Loading gallery...
              </div>
            )}
          </PhotoProvider>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              className="mt-16 flex justify-center items-center gap-2"
              data-aos="fade-up"
            >
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all font-bold"
              >
                &larr;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      currentPage === number
                        ? "bg-[#ED1D26] text-white shadow-md shadow-red-500/30"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {number}
                  </button>
                ),
              )}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all font-bold"
              >
                &rarr;
              </button>
            </div>
          )}
        </div>
      </div>

      <CityFooter />
    </>
  );
};

export default GalleryPage;
