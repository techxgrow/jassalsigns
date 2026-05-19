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

const CityPage = () => {
  const router = useRouter();

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

  return (
    <>
      <Head>
        <title>{`Custom Signage Solutions in ${router.query.slug || "Alberta"} | Jassal Signs`}</title>
        <meta name="description" content={`Jassal Signs offers premium custom signs, channel letters, and commercial printing in ${router.query.slug || "Alberta"}. Get a free quote today!`} />
      </Head>
      <CityNavbar />
      <CitySlider cityName={router.query.slug} />
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
        <ContactUs city={router.query.slug} />
      </Element>
      {/* <CityPlacesSection />  */}
      <CityFooter />
    </>
  );
};

export default CityPage;
