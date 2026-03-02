import React from 'react';
import About from '../component/About';
import Ourservices from '../component/Ourservices';
import Projects from '../component/Projects';
import Contactus from '../component/Contactus';
import OutsourceSection from '../component/OutsourceSection';
import QA from '../component/QA';
import Workingmethod from '../component/Workingmethod';
import { motion } from 'framer-motion';
import heroBg from '../assets/Adds.jpeg';

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* Hero Section - The "Cinema-Wide" Proportional Layout */}
      <section id="home" className="relative w-full pt-[80px] md:pt-[105px] bg-slate-50">

        {/* The Frame - Calculated for perfect "Above the Fold" visibility */}
        <div className="w-full relative overflow-hidden group shadow-2xl">
          <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[25/9] max-h-[700px] w-full bg-slate-900">
            <img
              src={heroBg}
              alt="Homebizz Structural Excellence"
              className="w-full h-full object-cover object-center transition-transform duration-[4s] group-hover:scale-[1.03]"
            />

            {/* Action Sidebar - Clean buttons on the right */}
            <div className="absolute inset-0 flex items-center justify-end px-6 md:px-12 lg:px-24 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="flex flex-col gap-4 items-end pointer-events-auto"
              >
                <button className="btn-cyan-elegant !text-[10px] md:!text-[11px] !px-8 md:!px-12 !py-3 md:!py-4 uppercase tracking-[0.25em] font-black shadow-2xl backdrop-blur-md">
                  Portfolios
                  <span className="ml-2 inline-block">→</span>
                </button>

                <button className="btn-outline-elegant !text-[10px] md:!text-[11px] !px-8 md:!px-12 !py-3 md:!py-4 uppercase tracking-[0.25em] font-black bg-white/10 border-white/30 hover:bg-slate-900 hover:text-white transition-all shadow-xl">
                  Contact Us
                </button>
              </motion.div>
            </div>

            {/* Subtle Gradient to make it feel expensive */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Structural Anchor Detail */}
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center opacity-30">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Hub 01</span>
            <div className="w-16 h-px bg-slate-900"></div>
          </div>
          <p className="text-[9px] uppercase font-black tracking-widest text-slate-500 hidden sm:block">Engineering Integrity & Visionary Design</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-20">
        <About />
        <Ourservices />
        <Workingmethod />
        <Projects />
        <OutsourceSection />
        <Contactus />
        <QA />
      </div>
    </div>
  );
};

export default Home;
