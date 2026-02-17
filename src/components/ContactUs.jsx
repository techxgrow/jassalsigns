import React, { useState } from "react";
import { Phone, Mail, MapPin, User, MessageSquare, Send } from "lucide-react";
import { data } from "../../assets/data";
import emailjs from "@emailjs/browser";
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
    website: "Edmonton",
  });

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
          website: "Edmonton",
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
        {/* Contact Details & Info Card */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-black font-grotesk text-gray-900 uppercase tracking-tighter">
              Get in <span className="text-[#ED1D26]">Touch</span>
            </h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Expert advice to elevate your brand.
            </p>
          </div>

          <div className="space-y-4">
            {/* Phone */}
            <div className="flex gap-4 group items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#ED1D26]/5 flex items-center justify-center group-hover:bg-[#ED1D26] transition-all duration-300">
                <Phone className="w-4 h-4 text-[#ED1D26] group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                  Call Us
                </span>
                <p className="text-base font-bold text-gray-900 tracking-tight">
                  +1 (780) 437-7790
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 group items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0283CB]/5 flex items-center justify-center group-hover:bg-[#0283CB] transition-all duration-300">
                <Mail className="w-4 h-4 text-[#0283CB] group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                  Email Us
                </span>
                <p className="text-base font-bold text-gray-900 tracking-tight">
                  jassalsignsedm@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 group items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-gray-900 transition-all duration-300">
                <MapPin className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                  Our HQ
                </span>
                <p className="text-base font-bold text-gray-900 tracking-tight leading-snug">
                  3273 Parsons Rd NW, Edmonton, AB T6N 1B4
                </p>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="rounded-[24px] overflow-hidden shadow-xl border border-gray-100 h-[220px] relative group/map">
            <div className="absolute inset-0 bg-black/5 group-hover/map:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.166164957417!2d-113.48815462322574!3d53.465490372324076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f283232a145%3A0x2e958a5b5c76c8f4!2s3273%20Parsons%20Rd%20NW%2C%20Edmonton%2C%20AB%20T6N%201B4%2C%20Canada!5e0!3m2!1sen!2sin!4v1768589544003!5m2!1sen!2sin"
              title="Edmonton HQ Map"
              className="w-full h-full grayscale group-hover/map:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
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
