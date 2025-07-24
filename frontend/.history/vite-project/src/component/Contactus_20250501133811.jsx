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
import contact from '../assets/contact.jpg'

const Contactus = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-24">
        
      
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md flex-1 relative">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold">First Name</label>
              <input type="text" placeholder="Enter your first name"
                     className="w-full border border-gray-300 rounded px-4 py-2 mt-1" />
            </div>
            <div>
              <label className="block font-semibold">Last Name</label>
              <input type="text" placeholder="Enter your last name"
                     className="w-full border border-gray-300 rounded px-4 py-2 mt-1" />
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input type="email" placeholder="Enter your email"
                     className="w-full border border-gray-300 rounded px-4 py-2 mt-1" />
            </div>
            <div>
              <label className="block font-semibold">Mobile</label>
              <input type="tel" placeholder="Enter your mobile"
                     className="w-full border border-gray-300 rounded px-4 py-2 mt-1" />
            </div>
            <button
              type="submit"
              className="bg-[#001F4D] text-white px-6 py-2 mt-4 rounded hover:bg-blue-900 flex items-center gap-2"
            >
              Submit 
            </button>
          </form>
          <div className= "absolute -bottom-16 -right-44 bg-[#001F4D] text-white rounded-2xl shadow-md flex-1 p-7 w-72">
          <h2 className="text-2xl font-bold mb-2">LET'S HAVE A TALK</h2>
          <p className="mb-6">
            Lorem Ipsum has been the industry's standard dummy text ever since the...
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Jorpati, Kathmandu</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              <span>+977 940031548</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <span>nexusacc@gmail.com</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6 text-xl">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaWhatsapp />
            <FaLinkedinIn />
          </div>
        </div>
        </div>

    
       

        {/* Right: Illustration */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <img src={contact} alt="Contact Illustration" className="w-80 max-w-sm" />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
