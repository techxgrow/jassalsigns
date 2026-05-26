import AboutSection from "@/components/AboutSection";
import Head from "next/head";
import BlogsSection from "@/components/BlogSection";
import CityFooter from "@/components/CityFooter";
import CitySlider from "@/components/CitySlider";
import ContactUs from "@/components/ContactUs";
import ExpertMediaAgency from "@/components/ExpertMediaAgency";
import MarqueeText from "@/components/MarqueeText";
import CityNavbar from "@/components/navbar/CityNavbar";
import OurServices from "@/components/our-services";
import OurClients from "@/components/OurClients";
import SignageGallery from "@/components/SignageGallery";
import Testimonials from "@/components/Testimonials";
import { useRouter } from "next/router";
import { Element } from "react-scroll";
import { cityData } from "@/lib/cityData";

const CityPage = ({ cityInfo }) => {
  const router = useRouter();

  // If page is loading during dynamic routing
  if (router.isFallback) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  }

  // Fallback to safety default if cityInfo isn't supplied
  const info = cityInfo || {
    name: "Alberta",
    province: "AB",
    title: "Custom Signage Solutions | Jassal Signs",
    description: "Jassal Signs offers premium custom signs, channel letters, and commercial printing across Alberta. Get a free quote today!",
    phone: "+1 (780) 437-7790",
    address: "Alberta, Canada",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.166164957417!2d-113.48815462322574!3d53.465490372324076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f283232a145%3A0x2e958a5b5c76c8f4!2s3273%20Parsons%20Rd%20NW%2C%20Edmonton%2C%20AB%20T6N%201B4%2C%20Canada!5e0!3m2!1sen!2sin!4v1775803378612!5m2!1sen!2sin",
    localContext: "Jassal Signs offers custom signage, pylon signs, and vehicle wraps for businesses across Alberta, backed by over 30 years of visual craftsmanship."
  };

  const testimonialsData = [
    {
      name: "Vita Denture Clinic",
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
        "I am super happy with the products and the customer services (especially Gagan, Vik and the receptionist were very professional and they know what they are doing. I would highly recommend everyone to this shop for any kinds of banners, signs, printings, poster and etc.",
      src: "/products/product3.png",
      rating: 4,
    },
    {
      name: "Armaan Dhaliwal",
      designation: "Founder, Startup Hub",
      comments:
        "Throughout the whole buying experience from walking in with no vision to walking out with the most eye catching sign, Jassal Signs was like no other when it comes to customer service. I was treated like family, not a customer, which I was surprised about as most competitors don’t give this level of care. ",
      src: "/products/product1.jpg",
      rating: 5,
    },
  ];

  // Dynamic Local Business AreaServed Schema for Search Engines & LLMs
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Jassal Signs - Edmonton Signage Company Serving ${info.name}`,
    "image": "https://www.jassalsignsedm.com/logo.png",
    "url": `https://www.jassalsignsedm.com/citypage/${(info.slug || "").toUpperCase()}`,
    "telephone": "+1-780-437-7790",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": info.name,
      "addressRegion": info.province,
      "addressCountry": "CA"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": info.name
    },
    "parentOrganization": {
      "@type": "LocalBusiness",
      "name": "Jassal Signs (Headquarters)",
      "url": "https://www.jassalsignsedm.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3273 Parsons Rd NW",
        "addressLocality": "Edmonton",
        "addressRegion": "AB",
        "postalCode": "T6N 1B4",
        "addressCountry": "CA"
      }
    }
  };

  return (
    <>
      <Head>
        <title>{info.title}</title>
        <meta name="description" content={info.description} />
        <link rel="canonical" href={`https://www.jassalsignsedm.com/citypage/${(info.slug || "").toLowerCase()}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />
      </Head>
      <CityNavbar />
      <CitySlider cityName={info.name} />
      <Element name="productSection">
        <AboutSection cityName={info.name} localContext={info.localContext} />
      </Element>

      <OurServices />

      <MarqueeText />
      <Testimonials testimonials={testimonialsData} autoplay="true" />
      <Element name="gallerySection">
        <SignageGallery />
      </Element>

      <ExpertMediaAgency />

      <Element name="blogsSection" className="border border-black ">
        <BlogsSection />
      </Element>

      <OurClients />

      <Element name="contactSection">
        <ContactUs 
          city={info.name} 
          address={info.address} 
          phone={info.phone} 
          mapEmbed={info.mapEmbed} 
        />
      </Element>
      {/* <CityPlacesSection />  */}
      <CityFooter />
    </>
  );
};

export async function getServerSideProps(context) {
  const slug = (context.params.slug || "").toUpperCase();
  const data = cityData[slug] || null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cityInfo: data,
    },
  };
}

export default CityPage;
