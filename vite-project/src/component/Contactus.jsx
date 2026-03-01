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
import { Send } from "lucide-react";

const Contactus = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left: Contact Info & Form */}
          <div className="flex-1">
            <div className="mb-12">
              <h4 className="text-cyan-600 font-black uppercase tracking-[0.3em] mb-4 text-[10px]">Communication Hub</h4>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Architect Your <br /><span className="text-cyan-600">Vision With Us</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base font-medium max-w-md opacity-90 leading-relaxed">
                Connect with our specialized structural engineering team to discuss blueprints, execution timelines, or technical audits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4 p-4 rounded-3xl bg-white shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-cyan-600 w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Office Location</h5>
                  <p className="text-slate-500 text-sm">Balkumari, Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-3xl bg-white shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-cyan-600 w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Direct Lines</h5>
                  <p className="text-slate-500 text-sm">9709848068, 9861281739</p>
                </div>
              </div>
            </div>

            <form className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block font-bold text-slate-700 text-xs mb-2 ml-1">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-cyan-200 focus:ring-4 focus:ring-cyan-500/5 rounded-2xl px-5 py-3 text-sm transition-all outline-none"
                />
              </div>
              <div className="col-span-1">
                <label className="block font-bold text-slate-700 text-xs mb-2 ml-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-cyan-200 focus:ring-4 focus:ring-cyan-500/5 rounded-2xl px-5 py-3 text-sm transition-all outline-none"
                />
              </div>
              <div className="col-span-2">
                <label className="block font-bold text-slate-700 text-xs mb-2 ml-1">Work Email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-cyan-200 focus:ring-4 focus:ring-cyan-500/5 rounded-2xl px-5 py-3 text-sm transition-all outline-none"
                />
              </div>
              <div className="col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full btn-primary-elegant !text-[12px] !py-4 flex items-center justify-center gap-3 uppercase tracking-widest shadow-xl"
                >
                  Send Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right: Map and Info */}
          <div className="w-full lg:w-[450px] space-y-8">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white h-[450px] relative">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=27.672000,85.344944&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                className="grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              ></iframe>
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                {[
                  { icon: <FaInstagram />, href: "#" },
                  { icon: <FaFacebookF />, href: "#" },
                  { icon: <FaWhatsapp />, href: "#" },
                  { icon: <FaLinkedinIn />, href: "#" }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-slate-900 hover:bg-cyan-500 hover:text-white transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-cyan-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <FaEnvelope className="text-8xl" />
              </div>
              <h4 className="font-black text-2xl mb-2">Corporate Inquiry?</h4>
              <p className="text-cyan-100 text-sm mb-6 opacity-90 leading-relaxed">
                Send us an email for bulk project handling, tenders, and long-term contracts.
              </p>
              <div className="flex items-center gap-3 font-bold text-lg">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-cyan-200" />
                </div>
                homebizzeng@gmail.com
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contactus;
