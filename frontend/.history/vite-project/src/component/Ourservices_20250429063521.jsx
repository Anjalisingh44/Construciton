import React from "react";

const services = [
  {
    title: "Construction (RCC & Steel Structure)",
    description:
      "Construction is the ultimate phase where the design values and details take a tangible form.",
    image:'/assets/renovationi.png',
    link: "#",
  },
  {
    title: "Renovation",
    description:
      "We are your trusted source for professional renovation services with quality craftsmanship.",
    image:'/assets/renovationi.png',
    link: "#",
  },
  {
    title: "Exterior / Interior Designs",
    description:
      "We listen to your needs and create homes, commercial complexes, hotels, and more.",
    image:'/assets/renovationi.png',
    link: "#",
  },
];

const Ourservices = () => {
  return (
    <section id='ourservices' className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Quality Services
          </h2>
          <div className="w-24 h-1 mx-auto bg-blue-500 rounded mt-4 mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive construction and development services tailored to meet
            your specific needs with the highest standards of quality and craftsmanship.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourservices;
