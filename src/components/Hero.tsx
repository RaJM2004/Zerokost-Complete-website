import React from 'react';
import { Activity, Microscope, FileText, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './Animations';

const Hero: React.FC = () => {
    const cards = [
        { icon: <Activity size={28} />, title: "Clinical Trials" },
        { icon: <Microscope size={28} />, title: "Scientific R&D" },
        { icon: <FileText size={28} />, title: "Regulatory Operations" },
        { icon: <Globe size={28} />, title: "Global Compliance" },
    ];

    return (
        <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-brand-dark">
            {/* Background Ambience */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-brand-orange/20 blur-[120px] rounded-full pointer-events-none"
            />

            {/* Horizontal glowing lines */}
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent blur-sm opacity-50" />
            <div className="absolute top-[32%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent blur-md opacity-30" />

            <div className="relative z-10 text-center w-full max-w-5xl px-4 mt-10 mx-auto">
                <FadeIn delay={0.2}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        One Digital AI Platform for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Life Sciences Innovation</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
                        Empowering researchers and scientists to dramatically reduce time-to-market.
                        Streamline clinical trials and regulatory pathways with our advanced Gen AI and Agentic AI solutions.
                    </p>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-orange text-white text-lg px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    >
                        Accelerate Research
                    </motion.button>
                </FadeIn>
            </div>

            <div className="relative z-10 mt-24 w-full max-w-6xl px-4">
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                    {cards.map((card, idx) => (
                        <StaggerItem key={idx} className={`flex flex-col items-center justify-center p-8 hover:bg-white/5 transition-colors cursor-pointer text-center group border-r border-white/5 last:border-r-0 border-b md:border-b-0`}>
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="mb-4 text-white group-hover:text-brand-orange transition-colors"
                            >
                                {card.icon}
                            </motion.div>
                            <h3 className="text-white font-medium text-sm">{card.title}</h3>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
};

export default Hero;
