import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Feature from "./Feature";
import design from "../assets/D&B.jpeg";
import interior from '../assets/interior.jpeg';
import renovation from '../assets/renovation.jpeg';
import architect from '../assets/renovation.jpeg';
import contractingThumb from "../assets/build.png";
import renovationThumb from "../assets/renovationser.png";
import structuralThumb from "../assets/structure.png";
import interiorThumb from "../assets/interior_design.png";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "Design",
    title: "Design and Build",
    thumbnail: contractingThumb,
    description: "Integrated design and construction services for seamless project delivery. We manage everything from initial concept to the final structure.",
    image: design,
    buttonText: "Explore Design & Build",
  },
  {
    id: "renovation",
    title: "Renovation and Repair",
    thumbnail: renovationThumb,
    description: "Giving new life to existing structures. Our renovation experts handle structural repairs, aesthetic upgrades, and complete modernizations.",
    image: renovation,
    buttonText: "View Renovation Services",
  },
  {
    id: "interior",
    title: "Interior Design",
    thumbnail: interiorThumb,
    description: "Creating functional and beautiful interior spaces. We specialize in custom finishes, spatial planning, and high-end residential interiors.",
    image: interior,
    buttonText: "See Interior Portfolios",
  },
  {
    id: "architect",
    title: "Architectural and Structural Design",
    thumbnail: structuralThumb,
    description: "Precision-driven architectural and structural planning that combines aesthetic beauty with engineering integrity.",
    image: architect,
    buttonText: "Architectural Solutions",
  },
];

const Ourservices = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const navigate = useNavigate();

  return (
    <section id="ourservices" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h4 className="text-cyan-600 font-bold uppercase tracking-widest mb-3 text-xs">What We Offer</h4>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Mastering Every Phase of <br /><span className="text-cyan-600">Construction</span></h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Service Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left border ${activeService.id === service.id
                  ? "bg-slate-900 border-slate-900 shadow-lg translate-x-1"
                  : "bg-white border-slate-100 text-slate-600 hover:border-slate-200"
                  }`}
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100 bg-slate-50">
                  <img src={service.thumbnail} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className={`font-bold text-base ${activeService.id === service.id ? "text-white" : "text-slate-800"}`}>
                    {service.title}
                  </h3>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${activeService.id === service.id ? "text-cyan-400 translate-x-0 opacity-100" : "text-slate-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                  }`} />
              </button>
            ))}
          </div>

          {/* Service Display Content */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row"
              >
                <div className="w-full md:w-1/2 h-[300px]">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-px bg-cyan-500"></span>
                    <span className="text-cyan-600 font-bold uppercase tracking-widest text-[10px]">Excellence Defined</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{activeService.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {activeService.description}
                  </p>
                  <button
                    onClick={() => navigate(`/${activeService.id.toLowerCase()}`)}
                    className="btn-cyan-elegant !text-[11px] !px-8 !py-3 w-fit uppercase tracking-widest shadow-xl"
                  >
                    {service_label(activeService.id)}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16">
          <Feature />
        </div>
      </div>
    </section>
  );
};

// Helper for button labels
const service_label = (id) => {
  if (id === "Design") return "Design Details";
  if (id === "renovation") return "Renovation Plans";
  if (id === "interior") return "Interior Gallery";
  return "Engineering Solutions";
};

export default Ourservices;
