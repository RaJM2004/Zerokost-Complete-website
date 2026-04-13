import React from 'react';
import { Mic, ScanText, MessageSquareCode, Image as ImageIcon, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './Animations';

const InHouseTools: React.FC = () => {
    const tools = [
        {
            icon: <Mic size={32} />,
            title: "MedVoice",
            desc: "An advanced voice-enabled assistant that acts as a real-time translator, clinical summarizer, and auto-filler for complex medical forms, streamlining patient interactions."
        },
        {
            icon: <ScanText size={32} />,
            title: "Smart OCR Plus",
            desc: "Next-gen Optical Character Recognition model capable of scraping and restructuring unstructured data from scanned medical documents, lab reports, and handwritten notes."
        },
        {
            icon: <MessageSquareCode size={32} />,
            title: "Source AI",
            desc: "Our proprietary LLM, comparable to leading conversational agents but fine-tuned for scientific accuracy. Ask complex questions and get citation-backed answers instantly."
        },
        {
            icon: <ImageIcon size={32} />,
            title: "Sci-Vis Gen",
            desc: "A specialized Image Generation tool designed to create accurate scientific diagrams, molecular structures, and marketing assets for publications and presentations."
        },
        {
            icon: <Megaphone size={32} />,
            title: "BioSocial AI",
            desc: "AI-driven social marketing tool that automates campaign strategies, content creation, and engagement analysis specifically for the life sciences and healthcare sectors."
        }
    ];

    return (
        <div className="py-20 px-4 bg-brand-dark relative overflow-hidden">
            {/* Decorative background element */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none"
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <FadeIn className="text-center mb-16">
                    <span className="text-brand-orange font-semibold tracking-wider uppercase text-sm">Proprietary Technology</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">In-House AI Suite</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Beyond our platform, we empower your digital transformation with a suite of specialized, in-house built AI tools.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, idx) => (
                        <StaggerItem key={idx}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white/[0.03] border border-white/10 rounded-xl p-8 hover:bg-white/[0.06] hover:border-brand-orange/50 transition-all duration-300 group h-full"
                            >
                                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                                    {tool.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {tool.desc}
                                </p>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
};

export default InHouseTools;
