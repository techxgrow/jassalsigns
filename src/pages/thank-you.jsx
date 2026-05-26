import React from "react";
import Head from "next/head";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import CityNavbar from "@/components/navbar/CityNavbar";
import CityFooter from "@/components/CityFooter";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Thank You | Jassal Signs</title>
        <meta
          name="description"
          content="Thank you for contacting Jassal Signs. We have received your message."
        />
      </Head>

      <CityNavbar />

      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-600 animate-bounce">
            <CheckCircle size={48} />
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase">
            Thank <span className="text-[#ED1D26]">You!</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
            Your message has been successfully sent. Our team will review your
            requirements and get back to you shortly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 bg-[#ED1D26] text-white rounded-xl font-bold uppercase tracking-wider hover:bg-[#d01920] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ED1D26]/20 active:scale-95"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <Link
              href="/gallery"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold uppercase tracking-wider hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </main>

      <CityFooter />
    </div>
  );
};

export default ThankYou;
