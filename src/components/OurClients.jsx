import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const clientLogos = [
  {
    alt: "Canpar",
    src: "https://megasigns.ca/wp-content/uploads/2021/06/2-removebg-preview.png",
  },
  {
    alt: "Sun Life Financial",
    src: "https://megasigns.ca/wp-content/uploads/2021/06/3-removebg-preview.png",
  },
  {
    alt: "IDA",
    src: "https://megasigns.ca/wp-content/uploads/2021/06/4-removebg-preview.png",
  },
  {
    alt: "Wyndham Garden",
    src: "https://megasigns.ca/wp-content/uploads/2021/06/5-removebg-preview.png",
  },
  {
    alt: "Subway",
    src: "https://megasigns.ca/wp-content/uploads/2021/06/1-removebg-preview.png",
  },
];

export default function OurClients() {
  return (
    <section className="bg-black py-12" id="clients">
      <div className="max-w-7xl mx-auto  px-6 md:px-0">
      <div className=" mb-[30px] text-center" data-aos="fade-up">
          <p className="md:text-2xl text-xl text-orange-600 uppercase mb-3">Trusted By Leading Brands</p>
          <h1 className="md:text-6xl text-4xl text-white font-extrabold">
            OUR  CLIENTS<span className="text-orange-600"></span>
          </h1>
        </div>

        {/* Swiper Slider for Client Logos */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
          }}
        >
          {clientLogos.map((client, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={client.src}
                alt={client.alt}
                className="h-20 w-[200px] rounded mx-auto object-contain border bg-white"
              />
            </SwiperSlide>
          ))}
        </Swiper>

       
      </div>
    </section>
  );
}