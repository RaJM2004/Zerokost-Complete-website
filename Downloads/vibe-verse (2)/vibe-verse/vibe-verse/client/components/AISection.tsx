import { Brain, BarChart3, Zap, Play, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { setupScrollAnimation, setupStaggeredAnimations, defaultObserverOptions } from "../lib/animations";

export default function AISection() {
  const aiServices = [
    {
      icon: Brain,
      title: "Generative AI",
      description: "Cutting-edge generative models for content creation, automation, and intelligent insights generation.",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced machine learning models for forecasting trends, customer behavior, and market dynamics.",
    },
    {
      icon: Zap,
      title: "Agentic AI",
      description: "Intelligent agents that can perform tasks, make decisions, and interact with users in natural language.",
    },
  ];
  
  // Refs for animation elements
  const headingRef = useRef(null);
  const videoRef = useRef(null);
  const servicesRef = useRef(null);
  const buttonsRef = useRef(null);
  const navigate = useNavigate();
  const handleGetStarted = (e?: any) => {
    if (e) e.preventDefault();
    navigate('/contact');
  };

  useEffect(() => {
    // Set up scroll animations with properly typed options
    const options = { ...defaultObserverOptions } as IntersectionObserverInit;
    
    if (headingRef.current) {
      setupScrollAnimation(headingRef.current, 'fadeInUp', options);
    }
    
    if (videoRef.current) {
      setupScrollAnimation(videoRef.current, 'fadeInLeft', options);
    }
    
    if (servicesRef.current) {
      setupStaggeredAnimations(servicesRef.current.querySelectorAll('.service-item'), 'fadeInRight', options, 0.2);
    }
    
    if (buttonsRef.current) {
      setupScrollAnimation(buttonsRef.current, 'fadeInUp', options);
    }
  }, []);

  return (
    <section id="ai" className="relative py-8 md:py-10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-ai rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-quantum rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        {/* Circuit board pattern overlay */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-5"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Left column - Video */}
          <div className="w-full lg:w-1/2 relative" ref={videoRef}>
            <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[#00ffff]/30 shadow-[0_0_30px_rgba(0,255,255,0.15)] hover-lift">
              {/* Video placeholder with AI design */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2a] to-[#0a0e27] flex items-center justify-center">
                <img 
                  src="https://blog.thinkdm2.com/hs-fs/hubfs/machine%20learning.jpg?width=800&name=machine%20learning.jpg" 
                  alt="AI Technology" 
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
                
                {/* Glowing edges */}
                <div className="absolute inset-0 border-2 border-[#00ffff]/30 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
            
            {/* Floating tech elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0a1a2a] rounded-lg border border-[#00ffff]/30 flex items-center justify-center rotate-12 shadow-lg">
              <Brain className="w-12 h-12 text-[#00ffff]" />
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div ref={headingRef}>
              <h2 className="text-4xl md:text-6xl leading-tight text-white">
                AI Transform Businesses with Automation
              </h2>
               <p className="text-xl text-foreground/70 mt-6 max-w-xl mb-12">
                Implement intelligent automation and data-driven strategies with our AI-powered solutions.
              </p>
            </div>
            
            <div className="space-y-10 mt-18 mx-10" ref={servicesRef}>
              {aiServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex items-start gap-4 hover-lift card-hover service-item">
                    <div className="p-3 rounded-lg bg-[#0a1a2a] border border-[#00ffff]/20 hover-glow">
                      <Icon className="w-6 h-6 text-[#00ffff]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                      <p className="text-foreground/60 text-sm">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4" ref={buttonsRef}>
              <button onClick={handleGetStarted} className="border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-8 py-3 rounded-lg font-semibold">
                Get Started
              </button>
              <button onClick={() => navigate('/#/ai')} className="flex items-center gap-2 border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-8 py-3 rounded-lg font-semibold">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
