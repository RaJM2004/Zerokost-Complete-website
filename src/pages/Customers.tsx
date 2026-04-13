import React from 'react';
import { FadeIn } from '../components/Animations';
import { FlaskConical, Network, Microscope } from 'lucide-react';

interface PlatformInsight {
    name: string;
    category: string;
    icon: React.ReactNode;
    imageLogo?: string;
    title: string;
    description: string;
}

const Customers: React.FC = () => {
    const mouPartners = [
        {
            name: "American IT",
            category: "Enterprise Solutions",
            imageLogo: "https://americanitinc.com/img/logo.png",
            description: "Supporting advanced training, upskilling, and certification pathways."
        },
        {
            name: "Critical River",
            category: "Digital Consulting",
            imageLogo: "https://www.criticalriver.com/wp-content/uploads/2025/04/logo.png",
            description: "Providing solutions for Life Sciences companies like Septerna and AstraZeneca."
        },
        {
            name: "SimplyJith",
            category: "AI Ecosystems",
            imageLogo: "https://simplyjith.com/images/MainLOGO.png",
            description: "Partnering for large-scale federal and government projects."
        },
    ];

    const platformInsights: PlatformInsight[] = [
        {
            name: "Septerna",
            category: "Biotechnology (GPCR Focus)",
            icon: <FlaskConical size={24} />,
            imageLogo: "/septerna-logo.png",
            title: "Accelerating Complex GPCR Target Pipeline",
            description: "By integrating Zerokost's Biologics Discovery Platform, biotechnology leaders like Septerna can fundamentally transform their GPCR drug discovery pipeline. The platform's automated closed-loop engineering removes immense computational bottlenecks, potentially accelerating small-molecule simulation speeds by up to 5x while sharply reducing R&D latency and pre-clinical costs."
        },
        {
            name: "AstraZeneca",
            category: "Healthcare & Med-Tech",
            icon: <Network size={24} />,
            imageLogo: "https://www.astrazeneca.com/etc/designs/az/img/logo-az.png",
            title: "Unifying Clinical & Molecular Workflows",
            description: "For global biopharmaceutical leaders like AstraZeneca, connecting diverse system data to early-stage molecular target discovery is vital for speed. The Zerokost Biologics Platform provides a scalable, secure, and GAMP-compliant enterprise backbone to bridge these complex healthcare streams, ensuring significantly faster predictive insights without ever sacrificing data integrity."
        },
        {
            name: "CCMB",
            category: "Premier Research Institute",
            icon: <Microscope size={24} />,
            imageLogo: "/ccmb-logo.png",
            title: "Scaling National-Level Genomic Research",
            description: "Research powerhouses like the Centre for Cellular and Molecular Biology (CCMB) require massive, resilient infrastructure to analyze sequence data. By operating on the Zerokost Platform environment, researchers can completely bypass hardware limitations—seamlessly deploying distributed proteomic models and bringing next-generation bioscience initiatives to fruition drastically faster."
        },
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-brand-dark font-sans relative overflow-hidden text-gray-300">
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <div className="inline-block px-6 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-black tracking-widest uppercase mb-8 border border-brand-orange/20 shadow-[0_0_15px_rgba(255,102,0,0.3)]">
                            Strategic MOUs & Integrations
                        </div>
                        <h1 className="text-5xl md:text-[5.0rem] font-extrabold text-white mb-6 uppercase tracking-tight">
                            Industry <span className="text-brand-orange">Partnerships</span>
                        </h1>
                        <p className="text-xl md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                            Agreements and active MOUs ensuring deep operational integration across global enterprise systems.
                        </p>
                    </div>
                </FadeIn>

                {/* MOU Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {mouPartners.map((partner, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="group bg-[#101010] border border-white/5 rounded-[24px] p-8 flex flex-col items-center justify-center min-h-[300px] shadow-xl hover:border-brand-orange/40 hover:shadow-[0_10px_30px_-10px_rgba(255,102,0,0.2)] transition-all duration-300 relative cursor-pointer hover:-translate-y-1">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]"></div>

                                <div className="h-16 w-full flex items-center justify-center mb-6 relative z-10 group-hover:scale-105 transition-all duration-500">
                                    <img
                                        src={partner.imageLogo}
                                        alt={partner.name}
                                        className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors relative z-10 text-center">
                                    {partner.name}
                                </h3>

                                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest group-hover:text-white/80 transition-colors relative z-10 text-center mb-4">
                                    {partner.category}
                                </div>

                                <p className="text-sm font-light text-gray-400 text-center leading-relaxed relative z-10 px-2 group-hover:text-gray-300 transition-colors">
                                    {partner.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Platform Insights Articles */}
                <FadeIn delay={0.3}>
                    <div className="mb-14">
                        <div className="flex flex-col items-start gap-4 mb-10">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 text-[#00e5ff] text-xs font-black tracking-widest uppercase border border-cyan-500/30">
                                Biologics Discovery Platform
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
                                Prospective <span className="text-[#00e5ff]">Evaluations & Reviews</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-light max-w-3xl leading-relaxed mt-2">
                                Analytical reviews demonstrating how our platform significantly increases pipeline execution velocity for organizations exploring integration.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {platformInsights.map((insight, idx) => (
                                <div key={idx} className="group flex flex-col bg-[#080808] border border-white/5 hover:border-[#00e5ff]/30 rounded-[32px] p-8 transition-all duration-500 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff]/5 blur-[80px] rounded-full group-hover:bg-[#00e5ff]/15 transition-all duration-700"></div>

                                    <div className="flex items-center gap-4 mb-8 relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-white border border-white/10 flex items-center justify-center p-2 group-hover:scale-110 transition-all duration-300">
                                            {insight.imageLogo ? (
                                                <img src={insight.imageLogo} alt={`${insight.name} Logo`} className="w-full h-full object-contain" />
                                            ) : (
                                                <Network size={24} className="text-[#00e5ff]/80" />
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white group-hover:text-[#00e5ff] transition-colors">{insight.name}</h4>
                                            <span className="text-gray-500 text-xs tracking-widest uppercase font-bold">{insight.category}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white/90 mb-4 leading-snug relative z-10 group-hover:text-white transition-colors">
                                        {insight.title}
                                    </h3>

                                    <p className="text-gray-400 text-[14px] leading-relaxed mb-8 flex-grow relative z-10 group-hover:text-gray-300 transition-colors">
                                        {insight.description}
                                    </p>

                                    {/* <div className="mt-auto border-t border-white/5 pt-5 flex items-center text-[#00e5ff] text-sm font-bold tracking-widest uppercase cursor-pointer relative z-10 group-hover:pl-2 transition-all duration-300">
                                        Read Full Insight <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

            </div>
        </div>
    );
};

export default Customers;
