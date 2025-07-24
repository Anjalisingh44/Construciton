// src/components/ServicesComponent.jsx
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Feature from "./Feature";

// Define our service data structure
const services = [
  {
    id: "contracting",
    title: "General Contracting",
    icon: "🏗️",
    description:
      "Our general contracting services deliver excellence in construction across diverse sectors. With a focus on quality, safety, and timely delivery, we handle projects of all scales from infrastructure development to specialized industrial facilities.",
    image: "/placeholder.svg",
    buttonText: "Contracting",
  },
  {
    id: "hydropower",
    title: "Hydropower",
    icon: "⚡",
    description:
      "The sustainable development of immense hydropower potential in the country is seen as the engine for Nepal's economic prosperity. This is possible through serving rising electricity demand in the domestic market and by securing a key role in ensuring appropriate generation mix towards regional energy security in South Asia.",
    image: "/placeholder.svg",
    buttonText: "Hydropower",
  },
  {
    id: "realestate",
    title: "Realestate",
    icon: "🏠",
    description:
      "Our real estate division focuses on premium property development and management across residential and commercial sectors. We identify high-potential locations and create sustainable, modern spaces that meet the growing demands of urban communities.",
    image: "/placeholder.svg",
    buttonText: "Real Estate",
  },
  {
    id: "Renovation",
    title: "Renovation",
    icon: "🏞️",
    description:
      "We develop tourism infrastructure that showcases natural beauty while preserving cultural heritage. Our projects include eco-friendly resorts, adventure tourism facilities, and cultural experience centers that contribute to sustainable economic growth.",
    image: "/placeholder.svg",
    buttonText: "Renovation",
  },
 
];

const Ourservices = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
<div >
  <h1 className="text-3xl font-bold text-center mb-10"> Our Services</h1>
<div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
        
          <div className="lg:w-1/4">
            <div className="space-y-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full flex items-center gap-3 p-4 rounded-md transition-colors ${
                    activeService.id === service.id
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="font-medium">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-2/5">
            <div className="rounded-lg overflow-hidden h-full">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {activeService.title}
            </h2>
            <p className="text-gray-700 mb-8">{activeService.description}</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit hover:bg-red-700 transition-colors">
              {activeService.buttonText}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <Feature/>
    </div>
</div>
    
  );
};

export default Ourservices;
