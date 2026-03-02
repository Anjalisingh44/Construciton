import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import aboutImg from '../assets/homebizz8.jpeg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 md:py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50 -skew-x-12 transform translate-x-1/2 "></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image Side - Correct Aspect Ratio & Content Visibility */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
              <img
                src={aboutImg}
                alt="Construction excellence at Homebizz"
                className="w-full h-full object-cover aspect-[4/5] md:aspect-square lg:aspect-[4/5] transition-transform duration-[2s] hover:scale-105"
              />

              {/* Stat Overlay to make it authentic */}
              <div className="absolute top-6 left-6 p-4 glass-badge rounded-2xl shadow-lg border border-white/20">
                <p className="text-white text-[10px] font-black tracking-widest uppercase">Verified Excellence</p>
              </div>
            </div>

            {/* Premium Stat Badge - Adjusted Position */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="absolute -bottom-6 -right-6 glass-badge px-8 py-6 rounded-[2rem] shadow-2xl z-20 hidden md:block"
            >
              <div className="text-center font-black">
                <span className="block text-2xl text-white tracking-widest mb-0.5 italic">LEADING</span>
                <span className="text-white/80 text-[9px] uppercase tracking-[0.2em] font-black leading-tight">Years of<br />Innovation</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-0.5 bg-cyan-600 rounded-full"></span>
                <h4 className="text-cyan-600 font-black uppercase tracking-[0.3em] text-[10px]">The Construction DNA</h4>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Architecting <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Futures Today</span>
              </h2>
            </div>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium opacity-90 max-w-xl">
              Homebizz provides specialized structural engineering and complete construction management. We merge heritage aesthetics with seismic-resistant innovation to build landmarks that endure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { label: 'Structural Edge', desc: 'Precision-engineered stability for every terrain.' },
                { label: 'Agile Execution', desc: 'Accelerated timelines without quality sacrifice.' }
              ].map((item, i) => (
                <div key={i} className="group p-6 bg-slate-50/50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
                  <span className="block text-sm font-black text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors uppercase tracking-widest">{item.label}</span>
                  <p className="text-[11px] font-medium text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <HashLink smooth to="#ourservices">
              <button className="btn-cyan-elegant !text-[11px] !px-10 !py-4 uppercase tracking-widest shadow-2xl">
                Learn Our Legacy
              </button>
            </HashLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
