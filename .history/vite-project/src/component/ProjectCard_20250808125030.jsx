import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:scale-105 hover:shadow-xl duration-300">
     <div>
      
     </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{project.location}</p>
        <p className="text-gray-700 text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
