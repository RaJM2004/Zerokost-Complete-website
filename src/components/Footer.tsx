import React from 'react';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 bg-black border-t border-white/10 text-sm relative z-10">
            <div className="max-w-6xl mx-auto px-4">

                {/* Top Section: Logo & Description */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center mb-4">
                            <img src="/Healthcare.png" alt="Zerokost Healthcare Logo" className="h-12 w-auto object-contain" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Zerokost Healthcare Pvt. Ltd.</h3>
                        <p className="text-gray-400 leading-relaxed text-xs mb-3">
                            AI-Deep-Powered Cloud Software for Global Life Sciences. "An enterprise-ready AI solution that keeps life sciences simple, secure, and compliant."
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs">
                            <div className="flex items-center gap-2 text-gray-300">
                                <span className="text-gray-500">Queries?</span>
                                <a href="mailto:info@zerokost.com" className="text-brand-orange hover:underline font-medium">info@zerokost.com</a>
                            </div>
                            <div className="flex items-center gap-2 text-brand-orange font-medium">
                                <Phone size={14} />
                                <span>+91 7036955133</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-6 self-end">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-white p-2.5 flex items-center justify-center border border-white/10 shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                                <img src="https://t-hub.co/wp-content/uploads/2025/05/t-hub-logo-100.png" alt="T-Hub" className="w-full h-auto object-contain" />
                            </div>
                            <div className="w-20 h-20 rounded-full bg-white p-2.5 flex items-center justify-center border border-white/10 shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                                <img src="https://t-hub.co/wp-content/uploads/2026/01/Telangana-Rising-logo.png" alt="Telangana Rising" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-6 text-gray-400 text-xs justify-end">
                            <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-brand-orange transition-colors">Legal</a>
                            <a href="#" className="hover:text-brand-orange transition-colors">Terms</a>
                            <a href="#" className="hover:text-brand-orange transition-colors">Support</a>
                        </div>
                    </div>
                </div>


                {/* Address Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">

                    {/* IN Corporate Office */}
                    <div className="bg-white/[0.03] p-4 rounded-lg border border-white/5 hover:border-brand-orange/30 transition-colors">
                        <div className="flex items-center gap-2 mb-2 text-white font-medium text-xs">
                            <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 rounded-[2px]" />
                            <span>IN Corporate:</span>
                        </div>
                        <p className="text-gray-400 text-[10px] leading-relaxed">
                            T-Hub's main facility (Phase 2), Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha, Hyderabad Knowledge City, Serilingampally, Hyderabad, Telangana 500081
                        </p>
                    </div>

                    {/* IN Register Office */}
                    <div className="bg-white/[0.03] p-4 rounded-lg border border-white/5 hover:border-brand-orange/30 transition-colors">
                        <div className="flex items-center gap-2 mb-2 text-white font-medium text-xs">
                            <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 rounded-[2px]" />
                            <span>IN Register:</span>
                        </div>
                        <p className="text-gray-400 text-[10px] leading-relaxed">
                            Plot No 84-85, Flat No.104, Siva Sai Heights, Gokul Plots, Tirumalgiri, Hyderabad, Telangana — PIN 500072
                        </p>
                    </div>
                </div>

                {/* Government & Certifications */}
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 py-10 mb-6 border-y border-white/5 relative">
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent opacity-50"></div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div className="group relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange/0 via-brand-orange/10 to-brand-orange/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="bg-white/90 group-hover:bg-white p-3 rounded-2xl flex items-center justify-center h-[72px] w-[140px] border border-white/20 hover:border-brand-orange/50 transition-all duration-300 shadow-xl group-hover:-translate-y-1.5 cursor-default relative overflow-hidden">
                                <img src="/png-clipart-government-of-india-ministry-of-micro-small-and-medium-enterprises-small-business-india-text-logo-thumbnail.png" alt="MSME Logo" className="h-[80%] w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange/0 via-brand-orange/10 to-brand-orange/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="bg-white/90 group-hover:bg-white p-3 rounded-2xl flex items-center justify-center h-[72px] w-[140px] border border-white/20 hover:border-brand-orange/50 transition-all duration-300 shadow-xl group-hover:-translate-y-1.5 cursor-default relative overflow-hidden">
                                <img src="/DPIIT-header.png" alt="Startup India DPIIT Logo" className="h-[90%] w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange/0 via-brand-orange/10 to-brand-orange/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="bg-white/90 group-hover:bg-white p-3 rounded-2xl flex items-center justify-center h-[72px] w-[140px] border border-white/20 hover:border-brand-orange/50 transition-all duration-300 shadow-xl group-hover:-translate-y-1.5 cursor-default relative overflow-hidden">
                                <img src="/WhatsApp-Image-2020-12-18-at-3.49.31-PM-1.jpeg" alt="Government of India Logo" className="h-full w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-multiply" />
                            </div>
                        </div>

                    </div>

                    <div className="text-gray-300 text-sm xl:min-w-[320px] text-center lg:text-right bg-zinc-900/50 px-8 py-5 rounded-2xl border border-white/10 hover:border-brand-orange/40 transition-all duration-500 shadow-inner group hover:-translate-y-1 cursor-default relative overflow-hidden backdrop-blur-md">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-[40px] rounded-full group-hover:bg-brand-orange/20 transition-all duration-700"></div>
                        <p className="font-black text-white mb-2.5 uppercase text-xs tracking-[0.2em] group-hover:text-brand-orange transition-colors relative z-10 flex items-center justify-center lg:justify-end gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50 group-hover:bg-brand-orange animate-pulse"></span>
                            Registered Enterprise
                        </p>
                        <p className="text-xs font-mono tracking-wider bg-black/40 inline-block px-3.5 py-1.5 rounded-md border border-white/5 text-gray-400 group-hover:border-brand-orange/20 transition-all duration-300 relative z-10">
                            CIN: <span className="font-bold text-white group-hover:text-brand-orange transition-colors">U46497TS2023PTC172499</span>
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-subtext font-light">
                    <span>© 2023 ZEROKOST HEALTHCARE PVT. LTD. ALL RIGHTS RESERVED.</span>
                    <span className="text-gray-600">Making Life Sciences Simple, Secure, & Compliant.</span>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
