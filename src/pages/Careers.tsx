import React, { useState } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations';
import { ArrowRight, Settings, Code, Activity, Briefcase, X, MapPin } from 'lucide-react';
import { jobsData } from '../data/jobs';

const Careers: React.FC = () => {
    const [selectedJob, setSelectedJob] = useState<typeof jobsData[0] | null>(null);

    const getIcon = (department: string) => {
        if (department === "IT") return <Settings className="w-6 h-6" />;
        if (department === "Technical (Early Career)") return <Code className="w-6 h-6" />;
        if (department.includes("Quality") || department.includes("Mid-Level") && !department.includes("Program")) return <Activity className="w-6 h-6" />;
        return <Briefcase className="w-6 h-6" />;
    };

    return (
        <div className="pt-32 pb-20 bg-brand-dark min-h-screen font-sans text-gray-300 overflow-hidden">
            {/* Header Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[100px] rounded-full"></div>
                <FadeIn>
                    <div className="text-center max-w-4xl mx-auto relative z-10">
                        <div className="inline-block px-6 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-black tracking-widest uppercase mb-8 border border-brand-orange/20 shadow-[0_0_15px_rgba(255,102,0,0.3)]">
                            Careers at Zerokost Healthcare
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase relative">
                            Build the <span className="text-brand-orange">Future</span> With Us
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light">
                            We are a mission-driven organization building the next generation of deep-tech healthcare platforms and AI solutions.
                        </p>
                    </div>
                </FadeIn>
            </div>

            {/* Job Listings Section */}
            <div className="bg-white/5 border-y border-white/10 py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 flex justify-between items-end border-b border-white/10 pb-6">
                        <h2 className="text-4xl font-black text-white uppercase tracking-wider">Open Positions</h2>
                        <span className="text-brand-orange font-bold px-4 py-2 bg-brand-orange/10 rounded-xl border border-brand-orange/20">{jobsData.length} Roles Available</span>
                    </div>

                    <StaggerContainer className="grid md:grid-cols-2 gap-8">
                        {jobsData.map((job) => (
                            <StaggerItem key={job.id}>
                                <div
                                    onClick={() => setSelectedJob(job)}
                                    className="bg-black/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 hover:border-brand-orange/50 transition-all duration-500 cursor-pointer group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,102,0,0.15)] h-full flex flex-col relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-[50px] rounded-full group-hover:bg-brand-orange/10 transition-colors"></div>
                                    <div className="flex items-start justify-between mb-8 relative z-10">
                                        <div className="p-4 rounded-2xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-inner border border-brand-orange/20 group-hover:shadow-[0_0_20px_rgba(255,102,0,0.4)]">
                                            {getIcon(job.department)}
                                        </div>
                                        <span className="bg-white/5 text-xs font-bold text-gray-400 px-4 py-2 rounded-full border border-white/10 uppercase tracking-widest group-hover:border-white/20 transition-colors">
                                            {job.department}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-brand-orange transition-colors leading-snug relative z-10">{job.title}</h3>
                                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-10 mt-auto font-medium relative z-10">
                                        <MapPin className="w-4 h-4 text-brand-orange/70" /> {job.location}
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 relative z-10">
                                        <span className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] group-hover:text-gray-300 transition-colors">View Description</span>
                                        <ArrowRight className="w-5 h-5 text-brand-orange transform group-hover:translate-x-3 transition-transform duration-300" />
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>

            {/* Why Join Us Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 space-y-40">

                {/* Work Where It's Best For You */}
                <FadeIn>
                    <div className="relative">
                        <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange/0 via-brand-orange to-brand-orange/0"></div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-10 uppercase tracking-tighter">Work Where It's Best for You</h2>
                        <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed font-light">
                            <div className="space-y-6">
                                <p>We are a Work Anywhere company. This means you can choose to work from home, from our offices, or a mix of both. You manage your workday in the way that makes you most productive.</p>
                                <p>Whether you choose to work remotely, in an office, or transition between the two, you will have the flexibility you need.</p>
                            </div>
                            <div className="space-y-6">
                                <p>We provide the tools and support to ensure you are connected and thriving, no matter your location.</p>
                                <p>By empowering our team to choose their ideal work environment, we foster a culture of trust and high performance. We believe that when you work where it's best for you, you can do your best work.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* A different kind of company */}
                {/* <FadeIn>
                    <div className="bg-gradient-to-br from-zinc-900 via-black to-brand-orange/10 border border-white/10 rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative shadow-2xl">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
                        <div className="lg:w-1/2 relative z-10">
                            <div className="inline-block bg-brand-orange/20 text-brand-orange text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-6">Our Mission</div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">A different kind of company. <br /><span className="text-brand-orange">A Public Benefit Corporation.</span></h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-10 font-light">
                                We are one of the first public companies to become a Public Benefit Corporation. This means our core purpose is not just to maximize shareholder value, but to balance the interests of our customers, employees, and the communities we serve.
                            </p>
                            <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold py-4 px-8 rounded-xl uppercase tracking-widest text-xs transition-all duration-300 flex items-center gap-3 group">
                                Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <div className="lg:w-1/2 relative z-10 w-full">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                            <div className="absolute inset-0 bg-brand-dark/60 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                <PlayCircle className="w-20 h-20 text-brand-orange mb-6 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                                <h3 className="text-white text-2xl font-bold uppercase tracking-widest">Our Vision</h3>
                            </div>
                        </div>
                    </div>
                </FadeIn> */}

                {/* What sets us apart */}
                <FadeIn>
                    <div>
                        <div className="relative mb-16">
                            <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange/0 via-brand-orange to-brand-orange/0"></div>
                            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">What sets us apart</h2>
                        </div>

                        <div className="bg-zinc-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="flex flex-wrap border-b border-white/10 bg-black/60 sticky top-0 z-10 backdrop-blur-md">
                                {['Speed of execution', 'Work Anywhere', 'Do the right thing', 'Customer Success', 'Employee Success', 'Innovation'].map((tab, i) => (
                                    <div key={i} className={`px-6 md:px-8 py-6 text-xs font-bold tracking-[0.2em] uppercase cursor-pointer transition-colors ${i === 0 ? 'text-brand-orange border-b-2 border-brand-orange bg-white/5' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}>
                                        {tab}
                                    </div>
                                ))}
                            </div>
                            <div className="p-10 md:p-16 flex flex-col lg:flex-row gap-16 items-center bg-gradient-to-br from-zinc-900 to-black">
                                <div className="lg:w-1/2 space-y-8">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">Speed is our ultimate competitive advantage.</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                                        We are structured to move fast. We avoid unnecessary bureaucracy, deeply empower our teams, and foster an environment where rapid iteration and execution are celebrated. We believe that moving quickly allows us to innovate faster and deliver better solutions to our customers.
                                    </p>
                                    <button className="text-brand-orange font-bold uppercase tracking-widest text-xs flex items-center gap-3 mt-4 hover:gap-5 transition-all bg-brand-orange/10 px-6 py-3 rounded-full border border-brand-orange/20">
                                        Read more <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <div className="aspect-[4/3] rounded-3xl bg-zinc-800 border border-white/10 overflow-hidden relative shadow-2xl group">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
                                        <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                        <div className="absolute inset-0 flex items-center justify-center p-12 z-20">
                                            <div className="text-6xl md:text-8xl font-black text-white/10 tracking-tighter uppercase transform -rotate-12 group-hover:scale-110 transition-transform duration-700 ease-out backdrop-blur-[2px]">Zerokost<br />Culture</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* News & Recognition */}
                {/* <FadeIn>
                    <div>
                        <div className="relative mb-16">
                            <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange/0 via-brand-orange to-brand-orange/0"></div>
                            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">News and recognition</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "America's Most Loved Workplaces", source: "Newsweek", label: "Top 100" },
                                { title: "Fortune Future 50", source: "Fortune", label: "Strong Growth" },
                                { title: "Best Mid-size Employers", source: "Forbes", label: "Top 500" },
                                { title: "Great Place To Work Certified", source: "Certification", label: "2024-2025" }
                            ].map((item, i) => (
                                <div key={i} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 hover:border-brand-orange/50 transition-all duration-300 flex flex-col justify-between aspect-square group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(255,102,0,0.1)] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 blur-[30px] rounded-full group-hover:bg-brand-orange/10 transition-colors"></div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange mb-6">{item.label}</div>
                                        <h3 className="text-2xl font-bold text-white leading-tight mb-4 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                                    </div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center justify-between border-t border-white/10 pt-6 mt-6">
                                        {item.source} <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-orange transform group-hover:translate-x-2 transition-all" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn> */}

                {/* Grow, contribute quote */}
                {/* <FadeIn>
                    <div className="pb-20">
                        <div className="bg-gradient-to-br from-brand-orange/20 via-zinc-900 to-black border border-brand-orange/30 rounded-[3rem] p-12 md:p-20 relative flex flex-col md:flex-row items-center gap-16 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
                            <div className="w-40 h-40 rounded-full overflow-hidden shrink-0 border-4 border-brand-orange shadow-[0_0_30px_rgba(255,102,0,0.3)] relative z-10 bg-brand-dark">
                                <img 
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                                    alt="Headshot" 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-4xl text-white font-medium italic leading-relaxed mb-8 tracking-tight">
                                    "I have the autonomy to make decisions and the support I need to execute them. It's an environment where innovation is truly encouraged and hard work is recognized."
                                </h3>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-1 bg-brand-orange"></div>
                                    <div className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm">
                                        Sr. Director, IT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn> */}

            </div>

            {/* Premium Job Modal Overlay */}
            {selectedJob && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 h-screen">
                    {/* Exquisite Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-300" onClick={() => setSelectedJob(null)}></div>

                    <div className="bg-[#0f0f11] border border-white/10 rounded-[2.5rem] w-full max-w-5xl max-h-full overflow-hidden relative z-10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col animate-in fade-in zoom-in-95 duration-300">
                        {/* Decorative Gradient Header */}
                        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-orange/10 to-transparent pointer-events-none"></div>

                        {/* Top Sticky Header */}
                        <div className="flex-none p-8 lg:p-10 flex justify-between items-start border-b border-white/5 relative z-20 bg-black/40 backdrop-blur-md">
                            <div className="max-w-3xl">
                                <div className="flex flex-wrap items-center gap-4 mb-5">
                                    <span className="bg-brand-orange text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(255,102,0,0.4)]">
                                        {selectedJob.department}
                                    </span>
                                    <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-2 uppercase tracking-wide">
                                        <MapPin className="w-3.5 h-3.5 text-brand-orange" /> {selectedJob.location}
                                    </span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none">{selectedJob.title}</h2>
                            </div>
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-gray-400 hover:text-white transition-all hover:rotate-90 duration-300 flex-shrink-0"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 lg:p-12 space-y-16">

                            {/* Description Block */}
                            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange"></div>
                                <h3 className="text-sm font-black text-white/50 mb-4 uppercase tracking-[0.2em]">Role Overview</h3>
                                <p className="text-gray-300 leading-relaxed text-xl font-light">{selectedJob.description}</p>
                            </div>

                            {/* Requirements & Responsibilities Split Grid */}
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/10"><Activity className="w-5 h-5 text-brand-orange" /></div>
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Responsibilities</h3>
                                    </div>
                                    <ul className="space-y-5">
                                        {selectedJob.responsibilities.map((req, i) => (
                                            <li key={i} className="flex gap-5 items-start text-gray-400 group">
                                                <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-brand-orange group-hover:scale-150 transition-all rounded-full mt-2.5 shrink-0"></div>
                                                <span className="leading-relaxed font-light">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/10"><Code className="w-5 h-5 text-brand-orange" /></div>
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Requirements</h3>
                                    </div>
                                    <ul className="space-y-5">
                                        {selectedJob.requirements.map((req, i) => (
                                            <li key={i} className="flex gap-5 items-start text-gray-400 group">
                                                <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-brand-orange group-hover:scale-150 transition-all rounded-full mt-2.5 shrink-0"></div>
                                                <span className="leading-relaxed font-light">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                            {/* CTA Box inside scroll */}
                            <div className="bg-gradient-to-r from-brand-orange to-orange-600 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-8 text-black shadow-2xl">
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Ready to make an impact?</h3>
                                    <p className="font-medium opacity-90">Join our team and help build the future of healthcare technology.</p>
                                </div>
                                <button className="bg-white text-black font-black px-10 py-5 rounded-2xl uppercase tracking-widest text-sm hover:scale-105 transition-transform flex-shrink-0">
                                    Apply for this role
                                </button>
                            </div>
                        </div>

                        {/* Bottom Sticky Action Bar */}
                        <div className="flex-none bg-black/80 backdrop-blur-xl border-t border-white/10 p-6 lg:p-8 flex justify-end gap-4 z-20">
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="px-8 py-4 font-bold text-gray-500 hover:text-white uppercase tracking-widest text-xs transition-colors rounded-xl hover:bg-white/5"
                            >
                                Close
                            </button>
                            <button className="bg-white hover:bg-gray-200 text-black font-black px-10 py-4 rounded-xl uppercase tracking-widest text-xs transition-colors shadow-lg shadow-white/10">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Careers;
