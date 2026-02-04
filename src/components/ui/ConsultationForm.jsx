import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
    console.log("formdata", formData);
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_PRODUCT_TEMPLATE,
        formData,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setLoading(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          signage: [],
          location: [],
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:py-5 py-2 px-4 sm:px-6"
      style={{
        background: `linear-gradient(180deg, #ED1C26 0%, #0283CB 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28))`,
      }}
    >
      <h3 className="text-center my-6 text-white text-xl sm:text-2xl font-semibold">
        Request a Consultation
      </h3>

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name(*)"
          className="bg-white h-10 p-2 rounded-sm text-base"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name(*)"
          className="bg-white h-10 p-2 rounded-sm text-base"
          required
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email(*)"
          className="bg-white h-10 p-2 rounded-sm text-base"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone(*)"
          className="bg-white h-10 p-2 rounded-sm text-base"
          required
        />
      </div>

      {/* Signage Type */}
      <div className="mb-6">
        <h4 className="text-white text-lg mb-2">
          What type of signage you are looking for:
        </h4>
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-2">
          {[
            "Interior Signs",
            "Exterior Signs",
            "Vinyl Signs",
            "Business Signs",
            "Custom Signs",
          ].map((label) => (
            <label
              key={label}
              className="text-white text-base flex items-center gap-2"
            >
              <input
                type="checkbox"
                value={label}
                checked={formData.signage.includes(label)}
                onChange={handleChange}
                data-group="signage"
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Service Location */}
      <div className="mb-6">
        <h4 className="text-white text-lg mb-2">Service Location:</h4>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {["Surrey", "Edmonton", "Abbotsford", "Calgary", "Cloverdale"].map(
            (city) => (
              <label
                key={city}
                className="text-white text-base flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  value={city}
                  checked={formData.location.includes(city)}
                  onChange={handleChange}
                  data-group="location"
                />
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
          placeholder="How can we help you?"
          className="bg-white w-full rounded-sm p-2 text-base"
          rows={4}
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center items-center mb-6 font-bold">
        <button
          className={`h-10 w-full sm:w-60 text-white rounded-sm text-base transition-all duration-200 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#ED1D26] hover:bg-[#d01920]"
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
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
            "Submit Your Request"
          )}
        </button>
      </div>
    </form>
  );
};

export default ConsultationForm;
