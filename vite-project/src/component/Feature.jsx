import React, { useRef } from "react";
import { CheckCircle } from "lucide-react";
import renovation from '../assets/renovation.jpeg'
import { motion, useInView } from 'framer-motion';

const features = [
  "Customized solutions for your specific business needs",
  "Expert team with years of industry experience",
  "Data-driven approach for measurable results",
  "Ongoing support and regular performance reviews",
  "Scalable services that grow with your business",
  "Transparent pricing with no hidden fees",
];

// Container variants control staggered children animation
const containerVariants = {
  hidden: {}, // no animation needed on container itself
  visible: {
    transition: {
      staggerChildren: 0.3, // children appear one by one, each delayed by 0.3s
    }
  }
};

// Child variants define how each feature animates
const childVariants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};

const Feature = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once when visible

  return (
    <section className="py-20" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-xl font-bold mb-6 text-cyan-600">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-black dark:text-slate-400 mb-8">
              We're committed to delivering exceptional value and results that
              exceed your expectations. Our approach combines innovation,
              expertise, and personalized attention.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={childVariants}
                >
                  <CheckCircle className="h-5 w-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span className="text-black dark:text-black">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="lg:w-1/2 bg-slate-200 dark:bg-slate-800 rounded-xl aspect-video overflow-hidden">
            <img src={renovation} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
