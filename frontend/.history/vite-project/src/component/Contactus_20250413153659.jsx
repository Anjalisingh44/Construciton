import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      setErrors({});
      alert('Form submitted!');
    }
  };

  return (
    <div className="w-full max-w-[600px] mx-auto py-20 px-4 text-center">
      <h2 className="text-[48px] font-bold text-[#2D2EFF] mb-2 font-['Roboto']">Contact us</h2>
      <p className="text-[#4B5563] mb-10 font-['Roboto']">
        Speak with our team to see how we can help your business.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 text-left font-['Roboto']">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your best contact number"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Business or company name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 h-[120px] resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <button
          type="submit"
          className="bg-[#2D2EFF] text-white rounded-xl px-8 py-3 w-full hover:bg-[#1a1ad6] transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
