import React, { useState } from 'react';
import logo from '../assets/logo.png';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok
} from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#ourservices' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Team', href: '/#Team' },
    { label: 'Contact', href: '/#contact' },
    { label: 'FAQ', href: '/#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md ">
      {/* Top Info Bar */}
      <div className="bg-cyan-600 hidden lg:flex items-center px-6 py-2 text-sm text-white relative h-[48px]">
        {/* Centered Phone & Email */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-900 text-xl" />
            <span>+977 9709848068, +977 9861281739</span>
          </div>
          <div className="border-l h-5 border-white"></div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-900 text-xl" />
            <span>homebizzeng@gmail.com</span>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="ml-auto flex items-center gap-4 text-xl">
           <a href="https://www.facebook.com/share/19i8F9CGmT/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/homebizzengineering?igsh=ZTlhNnlzcnkyeDV2" target="_blank" rel="noopener noreferrer">
           <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            </a>
            <a href="https://www.tiktok.com/@homebizz_engineering?_t=ZS-8yhN4oCS9ie&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="hover:text-gray-300 cursor-pointer" />
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-gray-300 cursor-pointer" />
            </a>
                    

        
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="h-[60px] px-4 md:px-10 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center w-[145px] h-[45px]">
          <img src={logo} alt="Logo" className="w-[100px] h-auto px-2" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center flex-1 gap-8 text-[17px] xl:text-[19px] font-semibold font-['Roboto'] text-black">
          {navLinks.map((link, idx) => (
            <HashLink
              key={idx}
              smooth
              to={link.href}
              className="cursor-pointer hover:text-blue-600 transition-colors"
            >
              {link.label}
            </HashLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-3xl lg:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="w-full flex flex-col gap-4 lg:hidden text-[16px] font-semibold font-['Roboto'] px-7 pt-6 pb-4 bg-white shadow-md transition-all duration-300 ease-in-out">
          {navLinks.map((link, idx) => (
            <HashLink
              key={idx}
              smooth
              to={link.href}
              onClick={handleLinkClick}
              className="cursor-pointer hover:text-blue-600 transition-colors"
            >
              {link.label}
            </HashLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
