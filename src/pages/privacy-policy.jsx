import React, { useEffect, useState } from "react";
import Head from "next/head";
import CityNavbar from "@/components/navbar/CityNavbar";
import CityFooter from "@/components/CityFooter";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicy = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white text-black font-grotesk">
      <Head>
        <title>Privacy Policy | Jassal Signs</title>
        <meta name="description" content="Read the Privacy Policy of Jassal Signs to understand how we collect, use, and protect your personal information." />
      </Head>
      <CityNavbar />

      {/* Header */}
      <div className="bg-gray-900 pt-32 pb-20">
        <div className="max-w-[85vw] mx-auto text-center" data-aos="fade-up">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4">
            Privacy <span className="text-[#ED1D26]">Policy</span>
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
            1. Information Collection
          </h2>
          <p>
            We collect information you provide directly to us through forms on
            our website, such as when you request a quote or apply for a
            franchise. This may include your name, email address, phone number,
            and business details.
          </p>
        </section>

        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            2. How We Use Information
          </h2>
          <p className="mb-4">The information we collect is used to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide and improve our products and services.</li>
            <li>Respond to your inquiries and applications.</li>
            <li>
              Send professional communications regarding your interest in Jassal
              Signs.
            </li>
          </ul>
        </section>

        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            3. Information Sharing
          </h2>
          <p>
            We do not sell or lease your personal information to third parties.
            We may share information with trusted partners who assist us in
            operating our website or conducting our business, so long as those
            parties agree to keep this information confidential.
          </p>
        </section>

        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            4. Security
          </h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information when you enter, submit, or access your
            personal information.
          </p>
        </section>

        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            5. Cookies
          </h2>
          <p>
            Our website may use cookies to enhance user experience. You can
            choose to set your web browser to refuse cookies or to alert you
            when cookies are being sent.
          </p>
        </section>

        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            6. Changes to This Policy
          </h2>
          <p>
            Jassal Signs reserves the right to update this privacy policy at any
            time. We encourage users to frequently check this page for any
            changes.
          </p>
        </section>
      </div>

      <CityFooter />
    </div>
  );
};

export default PrivacyPolicy;
