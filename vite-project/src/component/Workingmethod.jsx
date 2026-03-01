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
    <section className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h4 className="text-cyan-500 font-bold uppercase tracking-[0.2em] mb-3 text-[10px]">Our Workflow</h4>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Methodical <span className="text-cyan-400 font-extrabold italic">Excellence</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm opacity-80">A systematic approach ensures every project is delivered with surgical precision and structural integrity.</p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={childVariants}
            >
              <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl text-center h-full transition-all duration-500 hover:bg-slate-800 hover:shadow-2xl hover:shadow-cyan-500/5">
                <div className="mb-5 relative">
                  <div className="w-16 h-16 bg-cyan-500/5 rounded-2xl mx-auto flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  {/* Step Number Badge */}
                  <span className="absolute -top-2 -right-2 bg-slate-950 border border-slate-700 text-cyan-400 font-black text-[9px] w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed opacity-70 px-2">{step.description}</p>
              </div>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[25%] -right-3 w-6 h-px bg-slate-800 z-0"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workingmethod;
