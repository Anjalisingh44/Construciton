import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import about from '../assets/abouttt.jpeg';
import Card from './Card';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.3 });

  return (
    <section id="about" className="py-20" ref={ref}>
    
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row  gap-12 px-6 items-start">
     
        
      
        <motion.div
          className="w-full lg:flex-[45%] relative "
           initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5}}
        >
          <img
            src={about}
            alt="Construction site"
            className="rounded-xl shadow-lg w-full h-[600px] object-cover"
          />
        <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-sm uppercase">Years Of Experience</p>
              </div>
        </motion.div>

      
        <motion.div
          className="bg-gradient-to-br from-white via-sky-50 to-white w-full lg:w-[60%]  min-h-[600px] p-4 "
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5}}
        >
          <h2 className="text-2xl font-bold text-cyan-600 mb-4">About Our Company</h2>
          <Card/>
          <p className="text-black mb-4 text-lg">
          At HomeBizz Construction, we are committed to building excellence. With years of experience and a passionate team of professionals, we specialize in residential, commercial, and industrial construction projects.

From planning to execution, our focus is on delivering quality craftsmanship, timely completion, and customer satisfaction. We believe that every project, big or small, deserves attention to detail and a commitment to perfection. Our collaborative approach ensures that clients are involved at every step of the process, creating transparency and trust.

What sets us apart is our ability to blend innovation with reliability. We utilize cutting-edge technology and sustainable practices to build structures that are not only durable but also environmentally conscious. Whether it’s constructing a modern home, renovating office space, or managing large-scale industrial developments, we tailor our solutions to meet each client's unique vision and needs.
          </p>
          <p className="text-black text-lg">
            From planning to execution, our focus is on delivering quality craftsmanship, timely completion, and customer satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
