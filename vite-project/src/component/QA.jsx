import React, { useState,useRef} from "react";
import { motion, useInView } from 'framer-motion';


const faqs = [
  {
    question: "❶ HomeBizz सेवा कसरी काम गर्छ ?",
    answer:
      "हामी अनुभवी इन्जिनियर र प्राविधिकहरूको टोलीबाट तपाईंको समस्या मूल्याङ्कन गर्छौं, समाधान योजना बनाउँछौं र तय गरिएको समयमा सेवा प्रदान गर्छौं।",
  },
  
  {
    question:
      "❷ मेरोमा inspection गर्नु पर्दैन, समस्या पहिल्यै थाहा छ। काम मात्र गर्नु पर्छ भने पनि HomeBizz ले गर्छ ?",
    answer:
      "हो, यदि समस्या पहिले नै स्पष्ट छ भने हामी सिधै कामको लागि सेवा दिन सक्छौं।",
  },
 
 
  {
    question: " ❸ किन HomeBizz सँगै काम गर्ने ?",
    answer:
      "हामी इमानदार, दक्ष र समयमै सेवा दिने हो। तपाईंको सन्तुष्टि नै हाम्रो प्राथमिकता हो।",
     
  },
];
const containerVariants = {
  hidden: {}, // no animation needed on container itself
  visible: {
    transition: {
      staggerChildren: 0.9, // children appear one by one, each delayed by 0.3s
    }
  }
};

// Child variants define how each feature animates
const childVariants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};


const QA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    
    <div className="py-20 bg-gradient-to-br from-white via-sky-50 to-white min-h-screen mt-5" id="faq">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="  text-xl font-bold text-center text-sky-700 mb-12">बारम्बार सोधिने प्रश्नहरू (FAQ)</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
ref={ref} 
              key={index}
               variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
                
              onClick={() => toggleFAQ(index)}
              className={`transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl cursor-pointer bg-white border border-gray-200 rounded-xl p-6 shadow-md ${
                openIndex === index ? " shadow-sky-300" : ""
              }`}
            >
              <motion.h3
                  variants={childVariants}
               className="text-xl font-semibold text-sky-700">{faq.question}</motion.h3>
              <div
                className={`mt-3 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0  opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QA;
