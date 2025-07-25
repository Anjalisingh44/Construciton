import React from 'react';
import appointmentImg from '../assets/appointment.png';
import confirmImg from '../assets/confirm.png';
import arriveImg from '../assets/arrive.png';
import solvedImg from '../assets/solved.png';
import billingImg from '../assets/billing.png';


const steps = [
  {
    title: 'Make a Appointment',
    description: 'To make the Appointment fill the form with problem or either Call us.',
    o
  },
  {
    title: 'Confirm',
    description: 'The Homebizz team will call and verify your order within a few time.',
    icon: <FaCheckCircle className="text-5xl mx-auto text-green-400 mb-3" />,
  },
  {
    title: 'Arrive Within time',
    description:
      'After verifying your order, we will aim to arrive at your doorstep within 2 hours.',
    icon: <FaClock className="text-5xl mx-auto text-yellow-400 mb-3" />,
  },
  {
    title: 'Your Problem Solved',
    description:
      'Homebizz experts solve your problems carefully without causing any damage.',
    icon: <FaTools className="text-5xl mx-auto text-pink-400 mb-3" />,
  },
  {
    title: 'Billing',
    description:
      'We will charge according to our rates with a discount applied.',
    icon: <FaReceipt className="text-5xl mx-auto text-red-400 mb-3" />,
  },
];

const Workingmethod = () => {
  return (
    <section className="w-screen bg-gradient-to-br from-white via-sky-50 to-white text-black py-16">
      <div className="px-6 max-w-[1400px] mx-auto">
        <h2 className="text-2xl text-cyan-600 font-bold text-center mb-12">
          Homebizz Working Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-xl shadow">
              {step.icon}
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workingmethod;
