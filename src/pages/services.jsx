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
  PencilRuler,
  ClipboardCheck,
  Hammer,
  Wrench,
  Printer,
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
      id: "design",
      title: "Design & Branding",
      icon: <PencilRuler className="w-8 h-8" />,
      description:
        "Our creative team brings your vision to life with professional graphic design, logo creation, and visual mockups tailored to your brand identity.",
      link: "/#contactSection",
      color: "bg-blue-600",
    },
    {
      id: "permits",
      title: "Permits & Surveys",
      icon: <ClipboardCheck className="w-8 h-8" />,
      description:
        "We handle the complexities of city permits and conduct detailed site surveys to ensure your signage complies with all local bylaws.",
      link: "/#contactSection",
      color: "bg-emerald-600",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      icon: <Hammer className="w-8 h-8" />,
      description:
        "Expert fabrication using premium materials. From channel letters to pylons, we build durable signage at our local facility.",
      link: "/#contactSection",
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
      link: "/#contactSection",
      color: "bg-red-600",
    },
    {
      id: "maintenance",
      title: "Maintenance & Repair",
      icon: <Wrench className="w-8 h-8" />,
      description:
        "Keep your brand shining bright. We offer LED retrofitting, cleaning, and repairs to extend the lifespan of your signage.",
      link: "/#contactSection",
      color: "bg-slate-600",
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
