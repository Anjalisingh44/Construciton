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
import home from '../assets/home.png'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <section id="home" className="relative pt-[96px] h-auto lg:h-[600px]">
        
        {/* Background Image */}
        <img
          src={home}
          alt="Home Background"
          className="absolute top-0 left-0 w-full h-full z-0 object-contain object-right-bottom
          "
        />

        {/* Overlay dim layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60 z-10"></div>

        {/* Main Content */}
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
