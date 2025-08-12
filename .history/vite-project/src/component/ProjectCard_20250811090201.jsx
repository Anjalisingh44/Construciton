import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <>
    <div className= "bg-white rounded-2xl shadow-md overflow-hidden transition hover:scale-105 hover:shadow-xl duration-300">
     
        <div className="w-full h-52 overflow-hidden rounded-lg shadow-md">
  <img
    src={project.image}
    alt={project.title}
    className="  h-full w-full object-cover object-top "
  />
</div>

      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-sm text-lime-600 font-semibold mb-2">{project.location}</p>
        <p className="text-gray-700 text-sm">{project.description}</p>
         <button className="flex items-center text-cyan-600 hover:text-cyan-800 font-medium group">
          View More
          <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 text-lime-600" />
        </button>
      </div>
    </div>
    </>
  );
};

export default ProjectCard;
