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

import { data } from "../../../assets/data";

const CityPage = ({ slug: propSlug }) => {
  const router = useRouter();
  const slug = propSlug || router.query.slug;

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
        "Throughout the whole buying experience from walking in with no vision to walking out with the most eye catching sign, Jassal Signs was like no other when it comes to customer service. I was treated like family, not a customer, which I was surprised about as most competitors don’t give this level of care. ",
      src: "/products/product1.jpg",
      rating: 5,
    },
  ];

  const cityKey = slug ? slug.toUpperCase() : null;
  const cityData = cityKey ? data.contactPage[cityKey] : null;

  const branchSchema = cityData ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Jassal Signs - ${cityKey.charAt(0) + cityKey.slice(1).toLowerCase()}`,
    "image": "https://www.jassalsignsedm.com/logo.png",
    "url": `https://www.jassalsignsedm.com/citypage/${slug}`,
    "telephone": cityData.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": cityData.address.split(",")[0],
      "addressLocality": cityData.address.split(",")[1]?.trim() || "Newton",
      "addressRegion": cityData.address.split(",")[2]?.trim().split(" ")[0] || "BC",
      "postalCode": cityData.address.split(",")[2]?.trim().split(" ").slice(1).join(" ") || "",
      "addressCountry": "CA"
    }
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.jassalsignsedm.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": slug ? slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase() : "Alberta",
        "item": `https://www.jassalsignsedm.com/citypage/${slug}`
      }
    ]
  };

  const displayName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase() : "Alberta";

  return (
    <>
      <Head>
        <title>{`Custom Signage Solutions in ${displayName} | Jassal Signs`}</title>
        <meta name="description" content={`Jassal Signs offers premium custom signs, channel letters, and commercial printing in ${displayName}. Get a free quote today!`} />
        {branchSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(branchSchema) }}
          />
        )}
        {breadcrumbSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        )}
      </Head>
      <CityNavbar />
      <CitySlider cityName={slug} />
      <Element name="productSection">
        <AboutSection />
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
        <ContactUs city={slug} />
      </Element>
      {/* <CityPlacesSection />  */}
      <CityFooter />
    </>
  );
};

export async function getStaticPaths() {
  const cities = Object.keys(data.contactPage);
  const paths = cities.map((city) => ({ params: { slug: city } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  return {
    props: {
      slug,
    },
  };
}

export default CityPage;
