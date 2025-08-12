import React, { useState } from 'react';
import logo from '../assets/logo.png';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
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
    <header className="fixed top-0 left-0 w-full z-40 bg-white shadow-md">
      {/* Top Info Bar */}
     <div className="bg-whitehidden lg:flex items-center px-6 py-2 text-sm text-white relative h-[48px]">
  {/* Centered Phone & Email */}
  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
    <div className="flex items-center gap-2">
      <FaPhone className="text-blue-900 text-xl" />
      <span>+977 9709848068</span>
    </div>
    <div className="border-l h-5 border-white"></div>
    <div className="flex items-center gap-2">
      <FaEnvelope className="text-blue-900 text-xl" />
      <span>homebizzeng@gmail.com</span>
    </div>
  </div>

  {/* Right: Social Icons */}
  <div className="ml-auto flex items-center gap-4 text-xl">
    <FaFacebookF />
    <FaWhatsapp />
    <FaLinkedinIn />
    <FaInstagram />
  </div>
</div>


      {/* Main Navbar */}
      <nav className="h-[60px] px-4 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center w-[145px] h-[45px]">
          <img src={logo} alt="Logo" className="w-[100px] h-auto px-2" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center flex-1 gap-8 text-[19px] font-semibold font-['Roboto'] text-black space-x-2">
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
          className="text-3xl lg:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="w-full flex flex-col gap-4 lg:hidden text-[10px]  font-['Roboto'] px-7 pt-6 pb-4 bg-white shadow-md">
          {navLinks.map((link, idx) => (
            <HashLink
              key={idx}
              smooth
              to={link.href}
              onClick={handleLinkClick}
              className="cursor-pointer hover:text-blue-600"
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
