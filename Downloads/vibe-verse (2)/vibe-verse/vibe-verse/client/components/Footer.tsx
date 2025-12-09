import { useEffect, useRef } from "react";
import { setupScrollAnimation } from "../lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const brandRef = useRef<HTMLDivElement | null>(null);
  const contactInfoRef = useRef<HTMLDivElement | null>(null);
  const socialLinksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setupScrollAnimation(brandRef.current, "fadeInLeft");
    setupScrollAnimation(contactInfoRef.current, "fadeInUp");
    setupScrollAnimation(socialLinksRef.current, "fadeInUp");
  }, []);

  return (
    <footer className="relative bg-black overflow-hidden border-t border-border py-16 md:py-24">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-gradient-quantum rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-gradient-ai rounded-full blur-3xl opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.05),transparent_60%)]"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Brand + Video Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
          {/* Brand Section */}
          <div
            ref={brandRef}
            className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-ai bg-clip-text text-transparent">
                Zerokost Healthcare
              </span>
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed max-w-md lg:max-w-none">
              Harnessing the power of quantum computing for real-world impact.
              Driving intelligence through autonomous and adaptive AI systems.
              Empowering innovation through strategic insights and expert
              guidance.
            </p>

            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2 flex-wrap justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-accent"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:info@zerokost.com"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  info@zerokost.com<br />
                </a>
                <span className="text-foreground/40">|</span>
                <a
                  href="mailto:info@aizerokost.com"
                  className="text-m text-foreground/60 hover:text-accent transition-colors"
                >
                  Any Queries regarding AI? Reach out to us at: info@aizerokost.com
                </a>
              </div>
              <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-accent"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:+917893752462"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  +91 7893752462
                </a>
                <span className="text-foreground/40">|</span>
                <a
                  href="tel:+918008502829"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  +91 8008502829
                </a>
                <span className="text-foreground/40">|</span>
                <a
                  href="tel:+919014366620"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  +91 9014366620
                </a>
              </div>
            </div>
          </div>

          {/* Compact Video on Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[320px] h-[180px] rounded-xl overflow-hidden border border-zinc-800 shadow-lg">
              <iframe
                title="Zerokost Healthcare Overview"
                src="https://www.youtube.com/embed/WPyJ549AgRA?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 rounded-lg border border-border/30 bg-black/30 hover:border-accent/50 transition-colors">
            <h5 className="text-sm font-medium mb-2">Development Office:</h5>
            <p className="text-xs text-foreground/60 leading-relaxed">
              1606B, 16th Floor, ORBIT, Plot No. 30/C, Sy No 83/1, Hyderabad
              Knowledge City, RaidurgPanmaktha, Serilingampally Mandal,
              Hyderabad, Telangana, India - 500081.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-black/30 hover:border-accent/50 transition-colors">
            <h5 className="text-sm font-medium mb-2">
              Research & Development Office:
            </h5>
            <p className="text-xs text-foreground/60 leading-relaxed">
              SM Reddy Complex, 202, Capital Pk Rd, Cyber Hills Colony, VIP
              Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-black/30 hover:border-accent/50 transition-colors">
            <h5 className="text-sm font-medium mb-2">Register Office:</h5>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Plot No 84-85, Flat No.104, Siva Sai Heights, Gokul Plots,
              Tirumalgiri, Hyderabad, Telangana — PIN 500072
            </p>
          </div>
        </div>

        <div className="border-t border-border mb-8"></div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8 mb-10">
          {[
            {
              title: "Quantum",
              items: [
                "Quantum Computing",
                "Quantum Algorithms",
                "Quantum Simulation",
                "Quantum Research",
                "Quantum Applications",
                "Quantum Hardware",
                "Quantum Software",
              ],
            },
            {
              title: "AI Solutions",
              items: [
                "Generative AI",
                "Agentic AI",
                "SAP in AI",
                "AI Consulting",
                "ML Engineering",
                "AI-Powered Analytics",
                "AI for Business",
                "Model Context Protocol",
              ],
            },
            {
              title: "Consulting",
              items: [
                "AI / ML Development",
                "Blockchain Development",
                "Software Product Engineering",
                "Application Development",
                "Quality Assurance",
                "Cloud Consulting Services",
                "IT Services",
              ],
            },
            {
              title: "About Us",
              items: [
                "How We Work",
                "Our Vision",
                "Team",
                "Careers",
                "Company History",
                "Leadership",
                "Mission & Values",
                "Innovation Focus",
              ],
            },
            {
              title: "Industries",
              items: [
                "Fintech",
                "Healthcare & Life Sciences",
                "Finance And Trading",
                "Agriculture",
                "Marketing & Media",
                "Retail & Ecommerce",
                "Pharma and Biotech",
                "Real Estate",
              ],
            },

            {
              title: "Education",
              items: ["Zerokost LMS"],
              links: ["https://learn.zerokost.com/"],
            },
            {
              title: "Developer & IT",
              items: [
                "Developer",
                "Learn",
                "Support for AI marketplace apps",
                "Tech Community",
                "Marketplace",
              ],
              links: [
                "https://www.dev.zerokost.com/",
                "https://learn.zerokost.com/",
                "https://www.dev.zerokost.com/",
                "https://www.dev.zerokost.com/",
                "https://www.dev.zerokost.com/",
              ]
            },
          ].map((section) => (
            <div key={section.title}>
              <h5 className="text-base font-semibold mb-3">{section.title}</h5>
              <ul className="space-y-2 text-sm text-foreground/60">
                {section.items.map((item, i) => (
                  <li key={item}>
                    <a
                      href={section.links ? section.links[i] : "#"}
                      target={section.links ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            &copy; 2023 Zerokost Healthcare. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
            <div className="flex flex-wrap gap-4 text-xs text-foreground/60 justify-center md:justify-end">
              <a href="#" className="hover:text-accent">Contact Zerokost</a>
              <a href="#" className="hover:text-accent">Privacy</a>
              <a href="#" className="hover:text-accent">Terms of use</a>
              <a href="#" className="hover:text-accent">Trademarks</a>
              <a href="#" className="hover:text-accent">About our ads</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
