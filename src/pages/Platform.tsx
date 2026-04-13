import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations';
import { Shield, Zap, Database, Microscope, Activity, Target } from 'lucide-react';
import Hero from '../components/Hero';

const Platform: React.FC = () => {
    const coreCapabilities = [
        {
            icon: <Microscope />,
            title: "Advanced In Silico Protein Modeling",
            description: "Precise computational simulations to predict molecular behavior and stability."
        },
        {
            icon: <Zap />,
            title: "ML-Driven Binder Design",
            description: "Intelligent design of therapeutic molecules with high specificity and de novo sequence generation."
        },
        {
            icon: <Activity />,
            title: "Structural Docking & Affinity Prediction",
            description: "Accurate forecasting of molecular interactions and binding strength using quantum-inspired models."
        },
        {
            icon: <Shield />,
            title: "Developability Risk Assessment",
            description: "Early identification of immunogenicity profiling, solubility, manufacturability, and expression feasibility."
        },
        {
            icon: <Database />,
            title: "Closed-Loop Wet-Lab Validation",
            description: "Seamless integration of experimental data to continuously refine and improve prediction accuracy."
        },
        {
            icon: <Target />,
            title: "Multi-Format Support",
            description: "Enabling discovery for antibodies, fragments, fusion proteins, and novel scaffolds."
        }
    ];

    const workflowSteps = [
        "Target Input", "AI Binder Gen", "Predictive Ranking", "Wet-Lab Test", "Iterative Opt"
    ];

    return (
        <div className="bg-brand-dark min-h-screen">
            {/* Hero Section */}
            <Hero />

            <div className="max-w-6xl mx-auto px-4 pb-20">
                {/* Workflow Display */}
                <FadeIn delay={0.2}>
                    <div className="mb-24 p-10 bg-white/5 border border-white/10 rounded-[3rem] text-center">
                        <h2 className="text-2xl font-bold text-white mb-10 uppercase tracking-widest">Discovery Workflow</h2>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            {workflowSteps.map((step, i) => (
                                <React.Fragment key={i}>
                                    <div className="p-6 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-bold uppercase tracking-widest text-[10px] w-full md:w-auto">
                                        {step}
                                    </div>
                                    {i < workflowSteps.length - 1 && (
                                        <div className="hidden md:block text-gray-700">→</div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Capabilities Grid */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Core Capabilities</h2>
                        <div className="h-1 w-20 bg-brand-orange mx-auto mt-4 rounded-full"></div>
                    </div>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreCapabilities.map((cap, idx) => (
                            <StaggerItem key={idx} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 transition-all group">
                                <div className="text-brand-orange mb-6 w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl group-hover:bg-brand-orange group-hover:text-white transition-all scale-110">
                                    {React.cloneElement(cap.icon as any, { size: 24 })}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide leading-tight">{cap.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Footer CTA */}
                <div className="p-16 rounded-[4rem] bg-gradient-to-br from-brand-orange/20 to-transparent border border-brand-orange/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 blur-[100px] rounded-full"></div>
                    <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Become part of the <br />AI Infrastructure Layer</h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-10 uppercase text-xs font-bold tracking-[0.3em]">Scalable cloud or on-prem deployment with LIMS/API integration.</p>
                    <button className="bg-white text-brand-dark px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-orange hover:text-white transition-all shadow-xl shadow-brand-orange/10">
                        Request Access
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Platform;
