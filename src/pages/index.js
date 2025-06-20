import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Services from "@/components/Services";
import LocationLinks from "@/components/LocationLinks";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import HomepageFooter from "@/components/HomepageFooter";
import Typewriter from "typewriter-effect";

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
        <div className="md:max-w-[1290px] max-w-[95vw] mx-auto px-3 pt-4 flex justify-between items-center relative z-30">
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
       
        <div className="max-w-[1290px] mx-auto sm:px-3 mt-10">
          <div className="flex flex-row flex-wrap">
            <div className="w-full sm:w-full md:w-full lg:w-1/5 hidden sm:hidden md:hidden lg:flex flex-col justify-center pr-3">
              <h4 className="font-bold underline text-[30px] service_animation mb-[50px]">
                British Columbia
              </h4>
             
              <Link
                href="/citypage/CLOVERDALE"
                className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-[28px] service_animation mb-[50px]"
              >
                CLOVERDALE
              </Link>
              <Link
                href="/citypage/ABBOTSFORD"
                className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-[28px] service_animation mb-[50px]"
              >
                ABBOTSFORD
              </Link>
               <Link
                href="/citypage/SURREY"
                className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-[28px] service_animation "
              >
                SURREY
              </Link>
            </div>

            <div className="w-full sm:w-full md:w-full lg:w-3/5">
              <Services />
            </div>

            <div className="w-full  sm:w-full md:w-full lg:w-1/5 hidden sm:hidden md:hidden lg:flex flex-col justify-center pl-10 pb-[85px]">


              <h4 className="font-bold underline text-[30px] ml-[20px] service_animation mb-[50px]">
                ALBERTA
              </h4>
                <Link
                href="/citypage/EDMONTON"
                className="font-semibold cursor-pointer ml-[20px] font-grotesk hover:text-[#ED1D26] hover:scale-125 text-[28px] service_animation mb-[50px]"
              >
                EDMONTON
              </Link>
              <Link
                href="/citypage/CALGARY"
                className="font-semibold cursor-pointer ml-[20px] font-grotesk hover:text-[#ED1D26] hover:scale-125 text-[28px] service_animation "
              >
                CALGARY
              </Link>
            


            </div>
          </div>
        </div>

        <HomepageFooter />
      </div>
    </div>
  );
}
