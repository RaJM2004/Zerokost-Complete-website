import React, { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Customers() {
  const [query, setQuery] = useState("");

  // Showcase cards in the hero
  const showcase = [
    {
      image:
        "https://media.istockphoto.com/id/1259086543/photo/crm-customer-relationship-management-for-business-sales-marketing-system-concept.jpg?s=612x612&w=0&k=20&c=bUpNVD1iOkCFk7mgCmL33upBEKy5yJoWUCJRwMnbPuk=",
      logo: "/partners/AWL.png",
      brand: "Adani",
      title:
        "Enhancing Customer Experiences with Zerokost CRM",
      link: "#",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1361/8903/files/output_19.png?v=1743122821",
      logo: "/partners/Nizam's.png",
      brand: "NIMS",
      title:
        "Implementation Priorities: Transformation, Simplification, Value",
      link: "#",
    },
  ];

  // Commercial cards dataset (matches the provided design)
  const commercialCards = [
    {
      brand: "Bristol Myers Squibb",
      cta: "Read Press Release",
      title: "MOU Signed with Hendry Ford and American IT",
      logo:
        "/partners/american.webp",
    },
    {
      brand: "GSK",
      cta: "Watch Video",
      title: "Adani Wilmar on Going Live with Zerokost CRM",
      logo: "/partners/AWL.png"
    },
    {
      brand: "Gilead",
      cta: "Read Press Release",
      title: "Worked on the Kiosk and Robo Delivery ",
      logo:
        "/partners/Nizam's.png",
    },
  ];

  return (
    <div className="bg-[#050509] text-white min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Updated gradient background to match website theme */}
        <div className="bg-gradient-to-r from-[#0a0e27] via-[#1a1f3d] to-[#0a0e27] h-[70vh] flex flex-col justify-center text-center relative z-0 rounded-b-[80px] border-b-4 border-[#00ffff]/30">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FF8A00]/20 to-transparent"></div>
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-4 relative">
            <span className="bg-gradient-to-r from-[#00ffff] to-[#0a84ff] bg-clip-text text-transparent">Customers</span> Driving Change and Impact
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg relative">
            Learn how top organizations are transforming operations with Quantum AI solutions.
          </p>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[radial-gradient(circle,_rgba(0,255,255,0.2)_1px,_transparent_1px)] [background-size:18px_18px] opacity-40"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-[radial-gradient(circle,_rgba(255,138,0,0.2)_1px,_transparent_1px)] [background-size:18px_18px] opacity-40"></div>
        </div>

        {/* Showcase cards at the bottom of the hero section */}
        <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {showcase.map((card, index) => (
            <div
              key={index}
              className="bg-[#0f1225] text-white rounded-[32px] shadow-[0_8px_32px_rgba(0,255,255,0.15)] p-6 flex items-center gap-6 hover:shadow-[0_12px_32px_rgba(0,255,255,0.25)] transition-all duration-300 border border-[#00ffff]/10 backdrop-blur-sm hover:scale-[1.02] group"
            >
              {/* Left image */}
              <div className="flex-shrink-0 w-40 h-44 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right text */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-2">
                  <img
                    src={card.logo}
                    alt={card.brand}
                    className="h-8 w-auto object-contain mr-2 bg-white/10 p-1 rounded"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="font-semibold text-[#00ffff]">{card.brand}</span>
                </div>
                <h3 className="font-semibold text-lg leading-snug mb-2 text-white group-hover:text-[#00ffff] transition-colors">
                  {card.title}
                </h3>
                <a
                  href={card.link}
                  className="text-[#FF8A00] font-medium hover:text-[#00ffff] flex items-center gap-1 transition-colors group-hover:translate-x-1 duration-300"
                >
                  Watch Video
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Search bar below cards */}
        <div className="max-w-xl mx-auto px-6 mt-16 mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/10 to-[#FF8A00]/10 blur-xl rounded-full"></div>
            <div className="relative flex gap-3">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search customers, sections, topics"
                className="bg-[#0f1225]/80 border-[#00ffff]/30 text-white placeholder:text-white/70 focus:border-[#00ffff] focus:ring-[#00ffff]/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.1)]"
              />
              <Button
                onClick={() => setQuery(query.trim())}
                className="border-2 border-[#00ffff] text-[#00ffff] bg-transparent hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL SECTION (exact card design as shown) */}
      <section className="py-16 bg-[#050509]">
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              <span className="bg-gradient-to-r from-[#FF8A00] to-[#FF5F1F] bg-clip-text text-transparent">Our AI Solutions Use by</span>
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#0f1225] text-[#00ffff] rounded-full px-5 py-3 shadow-[0_0_15px_rgba(0,255,255,0.15)] border border-[#00ffff]/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all hover:scale-105"
            >
              View More Commercial Customers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M13.5 4.5h6v6M4.5 19.5l15-15" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {commercialCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#0f1225] rounded-[28px] shadow-[0_8px_24px_rgba(0,255,255,0.1)] p-6 text-white border border-[#00ffff]/10 hover:shadow-[0_12px_28px_rgba(0,255,255,0.2)] transition-all duration-300 hover:translate-y-[-5px] group"
              >
                {/* Badge */}
                <div className="inline-flex items-center bg-[#0a0e27] rounded-full px-3 py-1 text-sm font-semibold shadow-sm border border-[#FF8A00]/20">
                  <span className="w-2 h-2 rounded-full bg-[#FF8A00] mr-2" />
                  <span className="bg-gradient-to-r from-[#FF8A00] to-[#FF5F1F] bg-clip-text text-transparent">Commercial</span>
                </div>

                {/* CTA */}
                <p className="mt-3 text-[#FF8A00] font-semibold text-sm group-hover:text-[#FF5F1F] transition-colors">{card.cta}</p>

                {/* Title */}
                <h3 className="mt-2 text-xl font-semibold leading-snug group-hover:text-[#00ffff] transition-colors">{card.title}</h3>

                {/* Logo block */}
                <div className="mt-5 rounded-2xl bg-[#0a0e27]/80 h-48 flex items-center justify-center border border-[#00ffff]/5 group-hover:border-[#00ffff]/20 transition-all duration-300">
                  <img
                    src={card.logo}
                    alt={card.brand}
                    className="max-h-16 w-auto object-contain filter brightness-110 group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
