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
    title: "I am so thankful to Jassal Signs and Harry. We had an event for which Jassal Signs made our banner. ... Thank you",
    link: "https://outmedia.freekytheme.com/tech-gift-ideas-to-help-tackle-your-holiday-shopping-list/",
  },
  {
    image: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/blog-details-d.jpg",
    clientImg: "/testimonials/user-2.jpg",
    clientName: "Meenu Dahal",
    category: "Marketing Head, Creative Agency",
    title: "I am super happy with the products and the customer services (especially Gagan, Vik and the receptionist were very professional and they know what they are doing.",
    link: "https://outmedia.freekytheme.com/get-no-fuss-file-level-crypto-with-fscrypt/",
  },
  {
    image: "https://outmedia.freekytheme.com/wp-content/uploads/2020/09/blog-details-a.jpg",
    clientImg: "/testimonials/user-3.jpg",
    clientName: "David Johnson",
    category: "Founder, Startup Hub",
    title: "Throughout the whole buying experience from walking in with no vision to walking out with the most eye catching sign, Jassal Signs was like no other when it comes to customer service.",
    link: "https://outmedia.freekytheme.com/be-well-a-few-tips-to-brighten-your-day/",
  },
  {
    image: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/blog-details-f.jpg",
    clientImg: "/testimonials/user-4.jpg",
    clientName: "Emma Brown",
    category: "Founder",
    title: "Their signage service was absolutely fantastic. The quality, communication, and efficiency made this experience far better than I ever imagined possible.",
    link: "https://outmedia.freekytheme.com/arm-pivot-a-step-into-the-reality-distortion-field/",
  },
];

export default function Testimonials() {
  return (
    <section className="pt-20 pb-16 bg-black mb-[60px] md:mb-0 px-4 sm:px-6 lg:px-8" id="testimonials">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-[30px]" data-aos="fade-up">
          <p className="md:text-2xl text-xl text-orange-600 uppercase mb-3">What Our Clients Say</p>
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
              <a
                href={testimonial.link}
                className="block h-80 sm:h-96 overflow-hidden shadow-md group"
              >
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
                      <h1 className="text-2xl font-medium">{testimonial.clientName}</h1>
                    </div>

                    <p className="text-sm sm:text-base text-left mb-2 z-30">{testimonial.title}</p>
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
