import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// Assets
import hb2 from '../assets/homebizz2.jpeg';
import hb3 from '../assets/homebizz3.jpeg';
import hb4 from '../assets/homebizz4.jpeg';
import hb5 from '../assets/homebizz5.jpeg';
import hb6 from '../assets/homebizz6.jpeg';
import hb7 from '../assets/homebizz7.jpeg';

const allProjects = [
    {
        id: 1,
        title: "The Vertex Villa",
        location: "Balkumari, Kathmandu",
        category: "Residential",
        image: hb2,
        area: "4,500 Sq. Ft.",
        status: "Completed",
        description: "A masterclass in modern residential architecture. This villa features high-performance seismic dampers and a cantilevered structural design that pushes the boundaries of private living. Homebizz oversaw every aspect, from the reinforced concrete foundations to the premium glass-metal finish.",
        specs: ["Seismic-Resistant Structure", "Smart Climate Control", "Custom Steel Framework"]
    },
    {
        id: 2,
        title: "Skyline Corporate Hub",
        location: "Minbhawan, Kathmandu",
        category: "Commercial",
        image: hb3,
        area: "25,000 Sq. Ft.",
        status: "Completed",
        description: "A flagship commercial landmark designed for the next generation of business. This high-rise utilizes a progressive glass-curtain wall system and a high-load bearing structural core. It serves as a gold standard for urban engineering in Nepal.",
        specs: ["Advanced Facade Engineering", "Fire-Safe Infrastructure", "High-Load Foundation"]
    },
    {
        id: 3,
        title: "Zenith Hillside Resort",
        location: "Nagarkot, Bhaktapur",
        category: "Hospitality",
        image: hb4,
        area: "12,000 Sq. Ft.",
        status: "In Progress",
        description: "Integrating luxury with the rugged landscape. This project required complex hillside stabilization and site-specific structural adaptations to ensure safety without compromising the breathtaking Himalayan views.",
        specs: ["Terrain Stabilization", "Heritage-Infused Finish", "Eco-Friendly Construction"]
    },
    {
        id: 4,
        title: "Urban Housing Block",
        location: "Thimi, Bhaktapur",
        category: "Residential",
        image: hb5,
        area: "15,000 Sq. Ft.",
        status: "Completed",
        description: "An optimized multi-unit development focused on sustainable lighting and ventilation. This project focuses on high-density urban living with localized engineering solutions.",
        specs: ["Thermal Insulation", "Rainwater Harvesting", "Modular Design"]
    },
    {
        id: 5,
        title: "Industrial Storage Hub",
        location: "Imadol, Lalitpur",
        category: "Industrial",
        image: hb6,
        area: "35,000 Sq. Ft.",
        status: "Completed",
        description: "Large-span steel structure designed for heavy-duty logistics and operational efficiency. Features advanced structural steel trusses and high-durability flooring systems.",
        specs: ["Steel Frame Precision", "Heavy-Duty Flooring", "Optimized Logistics Flow"]
    },
    {
        id: 6,
        title: "Heritage Restoration",
        location: "Patan, Lalitpur",
        category: "Cultural",
        image: hb7,
        area: "8,000 Sq. Ft.",
        status: "Completed",
        description: "Seismic retrofitting and restoration of a traditional landmark. We used innovative carbon-fiber reinforcement techniques to preserve the heritage aesthetic while ensuring 21st-century safety.",
        specs: ["FRP Reinforcement", "Traditional Craftsmanship", "Seismic Retrofitting"]
    }
];

const Portfolio = ({ id: staticId }) => {
    const navigate = useNavigate();
    const { id: paramId } = useParams();

    // Find project by ID (either from URL or from static prop)
    const currentId = paramId || staticId;
    const project = allProjects.find(p => p.id === parseInt(currentId));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentId]);

    if (currentId && !project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-black mb-4">Project Not Found</h2>
                <button onClick={() => navigate('/')} className="btn-cyan-elegant">Return Home</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pb-20 pt-[120px]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors uppercase text-[10px] font-black tracking-widest mb-8"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>

                {project ? (
                    // Single Project View
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start"
                    >
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="overflow-hidden rounded-[2rem] shadow-2xl border-4 border-slate-50">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-white/20">
                                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{project.category}</p>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="w-full lg:w-1/2 pt-4">
                            <div className="flex items-center gap-2 text-cyan-600 mb-6 font-black uppercase text-[11px] tracking-[0.3em]">
                                <MapPin className="w-4 h-4" />
                                {project.location}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">{project.title}</h1>

                            <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium opacity-90 border-l-4 border-cyan-500 pl-8">
                                {project.description}
                            </p>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {project.specs.map((spec, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                                        <span className="text-[11px] font-black uppercase text-slate-700 tracking-wider font-montserrat">{spec}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-8 py-6 border-t border-slate-100 pt-10">
                                <div>
                                    <h5 className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Project Status</h5>
                                    <p className="text-sm font-black text-slate-900">{project.status}</p>
                                </div>
                                <div className="w-px h-8 bg-slate-200"></div>
                                <div>
                                    <h5 className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Construction Scale</h5>
                                    <p className="text-sm font-black text-slate-900">{project.area}</p>
                                </div>
                            </div>

                            <div className="mt-12">
                                <button
                                    onClick={() => navigate('/#contact')}
                                    className="btn-cyan-elegant !px-12 !py-4 uppercase tracking-widest"
                                >
                                    Inquire About Similar Works
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    // Default All Projects View (Fallback)
                    <div>
                        <div className="border-l-4 border-cyan-500 pl-8 mb-16">
                            <h4 className="text-cyan-600 font-black uppercase tracking-[0.4em] text-[11px] mb-4">Official Portfolio</h4>
                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
                                Our Complete <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Inventory.</span>
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {allProjects.map(p => (
                                <div key={p.id} onClick={() => navigate(`/portfolio/${p.id}`)} className="cursor-pointer group">
                                    <div className="rounded-3xl overflow-hidden mb-4 shadow-xl">
                                        <img src={p.image} className="aspect-video object-cover transition-transform group-hover:scale-105" />
                                    </div>
                                    <h3 className="font-black text-lg text-slate-900 uppercase tracking-widest">{p.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
