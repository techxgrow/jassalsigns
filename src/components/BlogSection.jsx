'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const blogs = [
  {
    image: "/citypage/blogs/blog1.jpg",
    category: "Branding",
    title: "Usability Secrets to Create Interfaces",
    link: "#",
  },
  {
    image: "/citypage/blogs/blog2.jpg",
    category: "Design",
    title: "The Main Thing For The Web Designer",
    link: "#",
  },
  {
    image: "/citypage/blogs/blog3.jpg",
    category: "Design",
    title: "3 Ways To Level Up Your Photography",
    link: "#",
  },
  {
    image: "/citypage/blogs/blog4.jpg",
    category: "Technology",
    title: "From Vision to Reality: The Art of Custom Signage",
    link: "#",
  },
];

export default function BlogsSection() {
  return (
    <section className=" max-w-[1280px] mx-auto md:py-16 pt-20 bg-white mb-[60px] md:mb-0  px-2">
      <div className="  text-center ">
        <div className="mb-[30px] text-center" data-aos="fade-up">
          <p className="md:text-2xl text-xl text-orange-600 uppercase mb-3">OUR INSIGHTS</p>
          <h1 className="md:text-6xl text-4xl text-gray-900 font-extrabold">LATEST BLOGS</h1>
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
              <a
                href={blog.link}
                className="block h-80 overflow-hidden shadow-md group "
              >
                {/* Hover effect container */}
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110  relative"
                  style={{ backgroundImage: `url(${blog.image})` }}
                >
                  {/* Dark overlay */}
                  <div className="h-full w-full flex flex-col justify-end p-6 text-white  bg-black/40">
                    <span className="text-sm uppercase text-orange-400 font-semibold mb-1 z-10">
                      {blog.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 z-10">{blog.title}</h3>
                    <span className="text-sm underline text-blue-300 z-10">Read More</span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}