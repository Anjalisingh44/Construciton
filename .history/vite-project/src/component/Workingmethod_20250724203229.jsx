import React from 'react';
import { FaCalendarAlt, FaCheckCircle, FaClock, FaTools, FaReceipt } from 'react-icons/fa';

const steps = [
  {
    title: 'Make a Appointment',
    description: 'To make the Appointment fill the form with problem or either Call us.',
    icon: <FaCalendarAlt className="text-5xl mx-auto text-orange-400 mb-3" />,
  },
  {
    title: 'Confirm',
    description: 'The Homeplex team will call and verify your order within a few minutes to half an hour.',
    icon: <FaCheckCircle className="text-5xl mx-auto text-green-400 mb-3" />,
  },
  {
    title: 'Arrive Within 2 hrs',
    description:
      'After verifying your order, we will aim to arrive at your doorstep within 2 hours. We will then provide an estimate for the billing based on the work needed.',
    icon: <FaClock className="text-5xl mx-auto text-yellow-400 mb-3" />,
  },
  {
    title: 'Your Problem Solved',
    description:
      'Homeplex experts solve your problems carefully without causing any damage or displaying unusual behaviors.',
    icon: <FaTools className="text-5xl mx-auto text-pink-400 mb-3" />,
  },
  {
    title: 'Billing',
    description:
      'We will charge according to our rates with a discount applied. If you encounter a situation where the homeplex experts are charging higher rates, please contact Homeplex for assistance.',
    icon: <FaReceipt className="text-5xl mx-auto text-red-400 mb-3" />,
  },
];

const Workingmethod = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-sky-50 to-white text-black py-12">
      <h2 className="text-2xl text-cyan-600 font-bold text-center mb-12">
        Homebizz Working Process
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
        {steps.map((step, index) => (
          <div key={index} className="text-center bg-white p-4 rounded-lg shadow">
            {step.icon}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm leading-snug">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workingmethod;
