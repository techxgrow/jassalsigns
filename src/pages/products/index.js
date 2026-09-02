import React, { useEffect, useState } from "react";
import Head from "next/head";
import CityNavbar from "@/components/navbar/CityNavbar";
import CityFooter from "@/components/CityFooter";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

const ProductsListingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  const productItems = [
    {
      name: "Indoor Signs",
      link: "/products/indoorsigns",
      description: "Enhance your interiors with custom lobby signs, acrylic displays, wall murals, and directional signs.",
      image: "/citypage/services/indoor-new.png",
    },
    {
      name: "Outdoor Signs",
      link: "/products/outdoorsigns",
      description: "Make a powerful first impression with durable storefront signs, building signage, and exterior graphics.",
      image: "/citypage/services/outdoor.png",
    },
    {
      name: "Vehicle Wraps",
      link: "/products/vehiclewraps",
      description: "Turn your vehicle or fleet into a 24/7 mobile billboard with high-quality, professional vinyl wraps.",
      image: "/citypage/services/vehicle-new.png",
    },
    {
      name: "Channel Letters",
      link: "/products/channelletters",
      description: "Make your business name stand out day and night with energy-efficient, custom-fabricated 3D letters.",
      image: "/citypage/services/Channel.png",
    },
    {
      name: "Pylon Signs",
      link: "/products/pylonsigns",
      description: "Command attention from a distance with heavy-duty, highly visible architectural road and highway signs.",
      image: "/citypage/services/pylon-new.png",
    },
    {
      name: "Print Media",
      link: "/products/printmedia",
      description: "High-resolution commercial printing for eye-catching banners, posters, and professional trade show displays.",
      image: "/citypage/services/printmedia.jpg",
    },
    {
      name: "Other Products",
      link: "/products/otherproducts",
      description: "Specialized visual assets including promotional flags, custom decals, safety signage, and custom fabrication.",
      image: "/citypage/services/other-products-new.png",
    },
  ];


  return (
    <div className="bg-white text-black font-grotesk overflow-x-hidden">
      <Head>
        <title>Signage Products Edmonton | Custom Signs | Jassal Signs</title>
        <meta
          name="description"
          content="Explore Jassal Signs' full range of signage products in Edmonton. Indoor signs, outdoor signs, vehicle wraps, channel letters, pylon signs, and commercial printing."
        />
        <link rel="canonical" href="https://www.jassalsignsedm.com/products" />
      </Head>

      <CityNavbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/productsbg.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl" data-aos="zoom-out">
          <h4 className="text-[#ED1D26] font-bold uppercase tracking-[0.3em] mb-4">
            Visual Craftsmanship
          </h4>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white uppercase tracking-tighter leading-none mb-6">
            Our Signage <span className="text-[#ED1D26]">Products</span> & Services
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium leading-relaxed">
            From storefront signs to vehicle wraps — everything designed, built, and installed in-house in Edmonton, Alberta.
          </p>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[85vw] mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Explore Our <span className="text-[#ED1D26]">Premium Products</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">
              We leverage state-of-the-art technology and premium materials to deliver custom signage built to perform in Alberta's climates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-100 flex flex-col h-full hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image Container */}
                <div className="relative h-[240px] w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Text Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-3 group-hover:text-[#ED1D26] transition-colors flex items-center justify-between">
                    {item.name}
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#ED1D26] group-hover:translate-x-2 transition-all" />
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <span className="text-sm font-bold text-[#ED1D26] uppercase tracking-wider inline-flex items-center gap-1 group-hover:underline">
                    Learn More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#C91A23] via-[#653A5A] to-[#0171B6]">
        <div className="max-w-[85vw] mx-auto text-center px-4" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tighter mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/80 text-lg sm:text-xl font-medium mb-8">
            Request a free quote today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#ED1D26] py-4 px-10 sm:py-5 sm:px-12 rounded-full text-lg sm:text-xl font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <CityFooter />
    </div>
  );
};

export default ProductsListingPage;
