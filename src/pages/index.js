import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Services from "@/components/Services";
import LocationLinks from "@/components/LocationLinks";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import HomepageFooter from "@/components/HomepageFooter";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Disable scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <h4 className="text-5xl mask-radial-from-stone-500 font-bold typing-container italic ">
          <span className="text-[#0182CA]">JASSAL</span>{" "}
          <span className="text-[#EC1D26]">SIGNS</span>
        </h4>
      </div>
    );
  }

  return (
    <div className="relative w-full text-white overflow-hidden">
      <div className="md:h-screen relative">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          poster="/fallback.png" // fallback image path
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/background.mov"
        />

        {/* Top Bar */}
        <div className="max-w-[1360px] flex justify-between items-center pl-4 sm:pl-20 pt-4">
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

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-0 left-0 h-full w-full  bg-black text-white  z-20  md:hidden">
            <LocationLinks />
          </div>
        )}

        {/* Main Layout */}
        <div className="w-full md:h-[800px] px-4 sm:px-0">
          <div className="max-w-[1360px] justify-items-center mx-auto grid gap-[4%] grid-cols-[1fr_60%_1fr]">
            <div className="hidden md:flex w-full flex-col gap-6 justify-center items-center md:items-start">
              <Link
                href="/citypage/SURREY"
                className="font-bold cursor-pointer hover:text-[#ED1D26] hover:scale-125 text-3xl service_animation"
              >
                SURREY
              </Link>
              <Link
                href="/citypage/CLOVERDALE"
                className="font-bold cursor-pointer hover:text-[#ED1D26] hover:scale-125 text-3xl service_animation"
              >
                CLOVERDALE
              </Link>
              <Link
                href="/citypage/ABBOTSFORD"
                className="font-bold cursor-pointer hover:text-[#ED1D26] hover:scale-125 text-3xl service_animation"
              >
                ABBOTSFORD
              </Link>
            </div>
            <div>
              <Services />
            </div>
            <div className="w-full flex flex-col gap-10 justify-center pl-6">
              <Link
                href="/citypage/EDMONTON"
                className="font-bold cursor-pointer hover:text-[#ED1D26] hover:scale-125 text-3xl service_animation"
              >
                EDMONTON
              </Link>
              <Link
                href="/citypage/CALGARY"
                className="font-bold cursor-pointer hover:text-[#ED1D26] hover:scale-125 text-3xl service_animation"
              >
                CALGARY
              </Link>
            </div>
          </div>
        </div>
      </div>

      <HomepageFooter />
    </div>
  );
}
