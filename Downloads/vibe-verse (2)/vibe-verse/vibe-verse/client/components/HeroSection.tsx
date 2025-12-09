import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, MonitorSmartphone, Scale } from "lucide-react";
import { setupScrollAnimation } from "../lib/animations";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const handleGetStarted = (e?: any) => {
    if (e) e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${263 + Math.sin(Date.now() * 0.001 + i) * 20}, 70%, 65%)`;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `hsla(263, 70%, 65%, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;

    if (!heading || !subheading || !cta) return;

    // Enhanced animations using our animation utility
    const cleanupHeading = setupScrollAnimation(heading, 'fadeInDown');
    const cleanupSubheading = setupScrollAnimation(subheading, 'fadeInUp');
    const cleanupCta = setupScrollAnimation(cta, 'scaleIn');

    // Set manual delays for initial hero section load
    heading.style.transitionDelay = '300ms';
    subheading.style.transitionDelay = '600ms';
    cta.style.transitionDelay = '900ms';

    return () => {
      cleanupHeading();
      cleanupSubheading();
      cleanupCta();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "hsl(0, 0%, 3%)" }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Three small buttons for Quantum AI Consulting */}
       
        
        <h2 
          ref={headingRef}
          className="text-5xl md:text-7xl font leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00ffff] opacity-0 translate-y-10 transition-all duration-700"
        >
          The Next Wave of Intelligence
           <div className="flex justify-center gap-8 mb-6 mt-4">
          <button className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#00ffff]/30 text-[#00ffff] text-sm hover:bg-[#00ffff]/10 transition-all flex items-center gap-2">
            <FileText size={40} /> Quantum
          </button>
          <button className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#ffaa00]/30 text-[#ffaa00] text-sm hover:bg-[#ffaa00]/10 transition-all flex items-center gap-2">
            <MonitorSmartphone size={40} /> AI
          </button>
          <button className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#ff5500]/30 text-[#ff5500] text-sm hover:bg-[#ff5500]/10 transition-all flex items-center gap-2">
            <Scale size={40} /> Consulting
          </button>
        </div>
        </h2>
        <p 
          ref={subheadingRef}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
        >
          Unlock exponential growth through adaptive AI, quantum-powered solutions, and expert strategies tailored to your enterprise vision.
        </p>
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 translate-y-10 transition-all duration-700"
        >
          <Button onClick={handleGetStarted} variant="hero" size="lg" className="hover:scale-105 transition-transform">
            Get Started <ArrowRight className="ml-2" />
          </Button>
          <button className="border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover:scale-105 px-8 py-3 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
