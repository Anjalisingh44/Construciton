import React, { useRef } from 'react';
import appointmentImg from '../assets/invoice.png';
import confirmImg from '../assets/online.png';
import arriveImg from '../assets/real-time.png';
import solvedImg from '../assets/problem-solving.png';
import billingImg from '../assets/file.png';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    title: 'Expert Consultation',
    description: 'Schedule a detailed session with our engineers for precision project planning.',
    image: appointmentImg,
  },
  {
    title: 'Project Confirmation',
    description: 'We finalize logistical milestones and verify project requirements.',
    image: confirmImg,
  },
  {
    title: 'Rapid Deployment',
    description: 'Our mobilization team arrives on-site with advanced equipment instantly.',
    image: arriveImg,
  },
  {
    title: 'Precision Execution',
    description: 'Expert execution with rigorous quality control at every construction stage.',
    image: solvedImg,
  },
  {
    title: 'Quality Audit',
    description: 'Final inspection and transparent billing with comprehensive project reporting.',
    image: billingImg,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Workingmethod = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="workingmethod" className="py-20 md:py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h4 className="text-cyan-500 font-bold uppercase tracking-[0.2em] mb-4 text-[10px]">Our Workflow</h4>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Methodical <span className="text-cyan-400 font-extrabold italic">Excellence</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base opacity-80 decoration-cyan-500/30">A systematic approach ensures every project is delivered with surgical precision and structural integrity.</p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group h-full"
              variants={childVariants}
            >
              <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-[2rem] text-center h-full transition-all duration-500 hover:bg-slate-800 hover:shadow-2xl hover:shadow-cyan-500/5 border-b-4 hover:border-b-cyan-500">
                <div className="mb-8 relative">
                  <div className="w-20 h-20 bg-cyan-500/5 rounded-2xl mx-auto flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  {/* Step Number Badge */}
                  <span className="absolute -top-3 -right-3 bg-slate-950 border border-slate-700 text-cyan-400 font-black text-[10px] w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed opacity-70 px-2">{step.description}</p>
              </div>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[25%] -right-5 w-10 h-px bg-slate-700/50 z-0"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workingmethod;
