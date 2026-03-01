import React from 'react';
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTiktok, FaPhone,
  FaEnvelope, FaArrowRight
} from 'react-icons/fa';
import logo from '../assets/logo.png'
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative border-t border-slate-800">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

          {/* Identity Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-2xl shadow-xl">
                <img src={logo} alt="Homebizz Logo" className="h-10 w-auto" />
              </div>
              <div>
                <h2 className="font-black text-2xl tracking-tighter">HOME<span className="text-cyan-500">BIZZ</span></h2>
                <p className="text-[9px] uppercase tracking-[0.4em] font-black text-slate-500">Engineering</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Delivering structural excellence and visionary architectural designs right to your project — reliable, innovative, and engineered for the future.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaFacebookF, href: "https://www.facebook.com/share/19i8F9CGmT/" },
                { Icon: FaInstagram, href: "https://www.instagram.com/homebizzengineering?igsh=ZTlhNnlzcnkyeDV2" },
                { Icon: FaTiktok, href: "https://www.tiktok.com/@homebizz_engineering?_t=ZS-8yhN4oCS9ie&_r=1" },
                { Icon: FaWhatsapp, href: "https://wa.me/9709848068" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-600 transition-all duration-300">
                  <social.Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Columns */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-cyan-500 italic">Explore</h3>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              {['Home', 'About', 'Services', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-3 h-px bg-cyan-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-cyan-500 italic">Specialties</h3>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              {['Build & Design', 'Renovation', 'Interior Design', 'Master Planning'].map((service) => (
                <li key={service} className="hover:text-white transition-colors cursor-default">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-500 italic">Connect</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <IoLocationSharp className="text-cyan-500 text-xl mt-0.5" />
                <div className="text-slate-400 text-sm font-medium">Balkumari,<br />Kathmandu, Nepal</div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="text-cyan-500 text-lg mt-0.5" />
                <div className="text-slate-400 text-sm font-medium">9709848068<br />9861281739</div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-4">Newsletter</h4>
              <form className="relative">
                <input
                  type="email"
                  placeholder="Engineering insights..."
                  className="w-full bg-slate-800 border-none rounded-2xl py-3 px-5 text-sm focus:ring-2 focus:ring-cyan-500 outline-none text-white placeholder-slate-600"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-cyan-600 hover:bg-cyan-500 px-4 rounded-xl transition-all">
                  <FaArrowRight className="text-xs" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Homebizz Engineering. Structural Integrity Guaranteed.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
