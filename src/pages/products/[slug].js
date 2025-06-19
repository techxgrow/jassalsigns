

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

const images = [
  { src: "/gallery/gl1.jpg" },
  { src: "/gallery/gl2.jpg" },
  { src: "/gallery/gl3.jpg" },
  { src: "/gallery/gl4.jpg" },
  { src: "/gallery/gl5.jpg" },
  { src: "/gallery/gl6.jpg" },
  { src: "/gallery/gl7.jpg" },
  { src: "/gallery/gl8.jpg" },
  { src: "/gallery/gl9.jpg" },
];

const ProductPage = () => {
  const router = useRouter();
  const slug = router.query.slug;

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true, once: true, offset: 100 });
  }, []);

  const aosAnimations = ["fade-up", "zoom-in", "fade-down", "fade-right", "fade-left"];

  return (
    <div>
     
       <ProductNavbar />
      {/* Header Start */}
      <div className="relative h-[320px] overflow-hidden">
        {/* Animated Background */}
        <div
          className="absolute inset-0  bg-no-repeat bg-center  bg-cover animate-zoom-slow"
          style={{
            backgroundImage: slug ? `url(/productsimages/${slug}.jpg)` : "none",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10 "></div>

        {/* Text Content */}
        <div className="relative z-20 flex flex-col gap-4 justify-center items-center text-center h-full px-4">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl font-grotesk text-white">
            {data.productPage[slug]?.heading}
          </h2>
          <h4 className="text-white text-sm sm:text-base font-semibold font-grotesk">
            {`Products > ${data.productPage[slug]?.heading}`}
          </h4>
        </div>
      </div>
      {/* Header End */}

      <div className="md:max-w-[85vw] max-w-[95vw] mx-auto py-10 px-4 sm:px-6">
        {/* Top Paragraph */}
        <p className="my-4 text-base sm:text-lg text-gray-700">
          {data.productPage[slug]?.para1}
        </p>

        {/* Consultation Section */}
        <div className="grid grid-cols-1 md:grid-cols-[58%_40%] gap-8">
          {/* Left Section */}
          <div className="p-0 sm:p-4">
            <h3 className="text-base sm:text-lg font-bold mt-4 mb-2 ">
              {data.productPage[slug]?.consultationObj?.heading}
            </h3>
            <h4 className="text-sm sm:text-base mb-4">
              {data.productPage[slug]?.consultationObj?.subHeading}
            </h4>
            <ul className="list-disc list-inside space-y-2 ml-4 sm:ml-2 mb-4 text-sm sm:text-base text-gray-800">
              {data.productPage[slug]?.consultationObj?.bulletList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base font-medium">
              Ready to elevate your brand presence? Fill out the form and get a free signage consultation today.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full">
            <ConsultationForm />
          </div>
        </div>

        {/* Paragraph 2 */}
        <p className="my-4 text-base sm:text-lg text-gray-700">
          {data.productPage[slug]?.para2}
        </p>

        {/* Gallery */}
        <PhotoProvider>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-0 sm:px-6 md:px-0 space-y-4">
            {images.map((img, index) => (
              <PhotoView key={index} src={img.src}>
                <div
                  className="mb-4 break-inside-avoid overflow-hidden shadow-md cursor-zoom-in rounded group relative"
                  data-aos={aosAnimations[index % aosAnimations.length]}
                  data-aos-delay={(index % 3) * 100}
                >
                  <img
                    src={img.src}
                    alt={`Gallery Image ${index + 1}`}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-300 hover:scale-105 rounded ${
                      index === 5 ? "h-[467px]" : index === 8 ? "h-[480px]" : ""
                    }`}
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>

        {/* Remaining Paragraphs */}
        {[3, 4, 5].map((num) => (
          <p key={num} className="my-4 text-base sm:text-lg text-gray-700">
            {data.productPage[slug]?.[`para${num}`]}
          </p>
        ))}
      </div>

     <ProductsFooter/>
    </div>
  );
};

export default ProductPage;
