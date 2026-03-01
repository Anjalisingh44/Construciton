import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does HomeBizz service work?",
    questionNp: "HomeBizz सेवा कसरी काम गर्छ ?",
    answer: "We assess your requirements with our expert engineers, create a tailored execution plan, and deliver services within the committed timeline.",
    answerNp: "हामी अनुभवी इन्जिनियर र प्राविधिकहरूको टोलीबाट तपाईंको समस्या मूल्याङ्कन गर्छौं, समाधान योजना बनाउँछौं र तय गरिएको समयमा सेवा प्रदान गर्छौं।",
  },
  {
    question: "Can HomeBizz execute if I already know the issue?",
    questionNp: "मेरोमा inspection गर्नु पर्दैन, समस्या पहिल्यै थाहा छ। काम मात्र गर्नु पर्छ भने पनि HomeBizz ले गर्छ ?",
    answer: "Yes, if the requirement is clear, we can proceed directly to execution and deployment of our specialized teams.",
    answerNp: "हो, यदि समस्या पहिले नै स्पष्ट छ भने हामी सिधै कामको लागि सेवा दिन सक्छौं।",
  },
  {
    question: "Why choose to work with HomeBizz?",
    questionNp: "किन HomeBizz सँगै काम गर्ने ?",
    answer: "We prioritize integrity, technical expertise, and on-time delivery. Your satisfaction and structural safety are our primary goals.",
    answerNp: "हामी इमानदार, दक्ष र समयमै सेवा दिने हो। तपाईंको सन्तुष्टि नै हाम्रो प्राथमिकता हो।",
  }
];

const QA = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-slate-50 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-cyan-500 mr-2" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Support Center</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Common Questions</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">Everything you need to know about our engineering and construction processes.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`group border rounded-2xl transition-all duration-300 ${openIndex === index ? "border-cyan-200 bg-cyan-50/20 shadow-sm" : "border-slate-100 hover:border-slate-200"
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex-grow pr-4">
                  <h3 className={`text-sm font-bold transition-colors ${openIndex === index ? "text-cyan-700" : "text-slate-800"}`}>
                    {faq.question}
                  </h3>
                  <span className="block text-[11px] text-slate-400 mt-1 font-medium italic opacity-70">
                    {faq.questionNp}
                  </span>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? "bg-cyan-500 text-white rotate-0" : "bg-slate-50 text-slate-400"
                  }`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-cyan-100/50 mt-2">
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">
                        {faq.answer}
                      </p>
                      <p className="text-slate-500 text-xs leading-relaxed italic border-l-2 border-cyan-100 pl-4">
                        {faq.answerNp}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QA;
