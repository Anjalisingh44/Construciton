import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { Send } from "lucide-react";
import api from "../utils/api";

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      await api.post("/messages", payload);
      setStatus({ type: "success", msg: "Message sent successfully! We will contact you soon." });
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", msg: "Failed to send message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-stretch">

          {/* Left: Contact Info & Form */}
          <div className="flex-1">
            <div className="mb-16">
              <h4 className="text-cyan-600 font-black uppercase tracking-[0.3em] mb-4 text-[10px]">Communication Hub</h4>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Architecting <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Futures Today</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-lg font-medium max-w-lg opacity-90 leading-relaxed italic border-l-2 border-slate-200 pl-6">
                Connect with our specialized structural engineering team to discuss blueprints, execution timelines, or technical audits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-6 rounded-[2rem] bg-white shadow-sm border border-slate-100 group transition-all hover:shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-all text-cyan-600">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 text-[10px] uppercase tracking-widest mb-1.5 opacity-40">Office Location</h5>
                  <p className="text-slate-800 text-sm font-bold">Balkumari, Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-[2rem] bg-white shadow-sm border border-slate-100 group transition-all hover:shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-all text-cyan-600">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 text-[10px] uppercase tracking-widest mb-1.5 opacity-40">Direct Lines</h5>
                  <p className="text-slate-800 text-sm font-bold">9709848068, 9861281739</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
              <div className="col-span-1">
                <label className="block font-black text-slate-900 text-[10px] uppercase tracking-widest mb-3 ml-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-cyan-200 focus:ring-8 focus:ring-cyan-500/5 rounded-2xl px-6 py-4 text-sm transition-all outline-none font-bold"
                />
              </div>
              <div className="col-span-1">
                <label className="block font-black text-slate-900 text-[10px] uppercase tracking-widest mb-3 ml-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-cyan-200 focus:ring-8 focus:ring-cyan-500/5 rounded-2xl px-6 py-4 text-sm transition-all outline-none font-bold"
                />
              </div>
              <div className="col-span-2">
                <label className="block font-black text-slate-900 text-[10px] uppercase tracking-widest mb-3 ml-1">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-cyan-200 focus:ring-8 focus:ring-cyan-500/5 rounded-2xl px-6 py-4 text-sm transition-all outline-none font-bold"
                />
              </div>
              <div className="col-span-2">
                <label className="block font-black text-slate-900 text-[10px] uppercase tracking-widest mb-3 ml-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+977 9XXXXXXXXX"
                  required
                  className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-cyan-200 focus:ring-8 focus:ring-cyan-500/5 rounded-2xl px-6 py-4 text-sm transition-all outline-none font-bold"
                />
              </div>
              <div className="col-span-2">
                <label className="block font-black text-slate-900 text-[10px] uppercase tracking-widest mb-3 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows="4"
                  className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-cyan-200 focus:ring-8 focus:ring-cyan-500/5 rounded-2xl px-6 py-4 text-sm transition-all outline-none font-bold"
                ></textarea>
              </div>
              <div className="col-span-2 mt-4">
                {status.msg && (
                  <div className={`mb-4 p-4 rounded-2xl text-sm font-bold ${status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {status.msg}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-cyan-elegant !text-[12px] !py-5 flex items-center justify-center gap-4 uppercase tracking-[0.2em] shadow-2xl disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Right: Map and Info */}
          <div className="w-full lg:w-[480px] flex flex-col gap-10">
            <div className="rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white flex-1 min-h-[400px] relative">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=27.672000,85.344944&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                className="grayscale hover:grayscale-0 transition-all duration-[1.5s]"
                loading="lazy"
              ></iframe>
              <div className="absolute bottom-10 left-10 flex gap-4">
                {[
                  { icon: <FaInstagram />, href: "https://www.instagram.com/homebizzengineering?igsh=ZTlhNnlzcnkyeDV2" },
                  { icon: <FaFacebookF />, href: "https://www.facebook.com/share/19i8F9CGmT/" },
                  { icon: <FaWhatsapp />, href: "https://wa.me/9709848068" },
                  { icon: <FaTiktok />, href: "https://www.tiktok.com/@homebizz_engineering?_t=ZS-8yhN4oCS9ie&_r=1" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl flex items-center justify-center text-slate-900 hover:bg-cyan-600 hover:text-white transition-all transform hover:-translate-y-1">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-brand rounded-[2.5rem] p-8 text-white relative overflow-hidden group border border-white/10 shadow-xl shadow-cyan-600/10 h-fit">
              <div className="absolute -top-10 -right-10 p-10 opacity-10 group-hover:scale-125 transition-transform duration-1000 rotate-12">
                <FaEnvelope className="text-[10rem]" />
              </div>
              <h4 className="font-black text-xl mb-3 italic tracking-tight">Corporate Inquiry?</h4>
              <p className="text-cyan-50 text-xs mb-8 opacity-90 leading-relaxed font-medium">
                Send us an email for bulk project handling, tenders, and long-term contracts.
              </p>
              <a href="mailto:homebizzeng@gmail.com" className="flex items-center gap-4 font-black text-base group/link transition-all hover:text-white/80">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover/link:border-white transition-all shadow-inner">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <span className="tracking-tight uppercase text-sm">homebizzeng@gmail.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contactus;
