'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const blogs = [
  {
    image: "/citypage/blogs/blog1.jpg",
    category: "Boost Branding with Indoor Signs",
    title: "Discover how indoor signage can enhance customer experience and reflect your brand’s personality inside your workspace.",
    link: "#",
  },
  {
    image: "/citypage/blogs/blog2.jpg",
    category: "Turn Vehicles Into Billboards",
    title: "Custom vehicle wraps help you advertise on the move—perfect for gaining local attention and showcasing your business.",
    link: "#",
  },
  {
    image: "/citypage/blogs/blog3.jpg",
    category: "Print Still Makes Impact",
    title: "Modern print media like flyers and brochures are powerful tools for tangible, lasting brand communication.",
    link: "#",
  },
  {
    image: "/citypage/blogs/blog4.jpg",
    category: "Stand Out with Outdoor Signs",
    title: "From storefronts to billboards, outdoor signs are essential for grabbing attention and driving foot traffic.",
    link: "#",
  },
];

export default function BlogsSection() {
  return (
    <section className="max-w-[1280px] mx-auto md:py-16 py-12 px-6 md:px-0 bg-white">
      <div className="text-center mb-10" data-aos="fade-up">
        <p className="text-[#ED1D26] text-xl md:text-2xl uppercase mb-2">Our Insights</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">Latest Blogs</h1>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog, idx) => (
          <SwiperSlide key={idx}>
            {/* <a href={blog.link} className="block shadow-md rounded-lg overflow-hidden group transition-all duration-300"> */}
              <div className="relative w-full h-52  block shadow-md rounded-lg overflow-hidden group transition-all duration-30">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />
              </div>
              <div className="p-4 bg-white">
                <h2 className="uppercase text-[#ED1D26] font-semibold text-lg mb-2">{blog.category}</h2>
                <p className="text-gray-800 text-md leading-relaxed">{blog.title}</p>
              </div>
            {/* </a> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
