// src/components/ServicesComponent.jsx
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Feature from "./Feature";
import renovation from "../assets/renovation.jpeg";
import realstateT from "../assets/real-state.png";
import { useNavigate } from "react-router-dom";

// OPTIONAL: If you want to import thumbnails, use this style
import contractingThumb from "../assets/contracting-icon.png";
import interiorThumb from "../assets/interior-icon.png";
import renovationThumb from "../assets/renovation-icon.png";

// Define our service data structure
const services = [
  {
    id: "contracting",
    title: "General Contracting",
    description:
      "Our general contracting services deliver excellence in construction across diverse sectors. With a focus on quality, safety, and timely delivery, we handle projects of all scales from infrastructure development to specialized industrial facilities.",
    image: renovation, // Large display image
    thumbnail: contractingThumb, // Small button image
    buttonText: "Contracting",
  },
  {
    id: "Interior Fit-Out",
    title: "Interior Fit-Out",
    description:
      "Our Interior Fit-Out services specialize in transforming empty spaces into fully functional and visually appealing environments. From partitions, flooring, and ceilings to custom furniture, lighting, and final finishes, we handle every detail to bring your design vision to life.",
    image: "/banners/interior.jpg", // Replace with actual banner image
    thumbnail: interiorThumb,
    buttonText: "Interior Fit-Out",
  },
  {
    id: "realestate",
    title: "Realestate",
    description:
      "Our real estate division focuses on premium property development and management across residential and commercial sectors. We identify high-potential locations and create sustainable, modern spaces that meet the growing demands of urban communities.",
    image: realstate,
    thumbnail: realestateThumb,
    buttonText: "Real Estate",
  },
  {
    id: "Renovation",
    title: "Renovation",
    description:
      "We develop tourism infrastructure that showcases natural beauty while preserving cultural heritage. Our projects include eco-friendly resorts, adventure tourism facilities, and cultural experience centers that contribute to sustainable economic growth.",
    image: "/banners/renovation-full.jpg",
    thumbnail: renovationThumb,
    buttonText: "Renovation",
  },
];

const Ourservices = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const navigate = useNavigate();

  return (
    <>
      <div id="ourservices" className="px-4 sm:px-6 lg:px-20">
        <h1 className="text-2xl font-bold text-center mb-10 text-cyan-600">
          Our Services
        </h1>
        <div className="bg-white min-h-screen py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar with service buttons */}
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
                      {service.thumbnail && (
                        <img
                          src={service.thumbnail}
                          alt={`${service.title} icon`}
                          className="w-10 h-10 rounded object-cover"
                        />
                      )}
                      <span className="font-medium">{service.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Large Image Display */}
              <div className="lg:w-2/5">
                <div className="rounded-lg overflow-hidden h-full">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Description Panel */}
              <div className="lg:w-1/3 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeService.title}
                </h2>
                <p className="text-gray-700 mb-8">
                  {activeService.description}
                </p>
                <button
                  onClick={() =>
                    navigate(`/${activeService.id.toLowerCase()}`)
                  }
                  className="bg-sky-600 text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit hover:bg-sky-900 transition-colors"
                >
                  {activeService.buttonText}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Feature Section */}
          <Feature />
        </div>
      </div>
    </>
  );
};

export default Ourservices;
