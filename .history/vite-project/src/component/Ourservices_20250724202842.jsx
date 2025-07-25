// src/components/ServicesComponent.jsx
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Feature from "./Feature";
import renovation from '../assets/renovation.jpeg'
import { useNavigate } from "react-router-dom";
import Workingmethod from "./Workingmethod";


// Define our service data structure
const services = [
  
  {
    id: "contracting",
    title: "General Contracting",
    icon: "🏗️",
    description:
      "Our general contracting services deliver excellence in construction across diverse sectors. With a focus on quality, safety, and timely delivery, we handle projects of all scales from infrastructure development to specialized industrial facilities.",
    image: renovation,
    buttonText: "Contracting",
  },
  {
    id: "Interior Fit-Out",
    title: "Interior Fit-Out",
    icon: "🛋️",
    description:"Our Interior Fit-Out services specialize in transforming empty spaces into fully functional and visually appealing environments. From partitions, flooring, and ceilings to custom furniture, lighting, and final finishes, we handle every detail to bring your design vision to life. Whether it's a home, office, or commercial space, we ensure quality craftsmanship, timely execution, and a space that truly reflects your style and needs.",
    buttonText: "Interior Fit-Out",
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
  const navigate = useNavigate();

  return (
<div  id='ourservices' className="px-4 sm:px-6 lg:px-20">
  <h1 className="text-2xl font-bold text-center mb-10 text-cyan-600"> Our Services</h1>
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
                      ? "bg-sky-600 text-white"
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
            
            <button onClick={() =>   navigate(`/${activeService.id.toLowerCase()}`)} className="bg-sky-600 text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit hover:bg-sky-900 transition-colors">
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
 <div className="w-full">
       <Workingmethod/>

     </div>