import React from 'react';
 import about from '../assets/about.jpg'

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        
        
        <div className="w-full lg:w-4">
          <img 
            src={about}
            alt="Construction site" 
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Our Company</h2>
          <p className="text-gray-700 mb-4 text-lg">
            At HomeBizz Construction, we are committed to building excellence. With years of experience and a passionate team of professionals, we specialize in residential, commercial, and industrial construction projects.
          </p>
          <p className="text-gray-700 text-lg">
            From planning to execution, our focus is on delivering quality craftsmanship, timely completion, and customer satisfaction. We take pride in turning your vision into reality with durable, sustainable, and innovative construction solutions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
