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
      <section id="home" className="relative pt-[96px] h-auto lg:h-[550px] bg-gradient-to-br from-cyan-300 via-sky-100 to-white">
        
        {/* Background Image */}
        <img
          src={home}
          alt="Home Background"
          className="hidden sm:block absolute top-0 left-0 w-full h-full z-0 object-contain object-right-bottom"
        />

        {/* Overlay dim layer */}
        <div className="absolute top-0 left-0 w-full h-full  opacity-60 z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-[109px] h-full ">
          {/* Left side: Text */}
          <div className="w-full max-w-[599px] px-4 sm:px-6 md:px-8 flex flex-col gap-6">
            <div>
              
              <motion.h1
          initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
          className="text-black text-[22px] sm:text-[30px] font-bold leading-tight"
        >
          Building Structures That Last.
        </motion.h1>
             
               <motion.p
          initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
          className="text-black text-[19px] mt-4 font-semibold "
        >
          From residential to commercial, we deliver safe, on-time, and cost-effective construction  
                without cutting corners.
        </motion.p>

            </div>

            <div>
              <button className="bg-cyan-600 text-white px-6 py-2 rounded-full font-medium text-[16px]  mb-3">
                Get In Touch
              </button>

              <div className="hidden sm:flex gap-2 mt-4">
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
