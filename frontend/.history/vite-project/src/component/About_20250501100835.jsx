import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import about from '../assets/about.jpg';
import Card from './Card';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.3 });

  return (
    <section id="about" className="py-20" ref={ref}>
    
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row  gap-12 px-6 items-start">
     
        
        {/* Left: Image */}
        <motion.div
          className="w-full lg:flex-[45%] "
          initial={{ opacity: 0, x: -100 , scale: 0.8}}
          animate={isInView ? { opacity: 1, x: 0, scale:1 } : {}}
          transition={{ duration: 1, ease:'easeOut'}}
        >
          <img
            src={about}
            alt="Construction site"
            className="rounded-xl shadow-lg w-full h-[600px] object-cover"
          />
         <div className="bg-[#cc8400] text-white  rounded-xl shadow-lg text-center w-64 ">
    <p className="text-3xl font-extrabold">25+</p>
    <p className="uppercase text-sm font-medium tracking-wide">Years Experience</p>
  </div>
        </motion.div>

      
        <motion.div
          className=" bg-gray-50 w-full lg:w-[60%]  min-h-[600px] p-4 "
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1}}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Our Company</h2>
          <Card/>
          <p className="text-gray-700 mb-4 text-lg">
          At HomeBizz Construction, we are committed to building excellence. With years of experience and a passionate team of professionals, we specialize in residential, commercial, and industrial construction projects.

From planning to execution, our focus is on delivering quality craftsmanship, timely completion, and customer satisfaction. We believe that every project, big or small, deserves attention to detail and a commitment to perfection. Our collaborative approach ensures that clients are involved at every step of the process, creating transparency and trust.

What sets us apart is our ability to blend innovation with reliability. We utilize cutting-edge technology and sustainable practices to build structures that are not only durable but also environmentally conscious. Whether it’s constructing a modern home, renovating office space, or managing large-scale industrial developments, we tailor our solutions to meet each client's unique vision and needs.
          </p>
          <p className="text-gray-700 text-lg">
            From planning to execution, our focus is on delivering quality craftsmanship, timely completion, and customer satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
