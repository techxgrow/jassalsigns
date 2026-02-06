import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { data } from "../../assets/data";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const ContactUs = ({ city }) => {
  const [loading, setLoading] = useState(false);
  // console.log("city prop", data?.contactPage[`${city}`]?.location);`

  //  if(data){
  //   console.log("data", data)
  //  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    website: "sacramento",
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
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setLoading(false);
      });
  };

  return (
    <div
      className="md:max-w-[85vw] max-w-[95vw]  mx-auto px-6 md:px-0 text-gray-800 md:py-12 py-10  "
      id="contact"
    >
      <div className="  grid md:grid-cols-3 gap-8">
        {/* Contact Details */}
        <div
          className="relative  text-white p-6"
          style={{
            background: `linear-gradient(180deg, #ED1C26 0%, #0283CB 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28))`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#00000047]/50 z-0 rounded-md"></div>

          {/* Content */}
          <div className="relative z-10 ">
            <h3 className="text-3xl font-bold mb-3  text-white">CONTACT US</h3>

            <div className="flex flex-col gap-3 text-white justify-center absolute">
              {/* Phone */}
              <p className="flex items-center gap-2">
                <FaPhone className="text-lg " />
                <span>+1 916 982 9297</span>
              </p>

              {/* Email */}
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-lg" />
                <span>Jassalsignssac@gmail.com</span>
              </p>

              {/* Address */}
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-lg mt-1" />
                <span>
                  10535 E Stockton Blvd K, Elk Grove, CA 95624, United States
                </span>
              </p>
            </div>

            <div className="h-[250px] mt-40  overflow-hidden">
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
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 text-gray-800 py-6 ">
          <h3 className="text-3xl font-bold mb-2 text-gray-800">
            POST YOUR QUERY
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium ">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter Your First Name"
                  className="w-full border p-2  mt-1 "
                  required
                />
              </div>
              <div>
                <label className="block font-medium ">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Your Last Name"
                  className="w-full border p-2  mt-1 "
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Email ID*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full border p-2  mt-1 d"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Phone Number*</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full border p-2  mt-1 "
                  required
                />
              </div>
            </div>
            <div>
              <label className="block font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your message"
                className="w-full border p-2  mt-1 "
                rows="3"
              ></textarea>
            </div>
            <div className="flex  items-center">
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#ED1D26] text-white py-2 px-8 transition cursor-pointer flex items-center justify-center gap-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <ClipLoader size={20} color="#ffffff" />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
