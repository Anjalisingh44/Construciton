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
  className="relative pt-[96px] bg-gradient-to-br from-cyan-300 via-sky-100 to-white "
>
  <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between pl-4 pr-0 sm:pl-6 sm:pr-0 md:pl-12 md:pr-0 lg:pl-[109px] lg:pr-0 lg:h-[550px]">
    
    {/* Left Side: Text */}
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
    <motion.h1
  initial={{ x: -200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 bg-clip-text text-transparent 
             text-[28px] sm:text-[38px] md:text-[48px] font-extrabold leading-tight tracking-tight"
>
  Building <span className="text-cyan-700">Structures</span> That Last.
</motion.h1>

<motion.p
  initial={{ x: -200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="text-gray-700 text-[18px] sm:text-[20px] mt-4 font-medium leading-relaxed"
>
  From <span className="text-cyan-600 font-semibold">residential</span> to 
  <span className="text-blue-600 font-semibold"> commercial</span>, 
  we deliver safe, on-time, and cost-effective construction 
  <span className=" decoration-cyan-500 decoration-2"> without cutting corners.</span>
</motion.p>


      <button className="bg-cyan-600 text-white px-6 py-2 rounded-full font-medium text-[16px] lg:w-1/3 mb-3 w-1/2 ">
        Get In Touch
      </button>
    </div>

    {/* Right Side: Image */}
    <div className=" hidden w-full lg:w-1/2 lg:flex  md:flex justify-end translate-x-10  mt-7" >
      <img
        src={home}
        alt="Home Background"
        className=" max-w-full h-[500px] rounded-lg"
      />
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
