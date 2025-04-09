import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import LeftNavbar from "@/components/LeftNavbar";
import RightNavbar from "@/components/RightNavbar";
import Services from "@/components/Services";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import HomepageFooter from "@/components/HomepageFooter";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <img src="/logo.webp" className="w-[140px]" alt="Logo" />
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
      <div className="min-h-screen w-full px-4 sm:px-0">
        {/* Desktop layout */}
        <div className="hidden md:grid w-full h-full lg:px-20 gap-4 md:grid-cols-[240px_auto_240px] items-center min-h-screen">
          <div>
            <LeftNavbar />
          </div>
          <div>
            <Services />
          </div>
          <div>
            <RightNavbar />
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden w-full px-4 mt-6">
            <Navbar />
          </div>
        )}

        {!menuOpen && (
          <div className="md:hidden mt-10">
            <Services />
          </div>
        )}
      </div>

      <HomepageFooter/>
    </div>
  );
}
