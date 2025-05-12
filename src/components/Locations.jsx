import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

const Locations = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const bgImage = `/citypage/calgary.jpg`;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const locationsData = [
     {
      image: '/citypage/surrey.jpg',
      heading: 'SURREY',
    },
    {
      image: '/citypage/edmonton.jpg',
      heading: 'EDMONTON',
    },
    {
      image: '/citypage/abbotsford.jpg',
      heading: 'ABBOTSFORD',
    },
      {
      image: '/citypage/calgary.jpg',
      heading: 'CALGARY',
    },
    {
      image: '/citypage/cloverdale.jpg',
      heading: 'CLOVRDALE',
    },
    ];
  

  return (
    <div className='bg-white h-[300px] flex gap-2 overflow-hidden'>
      {locationsData.map((item, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`
            relative h-full transition-all duration-500 bg-cover bg-center
            ${hoveredIndex === i ? 'flex-[3]' : hoveredIndex === null ? 'flex-1' : 'flex-[0.75]'}
          `}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-none flex items-center justify-center">
            <Link href={`/citypage/${item.heading}`} className="text-white text-2xl font-semibold">{item.heading}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Locations;
