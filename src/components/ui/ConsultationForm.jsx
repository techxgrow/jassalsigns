import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { User, Mail, Phone, Send, CheckCircle2 } from "lucide-react";

const ConsultationForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    signage: [],
    location: [],
    message: "",
    website: "Edmonton",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const group = e.target.dataset.group;
      setFormData((prev) => {
        const updatedGroup = checked
          ? [...prev[group], value]
          : prev[group].filter((item) => item !== value);
        return { ...prev, [group]: updatedGroup };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post("/api/product", formData)
      .then((res) => {
        // console.log(res);
        setLoading(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          signage: [],
          location: [],
          message: "",
          website: "Edmonton",
        });
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="relative group">
      {/* Decorative background element */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#ED1D26] to-[#0283CB] rounded-[35px] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-[32px] p-6 md:p-8 shadow-xl border border-gray-100"
      >
        <div className="mb-6 text-center">
          <h3 className="text-2xl md:text-3xl font-black font-grotesk text-gray-900 uppercase tracking-tighter mb-2">
            Request a <span className="text-[#ED1D26]">Consultation</span>
          </h3>
          <p className="text-gray-400 text-sm font-medium">
            Expert advice within 24 hours.
          </p>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="relative group/input">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-[#ED1D26] transition-colors" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name(*)"
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
              placeholder="Last Name(*)"
              className="w-full bg-gray-50 border border-gray-100 h-12 pl-12 pr-4 rounded-xl text-sm font-bold focus:bg-white focus:border-[#ED1D26] transition-all outline-none"
              required
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="relative group/input">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-[#ED1D26] transition-colors" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email(*)"
              className="w-full bg-gray-50 border border-gray-100 h-12 pl-12 pr-4 rounded-xl text-sm font-bold focus:bg-white focus:border-[#ED1D26] transition-all outline-none"
              required
            />
          </div>
          <div className="relative group/input">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-[#ED1D26] transition-colors" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone(*)"
              className="w-full bg-gray-50 border border-gray-100 h-12 pl-12 pr-4 rounded-xl text-sm font-bold focus:bg-white focus:border-[#ED1D26] transition-all outline-none"
              required
            />
          </div>
        </div>

        {/* Signage Type */}
        <div className="mb-6">
          <h4 className="text-gray-900 font-black uppercase text-[10px] tracking-widest mb-3 opacity-50">
            Signage Interest
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Interior", "Exterior", "Vinyl", "Business", "Custom"].map(
              (label) => (
                <label
                  key={label}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-black uppercase tracking-tight cursor-pointer transition-all duration-300 ${
                    formData.signage.includes(label)
                      ? "bg-[#ED1D26] border-[#ED1D26] text-white shadow-md shadow-[#ED1D26]/20"
                      : "bg-white border-gray-100 text-gray-500 hover:border-[#ED1D26] hover:text-[#ED1D26]"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={label}
                    checked={formData.signage.includes(label)}
                    onChange={handleChange}
                    data-group="signage"
                    className="hidden"
                  />
                  {formData.signage.includes(label) && (
                    <CheckCircle2 className="w-3 h-3" />
                  )}
                  {label}
                </label>
              ),
            )}
          </div>
        </div>

        {/* Service Location */}
        <div className="mb-6">
          <h4 className="text-gray-900 font-black uppercase text-[10px] tracking-widest mb-3 opacity-50">
            Location
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Surrey", "Edmonton", "Abbotsford", "Calgary", "Cloverdale"].map(
              (city) => (
                <label
                  key={city}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-black uppercase tracking-tight cursor-pointer transition-all duration-300 ${
                    formData.location.includes(city)
                      ? "bg-[#0283CB] border-[#0283CB] text-white shadow-md shadow-[#0283CB]/20"
                      : "bg-white border-gray-100 text-gray-500 hover:border-[#0283CB] hover:text-[#0283CB]"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={city}
                    checked={formData.location.includes(city)}
                    onChange={handleChange}
                    data-group="location"
                    className="hidden"
                  />
                  {formData.location.includes(city) && (
                    <CheckCircle2 className="w-3 h-3" />
                  )}
                  {city}
                </label>
              ),
            )}
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your project requirements..."
            className="w-full bg-gray-50 border border-gray-100 p-4 rounded-[20px] text-sm font-bold focus:bg-white focus:border-[#ED1D26] transition-all outline-none resize-none"
            rows={3}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          className={`w-full h-14 rounded-xl text-base font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg ${
            loading
              ? "bg-gray-100 text-gray-300 cursor-not-allowed"
              : "bg-[#ED1D26] text-white hover:bg-[#d01920] active:scale-95 shadow-[#ED1D26]/20"
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            <>
              Submit Request
              <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
