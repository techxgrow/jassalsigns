// Forced recompilation to verify link fixes
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    image: "/citypage/blogs/blog1.jpg",
    category: "Boost Branding with Indoor Signs",
    title:
      "Discover how indoor signage can enhance customer experience and reflect your brand’s personality inside your workspace.",
    link: "boost-branding-with-indoor-signs/",
  },
  {
    image: "/citypage/blogs/blog2.jpg",
    category: "Turn Vehicles Into Billboards",
    title:
      "Custom vehicle wraps help you advertise on the move—perfect for gaining local attention and showcasing your business.",
    link: "turn-vehicles-into-billboards/",
  },
  {
    image: "/citypage/blogs/blog3.jpg",
    category: "Print Still Makes Impact",
    title:
      "Modern print media like flyers and brochures are powerful tools for tangible, lasting brand communication.",
    link: "print-still-makes-impact/",
  },
  {
    image: "/citypage/blogs/blog4.jpg",
    category: "Stand Out with Outdoor Signs",
    title:
      "From storefronts to billboards, outdoor signs are essential for grabbing attention and driving foot traffic.",
    link: "stand-out-with-outdoor-signs/",
  },
];

export default function BlogsSection() {
  return (
    <section className="md:max-w-[85vw] max-w-[95vw] mx-auto md:py-20 py-16 px-6 md:px-0 bg-white">
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        data-aos="fade-up"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#ED1D26]/5 border border-[#ED1D26]/10">
            <span className="w-2 h-2 rounded-full bg-[#ED1D26] animate-pulse"></span>
            <span className="text-[#ED1D26] text-xs font-black uppercase tracking-[0.2em]">
              Our Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-grotesk text-gray-900 uppercase tracking-tighter leading-none">
            Latest <span className="text-[#ED1D26]">Blogs</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-sm md:text-left leading-relaxed">
          Discover the latest trends and expert tips in the world of
          professional signage and branding.
        </p>
        </div>
         <div className="mt-12 flex justify-center" data-aos="fade-up">
            <Link
                href="/blogs"
                className="px-10 py-4 bg-[#ED1D26] text-white font-bold tracking-[0.2em] rounded-full uppercase hover:bg-[#101828] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                View More
            </Link>
         </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="blog-swiper !pb-12"
      >
        {blogs.map((blog, idx) => (
          <SwiperSlide key={idx}>
            <div className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 h-full flex flex-col">
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Category */}
                <div className="absolute top-5 left-5 z-20">
                  <div className="backdrop-blur-md bg-white/20 border border-white/30 px-4 py-1.5 rounded-full shadow-lg">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">
                      {blog.category.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-[#ED1D26] text-[10px] font-black uppercase tracking-[0.2em] block mb-2">
                    {blog.category}
                  </span>
                  <h3 className="text-xl font-black font-grotesk text-gray-900 leading-tight group-hover:text-[#ED1D26] transition-colors duration-300">
                    {blog.title.length > 80
                      ? blog.title.substring(0, 80) + "..."
                      : blog.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                  Learn more about {blog.category.toLowerCase()} and how it
                  impacts your business visibility.
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/blogs/${blog.link.replace(/^\//, "")}`}
                    className="inline-flex items-center gap-3 text-gray-900 font-black uppercase text-xs tracking-widest group/link transition-all"
                  >
                    <span className="relative">
                      Read Details
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ED1D26] transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover/link:bg-[#ED1D26] group-hover/link:border-[#ED1D26] group-hover/link:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
