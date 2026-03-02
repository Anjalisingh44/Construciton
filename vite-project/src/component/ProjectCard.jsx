import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      {/* Image Container with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-widest shadow-sm">
            {project.category}
          </span>
        </div>
        {/* Subtle hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-cyan-600 mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs font-bold tracking-wide">{project.location}</span>
        </div>

        <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-500 line-clamp-2 mb-6 text-xs leading-relaxed opacity-90">
          {project.description}
        </p>

        <div className="mt-auto">
          <button
            onClick={() => navigate(`/portfolio/${project.id}`)}
            className="flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-[0.15em] group/btn border-b-2 border-transparent hover:border-cyan-500 transition-all pb-1"
          >
            Project Details
            <FaArrowRight className="w-2.5 h-2.5 text-cyan-500 transition-transform group-hover/btn:translate-x-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
