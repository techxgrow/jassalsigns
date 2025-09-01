import { useState, useEffect } from "react";
import Services from "@/components/Services";
import LocationLinks from "@/components/LocationLinks";
import { IoMdClose } from "react-icons/io";
import HomepageFooter from "@/components/HomepageFooter";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";

const markers = [
  {
    name: "CLOVERDALE",
    coordinates: ["8%", "62%"], // adjust %
    link: "/citypage/CLOVERDALE",
  },
  {
    name: "ABBOTSFORD",
    coordinates: ["12%", "67%"], // adjust %
    link: "/citypage/ABBOTSFORD",
  },
  {
    name: "SURREY",
    coordinates: ["7%", "65%"], // adjust %
    link: "/citypage/SURREY",
  },
  {
    name: "EDMONTON",
    coordinates: ["20%", "61%"], // adjust %
    link: "/citypage/EDMONTON",
  },
  {
    name: "CALGARY",
    coordinates: ["19%", "68%"], // adjust %
    link: "/citypage/CALGARY",
  },
  {
    name: "SACRAMENTO",
    coordinates: ["8%", "43%"], // adjust %
    link: "/citypage/SACRAMENTO",
  },
];

// Custom Map Component
const ImageMap = ({ imageSrc, mapMarkers, mapName }) => {
  const router = useRouter();

  return (
    <div className="relative w-full border rounded-lg overflow-hidden">
      <div className="absolute top-2 left-2 z-10 bg-black bg-opacity-70 text-white px-3 py-1 rounded">
        {mapName}
      </div>
      <div className="relative">
        <img src={imageSrc} alt={mapName} className="w-full h-auto" />
        {mapMarkers.map(({ name, coordinates, link }) => (
          <button
            key={name}
            className="absolute group transition-all duration-200 hover:scale-110"
            style={{
              left: coordinates[0], // percentage
              top: coordinates[1], // percentage
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => router.push(link)}
          >
            {/* Pin marker */}
            <div className="relative">
              <div className="w-4 h-4 group-hover:scale-125 transition-all duration-200"></div>

              {/* City name tooltip */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {name}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// TwoMaps Component
const TwoMaps = () => {
  const canadaMarkers = markers.filter((marker) =>
    ["CLOVERDALE", "ABBOTSFORD", "SURREY", "EDMONTON", "CALGARY"].includes(
      marker.name
    )
  );

  const usaMarkers = markers.filter((marker) =>
    ["SACRAMENTO"].includes(marker.name)
  );

  return (
    <div className="space-y-4">
      <ImageMap
        imageSrc="/gallery/Canada.png"
        mapMarkers={canadaMarkers}
        mapName="Canada"
      />
      <ImageMap
        imageSrc="/gallery/USA.png"
        mapMarkers={usaMarkers}
        mapName="USA"
      />
    </div>
  );
};

export default function Home_test() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3400);
    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center text-3xl font-bold items-center text-white bg-black">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span style="color: #0083CB;font-size:40px;">Jassal</span> <span style="color: #ED1D25;font-size:40px;">Signs</span>'
              )
              .start();
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <div className="relative">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          poster="/fallback.png"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/background.mov"
        />

        {/* Navbar */}
        <div className="max-w-[95vw] mx-auto px-3 pt-4 flex justify-between items-center relative z-30">
          <button
            className="md:hidden focus:outline-ne"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoMdClose className="text-white text-[30px]" />
            ) : (
              <div>
                <div className="w-6 h-1 bg-white mb-1" />
                <div className="w-6 h-1 bg-white mb-1" />
                <div className="w-6 h-1 bg-white" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-0 left-0 h-full w-full bg-black text-white z-20 md:hidden">
            <LocationLinks />
          </div>
        )}

        {/* Main Layout */}
        <div className="max-w-[1280px] mx-auto mt-10 md:mt-2">
          <div className="flex flex-row flex-wrap">
            {/* LEFT SIDE → MAP */}
            <div className="w-full lg:w-1/3 flex flex-col justify-start pb-[10px] pr-4">
              <h4 className="mb-[10px] font-grotesk font-semibold text-md">
                Select Your Location
              </h4>
              <div>
                <TwoMaps />
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="w-full lg:w-3/5">
              <Services />
            </div>
          </div>
        </div>
        <HomepageFooter />
      </div>
    </div>
  );
}
