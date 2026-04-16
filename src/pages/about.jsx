import CityFooter from "@/components/CityFooter";
import CityNavbar from "@/components/navbar/CityNavbar";
import React, { useEffect, useState } from "react";
import aboutUsBanner from "@/about-us-banner.jpeg";
import Image from "next/image";
import Link from "next/link";
import signage from "@/about-us-side.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white text-black font-grotesk">
      <CityNavbar />

      <div
        style={{
          backgroundImage: `url(${aboutUsBanner.src})`,
          height: "50vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black/70 h-full w-full flex items-center justify-center">
          <h1 className="text-[#ED1E26] text-5xl md:text-7xl font-extrabold uppercase tracking-tighter">
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-[85vw] mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <Image
              src={signage}
              alt="Our Professional Signage Work"
              className="w-full h-full rounded-[30px] shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div data-aos="fade-left">
            <h4 className="text-[#ED1E26] font-bold uppercase tracking-widest mb-4">
              ABOUT US
            </h4>
            <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Transforming Businesses Through{" "}
              <span className="text-[#ED1E26]">Professional Signage</span> &
              Printing for 30 Years
              <br />
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Jassal Signs is a premier signage and commercial printing company
              serving businesses across Alberta for over 30 years. What started
              as a small sign shop has grown into a full-service visual
              solutions provider, helping hundreds of businesses enhance their
              brand visibility and attract more customers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We specialize in creating custom business signs, channel letter,
              vehicle wraps, banners, trade show displays, and comprehensive
              commercial printing services. Our team combines creative design
              expertise with state-of-the-art printing technology to deliver
              high-quality solutions that make lasting impressions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From storefront signage for local retailers to fleet graphics for
              growing companies, we've completed over 78,000+ projects for 250+
              satisfied clients. Our commitment to quality craftsmanship,
              attention to detail, and exceptional customer service has made us
              the go-to signage company in Alberta.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you're launching a new business, rebranding, or need
              eye-catching marketing materials, Jassal Signs brings your vision
              to life with precision, creativity, and professionalism.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Section (Mission, Vision, Approach) */}
      <div className="bg-gray-900 py-20 text-white overflow-hidden">
        <div className="max-w-[85vw] mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h4 className="text-[#ED1E26] font-bold uppercase tracking-widest mb-2">
              Guiding Principles
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Mission, Vision & Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div
              className="p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-[#ED1E26]/50 transition-all duration-300 group text-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-[#ED1E26] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-tight">
                Our Mission
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Providing top-tier signage and printing solutions that empower
                businesses to communicate their brand identity with clarity and
                impact across every medium.
              </p>
            </div>

            {/* Vision */}
            <div
              className="p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-[#ED1E26]/50 transition-all duration-300 group  text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-[#ED1E26] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-tight">
                Our Vision
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To be the benchmark of excellence in the signage industry,
                recognized globally for our innovation, quality, and unwavering
                commitment to customer success.
              </p>
            </div>

            {/* Approach */}
            <div
              className="p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-[#ED1E26]/50 transition-all duration-300 group text-center"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="w-16 h-16 bg-[#ED1E26] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-tight">
                Our Approach
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We blend cutting-edge technology with time-honored craftsmanship
                to deliver bespoke solutions that not only meet but exceed the
                unique expectations of every client.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values / Why Choose Us */}
      {/* <div className="bg-gray-50 py-20">
        <div className="max-w-[85vw] mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#ED1E26] font-bold uppercase tracking-widest mb-2">
              Why Jassal Signs
            </h4>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Expert Craftsmanship",
                description:
                  "Our team consists of industry veterans who understand the nuances of materials, lighting, and installation to ensure your sign lasts for years.",
              },
              {
                title: "Innovative Design",
                description:
                  "We don't just print; we design experiences. Using the latest technology and creative trends, we make sure your brand stands out from the competition.",
              },
              {
                title: "Customer Centric",
                description:
                  "Your vision is our priority. We work closely with you from concept to completion, ensuring every detail matches your brand's unique identity.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-b-4 border-[#ED1E26]"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Mini Services Highlight */}
      <div className="py-20 max-w-[85vw] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 uppercase tracking-tight">
          Comprehensive Visual Solutions For <br />
          <span className="text-[#ED1E26]">Modern Businesses</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              name: "Outdoor Signs",
              link: "/products/outdoorsigns",
              subCategories: [
                " Storefront & Fascia Signs",
                "Monument Signs",
                "Building Signs",
                "Real Estate & Development Signs",
                "Parking & Traffic Signs",
                "A-Frame & Sidewalk Signs",
                "Banner & Flag Signs",
                "Yard & Coroplast Signs",
              ],
            },
            {
              name: "Indoor Signs",
              link: "/products/indoorsigns",
              subCategories: [
                "Lobby & Reception Signs",
                "Acrylic Signs",
                "Directional & Wayfinding Signs",
                "Door & Room Signs",
                "Window Frosting & Privacy Film",
                "Wall Murals & Graphics",
                "Floor Graphics",
                "Point of Purchase (POP) Displays",
              ],
            },
            {
              name: "Vehicle Wraps",
              link: "/products/vehiclewraps",
              subCategories: [
                "Full Vehicle Wraps",
                "Partial Wraps",
                "Fleet Graphics",
                "Truck & Trailer Graphics",
                "Vinyl Lettering & Decals",
                "Window Perforation",
                "Magnetic Signs",
              ],
            },
            {
              name: "Channel Letter",
              link: "/products/channelletters",
              subCategories: [
                "Front-Lit Channel Letters",
                "Halo-Lit (Reverse) Letters",
                "Dual-Lit Letters",
                "Open-Face Channel Letters",
                "Raceway vs. Flush Mount",
                "Non-Illuminated 3D Letters",
              ],
            },
            {
              name: "Pylon Signs",
              link: "/products/pylonsigns",
              subCategories: [
                "Single-Tenant Pylons",
                "Multi-Tenant Pylons",
                "LED Message Centers",
                "Illuminated Sign Boxes",
                "Custom Pole Signs",
              ],
            },
            {
              name: "Printing Services",
              link: "/products/printmedia",
              subCategories: [
                "Large Format Banners",
                "Marketing Materials",
                "Business Cards",
                "Trade Show Displays",
                "Posters & Blueprints",
                "Window & Wall Decals",
                "Hoarding Graphics",
              ],
            },
            {
              name: "Other Products & Specialized Signage",
              link: "/products/otherproducts",
              subCategories: [
                "Promotional Flags",
                "Custom Decals & Stickers",
                "Sandblasted & Carved Signs",
                "Safety & ADA Signage",
                "Trade Show Accessories",
                "Construction Site Signage",
                "Menu Boards",
                "Custom Fabrication",
              ],
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#ED1E26] relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[4rem] -mr-4 -mt-4 transition-colors group-hover:bg-[#ED1E26]/5 z-0" />

              <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-[#ED1E26] transition-colors">
                <Link href={service.link} className="flex items-center gap-2">
                  {service.name}
                  <svg
                    className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </h3>

              {service.subCategories ? (
                <ul className="grid grid-cols-1 gap-2 relative z-10 pl-2">
                  {service.subCategories.map((sub, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-600 text-sm font-medium"
                    >
                      <span className="w-1.5 h-1.5 bg-[#ED1E26] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      {sub}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className="py-10 bg-[#ED1D26]">
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

export default About;
