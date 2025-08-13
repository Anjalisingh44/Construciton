// src/components/Workingmethod.jsx
import React,{ useRef } from 'react';

import appointmentImg from '../assets/invoice.png';
import confirmImg from '../assets/online.png';
import arriveImg from '../assets/real-time.png';
import solvedImg from '../assets/problem-solving.png';
import billingImg from '../assets/file.png';
import { motion, useInView } from 'framer-motion';


const steps = [
  {
    title: 'Make an Appointment',
    description: 'To make the appointment, fill the form with your problem or call us.',
    image: appointmentImg,
  },
  {
    title: 'Confirm',
    description: 'The Homebizz team will call and verify your order shortly.',
    image: confirmImg,
  },
  {
    title: 'Arrive Within Time',
    description: 'After verifying your order, we’ll arrive within hours.',
    image: arriveImg,
  },
  {
    title: 'Your Problem Solved',
    description: 'Our experts fix your issue with care, no damage done.',
    image: solvedImg,
  },
  {
    title: 'Billing',
    description: 'We charge based on our standard rates — discounts apply.',
    image: billingImg,
  },
];
const containerVariants = {
  hidden: {}, // no animation needed on container itself
  visible: {
    transition: {
      staggerChildren: 0.9, // children appear one by one, each delayed by 0.3s
    }
  }
};

// Child variants define how each feature animates
const childVariants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};



const Workingmethod = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="w-screen bg-gradient-to-br from-white via-sky-50 to-white text-black ">
      <div className="px-6 max-w-[1400px] mx-auto">
        <h2 className="text-2xl text-cyan-600 font-bold text-center mb-12">
          Homebizz Working Process
        </h2>
        <motion.div 
        ref={ref} 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        
        variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}>
                

          {steps.map((step, index) => (
            <motion.div
            key={index}
             className="text-center p-4 bg-white rounded-xl shadow"
              variants={childVariants}  >
            
              <img
                src={step.image}
                alt={step.title}
                className="w-16 h-16 mx-auto mb-3 object-contain"
              />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workingmethod;
