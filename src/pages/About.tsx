import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations';
import {
    Award, Brain, Activity, Beaker, Zap,
    Shield, Briefcase, Database, HeartPulse,
    Microscope, Cpu, FileText, CheckCircle, Lightbulb, Users, Network, Dna, Lock
} from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="pt-32 pb-20 bg-brand-dark min-h-screen text-gray-300 font-sans tracking-wide">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero / Executive Profile Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold tracking-widest uppercase mb-4 border border-brand-orange/20">
                            Executive Profile
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            What Our Founder <span className="text-brand-orange">Says</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
                            CEO & Founder – Zerokost Healthcare Pvt Ltd
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-medium">
                            <span className="bg-white/5 py-2 px-4 rounded-lg border border-white/10 flex items-center gap-2"><Activity className="w-4 h-4" /> +91 7036951155 | 7036955133 (0)</span>
                            <span className="bg-white/5 py-2 px-4 rounded-lg border border-white/10 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> ashwin@zerokost.com</span>
                            <span className="bg-white/5 py-2 px-4 rounded-lg border border-white/10 flex items-center gap-2"><Network className="w-4 h-4" /> ceo.zerokost@gmail.com</span>
                            <span className="bg-white/5 py-2 px-4 rounded-lg border border-white/10 flex items-center gap-2"><Lightbulb className="w-4 h-4" /> www.zerokost.com</span>
                        </div>
                    </div>
                </FadeIn>

                {/* Leadership Summary & Bio Intro */}
                <FadeIn delay={0.2}>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Brain size={120} className="text-brand-orange" />
                        </div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider flex items-center">
                                    <Award className="w-6 h-6 mr-3 text-brand-orange" /> Executive Bio
                                </h2>
                                <p className="mb-4 leading-relaxed">
                                    <strong className="text-lg text-white">Ashwin Kumar T S, M.Pharm (Pharmaceutics), Gold Medalist</strong>
                                </p>
                                <p className="mb-4 text-gray-400 leading-relaxed text-sm lg:text-base">
                                    Gold Medalist and 2012 Batch Topper from Kakatiya University, Ashwin Kumar is a drug formulation scientist and deep-tech healthcare innovator operating at the intersection of pharmaceutical sciences, AI-driven drug discovery, and regenerative biotechnology.
                                </p>
                                <p className="text-gray-400 leading-relaxed text-sm mb-6 pb-6 border-b border-white/10">
                                    Ashwin represents a rare founder profile combining pharmaceutical depth, patented innovation, and AI-powered biotech platform thinking—positioned to build defensible, high-value healthcare ventures.
                                </p>
                                <div className="space-y-4">
                                    <h3 className="text-white font-semibold mb-3">Leadership Roles:</h3>
                                    <ul className="list-none space-y-3">
                                        <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" /> <span className="text-gray-400 text-sm">14+ Years Experience in Lifesciences IT, Pharma, BioPharma, Cell & Gene Therapy.</span></li>
                                        <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" /> <span className="text-gray-400 text-sm">Ex-Infosys, Ex-HCL Tech, Ex-Strides, Ex-Dr.Reddy’s.</span></li>
                                        <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" /> <span className="text-gray-400 text-sm">Distinguished leader in Artificial Intelligence, Agentic Automation, and Digital Quality Systems.</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-5 uppercase tracking-wider flex items-center">
                                        <Shield className="w-5 h-5 mr-3 text-brand-orange" /> Credentials & Certifications
                                    </h3>
                                    <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-300">
                                        {['Generative AI, LLMs', 'Prompt Engineering', 'LangChain', 'Semantic Search', 'Vector Search', 'Agentic AI & Autonomous Workflows', 'Secure SDLC', 'Privacy by Design (DPO)', 'ITQA', 'Block Chain Technologies', 'Digital Transformation', 'Design Thinking', 'Quantum Computing Exposure'].map((cred, idx) => (
                                            <span key={idx} className="bg-brand-dark px-3 py-1.5 rounded-lg border border-white/5">{cred}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-5 uppercase tracking-wider flex items-center">
                                        <Cpu className="w-5 h-5 mr-3 text-brand-orange" /> Core Competencies
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
                                        <li className="flex gap-2 items-center"><Zap className="w-4 h-4 text-brand-orange shrink-0" /> AI Strategy & Enterprise Automation</li>
                                        <li className="flex gap-2 items-center"><Zap className="w-4 h-4 text-brand-orange shrink-0" /> Agentic AI Architecture</li>
                                        <li className="flex gap-2 items-center"><Zap className="w-4 h-4 text-brand-orange shrink-0" /> Digital Quality Systems</li>
                                        <li className="flex gap-2 items-center"><Zap className="w-4 h-4 text-brand-orange shrink-0" /> Workforce & Operational Intel</li>
                                        <li className="flex gap-2 items-center"><Zap className="w-4 h-4 text-brand-orange shrink-0" /> Block Chain & Crypto Pay</li>
                                        <li className="flex gap-2 items-center"><Zap className="w-4 h-4 text-brand-orange shrink-0" /> Data Security & Risk Design</li>
                                        <li className="flex gap-2 items-center"><Zap className="w-4 h-4 text-brand-orange shrink-0" /> Scalable Digital Transformation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* 4 Pillars Section */}
                <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16">
                    <StaggerItem>
                        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 h-full hover:border-brand-orange/50 transition-colors duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-[50px] rounded-full"></div>
                            <div className="bg-brand-orange/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-brand-orange/20 relative z-10">
                                <Award className="w-7 h-7 text-brand-orange" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 relative z-10">1. Academic & Scientific Credibility</h3>
                            <ul className="space-y-3 text-gray-400 text-sm relative z-10">
                                <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> <span>Highlighted Gold Medalist distinction in M.Pharm (Pharmaceutics).</span></li>
                                <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> <span>Emphasized strong research foundation with 7 international publications.</span></li>
                                <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> <span>Expertise in advanced drug delivery systems: Nanoparticles, Liposomes, SMEDDS, Microspheres, Polymer matrix systems, Transmucosal & controlled-release platforms.</span></li>
                            </ul>
                            <div className="mt-6 pt-5 border-t border-white/5 relative z-10">
                                <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Strategic Objective</span>
                                <p className="mt-2 text-sm text-gray-300">Position academic excellence as credibility anchor for investor materials.</p>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 h-full hover:border-brand-orange/50 transition-colors duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-[50px] rounded-full"></div>
                            <div className="bg-brand-orange/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-brand-orange/20 relative z-10">
                                <Beaker className="w-7 h-7 text-brand-orange" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 relative z-10">2. Proven Drug Development Track Record</h3>
                            <ul className="space-y-3 text-gray-400 text-sm mb-4 relative z-10">
                                <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> <span>Successful formulation development of Montelukast and Olanzapine.</span></li>
                                <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> <span>Developed Fabipiravir (Anti-COVID-19 tablet).</span></li>
                                <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> <span>Demonstrating commercialization-oriented pharmaceutical execution.</span></li>
                            </ul>
                            <div className="mt-6 pt-5 border-t border-white/5 relative z-10">
                                <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Strategic Objective</span>
                                <p className="mt-2 text-sm text-gray-300">Execution capability and translational strength proof for Pitch Deck.</p>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 h-full hover:border-brand-orange/50 transition-colors duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-[50px] rounded-full"></div>
                            <div className="bg-brand-orange/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-brand-orange/20 relative z-10">
                                <Lock className="w-7 h-7 text-brand-orange" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 relative z-10">3. Intellectual Property & Patents</h3>
                            <ul className="space-y-3 text-gray-400 text-sm mb-4 relative z-10">
                                <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> <span>Patent: Oral Radiography Technology.</span></li>
                                <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> <span>Patent: Biodegradable Polymer Matrix Films.</span></li>
                                <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> <span>Building defensible IP platforms with scalable medical and pharmaceutical applications.</span></li>
                            </ul>
                            <div className="mt-6 pt-5 border-t border-white/5 relative z-10">
                                <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Strategic Objective</span>
                                <p className="mt-2 text-sm text-gray-300">Develop a clear IP commercialization roadmap for investor discussions.</p>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 h-full hover:border-brand-orange/50 transition-colors duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-[50px] rounded-full"></div>
                            <div className="bg-brand-orange/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-brand-orange/20 relative z-10">
                                <Dna className="w-7 h-7 text-brand-orange" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 relative z-10">4. Deep-Tech Pipeline Overview</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10">
                                Next-generation healthcare platforms focusing on AI & Quantum-Enabled Drug Discovery, Advanced Therapeutics & Devices, and Longevity & Regenerative Medicine.
                            </p>
                            <div className="mt-6 pt-5 border-t border-white/5 relative z-10 h-full flex flex-col justify-end">
                                <div>
                                    <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Strategic Objective</span>
                                    <p className="mt-2 text-sm text-gray-300">Platform scalability and defensibility for multi-market exposure.</p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>

                {/* Deep-Tech Detailed Horizontal Cards */}
                <FadeIn delay={0.2}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-wider inline-block border-b-2 border-brand-orange pb-2">Deep-Tech Pipeline Detail</h2>
                    </div>
                    <div className="space-y-6 mb-20">
                        {/* A */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start hover:border-brand-orange/30 transition-all duration-300 group">
                            <div className="bg-zinc-900 p-5 rounded-2xl shrink-0 group-hover:scale-105 transition-transform border border-white/5">
                                <Network className="w-10 h-10 text-brand-orange" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-4">A. AI & Quantum Drug Discovery</h3>
                                <ul className="list-none text-gray-400 space-y-2 mb-6 text-sm">
                                    <li className="flex gap-2 items-center"><Activity className="w-4 h-4 text-brand-orange opacity-70" /> AI agents for autonomous research workflows</li>
                                    <li className="flex gap-2 items-center"><Activity className="w-4 h-4 text-brand-orange opacity-70" /> Alpha protein dynamic simulations & predictive modeling</li>
                                    <li className="flex gap-2 items-center"><Activity className="w-4 h-4 text-brand-orange opacity-70" /> Quantum computing applications in accelerated molecular drug discovery</li>
                                </ul>
                                <span className="inline-block bg-zinc-900 px-4 py-2 rounded-lg text-xs text-brand-orange border border-white/10 font-bold tracking-wider uppercase">
                                    Positioning: Long-term high-multiple deep-tech opportunity
                                </span>
                            </div>
                        </div>
                        {/* B */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start hover:border-brand-orange/30 transition-all duration-300 group">
                            <div className="bg-zinc-900 p-5 rounded-2xl shrink-0 group-hover:scale-105 transition-transform border border-white/5">
                                <Cpu className="w-10 h-10 text-brand-orange" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-4">B. Advanced Therapeutics & Devices</h3>
                                <ul className="list-none text-gray-400 space-y-2 mb-6 text-sm">
                                    <li className="flex gap-2 items-center"><Activity className="w-4 h-4 text-brand-orange opacity-70" /> Decentralized CAR-T cell harvesting device</li>
                                    <li className="flex gap-2 items-center"><Activity className="w-4 h-4 text-brand-orange opacity-70" /> Soft Mist Inhaler (FDA combination product pathway)</li>
                                    <li className="flex gap-2 items-center"><Activity className="w-4 h-4 text-brand-orange opacity-70" /> In-silico organ chips</li>
                                    <li className="flex gap-2 items-center"><Activity className="w-4 h-4 text-brand-orange opacity-70" /> Artificial portable organ systems ("Super Lungs")</li>
                                </ul>
                                <span className="inline-block bg-zinc-900 px-4 py-2 rounded-lg text-xs text-brand-orange border border-white/10 font-bold tracking-wider uppercase">
                                    Positioning: Platform + device + biologics integration model
                                </span>
                            </div>
                        </div>
                        {/* C */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start hover:border-brand-orange/30 transition-all duration-300 group">
                            <div className="bg-zinc-900 p-5 rounded-2xl shrink-0 group-hover:scale-105 transition-transform border border-white/5">
                                <HeartPulse className="w-10 h-10 text-brand-orange" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-4">C. Longevity & Regenerative Medicine</h3>
                                <ul className="list-none text-gray-400 space-y-2 mb-6 text-sm">
                                    <li className="flex gap-2 items-center"><Activity className="w-4 h-4 text-brand-orange opacity-70" /> Macular regeneration platform focus</li>
                                    <li className="flex gap-2 items-center"><Activity className="w-4 h-4 text-brand-orange opacity-70" /> Anti-aging therapeutic concept pipeline</li>
                                    <li className="flex gap-2 items-center"><Activity className="w-4 h-4 text-brand-orange opacity-70" /> High-margin nutraceutical pipeline (testosterone, ED, prostate health – GMO-free)</li>
                                </ul>
                                <span className="inline-block bg-zinc-900 px-4 py-2 rounded-lg text-xs text-brand-orange border border-white/10 font-bold tracking-wider uppercase">
                                    Positioning: High-margin, fast-revenue entry segment with long-term biotech upside
                                </span>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* AI Portfolio & Products section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider inline-block border-b-2 border-brand-orange pb-2">Business & Product Verticals</h2>
                </div>
                <StaggerContainer className="grid lg:grid-cols-3 gap-8 mb-20" staggerChildren={0.15}>
                    {/* Portfolio */}
                    <StaggerItem>
                        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                            <h3 className="text-2xl font-black text-white mb-8 border-l-4 border-brand-orange pl-4 tracking-wider">AI Product Portfolio</h3>
                            <div className="space-y-6 flex-1">
                                <div>
                                    <h4 className="text-brand-orange font-bold text-base mb-1 flex items-center"><Brain className="w-4 h-4 mr-2" /> AI Solutions</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Advanced artificial intelligence solutions for modern businesses.</p>
                                </div>
                                <div>
                                    <h4 className="text-brand-orange font-bold text-base mb-1 flex items-center"><Microscope className="w-4 h-4 mr-2" /> Lifesciences Platforms</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-2">Innovative platforms for pharmaceutical and biological research.</p>
                                    <p className="text-xs text-gray-500 font-mono tracking-tighter">Includes: Biological Drug Discovery Platform, DMS, TMS, VMS, QMS.</p>
                                </div>
                                <div>
                                    <h4 className="text-brand-orange font-bold text-base mb-1 flex items-center"><Activity className="w-4 h-4 mr-2" /> Healthcare</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Next-generation healthcare technology and patient management.</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Deep Tech Integrated Solutions</h4>
                                <ul className="text-xs text-gray-400 space-y-2 list-none">
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 shrink-0"></div> 1. Intelligent Document & Regulatory Automation</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 shrink-0"></div> 2. Patient Recruitment & Engagement Optimization</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 shrink-0"></div> 3. Protocol Design & Regulatory Intelligence</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 shrink-0"></div> 4. Trial Monitoring, Risk & Compliance Automation</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 shrink-0"></div> 5. Data Quality, Validation & Audit Readiness</li>
                                </ul>
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Healthcare */}
                    <StaggerItem>
                        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                            <h3 className="text-2xl font-black text-white mb-8 border-l-4 border-brand-orange pl-4 tracking-wider">AI Healthcare Products</h3>
                            <ul className="text-sm text-gray-400 space-y-4 flex-1">
                                <li className="flex gap-3"><Cpu className="w-5 h-5 text-brand-orange shrink-0 mt-0.5 opacity-80" /> <span>Robot: Patient Guidance - Crowd Handling, Interaction</span></li>
                                <li className="flex gap-3"><Database className="w-5 h-5 text-brand-orange shrink-0 mt-0.5 opacity-80" /> <span>KIOSK: Registration & Payment</span></li>
                                <li className="flex gap-3"><Users className="w-5 h-5 text-brand-orange shrink-0 mt-0.5 opacity-80" /> <span>Online Consulting & Call / Email / Message – CRM</span></li>
                                <li className="flex gap-3"><FileText className="w-5 h-5 text-brand-orange shrink-0 mt-0.5 opacity-80" /> <span>Clinical Documentation Management / EHRs / MR</span></li>
                                <li className="flex gap-3"><Briefcase className="w-5 h-5 text-brand-orange shrink-0 mt-0.5 opacity-80" /> <span>Paramedic & Staff Training / Learning Management</span></li>
                                <li className="flex gap-3"><Shield className="w-5 h-5 text-brand-orange shrink-0 mt-0.5 opacity-80" /> <span>Secure: Blockchain File Transfer & Blockchain Insurance</span></li>
                                <li className="flex gap-3"><Lightbulb className="w-5 h-5 text-brand-orange shrink-0 mt-0.5 opacity-80" /> <span>Clinical Note & Chatbot (Q&A - RAG)</span></li>
                                <li className="flex gap-3"><Activity className="w-5 h-5 text-brand-orange shrink-0 mt-0.5 opacity-80" /> <span>Translator, Transcription & Rx Reader</span></li>
                                <li className="flex gap-3"><FileText className="w-5 h-5 text-brand-orange shrink-0 mt-0.5 opacity-80" /> <span>Form - Admission & Discharge / Feedback, ICF Cioms</span></li>
                                <li className="flex gap-3"><Cpu className="w-5 h-5 text-brand-orange shrink-0 mt-0.5 opacity-80" /> <span>Medical Coding - ICT</span></li>
                            </ul>
                        </div>
                    </StaggerItem>

                    {/* Consulting */}
                    <StaggerItem>
                        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                            <h3 className="text-2xl font-black text-white mb-8 border-l-4 border-brand-orange pl-4 tracking-wider">IT & Lifesciences Consulting</h3>
                            <div className="space-y-6 flex-1">
                                <div className="p-5 bg-white/5 rounded-xl border border-white/5 hover:border-brand-orange/30 transition-colors">
                                    <h4 className="text-white font-bold uppercase mb-2 text-sm tracking-wider">Core Offerings</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">AI & Data, Software & Cloud Design, Dev & Testing, Facilities & Mfg.</p>
                                </div>
                                <div className="p-5 bg-white/5 rounded-xl border border-white/5 hover:border-brand-orange/30 transition-colors">
                                    <h4 className="text-white font-bold uppercase mb-2 text-sm tracking-wider">Validation (CQV)</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Protocol Development, Execution, Report Generation, Computer System Validation, GAMP 5, Data Integrity, System Lifecycle.</p>
                                </div>
                                <div className="p-5 bg-white/5 rounded-xl border border-white/5 hover:border-brand-orange/30 transition-colors">
                                    <h4 className="text-white font-bold uppercase mb-2 text-sm tracking-wider">Quality Assurance</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Audit Readiness, SOP Development, Deviation Management, IT AI/ML Quality & Compliance, Combination Products, Biologics & Advanced.</p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>

                {/* Key Strengths Banner */}
                <FadeIn delay={0.4}>
                    <div className="p-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-brand-dark to-brand-orange/10 border border-white/10 overflow-hidden relative shadow-2xl">
                        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-brand-orange/5 blur-[100px] transform skew-x-12 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black text-white mb-10 tracking-widest uppercase flex items-center justify-center">
                                <Zap className="w-8 h-8 mr-4 text-brand-orange" /> Founder's Edge
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform">
                                    <strong className="text-white block mb-2 text-lg tracking-wide uppercase">Execution + Vision</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed">Proven formulation scientist with frontier biotech ambition.</span>
                                </div>
                                <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform">
                                    <strong className="text-white block mb-2 text-lg tracking-wide uppercase">Platform Strategy</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed">Multiple scalable IP-driven technologies.</span>
                                </div>
                                <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform">
                                    <strong className="text-white block mb-2 text-lg tracking-wide uppercase">Regulatory Awareness</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed">FDA combination product strategy orientation.</span>
                                </div>
                                <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform">
                                    <strong className="text-white block mb-2 text-lg tracking-wide uppercase">Multi-Market Exposure</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed">Oncology, AI Drug Discovery, Pulmonary, Regenerative Medicine, Longevity.</span>
                                </div>
                                <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform">
                                    <strong className="text-white block mb-2 text-lg tracking-wide uppercase">Capital Efficiency</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed">Strong R&D foundation reduces early-stage scientific risk.</span>
                                </div>
                                <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform flex items-center justify-center">
                                    <div className="text-center">
                                        <Award className="w-10 h-10 text-brand-orange mx-auto mb-2 opacity-50" />
                                        <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">High-Value Ventures</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </div>
    );
};

export default About;
