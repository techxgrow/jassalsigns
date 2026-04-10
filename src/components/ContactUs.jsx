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
    website: city || "Edmonton",
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
          website: city || "Edmonton",
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
      <div className="grid lg:grid-cols-[1fr_2.2fr] gap-8 md:gap-12 items-start">
        {/* NEW Contact Details & Info Card from Image */}
        <div className="w-full max-w-[420px] mx-auto rounded-[40px] shadow-2xl bg-gradient-to-b from-[#C91A23] via-[#653A5A] to-[#0171B6] flex flex-col pt-10 pb-6 px-5">
          <h2 className="text-[32px] font-bold text-white mb-8 tracking-wide px-2 uppercase">
            Contact Us
          </h2>

          <div className="flex flex-col gap-4 mb-6">
            {/* Card 1 */}
            <div className="bg-white/10 rounded-3xl p-4 flex items-center gap-5 backdrop-blur-sm shadow-sm border border-white/5">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex justify-center items-center shrink-0">
                <Phone className="text-white w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-white/80 text-[11px] font-bold tracking-widest uppercase mb-1">Phone</span>
                <span className="text-white font-semibold text-lg">+1 (780) 437-7790</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 rounded-3xl p-4 flex items-center gap-5 backdrop-blur-sm shadow-sm border border-white/5">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex justify-center items-center shrink-0">
                <Mail className="text-white w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-white/80 text-[11px] font-bold tracking-widest uppercase mb-1">Email</span>
                <span className="text-white font-semibold text-[15px] sm:text-base truncate">jrbsigns@gmail.com</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 rounded-3xl p-4 flex items-center gap-5 backdrop-blur-sm shadow-sm border border-white/5">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex justify-center items-center shrink-0">
                <MapPin className="text-white w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-white/80 text-[11px] font-bold tracking-widest uppercase mb-1">Our HQ</span>
                <span className="text-white font-semibold text-[15px] sm:text-base leading-tight">
                  3273 Parsons Rd NW, Edmonton, AB T6N 1B4,<br />Canada
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[280px] relative px-1">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.166164957417!2d-113.48815462322574!3d53.465490372324076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f283232a145%3A0x2e958a5b5c76c8f4!2s3273%20Parsons%20Rd%20NW%2C%20Edmonton%2C%20AB%20T6N%201B4%2C%20Canada!5e0!3m2!1sen!2sin!4v1775803378612!5m2!1sen!2sin" className="w-full h-full rounded-[24px] border-0 shadow-inner bg-white" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="relative group">
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

            <form onSubmit={handleSubmit} className="space-y-4">
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
