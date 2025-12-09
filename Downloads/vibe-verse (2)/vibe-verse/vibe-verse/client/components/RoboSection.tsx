import { useRef, useEffect } from "react";
import { setupScrollAnimation, defaultObserverOptions } from "../lib/animations";
import { Bot, Activity, MapPin, Users, Languages, Truck } from "lucide-react";

export default function RoboSection() {
    const headingRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const options = { ...defaultObserverOptions } as IntersectionObserverInit;

        if (headingRef.current) {
            setupScrollAnimation(headingRef.current, 'fadeInUp', options);
        }

        if (cardsRef.current) {
            setupScrollAnimation(cardsRef.current, 'fadeInUp', options);
        }
    }, []);

    return (
        <section className="relative py-20 overflow-hidden bg-background">
            {/* Background effects matching ConsultingSection */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ffff] rounded-full mix-blend-screen filter blur-[120px] opacity-5"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16" ref={headingRef}>
                    <h2 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00ffff] mb-10 text-center"
                    >
                        Smart Hospital Automation
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        Deploy autonomous service robots and intelligent kiosks to revolutionize patient care, crowd management, and hospital logistics.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto" ref={cardsRef}>

                    {/* Robot Card */}
                    <div className="group relative rounded-2xl border border-[#00ffff]/20 bg-[#0a1a2a]/50 backdrop-blur-sm overflow-hidden hover:border-[#00ffff]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                        <div className="relative h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2a] via-transparent to-transparent z-10" />
                            <img
                                src="/robo1.jpeg"
                                alt="Healthcare Robot"
                                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 z-20 bg-[#00ffff]/10 backdrop-blur-md px-4 py-1 rounded-full border border-[#00ffff]/30 text-[#00ffff] text-sm font-semibold flex items-center gap-2">
                                <Bot size={14} /> Robotics
                            </div>
                        </div>

                        <div className="p-8 relative z-20">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00ffff] transition-colors">
                                AI Healthcare Robot
                            </h3>
                            <p className="text-foreground/70 mb-6 leading-relaxed">
                                Autonomous assistant robots handling real-time translation, patient guidance, and logistics so staff can focus on care.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 text-sm text-foreground/80">
                                    <div className="p-2 rounded bg-[#00ffff]/10 text-[#00ffff]"><Languages size={16} /></div>
                                    Real-time Translation
                                </div>
                                <div className="flex items-center gap-3 text-sm text-foreground/80">
                                    <div className="p-2 rounded bg-[#00ffff]/10 text-[#00ffff]"><MapPin size={16} /></div>
                                    Patient Wayfinding
                                </div>
                                <div className="flex items-center gap-3 text-sm text-foreground/80">
                                    <div className="p-2 rounded bg-[#00ffff]/10 text-[#00ffff]"><Truck size={16} /></div>
                                    Logistics Support
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kiosk Card */}
                    <div className="group relative rounded-2xl border border-[#00ffff]/20 bg-[#0a1a2a]/50 backdrop-blur-sm overflow-hidden hover:border-[#00ffff]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                        <div className="relative h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2a] via-transparent to-transparent z-10" />
                            <img
                                src="/robo2.jpeg"
                                alt="Health Kiosk"
                                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 z-20 bg-[#00ffff]/10 backdrop-blur-md px-4 py-1 rounded-full border border-[#00ffff]/30 text-[#00ffff] text-sm font-semibold flex items-center gap-2">
                                <Activity size={14} /> Smart Kiosk
                            </div>
                        </div>

                        <div className="p-8 relative z-20">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00ffff] transition-colors">
                                AI Health Kiosk
                            </h3>
                            <p className="text-foreground/70 mb-6 leading-relaxed">
                                Self-service stations for check-ins, vitals monitoring, and intelligent crowd management to reduce wait times.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 text-sm text-foreground/80">
                                    <div className="p-2 rounded bg-[#00ffff]/10 text-[#00ffff]"><Users size={16} /></div>
                                    Crowd Management
                                </div>
                                <div className="flex items-center gap-3 text-sm text-foreground/80">
                                    <div className="p-2 rounded bg-[#00ffff]/10 text-[#00ffff]"><Activity size={16} /></div>
                                    Vitals Check
                                </div>
                                <div className="flex items-center gap-3 text-sm text-foreground/80">
                                    <div className="p-2 rounded bg-[#00ffff]/10 text-[#00ffff]"><MapPin size={16} /></div>
                                    Guidance System
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
