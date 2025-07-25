// src/components/Workingmethod.jsx
import React from 'react';

import appointmentImg from '../assets/invoice.png';
import confirmImg from '../assets/confirm.png';
import arriveImg from '../assets/a.png';
import solvedImg from '../assets/solved.png';
import billingImg from '../assets/billing.png';

const steps = [
  {
    title: 'Make an Appointment',
    description: 'To make the appointment, fill the form with your problem or call us.',
    image: appointmentImg,
  },
  {
    title: 'Confirm',
    description: 'The Homebizz team will call and verify your order shortly.',
    image: confirmImg,
  },
  {
    title: 'Arrive Within Time',
    description: 'After verifying your order, we’ll arrive within 2 hours.',
    image: arriveImg,
  },
  {
    title: 'Your Problem Solved',
    description: 'Our experts fix your issue with care, no damage done.',
    image: solvedImg,
  },
  {
    title: 'Billing',
    description: 'We charge based on our standard rates — discounts apply.',
    image: billingImg,
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
              <img
                src={step.image}
                alt={step.title}
                className="w-16 h-16 mx-auto mb-3 object-contain"
              />
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
