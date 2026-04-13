import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, FlaskConical, TestTube, Cpu, MessageSquare, Activity, Shield, Search, Network, Layers, Brain, Database, Globe, Wind, Atom } from 'lucide-react';

const PharmaShowcase: React.FC = () => {
    const leftCol = [
        {
            id: 'bio',
            name: "Biology Quantis",
            theme: "from-lime-400 to-emerald-500",
            items: [
                { title: "GenesysOmics", desc: "AI-driven target discovery using deep learning on multi-omics data for precise therapeutic prioritization.", icon: <Microscope size={18} /> },
                { title: "BioForge AI", desc: "Transformer-based architectures for de novo protein design and high-affinity antibody optimization.", icon: <Layers size={18} /> },
                { title: "Auto Lab OS", desc: "Next-gen automated lab OS orchestrating autonomous robotics and real-time experiment tracking.", icon: <Cpu size={18} /> }
            ]
        },
        {
            id: 'llm',
            name: "Large Language of Life Models (LLLMs)",
            theme: "from-emerald-400 to-cyan-500",
            items: [
                { title: "LifespanAI", desc: "Aging-clock foundation models for longitudinal healthspan analytics and age-related target ID.", icon: <Brain size={18} /> },
                { title: "Clinomics Engine", desc: "Multimodal synthesis engine for cross-referencing clinical phenotypes with multi-omics signatures.", icon: <Database size={18} /> },
                { title: "Multispecies & Tissue engine", desc: "Multi-tissue, multi-species foundation model for systemic biological simulations at cellular resolution.", icon: <Network size={18} /> }
            ]
        }
    ];

    const centerCol = {
        name: "Chemistry Quantis",
        theme: "from-cyan-400 to-blue-600",
        items: [
            { title: "Generative Chemistry", desc: "Diffusion-based generative models for rapid hit identification and scaffold hopping with high peak accuracy.", icon: <FlaskConical size={18} /> },
            { title: "Retro Forge", desc: "Deep learning trajectory prediction for complex synthetic routes and reaction yield optimization.", icon: <TestTube size={18} /> },
            { title: "Model Forge", desc: "Customizable neural architectures specifically optimized for proprietary in-house molecular datasets.", icon: <Cpu size={18} /> },
            { title: "DynamixBio", desc: "End-to-end molecular dynamics workflows with atomic-level precision for protein-ligand stability.", icon: <Network size={18} /> },
            { title: "DrugSafe Engine", desc: "Predictive profiling of pharmacokinetics and toxicity potential to minimize late-stage clinical attrition.", icon: <Shield size={18} /> },
            { title: "SpaceMol", desc: "High-dimensional chemical space visualization and latent representation analysis for SAR discovery.", icon: <Globe size={18} /> },
            { title: "BioLang AI", desc: "Natural and chemical language unified model for seamless technical documentation and lab interaction.", icon: <MessageSquare size={18} /> }
        ]
    };

    const rightCol = [
        {
            id: 'med',
            name: "Medicine",
            theme: "from-violet-400 to-indigo-600",
            items: [
                { title: "QuantisClinical", desc: "Predictive trial simulations combining biological insights with historical clinical trial performance analytics.", icon: <Activity size={18} /> }
            ]
        },
        {
            id: 'sci',
            name: "QuantisScience",
            theme: "from-teal-400 to-green-500",
            items: [
                { title: "DeepResearchAI", desc: "Agentic research assistant powered by multi-agent systems for autonomous literature and data mining.", icon: <Search size={18} /> }
            ]
        },
        {
            id: 'asst',
            name: "LabAssistAI",
            theme: "from-green-400 to-emerald-600",
            items: [
                { title: "LabAssistAI", desc: "Context-aware conversational agent specialized in biological protocols and chemical synthesis logic.", icon: <MessageSquare size={18} /> },
                { title: "Quantis vault", desc: "Enterprise-grade vector database architecture for seamless, secure data flow across all AI modules.", icon: <Database size={18} /> }
            ]
        }
    ];

    const physicsCat = {
        id: 'physics',
        name: "Physics Quantis",
        theme: "from-orange-400 to-rose-500",
        items: [
            { title: "NQR Spectroscopy", desc: "Nuclear Quadrupole Resonance modeling for molecular impurity detection and structural validation.", icon: <Activity size={18} /> },
            { title: "Thermodynamics", desc: "Precise modeling of energy transfer and molecular stability in complex biological systems.", icon: <Wind size={18} /> },
            { title: "PhysicForge", desc: "Advanced physical modeling for multi-scale biological systems and material interactions.", icon: <Network size={18} /> }
        ]
    };

    const quantumCat = {
        id: 'quantum',
        name: "Quantum Quantis",
        theme: "from-cyan-300 to-indigo-500",
        items: [
            { title: "Origin Pilot OS", desc: "China's first quantum computer operating system, designed for high-performance sub-atomic orchestration.", icon: <Cpu size={18} /> },
            { title: "MolQuantum", desc: "Quantum-inspired physics engine for ultra-accurate relative binding free energy (RBFE) calculations.", icon: <Wind size={18} /> },
            { title: "Quantum Compute AI", desc: "Orchestrating quantum algorithms for complex molecular structure predictions and sub-atomic modeling.", icon: <Atom size={18} /> }
        ]
    };

    return (
        <section className="relative bg-[#020202] text-white pt-32 pb-24 px-4 overflow-hidden min-h-screen">
            {/* Background Narrative */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left side: Header and Graphic */}
                <div className="lg:col-span-3 lg:sticky lg:top-40 space-y-10 group text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-none text-white transition-all group-hover:text-brand-orange">
                            Zerokost.ai
                        </h2>
                        <div className="h-1.5 w-24 bg-brand-orange mb-8 rounded-full shadow-[0_0_15px_rgba(255,107,0,0.4)] mx-auto lg:mx-0" />
                        <p className="text-gray-400 text-[14px] leading-relaxed border-l-0 lg:border-l lg:pl-6 max-w-lg lg:max-w-sm mx-auto lg:mx-0">
                            The unified engine for life sciences. An end-to-end <span className="text-white font-bold">generative AI</span> infrastructure layer designed to accelerate every stage of deep-tech pharmaceutical discovery.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative max-w-xs mx-auto lg:mx-0"
                    >
                        {/* Interactive glow follows graphic hover */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 via-brand-orange/5 to-blue-500/10 rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative bg-black/40 backdrop-blur-3xl rounded-[3rem] p-1 border border-white/5 shadow-2xl overflow-hidden">
                            <img
                                src="/pharma-graphic.png"
                                alt="Biotech Visualization"
                                className="w-full h-auto rounded-[2.8rem] opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:brightness-125"
                            />
                            {/* Reflection overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>

                {/* Right side: Responsive Grid */}
                <div className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                    {/* Column 1: Bio + LLLMs */}
                    <div className="space-y-6 md:space-y-8">
                        {leftCol.map(cat => <CategoryBlock key={cat.id} category={cat} />)}
                    </div>

                    {/* Column 2: Chemistry */}
                    <div className="space-y-6 md:space-y-8">
                        <CategoryBlock category={centerCol} />
                    </div>

                    {/* Column 3: Med + Sci + Asst */}
                    <div className="space-y-6 md:space-y-8">
                        {rightCol.map(cat => <CategoryBlock key={cat.id} category={cat} />)}
                    </div>

                    {/* Column 4: Quantum + Physics */}
                    <div className="space-y-6 md:space-y-8">
                        <CategoryBlock category={quantumCat} />
                        <CategoryBlock category={physicsCat} />
                    </div>
                </div>
            </div>

        </section>
    );
};

const CategoryBlock = ({ category }: { category: any }) => {
    return (
        <div className="flex flex-col">
            {/* Handle Tag */}
            <div className="flex items-center mb-[-1px] relative z-20 w-fit">
                <div className={`px-4 py-1.5 bg-gradient-to-r ${category.theme} text-black font-black text-[9px] uppercase tracking-[0.2em] rounded-tr-[15px] rounded-tl-[8px] shadow-lg`}>
                    {category.name}
                </div>
            </div>

            {/* Container */}
            <div className="bg-[#080808] border border-white/[0.08] rounded-b-xl md:rounded-b-[1.5rem] rounded-tr-xl md:rounded-tr-[1.5rem] p-2 md:p-3 space-y-2 md:space-y-3 shadow-2xl hover:border-white/20 transition-all duration-300 group">
                {category.items.map((item: any, i: number) => (
                    <div
                        key={i}
                        className="flex flex-col sm:flex-row gap-2 md:gap-4 items-start sm:items-center p-2.5 md:p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] transition-all cursor-pointer group/item"
                    >
                        <div className={`p-1.5 md:p-2.5 rounded-lg bg-gradient-to-br ${category.theme} text-black shadow-lg transform group-hover/item:scale-105 transition-transform shrink-0`}>
                            {React.cloneElement(item.icon, { size: 14 })}
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-[10px] md:text-[12px] leading-tight mb-0.5">{item.title}</h4>
                            <p className="text-gray-500 text-[8px] md:text-[10px] font-medium leading-tight line-clamp-3 md:line-clamp-none">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PharmaShowcase;
