import React, { useState } from "react";

const faqs = [
  {
    question: "❶ HomeBizz सेवा कसरी काम गर्छ ?",
    answer:
      "हामी अनुभवी इन्जिनियर र प्राविधिकहरूको टोलीबाट तपाईंको समस्या मूल्याङ्कन गर्छौं, समाधान योजना बनाउँछौं र तय गरिएको समयमा सेवा प्रदान गर्छौं।",
  },
  {
    question: "❷ अफर हेर्नको लागि शुल्क लाग्छ त ?",
    answer:
      "हामी अफर हेर्नु वा परामर्श लिनुमा कुनै शुल्क लिंदैनौं। तपाईं निःशुल्क सुझाव प्राप्त गर्न सक्नुहुन्छ।",
  },
  {
    question:
      "❸ मेरोमा inspection गर्नु पर्दैन, समस्या पहिल्यै थाहा छ। काम मात्र गर्नु पर्छ भने पनि HomeBizz ले गर्छ ?",
    answer:
      "हो, यदि समस्या पहिले नै स्पष्ट छ भने हामी सिधै कामको लागि सेवा दिन सक्छौं।",
  },
  {
    question: "❹ तपाईंहरूको उपकरणले भित्ताभित्र हेर्न सक्छ ?",
    answer:
      "हामीसँग आधुनिक उपकरणहरू छन् जसले भित्ताभित्रको अवस्था स्क्यान गर्न सक्छ तर x-ray जस्तो होइन। यो सुरक्षित र प्रभावकारी प्रविधि हो।",
  },
  {
    question: "❺ यो One-Day Painting मेरो नयाँ घरमा गर्न मिल्छ त ?",
    answer:
      "हो, हाम्रो One-Day Painting सेवा नयाँ घर वा पुरानो घर दुवैमा उपयुक्त छ। हामी छिटो र गुणस्तरीय पेन्टिङ सेवा दिन्छौं।",
  },
  {
    question: "❻ किन HomeBizz सँगै काम गर्ने ?",
    answer:
      "हामी इमानदार, दक्ष र समयमै सेवा दिने हो। तपाईंको सन्तुष्टि नै हाम्रो प्राथमिकता हो।",
  },
];

const QA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-18 bg-gradient-to-br from-white via-sky-50 to-white min-h-screen mt-5" id="faq">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className=" mt-5 text-xl font-bold text-center text-sky-700 mb-12">बारम्बार सोधिने प्रश्नहरू (FAQ)</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl cursor-pointer bg-white border border-gray-200 rounded-xl p-6 shadow-md ${
                openIndex === index ? " shadow-sky-300" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-sky-700">{faq.question}</h3>
              <div
                className={`mt-3 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0  opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QA;
