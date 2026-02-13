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
};

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

      {/* Alberta Section */}
      <div className="location-section">
        <div className="flex items-center gap-2 mb-3">
          <IconMapPin className="text-red-600" size={18} />
          <h3 className="text-red-600 font-bold text-base tracking-wide uppercase">
            {locations.alberta.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-3 ml-0">
          {locations.alberta.cities.map((city) => (
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
