import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { data } from "../../assets/data";

const ContactUs = ({ city }) => {
  // console.log("city prop", data?.contactPage[`${city}`]?.location);`

  //  if(data){
  //   console.log("data", data)
  //  }

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
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-3  text-white">CONTACT US</h3>

            <div className="flex flex-col gap-3 text-white justify-center absolute top-[50%]">
              {/* Phone */}
              <p className="flex items-center gap-2">
                <FaPhone className="text-lg" />
                <span>+1 (780) 437-7790</span>
              </p>

              {/* Email */}
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-lg" />
                <span>jassalsignsedm@gmail.com</span>
              </p>

              {/* Address */}
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-lg mt-1" />
                <span>3273 Parsons Rd NW, Edmonton, AB T6N 1B4</span>
              </p>
            </div>

            <div className="h-[250px] mt-6  overflow-hidden">
              <iframe
                src={data && data?.contactPage[`${city}`]?.location}
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

          <form className="space-y-4 text-gray-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium ">First Name*</label>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="w-full border p-2  mt-1 "
                  required
                />
              </div>
              <div>
                <label className="block font-medium ">Last Name*</label>
                <input
                  type="text"
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
                  placeholder="Enter Your Email"
                  className="w-full border p-2  mt-1 d"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Phone Number*</label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="w-full border p-2  mt-1 "
                  required
                />
              </div>
            </div>
            <div>
              <label className="block font-medium">Message</label>
              <textarea
                placeholder="Enter Your message"
                className="w-full border p-2  mt-1 "
                rows="3"
              ></textarea>
            </div>
            <div className="flex  items-center">
              <button
                type="submit"
                className=" bg-[#ED1D26] text-white py-2 px-8 transition cursor-pointer "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
