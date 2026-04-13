import React from 'react';
import { ScrollText, FileSearch, FlaskConical, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './Animations';

const AgentFactory: React.FC = () => {
    const agents = [
        { icon: <ScrollText size={32} />, title: "Protocol Design Agent" },
        { icon: <FileSearch size={32} />, title: "Regulatory Operations Agent" },
        { icon: <FlaskConical size={32} />, title: "Clinical Data Agent" },
        { icon: <Bot size={32} />, title: "Literature Review Agent" },
    ];

    return (
        <div className="py-20 px-4 bg-brand-dark">
            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <h2 className="text-2xl md:text-3xl font-medium text-center text-white mb-16">Scientific Agent Workflow</h2>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {agents.map((agent, idx) => (
                        <StaggerItem key={idx}>
                            <motion.div
                                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(224, 89, 54, 0.2)" }}
                                className="flex flex-col items-center text-center p-8 border border-white/5 rounded-2xl hover:border-brand-orange/30 transition-all duration-300 group bg-white/[0.02] hover:bg-white/[0.04] cursor-pointer"
                            >
                                <div className="mb-6 text-gray-400 group-hover:text-brand-orange transition-colors">
                                    {agent.icon}
                                </div>
                                <h3 className="text-white font-medium text-sm">{agent.title}</h3>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <div className="mt-32 text-center">
                    <FadeIn delay={0.2}>
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs text-brand-orange font-semibold border border-white/10 uppercase tracking-wider mb-6"
                        >
                            Gen AI Platform
                        </motion.span>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Generative AI to transform <br /> clinical research
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Discover our suite of specialized agents designed to automate complex tasks, from protocol writing to regulatory submissions, freeing scientists to focus on innovation.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default AgentFactory;
