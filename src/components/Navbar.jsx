import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const cityGroups = {
  left: ["SURREY", "CLOVERDALE", "ABBOTSFORD"],
  right: ["EDMONTON", "CALGARY"],
};

const Navbar = ({ type }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const allCities = [...cityGroups.left, ...cityGroups.right];

  return (
    <nav className="absolute top-0 left-0 bg-black w-[100vw] h-[100vh] text-white py-4">
      <ul
        className={`flex flex-col justify-center items-start space-y-6 px-6 ${
          type === "right" ? "items-end" : "items-start"
        }`}
      >
        {(type ? cityGroups[type] : allCities).map((city, index) => (
          <li
            key={index}
            className="relative group cursor-pointer w-full"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Link
              href={`/citypage/${city}`}
              className={`block text-3xl sm:text-4xl font-bold transition-all duration-300 ease-in-out group-hover:text-orange-500 ${
                type === "right" ? "text-right" : "text-left"
              }`}
            >
              {city}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
