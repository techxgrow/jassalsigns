"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useRouter } from "next/navigation";

const worldUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Markers with custom label offsets
const canadaMarkers = [
  {
    name: "CLOVERDALE",
    coordinates: [-122.7543, 49.1052],
    link: "/citypage/CLOVERDALE",
    offset: { x: -20, y: -10 },
  },
  {
    name: "ABBOTSFORD",
    coordinates: [-122.252, 49.0504],
    link: "/citypage/ABBOTSFORD",
    offset: { x: 25, y: 0 },
  },
  {
    name: "SURREY",
    coordinates: [-122.849, 49.1913],
    link: "/citypage/SURREY",
    offset: { x: 0, y: -15 },
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
    link: "/citypage/SACRAMENTO",
    offset: { x: 0, y: -10 },
  },
];

export default function TwoMaps() {
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {/* Canada Map */}
      <div className="w-[350px] h-[250px] border rounded-lg bg-white shadow-md">
        <h3 className="text-center font-bold text-black py-2">Canada</h3>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [-95, 55],
            scale: 300,
          }}
          width={350}
          height={200}
        >
          <Geographies geography={worldUrl}>
            {({ geographies }) =>
              geographies
                .filter((geo) => geo.id === "124")
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
          {canadaMarkers.map(({ name, coordinates, link, offset }) => (
            <Marker
              key={name}
              coordinates={coordinates}
              onClick={() => router.push(link)}
            >
              <circle r={6} fill="#ED1D25" stroke="#fff" strokeWidth={2} />
              <text
                x={offset.x}
                y={offset.y}
                style={{ fontSize: 9, fill: "black", fontWeight: "bold" }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* USA Map */}
      <div className="w-[350px] h-[250px] border rounded-lg bg-white shadow-md">
        <h3 className="text-center font-bold text-black py-2">USA</h3>
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
              onClick={() => router.push(link)}
            >
              <circle r={6} fill="#ED1D25" stroke="#fff" strokeWidth={2} />
              <text
                x={offset.x}
                y={offset.y}
                style={{ fontSize: 9, fill: "black", fontWeight: "bold" }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
}
