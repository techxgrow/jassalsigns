import React, { useEffect, useState } from "react";
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
