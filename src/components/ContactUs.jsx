import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-[1280px] mx-auto text-gray-800 md:py-12 py-8  " id="contact">
      <div className="  grid md:grid-cols-3 gap-8">
        {/* Contact Details */}
        <div className=" py-6 ">
          <h3 className="text-xl font-bold mb-2">CONTACT US</h3>
          <hr className="mb-4" />
          <p className="font-semibold">JASSAL SIGNS Advertising</p>
          <p>
          7728 128 St Unit 101, Surrey, BC V3W 1L3, Canada
          </p>
          <p className="mt-2 font-medium">(604) 599 4221</p>
          <p className="text-blue-600 cursor-pointer">info@jassalsigns.com</p>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 text-gray-800 py-6 ">
          <h3 className="text-xl font-bold mb-2 text-gray-800">POST YOUR QUERY</h3>
          <hr className="mb-4" />
          <form className="space-y-4 text-gray-800">
            <div>
              <label className="block font-medium ">Full Name*</label>
              <input
                type="text"
                placeholder="Please Enter Your Name"
                className="w-full border p-2  mt-1"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Email ID*</label>
                <input
                  type="email"
                  placeholder="Please Enter Your Email"
                  className="w-full border p-2  mt-1"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Phone Number*</label>
                <input
                  type="text"
                  placeholder="Please Enter Your Phone Number"
                  className="w-full border p-2  mt-1"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block font-medium">Message</label>
              <textarea
                placeholder="Please Enter Your message"
                className="w-full border p-2  mt-1"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2  hover:bg-orange-700 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;