import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { selectFeatures } from "../redux/features/featureSlice";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const OutsourceSection = () => {
  const teamMembers = useSelector(selectFeatures);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="Team" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
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
            className="text-3xl md:text-4xl font-black text-slate-900 mb-6"
          >
            Meet Our <span className="text-cyan-600">Expert Leadership</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            className="h-1 bg-cyan-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-slate-50 rounded-[2.5rem] p-10 pt-16 text-center border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 relative h-full">

                {/* Image Container with decorative ring */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="relative p-1.5 rounded-full bg-white shadow-xl">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-slate-50">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                          No Image
                        </div>
                      )}
                    </div>
                    {/* Status indicator or decorative dot */}
                    <div className="absolute bottom-1 right-2 w-5 h-5 bg-cyan-500 border-4 border-white rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan-600 font-bold text-xs uppercase tracking-widest mb-4">
                    {member.title}
                  </p>

                  <div className="w-8 h-px bg-slate-200 mx-auto mb-4 group-hover:w-16 transition-all"></div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 opacity-80 px-4">
                    {member.description}
                  </p>

                  {/* Social links (placeholder) */}
                  <div className="flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
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
          className="mt-20 text-center"
        >
          <p className="text-slate-400 text-sm">
            Interested in joining our mission? <a href="#contact" className="text-cyan-600 font-bold hover:underline">Connect with us</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OutsourceSection;
