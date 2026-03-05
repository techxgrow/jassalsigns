import React from "react";
import CityNavbar from "@/components/navbar/CityNavbar";
import ContactUs from "@/components/ContactUs";
import CityFooter from "@/components/CityFooter";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Jassal Signs</title>
        <meta
          name="description"
          content="Get in touch with Jassal Signs for elite signage solutions in surrey, Calgary, and beyond."
        />
      </Head>
      <CityNavbar />
      <div className="pt-24 bg-white min-h-screen">
        <ContactUs />
      </div>
      <CityFooter />
    </>
  );
};

export default ContactPage;
