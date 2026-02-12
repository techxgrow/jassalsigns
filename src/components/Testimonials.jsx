import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Quote, Star } from "lucide-react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    image: "/testimonials/testimonial1.jpg",
    clientImg: "/testimonials/user-1.jpg",
    clientName: "Vita Denture Cinic",
    category: "CEO, Tech Innovations",
    title:
      "I am so thankful to Jassal Signs and Harry. We had an event for which Jassal Signs made our banner. ... Thank you",
    link: "#",
    id: 1,
  },
  {
    image:
      "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/blog-details-d.jpg",
    clientImg: "/testimonials/user-2.jpg",
    clientName: "Meenu Dahal",
    category: "Marketing Head, Creative Agency",
    title:
      "I am super happy with the products and the customer services (especially Gagan, Vik and the receptionist were very professional and they know what they are doing.",
    link: "#",
  },
  {
    image:
      "https://outmedia.freekytheme.com/wp-content/uploads/2020/09/blog-details-a.jpg",
    clientImg: "/testimonials/user-3.jpg",
    clientName: "David Johnson",
    category: "Founder, Startup Hub",
    title:
      "Throughout the whole buying experience from walking in with no vision to walking out with the most eye catching sign, Jassal Signs was like no other when it comes to customer service.",
    link: "#",
  },
  {
    image:
      "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/blog-details-f.jpg",
    clientImg: "/testimonials/user-4.jpg",
    clientName: "Emma Brown",
    category: "Founder",
    title:
      "Their signage service was absolutely fantastic. The quality, communication, and efficiency made this experience far better than I ever imagined possible.",
    link: "#",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden"
      id="testimonials"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div
          className="text-center mb-16 md:mb-24 space-y-4"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#ED1D26]"></span>
            <p className="text-[#ED1D26] font-black uppercase tracking-[0.5em] text-xs md:text-sm">
              Client Love
            </p>
            <span className="w-8 h-[1px] bg-[#ED1D26]"></span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase px-4">
            World Class <br />
            <span className="text-gray-800">Testimonials</span>
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-white/20 !opacity-100",
              bulletActiveClass:
                "!bg-[#ED1D26] !w-8 !rounded-full transition-all duration-300",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-20 testimonials-swiper"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx} className="h-full">
                <div className="group relative h-full">
                  {/* Glassmorphism Card */}
                  <div className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[40px] hover:border-red-600/30 transition-all duration-700 flex flex-col justify-between">
                    {/* Quote Icon */}
                    <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                      <Quote className="w-16 h-16 text-[#ED1D26]" />
                    </div>

                    <div className="space-y-6">
                      {/* Brand Logo/Image Placeholder - Optional, using Client Logo if provided */}
                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-[#ED1D26] fill-[#ED1D26]"
                          />
                        ))}
                      </div>

                      <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed italic relative z-10 transition-colors duration-500 group-hover:text-white">
                        "{testimonial.title}"
                      </p>
                    </div>

                    <div className="pt-10 flex items-center gap-5 border-t border-white/5 mt-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <img
                          src={testimonial.clientImg}
                          alt={testimonial.clientName}
                          className="relative w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-red-600 transition-colors duration-500 shadow-xl"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase tracking-tighter text-lg leading-tight group-hover:text-[#ED1D26] transition-colors duration-300">
                          {testimonial.clientName}
                        </h4>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                          {testimonial.category || "Client"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
}
