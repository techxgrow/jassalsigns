import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const rightCities = ["EDMONTON", "CALGARY"];

const RightNavbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <nav className="text-white h-full flex items-start justify-end min-h-[300px]">
      <ul className="flex flex-col justify-end pr-6 space-y-6">
        {rightCities.map((city, index) => (
          <li
            key={city}
            className="cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Link
              href={`/citypage/${city}`}
              className="block text-[30px] font-bold transition-transform duration-300 hover:text-orange-500 hover:scale-105"
            >
              {city}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RightNavbar;
