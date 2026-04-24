import { useRouter } from "next/router";
import { data } from "../../../assets/data";
import React, { useEffect } from "react";
import ProductNavbar from "@/components/navbar/ProductNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import ConsultationForm from "@/components/ui/ConsultationForm";
import ProductsFooter from "@/components/ProductsFooter";
import { Element, Link as ScrollLink } from "react-scroll";
import CityFooter from "@/components/CityFooter";
import CityNavbar from "@/components/navbar/CityNavbar";
import {
  CheckCircle2,
  ChevronRight,
  Quote,
  ArrowDown,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";
import Link from "next/link";

const ProductPage = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const [mounted, setMounted] = React.useState(false);
  const [openFaqIndex, setOpenFaqIndex] = React.useState(null);
  const [galleryImages, setGalleryImages] = React.useState([]);

  useEffect(() => {
    setMounted(true);
    AOS.init({ duration: 1000, mirror: true, once: true, offset: 50 });
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (slug && data.productPage[slug]) {
      // Fetch dynamic gallery images for the slug
      fetch(`/api/gallery/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.length > 0) {
            setGalleryImages(data);
          }
        })
        .catch((err) => console.error("Error fetching gallery images", err));
    }
  }, [slug]);

  if (!mounted || !slug || !data.productPage[slug]) {
    return <div className="min-h-screen bg-white"></div>;
  }

  const aosAnimations = [
    "fade-up",
    "zoom-in",
    "fade-down",
    "fade-right",
    "fade-left",
  ];

  const faqs = [
    {
      question: "How long does the installation process typically take?",
      answer:
        "The installation timeline depends on the complexity and size of the sign. Simple indoor signs or vehicle wraps can be completed in a few hours, while larger outdoor structures or channel letters may take 1-2 days. We always provide a clear schedule during the consultation.",
    },
    {
      question: "Do I need a city permit for my outdoor signage?",
      answer:
        "Most outdoor signs require a municipal permit. Our team handles the entire permitting process for you, including engineering drawings and structural compliance, ensuring your sign meets all local bylaws and regulations.",
    },
    {
      question: "What kind of warranty do you provide on your signage?",
      answer:
        "We offer a comprehensive warranty on both materials and craftsmanship. Typically, our LED components and vinyl products come with a 3-5 year manufacturer warranty, and we stand by our professional installation for long-term durability.",
    },
    {
      question: "Can you help me with the design if I don't have artwork?",
      answer:
        "Absolutely! Our in-house design team specializes in signage aesthetics. We'll collaborate with you to create high-impact, professional designs that align perfectly with your brand identity and visibility goals.",
    },
  ];

  const FAQItem = ({ faq, isOpen, toggle }) => {
    return (
      <div className="border-b border-gray-100 last:border-0">
        <button
          onClick={toggle}
          className="w-full py-4 flex items-center justify-between text-left group transition-all"
        >
          <span
            className={`text-xl md:text-lg font-black uppercase tracking-tighter transition-colors duration-300 ${isOpen ? "text-[#ED1D26]" : "text-gray-900 group-hover:text-[#ED1D26]"}`}
          >
            {faq.question}
          </span>
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#ED1D26] text-white rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-red-50 group-hover:text-[#ED1D26]"}`}
          >
            {isOpen ? (
              <Minus className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-8 text-lg text-gray-600 font-medium leading-relaxed max-w-4xl">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="bg-white text-black font-grotesk overflow-x-hidden">
      <CityNavbar />

      {/* Cinematic Hero Start */}
      <section className="relative h-[60vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover scale-110 animate-pulse-slow"
          style={{
            backgroundImage: slug ? `url(/productsimages/${slug}.png)` : "none",
          }}
        >
          {/* Fallback for image loading or mobile specific */}
          <div className="absolute inset-0 bg-gray-900"></div>
          <div
            className="absolute inset-0 bg-center bg-cover opacity-60"
            style={{
              backgroundImage: slug
                ? `url(/productsimages/${slug}.png)`
                : "none",
            }}
          ></div>

          {/* Elite Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10"></div>

          {/* Texture Overlay */}
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay z-10"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-[85vw] mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Breadcrumb / Category */}
            <div
              className="flex items-center justify-center gap-3 mb-4"
              data-aos="fade-down"
            >
              <span className="w-8 h-[1px] bg-[#ED1D26]"></span>
              <span className="text-[#ED1D26] font-bold uppercase tracking-[0.4em] text-xs md:text-sm">
                Elite Signage Solutions
              </span>
              <span className="w-8 h-[1px] bg-[#ED1D26]"></span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-black text-white leading-[0.9] md:leading-[1.0] uppercase tracking-tighter mb-4 drop-shadow-2xl px-4">
              {data.productPage[slug]?.heading
                ?.split(" ")
                .slice(0, -1)
                .join(" ")}{" "}
              <br />
              <span className="text-[#ED1D26]">
                {data.productPage[slug]?.heading?.split(" ").slice(-1)}
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="text-gray-300 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Transforming spaces with precision-engineered{" "}
              {data.productPage[slug]?.heading?.toLowerCase()} tailored for
              brand excellence.
            </p>

            {/* Action Buttons */}
            <div
              className="pt-8 flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <ScrollLink
                to="gallerySection"
                smooth={true}
                className="px-10 py-5 bg-[#ED1D26] text-white font-extrabold rounded-full hover:bg-white hover:text-black transition-all shadow-2xl hover:shadow-red-500/40 uppercase tracking-widest text-xs cursor-pointer"
              >
                View Portfolio
              </ScrollLink>
              <ScrollLink
                to="consultationSection"
                smooth={true}
                className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white border border-white/20 font-extrabold rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs cursor-pointer"
              >
                Get Quote
              </ScrollLink>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-[#ED1D26] rounded-full"></div>
          </div>
        </div>
      </section>
      {/* Cinematic Hero End */}

      <div className="max-w-[85vw] mx-auto py-20 px-4 md:px-0">
        {/* Elite Intro Card */}
        <div className="relative mb-20 group  p-10 md:p-12" data-aos="fade-up">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#ED1D26]/5 to-transparent rounded-[40px] -z-10 group-hover:from-[#ED1D26]/10 transition-all duration-700"></div>
          {data.productPage[slug]?.introHeading && (
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
              {data.productPage[slug]?.introHeading}
            </h2>
          )}
          <p className="text-lg md:text-xl font-semibold text-gray-800 text-justify leading-relaxed">
            {data.productPage[slug]?.para1}
          </p>
        </div>

        {/* Consultation Section - Premium Wrap */}
        <Element
          name="consultationSection"
          className="py-12 md:py-24 scroll-mt-24"
        >
          <div className="relative bg-white rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
            <div className="absolute inset-0 overflow-hidden rounded-[40px]">
              <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#ED1D26]/5 -skew-x-12 translate-x-1/3"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 p-6 md:p-16 items-start">
              {/* Left Info Section */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-[#ED1D26] rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                    <Sparkles className="w-3.5 h-3.5 md:w-4 h-4" />
                    Premium Consultation
                  </div>
                  <h3 className="text-3xl md:text-3xl font-black text-gray-900 leading-tight uppercase tracking-tighter">
                    {data.productPage[slug]?.consultationObj?.heading}
                  </h3>
                  <p className="text-lg md:text-xl font-bold text-gray-500">
                    {data.productPage[slug]?.consultationObj?.subHeading}
                  </p>
                </div>

                <div className="space-y-6">
                  {data.productPage[slug]?.consultationObj?.bulletList.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex gap-5 group/item items-start"
                        data-aos="fade-right"
                        data-aos-delay={index * 100}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center group-hover/item:bg-[#ED1D26] transition-all duration-500 group-hover/item:shadow-lg group-hover/item:shadow-[#ED1D26]/20 mt-1">
                          <CheckCircle2
                            className="w-5 h-5 text-[#ED1D26] group-hover/item:text-white transition-colors duration-300"
                            strokeWidth={2.5}
                          />
                        </div>
                        <div className="text-base text-gray-700 leading-tight group-hover/item:text-black transition-colors">
                          {typeof item === "object" ? (
                            <>
                              <span className="block font-bold text-gray-900 mb-1">
                                {item.label}
                              </span>
                              <span>{item.value}</span>
                            </>
                          ) : (
                            item
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>

                {/* <div className="bg-gray-900 p-6 md:p-8 rounded-3xl relative overflow-hidden group">
                  <Quote className="absolute -right-4 -bottom-4 w-20 h-20 md:w-24 md:h-24 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                  <p className="text-white text-base md:text-lg font-bold leading-relaxed relative z-10">
                    "Elevate your brand with Canada's finest signage engineers.
                    We bring your vision to life with zero compromise on
                    quality."
                  </p>
                </div> */}
              </div>

              {/* Right Form Section */}
              <div className="relative w-full lg:sticky lg:top-24 self-start">
                <div className="absolute -inset-6 bg-gradient-to-r from-[#ED1D26] to-[#0283CB] blur-3xl opacity-10"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden">
                  <ConsultationForm />
                </div>
              </div>
            </div>
          </div>
        </Element>

        {/* Paragraph 2 - Floating Quote Style */}
        <div className="py-2 max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <Quote className="w-12 h-12 text-[#ED1D26]/20 mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight italic">
            "{data.productPage[slug]?.para2}"
          </p>
        </div>

        <Element name="gallerySection" className="py-24 scroll-mt-24">
          <div
            className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-16"
            data-aos="fade-up"
          >
            <div>
              <h4 className="text-[#ED1D26] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3">
                Craftsmanship Showcase
              </h4>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase">
                Portfolio <span className="text-gray-300">Gallery</span>
              </h2>
            </div>
            <div className="h-[2px] flex-grow bg-gray-100 mx-8 hidden lg:block"></div>
            <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">
              Built to Last · Inspired by You
            </p>
          </div>

          <PhotoProvider>
            {galleryImages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {galleryImages.map((img, index) => (
                  <PhotoView key={index} src={img.src}>
                    <div
                      className="overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-zoom-in rounded-[40px] group relative bg-gray-100 aspect-square"
                      data-aos={aosAnimations[index % aosAnimations.length]}
                      data-aos-delay={(index % 4) * 100}
                    >
                      <img
                        src={img.src}
                        alt={`Gallery Image ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      {/* Premium Glass Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="11" y1="8" x2="11" y2="14"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                          </svg>
                          <span className="text-white font-black uppercase tracking-tighter text-sm">
                            Expand
                          </span>
                        </div>
                      </div>
                    </div>
                  </PhotoView>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500">
                <p>No gallery images available for this product.</p>
              </div>
            )}
          </PhotoProvider>
        </Element>

        {/* {data.productPage[slug]?.subCategories && (
          <div className="py-24">
            <div className="text-center mb-16" data-aos="fade-up">
              <h4 className="text-[#ED1D26] font-black uppercase tracking-[0.4em] text-xs mb-4">
                Our Solutions
              </h4>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase">
                Explore <span className="text-gray-300">Options</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.productPage[slug].subCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-[30px] border border-gray-100 hover:shadow-xl transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ED1D26] transition-colors duration-500">
                    <ChevronRight className="w-6 h-6 text-[#ED1D26] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )} */}

        {/* Elite FAQ Section */}
        <section className="py-24 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div data-aos="fade-right">
              <h4 className="text-[#ED1D26] font-black uppercase tracking-[0.4em] text-xs mb-4">
                Got Questions?
              </h4>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase mb-6">
                Frequently <br />
                <span className="text-gray-300">Ask Questions</span>
              </h2>
              <p className="text-gray-500 font-bold text-lg leading-relaxed">
                Everything you need to know about our premium signage process
                and delivery.
              </p>
            </div>

            <div className="space-y-2" data-aos="fade-left">
              {(data.productPage[slug]?.consultationObj?.faqs || faqs).map(
                (faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    isOpen={openFaqIndex === index}
                    toggle={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                  />
                ),
              )}
            </div>
          </div>
        </section>

        {/* Remaining Paragraphs - Elite Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4">
          {[3, 4].map((num) => (
            <div key={num} className="relative group" data-aos="fade-up">
              <div className="absolute top-0 left-0 w-8 h-1 bg-[#ED1D26] transition-all duration-500 group-hover:w-full"></div>
              <p className="pt-8 text-xl text-gray-700 leading-relaxed font-medium">
                {data.productPage[slug]?.[`para${num}`]}
              </p>
            </div>
          ))}
        </div>

        {data.productPage[slug]?.para5 && (
          <div
            className="bg-gray-50 p-12 md:p-20 rounded-[60px] text-center mb-12"
            data-aos="zoom-in"
          >
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter">
              Legacy of <span className="text-[#ED1D26]">Excellence</span>
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
              {data.productPage[slug]?.para5}
            </p>
            <Link href="/contact">
              <button className="mt-8 px-8 py-4 bg-[#ED1D26] text-white rounded-full font-bold text-lg hover:bg-red-600 transition-all duration-300">
                Get a Free Quote
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* <ProductsFooter /> */}

      <CityFooter />
    </div>
  );
};

export default ProductPage;
