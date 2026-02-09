import { useRouter } from "next/router";
import { data } from "../../../assets/data";
import React, { useEffect } from "react";
import ProductNavbar from "@/components/navbar/ProductNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import ConsultationForm from "@/components/ui/ConsultationForm";
import ProductsFooter from "@/components/ProductsFooter";
import { Element } from "react-scroll";
import CityFooter from "@/components/CityFooter";
import CityNavbar from "@/components/navbar/CityNavbar";
import { CheckCircle2 } from "lucide-react";

const images = [
  { src: "/gallery/gl1.jpg" },
  { src: "/gallery/gl2.jpg" },
  { src: "/gallery/gl3.jpg" },
  { src: "/gallery/gl4.jpg" },
  { src: "/gallery/gl5.jpg" },
  // { src: "/gallery/gl6.jpg" },
  { src: "/gallery/gl7.jpg" },
  // { src: "/gallery/gl8.jpg" },
  { src: "/gallery/gl9.jpg" },
];

const ProductPage = () => {
  const router = useRouter();
  const slug = router.query.slug;

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
    <div>
      {/* <ProductNavbar /> */}
      <CityNavbar />
      {/* Header Start */}
      <div className="relative h-[320px] overflow-hidden">
        {/* Animated Background */}
        {/* Desktop Background */}
        <div
          className="absolute inset-0 hidden sm:block bg-center bg-cover animate-zoom-slow"
          style={{
            backgroundImage: slug ? `url(/productsimages/${slug}.jpg)` : "none",
          }}
        ></div>

        {/* Mobile Background */}
        <div
          className="absolute inset-0 block sm:hidden bg-center bg-cover animate-zoom-slow"
          style={{
            backgroundImage: slug
              ? `url(/productsimages/mb${slug}.jpg)`
              : "none",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10 "></div>

        {/* Text Content */}
        <div className="relative z-20 flex flex-col gap-4 justify-center items-center text-center h-full px-4">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl font-grotesk text-white">
            {data.productPage[slug]?.heading}
          </h2>
          {/* <h4 className="text-white text-sm sm:text-base font-semibold font-grotesk">
            {`Services > ${data.productPage[slug]?.heading}`}
          </h4> */}
        </div>
      </div>
      {/* Header End */}

      <div className="md:max-w-[85vw] max-w-[95vw] mx-auto py-10 px-4 sm:px-6">
        {/* Top Paragraph */}
        <p className="my-6 text-base md:text-lg text-gray-700 leading-relaxed">
          {data.productPage[slug]?.para1}
        </p>

        {/* Consultation Section */}
        <div className="grid grid-cols-1 md:grid-cols-[58%_40%] gap-12 items-start py-8">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-black font-grotesk text-[#ED1D26] uppercase tracking-tighter">
                {data.productPage[slug]?.consultationObj?.heading}
              </h3>
              <h4 className="text-lg md:text-xl font-extrabold font-grotesk text-gray-600">
                {data.productPage[slug]?.consultationObj?.subHeading}
              </h4>
            </div>
            <div className="space-y-4">
              {data.productPage[slug]?.consultationObj?.bulletList.map(
                (item, index) => (
                  <div key={index} className="flex gap-4 group/item">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ED1D26]/10 flex items-center justify-center group-hover/item:bg-[#ED1D26] transition-colors duration-300">
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-[#ED1D26] group-hover/item:text-white transition-colors duration-300"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-base md:text-lg text-gray-700 font-medium leading-tight">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
            <p className="text-base md:text-lg font-bold text-gray-900 border-l-4 border-[#ED1D26] pl-6 py-2 bg-gray-50 rounded-r-xl">
              Ready to elevate your brand presence? Fill out the form and get a
              free signage consultation today.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full">
            <ConsultationForm />
          </div>
        </div>

        {/* Paragraph 2 */}
        <p className="my-8 text-base md:text-lg text-gray-700 leading-relaxed">
          {data.productPage[slug]?.para2}
        </p>

        <Element name="gallerySection" className="py-12">
          <PhotoProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, index) => (
                <PhotoView key={index} src={img.src}>
                  <div
                    className="overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-zoom-in rounded-[40px] group relative bg-gray-100 aspect-square"
                    data-aos={aosAnimations[index % aosAnimations.length]}
                    data-aos-delay={(index % 4) * 100}
                  >
                    <img
                      src={img.src}
                      alt={`Gallery Image ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Premium Glass Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
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
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
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
              ))}
            </div>
          </PhotoProvider>
        </Element>

        {/* Remaining Paragraphs */}
        {[3, 4, 5].map((num) => (
          <p
            key={num}
            className="my-6 text-base md:text-lg text-gray-700 leading-relaxed"
          >
            {data.productPage[slug]?.[`para${num}`]}
          </p>
        ))}
      </div>

      {/* <ProductsFooter /> */}

      <CityFooter />
    </div>
  );
};

export default ProductPage;
