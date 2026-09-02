import React, { useEffect, useState } from "react";
import Head from "next/head";
import CityNavbar from "@/components/navbar/CityNavbar";
import CityFooter from "@/components/CityFooter";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsOfUse = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white text-black font-grotesk">
      <Head>
        <title>Terms of Use | Jassal Signs</title>
        <meta name="description" content="Read the Terms of Use for Jassal Signs. By accessing and using our website, you agree to comply with these terms." />
      </Head>
      <CityNavbar />

      {/* Header */}
      <div className="bg-gray-900 pt-32 pb-20">
        <div className="max-w-[85vw] mx-auto text-center" data-aos="fade-up">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4">
            Terms of <span className="text-[#ED1D26]">Use</span>
          </h1>
          <p className="text-gray-400 font-medium">
            Last Updated: February 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[85vw] md:max-w-[60vw] mx-auto py-20 font-medium text-gray-700 leading-relaxed">
        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using the Jassal Signs website, you agree to comply
            with and be bound by these Terms of Use. If you do not agree to
            these terms, please refrain from using our services and website.
          </p>
        </section>

        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            2. Use of Services
          </h2>
          <p className="mb-4">
            Our services are intended for professional and business use. You
            agree not to:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Use the website for any illegal purpose.</li>
            <li>Attempt to gain unauthorized access to our systems.</li>
            <li>
              Reproduce or redistribute any content without prior written
              consent.
            </li>
          </ul>
        </section>

        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            3. Intellectual Property
          </h2>
          <p>
            All content on this website, including logos, designs, text, and
            images, is the exclusive property of Jassal Signs. Any unauthorized
            use of our intellectual property is strictly prohibited.
          </p>
        </section>

        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            4. Limitation of Liability
          </h2>
          <p>
            Jassal Signs shall not be held liable for any direct, indirect, or
            incidental damages resulting from the use or inability to use our
            website or services.
          </p>
        </section>

        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            5. Contact Information
          </h2>
          <p>
            If you have any questions regarding these terms, please contact us
            at: <br />
            <span className="text-[#ED1D26] font-bold">jrbsigns@gmail.com</span>
          </p>
        </section>
      </div>

      <CityFooter />
    </div>
  );
};

export default TermsOfUse;
