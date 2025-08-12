// src/components/WhatsAppChat.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChat = () => {
  const phoneNumber = '9779709848068';

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-2 right-4 z-50 bg-green-500 text-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl sm:text-4xl" />
    </a>
  );
};

export default WhatsAppChat;
