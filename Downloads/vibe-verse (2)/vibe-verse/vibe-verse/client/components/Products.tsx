import { useState, useEffect } from "react";
import {
  Search,
  MessageSquare,
  Share2,
  Users,
  Activity,
  Bot,
  Video,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Local asset icons
const MicIcon = '/file2.svg';
const BotIcon = '/technical-support.png';
const MeetingIcon = '/videoconference.png';
const MailIcon = '/email.png';
const SocialIcon = '/social-media.png';
const LearnIcon = '/learning.png';
const DocIcon = '/documentation.png';

// Categories
const categories = [
  { id: 'communication', name: 'Communication & Sales' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'business', name: 'Business Solutions' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'hr', name: 'HR & Recruitment' },
  { id: 'education', name: 'Education' },
];

export const communicationTools = [
  {
    name: "AI Email & Call Assistant",
    description: "Automate your communication with AI-driven email drafting and intelligent call handling capabilities.",
    icon: MailIcon,
    category: "Communication",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=500&auto=format&fit=crop",
    outcome: "Save 15+ hours/week"
  },
];

export const marketingTools = [
  {
    name: "AI Social Media Auto-Poster",
    description: "Schedule, generate, and auto-post content across all social media platforms with AI optimization.",
    icon: SocialIcon,
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop",
    outcome: "3x Engagement Growth"
  },
];

export const businessTools = [
  {
    name: "AI CRM",
    description: "Next-gen Customer Relationship Management with predictive analytics and automated lead scoring.",
    icon: Users,
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop",
    outcome: "Increase Sales by 40%"
  },
];

export const healthcareTools = [
  {
    name: "AI Health Kiosk",
    description: "Advanced kiosk management system for patient guidance, check-ins, and crowd management.",
    icon: Activity,
    category: "Healthcare",
    image: "/robo1.jpeg",
    outcome: "Streamlined Patient Flow"
  },
  {
    name: "AI Healthcare Robot",
    description: "Multi-functional service robots for real-time translation, patient guidance, and logistics.",
    icon: BotIcon,
    category: "Healthcare",
    image: "/robo2.jpeg",
    outcome: "Enhanced Patient Experience"
  },
  {
    name: "Document Management System for Lifesciences",
    description: "Secure, compliant document management solution designed specifically for life sciences and regulated industries.",
    icon: DocIcon,
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?q=80&w=500&auto=format&fit=crop",
    outcome: "100% GxP Compliance"
  },
];

export const hrTools = [
  {
    name: "AI Interview Platform",
    description: "Streamline hiring with AI-conducted interviews, behavioral analysis, and automated candidate scoring.",
    icon: Video,
    category: "HR",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=500&auto=format&fit=crop",
    outcome: "Reduce Hiring Time by 60%"
  },
];

export const educationTools = [
  {
    name: "AI LMS",
    description: "Intelligent Learning Management System that adapts curriculum to each student's learning pace.",
    icon: GraduationCap,
    category: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=500&auto=format&fit=crop",
    outcome: "Personalized Learning Paths"
  },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("communication");
  const navigate = useNavigate();

  // Combine all tools for search
  const allTools = [
    ...communicationTools.map(tool => ({ ...tool, id: "communication" })),
    ...marketingTools.map(tool => ({ ...tool, id: "marketing" })),
    ...businessTools.map(tool => ({ ...tool, id: "business" })),
    ...healthcareTools.map(tool => ({ ...tool, id: "healthcare" })),
    ...hrTools.map(tool => ({ ...tool, id: "hr" })),
    ...educationTools.map(tool => ({ ...tool, id: "education" })),
  ];

  // Filter tools based on search query
  const filteredTools = allTools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (tool.category && tool.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Group filtered tools by category
  const filteredToolsByCategory = {
    communication: filteredTools.filter(tool => tool.id === "communication"),
    marketing: filteredTools.filter(tool => tool.id === "marketing"),
    business: filteredTools.filter(tool => tool.id === "business"),
    healthcare: filteredTools.filter(tool => tool.id === "healthcare"),
    hr: filteredTools.filter(tool => tool.id === "hr"),
    education: filteredTools.filter(tool => tool.id === "education"),
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Scroll spy - highlight active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => ({
        id: cat.id,
        element: document.getElementById(cat.id)
      }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveCategory(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTryNow = (toolName: string) => {
    const encodedName = encodeURIComponent(toolName);
    navigate(`/product/${encodedName}`);
  };

  const renderToolCard = (tool: any, index: number) => (
    <Card
      key={tool.name}
      className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-border group hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden flex flex-col h-full"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card Image */}
      {tool.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={tool.image}
            alt={tool.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="p-2 w-fit rounded-lg bg-black/40 backdrop-blur-md mb-2 border border-white/10">
              {typeof tool.icon === 'string' ? (
                <img src={tool.icon} alt={tool.name} className="w-6 h-6 invert" />
              ) : (
                <tool.icon className="w-6 h-6 text-white" />
              )}
            </div>
          </div>
        </div>
      )}

      <CardHeader className="pb-4 relative z-10 flex-grow">
        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300 font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
          {tool.name}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 line-clamp-3">
          {tool.description}
        </CardDescription>

        {tool.outcome && (
          <div className="mt-4 p-2.5 bg-accent/5 border border-accent/20 rounded-md flex items-center gap-2">
            <span className="text-accent text-xs">✨</span>
            <span className="text-xs font-semibold text-accent/90">{tool.outcome}</span>
          </div>
        )}
      </CardHeader>

      <CardFooter className="pt-0 pb-6 px-6 relative z-10 mt-auto">
        <Button
          onClick={() => handleTryNow(tool.name)}
          className="w-full group-hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform relative overflow-hidden h-11"
        >
          <span className="relative z-10 flex items-center justify-center font-semibold">
            Try Now
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 px-6 md:px-8 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[#020817]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
          <div className="absolute right-[20%] top-0 h-[300px] w-[300px] rounded-full bg-accent/20 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 left-[20%] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-8 backdrop-blur-md animate-fadeInDown">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Next-Gen AI Solutions
          </div>

          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight animate-fadeInDown"
          >
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">AI-Powered</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-12 text-zinc-400 animate-fadeInUp max-w-2xl mx-auto leading-relaxed"
          >
            Transform your enterprise with our suite of autonomous tools designed for the future of work.
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto relative group animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-accent rounded-2xl opacity-30 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-[#0a0e27]/80 backdrop-blur-xl rounded-xl border border-white/10 p-2 shadow-2xl transition-all duration-300 group-hover:bg-[#0a0e27]/90">
              <Search className="ml-4 text-zinc-400 h-6 w-6 group-focus-within:text-primary transition-colors" />
              <Input
                type="text"
                placeholder="Find your AI solution..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 h-12 bg-transparent border-none text-white placeholder:text-zinc-500 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 w-full"
              />
              <div className="hidden sm:flex items-center gap-2 pr-2">
                <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-500">Ctrl + K</span>
              </div>
            </div>
          </div>
          {searchQuery && (
            <div className="mt-4 text-center animate-fadeInUp">
              <p className="text-zinc-400 text-sm">
                Found <span className="font-bold text-white">{filteredTools.length}</span> results matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <nav className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-4 shadow-xl">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 px-4">
                  Industries
                </h3>
                <ul className="space-y-1">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => scrollToSection(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium flex items-center justify-between group ${activeCategory === category.id
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                          }`}
                      >
                        {category.name}
                        {activeCategory === category.id && (
                          <ChevronRight className="w-4 h-4 animate-in slide-in-from-left-2 fade-in duration-300" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Quick outcome stats or promo could go here */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/10">
                <h4 className="font-bold text-foreground mb-2">Enterprise Ready</h4>
                <p className="text-sm text-muted-foreground mb-4">Scalable, secure, and custom-trained on your data.</p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-background flex items-center justify-center text-[10px] font-bold text-white">
                      AI
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Tools Categories */}
          <main className="flex-1 space-y-16">
            {categories.map((category) => {
              const tools = filteredToolsByCategory[category.id as keyof typeof filteredToolsByCategory];

              // If we are searching, hide empty categories
              if (searchQuery && tools.length === 0) return null;
              // If not searching, just check if category has original tools (which they do) 
              // BUT for the sake of the filtered list usage:
              if (tools.length === 0) return null;

              return (
                <section key={category.id} id={category.id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-bold text-foreground">
                      {category.name}
                    </h2>
                    <div className="h-px bg-border flex-1"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {tools.map((tool, index) => renderToolCard(tool, index))}
                  </div>
                </section>
              );
            })}

            {searchQuery && filteredTools.length === 0 && (
              <div className="text-center py-20">
                <div className="bg-muted/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-muted-foreground opacity-50" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">No matches found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms</p>
                <Button
                  variant="link"
                  onClick={() => setSearchQuery("")}
                  className="mt-2 text-primary"
                >
                  Clear search
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div >
  );
};

export default Products;
