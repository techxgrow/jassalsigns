import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
  return (
    <section
      className="pt-20 pb-16 bg-black mb-[60px] md:mb-0 px-4 "
      id="testimonials"
    >
      <div className="md:max-w-[85vw] max-w-[95vw] mx-auto text-center">
        <div className="mb-[30px]" data-aos="fade-up">
          <p className="md:text-2xl text-xl text-white uppercase mb-3">
            What Our Clients Say
          </p>
          <h1 className="md:text-6xl text-4xl text-white font-extrabold">
            TESTIMONIALS<span className="text-orange-600"></span>
          </h1>
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
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="block md:h-70 h-50  overflow-hidden shadow-md group">
                <div
                  className="h-full bg-cover bg-center bg-gray-700 transition-transform duration-300 parent-testimonial"
                  // style={{ backgroundImage: `url(${testimonial.image})` }}
                >
                  <div className="h-full w-full flex flex-col justify-start p-6 text-white background-animation">
                    <div className="flex items-center mb-2 relative z-30">
                      <img
                        src={testimonial.clientImg}
                        alt={testimonial.clientName}
                        className="w-12 h-12 rounded-full border-2 border-white mr-3"
                      />
                      <h1 className="text-2xl font-medium">
                        {testimonial.clientName}
                      </h1>
                    </div>

                    <p className="text-sm sm:text-base text-left mb-2 z-30">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
