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
    <header className="fixed top-0 left-0 w-full z-50 glass-nav shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-slate-900 border-b border-white/5 hidden lg:flex items-center px-8 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white relative h-[40px]">
        {/* Centered Phone & Email */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <FaPhone className="text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="opacity-80 group-hover:opacity-100 transition-opacity">+977 9709848068</span>
          </div>
          <div className="w-px h-3 bg-white/20"></div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <FaEnvelope className="text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="opacity-80 group-hover:opacity-100 transition-opacity">homebizzeng@gmail.com</span>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="ml-auto flex items-center gap-5 text-sm">
          {[
            { Icon: FaFacebookF, href: "https://www.facebook.com/share/19i8F9CGmT/" },
            { Icon: FaInstagram, href: "https://www.instagram.com/homebizzengineering?igsh=ZTlhNnlzcnkyeDV2" },
            { Icon: FaTiktok, href: "https://www.tiktok.com/@homebizz_engineering?_t=ZS-8yhN4oCS9ie&_r=1" },
            { Icon: FaWhatsapp, href: "https://wa.me/9709848068" }
          ].map((social, i) => (
            <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <social.Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="h-[70px] px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <HashLink smooth to="/#home" className="flex items-center w-[145px] h-[45px]">
          <img src={logo} alt="Logo" className="w-[100px] h-auto px-2" />
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center flex-1 gap-12">
          {navLinks.map((link, idx) => (
            <HashLink
              key={idx}
              smooth
              to={link.href}
              className="group relative"
            >
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-700 group-hover:text-cyan-600 transition-colors duration-300">
                {link.label}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></span>
              {/* Subtle Dot Indicator for high-end feel */}
              <span className="absolute -top-1 -right-1 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></span>
            </HashLink>
          ))}
        </div>

        {/* Desktop CTA (Adding one small attractive button to make it authentic) */}
        <div className="hidden lg:block">
          <HashLink smooth to="/#contact">
            <button className="btn-premium bg-slate-900 text-white !px-5 !py-2 !text-[10px] uppercase tracking-widest">
              Consult Now
            </button>
          </HashLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-slate-900 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-slate-900 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-slate-900 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`overflow-hidden transition-all duration-500 lg:hidden bg-white/95 backdrop-blur-xl ${isMobileMenuOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
        <div className="p-8 flex flex-col gap-6 text-center">
          {navLinks.map((link, idx) => (
            <HashLink
              key={idx}
              smooth
              to={link.href}
              onClick={handleLinkClick}
              className="text-lg font-black text-slate-900 hover:text-cyan-600 transition-colors uppercase tracking-tight"
            >
              {link.label}
            </HashLink>
          ))}
          <HashLink smooth to="/#contact" onClick={handleLinkClick}>
            <button className="btn-premium bg-cyan-600 text-white w-full !py-4 uppercase tracking-widest">
              Get Started
            </button>
          </HashLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
