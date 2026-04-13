import React from 'react';
import { Clock, ShieldCheck, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './Animations';

interface AdvantageProps {
    onOpenModal: () => void;
}

const Advantage: React.FC<AdvantageProps> = ({ onOpenModal }) => {
    const advantages = [
        {
            icon: <Clock size={32} />,
            title: "Reduced Time-to-Market",
            desc: "Slash clinical trial timelines with AI-driven protocol optimization and patient matching."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Regulatory Compliance",
            desc: "Ensure adherence to global standards with automated regulatory intelligence and reporting."
        },
        {
            icon: <Microscope size={32} />,
            title: "Scientific Precision",
            desc: "Empower scientists with tools that enhance accuracy and reduce manual data burdens."
        },
    ];

    return (
        <div className="py-20 px-4 bg-brand-dark">
            <div className="max-w-6xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Research Advantage</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Transforming the life sciences landscape with a unified platform that bridges the gap between data and discovery.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
                    {advantages.map((adv, idx) => (
                        <StaggerItem key={idx} className="flex flex-col items-start p-10 hover:bg-white/5 transition-colors group border-b md:border-b-0 md:border-r border-white/10 last:border-0 cursor-default">
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="mb-6 text-white group-hover:text-brand-orange transition-colors duration-300"
                            >
                                {adv.icon}
                            </motion.div>
                            <h3 className="text-white text-xl font-bold mb-3">{adv.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {adv.desc}
                            </p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <div className="mt-32 text-center relative">
                    {/* Glow behind CTA */}
                    <motion.div
                        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-orange/20 blur-[80px] rounded-full pointer-events-none"
                    />

                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 relative z-10">
                            Ready to empower <br /> your scientific research?
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onOpenModal}
                            className="relative z-10 bg-brand-orange hover:bg-cyan-700 text-white text-lg px-8 py-3 rounded-full font-semibold transition-all shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] hover:shadow-[0_6px_20px_rgba(6,182,212,0.23)]"
                        >
                            Request Platform Access
                        </motion.button>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default Advantage;
