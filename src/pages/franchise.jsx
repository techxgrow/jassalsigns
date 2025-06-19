import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CityFooter from "@/components/CityFooter";
import CityNavbar from "@/components/navbar/CityNavbar";

const FranchisePage = () => {
  const slug = "franchise"; 

  const data = {
    productPage: {
      franchise: {
        heading: "Franchise With Us",
      },
    },
  };

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
      budget: Yup.string().required("Required"),
      funding: Yup.string().required("Required"),
      agree: Yup.boolean().oneOf([true], "You must accept the terms."),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      alert("Franchise form submitted successfully!");
    },
  });

  return (
    <div className="bg-white text-black">
       <CityNavbar />
      {/* Header Start */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom-slow"
          style={{
            backgroundImage: slug
              ? `url(/extraImages/franchise.jpg)`
              : "none",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 flex flex-col gap-4 justify-center items-center text-center h-full px-4">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl font-grotesk text-white">
            {data.productPage[slug]?.heading}
          </h2>
          <h4 className="text-gray-200 text-sm sm:text-base font-semibold font-grotesk">
            {`Home > ${data.productPage[slug]?.heading}`}
          </h4>
        </div>
      </div>
      {/* Header End */}

      {/* Franchise Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6 text-center font-grotesk">
          Franchise Application Form
        </h3>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              placeholder="Full Name*"
              className="border border-gray-300 p-3 w-full"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address*"
              className="border border-gray-300 p-3 w-full"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <input
              name="phone"
              placeholder="Phone Number*"
              className="border border-gray-300 p-3 w-full"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            <input
              name="city"
              placeholder="City / Location of Interest*"
              className="border border-gray-300 p-3 w-full"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
          </div>

          <select
            name="province"
            className="border border-gray-300 p-3 w-full"
            value={formik.values.province}
            onChange={formik.handleChange}
          >
            <option value="">Select Province*</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Alberta">Alberta</option>
          </select>

          {/* Business Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="experience"
              className="border border-gray-300 p-3 w-full"
              value={formik.values.experience}
              onChange={formik.handleChange}
            >
              <option value="">Experience in signage industry?*</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <select
              name="business"
              className="border border-gray-300 p-3 w-full"
              value={formik.values.business}
              onChange={formik.handleChange}
            >
              <option value="">Do you own a business?*</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <textarea
            name="background"
            placeholder="Brief description of your background"
            className="border border-gray-300 p-3 w-full"
            rows="4"
            value={formik.values.background}
            onChange={formik.handleChange}
          />

          {/* Financial */}
          <input
            name="budget"
            placeholder="Approximate Investment Budget*"
            className="border border-gray-300 p-3 w-full"
            value={formik.values.budget}
            onChange={formik.handleChange}
          />
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="funding"
                value="Self-funded"
                checked={formik.values.funding === "Self-funded"}
                onChange={formik.handleChange}
              />{" "}
              Self-funded
            </label>
            <label>
              <input
                type="radio"
                name="funding"
                value="Seeking Financing"
                checked={formik.values.funding === "Seeking Financing"}
                onChange={formik.handleChange}
              />{" "}
              Seeking Financing
            </label>
          </div>

          {/* Agreement */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="agree"
              checked={formik.values.agree}
              onChange={formik.handleChange}
            />
            <label htmlFor="agree" className="text-sm">
              I agree to be contacted by Jassal Signs regarding franchise opportunities.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#ED1D26] text-white px-6 py-3 font-semibold font-grotesk hover:bg-red-600 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
      <CityFooter />
    </div>
  );
};

export default FranchisePage;
