import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Services from "@/components/Services";
import LocationLinks from "@/components/LocationLinks";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import HomepageFooter from "@/components/HomepageFooter";
import Typewriter from 'typewriter-effect';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        <div className="md:max-w-[95vw] max-w-[90vw] mx-auto px-4 pt-4 flex justify-between items-center relative z-30">
          <Link href="/">
            <img src="/logo.png" className="w-[140px]" alt="Logo" />
          </Link>

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

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-0 left-0 h-full w-full bg-black text-white z-20 md:hidden">
            <LocationLinks />
          </div>
        )}

        {/* Main Layout */}
        <div className="md:max-w-[95vw] max-w-[98vw] mx-auto px-4 sm:px-0 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_60%_1fr] gap-10 md:gap-[4%] justify-items-center">
            
            {/* Left Column - Hidden on Mobile */}
            <div className="hidden md:flex w-full flex-col justify-center items-center gap-10">
              <h4 className="font-extrabold underline text-center text-4xl service_animation">
                British Columbia
              </h4>
              <Link href="/citypage/SURREY" className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-3xl service_animation">
                SURREY
              </Link>
              <Link href="/citypage/CLOVERDALE" className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-3xl service_animation">
                CLOVERDALE
              </Link>
              <Link href="/citypage/ABBOTSFORD" className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-3xl service_animation">
                ABBOTSFORD
              </Link>
            </div>

            {/* Middle Column */}
            <div className="w-full">
              <Services />
            </div>

            {/* Right Column - Hidden on Mobile */}
            <div className="hidden md:flex w-full flex-col justify-center items-center gap-10">
              <h4 className="font-extrabold underline text-4xl service_animation">
                ALBERTA
              </h4>
              <Link href="/citypage/CALGARY" className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-3xl service_animation">
                CALGARY
              </Link>
              <Link href="/citypage/EDMONTON" className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-3xl service_animation">
                EDMONTON
              </Link>
            </div>
          </div>
        </div>

        <HomepageFooter />
      </div>
    </div>
  );
}
