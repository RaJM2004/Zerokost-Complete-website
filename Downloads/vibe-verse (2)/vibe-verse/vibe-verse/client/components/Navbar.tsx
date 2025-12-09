import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { aiDropdownItems, slugify, aboutDropdownItems } from "@/shared/menuData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Animation classes for navbar items
  const navItemClass = "relative px-4 py-2 text-foreground hover:text-accent transition-all duration-300 hover-scale";
  const dropdownItemClass = "flex flex-col p-4 hover:bg-muted/50 rounded-lg transition-all duration-300 hover-lift";

  const navItems = [
    { label: "QuantXAI Platform", href: "https://quant-xai.com/", target: "_blank" },
    {
      label: "AI",
      href: "#ai",
      dropdownItems: aiDropdownItems,
    },
    {
      label: "Consulting",
      href: "#consulting",
      dropdownItems: [
        {
          label: "AI / ML Development",
          description: "Cutting-edge artificial intelligence and machine learning solutions",
          image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=500&auto=format&fit=crop",
          features: ["Custom AI Models", "ML Algorithm Development", "Neural Networks", "Deep Learning Solutions"]
        },
        {
          label: "Blockchain Development",
          description: "Secure and transparent blockchain implementations",
          image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=500&auto=format&fit=crop",
          features: ["Smart Contracts", "DeFi Solutions", "Cryptocurrency Integration", "Distributed Ledgers"]
        },
        {
          label: "Software Product Engineering",
          description: "End-to-end software product development services",
          image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=500&auto=format&fit=crop",
          features: ["Product Strategy", "UX/UI Design", "Full-stack Development", "DevOps Integration"]
        },
        {
          label: "Application Development",
          description: "Custom application development for all platforms",
          image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=500&auto=format&fit=crop",
          features: ["Web Applications", "Mobile Apps", "Enterprise Software", "Cross-platform Solutions"]
        },
        {
          label: "Quality Assurance",
          description: "Comprehensive testing and quality assurance services",
          image: "https://www.mgindustries.net.in/assets/img/3.6.jpg",
          features: ["Automated Testing", "Manual Testing", "Performance Testing", "Security Testing"]
        },
        {
          label: "Cloud Consulting Services",
          description: "Expert guidance for cloud migration and optimization",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=500&auto=format&fit=crop",
          features: ["Cloud Migration", "Infrastructure Optimization", "Multi-cloud Strategy", "Cost Management"]
        },
        {
          label: "IT Services",
          description: "Comprehensive IT support and management",
          image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=500&auto=format&fit=crop",
          features: ["IT Infrastructure", "Network Management", "Cybersecurity", "Technical Support"]
        },
      ],
    },
    {
      label: "About Us",
      href: "#about",
      dropdownItems: [
        {
          label: "How We Work",
          description: "Our approach to delivering exceptional solutions",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop",
          features: ["Collaborative Process", "Agile Methodology", "Client-Centric Approach", "Continuous Improvement"]
        },
        {
          label: "Our Vision",
          description: "Our mission and goals for the future",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
          features: ["Innovation Focus", "Sustainable Solutions", "Global Impact", "Ethical AI Development"]
        },
        {
          label: "Team",
          description: "Meet our talented professionals",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
          features: ["Leadership", "Engineers", "Designers", "Researchers"]
        },
        {
          label: "Careers",
          description: "Join our growing team of innovators",
          image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=500&auto=format&fit=crop",
          features: ["Open Positions", "Benefits", "Culture", "Growth Opportunities"]
        },
      ],
    },
    {
      label: "Industries",
      href: "#industries",
      dropdownItems: [
        {
          label: "Defence",
          description: "Quantum-secure networks, military-grade encryption, and national security solutions",
          image: "https://cdn.prod.website-files.com/65093b9aec214a97237b7f5e/6512b5665698d2be14dbbdf9_65009dbba414e0f05bd98900_Military-Quantum-Computing.jpeg",
          features: ["Quantum-Safe Encryption", "Secure Video Transmission", "Military-Grade Security", "AI Threat Protection"],
          link: "/defence"
        },
        {
          label: "Fintech",
          description: "Revolutionary financial technology solutions for modern banking and payments",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500&auto=format&fit=crop",
          features: ["Digital Banking", "Payment Processing", "Blockchain Integration", "Risk Management", "Regulatory Compliance", "Mobile Wallets"]
        },
        {
          label: "Healthcare & Life Sciences",
          description: "Advanced healthcare technology and life sciences innovations",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=500&auto=format&fit=crop",
          features: ["Electronic Health Records", "Telemedicine", "Medical Imaging AI", "Drug Discovery", "Clinical Trials", "Patient Management"]
        },
        {
          label: "Finance And Trading",
          description: "Cutting-edge solutions for financial markets and algorithmic trading",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=500&auto=format&fit=crop",
          features: ["Algorithmic Trading", "Risk Analytics", "Portfolio Management", "Market Data Analysis", "Compliance Monitoring", "High-Frequency Trading"]
        },
        {
          label: "Agriculture",
          description: "Smart farming and agricultural technology for sustainable food production",
          image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=500&auto=format&fit=crop",
          features: ["Precision Farming", "Crop Monitoring", "IoT Sensors", "Weather Analytics", "Supply Chain Optimization", "Sustainable Practices"]
        },
        {
          label: "Marketing & Media",
          description: "Digital marketing solutions and media technology platforms",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop",
          features: ["Content Management", "Social Media Analytics", "Campaign Automation", "Audience Targeting", "Performance Tracking", "Brand Management"]
        },
        {
          label: "Retail & Ecommerce",
          description: "Comprehensive retail technology and e-commerce solutions",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=500&auto=format&fit=crop",
          features: ["Online Storefronts", "Inventory Management", "Customer Analytics", "Payment Integration", "Supply Chain", "Personalization"]
        },
        {
          label: "Pharma and Biotech",
          description: "Pharmaceutical and biotechnology innovation platforms",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=500&auto=format&fit=crop",
          features: ["Drug Development", "Clinical Research", "Regulatory Affairs", "Quality Control", "Bioinformatics", "Manufacturing"]
        },
        {
          label: "Real Estate",
          description: "Property technology solutions for modern real estate markets",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500&auto=format&fit=crop",
          features: ["Property Management", "Virtual Tours", "Market Analysis", "Investment Analytics", "Smart Buildings", "Transaction Processing"]
        },
      ],
    },
    { label: "Customers", href: "/customers" },
    { label: "Products", href: "/products" },
  ];

  const navigate = useNavigate();
  const handleGetStarted = (e?: any) => {
    if (e) e.preventDefault();
    // Navigate directly to the dedicated contact page so it opens from the top
    navigate('/contact');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Top ribbon */}
      <div className="w-full bg-gradient-to-r from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] text-white/90 text-xs border-b border-[#00ffff]/20">
        <div className="container mx-auto px-4 py-2 flex items-center justify-end gap-6">
          <a href="#contact" className="hover:text-[#00ffff] transition-colors">Contact Sales 789-375-2462</a>

          {/* Industries quick link */}
          <a href="#industries" className="hover:text-[#00ffff] transition-colors">Industries</a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logos with link to home page */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Primary Logo"
              className="h-10 w-auto"
            />|
            <img
              src="/logo3.png"
              alt="Secondary Logo"
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.href && item.href.startsWith('/') ? (
                <Link
                  to={item.href}
                  className={`${navItemClass} text-sm font-medium text-foreground/70 hover:text-foreground relative group`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ai group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`${navItemClass} text-sm font-medium text-foreground/70 hover:text-foreground relative group`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ai group-hover:w-full transition-all duration-300"></span>
                </a>
              )}

              {/* Dropdown indicator for menu items with dropdown */}
              {item.dropdownItems && (
                <span className="ml-1 text-xs text-zinc-400">▼</span>
              )}

              {/* Dropdown for menu item */}
              {item.dropdownItems && item.label !== 'About Us' && (
                <div className="fixed left-0 right-0 mt-6 mx-auto max-w-[1200px] rounded-lg shadow-xl bg-black/95 backdrop-blur-md border border-zinc-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-[70vh] overflow-y-auto">
                  <div className="flex">
                    {/* Left side - Categories */}
                    <div className="w-1/4 bg-zinc-900/80 py-3 overflow-x-hidden overflow-y-auto">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <div
                          key={dropdownItem.label}
                          className={`${dropdownItemClass} px-4 py-3 hover:bg-zinc-800 transition-colors cursor-pointer ${activeDropdown === dropdownItem.label ? 'bg-zinc-800' : ''} ${hoveredItem === dropdownItem.label ? 'bg-zinc-800' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(dropdownItem.label);
                          }}
                          onMouseEnter={() => setHoveredItem(dropdownItem.label)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <div className="text-sm font-medium text-white">{dropdownItem.label}</div>
                          <div className="text-xs text-zinc-400 mt-0.5">{dropdownItem.description}</div>
                        </div>
                      ))}
                    </div>

                    {/* Right side - Content that changes based on hover or selection */}
                    <div className="w-3/4 p-8 flex">
                      {(hoveredItem || activeDropdown) ? (
                        // Show hovered or selected dropdown item content (hover takes priority)
                        <>
                          {item.dropdownItems.filter(di => di.label === (hoveredItem || activeDropdown)).map(selectedItem => (
                            <div key={selectedItem.label} className="flex w-full">
                              <div className="w-1/2 pr-8">
                                <h3 className="text-2xl font-semibold text-white mb-4">{selectedItem.label}</h3>
                                <p className="text-base text-zinc-300 mb-6">{selectedItem.description}</p>
                                <h4 className="text-sm font-medium text-white mb-3">Key Features</h4>
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                  {selectedItem.features && selectedItem.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start">
                                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 mr-2"></div>
                                      <div className="text-sm text-zinc-300 hover:text-white transition-colors cursor-pointer">{feature}</div>
                                    </div>
                                  ))}
                                </div>
                                <Link
                                  to={`/${item.label.toLowerCase().replace(' us', '')}/${slugify(selectedItem.label)}`}
                                  className="mt-4 inline-block text-sm border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-4 py-2 rounded-md font-medium"
                                >
                                  Learn more
                                </Link>
                              </div>
                              <div className="w-1/2 flex items-center justify-center">
                                <div className="w-full h-64 rounded-lg overflow-hidden">
                                  <img
                                    src={selectedItem.image}
                                    alt={selectedItem.label}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        // Default content
                        <>
                          <div className="w-1/2 pr-8">
                            <h3 className="text-2xl font-semibold text-white mb-4">{item.label} Solutions</h3>
                            <p className="text-base text-zinc-300 mb-6">
                              {item.label === "AI" ?
                                "Explore our comprehensive suite of AI-powered tools and services designed to transform your business with cutting-edge artificial intelligence technology." :
                                "Discover our expert consulting services that help businesses innovate, optimize, and grow with tailored solutions for your specific industry needs."}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              {item.dropdownItems.slice(0, 4).map((subItem, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start cursor-pointer"
                                  onClick={() => setActiveDropdown(subItem.label)}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 mr-2"></div>
                                  <div className="text-sm text-zinc-300 hover:text-white transition-colors">{subItem.label}</div>
                                </div>
                              ))}
                            </div>
                            <Link
                              to={`/${item.label.toLowerCase().replace(' us', '')}`}
                              className="mt-4 inline-block text-sm border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-4 py-2 rounded-md font-medium"
                              onClick={() => setActiveDropdown(null)}
                            >
                              View all solutions
                            </Link>
                          </div>
                          <div className="w-1/2 flex items-center justify-center">
                            <div className="w-full h-64 rounded-lg overflow-hidden">
                              <img
                                src={item.label === "AI" ?
                                  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&auto=format&fit=crop" :
                                  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop"
                                }
                                alt={`${item.label} Solutions`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Custom About Us mega menu */}
              {item.label === 'About Us' && (
                <div className="fixed left-0 right-0 mt-6 mx-auto max-w-[1200px] rounded-lg shadow-xl bg-black/95 backdrop-blur-md border border-zinc-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                  <div className="flex">
                    {/* Left side - Categories */}
                    <div className="w-1/4 bg-zinc-900/80 py-3 overflow-x-hidden overflow-y-hidden">
                      {aboutDropdownItems.map((categoryItem, index) => (
                        <div
                          key={categoryItem.label}
                          className={`px-4 py-3 hover:bg-zinc-800 transition-colors cursor-pointer ${activeDropdown === categoryItem.label ? 'bg-zinc-800' : ''} ${hoveredItem === categoryItem.label ? 'bg-zinc-800' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(categoryItem.label);
                          }}
                          onMouseEnter={() => setHoveredItem(categoryItem.label)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <div className="text-sm font-medium text-white">{categoryItem.label}</div>
                          <div className="text-xs text-zinc-400 mt-0.5">{categoryItem.description}</div>
                        </div>
                      ))}
                    </div>                    {/* Right side - Content that changes based on hover or selection */}
                    <div className="w-3/4 p-8 flex">
                      {(hoveredItem || activeDropdown) ? (
                        // Show hovered or selected category content
                        <>
                          {/* Show the details of the selected/hovered item */}
                          {aboutDropdownItems
                            .filter(item => item.label === (hoveredItem || activeDropdown))
                            .map(selectedItem => (
                              <div key={selectedItem.label} className="flex w-full">
                                <div className="w-1/2 pr-8">
                                  <h3 className="text-2xl font-semibold text-white mb-4">{selectedItem.label}</h3>
                                  <p className="text-base text-zinc-300 mb-6">{selectedItem.description}</p>
                                  {selectedItem.features && (
                                    <>
                                      <h4 className="text-sm font-medium text-white mb-3">Key Features</h4>
                                      <div className="grid grid-cols-1 gap-3 mb-6">
                                        {selectedItem.features.map((feature, idx) => (
                                          <div key={idx} className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 mr-2"></div>
                                            <div className="text-sm text-zinc-300 hover:text-white transition-colors cursor-pointer">{feature}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </>
                                  )}
                                  <Link
                                    to={`/about/${slugify(selectedItem.label)}`}
                                    className="mt-4 inline-block text-sm border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-4 py-2 rounded-md font-medium"
                                  >
                                    Learn more
                                  </Link>
                                </div>
                                <div className="w-1/2 flex items-center justify-center">
                                  <div className="w-full h-64 rounded-lg overflow-hidden">
                                    <img
                                      src={selectedItem.image}
                                      alt={selectedItem.label}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                        </>
                      ) : (
                        // Default content
                        <>
                          <div className="w-1/2 pr-8">
                            <h3 className="text-2xl font-semibold text-white mb-4">About Us</h3>
                            <p className="text-base text-zinc-300 mb-6">
                              Learn more about our company, explore career opportunities, stay updated with our latest news, and get in touch with our team.
                            </p>
                            <div className="grid grid-cols-1 gap-4 mb-6">
                              {['Company Information', 'Career Opportunities', 'Latest News & Updates', 'Contact & Support'].map((subItem, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start cursor-pointer"
                                  onClick={() => setActiveDropdown(['About Veeva', 'Careers', 'News', 'Contact Us'][idx])}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 mr-2"></div>
                                  <div className="text-sm text-zinc-300 hover:text-white transition-colors">{subItem}</div>
                                </div>
                              ))}
                            </div>
                            <button className="mt-4 text-sm border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-4 py-2 rounded-md font-medium">
                              Explore all sections
                            </button>
                          </div>
                          <div className="w-1/2 flex items-center justify-center">
                            <div className="w-full h-64 rounded-lg overflow-hidden">
                              <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop"
                                alt="About Us"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleGetStarted}
          className="hidden lg:block border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-6 py-2 rounded-lg font-medium"
        >
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => {
            setIsOpen(!isOpen);
            if (isOpen) {
              setActiveDropdown(null);
            }
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border fixed left-0 right-0 top-[96px] z-50 max-h-[calc(100vh-96px)] overflow-y-auto overscroll-contain">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4 pb-24">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href && item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                    onClick={() => !item.dropdownItems && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                    onClick={() => !item.dropdownItems && setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}

                {/* Mobile dropdown items */}
                {item.dropdownItems && (
                  <div className="pl-4 mt-3 space-y-4 border-l border-zinc-800">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{item.label} Solutions</h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        {item.label === "AI" ?
                          "Explore our AI-powered tools and services designed to transform your business." :
                          "Discover our expert consulting services tailored for your specific industry needs."}
                      </p>
                      <div className="rounded-lg overflow-hidden mb-3">
                        <img
                          src={item.label === "AI" ?
                            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&auto=format&fit=crop" :
                            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop"
                          }
                          alt={`${item.label} Solutions`}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                    </div>

                    {item.dropdownItems.map((dropdownItem) => (
                      <div key={dropdownItem.label} className="py-3 border-t border-zinc-800">
                        <Link
                          to={`/${item.label.toLowerCase().replace(' us', '')}/${slugify(dropdownItem.label)}`}
                          className="block text-base font-medium text-white hover:text-cyan-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                        <p className="text-sm text-zinc-400 mt-1 mb-2">{dropdownItem.description}</p>

                        {dropdownItem.features && dropdownItem.features.length > 0 && (
                          <div className="mt-2 grid grid-cols-1 gap-2">
                            {dropdownItem.features.slice(0, 2).map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 mr-2"></div>
                                <div className="text-sm text-zinc-300">{feature}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={handleGetStarted}
              className="w-full px-6 py-2 rounded-lg font-medium text-black hover:shadow-lg transition-all duration-300 mt-4 bg-gradient-ai"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
