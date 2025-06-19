import { useEffect, useState } from "react";
import Link from "next/link";
const OurServices = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioItems = [
    {
        imgSrc: "/citypage/services/indoorsigns.jpg",
        category: "INDOOR SIGNS",
        title: "We make sure your message meets the masses.",
        link: "/products/indoorsigns"
      },
      {
        imgSrc: "/citypage/services/vehiclewraps.jpg",
        category: "VEHICLE WRAPS",
        title: "Transform your vehicle with Jassal Signs!",
        link: "/products/vehiclewraps"
      },
      {
        imgSrc: "/citypage/services/printmedia.jpg",
        category: "CHANNEL LETTERS",
        title: "Shine bright with custom Channel Letters by Jassal Signs",
        link: "/products/channelletters"
      },
      {
        imgSrc: "/citypage/services/pylonsigns.jpg",
        category: "PYLON SIGNS",
        title: "Stand tall with impactful Pylon Signs by Jassal Signs",
        link: "/products/pylonsigns"
      },
      {
        imgSrc: "/citypage/services/outdoorsigns.jpg",
        category: "OUTDOOR SIGNS",
        title: "We make sure your message meets the masses.",
        link: "/products/outdoorsigns"
      }
  ];

  return (
    <section   >
    

   
      <div >
        
          {portfolioItems.map((item, index) => (
  <Link href={item.link}  className="overflow-hidden group" id={item.link} key={index}>
    <div
      className="md:h-[280px] h-[180px] relative w-full bg-no-repeat bg-cover bg-center md:grayscale group-hover:grayscale-0 group-hover:scale-[1.1] transition-all duration-1000"
      style={{ backgroundImage: `url(${item.imgSrc})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60  group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

      {/* Text content */}
      <div className="absolute w-full top-0 left-0 h-full flex justify-center items-center flex-col z-20">
        <h1 className="md:text-5xl text-white text-3xl text-center md:text-left font-extrabold">
          {item.category}
        </h1>
        <p className="md:text-xl text-lg text-white text-center md:text-left">
          {item.title}
        </p>
      </div>
    </div>
  </Link>
))}
       
      </div>
      
      
    </section>
  );
};

export default OurServices;