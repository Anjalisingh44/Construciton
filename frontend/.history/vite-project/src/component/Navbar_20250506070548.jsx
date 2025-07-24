import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaPhone, FaEnvelope, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import topbar from '../assets/topbar.png'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white shadow-md">
      
      <div className="bg-white">
  <div className="bg-blue-400 justify-end hidden lg:flex items-center px-6 py-2 text-sm">
   
    <div className=' flex relative text-white justify-between w-[990px] px-60'>
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-1 ">
        <FaPhone className="text-blue-900 text-xl" />
        <span>+977 9709848068</span>
      </div>
      <div className="border-l h-5 border-white mx-2"></div>
      <div className="flex items-center gap-1">
      
        <FaEnvelope className="text-blue-900 text-xl" />
        <span>homebizzeng@gmail.com</span>
      </div>
    </div>
    </div>

    <div className="flex items-center gap-4 text-xl">
      <FaFacebookF />
      <FaWhatsapp />
      <FaLinkedinIn />
      <FaInstagram />
    </div>
  </div>
</div>


      {/* Main Navbar */}
      <nav className="h-[49px]  mx-auto flex flex-wrap justify-between relative items-center px-8">
        <div className="flex items-center w-[180px] h-[45px]">
          <img src={logo} alt="Logo" className=" w-[120px] h-auto px-2" />
        </div>

        <button 
          className="text-3xl lg:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        <div className="hidden lg:flex flex-2 justify-center gap-8 text-[17px] font-semibold font-['Roboto'] text-black">
        
        <HashLink smooth to="/#home" className="cursor-pointer">Home</HashLink>
          <HashLink smooth to="/#about" className="cursor-pointer">About Us</HashLink>
          <HashLink smooth to="/#ourservices" className="cursor-pointer">Services</HashLink>
          <HashLink smooth to="/#projects" className="cursor-pointer">Projects</HashLink>
          <HashLink smooth to="/#Team" className="cursor-pointer">Team</HashLink>
          <HashLink smooth to="/#contact" className="cursor-pointer">Contact Us</HashLink>
        </div>

        
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="w-full flex flex-col gap-4 lg:hidden text-[16px] font-semibold font-['Roboto'] px-7 pt-6 pb-4">
          <span className="cursor-pointer">OUR TEAM</span>
          <span className="cursor-pointer">OUR SERVICES</span>
          <span className="cursor-pointer">SOFTWARE</span>
          <span className="cursor-pointer">PRICING</span>
          <span className="cursor-pointer">MEETING</span>
          <span className="cursor-pointer">FAQ</span>
          <span className="cursor-pointer">CONTACT</span>
        </div>
      )}
    </header>
  );
};

export default Navbar;
