import React from 'react';
import { motion } from 'framer-motion';
import about from '../assets/about.jpg';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const About = () => {
  return (
    <motion.section
      className="py-20 bg-gray-100"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">

        {/* Left: Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={about}
            alt="Construction site"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
    </motion.section>
  );
};

export default About;
