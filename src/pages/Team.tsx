import React from 'react';
import { FadeIn } from '../components/Animations';
import { Linkedin, Mail } from 'lucide-react';

const Team: React.FC = () => {
    const hierarchy = [
        {
            level: "L5",
            members: [{ name: "Ashwin Kumar", role: "Executive Director", bio: "Leading the company vision and enterprise AI strategy.", image: "" }]
        },
        {
            level: "L4",
            members: [{ name: "Ananya P", role: "Director", bio: "Leading operational scale and financial strategy.", image: "" }]
        },
        {
            level: "L3",
            members: [{ name: "Rahul Varma", role: "Head of Operations", bio: "Architecting high-scale agentic systems and products.", image: "" }]
        },
        {
            level: "L2",
            members: [
                { name: "Raksha", role: "Lead Engineer", bio: "Overseeing cloud infrastructure and scalable deployments.", image: "" },
                { name: "Raj", role: "AI Research Lead", bio: "Defining the future of biologics discovery and enterprise AI.", image: "" },
                { name: "Ammar", role: "Software Lead", bio: "Managing core engineering teams and development pipelines.", image: "" }
            ]
        },
        {
            level: "L0",
            members: [
                { name: "Adnan", role: "Software Engineer", bio: "Building resilient front-end and back-end architectures.", image: "" },
                { name: "Abhilash", role: "Software Engineer", bio: "Optimizing integrations and server-side performance.", image: "" },
                { name: "Sai Kiran", role: "Machine Learning Engineer", bio: "Training and fine-tuning advanced foundational models.", image: "" }
            ]
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#050505] font-sans relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

            <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10 text-center">
                <FadeIn>
                    <div className="mb-20">
                        <h1 className="text-5xl md:text-[5.5rem] font-extrabold text-white mb-6 uppercase tracking-tight">
                            THE <span className="text-[#00e5ff]">ORGANIZATION</span>
                        </h1>
                        <p className="text-lg md:text-[17px] text-[#9ca3af] max-w-3xl mx-auto leading-relaxed font-normal">
                            Our functional hierarchy spanning from L5 leadership down to our dedicated L0 engineering and AI specialists.
                        </p>
                    </div>
                </FadeIn>

                {/* Orthogram Tree Wrapper */}
                <div className="flex flex-col items-center w-full overflow-x-hidden md:overflow-x-auto pb-10">
                    <div className="w-full md:min-w-fit md:px-10 flex flex-col items-center">
                        {hierarchy.map((level, levelIdx) => (
                            <div key={level.level} className="flex flex-col items-center w-full md:w-auto">

                                {/* Top Connector arriving from Parent Row */}
                                {levelIdx > 0 && (
                                    <div className="w-[2px] h-10 md:h-12 bg-white/10"></div>
                                )}

                                {/* Card Row Container */}
                                <div className="flex flex-col md:flex-row gap-10 md:gap-6 relative items-center w-full md:w-auto">

                                    {/* Horizontal Line Branch for Siblings (Desktop Only) */}
                                    {level.members.length > 1 && (
                                        <div className="hidden md:block absolute top-0 h-[2px] bg-white/10" style={{ left: '140px', width: 'calc(100% - 280px)' }}></div>
                                    )}

                                    {level.members.map((member, idx) => (
                                        <div key={idx} className="flex flex-col items-center w-[280px] shrink-0">

                                            {/* Sibling Connector for Mobile */}
                                            {idx > 0 && (
                                                <div className="md:hidden w-[2px] h-10 bg-white/10"></div>
                                            )}

                                            {/* Top Drop Line for Sibling Cards touching the horizontal bar (Desktop) */}
                                            {level.members.length > 1 && (
                                                <div className="hidden md:block w-[2px] h-8 bg-white/10"></div>
                                            )}

                                            {/* Member Card */}
                                            <FadeIn delay={levelIdx * 0.1 + idx * 0.1}>
                                                <div className="w-[280px] bg-[#101010] border border-white/5 rounded-[24px] p-6 text-center shadow-xl hover:border-[#00e5ff]/40 hover:shadow-[0_10px_30px_-10px_rgba(0,229,255,0.2)] transition-all duration-300 relative group cursor-pointer hover:-translate-y-1">

                                                    {/* Floating Level Badge */}
                                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00e5ff] text-black text-[11px] font-black px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,229,255,0.3)] tracking-wider">
                                                        {level.level}
                                                    </div>

                                                    {/* Avatar */}
                                                    <div className="mt-4 w-20 h-20 mx-auto rounded-full bg-[#151515] border border-white/5 flex items-center justify-center mb-5 text-2xl font-bold text-white/30 group-hover:text-[#00e5ff] group-hover:border-[#00e5ff]/30 transition-all shadow-inner overflow-hidden">
                                                        {member.image ? (
                                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                                        ) : (
                                                            member.name.split(' ').map(n => n[0]).join('').substring(0, 2)
                                                        )}
                                                    </div>

                                                    <h3 className="text-xl font-bold text-white group-hover:text-[#00e5ff] mb-1 transition-colors">{member.name}</h3>
                                                    <p className="text-[#00e5ff] text-[11px] font-bold uppercase tracking-widest opacity-80 duration-500 transition-all group-hover:mb-2">{member.role}</p>

                                                    {/* Hidden Info Section (reveals on hover) */}
                                                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                                        <div className="pt-3 mt-1">
                                                            <p className="text-[#888888] text-[13px] leading-relaxed line-clamp-3 px-2">{member.bio}</p>

                                                            {/* Social Links */}
                                                            <div className="flex justify-center gap-3 mt-4 border-t border-white/5 pt-4">
                                                                <a href="#" className="p-2 rounded-xl bg-white/5 text-[#666666] hover:text-[#00e5ff] hover:bg-[#00e5ff]/10 transition-all">
                                                                    <Linkedin className="w-[18px] h-[18px]" />
                                                                </a>
                                                                <a href="#" className="p-2 rounded-xl bg-white/5 text-[#666666] hover:text-[#00e5ff] hover:bg-[#00e5ff]/10 transition-all">
                                                                    <Mail className="w-[18px] h-[18px]" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
