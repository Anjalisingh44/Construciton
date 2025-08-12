import React from 'react';
import {
  FaFacebookF,  FaInstagram, FaLinkedinIn,  FaWhatsapp, FaTiktok
} from 'react-icons/fa';
import logo from '../assets/logo'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo + Description */}
        <div>
          <img
    src={}
    alt="Homebizz Logo"
    className="h-12 w-auto"
  />
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Delivering expert solutions right to your home — quick, dependable, and trusted by countless families.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
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
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Build & Design</li>
            <li>Renovation</li>
            <li>Interior-Design</li>
            <li>Architectural & Structural Design</li>
          
          </ul>
        </div>

       
        {/* Social + Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
          <div className="flex space-x-3 mb-5 text-gray-300 text-xl">
            
            <FaFacebookF />
           <FaInstagram />
            <FaLinkedinIn />
            <FaWhatsapp />
          
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
              className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm font-semibold rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col lg:flex-row justify-between items-center">
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
