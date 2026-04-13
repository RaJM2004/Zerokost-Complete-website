import React from 'react';
import { ExternalLink, Database, BookOpen, FileCheck, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './Animations';

const LivePlatforms: React.FC = () => {
    const platforms = [
        {
            title: "LMS Platform",
            description: "Learning Management System for transforming lifesciences with AI, AI in medical coding, and Gen AI, Agnetic Ai in pharma.",
            link: "https://lms-frontend-blue-mu.vercel.app/",
            icon: <BookOpen size={24} />,
            status: "Live"
        },
        {
            title: "VMS System",
            description: "Validation Management System to streamline sourcing, onboarding, and monitoring of trial participants and partners.",
            link: "https://vms-omega-orpin.vercel.app/login",
            icon: <Database size={24} />,
            status: "Live"
        },
        {
            title: "Doc Authoring",
            description: "AI-Assisted Document Authoring tool for generating protocols, clinical study reports, and regulatory submissions faster.",
            link: "https://ai-assisted-document-authoring.vercel.app/",
            icon: <FileCheck size={24} />,
            status: "Live"
        },
        {
            title: "DMS Platform",
            description: "Secure Document Management System for the storage, versioning, and retrieval of regulated life sciences content.",
            link: "#",
            icon: <Layers size={24} />,
            status: "Live Hosted"
        }
    ];

    return (
        <div id="ready-to-deploy" className="py-20 px-4 bg-black relative z-10">
            <div className="max-w-6xl mx-auto">
                <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-brand-orange font-semibold tracking-wider uppercase text-sm">Immediate Access</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Ready-to-Deploy Platforms</h2>
                        <p className="text-gray-400 mt-4 max-w-xl">
                            Experience our fully functional, cloud-hosted platforms. Designed for immediate integration into your clinical and operational workflows.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {platforms.map((platform, idx) => (
                        <StaggerItem key={idx} className="h-full">
                            <motion.div
                                whileHover={{ y: -10, borderColor: "rgba(224, 89, 54, 0.4)" }}
                                className="group h-full relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                            >

                                {/* Hover Glow Effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-[50px] rounded-full group-hover:bg-brand-orange/10 transition-colors pointer-events-none" />

                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white/5 rounded-lg text-brand-orange group-hover:text-white group-hover:bg-brand-orange transition-colors">
                                            {platform.icon}
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            {platform.status}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3">{platform.title}</h3>
                                    <p className="text-gray-400 leading-relaxed mb-8">
                                        {platform.description}
                                    </p>
                                </div>

                                {platform.title !== 'DMS Platform' && (
                                    <motion.a
                                        whileHover={{ x: 5 }}
                                        href={platform.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-white font-medium group-hover:text-brand-orange transition-colors"
                                    >
                                        Launch Platform <ExternalLink size={16} />
                                    </motion.a>
                                )}
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
};

export default LivePlatforms;
