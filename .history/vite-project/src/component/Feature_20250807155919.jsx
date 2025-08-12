
import React from "react";
import { CheckCircle } from "lucide-react";
import renovation from '../assets/renovation.jpeg'

const features = [
  "Customized solutions for your specific business needs",
  "Expert team with years of industry experience",
  "Data-driven approach for measurable results",
  "Ongoing support and regular performance reviews",
  "Scalable services that grow with your business",
  "Transparent pricing with no hidden fees",
];

const Feature = () => {
  return (
    <section className="py-20 ">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-xl  font-bold mb-6 text-cyan-600">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              We're committed to delivering exceptional value and results that
              exceed your expectations. Our approach combines innovation,
              expertise, and personalized attention.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <Motion.span className="text-slate-700 dark:text-slate-300">
                    {feature}
                              initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
                  </Motion.span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 bg-slate-200 dark:bg-slate-800 rounded-xl aspect-video overflow-hidden">
           
              <img src={renovation} alt=""    className="w-full h-full object-cover"/>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
