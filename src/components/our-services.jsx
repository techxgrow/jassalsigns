import { useEffect, useState } from "react";

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
        imgSrc: "https://img.freepik.com/premium-photo/exit-sign-that-says-exit-it_916191-394664.jpg?w=1380",
        category: "INDOOR SIGNS",
        title: "We make sure your message meets the masses.",
        link: "indoor-sign"
      },
      {
        imgSrc: "/citypage/services/vehiclewraps.jpg",
        category: "VEHICLE WRAPS",
        title: "Transform your vehicle with Jassal Signs!",
        link: "vehicle-wrap"
      },
      {
        imgSrc: "/citypage/services/printmedia.jpg",
        category: "PRINT MEDIA",
        title: "Print your vision with Jassal Signs",
        link: "print-media"
      },
      {
        imgSrc: "https://img.freepik.com/free-photo/empty-billboard-metropolis-city_23-2151913695.jpg?t=st=1746968178~exp=1746971778~hmac=92e325dd6cbf97d02661a6d785b2282c355a97ef5fea741dc13092b2afb91add&w=1800",
        category: "OUTDOOR SIGNS",
        title: "We make sure your message meets the masses.",
        link: "outdoor-sign"
      }
  ];

  return (
    <section   >
    

   
      <div >
        
          {portfolioItems.map((item, index) => (
  <div className="overflow-hidden group" id={item.link} key={index}>
    <div
      className="md:h-[300px] h-[180px] relative w-full bg-no-repeat bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-[1.1] transition-all duration-1000"
      style={{ backgroundImage: `url(${item.imgSrc})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/45  group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

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
  </div>
))}
       
      </div>
      
      
    </section>
  );
};

export default OurServices;