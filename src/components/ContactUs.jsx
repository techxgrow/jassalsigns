"use client";
import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, User, MessageSquare, Send } from "lucide-react";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const ContactUs = ({ city }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    website: city || "Abbotsford",
  });

  useEffect(() => {
    if (city) {
      setFormData((prev) => ({ ...prev, website: city }));
    }
  }, [city]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("/api/contact", formData)
      .then((res) => {
        setLoading(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          website: city || "Abbotsford",
        });
      })
      .catch((err) => {
        alert("Failed to send email. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div
      className="md:max-w-[85vw] max-w-[95vw] mx-auto px-6 md:px-0 py-10 md:py-16"
      id="contact"
    >
      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {/* Contact Details */}
        <div
          className="relative text-white p-6 md:p-8 rounded-[32px] overflow-hidden flex flex-col"
          style={{
            background: `linear-gradient(180deg, #ED1C26 0%, #0283CB 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28))`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#00000047]/50 z-0 rounded-md"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col">
            <h3 className="text-3xl font-bold mb-6 text-white">CONTACT US</h3>

            <div className="flex flex-col gap-4 text-white">
              {/* Phone */}
              <div className="flex gap-4 group items-center bg-white/10 p-4 rounded-2xl backdrop-blur-md shadow-lg border border-white/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 shadow-inner">
                  <Phone className="w-5 h-5 text-white shadow-sm" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                    Phone
                  </span>
                  <p className="text-md font-bold text-white tracking-tight leading-snug">
                    +1 916 982 9297
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 group items-center bg-white/10 p-4 rounded-2xl backdrop-blur-md shadow-lg border border-white/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 shadow-inner">
                  <Mail className="w-5 h-5 text-white shadow-sm" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                    Email
                  </span>
                  <p className="text-md font-bold text-white tracking-tight leading-snug break-all">
                    Jassalsignssac@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 group items-center bg-white/10 p-4 rounded-2xl backdrop-blur-md shadow-lg border border-white/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 shadow-inner">
                  <MapPin className="w-5 h-5 text-white shadow-sm" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                    Our HQ
                  </span>
                  <p className="text-md font-bold text-white tracking-tight leading-snug">
                    10535 E Stockton Blvd K, Elk Grove, CA 95624
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 lg:mt-auto min-h-[250px] flex-1 w-full overflow-hidden rounded-xl border border-white/20">
            <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12511.583700167499!2d-121.35911800000001!3d38.37452900000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ab8cbe821fbb9%3A0x48e3083eb8bf29f0!2s10535%20E%20Stockton%20Blvd%20K%2C%20Elk%20Grove%2C%20CA%2095624%2C%20USA!5e0!3m2!1sen!2sin!4v1768667945931!5m2!1sen!2sin"
              }
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="relative group lg:col-span-2 self-center">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#ED1D26] to-[#0283CB] rounded-[35px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

          <div className="relative bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-gray-100">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-black font-grotesk text-gray-900 uppercase tracking-tighter mb-1 text-center">
                Post Your <span className="text-[#ED1D26]">Query</span>
              </h3>
              <p className="text-gray-400 font-medium text-xs text-center">
                We'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative group/input">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-[#ED1D26] transition-colors" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name*"
                    className="w-full bg-gray-50 border border-gray-100 h-12 pl-12 pr-4 rounded-xl text-sm font-bold focus:bg-white focus:border-[#ED1D26] transition-all outline-none"
                    required
                  />
                </div>
                <div className="relative group/input">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-[#ED1D26] transition-colors" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name*"
                    className="w-full bg-gray-50 border border-gray-100 h-12 pl-12 pr-4 rounded-xl text-sm font-bold focus:bg-white focus:border-[#ED1D26] transition-all outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative group/input">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-[#ED1D26] transition-colors" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address*"
                    className="w-full bg-gray-50 border border-gray-100 h-12 pl-12 pr-4 rounded-xl text-sm font-bold focus:bg-white focus:border-[#ED1D26] transition-all outline-none"
                    required
                  />
                </div>
                <div className="relative group/input">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-[#ED1D26] transition-colors" />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number*"
                    className="w-full bg-gray-50 border border-gray-100 h-12 pl-12 pr-4 rounded-xl text-sm font-bold focus:bg-white focus:border-[#ED1D26] transition-all outline-none"
                    required
                  />
                </div>
              </div>

              <div className="relative group/input">
                <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-gray-400 group-focus-within/input:text-[#ED1D26] transition-colors" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-gray-50 border border-gray-100 p-4 pl-12 rounded-[20px] text-sm font-bold focus:bg-white focus:border-[#ED1D26] transition-all outline-none resize-none"
                  rows="3"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full h-14 rounded-xl text-base font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg ${
                  loading
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                    : "bg-[#ED1D26] text-white hover:bg-[#d01920] active:scale-95 shadow-[#ED1D26]/20"
                }`}
              >
                {loading ? (
                  <>
                    <ClipLoader size={20} color="#ffffff" />
                    Processing...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
