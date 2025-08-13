import React from 'react';
// import home from '../assets/home.jpeg';
import About from '../component/About';
import Ourservices from '../component/Ourservices';
import Projects from '../component/Projects';
import Contactus from '../component/Contactus';
import OutsourceSection from '../component/OutsourceSection';
import QA from '../component/QA';
import Workingmethod from '../component/Workingmethod';
import { motion } from 'framer-motion';
import home from '../assets/home.jpeg'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
     <section
  id="home"
  className="relative w-full h-screen lg:h-[700px] bg-gradient-to-br from-cyan-300 via-sky-100 to-white overflow-hidden"
>
  {/* Background Image */}
  <img
    src={home}
    alt="Home Background"
    className="absolute inset-0 w-full h-full object-cover object-center z-0"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20 z-10"></div>

  {/* Content */}
  <div className="relative z-20 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-12 lg:px-[109px] h-full">
    {/* Left side text */}
    <div className="w-full lg:max-w-[600px] flex flex-col gap-6 text-center lg:text-left">
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-black text-3xl sm:text-4xl font-bold leading-tight"
      >
        Building Structures That Last.
      </motion.h1>

      <motion.p
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-black text-lg sm:text-xl font-semibold mt-2"
      >
        From residential to commercial, we deliver safe, on-time, and cost-effective construction without cutting corners.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6 justify-center lg:justify-start">
        <button className="bg-cyan-600 text-white px-6 py-2 rounded-full font-medium text-base">
          Get In Touch
        </button>
        <div className="hidden sm:flex gap-2 mt-2 sm:mt-0 items-center">
          <span className="w-3 h-3 rounded-full bg-[#0284C7]"></span>
          <span className="w-3 h-3 rounded-full bg-[#4ab0c2]"></span>
          <span className="w-3 h-3 rounded-full bg-[#4e7c85]"></span>
        </div>
      </div>
    </div>
  </div>
</section>


      <About />
      <Ourservices />
      <Workingmethod />
      <Projects />
      <OutsourceSection />
      <Contactus />
      <QA />
    </div>
  );
};

export default Home;
