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
import Hero from '../component/Hero'


const Home = () => {
  return (
    <div>
      
<Hero />
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
