import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

// New Assets
import hb2 from '../assets/homebizz2.jpeg';
import hb3 from '../assets/homebizz3.jpeg';
import hb4 from '../assets/homebizz4.jpeg';
import hb5 from '../assets/homebizz5.jpeg';
import hb6 from '../assets/homebizz6.jpeg';
import hb7 from '../assets/homebizz7.jpeg';

const projectData = [
  {
    id: 1,
    title: "Modern Residential Villa",
    location: "Balkumari, Kathmandu",
    category: "Residential",
    image: hb2,
    description: "Premium living with contemporary design and seismic-resistant structural engineering.",
  },
  {
    id: 2,
    title: "Corporate High-Rise",
    location: "Minbhawan, Kathmandu",
    category: "Commercial",
    image: hb3,
    description: "Multi-story commercial complex featuring glass facades and smart utility systems.",
  },
  {
    id: 3,
    title: "Luxury Hillside Retreat",
    location: "Nagarkot, Bhaktapur",
    category: "Hospitality",
    image: hb4,
    description: "Boutique resort construction blending heritage aesthetics with modern structural safety.",
  },
  {
    id: 4,
    title: "Urban Housing Block",
    location: "Thimi, Bhaktapur",
    category: "Residential",
    image: hb5,
    description: "Optimized multi-unit development focused on sustainable lighting and ventilation.",
  },
  {
    id: 5,
    title: "Industrial Storage Hub",
    location: "Imadol, Lalitpur",
    category: "Industrial",
    image: hb6,
    description: "Large-span steel structure designed for heavy-duty logistics and operational efficiency.",
  },
  {
    id: 6,
    title: "Heritage Restoration",
    location: "Patan, Lalitpur",
    category: "Cultural",
    image: hb7,
    description: "Seismic retrofitting and restoration of a traditional landmark with modern reinforcement.",
  },
];

const Projects = () => {
  return (
    <section id='projects' className="py-16 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl px-4 border-l-4 border-cyan-500">
            <h4 className="text-cyan-600 font-bold uppercase tracking-[0.25em] mb-4 text-[10px]">Recent Portfolios</h4>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Evidence of <br /><span className="text-cyan-600">Engineering Mastery</span>
            </h2>
          </div>
          <button className="btn-cyan-elegant hidden md:flex !text-[11px] !px-8 !py-3 uppercase tracking-widest shadow-2xl">
            View All Projects
          </button>
        </div>

        <div className="grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.21, 1.11, 0.81, 0.99] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center md:hidden px-6">
          <button className="btn-cyan-elegant w-full !py-4 shadow-xl uppercase tracking-widest font-black">
            Explore Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
