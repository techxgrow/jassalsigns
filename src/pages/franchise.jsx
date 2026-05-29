import React, { useEffect, useState } from "react";
import Head from "next/head";
import CityFooter from "@/components/CityFooter";
import CityNavbar from "@/components/navbar/CityNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import FranchiseHero from "@/components/franchise/FranchiseHero";
import FranchiseBenefits from "@/components/franchise/FranchiseBenefitsSection";
import FranchiseForm from "@/components/franchise/FranchiseForm";

const FranchisePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);
  //     return null;
  //   }

  return (
    <div className="bg-white text-black font-grotesk overflow-x-hidden">
      <Head>
        <title>Sign Company Franchise Edmonton | Jassal Signs</title>
        <meta name="description" content="Open a Jassal Signs franchise in Edmonton or Alberta. Join a proven signage business with full training, support, and an established brand." />
      </Head>
      <CityNavbar />

      {/* Hero Section */}
      <FranchiseHero />

      {/* Benefits Section */}
      <FranchiseBenefits />

      {/* Split Application Form Section */}
      <FranchiseForm />

      <CityFooter />
    </div>
  );
};

export default FranchisePage;
// Forced rebuild
