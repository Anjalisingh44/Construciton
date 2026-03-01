import React from 'react';
import About from '../component/About';
import Ourservices from '../component/Ourservices';
import Projects from '../component/Projects';
import Contactus from '../component/Contactus';
import OutsourceSection from '../component/OutsourceSection';
import QA from '../component/QA';
import Workingmethod from '../component/Workingmethod';
import { motion } from 'framer-motion';
import heroBg from '../assets/homebizz10.jpeg';

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] flex items-center overflow-hidden">

        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Commercial Construction Site"
            className="w-full h-full object-cover animate-kenburns scale-110"
          />
          {/* Enhanced Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-slate-900/60 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-[900] leading-[1.1] tracking-tight mb-6">
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">Generations</span> Of <br />
                Structural Integrity.
              </h1>

              <p className="text-gray-200 text-[13px] md:text-sm font-medium max-w-md mb-10 leading-relaxed opacity-80 border-l-4 border-cyan-500 pl-6">
                Specializing in high-precision structural design and complete construction management. From visionary blueprints to permanent urban landmarks.
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="btn-cyan-elegant !text-[12px] !px-10 !py-4 uppercase tracking-[0.2em] font-black shadow-[0_20px_40px_-10px_rgba(8,145,178,0.5)]">
                  Explore Projects
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                </button>
                <button className="btn-outline-elegant !text-[12px] !px-10 !py-4 uppercase tracking-[0.2em] font-black">
                  Our Services
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="flex gap-3 mt-12">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-1 bg-cyan-500 rounded-full"
                ></motion.span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 24 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="h-1 bg-white/50 rounded-full"
                ></motion.span>
              </div>
            </motion.div>
          </div>
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
