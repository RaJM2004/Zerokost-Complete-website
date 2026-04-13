import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './Animations';

const AIShowcase: React.FC = () => {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[#00e5ff]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-500">AI Ecosystem</span>
                        </h2>
                        <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
                            Experience the future of healthcare and life sciences with our agentic AI models. Real-time insights, intelligent automation, and predictive analytics in one platform.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.1)] group"
                    >
                        <div className="flex flex-col md:flex-row items-center bg-[#101010] p-8 md:p-12 gap-10 relative z-10">
                            {/* Text Content */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
                                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                                    Advanced Data Processing
                                </h3>
                                <p className="text-white/80 text-lg leading-relaxed mb-8">
                                    Navigate through complex datasets flawlessly with automated pattern recognition and dynamic insights generation. Elevate your operational capabilities with real-time intelligence.
                                </p>
                                <div>
                                    <div className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold rounded-full shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00e5ff]"></span>
                                        </span>
                                        System Analytics Active
                                    </div>
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                                    <img
                                        src="/AI.png"
                                        alt="Platform AI Showcase"
                                        className="w-full h-auto object-contain transform group-hover:scale-[1.03] transition-transform duration-[1500ms] ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </FadeIn>
            </div>
        </section>
    );
};

export default AIShowcase;
