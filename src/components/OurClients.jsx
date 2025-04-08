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
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl text-white font-bold mb-2">Our Renowned Clients</h2>
          <div className="w-20 mx-auto h-[2px] bg-gray-300" />
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
                className="h-20 w-auto mx-auto object-contain border"
              />
            </SwiperSlide>
          ))}
        </Swiper>

       
      </div>
    </section>
  );
}