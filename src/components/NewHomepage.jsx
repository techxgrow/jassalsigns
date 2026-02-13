import { useState, useEffect } from "react";
import Services from "@/components/Services";
import LocationLinks from "@/components/LocationLinks";
import { IoMdClose } from "react-icons/io";
import HomepageFooter from "@/components/HomepageFooter";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaGlobeAmericas } from "react-icons/fa";

// --- Sub-components ---

const BrandHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "circOut" }}
    className="text-center mb-12 relative z-20 shrink-0"
  >
    <div className="inline-block relative">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-grotesk tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl">
        JASSAL SIGNS
      </h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="h-1 md:h-2 bg-[#ED1D26] absolute bottom-0 left-0"
      />
    </div>
    <p className="mt-4 text-gray-300 text-lg md:text-xl tracking-widest font-light uppercase">
      Elevate Your Brand Identity
    </p>
  </motion.div>
);

const LocationButton = ({ name, link }) => {
  const router = useRouter();
  return (
    <motion.button
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      whileTap={{ scale: 0.98 }}
      onClick={() => router.push(link)}
      className="w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 group bg-black/40 border-white/5 hover:border-white/20"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-full bg-white/5 text-gray-400 group-hover:text-white transition-colors">
          <FaMapMarkerAlt size={16} />
        </div>
        <span className="text-lg font-medium tracking-wide text-gray-300 group-hover:text-white">
          {name}
        </span>
      </div>
    </motion.button>
  );
};

const LocationHub = () => {
  const locations = [
    {
      region: "British Columbia",
      cities: [
        { name: "Surrey", link: "/citypage/SURREY" },
        { name: "Cloverdale", link: "/citypage/CLOVERDALE" },
        { name: "Abbotsford", link: "/citypage/ABBOTSFORD" },
      ],
    },
    {
      region: "Alberta",
      cities: [
        { name: "Calgary", link: "/citypage/CALGARY" },
        { name: "Edmonton", link: "/citypage/EDMONTON" },
      ],
    },
    {
      region: "USA",
      cities: [{ name: "Sacramento", link: "/citypage/SACRAMENTO" }],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 text-[#0083CB] mb-2">
        <FaGlobeAmericas size={20} />
        <h3 className="font-bold tracking-widest uppercase text-sm">
          Select Region
        </h3>
      </div>

      <div className="space-y-8">
        {locations.map((group) => (
          <div key={group.region}>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 pl-1">
              {group.region}
            </h4>
            <div className="space-y-3">
              {group.cities.map((city) => (
                <LocationButton
                  key={city.name}
                  name={city.name}
                  link={city.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Page Component ---

export default function NewHomepage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center">
          <Typewriter
            options={{
              strings: [
                '<span style="color:#0083CB">Jassal.</span>',
                '<span style="color:#fff">Signs.</span>',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              wrapperClassName:
                "text-4xl md:text-6xl font-black font-grotesk tracking-tighter",
              cursorClassName: "text-[#ED1D26]",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ED1D26] selection:text-white">
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105"
          src="/background.mov"
        />
        {/* Grain Overlay */}
        <div
          className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/90" />
      </div>

      {/* Main Scrollable Container */}
      <div className="relative z-30 w-full min-h-screen flex flex-col pt-8 md:pt-12">
        {/* Header Bar */}
        <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 mb-8 flex justify-between items-start">
          <img src="/logo.png" className="h-8 md:h-10 opacity-90" alt="Logo" />
        </div>

        {/* Brand Title */}
        <BrandHeader />

        {/* Content Section */}
        <div className="flex-1 max-w-[1600px] mx-auto w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-20">
          {/* LEFT: Location Hub (Sticky on large screens) */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-3">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-black/30 backdrop-blur-md border border-white/5 rounded-3xl p-6 sticky top-8"
            >
              <LocationHub />
            </motion.div>
          </div>

          {/* CENTER: Services Showcase */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 lg:col-span-9 xl:col-span-9"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0083CB] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none" />

              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-grotesk flex items-center gap-4">
                  <span className="w-2 h-8 bg-[#ED1D26] rounded-full inline-block" />
                  Our Expertise
                </h2>
              </div>

              {/* Services Component */}
              <div className="min-h-[600px]">
                <Services />
              </div>
            </div>

            {/* Mobile Only Location Hub (appears below services on mobile) */}
            <div className="lg:hidden mt-8 bg-black/30 backdrop-blur-md border border-white/5 rounded-3xl p-6">
              <LocationHub />
            </div>
          </motion.div>
        </div>

        {/* Integrated Footer */}
        <HomepageFooter />
      </div>
    </div>
  );
}
