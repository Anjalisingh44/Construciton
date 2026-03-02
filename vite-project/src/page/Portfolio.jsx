import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Assets
import hb2 from '../assets/homebizz2.jpeg';
import hb3 from '../assets/homebizz3.jpeg';
import hb4 from '../assets/homebizz4.jpeg';
import hb5 from '../assets/homebizz5.jpeg';
import hb6 from '../assets/homebizz6.jpeg';
import hb7 from '../assets/homebizz7.jpeg';

const detailedProjects = [
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
    }
];

const Portfolio = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pb-20 pt-[120px]">
            {/* Header Section */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors uppercase text-[10px] font-black tracking-widest mb-8"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>

                <div className="border-l-4 border-cyan-500 pl-8">
                    <h4 className="text-cyan-600 font-black uppercase tracking-[0.4em] text-[11px] mb-4">Official Portfolio</h4>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Landmarks.</span>
                    </h1>
                </div>
            </div>

            {/* Project Grid */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
                {detailedProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                    >
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="overflow-hidden rounded-[2rem] shadow-2xl border-4 border-slate-50">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                            </div>

                            {/* Image Badge */}
                            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-white/20">
                                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{project.category}</p>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-2 text-cyan-600 mb-6 font-black uppercase text-[11px] tracking-[0.3em]">
                                <MapPin className="w-4 h-4" />
                                {project.location}
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">{project.title}</h2>

                            <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium opacity-90 italic border-l-2 border-slate-100 pl-6">
                                "{project.description}"
                            </p>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {project.specs.map((spec, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                                        <span className="text-[11px] font-black uppercase text-slate-700 tracking-wider">{spec}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-8 py-6 border-t border-slate-100 pt-10">
                                <div>
                                    <h5 className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Status</h5>
                                    <p className="text-sm font-black text-slate-900">{project.status}</p>
                                </div>
                                <div className="w-px h-8 bg-slate-200"></div>
                                <div>
                                    <h5 className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Scale</h5>
                                    <p className="text-sm font-black text-slate-900">{project.area}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-40 bg-slate-900 py-32 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to Build Your <br /> Own Landmark?</h2>
                    <p className="text-slate-400 text-sm md:text-lg mb-12 max-w-2xl mx-auto uppercase tracking-widest">Connect with our structural hub for a specialist consultation.</p>
                    <button
                        onClick={() => navigate('/#contactus')}
                        className="btn-cyan-elegant !text-[12px] !px-16 !py-5 uppercase tracking-[0.3em] shadow-2xl"
                    >
                        Start Your Inquiry
                    </button>
                </div>

                {/* Decorative Background for CTA */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-600/5 -skew-x-12 translate-x-1/2"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
            </div>
        </div>
    );
};

export default Portfolio;
