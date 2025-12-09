import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export default function IndustriesSection() {
  const navigate = useNavigate();
  const industries = [
    {
      category: "Quantum",
      items: [
        {
          title: "Quantum Chemistry",
          description: "Understand Chemistry from the most fundamental phenomenons, through Quantum."
        },
        {
          title: "Quantum Pharma",
          description: "Help health care industry in faster and more efficient drug discovery with Quantum."
        },
        {
          title: "Quantum Optimization",
          description: "Design systems to achieve maximum optimization, minimize expenses, with Quantum speedup."
        },
        {
          title: "Quantum Finance",
          description: "Work at the edge of technology to boost Financial usecases with QIO and QML."
        }
      ]
    },
    {
      category: "Artificial Intelligence",
      items: [
        {
          title: "Large Language Model",
          description: "Build and deploy Large Language Models across multiple languages."
        },
        {
          title: "Computer Vision",
          description: "Apply your deep learning skills in building computer vision models for real-world usecases."
        },
        {
          title: "Recommendation System",
          description: "Help businesses provide users with personalized experiences tailored to their preferences."
        },
        {
          title: "Predictive Analytics",
          description: "Create models to predict behaviour of customers and markets."
        }
      ]
    }
  ];

  return (
    <section
      id="industries"
      className="relative py-20 overflow-hidden"
      style={{ background: "hsl(0, 0%, 3%)" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 to-cyan-900/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Industry Applications
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            AI & Quantum Use-cases among Different Industries
          </p>
        </div>

        {industries.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            {/* Subheading (left-aligned) */}
            <h3
              className={`text-3xl font-bold mb-8 ${
                section.category === "Quantum"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
              }`}
            >
              {section.category}
            </h3>

            {/* Grid for each category */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((industry, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-lg bg-[#0a1525] border border-[#1e2d4a] hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon (same SVG logic as your original code) */}
                    <div className="w-16 h-16 mb-6 flex items-center justify-center">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full text-cyan-400"
                      >
                        {section.category === "Quantum" && index === 0 && (
                          // Quantum Chemistry
                          <g fill="currentColor">
                            <circle
                              cx="50"
                              cy="50"
                              r="20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle cx="50" cy="20" r="5" />
                            <circle cx="80" cy="50" r="5" />
                            <circle cx="50" cy="80" r="5" />
                            <circle cx="20" cy="50" r="5" />
                            <path
                              d="M50 20L80 50L50 80L20 50Z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </g>
                        )}

                        {section.category === "Quantum" && index === 1 && (
                          // Quantum Pharma
                          <g fill="currentColor">
                            <rect x="30" y="30" width="15" height="40" rx="2" />
                            <rect x="55" y="40" width="15" height="30" rx="2" />
                            <circle cx="37" cy="25" r="5" />
                            <circle cx="63" cy="35" r="5" />
                            <path
                              d="M40 50L60 50"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="25"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeDasharray="5,5"
                            />
                          </g>
                        )}

                        {section.category === "Quantum" && index === 2 && (
                          // Quantum Optimization
                          <g fill="currentColor">
                            <rect
                              x="20"
                              y="30"
                              width="60"
                              height="40"
                              rx="2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <path
                              d="M30 60L40 40L50 50L60 30L70 45"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle cx="30" cy="60" r="3" />
                            <circle cx="40" cy="40" r="3" />
                            <circle cx="50" cy="50" r="3" />
                            <circle cx="60" cy="30" r="3" />
                            <circle cx="70" cy="45" r="3" />
                          </g>
                        )}

                        {section.category === "Quantum" && index === 3 && (
                          // Quantum Finance
                          <g fill="currentColor">
                            <path
                              d="M20 70L40 50L60 60L80 30"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <rect
                              x="15"
                              y="30"
                              width="70"
                              height="45"
                              rx="2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                            />
                            <circle cx="40" cy="50" r="5" />
                            <circle cx="60" cy="60" r="5" />
                          </g>
                        )}

                        {section.category === "Artificial Intelligence" && index === 0 && (
                          // Large Language Model
                          <g fill="currentColor">
                            <rect
                              x="20"
                              y="30"
                              width="40"
                              height="50"
                              rx="2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <rect
                              x="25"
                              y="40"
                              width="30"
                              height="5"
                              rx="1"
                              fill="currentColor"
                            />
                            <rect
                              x="25"
                              y="50"
                              width="30"
                              height="5"
                              rx="1"
                              fill="currentColor"
                            />
                            <rect
                              x="25"
                              y="60"
                              width="20"
                              height="5"
                              rx="1"
                              fill="currentColor"
                            />
                          </g>
                        )}

                        {section.category === "Artificial Intelligence" && index === 1 && (
                          // Computer Vision
                          <g fill="currentColor">
                            <rect
                              x="25"
                              y="25"
                              width="50"
                              height="40"
                              rx="2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="50"
                              cy="45"
                              r="15"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle cx="50" cy="45" r="5" fill="currentColor" />
                          </g>
                        )}

                        {section.category === "Artificial Intelligence" && index === 2 && (
                          // Recommendation System
                          <g fill="currentColor">
                            <rect
                              x="20"
                              y="30"
                              width="60"
                              height="40"
                              rx="2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <path
                              d="M30 45L40 45M30 55L50 55"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="70"
                              cy="30"
                              r="10"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </g>
                        )}

                        {section.category === "Artificial Intelligence" && index === 3 && (
                          // Predictive Analytics
                          <g fill="currentColor">
                            <rect
                              x="20"
                              y="30"
                              width="60"
                              height="40"
                              rx="2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <path
                              d="M30 60L40 50L50 55L60 40L70 45"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </g>
                        )}
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        
      </div>
    </section>
  );
}
