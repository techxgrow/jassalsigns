import React, { useEffect, useState } from "react";
import Head from "next/head";
import CityNavbar from "@/components/navbar/CityNavbar";
import CityFooter from "@/components/CityFooter";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Paintbrush,
  Store,
  Truck,
  Lightbulb,
  TowerControl as Tower,
  Monitor,
  CheckCircle2,
  ArrowRight,
  PencilRuler,
  ClipboardCheck,
  Hammer,
  Wrench,
  Printer,
  Plus,
  Minus,
} from "lucide-react";
import Link from "next/link";
import servicesBanner from "@/services-banner-bg.webp";
import choose from "@/choose.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
const ServicesPage = () => {
  const [mounted, setMounted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: "What areas does Jassal Signs serve in Alberta?",
      answer: "Jassal Signs is based in Edmonton and serves businesses across the Edmonton metro area — including Sherwood Park, St. Albert, Spruce Grove, Leduc, Fort Saskatchewan, Beaumont, Stony Plain, and Wetaskiwin. They also take on projects in Calgary, Red Deer, Westlock, and other major Alberta cities. If you're anywhere in Alberta and need professional signage, reach out and the team will confirm availability for your location."
    },
    {
      question: "Does Jassal Signs offer free quotes for sign projects?",
      answer: "Yes. Jassal Signs provides free, no-obligation quotes for all signage and printing projects across Edmonton and Alberta. You can call (780) 437-7790 or submit a request at jassalsignsedm.com. For larger projects, the team will typically do a site visit to assess measurements, sightlines, and installation requirements before quoting."
    },
    {
      question: "What types of businesses does Jassal Signs work with?",
      answer: "Jassal Signs works with businesses of every size and industry — retail stores, restaurants, medical and dental clinics, law firms, real estate agencies, auto dealerships, contractors, warehouses, and corporate offices across Edmonton and Alberta. Whether you're opening your first location or rebranding an established business, the process and quality standard are the same."
    },
    {
      question: "How does the sign-making process work from start to finish?",
      answer: "The process starts with a consultation — either by phone or on-site — where Jassal Signs learns about your goals, brand, and location. From there, the in-house design team creates artwork for your approval. Once the design is signed off, fabrication happens at their Edmonton shop. If permits are required, they handle those too. The final step is professional installation by their own crew — not subcontractors."
    },
    {
      question: "How long does it take to get a sign made in Edmonton?",
      answer: "Timelines depend on the type of sign. Simple vinyl graphics and printed banners can be ready in 2–5 business days. Fabricated signs like channel letters or cabinet signs typically take 2–4 weeks from design approval. Permitted outdoor signs and pylon signs can take 6–10 weeks total due to City of Edmonton permit review times. Jassal Signs gives you a clear timeline upfront so you can plan around it."
    },
    {
      question: "Why should I choose a local Edmonton sign company over an online sign supplier?",
      answer: "With a local company like Jassal Signs, you get an in-person site visit, someone who knows Edmonton's permit requirements and weather conditions, and a team that's accountable for the full project including installation. Online suppliers ship a product — Jassal Signs delivers a complete solution, designed, built, and installed by people who are still reachable after the job is done."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const FAQItem = ({ faq, isOpen, toggle }) => {
    return (
      <div className="border-b border-gray-100 last:border-0">
        <button
          onClick={toggle}
          className="w-full py-6 flex items-center justify-between text-left group transition-all"
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

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  const services = [
    {
      id: "design",
      title: "Design & Branding",
      icon: <PencilRuler className="w-8 h-8" />,
      description:
        "Our creative team brings your vision to life with professional graphic design, logo creation, and visual mockups tailored to your brand identity.",
      link: "/contact",
      color: "bg-blue-600",
    },
    {
      id: "permits",
      title: "Permits & Surveys",
      icon: <ClipboardCheck className="w-8 h-8" />,
      description:
        "We handle the complexities of city permits and conduct detailed site surveys to ensure your signage complies with all local bylaws.",
      link: "/contact",
      color: "bg-emerald-600",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      icon: <Hammer className="w-8 h-8" />,
      description:
        "Expert fabrication using premium materials. From channel letters to pylons, we build durable signage at our local facility.",
      link: "/contact",
      color: "bg-amber-600",
    },
    {
      id: "printing",
      title: "Large Format Printing",
      icon: <Printer className="w-8 h-8" />,
      description:
        "High-resolution printing for banners, window graphics, wall murals, and vehicle wraps using state-of-the-art technology.",
      link: "/products/printmedia",
      color: "bg-purple-600",
    },
    {
      id: "installation",
      title: "Professional Installation",
      icon: <Truck className="w-8 h-8" />,
      description:
        "Our safety-certified installation team ensures your signs are mounted securely and positioned for maximum visibility.",
      link: "/contact",
      color: "bg-red-600",
    },
    {
      id: "maintenance",
      title: "Maintenance & Repair",
      icon: <Wrench className="w-8 h-8" />,
      description:
        "Keep your brand shining bright. We offer LED retrofitting, cleaning, and repairs to extend the lifespan of your signage.",
      link: "/contact",
      color: "bg-slate-600",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="bg-white text-black font-grotesk overflow-x-hidden">
      <Head>
        <title>Edmonton Signage & Commercial Printing Services | Jassal Signs</title>
        <meta name="description" content="Explore Jassal Signs' full-service visual solutions in Edmonton and Alberta: storefront signage, permits, custom design, fleet wraps, professional installation, and maintenance." />
        <link rel="canonical" href="https://www.jassalsignsedm.com/services" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <CityNavbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesBanner.src})` }} // Using a placeholder or existing image if available
        >
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="relative z-10 text-center px-4" data-aos="zoom-out">
          <h4 className="text-[#ED1D26] font-bold uppercase tracking-[0.3em] mb-4">
            Expertise in Every Pixel
          </h4>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white uppercase tracking-tighter leading-none mb-6">
            Our <span className="text-[#ED1D26]">Services</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            From concept to installation, we deliver premium signage and print
            solutions that make your brand impossible to ignore.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[85vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
              <h4 className="text-[#ED1D26] font-bold uppercase tracking-widest mb-4">
                Quality Guaranteed
              </h4>
              <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 uppercase leading-none mb-8 tracking-tighter">
                Why Industry Leaders <br />
                <span className="text-[#ED1D26]">Trust Jassal Signs</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: "30+ Years Experience",
                    text: "Decades of refined craftsmanship and industry knowledge in every project.",
                  },
                  {
                    title: "Premium Materials",
                    text: "We use only the highest-grade vinyl, LEDs, and hardware to ensure longevity.",
                  },
                  {
                    title: "Full-Service Partner",
                    text: "From initial design and permitting to expert installation and maintenance.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#ED1D26]/10 transition-colors duration-300">
                      <span className="text-xl font-black text-[#ED1D26]">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-gray-900 uppercase mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="absolute -inset-4 bg-[#ED1D26]/5 rounded-[40px] transform rotate-3"></div>
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[400px] md:h-[550px]">
                <Image
                  src={choose}
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}

      <section className="py-24 bg-gray-50">
        <div className="max-w-[85vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={service.link}
                className="group relative bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-100 flex flex-col items-center text-center h-full hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl ${service.color} text-white shadow-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  {React.cloneElement(service.icon, { className: "w-10 h-10" })}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4 group-hover:text-[#ED1D26] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-medium leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[85vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div data-aos="fade-right">
              <h4 className="text-[#ED1D26] font-black uppercase tracking-[0.4em] text-xs mb-4">
                Got Questions?
              </h4>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase mb-6">
                Frequently <br />
                <span className="text-gray-300">Asked Questions</span>
              </h2>
              <p className="text-gray-500 font-bold text-lg leading-relaxed">
                Everything you need to know about Jassal Signs' premium design, permit, fabrication, and installation services.
              </p>
            </div>

            <div className="space-y-2" data-aos="fade-left">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  isOpen={openFaqIndex === index}
                  toggle={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#C91A23] via-[#653A5A] to-[#0171B6]">
        <div
          className="max-w-[85vw] mx-auto text-center px-4"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter mb-8">
            Ready To Elevate <br />
            <span className="opacity-80">Your Brand Presence?</span>
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#ED1D26] py-5 px-12 rounded-full text-xl font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
          >
            Get A Free Quote
          </Link>
        </div>
      </section>

      <CityFooter />
    </div>
  );
};

export default ServicesPage;
