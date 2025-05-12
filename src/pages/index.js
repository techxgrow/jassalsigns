import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Locations from "@/components/Locations";
import Services from "@/components/Services";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import HomepageFooter from "@/components/HomepageFooter";
import Navbar from "@/components/Navbar";
import CityFooter from "@/components/CityFooter";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        {/* Splash screen content */}
        <img src="/logo.png" alt="Loading" className="w-80   animate-bounce" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/background.mov"
      />

      {/* Top Bar */}
      <div className="w-full flex justify-between items-center pl-4 sm:pl-20 pt-4">
        <Link href="/">
          <img src="/logo.png" className="w-[140px]" alt="Logo" />
        </Link>

        <button
          className="md:hidden z-30 focus:outline-none pr-4"
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

      {/* Main Layout */}
      <div className="w-full px-4 sm:px-0">
        <div className="lg:px-20 gap-4">
          <div>
            <Services />
          </div>
        </div>

        <div>
          <Locations />
        </div>

        {/* Mobile menu */}
        {menuOpen ? (
          <div className="md:hidden w-full px-4 mt-6">
            <Navbar />
          </div>
        ) : (
          <div className="md:hidden mt-10">
            <Services />
          </div>
        )}
      </div>

      <HomepageFooter />
    
    </div>
  );
}
