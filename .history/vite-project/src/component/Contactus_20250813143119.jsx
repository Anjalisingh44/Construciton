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
  FaTiktok,
} from "react-icons/fa";

const Contactus = () => {
  return (
    <div
      id="contact"
      className="bg-white w-full flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-3xl font-bold text-cyan-600">Get in Touch</h1>
        <p className="text-lime-600 mt-4">
          Don’t hesitate to ask us something. Our customer support team is always available.
        </p>
      </div>

      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-12 lg:gap-36 justify-center items-start">
        {/* Left: Form and Contact Info */}
        <div className="flex-1 lg:max-w-lg relative">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white via-sky-50 to-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-sky-600">Contact Us</h2>
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
                className="bg-sky-600 text-white px-6 py-2 mt-4 rounded hover:bg-sky-900 flex items-center gap-2 "
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Box */}
          <div className=" mt-10
              lg:absolute lg:-bottom-12 lg:-right-44 
              bg-sky-600 text-white rounded-2xl shadow-md p-7 w-full max-w-md
              lg:w-72">
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
              <a href="https://www.facebook.com/share/19i8F9CGmT/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/homebizzengineering?igsh=ZTlhNnlzcnkyeDV2" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/anjali-singh-11138b271/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.tiktok.com/@homebizz_engineering?_t=ZS-8yhN4oCS9ie&_r=1" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Map */}
        <div className="flex-1 lg:max-w-lg flex flex-col items-center justify-center w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center text-cyan-600">Our Location</h2>
          <iframe
            title="Kathmandu Map"
            src="https://www.google.com/maps?q=27.672000,85.344944&hl=en&z=15&output=embed"
            width="100%"
            height="400"
            className="rounded-xl border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
