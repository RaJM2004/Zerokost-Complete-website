import { Briefcase, Lightbulb, Target, Users, BarChart3, Shield, ArrowRight, Play, Zap, Cpu, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { setupScrollAnimation, setupStaggeredAnimations, defaultObserverOptions } from "../lib/animations";

export default function ConsultingSection() {
  // Refs for animation elements
  const headingRef = useRef(null);
  const videoRef = useRef(null);
  const servicesRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Set up scroll animations with properly typed options
    const options = { ...defaultObserverOptions } as IntersectionObserverInit;
    
    if (headingRef.current) {
      setupScrollAnimation(headingRef.current, 'fadeInUp', options);
    }
    
    if (videoRef.current) {
      setupScrollAnimation(videoRef.current, 'fadeInRight', options);
    }
    
    if (servicesRef.current) {
      setupStaggeredAnimations(servicesRef.current.querySelectorAll('.service-item'), 'fadeInLeft', options, 0.2);
    }
    
    if (buttonsRef.current) {
      setupScrollAnimation(buttonsRef.current, 'fadeInUp', options);
    }
  }, []);

  const navigate = useNavigate();
  const handleGetStarted = (e?: any) => {
    if (e) e.preventDefault();
    navigate('/contact');
  };

  const services = [
    {
      icon: Briefcase,
      title: "Business Consulting",
      description: "Strategic guidance for modernizing your business operations and digital infrastructure.",
    },
    {
      icon: Lightbulb,
      title: "AI Strategy & Implementation",
      description: "Tailored AI roadmaps and deployment strategies aligned with your business objectives.",
    },
    {
      icon: Target,
      title: "Tech Integration Services",
      description: "Seamless integration of quantum and AI technologies into existing enterprise systems.",
    },
  ];

  return (
    <section id="consulting" className="relative py-8 md:py-10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-quantum rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-ai rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        {/* Circuit board pattern overlay */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-5"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Left column - Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div ref={headingRef}>
              <h2 className="text-4xl md:text-6xl leading-tight text-white">
                Expert Consulting Services
              </h2>
              <p className="text-xl text-foreground/70 mt-6 max-w-xl mb-12">
                Strategic Business Solutions<br />
                Powered by Innovation
              </p>
            </div>
            
            <div className="space-y-10 mt-16" ref={servicesRef}>
              {services.map((service, index) => {
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
              <Button onClick={() => navigate('/#/consulting')} className="flex items-center gap-2 border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-8 py-3 rounded-lg font-semibold">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Right column - Video */}
          <div className="w-full lg:w-1/2 relative" ref={videoRef}>
            <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[#00ffff]/30 shadow-[0_0_30px_rgba(0,255,255,0.15)] hover-lift">
              {/* Video placeholder with circuit board design */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2a] to-[#0a0e27] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" 
                  alt="Business Consulting" 
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
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0a1a2a] rounded-lg border border-[#00ffff]/30 flex items-center justify-center rotate-12 shadow-lg">
              <Lightbulb className="w-10 h-10 text-[#00ffff]" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#0a1a2a] rounded-lg border border-[#00ffff]/30 flex items-center justify-center -rotate-12 shadow-lg">
              <Target className="w-8 h-8 text-[#00ffff]" />
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
}
