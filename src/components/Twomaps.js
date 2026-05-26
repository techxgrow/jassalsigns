"use client";
import { useRouter } from "next/navigation";
import { IconMapPin } from "@tabler/icons-react";
// Location data organized by region
const locations = {
  britishColumbia: {
    title: "BRITISH COLUMBIA",
    cities: ["Surrey", "Cloverdale", "Abbotsford"],
  },
  alberta: {
    title: "ALBERTA",
    cities: ["Calgary", "Edmonton"],
  },
  unitedStates: {
    title: "UNITED STATES",
    cities: ["Sacramento, CA"],
  },
  {
    name: "EDMONTON",
    coordinates: [-113.4909, 53.5461],
    link: "/citypage/EDMONTON",
    offset: { x: 0, y: -12 },
  },
  {
    name: "CALGARY",
    coordinates: [-114.0719, 51.0447],
    link: "/citypage/CALGARY",
    offset: { x: 0, y: -12 },
  },
];

const usaMarkers = [
  {
    name: "SACRAMENTO",
    coordinates: [-121.4944, 38.5816],
    link: "https://www.jassalsignssac.com/",
    offset: { x: 0, y: -10 },
  },
];

export default function TwoMaps() {
  const router = useRouter();

  const handleCityClick = (city) => {
    const cityName = city.split(",")[0].trim().toUpperCase();
    router.push(`/citypage/${cityName}`);
  };

  return (
    <div className="flex flex-col gap-6 py-8 px-6 max-w-sm">
      {/* British Columbia Section */}
      <div className="location-section">
        <div className="flex items-center gap-2 mb-3">
          <IconMapPin className="text-red-600" size={18} />
          <h3 className="text-red-600 font-bold text-base tracking-wide uppercase">
            {locations.britishColumbia.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-3 ml-0">
          {locations.britishColumbia.cities.map((city) => (
            <button
              key={city}
              onClick={() => handleCityClick(city)}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* USA Map */}
      <div className="w-[350px] h-[250px] border rounded-lg  shadow-md">
        <h3 className="text-center font-bold text-white py-2">USA</h3>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [-95, 55],
            scale: 200,
          }}
          width={350}
          height={200}
        >
          <Geographies geography={worldUrl}>
            {({ geographies }) =>
              geographies
                .filter((geo) => geo.id === "840")
                .map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#E0E0E0"
                    stroke="#D6D6DA"
                  />
                ))
            }
          </Geographies>
          {usaMarkers.map(({ name, coordinates, link, offset }) => (
            <Marker
              key={name}
              coordinates={coordinates}
              onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* United States Section */}
      <div className="location-section">
        <div className="flex items-center gap-2 mb-3">
          <IconMapPin className="text-red-600" size={18} />
          <h3 className="text-red-600 font-bold text-base tracking-wide uppercase">
            {locations.unitedStates.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-3 ml-0">
          {locations.unitedStates.cities.map((city) => (
            <button
              key={city}
              onClick={() => handleCityClick(city)}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
