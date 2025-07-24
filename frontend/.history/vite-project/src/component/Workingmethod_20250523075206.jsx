import React from 'react';
import { FaCalendarCheck, FaPhone, FaClock, FaCheckCircle, FaReceipt } from 'react-icons/fa';

const steps = [
  {
    title: 'Make a Appointment',
    description: 'To make the Appointment fill the form with problem or either Call us.',
    icon: <FaCalendarCheck className="text-4xl text-sky-600 mb-2" />,
  },
  {
    title: 'Confirm',
    description: 'The Homeplex team will call and verify your order within a few minutes to half an hour.',
    icon: <FaCheckCircle className="text-4xl text-sky-600 mb-2" />,
  },
  {
    title: 'Arrive Within 2 hrs',
    description:
      'After verifying your order, we will aim to arrive at your doorstep within 2 hours. We will then provide an estimate for the billing based on the work needed.',
    icon: <FaClock className="text-4xl text-sky-600 mb-2" />,
  },
  {
    title: 'Your Problem Solved',
    description:
      'Homeplex experts solve your problems carefully without causing any damage or displaying unusual behaviors.',
    icon: <FaCheckCircle className="text-4xl text-sky-600 mb-2" />,
  },
  {
    title: 'Billing',
    description:
      'We will charge according to our rates with a discount applied. If you encounter a situation where the Homeplex experts are charging higher rates, please contact Homeplex for assistance.',
    icon: <FaReceipt className="text-4xl text-sky-600 mb-2" />,
  },
];

const Workingmethod= () => {
  return (
    <section className="bg-teal-700 text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Homeplex Working Process</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
        {steps.map((step, index) => (
          <div key={index} className="bg-teal-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center">{step.icon}</div>
            <h3 className="text-lg font-bold mt-2 mb-2">{step.title}</h3>
            <p className="text-sm text-white">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workingmethod;
