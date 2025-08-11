import React from 'react';
import {
  FaFacebookF,  FaInstagram,  FaLinkedinIn,  FaWhatsapp, FaTiktok, FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import logo from '../assets/logo.png'
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-cyan-600 text-white py-12 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo + Description */}
        <div>
          <img
    src={logo}
    alt="Homebizz Logo"
    className="h-20 w-auto bg-white p-2 rounded-xl"
  />
          <p className="mt-4 text-sm leading-relaxed text-white">
            Delivering expert solutions right to your home — quick, dependable, and trusted by countless families.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>Build & Design</li>
            <li>Renovation</li>
            <li>Interior-Design</li>
            <li>Architectural & Structural Design</li>
          
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-white">
            
             <div className="flex items-center gap-2">
                     <IoLocationSharp className="text-lime-600 text-xl font-bold" />
                       <span>Balkumari,Kathmandu</span>
                     </div>

            <div className="flex items-center gap-2">
                        <FaPhone className="text-lime-600 text-xl" />
                        <span>+977 9709848068, +977 9861281739</span>
                      </div>
            <div className="flex items-center gap-2">
                       <FaEnvelope className="text-lime-600 text-xl" />
                       <span>homebizzeng@gmail.com</span>
                     </div>
             
           
          
          </ul>
        </div>


       
        {/* Social + Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
          <div className="flex space-x-3 mb-5 text-white text-xl">
            
           <a href="https://www.facebook.com/share/19i8F9CGmT/" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://www.instagram.com/homebizzengineering?igsh=ZTlhNnlzcnkyeDV2" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>
  <a href="https://www.tiktok.com/@homebizz_engineering?_t=ZS-8yhN4oCS9ie&_r=1" target="_blank" rel="noopener noreferrer">
    <FaTiktok />
  </a>
  <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp />
  </a>
          
          </div>

          <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your mail"
              className="px-3 py-2 text-sm text-black rounded-l-md w-full"
            />
            <button
              type="submit"
              className="bg-lime-600 hover:bg-lime-700 px-4 py-2 text-sm font-semibold rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white mt-10 pt-6 text-sm text-white flex flex-col lg:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Homebizz. All rights reserved.</p>
        <div className="space-x-4 mt-4 lg:mt-0">
          <a href="#" className="hover:text-white">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
