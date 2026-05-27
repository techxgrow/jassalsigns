import React from "react";
import Head from "next/head";
import ExpertMediaAgency from "@/components/ExpertMediaAgency";
import CityNavbar from "@/components/navbar/CityNavbar";
import OurServices from "@/components/our-services";
import MarqueeText from "@/components/MarqueeText";
import AboutSection from "@/components/AboutSection";
import CitySlider from "@/components/CitySlider";
import CityFooter from "@/components/CityFooter";
import { TestimonialsSection } from "@/components/ui/TestimonialsSection";
import ContactUs from "@/components/ContactUs";
import BlogsSection from "@/components/BlogSection";
import CityPlacesSection from "@/components/CityCardSection";
import Testimonials from "@/components/Testimonials";
import OurClients from "@/components/OurClients";
import SignageGallery from "@/components/SignageGallery";
import { Element } from "react-scroll";
import WorkStepsSection from "@/components/WorkStepsSection";

const Home = () => {
  const cityName = "edmonton";

  const testimonialsData = [
    {
      name: "Vita Denture Cinic",
      designation: "CEO, Tech Innovations",
      comments:
        "I am so thankful to Jassal Signs and Harry. We had an event for which Jassal Signs made our banner. We forgot to pick it up before their closing, and after our frantic call after hours, Harry called and text, and eventually delivered the banner to us. The banner looked great, but the services above and beyond... Thank you",
      src: "/products/product2.jpg",
      rating: 5,
    },
    {
      name: "Meenu Dahal",
      designation: "Marketing Head, Creative Agency",
      comments:
        "I am super happy with the products and the customer services (especially Gagan, Vik and the receptionist were very professional and they know what they are doing. I would highly recommend everyone ti this shop for any kinds of banners, signs, printings, poster and etc.",
      src: "/products/product3.png",
      rating: 4,
    },
    {
      name: "Armaan Dhaliwal",
      designation: "Founder, Startup Hub",
      comments:
        "Throughout the whole buying experience from walking in with no vision to walking out with the most eye catching sign, Jassal Signs was like no other when it comes to customer service. I was treated like family, not a customer, which I was surprised about as most competitors don't give this level of care. ",
      src: "/products/product1.jpg",
      rating: 5,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What signage services does Jassal Signs provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jassal Signs provides a comprehensive range of custom signage services including outdoor signs, indoor signs, channel letters, vehicle wraps, pylon signs, and large format printing across Alberta."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Jassal Signs located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are headquartered at 3273 Parsons Rd NW, Edmonton, AB T6N 1B4, Canada, and serve businesses throughout Alberta including Calgary, Surrey, and Abbotsford."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle signage permits and installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are a full-service signage company. We handle everything from initial design and city permits to in-house manufacturing, professional installation, and ongoing maintenance."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Edmonton Signage Company | Custom Signs & Commercial Printing | Jassal Signs</title>
        <meta name="description" content="Jassal Signs is Edmonton's premier custom signage company. We design, manufacture, and install storefront signs, vehicle wraps, channel letters, and pylon signs across Calgary, Surrey, Abbotsford, and Alberta." />
        <link rel="canonical" href="https://www.jassalsignsedm.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <CityNavbar />
      <CitySlider cityName={cityName} />
      <Element name="aboutSection" id="aboutSection">
        <AboutSection />
      </Element>

      <Element name="productSection" id="productSection">
        <OurServices />
      </Element>

      <MarqueeText />
      <WorkStepsSection />
      <Testimonials testimonials={testimonialsData} autoplay="true" />
      <Element name="gallerySection" id="gallerySection">
        <SignageGallery />
      </Element>

      <ExpertMediaAgency />

      <Element
        name="blogsSection"
        id="blogsSection"
        className="border border-black "
      >
        <BlogsSection />
      </Element>

      {/* <OurClients/> */}

      <Element name="contactSection" id="contactSection">
        <ContactUs city={cityName} />
      </Element>
      {/* <CityPlacesSection />  */}
      <CityFooter />
    </>
  );
};

export default Home;
