import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CityFooter from "@/components/CityFooter";
import CityNavbar from "@/components/navbar/CityNavbar";
import { motion } from "framer-motion";
import {
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  ShieldCheck,
  Briefcase,
  Smartphone,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  Check,
  Building2,
  Wallet,
  DollarSign,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";

const FranchisePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      province: "",
      experience: "",
      business: "",
      background: "",
      budget: "",
      funding: "",
      agree: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      province: Yup.string().required("Required"),
      experience: Yup.string().required("Required"),
      business: Yup.string().required("Required"),
      background: Yup.string().required("Required"),
      budget: Yup.string().required("Required"),
      funding: Yup.string().required("Required"),
      agree: Yup.boolean().oneOf([true], "You must accept the terms."),
    }),
    onSubmit: (values) => {
      alert("Application submitted! Our team will contact you soon.");
    },
  });

  // Custom Dropdown Component
  const EliteDropdown = ({
    label,
    name,
    options,
    value,
    onChange,
    error,
    touched,
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-2 relative">
        <label className="text-sm font-bold uppercase text-gray-500 ml-1">
          {label}
        </label>
        <div className="relative group/select">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full bg-gray-50 border rounded-2xl p-4 pr-12 text-left transition-all font-semibold flex items-center justify-between ${
              touched && error
                ? "border-[#ED1D26]"
                : "border-gray-200 focus:border-[#ED1D26] hover:border-gray-300"
            } ${value ? "text-gray-900" : "text-gray-400"}`}
          >
            <span>{value || `Select ${label}*`}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-40 overflow-hidden"
                >
                  {options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        onChange(name, opt);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all font-bold text-sm flex items-center justify-between group/opt ${
                        value === opt
                          ? "bg-[#ED1D26] text-white"
                          : "text-gray-700 hover:bg-red-50 hover:text-[#ED1D26]"
                      }`}
                    >
                      {opt}
                      {value === opt && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        {touched && error && (
          <p className="text-[#ED1D26] text-xs font-bold ml-1">{error}</p>
        )}
      </div>
    );
  };

  // Choice Cards Component
  const ChoiceCards = ({
    label,
    name,
    options,
    value,
    onChange,
    error,
    touched,
  }) => {
    return (
      <div className="space-y-2">
        <label className="text-sm font-bold uppercase text-gray-500 ml-1">
          {label}
        </label>
        <div className="grid grid-cols-2 gap-4">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(name, opt.value)}
              className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center flex flex-col items-center gap-2 group ${
                value === opt.value
                  ? "border-[#ED1D26] bg-[#ED1D26]/5"
                  : "border-gray-100 bg-gray-50 hover:border-gray-200"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  value === opt.value
                    ? "bg-[#ED1D26] text-white"
                    : "bg-white text-gray-400 group-hover:text-gray-600"
                }`}
              >
                {opt.icon}
              </div>
              <span
                className={`text-xs font-black uppercase tracking-tight ${
                  value === opt.value ? "text-[#ED1D26]" : "text-gray-500"
                }`}
              >
                {opt.label}
              </span>
            </button>
          ))}
        </div>
        {touched && error && (
          <p className="text-[#ED1D26] text-xs font-bold ml-1">{error}</p>
        )}
      </div>
    );
  };

  if (!mounted) {
    return null;
  }

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-[#ED1D26]" />,
      title: "30+ Years Legacy",
      description:
        "Join a brand with decades of proven excellence and market authority.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#ED1D26]" />,
      title: "Proven Business Model",
      description:
        "Access a turnkey system designed for high profitability and scalability.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#ED1D26]" />,
      title: "Expert Training",
      description:
        "Comprehensive support and training to ensure your success from day one.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#ED1D26]" />,
      title: "Exclusive Territory",
      description:
        "Secure your market with protected territories and dedicated growth plans.",
    },
  ];

  return (
    <div className="bg-white text-black font-grotesk overflow-x-hidden">
      <CityNavbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/extraImages/franchise.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Subtle World Map Overlay */}
          <div
            className="absolute inset-0 opacity-10 invert grayscale mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/world-map.png')",
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-[85vw] mx-auto w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto md:mx-0"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#ED1D26] hidden md:block mt-3"></span>
              <h4 className="text-[#ED1D26] font-bold uppercase tracking-[0.3em] text-sm md:text-base">
                Empowering Entrepreneurs
              </h4>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] uppercase mb-8 tracking-tighter">
              Build Your <br />
              <span className="text-[#ED1D26]">Empire</span> With Us
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0 font-medium">
              Partner with Canada's leading signage experts. Access 30+ years of
              legacy, proven systems, and world-class support to build your own
              profitable business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#application-form"
                className="px-10 py-5 bg-[#ED1D26] text-white font-extrabold rounded-full hover:bg-white hover:text-black transition-all shadow-2xl hover:shadow-red-500/40 uppercase tracking-widest text-xs"
              >
                Apply Now
              </a>
              <a
                href="#benefits"
                className="px-10 py-5 bg-white/5 backdrop-blur-xl text-white border border-white/20 font-extrabold rounded-full hover:bg-white/20 transition-all uppercase tracking-widest text-xs"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-gray-50">
        <div className="max-w-[85vw] mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h4 className="text-[#ED1D26] font-bold uppercase tracking-widest mb-2">
              The Jassal Advantage
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Why Partner With{" "}
              <span className="text-[#ED1D26]">Jassal Signs?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6 p-4 bg-red-50 rounded-2xl inline-block group-hover:bg-[#ED1D26] transition-colors duration-500">
                  {React.cloneElement(benefit.icon, {
                    className:
                      "w-8 h-8 text-[#ED1D26] group-hover:text-white transition-colors duration-500",
                  })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Application Form Section */}
      <section id="application-form" className="py-24 bg-white">
        <div className="max-w-[85vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Interested in <br />
                <span className="text-[#ED1D26]">Growing Together?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We are looking for passionate individuals who are ready to take
                the next step in their professional career. Fill out the
                application form, and our franchise development team will get in
                touch with you.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <Phone />,
                    title: "Call Us",
                    content: "+1 (604) 594-5555",
                  },
                  {
                    icon: <Mail />,
                    title: "Email Us",
                    content: "franchise@jassalsigns.com",
                  },
                  {
                    icon: <MapPin />,
                    title: "Visit Headquarters",
                    content: "Surrey, BC, Canada",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#ED1D26]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 font-semibold">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div
              className="lg:col-span-7 bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-12 border border-gray-100"
              data-aos="zoom-in"
            >
              <h3 className="text-3xl font-extrabold mb-8 text-center uppercase tracking-tight">
                Franchise Application
              </h3>

              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-gray-500 ml-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      placeholder="e.g. John Doe"
                      className={`w-full bg-gray-50 border rounded-2xl p-4 focus:bg-white outline-none transition-all font-semibold ${
                        formik.touched.name && formik.errors.name
                          ? "border-[#ED1D26]"
                          : "border-gray-200 focus:border-[#ED1D26]"
                      }`}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="text-[#ED1D26] text-xs font-bold ml-1">
                        {formik.errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-gray-500 ml-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      className={`w-full bg-gray-50 border rounded-2xl p-4 focus:bg-white outline-none transition-all font-semibold ${
                        formik.touched.email && formik.errors.email
                          ? "border-[#ED1D26]"
                          : "border-gray-200 focus:border-[#ED1D26]"
                      }`}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-[#ED1D26] text-xs font-bold ml-1">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-gray-500 ml-1">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      placeholder="+1 (___) ___-____"
                      className={`w-full bg-gray-50 border rounded-2xl p-4 focus:bg-white outline-none transition-all font-semibold ${
                        formik.touched.phone && formik.errors.phone
                          ? "border-[#ED1D26]"
                          : "border-gray-200 focus:border-[#ED1D26]"
                      }`}
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-[#ED1D26] text-xs font-bold ml-1">
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-gray-500 ml-1">
                      Target Location
                    </label>
                    <input
                      name="city"
                      placeholder="City of Interest"
                      className={`w-full bg-gray-50 border rounded-2xl p-4 focus:bg-white outline-none transition-all font-semibold ${
                        formik.touched.city && formik.errors.city
                          ? "border-[#ED1D26]"
                          : "border-gray-200 focus:border-[#ED1D26]"
                      }`}
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.city && formik.errors.city && (
                      <p className="text-[#ED1D26] text-xs font-bold ml-1">
                        {formik.errors.city}
                      </p>
                    )}
                  </div>
                </div>

                <EliteDropdown
                  label="Province / State"
                  name="province"
                  options={[
                    "British Columbia",
                    "Alberta",
                    "Ontario",
                    "California",
                  ]}
                  value={formik.values.province}
                  onChange={formik.setFieldValue}
                  error={formik.errors.province}
                  touched={formik.touched.province}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ChoiceCards
                    label="Industry Experience"
                    name="experience"
                    options={[
                      {
                        label: "Yes, Expert",
                        value: "Yes",
                        icon: <Award className="w-5 h-5" />,
                      },
                      {
                        label: "No, Beginner",
                        value: "No",
                        icon: <Briefcase className="w-5 h-5" />,
                      },
                    ]}
                    value={formik.values.experience}
                    onChange={formik.setFieldValue}
                    error={formik.errors.experience}
                    touched={formik.touched.experience}
                  />
                  <ChoiceCards
                    label="Current Ownership"
                    name="business"
                    options={[
                      {
                        label: "Yes, Owner",
                        value: "Yes",
                        icon: <Building2 className="w-5 h-5" />,
                      },
                      {
                        label: "No",
                        value: "No",
                        icon: <Smartphone className="w-5 h-5" />,
                      },
                    ]}
                    value={formik.values.business}
                    onChange={formik.setFieldValue}
                    error={formik.errors.business}
                    touched={formik.touched.business}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-gray-500 ml-1">
                    Background Details
                  </label>
                  <textarea
                    name="background"
                    placeholder="Briefly tell us about your professional background..."
                    className={`w-full bg-gray-50 border rounded-2xl p-4 focus:bg-white outline-none transition-all font-semibold min-h-[120px] ${
                      formik.touched.background && formik.errors.background
                        ? "border-[#ED1D26]"
                        : "border-gray-200 focus:border-[#ED1D26]"
                    }`}
                    value={formik.values.background}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.background && formik.errors.background && (
                    <p className="text-[#ED1D26] text-xs font-bold ml-1">
                      {formik.errors.background}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-gray-500 ml-1">
                      Investment Budget
                    </label>
                    <input
                      name="budget"
                      placeholder="Total investment range"
                      className={`w-full bg-gray-50 border rounded-2xl p-4 focus:bg-white outline-none transition-all font-semibold ${
                        formik.touched.budget && formik.errors.budget
                          ? "border-[#ED1D26]"
                          : "border-gray-200 focus:border-[#ED1D26]"
                      }`}
                      value={formik.values.budget}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.budget && formik.errors.budget && (
                      <p className="text-[#ED1D26] text-xs font-bold ml-1">
                        {formik.errors.budget}
                      </p>
                    )}
                  </div>
                  <ChoiceCards
                    label="Funding Strategy"
                    name="funding"
                    options={[
                      {
                        label: "Self-funded",
                        value: "Self-funded",
                        icon: <Wallet className="w-5 h-5" />,
                      },
                      {
                        label: "Seeking Financing",
                        value: "Seeking Financing",
                        icon: <DollarSign className="w-5 h-5" />,
                      },
                    ]}
                    value={formik.values.funding}
                    onChange={formik.setFieldValue}
                    error={formik.errors.funding}
                    touched={formik.touched.funding}
                  />
                </div>

                <div className="space-y-2">
                  <div
                    className={`flex items-start gap-4 p-4 rounded-2xl border ${
                      formik.touched.agree && formik.errors.agree
                        ? "bg-red-50 border-[#ED1D26]"
                        : "bg-red-50/50 border-red-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      className="mt-1 w-5 h-5 accent-[#ED1D26] cursor-pointer"
                      checked={formik.values.agree}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <label
                      htmlFor="agree"
                      className="text-sm font-semibold text-gray-600 cursor-pointer"
                    >
                      I agree to be contacted by the Jassal Signs franchise
                      development team regarding potential opportunities.
                    </label>
                  </div>
                  {formik.touched.agree && formik.errors.agree && (
                    <p className="text-[#ED1D26] text-xs font-bold ml-1">
                      {formik.errors.agree}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ED1D26] text-white py-5 rounded-2xl font-extrabold text-lg uppercase tracking-wider hover:bg-black transition-all shadow-xl hover:shadow-[#ED1D26]/20 active:scale-95"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CityFooter />
    </div>
  );
};

export default FranchisePage;
