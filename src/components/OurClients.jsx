import { useEffect, useRef } from "react";

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
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animation;

    const animate = () => {
      slider.style.transition = "transform 30s linear";
      slider.style.transform = "translateX(-50%)";

      animation = setTimeout(() => {
        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";
        // Restart animation after resetting
        requestAnimationFrame(() => {
          requestAnimationFrame(animate);
        });
      }, 30000); // duration matches transition time
    };

    animate();

    return () => clearTimeout(animation);
  }, []);

  const duplicatedLogos = [...clientLogos, ...clientLogos]; // Duplicate for seamless loop

  return (
    <section className="bg-black py-12 overflow-hidden bg-center bg-cover" id="clients" style={{backgroundImage:'url("/citypage/clientsbg.jpg")'}}>
      <div className="md:max-w-[85vw] max-w-[95vw] mx-auto px-6 md:px-0">
        <div className="mb-[30px] text-center" data-aos="fade-up">
          <p className="md:text-2xl text-xl text-white uppercase mb-3">
            Trusted By Leading Brands
          </p>
          <h1 className="md:text-6xl text-4xl text-white font-extrabold">
            OUR CLIENTS<span className="text-orange-600"></span>
          </h1>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-max gap-14"
            ref={sliderRef}
            style={{ whiteSpace: "nowrap" }}
          >
            {duplicatedLogos.map((client, idx) => (
              <img
                key={idx}
                src={client.src}
                alt={client.alt}
                className="h-20 w-[200px] rounded object-contain border bg-white"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
