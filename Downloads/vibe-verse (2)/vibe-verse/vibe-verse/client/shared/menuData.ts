export const slugify = (label: string) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const aiDropdownItems = [
  {
    label: "Generative AI",
    description: "Advanced AI models for content generation",
    image: "https://miro.medium.com/1*nrDGmwods4fbpJf-rRSPAg.jpeg",
    features: ["Text Generation", "Image Creation", "Code Assistance", "Content Optimization"],
  },
  {
    label: "Agentic AI",
    description: "Visual orchestration platform for designing and automating intelligent workflows.",
    image: "https://eco-cdn.iqpc.com/eco/images/channel_content/images/ai-generated_images_comic_strip_in_blue_modern_styleruOsIIcWQV26K4grrs4kG4RLXQ3zj6fX5aeZucLh.jpg",
    features: ["Workflow Automation", "Drag-and-Drop Builder", "Custom Integrations", "Real-Time Monitoring"],
  },
  {
    label: "SAP in AI",
    description: "Intelligent automation for SAP systems",
    image: "https://www.nagarro.com/hubfs/SAP%20Services/sap-s4hana-blog.jpg",
    features: ["Process Automation", "Data Integration", "Predictive Analytics", "Workflow Optimization"],
  },
  {
    label: "AI Consulting",
    description: "Strategic AI implementation guidance",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=500&auto=format&fit=crop",
    features: ["Strategy Development", "Implementation Planning", "ROI Assessment", "Technology Selection"],
  },
  {
    label: "ML Engineering",
    description: "Custom machine learning solutions",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=500&auto=format&fit=crop",
    features: ["Model Development", "Data Pipeline Creation", "Algorithm Design", "Performance Optimization"],
  },
  {
    label: "AI-Powered Analytics",
    description: "Data-driven insights and automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
    features: ["Business Intelligence", "Predictive Modeling", "Data Visualization", "Automated Reporting"],
  },
  {
    label: "AI for Business",
    description: "Enterprise AI transformation",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=500&auto=format&fit=crop",
    features: ["Digital Transformation", "Process Optimization", "Customer Experience", "Operational Efficiency"],
  },
  {
    label: "Model Context Protocol (MCP)",
    description: "Advanced AI model management",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&auto=format&fit=crop",
    features: ["Model Governance", "Version Control", "Performance Monitoring", "Ethical AI Compliance"],
  },
];

export const aiMapBySlug = aiDropdownItems.reduce((acc, item) => {
  const key = slugify(item.label);
  acc[key] = item;
  return acc;
}, {} as Record<string, any>);

export const consultingDropdownItems = [
  {
    label: "AI / ML Development",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop",
    features: ["Custom AI Models", "ML Pipelines", "Model Optimization", "MLOps"],
  },
  {
    label: "Blockchain Development",
    description: "Secure and transparent blockchain implementations",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800&auto=format&fit=crop",
    features: ["Smart Contracts", "DeFi", "Distributed Ledgers", "Tokenization"],
  },
  {
    label: "Software Product Engineering",
    description: "End-to-end software product development services",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=800&auto=format&fit=crop",
    features: ["Product Strategy", "UX/UI", "Full-stack Development", "DevOps"],
  },
  {
    label: "Application Development",
    description: "Custom application development for all platforms",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software", "Cross-platform Solutions"],
  },
  {
    label: "Quality Assurance",
    description: "Comprehensive testing and quality assurance services",
    image: "https://www.mgindustries.net.in/assets/img/3.6.jpg",
    features: ["Automated Testing", "Manual Testing", "Performance Testing", "Security Testing"],
  },
  {
    label: "Cloud Consulting Services",
    description: "Expert guidance for cloud migration and optimization",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    features: ["Cloud Migration", "Infrastructure Optimization", "Multi-cloud Strategy", "Cost Management"],
  },
  {
    label: "IT Services",
    description: "Comprehensive IT support and management",
    image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=800&auto=format&fit=crop",
    features: ["IT Infrastructure", "Network Management", "Cybersecurity", "Technical Support"],
  },
];

export const industriesDropdownItems = [
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
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    features: ["Digital Banking", "Payment Processing", "Blockchain Integration", "Risk Management", "Regulatory Compliance", "Mobile Wallets"],
  },
  {
    label: "Healthcare & Life Sciences",
    description: "Advanced healthcare technology and life sciences innovations",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
    features: ["Electronic Health Records", "Telemedicine", "Medical Imaging AI", "Drug Discovery", "Clinical Trials", "Patient Management"],
  },
  {
    label: "Finance And Trading",
    description: "Cutting-edge solutions for financial markets and algorithmic trading",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    features: ["Algorithmic Trading", "Risk Analytics", "Portfolio Management", "Market Data Analysis", "Compliance Monitoring", "High-Frequency Trading"],
  },
  {
    label: "Agriculture",
    description: "Smart farming and agricultural technology for sustainable food production",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop",
    features: ["Precision Farming", "Crop Monitoring", "IoT Sensors", "Weather Analytics", "Supply Chain Optimization", "Sustainable Practices"],
  },
  {
    label: "Marketing & Media",
    description: "Digital marketing solutions and media technology platforms",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    features: ["Content Management", "Social Media Analytics", "Campaign Automation", "Audience Targeting", "Performance Tracking", "Brand Management"],
  },
  {
    label: "Retail & Ecommerce",
    description: "Comprehensive retail technology and e-commerce solutions",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    features: ["Online Storefronts", "Inventory Management", "Customer Analytics", "Payment Integration", "Supply Chain", "Personalization"],
  },
  {
    label: "Pharma and Biotech",
    description: "Pharmaceutical and biotechnology innovation platforms",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop",
    features: ["Drug Development", "Clinical Research", "Regulatory Affairs", "Quality Control", "Bioinformatics", "Manufacturing"],
  },
  {
    label: "Real Estate",
    description: "Property technology solutions for modern real estate markets",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    features: ["Property Management", "Virtual Tours", "Market Analysis", "Investment Analytics", "Smart Buildings", "Transaction Processing"],
  },
];

export const aboutDropdownItems = [
  {
    label: "How We Work",
    description: "Our approach to delivering exceptional solutions",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    features: ["Agile", "Collaborative", "Customer-first"],
  },
  {
    label: "Our Vision",
    description: "Our mission and goals for the future",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    features: ["Innovation", "Sustainability", "Ethical AI"],
  },
  {
    label: "Team",
    description: "Meet our talented professionals",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    features: ["Leadership", "Engineers", "Designers", "Researchers"],
  },
  {
    label: "Careers",
    description: "Join our growing team of innovators",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop",
    features: ["Open Positions", "Benefits", "Culture"],
  },
  {
    label: "Company History",
    description: "Our journey and milestones",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
    features: ["Founding", "Growth", "Key Milestones"],
  },
  {
    label: "Leadership",
    description: "Profiles of our executive team",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
    features: ["Executive Team", "Advisors", "Board Members"],
  },
  {
    label: "Mission & Values",
    description: "Principles that guide our work",
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=800&auto=format&fit=crop",
    features: ["Integrity", "Customer Success", "Innovation"],
  },
  {
    label: "Innovation Focus",
    description: "How we approach research and innovation",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=800&auto=format&fit=crop",
    features: ["R&D", "Partnerships", "Open Innovation"],
  },
];

export const consultingMapBySlug = consultingDropdownItems.reduce((acc, item) => {
  acc[slugify(item.label)] = item;
  return acc;
}, {} as Record<string, any>);

export const industriesMapBySlug = industriesDropdownItems.reduce((acc, item) => {
  acc[slugify(item.label)] = item;
  return acc;
}, {} as Record<string, any>);

export const aboutMapBySlug = aboutDropdownItems.reduce((acc, item) => {
  acc[slugify(item.label)] = item;
  return acc;
}, {} as Record<string, any>);
