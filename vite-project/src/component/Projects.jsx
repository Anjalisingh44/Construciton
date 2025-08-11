import React from "react";
import ProjectCard from "./ProjectCard";
import renovation from '../assets/abouttt.png'
import dhapasi from '../assets/Dhapasi.png'
import Bouddha from '../assets/Bouddha.png'
const projectData = [
  {
    id: 1,
    title: "Residential Building",
    location: "Thimi, Bhaktapur",
    image: renovation,
    description: ".",
  },
  {
    id: 2,
    title: "Dhapasi Heights Residency",
    location: "Dhpasi, Kathmandu",
    image: dhapasi,
    description: ".",
  },
  {
    id: 3,
    title: "Bouddha Resident",
    location: "Boudha, Kathmandu",
    image: Bouddha,
    description: ".",
  },
];

const Projects = () => {
  return (
    <section id='projects' className="px-6 py-12 bg-gradient-to-br from-white via-sky-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-cyan-600">Our Projects</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
