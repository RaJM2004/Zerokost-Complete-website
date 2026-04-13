import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './Animations';

const InsightsStudio: React.FC = () => {
    return (
        <div className="py-20 px-4 bg-brand-dark">
            <FadeIn>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 border border-white/10 rounded-3xl p-8 md:p-12 bg-white/[0.02]">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-white">Biologics Discovery Platform</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Revolutionize drug discovery with our comprehensive biologics platform. From target identification to lead optimization, streamline your entire discovery pipeline with cutting-edge AI and advanced computational tools.
                        </p>
                        <ul className="space-y-4 text-gray-300">
                            {[
                                { title: "Target Explorer", text: "Identify and validate biological targets using genomics and proteomics data." },
                                { title: "Hit Screening", text: "High-throughput virtual screening with AI-powered binding affinity predictions." },
                                { title: "Wet-Lab Validation", text: "Integrate experimental results and track validation progress in real-time." },
                                { title: "Blinded Design", text: "Ensure unbiased experimental design with automated randomization and blinding." },
                                { title: "Lead Optimization", text: "Optimize drug candidates with generative AI and molecular dynamics simulations." }
                            ].map((item, idx) => (
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                                    key={idx}
                                    className="flex items-start gap-3"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                                    <span><strong className="text-white">{item.title}:</strong> {item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                        {/* Platform not deployed yet */}
                        {/* <motion.a
                            whileHover={{ x: 10 }}
                            href="#"
                            className="inline-block text-brand-orange font-medium hover:text-cyan-400 transition-transform mt-4"
                        >
                            Explore Platform →
                        </motion.a> */}
                    </div>
                    <div className="flex-1 w-full">
                        <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 relative group">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80"
                                alt="Biologics Discovery Platform"
                                className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};

export default InsightsStudio;
