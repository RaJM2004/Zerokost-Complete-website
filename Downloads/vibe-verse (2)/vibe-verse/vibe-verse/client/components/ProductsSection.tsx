import React, { useEffect, useRef } from 'react';
import { Cpu, Sparkles, BarChart3, Code, CheckCircle, Users, Shield, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { setupScrollAnimation, setupStaggeredAnimations, defaultObserverOptions } from "../lib/animations";

export default function ProductsSection() {
  // Create refs for animation elements
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredProductRef = useRef<HTMLDivElement>(null);
  const featuredVideoRef = useRef<HTMLDivElement>(null);
  const productsSuiteHeaderRef = useRef<HTMLDivElement>(null);
  const productsGridRef = useRef<HTMLDivElement>(null);
  const enterpriseSolutionRef = useRef<HTMLDivElement>(null);

  // Setup animations
  useEffect(() => {
    // Create options with proper typing
    const options = { ...defaultObserverOptions } as IntersectionObserverInit;
    
    if (headerRef.current) {
      setupScrollAnimation(headerRef.current, 'fadeInUp', options);
    }
    
    if (featuredProductRef.current) {
      setupScrollAnimation(featuredProductRef.current, 'fadeInLeft', options);
    }
    
    if (featuredVideoRef.current) {
      setupScrollAnimation(featuredVideoRef.current, 'fadeInRight', options);
    }
    
    if (productsSuiteHeaderRef.current) {
      setupScrollAnimation(productsSuiteHeaderRef.current, 'fadeInUp', options);
    }
    
    if (productsGridRef.current) {
      setupStaggeredAnimations(productsGridRef.current.querySelectorAll('.product-card'), 'fadeInUp', options, 0.15);
    }
    
    if (enterpriseSolutionRef.current) {
      setupScrollAnimation(enterpriseSolutionRef.current, 'fadeInUp', options);
    }
  }, []);

  const navigate = useNavigate();

  const products = [
    {
      icon: Cpu,
      name: "Quantum Computing Platform",
      description: "Enterprise-grade quantum computing platform with intuitive interfaces for complex computations.",
      features: ["Quantum Simulation", "Algorithm Library", "Cloud Integration"],
      category: "Technology",
      price: "$499",
      period: "monthly",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Sparkles,
      name: "AI Pre-built Models",
      description: "Comprehensive AI platform with pre-built models for generative AI, NLP, and predictive analytics.",
      features: ["Generative Models", "NLP Tools", "Analytics Suite"],
      category: "Artificial Intelligence",
      price: "$699",
      period: "monthly",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: BarChart3,
      name: "Consulting AI Platform",
      description: "Strategic consulting platform combining AI insights with business intelligence tools.",
      features: ["Data Analytics", "Strategy Planning", "Performance Tracking"],
      category: "Business",
      price: "$399",
      period: "monthly",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Code,
      name: "AI Integrated Software Platform",
      description: "Complete development environment with integrated tools for modern software engineering.",
      features: ["CI/CD Pipeline", "Code Analysis", "Team Collaboration"],
      category: "Development",
      price: "$299",
      period: "monthly",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Shield,
      name: "Data Privacy & Compliance Solution",
      description: "Enterprise security solution with advanced threat detection and data protection.",
      features: ["Threat Detection", "Data Encryption", "Compliance Tools"],
      category: "Security",
      price: "$599",
      period: "monthly",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Users,
      name: "Collaborative Workspace Platform",
      description: "Collaborative workspace platform designed for remote and hybrid team productivity.",
      features: ["Project Management", "Communication Tools", "Resource Allocation"],
      category: "Collaboration",
      price: "$349",
      period: "monthly",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <section id="products" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-quantum rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-ai rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        {/* Circuit board pattern overlay */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-5xl md:text-7xl font leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00ffff]">
                Innovative Products
              </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Cutting-edge solutions designed to transform your business and drive innovation
          </p>
        </div>
        
        {/* Featured Product Showcase */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Left column - Content */}
          <div className="w-full lg:w-1/2 space-y-8" ref={featuredProductRef}>
            <div>
              <h2 className="text-3xl md:text-4xl leading-tight text-white">
                Discover Our Flagship Product
              </h2>
              <p className="text-xl text-foreground/70 mt-6 max-w-xl">
                QuantumOS: The Future of Computing<br />
                Powered by Advanced Quantum Technology
              </p>
            </div>
            
            <div className="space-y-4 mt-16">
              <div className="flex items-center gap-3 hover-lift">
                <div className="w-6 h-6 rounded-full bg-[#00ffff]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00ffff] text-sm">✓</span>
                </div>
                <span className="text-foreground/80">Quantum Simulation Engine</span>
              </div>
              <div className="flex items-center gap-3 hover-lift">
                <div className="w-6 h-6 rounded-full bg-[#00ffff]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00ffff] text-sm">✓</span>
                </div>
                <span className="text-foreground/80">Advanced Algorithm Library</span>
              </div>
              <div className="flex items-center gap-3 hover-lift">
                <div className="w-6 h-6 rounded-full bg-[#00ffff]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00ffff] text-sm">✓</span>
                </div>
                <span className="text-foreground/80">Seamless Cloud Integration</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => navigate('/contact')} className="border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-8 py-3 rounded-lg font-semibold">
                Get Started
              </button>
              <button className="flex items-center gap-2 border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-8 py-3 rounded-lg font-semibold">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Right column - Video */}
          <div className="w-full lg:w-1/2 relative" ref={featuredVideoRef}>
            <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[#00ffff]/30 shadow-[0_0_30px_rgba(0,255,255,0.15)] hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2a] to-[#0a0e27] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" 
                  alt="Quantum Computing" 
                  className="w-full h-full object-cover opacity-70"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="w-20 h-20 rounded-full bg-[#00ffff]/20 backdrop-blur-md flex items-center justify-center border border-[#00ffff]/50 hover:bg-[#00ffff]/30 transition-all transform hover:scale-110 group">
                    <div className="w-16 h-16 rounded-full bg-[#00ffff] flex items-center justify-center text-[#0a0e27]">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </Button>
                </div>
                
                {/* Glowing edges */}
                <div className="absolute inset-0 border-2 border-[#00ffff]/30 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
            
            {/* Floating tech elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0a1a2a] rounded-lg border border-[#00ffff]/30 flex items-center justify-center rotate-12 shadow-lg">
              <Cpu className="w-10 h-10 text-[#00ffff]" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#0a1a2a] rounded-lg border border-[#00ffff]/30 flex items-center justify-center -rotate-12 shadow-lg">
              <Sparkles className="w-8 h-8 text-[#00ffff]" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-40">
          <div className="text-center mb-16" ref={productsSuiteHeaderRef}>
            <h3 className="text-3xl font leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00ffff]">
                Our Products Suite
              </h3>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={productsGridRef}>
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-lg overflow-hidden bg-[#0a1a2a]/40 backdrop-blur-sm hover:bg-[#0a1a2a]/60 transition-all duration-300 border border-[#00ffff]/20 hover:border-[#00ffff]/40 product-card"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#00ffff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  
                  {/* Product Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2a] to-transparent"></div>
                    <span className="absolute top-4 right-4 text-xs font-medium text-[#00ffff] bg-[#00ffff]/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#00ffff]/10 text-[#00ffff] hover-glow">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-[#00ffff] transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    
                    <p className="text-foreground/60 mb-6 text-sm">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle className="w-4 h-4 text-[#00ffff]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    
                    <button onClick={() => navigate('/contact')} className="w-full border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all px-6 py-2 rounded-lg font-medium hover-scale">
                      Get Started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Featured Enterprise Solution */}
        <div className="mt-40 bg-[#0a1a2a]/40 backdrop-blur-sm border border-[#00ffff]/20 rounded-xl overflow-hidden" ref={enterpriseSolutionRef}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center">
              <div className="inline-block px-4 py-1 bg-[#00ffff]/10 rounded-full text-[#00ffff] text-sm font-medium mb-4">
                Enterprise Solution
              </div>
              <h3 className="text-3xl font leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00ffff]">
               Integrated AI Suite
              </h3>
              <p className="text-foreground/60 mb-6">
                Our comprehensive enterprise solution combines the power of quantum computing, AI, and expert consulting to transform your business operations.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 hover-lift">
                  <div className="w-6 h-6 rounded-full bg-[#00ffff]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00ffff] text-sm">✓</span>
                  </div>
                  <span className="text-foreground/80">24/7 Technical Support</span>
                </div>
                <div className="flex items-center gap-3 hover-lift">
                  <div className="w-6 h-6 rounded-full bg-[#00ffff]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00ffff] text-sm">✓</span>
                  </div>
                  <span className="text-foreground/80">Custom Implementation</span>
                </div>
                <div className="flex items-center gap-3 hover-lift">
                  <div className="w-6 h-6 rounded-full bg-[#00ffff]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00ffff] text-sm">✓</span>
                  </div>
                  <span className="text-foreground/80">Dedicated Account Manager</span>
                </div>
              </div>
              
              <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all px-8 py-3 rounded-lg font-semibold hover-scale hover-glow">
                Contact Sales <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://blog.iaac.net/wp-content/uploads/2024/03/1_3srZsMKZNODm6jpxr7Klwg.png" 
                alt="Enterprise AI Suite" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
