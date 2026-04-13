import React from 'react';
import { Activity, Beaker, FileText, Database, Layers, BrainCircuit, Scan, Code, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './Animations';

const WorkflowDisplay: React.FC = () => {
    return (
        <div className="w-full bg-black py-12 md:py-20 px-4 relative z-10 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <FadeIn className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Unified Life Sciences Intelligence</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Our architecture connects every aspect of the life sciences lifecycle, from clinical operations to compliance, powered by deep AI automation.
                    </p>
                </FadeIn>

                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">

                    {/* Left Column: Image with Intense Glow */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative group max-w-lg w-full">
                            {/* Animated Pulsing Glow Layer 1 (Wide) */}
                            <motion.div
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [0.95, 1.05, 0.95]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -inset-4 md:-inset-8 bg-gradient-to-tr from-brand-orange/30 via-purple-600/20 to-blue-600/30 rounded-full blur-2xl md:blur-3xl z-0"
                            />

                            {/* Intense Static Glow Layer 2 (Tight) */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange via-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

                            {/* Image Container */}
                            <div className="relative z-10 bg-[#050505] border border-white/10 rounded-2xl p-3 shadow-2xl overflow-hidden ring-1 ring-white/5">
                                <img
                                    src="/workflow.png"
                                    alt="Zerokost Healthcare Architecture"
                                    className="w-full h-auto object-contain rounded-xl relative z-10"
                                />

                                {/* Glass Overlay/Reflection Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none rounded-xl" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Analysis Content */}
                    <div className="w-full lg:w-1/2 space-y-8">

                        {/* Layer 1: Business Domains */}
                        <FadeIn delay={0.2}>
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Activity className="text-brand-orange" size={20} /> Business Domains
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {['Clinical Operations', 'Research & Development', 'Regulatory & Compliance'].map((item, idx) => (
                                    <motion.div
                                        whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.2)" }}
                                        key={idx}
                                        className="bg-white/[0.03] border border-white/5 rounded-lg p-3 text-xs text-gray-300 text-center hover:border-brand-orange/30 transition-all cursor-default"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Layer 2: Core Platforms */}
                        <FadeIn delay={0.4}>
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Layers className="text-brand-orange" size={20} /> Core Platforms
                            </h3>
                            <div className="space-y-3">
                                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3 p-3 bg-white/[0.03] rounded-lg border border-transparent hover:border-white/10 transition-colors">
                                    <Database size={16} className="mt-1 text-gray-400" />
                                    <div>
                                        <h4 className="text-white text-sm font-medium">Clinical Solutions</h4>
                                        <p className="text-gray-500 text-xs mt-1">Patient Engagement, Trial Management, Data Capture.</p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3 p-3 bg-white/[0.03] rounded-lg border border-transparent hover:border-white/10 transition-colors">
                                    <BrainCircuit size={16} className="mt-1 text-gray-400" />
                                    <div>
                                        <h4 className="text-white text-sm font-medium">Research Platform</h4>
                                        <p className="text-gray-500 text-xs mt-1">Collaboration, Data Analysis Workspace, Knowledge Hub.</p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3 p-3 bg-white/[0.03] rounded-lg border border-transparent hover:border-white/10 transition-colors">
                                    <FileText size={16} className="mt-1 text-gray-400" />
                                    <div>
                                        <h4 className="text-white text-sm font-medium">Enterprise Systems</h4>
                                        <p className="text-gray-500 text-xs mt-1">LMS (Learning), TMS (Training), VMS (Management).</p>
                                    </div>
                                </motion.div>
                            </div>
                        </FadeIn>

                        {/* Layer 3: AI & Automation */}
                        <FadeIn delay={0.6}>
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Cpu className="text-brand-orange" size={20} /> AI & Automation Layer
                            </h3>
                            <StaggerContainer staggerChildren={0.1} className="grid grid-cols-2 gap-3 text-xs">
                                <StaggerItem className="flex items-center gap-2 text-gray-400 p-2 bg-white/[0.02] rounded-md">
                                    <Scan size={14} className="text-blue-400" /> OCR & Documents
                                </StaggerItem>
                                <StaggerItem className="flex items-center gap-2 text-gray-400 p-2 bg-white/[0.02] rounded-md">
                                    <Beaker size={14} className="text-purple-400" /> Image Gen AI
                                </StaggerItem>
                                <StaggerItem className="flex items-center gap-2 text-gray-400 p-2 bg-white/[0.02] rounded-md">
                                    <Code size={14} className="text-green-400" /> Code Generation
                                </StaggerItem>
                                <StaggerItem className="flex items-center gap-2 text-gray-400 p-2 bg-white/[0.02] rounded-md">
                                    <BrainCircuit size={14} className="text-brand-orange" /> Data Intel
                                </StaggerItem>
                            </StaggerContainer>
                        </FadeIn>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkflowDisplay;
