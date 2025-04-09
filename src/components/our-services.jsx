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
        imgSrc: "/citypage/services/service1.jpg",
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
        imgSrc: "/citypage/services/outdoorsigns.jpg",
        category: "OUTDOOR SIGNS",
        title: "We make sure your message meets the masses.",
        link: "outdoor-sign"
      }
  ];

  return (
    <section   >
    

   
      <div >
        
          {portfolioItems.map((item, index) => (
           <div className='overflow-hidden group' id={item.link}>
           <div className='md:h-[300px] h-[180px] relative w-full  group-hover:scale-[1.1] transition-all duration-1000 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${item.imgSrc})` }}>
               <div className='border-green-600 absolute w-full top-0 left-0 h-full flex justify-center items-center flex-col bg-black/50 backdrop-blur-none'>
                   <h1 className='md:text-4xl text-2xl text-center md:text-left font-bold'>{item.category}</h1>
                   <p className=" md:text-xl text-lg text-center md:text-left duration-1000 ">{item.title}</p>
               </div>
           </div>
           </div>
          ))}
       
      </div>
      
      
    </section>
  );
};

export default OurServices;