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
          content="Get in touch with Jassal Signs for elite signage solutions in Edmonton, Calgary, and beyond."
        />
      </Head>
      <CityNavbar />
      <h1 className="sr-only">Contact Jassal Signs - Edmonton Storefront Signage & Printing</h1>
      <div className="pt-24 bg-white min-h-screen">
        <ContactUs />
      </div>
      <CityFooter />
    </>
  );
};

export default ContactPage;
