import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { selectFeatures } from "../redux/features/featureSlice";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const OutsourceSection = () => {
  const teamMembers = useSelector(selectFeatures);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="Team" className="py-20 md:py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-cyan-600 font-bold uppercase tracking-[0.25em] mb-4 text-[10px]"
          >
            The Visionaries
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight"
          >
            Meet Our <span className="text-cyan-600 uppercase">Expert Leadership</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            className="h-1 bg-cyan-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-slate-50 rounded-[3rem] p-10 pt-20 text-center border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 relative h-full">

                {/* Image Container with decorative ring */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="relative p-2 rounded-full bg-white shadow-2xl">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                          <span className="text-[10px] font-bold uppercase tracking-widest">Architect</span>
                        </div>
                      )}
                    </div>
                    {/* Status indicator or decorative dot */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-cyan-500 border-4 border-white rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-1.5 group-hover:text-cyan-600 transition-colors tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-cyan-600 font-black text-[10px] uppercase tracking-[0.2em] mb-6 inline-block bg-cyan-50 px-4 py-1.5 rounded-full">
                    {member.title}
                  </p>

                  <div className="w-8 h-1 bg-slate-200 mx-auto mb-6 group-hover:w-20 group-hover:bg-cyan-500 transition-all duration-500 rounded-full"></div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium opacity-80 px-2 italic">
                    "{member.description}"
                  </p>

                  {/* Social links */}
                  <div className="flex items-center justify-center gap-4">
                    <a href="#" className="w-11 h-11 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all hover:-translate-y-1">
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@homebizz.com`} className="w-11 h-11 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all hover:-translate-y-1">
                      <FaEnvelope className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Join or Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-1 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="px-8 py-4 bg-white rounded-xl shadow-sm">
              <p className="text-slate-500 text-sm font-medium">
                Interested in joining our mission? <a href="#contact" className="text-cyan-600 font-black hover:underline uppercase tracking-widest text-[11px] ml-2">Connect with the Hub →</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OutsourceSection;
