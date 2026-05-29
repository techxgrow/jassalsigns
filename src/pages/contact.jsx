import React from "react";
import CityNavbar from "@/components/navbar/CityNavbar";
import ContactUs from "@/components/ContactUs";
import CityFooter from "@/components/CityFooter";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Jassal Signs | Sign Company Edmonton</title>
        <meta
          name="description"
          content="Contact Jassal Signs in Edmonton for custom signs, vehicle wraps, and commercial printing. Call (780) 437-7790 or visit us at 3273 Parsons Rd NW."
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
