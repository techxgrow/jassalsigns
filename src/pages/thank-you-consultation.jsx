import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Calendar, ArrowLeft, MessageCircle } from "lucide-react";
import CityNavbar from "@/components/navbar/CityNavbar";
import CityFooter from "@/components/CityFooter";

const ThankYouConsultation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Consultation Requested | Jassal Signs</title>
        <meta name="description" content="Thank you for requesting a consultation with Jassal Signs." />
      </Head>

      <CityNavbar />

      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 text-[#0283CB] animate-pulse">
            <Calendar size={48} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase">
            Consultation <span className="text-[#0283CB]">Requested!</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
            Thank you for your interest. We've received your consultation request and one of our experts will contact you within 24 hours to discuss your project.
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
              href="https://wa.me/17804377790" 
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold uppercase tracking-wider hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 active:scale-95"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </main>

      <CityFooter />
    </div>
  );
};

export default ThankYouConsultation;
