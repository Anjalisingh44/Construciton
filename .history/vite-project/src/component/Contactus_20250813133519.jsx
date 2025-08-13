import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Contactus = () => {
  return (
    <div
      id="contact"
      className="bg-white w-full flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 lg:px-24 mb-4"
    >
      {/* Heading */}
      <div className="mb-10 max-w-3xl text-center">
        <h1 className="text-2xl font-bold text-cyan-600">Get in Touch</h1>
        <p className="text-lime-600 mt-5">
          Don’t hesitate to ask us something. Our customer support team is always available.
        </p>
      </div>

      {/* Main content: form + map */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-12">
        {/* Left: Form + Contact Info */}
        <div className="lg:w-1/2 flex flex-col relative">
          {/* Form container */}
          <div className="bg-gradient-to-br from-white via-sky-50 to-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-sky-600">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block font-semibold">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block font-semibold">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block font-semibold">Mobile</label>
                <input
                  type="tel"
                  placeholder="Enter your mobile"
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                />
              </div>
              <button
                type="submit"
                className="bg-sky-600 text-white px-6 py-2 mt-4 rounded hover:bg-sky-900 flex items-center gap-2"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Floating Contact Info Box */}
          <div
            className="
              mt-10
              lg:absolute lg:-bottom-12 lg:-right-0 
              bg-sky-600 text-white rounded-2xl shadow-md p-7 w-full max-w-md
            "
          >
            <h2 className="text-2xl font-bold mb-2">LET'S HAVE A TALK</h2>
            <p className="mb-4 text-sm lg:text-base">
              Contact Homebizz Engineering to start building your dream project today.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-lime-600" />
                <span>Balkumari, Kathmandu</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lime-600" />
                <span>9709848068, 9861281739</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lime-600" />
                <span>homebizzeng@gmail.com</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6 text-xl justify-center lg:justify-start">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
              <FaWhatsapp />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Right: Map */}
        <div className="lg:w-1/2 flex justify-end">
          <div className="w-full max-w-md sm:px-5">
            <h2 className="text-2xl font-semibold mb-4 text-center text-cyan-600">
              Our Location
            </h2>
            <iframe
              title="Kathmandu Map"
              src="https://www.google.com/maps?q=27.672000,85.344944&hl=en&z=15&output=embed"
              width="100%"
              height="500"
              className="rounded-md"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
