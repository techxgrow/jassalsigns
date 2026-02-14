import { useState, useEffect } from "react";
import Services from "@/components/Services";
import LocationLinks from "@/components/LocationLinks";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import HomepageFooter from "@/components/HomepageFooter";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

// --- Sub-components ---

// Flag Components
const CanadaFlag = () => (
  <svg
    width="28"
    height="20"
    viewBox="0 0 28 20"
    className="rounded-sm shadow-sm inline-block"
  >
    <rect width="28" height="20" fill="#FF0000" />
    <rect x="8" y="0" width="12" height="20" fill="#FFFFFF" />
    <path
      d="M14 4 L14.7 7.5 L17.5 7.5 L15.4 9.5 L16.1 13 L14 11 L11.9 13 L12.6 9.5 L10.5 7.5 L13.3 7.5 Z"
      fill="#FF0000"
    />
  </svg>
);

const USAFlag = () => (
  <svg
    width="28"
    height="20"
    viewBox="0 0 28 20"
    className="rounded-sm shadow-sm inline-block"
  >
    <rect width="28" height="20" fill="#B22234" />
    <rect y="2.2" width="28" height="2.2" fill="#FFFFFF" />
    <rect y="6.6" width="28" height="2.2" fill="#FFFFFF" />
    <rect y="11" width="28" height="2.2" fill="#FFFFFF" />
    <rect y="15.4" width="28" height="2.2" fill="#FFFFFF" />
    <rect width="11.2" height="10.8" fill="#3C3B6E" />
    {/* Simplified stars for small scale */}
    <circle cx="2" cy="2" r="0.5" fill="white" />
    <circle cx="5.6" cy="2" r="0.5" fill="white" />
    <circle cx="9.2" cy="2" r="0.5" fill="white" />
    <circle cx="3.8" cy="5.4" r="0.5" fill="white" />
    <circle cx="7.4" cy="5.4" r="0.5" fill="white" />
    <circle cx="2" cy="8.8" r="0.5" fill="white" />
    <circle cx="5.6" cy="8.8" r="0.5" fill="white" />
    <circle cx="9.2" cy="8.8" r="0.5" fill="white" />
  </svg>
);

// Refined TwoMaps (Sidebar)
const TwoMaps = () => {
  const router = useRouter();

  const handleCityClick = (cityName) => {
    router.push(`/citypage/${cityName}`);
  };

  const RegionSection = ({ title, cities, delay, Flag }) => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay, duration: 0.6 }}
      className="mb-10 last:mb-0"
    >
      <div className="flex items-center justify-end gap-3 mb-4 group cursor-default">
        <span className="h-[1px] w-8 bg-gradient-to-l from-red-600 to-transparent group-hover:w-16 transition-all duration-500 opacity-50" />
        <h3 className="text-lg font-bold font-grotesk tracking-[0.15em] text-white uppercase group-hover:text-red-500 transition-colors flex items-center gap-3">
          {title}
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            <Flag />
          </div>
        </h3>
      </div>

      <div className="flex flex-col gap-2 items-end">
        {cities.map((city) => (
          <button
            key={city.name}
            onClick={() => handleCityClick(city.link)}
            className="group/btn relative flex items-center justify-end gap-3 py-1 px-3 rounded-lg transition-all duration-300 hover:bg-white/5"
          >
            <span className="text-gray-400 font-light text-base tracking-wide group-hover/btn:text-white group-hover/btn:tracking-wider transition-all duration-300">
              {city.name}
            </span>

            {/* Hover Indicator (Dot) */}
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 scale-0 group-hover/btn:opacity-100 group-hover/btn:scale-100 transition-all duration-300 shadow-[0_0_8px_rgba(237,29,38,0.8)]" />
          </button>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col w-full py-4">
      <RegionSection
        title="British Columbia"
        delay={0.2}
        Flag={CanadaFlag}
        cities={[
          { name: "Surrey", link: "SURREY" },
          { name: "Cloverdale", link: "CLOVERDALE" },
          { name: "Abbotsford", link: "ABBOTSFORD" },
        ]}
      />
      <RegionSection
        title="Alberta"
        delay={0.3}
        Flag={CanadaFlag}
        cities={[
          { name: "Calgary", link: "CALGARY" },
          { name: "Edmonton", link: "EDMONTON" },
        ]}
      />
      <RegionSection
        title="United States"
        delay={0.4}
        Flag={USAFlag}
        cities={[{ name: "Sacramento, CA", link: "SACRAMENTO" }]}
      />
    </div>
  );
};

export default function NewHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#050505] z-50 flex items-center justify-center">
        <div className="relative z-10">
          <Typewriter
            options={{
              strings: [
                '<span style="color: #0083CB; font-size: 3rem; font-weight: 900; font-family: sans-serif;">JASSAL</span> <span style="color: #ED1D26; font-size: 3rem; font-weight: 900; font-family: sans-serif;">SIGNS</span>',
              ],
              autoStart: true,
              loop: false,
              cursor: "",
              delay: 50,
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-red-600/30">
      {/* Background with Cinematic Effects */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/fallback.png"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 scale-105"
          src="/background.mov"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

        {/* Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Navbar / Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-40 max-w-[1600px] mx-auto px-6 pt-6 flex justify-between items-center"
      >
        {/* Logo or Brand Mark */}
        <img src="/logo.png" className="h-10 opacity-90" alt="Jassal Signs" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-xl z-50 overflow-hidden md:hidden border-b border-white/10"
          >
            <div className="p-6">
              <LocationLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Layout */}
      <div className="relative z-30 max-w-[1600px] mx-auto mt-8 md:mt-16 px-4 md:px-8 pb-20">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-24" // Increased gap for better separation
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT SIDE: Location Sidebar */}
          <motion.div
            variants={fadeInUp}
            className="w-full lg:w-1/4 flex flex-col items-end pt-4"
          >
            <div className="sticky top-10 flex flex-col items-end text-right">
              <h4 className="mb-8 font-grotesk font-black text-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 leading-tight">
                SELECT <br /> <span className="text-red-600">LOCATION</span>
              </h4>

              {/* Glassmorphic Panel for Locations */}
              <div className="w-full bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 pr-8 rounded-l-3xl relative overflow-hidden shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-red-600/50 to-transparent" />
                <div className="absolute -left-10 -top-10 w-32 h-32 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

                <TwoMaps />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Services Content */}
          <motion.div
            variants={fadeInUp}
            className="w-full lg:w-3/4 pt-4 lg:pt-0" // Removed Header, added top padding adjustment if needed
          >
            {/* 
                 REMOVED 'OUR EXPERTISE' HEADER 
                 The services grid now sits cleanly on its own, 
                 allowing the sidebar to drive the navigation context.
             */}

            {/* Services Grid */}
            <div className="mt-2">
              <Services />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <HomepageFooter />
    </div>
  );
}
