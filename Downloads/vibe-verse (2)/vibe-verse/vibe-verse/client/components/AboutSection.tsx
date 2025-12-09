import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { setupScrollAnimation, setupStaggeredAnimations } from "../lib/animations";

export default function AboutSection() {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanupTitle = setupScrollAnimation(titleRef.current, "fadeInUp");
    const cleanupText = setupScrollAnimation(textRef.current, "fadeInUp");

    const cards = cardsRef.current?.querySelectorAll(".about-card");
    const cleanupCards = setupStaggeredAnimations(cards as NodeListOf<HTMLElement>, "fadeInUp");

    return () => {
      cleanupTitle();
      cleanupText();
      cleanupCards();
    };
  }, []);

  // 🏛️ Government & Educational Partners
  const governmentPartners = [
    { name: "Army", logo: "/partners/army.png" },
    { name: "College", logo: "/partners/college.webp" },
    { name: "ICARNRMI", logo: "/partners/icarnrmi.png" },
    { name: "PharmaPatashala", logo: "https://pharmapatashala.com/wp-content/uploads/2024/01/New-Project-1.png" },
    { name: "Nizam's", logo: "/partners/Nizam's.png" },
  ];

  // 🏢 Private & Corporate Partners
  const privatePartners = [
    { name: "ACL", logo: "/partners/ACL.jpg" },
    { name: "VOLKENTECK", logo: "/partners/VOLKENTECK.jpg" },
    { name: "American", logo: "/partners/american.webp" },
    { name: "Critical River", logo: "/partners/critical.png" },
    { name: "XDRPL", logo: "/partners/xtpr.png" },
    { name: "Henry", logo: "/partners/henry.png" },
    { name: "Riskguard", logo: "/partners/riskguard.jpg" },
    { name: "Veco", logo: "/partners/veco.jpg" },
    { name: "Hexawel", logo: "/partners/hexawel.jpg" },
    { name: "Aspure", logo: "https://www.aspure.com/media/96df6931-1236-4165-adc2-a36458384b5d/a3NCiQ/Aspure/Admin/logo.png" },
    { name: "Tracxn", logo: "https://i.tracxn.com/logo/company/Capture6733_1589524931798.PNG?format=webp&height=120&width=120" },
  ];

  const solutions = [
    { name: "Custom Software Development", count: "200+" },
    { name: "Cloud Solutions", count: "150+" },
    { name: "AI Integration", count: "75+" },
    { name: "Quantum Applications", count: "25+" },
  ];

  const clients = [
    { industry: "Financial", count: "45+" },
    { industry: "Healthcare", count: "30+" },
    { industry: "Technology", count: "60+" },
    { industry: "Government", count: "20+" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden"
      style={{ background: "hsl(0, 0%, 3%)" }}
    >
      {/* 🔹 Carousel Animation CSS */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .carousel-track {
          display: flex;
          white-space: nowrap;
          animation: scrollLeft 25s linear infinite;
          width: calc(200%);
        }

        .carousel-logo {
          flex: 0 0 auto;
          width: 150px;
          margin: 0 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-logo img {
          max-height: 80px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .carousel-logo img:hover {
          transform: scale(1.1);
        }

        .carousel-mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background: linear-gradient(to right, white 0%, transparent 10%, transparent 90%, white 100%);
          z-index: 5;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00ffff] mb-10 text-center"
        >
          Our Partners and Clients
        </h2>

        {/* 🏛️ Government / Educational Carousel */}
        <div className="bg-white py-8 mb-8 overflow-hidden relative rounded-lg shadow-inner">
          <h3 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            Academic & Government Collaborations
          </h3>
          <div className="carousel-mask"></div>
          <div className="carousel-track">
            {[...governmentPartners, ...governmentPartners].map((partner, i) => (
              <div key={i} className="carousel-logo">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 🏢 Private / Corporate Carousel */}
        <div className="bg-white py-8 mb-16 overflow-hidden relative rounded-lg shadow-inner">
          <h3 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            Corporate Collaborations
          </h3>
          <div className="carousel-mask"></div>
          <div className="carousel-track">
            {[...privatePartners, ...privatePartners].map((partner, i) => (
              <div key={i} className="carousel-logo">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- About Section (unchanged) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="rounded-xl overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Planning"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-2 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                alt="Office space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-12">
            <h2
              ref={textRef}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00ffff]"
            >
              About Us
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Concept Softworks is a pioneering software company developing custom solutions for clients across industries - from financial institutions & healthcare providers to tech companies and government organizations.
            </p>

            <div className="about-card space-y-4">
              <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To revolutionize the digital landscape by creating innovative software solutions that empower organizations to achieve unprecedented efficiency, security, and growth.
              </p>
            </div>

            <div className="about-card space-y-4">
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                Deliver cutting-edge, tailored software solutions that address complex challenges, drive digital transformation, and create sustainable value for clients.
              </p>
            </div>

            <Button
              onClick={() => navigate('/#/about')}
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0"
            >
              Learn More{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Solutions & Clients */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Solutions</h3>
            <div className="grid grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <p className="text-3xl font-bold text-cyan-400">{solution.count}</p>
                  <p className="text-white/80">{solution.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Clients</h3>
            <div className="grid grid-cols-2 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <p className="text-3xl font-bold text-cyan-400">{client.count}</p>
                  <p className="text-white/80">{client.industry} Sector</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
