import React from 'react';
 import about from '../assets/abouttt'
 import {motion} from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-15 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-5 px-2">
        
        
        <motion.div className="w-full lg:w-dvh "
        initial={{opacity:0, x:-100}}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}

        >
          <img 
            src={about}
            alt="Construction site" 
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div className="w-full lg:w-1/2 bg-gray-50"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
         
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Our Company</h2>
          <p className="text-gray-700 mb-4 text-lg">
            At HomeBizz Construction, we are committed to building excellence. With years of experience and a passionate team of professionals, we specialize in residential, commercial, and industrial construction projects.
          </p>
          <p className="text-gray-700 text-lg">
            From planning to execution, our focus is on delivering quality craftsmanship, timely completion, and customer satisfaction. We take pride in turning your vision into reality with durable, sustainable, and innovative construction solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

