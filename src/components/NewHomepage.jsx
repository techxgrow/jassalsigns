import { useState, useEffect } from "react";
// import { Geist, Geist_Mono } from "next/font/google"; // Removed unused import
import Services from "@/components/Services";
import LocationLinks from "@/components/LocationLinks";
import { IoMdClose } from "react-icons/io";
import HomepageFooter from "@/components/HomepageFooter";
import Typewriter from "typewriter-effect";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useRouter } from "next/navigation";
import TwoMaps from "./Twomaps";

// Removed unused geistSans and geistMono variables

// ✅ Updated links (working)
const canadaUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/canada/canada.json"; // Updated to valid Canada GeoJSON
const usaUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers = [
  {
    name: "CLOVERDALE",
    coordinates: [-122.7543, 49.1052],
    link: "/citypage/CLOVERDALE",
  },
  {
    name: "ABBOTSFORD",
    coordinates: [-122.252, 49.0504],
    link: "/citypage/ABBOTSFORD",
  },
  {
    name: "SURREY",
    coordinates: [-122.849, 49.1913],
    link: "/citypage/SURREY",
  },
  {
    name: "EDMONTON",
    coordinates: [-113.4909, 53.5461],
    link: "/citypage/EDMONTON",
  },
  {
    name: "CALGARY",
    coordinates: [-114.0719, 51.0447],
    link: "/citypage/CALGARY",
  },
  {
    name: "SACRAMENTO",
    coordinates: [-121.4944, 38.5816],
    link: "/citypage/SACRAMENTO",
  },
];

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
        <div className=" max-w-[95vw] mx-auto px-3 pt-4 flex justify-between items-center relative z-30">
          <button
            className="md:hidden focus:outline-none"
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
            <div className="w-full lg:w-1/5 flex flex-col justify-start pb-[10px] pr-4">
              <h4 className="mb-[10px] font-grotesk font-semibold text-md">
                Select Your Location
              </h4>
              {/* <div className="w-full h-[500px] border rounded-lg bg-white text-black">
                <ComposableMap projection="geoMercator" width={300} height={450}>
                  <Geographies geography={canadaUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#E0E0E0"
                          stroke="#D6D6DA"
                        />
                      ))
                    }
                  </Geographies>
                  <Geographies geography={usaUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#E0E0E0"
                          stroke="#D6D6DA"
                        />
                      ))
                    }
                  </Geographies>
                  {markers.map(({ name, coordinates, link }) => (
                    <Marker
                      key={name}
                      coordinates={coordinates}
                      onClick={() => router.push(link)}
                    >
                      <circle r={6} fill="#ED1D25" stroke="#fff" strokeWidth={2} />
                      <text textAnchor="middle" y={-10} style={{ fontSize: 9 }}>
                        {name}
                      </text>
                    </Marker>
                  ))}
                </ComposableMap>
              </div> */}
              <div>
                <TwoMaps />
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="w-full lg:w-4/5">
              <Services />
            </div>
          </div>
        </div>
        <HomepageFooter />
      </div>
    </div>
  );
}
