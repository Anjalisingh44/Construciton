import React, { useRef } from "react";
import { CheckCircle2, ShieldCheck, Zap, Users, BarChart3, Clock } from "lucide-react";
import renovation from '../assets/renovation.jpeg';
import { motion, useInView } from 'framer-motion';

const features = [
  { text: "Custom Engineered Structural Solutions", icon: <Zap className="w-5 h-5 text-cyan-400" /> },
  { text: "Decades of Professional Industry Expertise", icon: <Users className="w-5 h-5 text-cyan-400" /> },
  { text: "Data-Driven Precision Site Management", icon: <BarChart3 className="w-5 h-5 text-cyan-400" /> },
  { text: "Zero-Compromise Safety Protocols", icon: <ShieldCheck className="w-5 h-5 text-cyan-400" /> },
  { text: "Scalable Infrastructure Development", icon: <BarChart3 className="w-5 h-5 text-cyan-400" /> },
  { text: "Transparent Milestones & Deliverables", icon: <Clock className="w-5 h-5 text-cyan-400" /> },
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
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Feature = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h4 className="text-cyan-600 font-bold uppercase tracking-widest mb-4">Core Strengths</h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Why We Are Leaders in <br /><span className="text-cyan-600 font-extrabold italic">Modern Construction</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Our commitment to excellence is built on a foundation of integrity and innovation. We leverage advanced materials and engineering methodologies to redefine structural possibilities.
            </p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-cyan-100 hover:bg-cyan-50/30 transition-all duration-300"
                  variants={childVariants}
                >
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="text-slate-700 font-bold text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-700">
              <img src={renovation} alt="Modern construction site" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
