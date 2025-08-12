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
      className="bg-white w-full flex flex-col items-center justify-center min-h-screen px-4 "
    >
      <div className="mb-10 max-w-3xl text-center">
        <h1 className="text-2xl font-bold text-cyan-600">Get in Touch</h1>
        <p className="text-lime-600 mt-5">
          Don’t hesitate to ask us something. Our customer support team is always available
          <br />
        </p>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-0">

      <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-12 lg:gap-44">
        {/* Left: Form and contact info container */}
        <div className="flex-1 relative">
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

          {/* Contact Info Box */}
          <div
            className="
              mt-10
              lg:absolute lg:-bottom-12 lg:-right-44 
              bg-sky-600 text-white rounded-2xl shadow-md p-7 w-full max-w-md
              lg:w-72
            "
          >
            <h2 className="text-2xl font-bold mb-2">LET'S HAVE A TALK</h2>
            <p className="mb-6 text-sm lg:text-base">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the...
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-lime-600" />
                <span>Lokanthali, Bhaktapur</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lime-600" />
                <span>+977 9709848068</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lime-600" />
                <span>homebizz@gmail.com</span>
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

        {/* Right: Illustration */}
        <div className="flex flex-col items-center justify-center w-full  py-8 lg:flex-1">
         <div className="mt-8 w-full max-w-md px-4 sm:px-5 mx-auto ">
           <h2 className="text-2xl font-semibold mb-8 text-center text-cyan-600">Our Location</h2>
      <iframe
        title="Kathmandu Map"
       
        width="100%"
        height="500"
        className="rounded-md"
        loading="lazy"
      ></iframe>
     
    </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contactus;
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.3482944175935!2d85.3390888479241!3d27.672783200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19efc2095609%3A0x8df76accdae7f4d8!2sCapital%20College%20%26%20Research%20Center!5e1!3m2!1sen!2snp!4v1754545695597!5m2!1sen!2snp"