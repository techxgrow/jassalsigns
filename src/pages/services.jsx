import React, { useEffect, useState } from "react";
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
} from "lucide-react";
import Link from "next/link";
import servicesBanner from "@/services-banner-bg.webp";
import choose from "@/choose.png";
import Image from "next/image";
const ServicesPage = () => {
  const [mounted, setMounted] = useState(false);

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
      id: "indoor",
      title: "Indoor Signs",
      icon: <Store className="w-8 h-8" />,
      description:
        "Elegant and effective interior signage that enhances brand presence and navigation within your space.",
      details: ["Lobby Signs", "Wayfinding", "Wall Murals", "Point of Sale"],
      image: "/citypage/services/indoorsigns.jpg",
      color: "bg-blue-600",
    },
    {
      id: "outdoor",
      title: "Outdoor Signs",
      icon: <Monitor className="w-8 h-8" />,
      description:
        "High-impact exterior solutions designed to withstand the elements and capture attention from a distance.",
      details: ["Building Signs", "LED Displays", "Banners", "Post & Panel"],
      image: "/citypage/services/outdoorsigns.jpg",
      color: "bg-red-600",
    },
    {
      id: "wraps",
      title: "Vehicle Wraps",
      icon: <Truck className="w-8 h-8" />,
      description:
        "Turn your fleet into mobile billboards with our premium vinyl wraps and high-resolution graphics.",
      details: ["Full Wraps", "Partial Wraps", "Decals", "Fleet Branding"],
      image: "/citypage/services/vehiclewraps.jpg",
      color: "bg-emerald-600",
    },
    {
      id: "channel",
      title: "Channel Letters",
      icon: <Lightbulb className="w-8 h-8" />,
      description:
        "3D illuminated lettering that provides a professional, high-end look for any storefront or corporate building.",
      details: ["Front Lit", "Backlit (Halo)", "Reverse Channel", "Dual Lit"],
      image: "/citypage/services/channelletters.jpg",
      color: "bg-amber-600",
    },
    {
      id: "pylon",
      title: "Pylon Signs",
      icon: <Tower className="w-8 h-8" />,
      description:
        "Freestanding structures that provide maximum visibility from major roads and highways for multi-tenant spaces.",
      details: ["Monolith Signs", "Multi-Tenant", "Electronic Message Centers"],
      image: "/citypage/services/pylonsigns.jpg",
      color: "bg-indigo-600",
    },
    {
      id: "print",
      title: "Print Services",
      icon: <Paintbrush className="w-8 h-8" />,
      description:
        "Superior quality print materials ranging from business cards to massive large-format banners.",
      details: ["Large Format", "Business Stationery", "Posters", "Flyers"],
      image: "/citypage/services/printmedia.jpg",
      color: "bg-purple-600",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="bg-white text-black font-grotesk overflow-x-hidden">
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

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[85vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image Header */}
                <div className="h-64 overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-8 flex items-center gap-4">
                    <div
                      className={`p-3 rounded-2xl ${service.color} text-white shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-8 font-medium leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-10">
                    {service.details.map((detail, dIndex) => (
                      <div
                        key={dIndex}
                        className="flex items-center gap-3 text-sm font-bold text-gray-800 uppercase tracking-tight"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#ED1D26]" />
                        {detail}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/products/${service.id === "wraps" ? "vehiclewraps" : service.id === "channel" ? "channelletters" : service.id === "pylon" ? "pylonsigns" : service.id === "print" ? "printmedia" : service.id === "indoor" ? "indoorsigns" : "outdoorsigns"}`}
                    className="flex items-center justify-between w-full group/btn"
                  >
                    <span className="text-sm font-black uppercase tracking-widest text-gray-900 group-hover/btn:text-[#ED1D26] transition-colors">
                      Learn More
                    </span>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover/btn:bg-[#ED1D26] group-hover/btn:border-[#ED1D26] group-hover/btn:text-white transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 uppercase leading-none mb-8 tracking-tighter">
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

      {/* CTA Section */}
      <section className="py-20 bg-[#ED1D26]">
        <div
          className="max-w-[85vw] mx-auto text-center px-4"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter mb-8">
            Ready To Elevate <br />
            <span className="opacity-80">Your Brand Presence?</span>
          </h2>
          <Link
            href="/#contactSection"
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
