import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Award,
  Briefcase,
  Building2,
  Smartphone,
  Wallet,
  DollarSign,
  Loader2,
} from "lucide-react";
import EliteDropdown from "./EliteDropdown";
import ChoiceCards from "./ChoiceCards";
import toast from "react-hot-toast";

const FranchiseForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

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
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      setSubmitStatus(null);
      try {
        const response = await fetch("/api/franchise", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setSubmitStatus("success");
          resetForm();
          toast.success(
            "Application submitted! Our team will contact you soon.",
          );
        } else {
          setSubmitStatus("error");
          toast.error("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitStatus("error");
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <section id="application-form" className="py-24 bg-[#d7d7d7]">
      <div className="max-w-[85vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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

              <label className="text-sm font-bold  text-gray-500 ml-1">
                City , Province
              </label>

              <input
                name="province"
                type="text"
                disabled={isSubmitting}
                placeholder="e.g. surrey,AB"
                className={`w-full bg-gray-50 border rounded-2xl p-4 focus:bg-white outline-none transition-all font-semibold ${
                  formik.touched.province && formik.errors.province
                    ? "border-[#ED1D26]"
                    : "border-gray-200 focus:border-[#ED1D26]"
                }`}
                value={formik.values.province}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                  disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                disabled={isSubmitting}
                className="w-full bg-[#ED1D26] text-white py-5 rounded-2xl font-extrabold text-lg uppercase tracking-wider hover:bg-black transition-all shadow-xl hover:shadow-[#ED1D26]/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseForm;
