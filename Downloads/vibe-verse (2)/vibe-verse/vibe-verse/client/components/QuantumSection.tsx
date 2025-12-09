import { Zap, Cpu, Lock, Play, ArrowRight, BarChart3, Activity, Gauge } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { setupScrollAnimation, setupStaggeredAnimations, defaultObserverOptions } from "../lib/animations";

export default function QuantumSection() {
  // Refs for animation elements
  const headingRef = useRef(null);
  const videoRef = useRef(null);
  const featuresRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const options = { ...defaultObserverOptions } as IntersectionObserverInit;
    
    if (headingRef.current) setupScrollAnimation(headingRef.current, 'fadeInUp', options);
    if (videoRef.current) setupScrollAnimation(videoRef.current, 'fadeInRight', options);
    if (featuresRef.current)
      setupStaggeredAnimations(featuresRef.current.querySelectorAll('.feature-item'), 'fadeInLeft', options, 0.2);
    if (buttonsRef.current) setupScrollAnimation(buttonsRef.current, 'fadeInUp', options);
    if (statsRef.current) setupScrollAnimation(statsRef.current, 'fadeInUp', options);
  }, []);

  const navigate = useNavigate();

  const features = [
    {
      icon: Cpu,
      title: "Quantum Simulations",
      description: "Advanced quantum computing simulations for complex molecular modeling and optimization problems.",
    },
    {
      icon: Zap,
      title: "Quantum Optimization",
      description: "Leverage quantum algorithms to solve optimization challenges in logistics, finance, and resource management.",
    },
    {
      icon: Lock,
      title: "Quantum Cryptography",
      description: "Next-generation security protocols using quantum key distribution for unhackable communications.",
    },
  ];

  // New numerical data
  const stats = [
    {
      icon: BarChart3,
      value: "92%",
      label: "R&D Efficiency",
    },
    {
      icon: Activity,
      value: "87%",
      label: "Algorithm Accuracy",
    },
    {
      icon: Gauge,
      value: "78%",
      label: "Quantum Utilization",
    },
  ];

  return (
    <section id="quantum" className="relative py-12 md:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-quantum rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-ai rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-5"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Left column - Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div ref={headingRef}>
              <h2 className="text-4xl md:text-6xl leading-tight text-white">
                Quantum Computing the Future Starts Here
              </h2>
              <p className="text-xl text-foreground/70 mt-6 max-w-xl mb-12">
                Master your Future <br />
                with Quantum Computing
              </p>
            </div>
            
            <div className="space-y-10 mt-24" ref={featuresRef}>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 hover-lift card-hover feature-item">
                    <div className="p-3 rounded-lg bg-[#0a1a2a] border border-[#00ffff]/20 hover-glow">
                      <Icon className="w-6 h-6 text-[#00ffff]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                      <p className="text-foreground/60 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Added Numerical Stats Section */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6 mt-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 bg-[#0a1a2a]/40 rounded-xl border border-[#00ffff]/20 hover:border-[#00ffff]/40 transition-all hover-lift hover-glow"
                  >
                    <Icon className="w-6 h-6 text-[#00ffff] mb-2" />
                    <span className="text-3xl font-bold text-[#00ffff]">{stat.value}</span>
                    <span className="text-sm text-foreground/60">{stat.label}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-10" ref={buttonsRef}>
              <button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg"
              >
                Get Started
              </button>
              <button className="flex items-center gap-2 border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-8 py-3 rounded-lg font-semibold">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Right column - Video */}
          <div className="w-full lg:w-1/2 relative" ref={videoRef}>
            <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[#00ffff]/30 shadow-[0_0_30px_rgba(0,255,255,0.15)] hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2a] to-[#0a0e27] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop" 
                  alt="Quantum Computing" 
                  className="w-full h-full object-cover opacity-70"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-[#00ffff]/20 backdrop-blur-md flex items-center justify-center border border-[#00ffff]/50 hover:bg-[#00ffff]/30 transition-all transform hover:scale-110 group">
                    <div className="w-16 h-16 rounded-full bg-[#00ffff] flex items-center justify-center text-[#0a0e27]">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Floating tech elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0a1a2a] rounded-lg border border-[#00ffff]/30 flex items-center justify-center rotate-12 shadow-lg">
              <Cpu className="w-10 h-10 text-[#00ffff]" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#0a1a2a] rounded-lg border border-[#00ffff]/30 flex items-center justify-center -rotate-12 shadow-lg">
              <Zap className="w-8 h-8 text-[#00ffff]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
