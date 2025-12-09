import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Download,
  Share2,
  ExternalLink,
  CheckCircle,
  Play,
  Calendar,
  Users,
  Monitor,
  Zap,
  Shield,
  Activity,
  Heart,
  Bookmark,
  Video,
  MapPin,
  FileText,
  Compass,
  File,
  StickyNote,
  Link as LinkIcon,
  GraduationCap,
  Hash,
  HelpCircle,
  AlertTriangle,
  CreditCard,
  Scale,
  MessageSquare,
  Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// Import all the product data and icons
import MicIcon from '/file2.svg';
import BotIcon from '/technical-support.png';
import MeetingIcon from '/videoconference.png';
import MailIcon from '/email.png';
const PingIcon = '/message.png';
const InterviewIcon = '/videoconference.png';
import GlobeIcon from '/message.png';
const RectIcon = '/recruitment.png';
import DocIcon from '/documentation.png';
const NoteIcon = '/post-it.png';
const LearnIcon = '/learning.png';
import GemIcon from '/coin.png';
const SocialIcon = '/social-media.png';
import CoinsIcons from '/business.png';
import ShieldIcon from '/block.png';
import CVIcon from '/cv.png';
import RupeeIcon from '/rupee.png';
const PlaceIcon = '/recruitment.png';
const CvIcon = '/cv.png';

// All product data
const allProducts = {
  "ZeroTranscript": {
    name: "ZeroTranscript",
    description: "Transform voice to text with AI-powered transcription",
    icon: MicIcon,
    category: "Communication",
    detailedDescription: "ZeroTranscript is an advanced AI-powered transcription service that converts audio and video content into accurate, formatted text. Perfect for meetings, interviews, podcasts, and any spoken content that needs to be documented.",
    features: [
      "Real-time transcription",
      "Multi-language support",
      "Speaker identification",
      "Timestamp generation",
      "Export to multiple formats",
      "API integration"
    ],
    benefits: [
      "Save hours of manual transcription work",
      "Improve accessibility for content",
      "Enable better content searchability",
      "Reduce transcription costs by up to 80%"
    ],
    useCases: [
      "Meeting minutes and notes",
      "Podcast and video transcription",
      "Interview documentation",
      "Lecture and training content",
      "Customer support calls"
    ],
    pricing: "Starting at $29/month",
    rating: 4.8,
    reviews: 1247
  },
  "ZeroBot": {
    name: "ZeroBot",
    description: "Intelligent chatbot for seamless human-AI interaction",
    icon: BotIcon,
    category: "AI",
    detailedDescription: "ZeroBot is a sophisticated AI chatbot platform that provides intelligent, context-aware conversations. Built with advanced natural language processing, it can handle complex queries and provide personalized responses.",
    features: [
      "Natural language understanding",
      "Multi-channel deployment",
      "Custom training data",
      "Analytics and insights",
      "Integration with CRM systems",
      "24/7 availability"
    ],
    benefits: [
      "Reduce customer service workload by 60%",
      "Improve response time to under 2 seconds",
      "Scale customer support effortlessly",
      "Provide consistent service quality"
    ],
    useCases: [
      "Customer support automation",
      "Lead qualification",
      "FAQ handling",
      "Appointment scheduling",
      "Product recommendations"
    ],
    pricing: "Starting at $99/month",
    rating: 4.9,
    reviews: 892
  },
  "ZeroMeet": {
    name: "ZeroMeet",
    description: "Smart meeting scheduling and collaboration platform",
    icon: MeetingIcon,
    category: "Communication",
    detailedDescription: "ZeroMeet revolutionizes meeting management with AI-powered scheduling, intelligent time optimization, and seamless collaboration tools. Never miss another meeting or struggle with scheduling conflicts.",
    features: [
      "AI-powered scheduling",
      "Calendar integration",
      "Meeting analytics",
      "Video conferencing",
      "Note-taking and transcription",
      "Follow-up automation"
    ],
    benefits: [
      "Reduce scheduling time by 75%",
      "Eliminate double-booking issues",
      "Improve meeting productivity",
      "Streamline team collaboration"
    ],
    useCases: [
      "Team meeting coordination",
      "Client appointment booking",
      "Interview scheduling",
      "Project planning sessions",
      "Training and workshops"
    ],
    pricing: "Starting at $49/month",
    rating: 4.7,
    reviews: 634
  },
  "ZeroSmart Contracts": {
    name: "ZeroSmart Contracts",
    description: "End-to-end development, auditing, and deployment of secure, gas-optimized smart contracts for Ethereum, Solana, Polygon, and more.",
    icon: ShieldIcon,
    category: "Blockchain",
    detailedDescription: "ZeroSmart Contracts provides comprehensive blockchain development services, from initial concept to deployment. Our expert team ensures your smart contracts are secure, efficient, and fully audited.",
    features: [
      "Multi-chain development",
      "Security auditing",
      "Gas optimization",
      "Testing and deployment",
      "Documentation and support",
      "Upgrade mechanisms"
    ],
    benefits: [
      "Launch fully-audited, tamper-proof smart contracts",
      "Optimize gas costs by up to 40%",
      "Ensure maximum security standards",
      "Reduce time-to-market by 60%"
    ],
    useCases: [
      "DeFi protocol development",
      "NFT marketplace creation",
      "Token launch and management",
      "DAO governance systems",
      "Cross-chain bridges"
    ],
    pricing: "Custom pricing based on complexity",
    rating: 4.9,
    reviews: 156
  },
  "ZeroDeFi": {
    name: "ZeroDeFi",
    description: "Build complete DeFi platforms including staking, yield farming, lending, liquidity pools, and tokenomics management — fully compliant and scalable.",
    icon: CoinsIcons,
    category: "Blockchain",
    detailedDescription: "ZeroDeFi is a comprehensive platform for building decentralized finance applications. We provide end-to-end development of DeFi protocols with advanced features like yield farming, liquidity mining, and automated market makers.",
    features: [
      "Yield farming protocols",
      "Liquidity pool management",
      "Automated market makers",
      "Staking mechanisms",
      "Governance tokens",
      "Risk management tools"
    ],
    benefits: [
      "Launch regulation-ready DeFi platforms",
      "Implement sophisticated tokenomics",
      "Ensure high security standards",
      "Scale to handle millions of users"
    ],
    useCases: [
      "Decentralized exchanges",
      "Lending and borrowing platforms",
      "Yield farming protocols",
      "Staking platforms",
      "Cross-chain DeFi bridges"
    ],
    pricing: "Starting at $50,000",
    rating: 4.8,
    reviews: 89
  },
  "ZeroNFTMarket": {
    name: "ZeroNFTMarket",
    description: "Custom NFT marketplaces with royalty tracking, lazy minting, bidding systems, and multi-chain support — ready for art, gaming, and IP.",
    icon: GemIcon,
    category: "Blockchain",
    detailedDescription: "ZeroNFTMarket creates sophisticated NFT marketplaces tailored to your specific needs. Whether for digital art, gaming assets, or intellectual property, our platform provides all the tools needed for a successful NFT ecosystem.",
    features: [
      "Multi-chain NFT support",
      "Lazy minting capabilities",
      "Royalty tracking and distribution",
      "Advanced bidding systems",
      "Creator dashboard",
      "Analytics and reporting"
    ],
    benefits: [
      "Launch branded NFT platforms",
      "Support multiple blockchain networks",
      "Enable creator monetization",
      "Provide seamless user experience"
    ],
    useCases: [
      "Digital art marketplaces",
      "Gaming asset trading",
      "IP and licensing platforms",
      "Collectible trading",
      "Virtual real estate"
    ],
    pricing: "Starting at $25,000",
    rating: 4.7,
    reviews: 67
  },
  "ZeroCoin": {
    name: "ZeroCoin",
    description: "Design and deploy custom cryptocurrencies or tokens (ERC-20, BEP-20, etc.) with smart tokenomics, vesting, and governance built-in.",
    icon: RupeeIcon,
    category: "Blockchain",
    detailedDescription: "ZeroCoin specializes in creating custom cryptocurrency tokens with sophisticated tokenomics. From initial token design to launch and governance, we provide everything needed for a successful token economy.",
    features: [
      "Multi-standard token creation",
      "Advanced tokenomics design",
      "Vesting and lockup mechanisms",
      "Governance token implementation",
      "Airdrop and distribution tools",
      "Compliance and legal support"
    ],
    benefits: [
      "Launch investor-ready tokens",
      "Implement fair distribution mechanisms",
      "Ensure regulatory compliance",
      "Build strong community governance"
    ],
    useCases: [
      "Utility token creation",
      "Governance token development",
      "Reward token systems",
      "DeFi protocol tokens",
      "Community currency creation"
    ],
    pricing: "Starting at $15,000",
    rating: 4.6,
    reviews: 134
  },
  "ZeroBlockConsult": {
    name: "ZeroBlockConsult",
    description: "Strategic blockchain consulting services for enterprises, startups, and governments — covering architecture, compliance, and go-to-market planning.",
    icon: CoinsIcons,
    category: "Blockchain",
    detailedDescription: "ZeroBlockConsult provides strategic guidance for blockchain implementation across industries. Our experts help you navigate the complex landscape of blockchain technology, compliance, and market opportunities.",
    features: [
      "Strategic planning and roadmapping",
      "Technology architecture design",
      "Compliance and regulatory guidance",
      "Market analysis and positioning",
      "Partnership and ecosystem development",
      "Implementation support"
    ],
    benefits: [
      "Get validated blockchain strategies",
      "Navigate regulatory requirements",
      "Identify market opportunities",
      "Reduce implementation risks"
    ],
    useCases: [
      "Enterprise blockchain adoption",
      "Startup blockchain strategy",
      "Government digital transformation",
      "Supply chain optimization",
      "Financial services innovation"
    ],
    pricing: "Starting at $200/hour",
    rating: 4.9,
    reviews: 45
  },
  "ZeroLingo": {
    name: "ZeroLingo",
    description: "Break language barriers with intelligent translation",
    icon: GlobeIcon,
    category: "Communication",
    detailedDescription: "ZeroLingo is an advanced AI-powered translation platform that breaks down language barriers in real-time. Supporting over 100 languages with context-aware translations for business communications, documents, and conversations.",
    features: [
      "Real-time translation",
      "100+ language support",
      "Context-aware translations",
      "Document translation",
      "Voice translation",
      "API integration"
    ],
    benefits: [
      "Enable global communication",
      "Reduce language barriers by 90%",
      "Improve international collaboration",
      "Accelerate global business expansion"
    ],
    useCases: [
      "International meetings and conferences",
      "Multilingual customer support",
      "Document translation and localization",
      "Global team collaboration",
      "Cross-border business communications"
    ],
    pricing: "Starting at $39/month",
    rating: 4.7,
    reviews: 523
  },
  "ZeroMail": {
    name: "ZeroMail",
    description: "Automate and optimize your email workflows",
    icon: MailIcon,
    category: "Communication",
    detailedDescription: "ZeroMail revolutionizes email management with AI-powered automation, smart scheduling, and intelligent organization. Never miss an important email or struggle with inbox overload again.",
    features: [
      "AI-powered email automation",
      "Smart scheduling and reminders",
      "Intelligent email organization",
      "Template management",
      "Analytics and insights",
      "Integration with CRM systems"
    ],
    benefits: [
      "Reduce email management time by 70%",
      "Improve email response rates",
      "Automate repetitive email tasks",
      "Enhance professional communication"
    ],
    useCases: [
      "Sales email automation",
      "Customer support workflows",
      "Marketing campaign management",
      "Team communication optimization",
      "Follow-up automation"
    ],
    pricing: "Starting at $19/month",
    rating: 4.6,
    reviews: 389
  },
  "ZeroPing": {
    name: "ZeroPing",
    description: "Fast, responsive AI-powered messaging",
    icon: MessageSquare,
    category: "Communication",
    detailedDescription: "ZeroPing is a next-generation messaging platform powered by AI that delivers instant, intelligent responses. Perfect for teams, customer service, and real-time communication needs.",
    features: [
      "Instant messaging with AI",
      "Smart response suggestions",
      "Multi-channel communication",
      "File sharing and collaboration",
      "Message encryption",
      "Team workspace management"
    ],
    benefits: [
      "Speed up team communication by 80%",
      "Improve response accuracy",
      "Reduce miscommunication",
      "Enhance team productivity"
    ],
    useCases: [
      "Team collaboration and chat",
      "Customer service messaging",
      "Project communication",
      "Remote team coordination",
      "Real-time support systems"
    ],
    pricing: "Starting at $15/month",
    rating: 4.5,
    reviews: 267
  },
  "ZeroInterview": {
    name: "ZeroInterview",
    description: "AI-powered interview analysis and insights",
    icon: Video,
    category: "HR",
    detailedDescription: "ZeroInterview transforms the hiring process with AI-powered interview analysis, automated scoring, and comprehensive candidate insights. Make better hiring decisions with data-driven assessments.",
    features: [
      "AI-powered interview analysis",
      "Automated candidate scoring",
      "Bias detection and reduction",
      "Video interview recording",
      "Candidate comparison tools",
      "Integration with ATS systems"
    ],
    benefits: [
      "Reduce hiring bias by 85%",
      "Improve candidate assessment accuracy",
      "Accelerate hiring process by 60%",
      "Make data-driven hiring decisions"
    ],
    useCases: [
      "Technical interviews",
      "Behavioral assessments",
      "Video interview analysis",
      "Candidate screening",
      "Hiring team collaboration"
    ],
    pricing: "Starting at $79/month",
    rating: 4.8,
    reviews: 156
  },
  "ZeroPlace": {
    name: "ZeroPlace",
    description: "Intelligent job placement and candidate matching",
    icon: MapPin,
    category: "HR",
    detailedDescription: "ZeroPlace uses advanced AI algorithms to match the right candidates with the right opportunities. Our intelligent matching system considers skills, culture fit, and career goals for optimal placements.",
    features: [
      "AI-powered candidate matching",
      "Skills and culture assessment",
      "Career path recommendations",
      "Employer-candidate compatibility",
      "Market insights and analytics",
      "Automated job recommendations"
    ],
    benefits: [
      "Improve job matching accuracy by 75%",
      "Reduce time-to-hire by 50%",
      "Increase employee retention rates",
      "Optimize talent acquisition"
    ],
    useCases: [
      "Talent acquisition and recruitment",
      "Internal mobility and transfers",
      "Career development planning",
      "Skills gap analysis",
      "Workforce planning"
    ],
    pricing: "Starting at $99/month",
    rating: 4.7,
    reviews: 234
  },
  "ZeroCV": {
    name: "ZeroCV",
    description: "Enhance and automate resume creation",
    icon: FileText,
    category: "HR",
    detailedDescription: "ZeroCV is an intelligent resume builder that creates professional, ATS-friendly resumes tailored to specific job requirements. Our AI analyzes job descriptions and optimizes your resume for maximum impact.",
    features: [
      "AI-powered resume optimization",
      "ATS-friendly formatting",
      "Job-specific customization",
      "Skills gap analysis",
      "Professional templates",
      "Cover letter generation"
    ],
    benefits: [
      "Increase interview chances by 90%",
      "Optimize resumes for specific jobs",
      "Reduce resume creation time by 80%",
      "Improve professional presentation"
    ],
    useCases: [
      "Job application optimization",
      "Career change transitions",
      "Professional profile enhancement",
      "Skills assessment and development",
      "Interview preparation"
    ],
    pricing: "Starting at $29/month",
    rating: 4.6,
    reviews: 445
  },
  "ZeroHunt": {
    name: "ZeroHunt",
    description: "Navigate your career path with smart exploration",
    icon: Compass,
    category: "HR",
    detailedDescription: "ZeroHunt is your intelligent career companion that helps you discover new opportunities, analyze career paths, and make informed decisions about your professional future.",
    features: [
      "Career path analysis",
      "Opportunity discovery",
      "Salary benchmarking",
      "Skills development planning",
      "Industry trend analysis",
      "Professional networking insights"
    ],
    benefits: [
      "Discover hidden career opportunities",
      "Make informed career decisions",
      "Optimize career progression",
      "Stay ahead of industry trends"
    ],
    useCases: [
      "Career planning and development",
      "Job market exploration",
      "Skills gap identification",
      "Professional growth strategy",
      "Industry transition planning"
    ],
    pricing: "Starting at $49/month",
    rating: 4.5,
    reviews: 178
  },
  "ZeroDoc": {
    name: "ZeroDoc",
    description: "Intelligent document processing and management",
    icon: File,
    category: "Productivity",
    detailedDescription: "ZeroDoc transforms document management with AI-powered processing, intelligent organization, and automated workflows. Handle complex documents with ease and boost productivity across your organization.",
    features: [
      "AI-powered document processing",
      "Intelligent document classification",
      "Automated data extraction",
      "Document workflow automation",
      "Version control and collaboration",
      "Advanced search and retrieval"
    ],
    benefits: [
      "Reduce document processing time by 85%",
      "Eliminate manual data entry",
      "Improve document accuracy",
      "Streamline business processes"
    ],
    useCases: [
      "Invoice and receipt processing",
      "Contract management",
      "Legal document analysis",
      "Financial document handling",
      "Compliance and audit preparation"
    ],
    pricing: "Starting at $59/month",
    rating: 4.8,
    reviews: 312
  },
  "ZeroNote": {
    name: "ZeroNote",
    description: "Smart note-taking with AI-powered insights",
    icon: StickyNote,
    category: "Productivity",
    detailedDescription: "ZeroNote revolutionizes note-taking with AI-powered insights, automatic summarization, and intelligent organization. Transform your thoughts into actionable knowledge with our advanced note-taking platform.",
    features: [
      "AI-powered note summarization",
      "Intelligent tagging and organization",
      "Voice-to-text transcription",
      "Cross-platform synchronization",
      "Collaborative note sharing",
      "Smart search and retrieval"
    ],
    benefits: [
      "Improve information retention by 70%",
      "Accelerate note organization",
      "Enhance collaborative knowledge sharing",
      "Transform notes into actionable insights"
    ],
    useCases: [
      "Meeting notes and minutes",
      "Research and study notes",
      "Project documentation",
      "Ideas and brainstorming",
      "Personal knowledge management"
    ],
    pricing: "Starting at $25/month",
    rating: 4.7,
    reviews: 567
  },
  "ZeroChain": {
    name: "ZeroChain",
    description: "Secure file management with AI neural protection",
    icon: LinkIcon,
    category: "Productivity",
    detailedDescription: "ZeroChain provides enterprise-grade file security with AI-powered threat detection and neural network protection. Secure your most sensitive files with military-grade encryption and intelligent monitoring.",
    features: [
      "AI-powered threat detection",
      "Neural network security",
      "Military-grade encryption",
      "Automated backup and recovery",
      "Access control and permissions",
      "Compliance monitoring"
    ],
    benefits: [
      "Protect files with 99.9% security",
      "Automate threat detection and response",
      "Ensure regulatory compliance",
      "Reduce security risks by 95%"
    ],
    useCases: [
      "Enterprise file security",
      "Compliance and audit requirements",
      "Sensitive data protection",
      "Regulated industry file management",
      "Secure collaboration platforms"
    ],
    pricing: "Starting at $89/month",
    rating: 4.9,
    reviews: 89
  },
  "ZeroLearnPro": {
    name: "ZeroLearnPro",
    description: "Personalized learning paths with analytics",
    icon: GraduationCap,
    category: "Education",
    detailedDescription: "ZeroLearnPro creates personalized learning experiences with AI-driven curriculum design, progress tracking, and adaptive learning paths. Optimize learning outcomes for students and professionals alike.",
    features: [
      "AI-powered learning paths",
      "Adaptive content delivery",
      "Progress analytics and insights",
      "Personalized assessments",
      "Skill gap analysis",
      "Certification tracking"
    ],
    benefits: [
      "Improve learning outcomes by 80%",
      "Personalize education for each learner",
      "Accelerate skill development",
      "Track and measure learning progress"
    ],
    useCases: [
      "Corporate training programs",
      "Online course platforms",
      "Skills development initiatives",
      "Educational institutions",
      "Professional certification programs"
    ],
    pricing: "Starting at $69/month",
    rating: 4.8,
    reviews: 234
  },
  "ZeroSocial": {
    name: "ZeroSocial",
    description: "AI-powered social media management platform",
    icon: Hash,
    category: "Marketing",
    detailedDescription: "ZeroSocial is a comprehensive social media management platform powered by AI. Create, schedule, and optimize content across all social platforms while gaining valuable insights into your audience and performance.",
    features: [
      "AI-powered content creation",
      "Multi-platform scheduling",
      "Audience analytics and insights",
      "Engagement optimization",
      "Influencer collaboration tools",
      "ROI tracking and reporting"
    ],
    benefits: [
      "Increase social media engagement by 150%",
      "Reduce content creation time by 70%",
      "Optimize posting times and content",
      "Measure and improve social ROI"
    ],
    useCases: [
      "Social media marketing campaigns",
      "Brand awareness and engagement",
      "Content marketing automation",
      "Influencer marketing management",
      "Social commerce optimization"
    ],
    pricing: "Starting at $49/month",
    rating: 4.6,
    reviews: 789
  },
  "ZeroAnswer": {
    name: "ZeroAnswer",
    description: "Lightning-fast intelligent answers to any question",
    icon: HelpCircle,
    category: "AI",
    detailedDescription: "ZeroAnswer is an advanced AI-powered question-answering system that provides instant, accurate responses to complex queries. Perfect for customer support, research, and knowledge management.",
    features: [
      "Instant question answering",
      "Multi-source information synthesis",
      "Context-aware responses",
      "Natural language understanding",
      "Knowledge base integration",
      "Continuous learning and improvement"
    ],
    benefits: [
      "Reduce response time to under 1 second",
      "Improve answer accuracy by 95%",
      "Handle complex multi-part questions",
      "Scale customer support operations"
    ],
    useCases: [
      "Customer support automation",
      "Internal knowledge management",
      "Research and analysis",
      "Educational assistance",
      "Technical documentation support"
    ],
    pricing: "Starting at $39/month",
    rating: 4.7,
    reviews: 456
  }, "Tally Automation": {
    name: "Tally Automation",
    description: "Connect and automate accounting workflows with Tally integration",
    icon: CVIcon,
    category: "Finance",
    detailedDescription: "Tally Automation synchronizes transactions, automates ledger entries, runs GST reports, and aids in periodic compliance filings. It reduces manual bookkeeping and speeds up financial close cycles.",
    image: "https://tally.jamku.app/img/tally-automation-excel.png",
    features: ["Auto-ledger entries", "GST reports", "Bank reconciliation", "Scheduled exports"],
    benefits: ["Reduce bookkeeping time", "Improve accuracy", "Faster close cycles"],
    useCases: ["Monthly close", "Tax filings", "SME accounting automation"],
    pricing: "Custom pricing",
    rating: 4.4,
    reviews: 18
  },
  "ZeroEdge": {
    name: "ZeroEdge",
    description: "Lightning-fast intelligent answers to any question",
    icon: '/image.png',
    category: "AI",
    detailedDescription: "ZeroEdge delivers ultra-low-latency, context-aware answers across knowledge bases and operational systems. Optimized for high concurrency and enterprise SLAs.",
    features: [
      "Sub-second question answering",
      "Context window stitching across documents",
      "Vector store integrations and RAG workflows",
      "Session-based memory and role-aware responses",
      "Enterprise access controls and audit logging",
      "Multi-language support"
    ],
    benefits: [
      "Faster decision-making with instant answers",
      "Reduced support costs through automation",
      "Scales to thousands of concurrent users",
      "Auditable responses for compliance"
    ],
    useCases: [
      "Internal knowledge base assistants",
      "Customer support agent augmentation",
      "Research & triage for analysts",
      "On-call incident resolution support"
    ],
    pricing: "Starting at $49/month",
    rating: 4.7,
    reviews: 128
  },
  "CryptoPay": {
    name: "CryptoPay",
    description: "Secure crypto payments gateway for merchants",
    icon: RupeeIcon,
    category: "Finance",
    detailedDescription: "CryptoPay enables businesses to accept multiple cryptocurrencies with built-in compliance, instant settlement options, and easy fiat on/off-ramp integrations. Perfect for e-commerce, marketplaces, and global merchants.",
    image: "https://www.financemagnates.com/wp-content/uploads/2018/03/cryptopay-880-400.jpg",
    features: ["Multi-currency support", "Instant settlement", "Merchant dashboard", "Chargeback protection"],
    benefits: ["Expand payment options", "Lower transaction fees", "Faster cross-border settlements"],
    useCases: ["E-commerce payments", "Marketplace payouts", "Subscription billing"],
    pricing: "Custom pricing",
    rating: 4.6,
    reviews: 64
  },
  "FinTrade FTP": {
    name: "FinTrade FTP",
    description: "Automated secure file transfer and data pipelines for financial institutions",
    icon: File,
    category: "Finance",
    detailedDescription: "FinTrade FTP offers reliable, auditable batch transfer and ETL pipelines for settlements, reconciliations, and market data feeds. Designed for banks and exchanges, it supports encryption, retries, and schema validation.",
    image: "https://unihost.com/blog/minio.php?2021/11/unnamed-1.png",
    features: ["End-to-end encryption", "Schema validation", "Retry and backoff", "Audit logs"],
    benefits: ["Reliable batch transfers", "Simplified reconciliations", "Reduced operational errors"],
    useCases: ["Daily settlement batches", "Bank reconciliations", "Market data ingestion"],
    pricing: "Custom pricing",
    rating: 4.5,
    reviews: 21
  },

  // Biopharma & Healthcare products
  "ZeroClinical": {
    name: "ZeroClinical",
    description: "AI-driven clinical trial design and optimization to reduce time-to-market.",
    icon: Activity,
    category: "Biopharma",
    detailedDescription: "ZeroClinical optimizes trial protocols, patient cohorts, and endpoint selection using simulation and predictive analytics to shorten study timelines.",
    features: ["Cohort selection", "Protocol optimization", "Power calculations", "Simulation models"],
    benefits: ["Reduce trial duration", "Lower trial costs", "Improve patient selection"],
    useCases: ["Phase II/III trial design", "Adaptive trials", "Virtual control arms"],
    pricing: "Custom pricing",
    rating: 4.7,
    reviews: 32
  },
  "ZeroRegula": {
    name: "ZeroRegula",
    description: "Compliance intelligence engine for clinical submissions and audit readiness.",
    icon: GemIcon,
    category: "Biopharma",
    detailedDescription: "ZeroRegula is a compliance intelligence engine that automatically maps clinical content to international regulatory frameworks (FDA, EMA, DCGI, ICMR) to ensure end-to-end submission readiness and audit accuracy.",
    features: [
      "Automated Regulation Mapping: Cross-verifies trial documents against multiple global standards.",
      "Deficiency Detection Engine: Flags missing or misaligned regulatory elements.",
      "Policy Update Tracker: Monitors and updates templates based on new regulatory guidelines.",
      "Audit Readiness Dashboard: Summarizes compliance scores and potential red flags.",
      "Multi-Region Support: Handles submissions for IND, NDA, CTA, PMDA, CDSCO, etc.",
      "Automated Document Cross-Linking: Ensures consistency between CSR, IB, and CTD modules.",
      "AI-Powered Rule Explanations: Provides reasoning for flagged non-compliance to assist reviewers."
    ],
    benefits: [
      "Ensures global submission compliance and readiness.",
      "Reduces manual review time by up to 60%.",
      "Prevents regulatory rejection due to missing details.",
      "Simplifies complex multi-region compliance management.",
      "Enhances audit transparency and documentation traceability."
    ],
    useCases: [
      "Compliance verification before FDA or DCGI submission.",
      "Pre-inspection audit simulation and gap identification.",
      "Automated CSR–Protocol–IB consistency validation.",
      "Post-audit deficiency correction tracking.",
      "Multi-country regulatory documentation alignment.",
      "CRO compliance support for sponsor submissions."
    ],
    pricing: "Custom pricing",
    rating: 4.7,
    reviews: 26
  },
  "ZeroRegulatory": {
    name: "ZeroRegulatory",
    description: "Regulatory compliance automation and submission readiness for FDA/EMA filings.",
    icon: Scale,
    category: "Biopharma",
    detailedDescription: "Automate documentation, track changes, and prepare submission-ready packages with compliance checks.",
    features: ["eCTD support", "Document automation", "Audit trails"],
    benefits: ["Faster submissions", "Reduce errors"],
    useCases: ["Regulatory submissions", "Audit preparation"],
    pricing: "Custom pricing",
    rating: 4.5,
    reviews: 12
  },
  "ZeroRemoteMonitoring": {
    name: "ZeroRemoteMonitoring",
    description: "Continuous patient monitoring and anomaly detection using wearable and sensor data.",
    icon: MeetingIcon,
    category: "Biopharma",
    detailedDescription: "Collect real-time patient telemetry, run anomaly detection, and feed signals back into care pathways.",
    features: ["Telemetry ingestion", "Anomaly detection", "Dashboarding"],
    benefits: ["Early adverse event detection", "Improved patient safety"],
    useCases: ["Home monitoring", "Post-op surveillance"],
    pricing: "Custom pricing",
    rating: 4.6,
    reviews: 27
  },
  "ZeroImagingAI": {
    name: "ZeroImagingAI",
    description: "Medical imaging analysis (MRI/CT/X-ray) using state-of-the-art computer vision models.",
    icon: ShieldIcon,
    category: "Biopharma",
    detailedDescription: "Automated detection and quantification of imaging biomarkers to accelerate diagnosis and clinical research.",
    features: ["Segmentation", "Quantification", "Lesion detection"],
    benefits: ["Reduce radiologist workload", "Quantitative endpoints for trials"],
    useCases: ["Oncology imaging", "Cardiac imaging"],
    pricing: "Custom pricing",
    rating: 4.8,
    reviews: 45
  },
  "ZeroLabOps": {
    name: "ZeroLabOps",
    description: "Laboratory automation workflows with robotic scheduling and sample tracking.",
    icon: Building,
    category: "Biopharma",
    detailedDescription: "Connect instruments, schedule runs, and track samples end-to-end to maximize throughput and reproducibility.",
    features: ["LIMS integration", "Robotics orchestration", "Sample tracking"],
    benefits: ["Higher throughput", "Lower error rates"],
    useCases: ["High-throughput screening", "Genomics labs"],
    pricing: "Custom pricing",
    rating: 4.6,
    reviews: 21
  },
  "ZeroGenomics": {
    name: "ZeroGenomics",
    description: "Genomics pipelines and variant interpretation accelerated by AI-driven annotation.",
    icon: HelpCircle,
    category: "Biopharma",
    detailedDescription: "From raw reads to clinical insights — scalable pipelines with variant prioritization and interpretation.",
    features: ["Pipeline automation", "Variant annotation", "Clinical filtering"],
    benefits: ["Faster analysis", "Actionable reports"],
    useCases: ["Rare disease diagnosis", "Oncology panels"],
    pricing: "Custom pricing",
    rating: 4.7,
    reviews: 38
  },
  "ZeroPharmaAnalytics": {
    name: "ZeroPharmaAnalytics",
    description: "Real-world evidence and pharmacoepidemiology analytics for better decision making.",
    icon: Activity,
    category: "Biopharma",
    detailedDescription: "Aggregate and analyze RWE datasets to uncover safety signals, effectiveness, and market trends.",
    features: ["RWE aggregation", "Signal detection", "Cohort analysis"],
    benefits: ["Data-driven decisions", "Regulatory insights"],
    useCases: ["Post-market surveillance", "Comparative effectiveness"],
    pricing: "Custom pricing",
    rating: 4.5,
    reviews: 14
  },
  "ZeroSupplyChain": {
    name: "ZeroSupplyChain",
    description: "Cold-chain monitoring and predictive logistics for medical products.",
    icon: LinkIcon,
    category: "Biopharma",
    detailedDescription: "Monitor temperature-sensitive inventory, predict delays, and optimize routes for critical shipments.",
    features: ["Telemetry monitoring", "Route optimization", "Predictive ETAs"],
    benefits: ["Reduce spoilage", "Ensure compliance"],
    useCases: ["Vaccine distribution", "Clinical supply logistics"],
    pricing: "Custom pricing",
    rating: 4.6,
    reviews: 9
  },
  "ZeroSafety": {
    name: "ZeroSafety",
    description: "Automated adverse event detection and signal management.",
    icon: AlertTriangle,
    category: "Biopharma",
    detailedDescription: "Automate case identification, triage, and signal detection across pharmacovigilance datasets.",
    features: ["AE detection", "Signal scoring", "Case management"],
    benefits: ["Faster safety surveillance", "Improved compliance"],
    useCases: ["PV surveillance", "Safety reporting"],
    pricing: "Custom pricing",
    rating: 4.4,
    reviews: 11
  },
  "ZeroPatientEngage": {
    name: "ZeroPatientEngage",
    description: "Personalized patient engagement and adherence programs using conversational AI.",
    icon: MailIcon,
    category: "Biopharma",
    detailedDescription: "Engage patients with reminders, educational content, and conversational check-ins to improve adherence.",
    features: ["Automated reminders", "Conversational journeys", "Adherence tracking"],
    benefits: ["Improve adherence", "Better outcomes"],
    useCases: ["Chronic disease management", "Clinical trial engagement"],
    pricing: "Custom pricing",
    rating: 4.6,
    reviews: 29
  },
  "ZeroPrecisionMed": {
    name: "ZeroPrecisionMed",
    description: "Decision support for precision medicine and treatment optimization.",
    icon: CreditCard,
    category: "Biopharma",
    detailedDescription: "Combine patient genomics, biomarkers, and clinical history to recommend tailored treatment options.",
    features: ["Multi-omic integration", "Treatment ranking", "Clinical trial matching"],
    benefits: ["Tailored therapies", "Improved outcomes"],
    useCases: ["Oncology treatment planning", "Rare disease therapy selection"],
    pricing: "Custom pricing",
    rating: 4.7,
    reviews: 22
  },

  "ZeroProto": {
    name: "ZeroProto",
    description: "AI-driven protocol authoring assistant that automates the creation, structuring, and validation of clinical trial protocols.",
    icon: DocIcon,
    category: "Biopharma",
    detailedDescription: "ZeroProto transforms complex manual drafting into an intelligent, data-driven process by auto-generating protocol structures, mining scientific literature, and validating regulatory alignment.",
    features: [
      "Template-Based Protocol Builder: Auto-generates protocol structure using GCP, CDISC, and ICH standards.",
      "Scientific Literature Mining: Extracts evidence from PubMed, journals, and historical studies to justify design choices.",
      "AI Section Authoring: Dynamically populates objectives, endpoints, sample size, and study arms.",
      "Amendment Version Tracking: Tracks and highlights modifications for audit transparency.",
      "Regulatory Alignment Engine: Checks conformance with regional regulations (FDA, EMA, DCGI).",
      "Collaborative Review Workspace: Enables multi-user editing, comments, and approval tracking.",
      "Automated Cross-Referencing: Detects inconsistencies between sections (e.g., endpoints vs. statistical methods)."
    ],
    benefits: [
      "Cuts protocol creation time by up to 70%.",
      "Reduces human errors and missing sections.",
      "Ensures protocol readiness for ethics/regulatory submission.",
      "Enhances traceability and collaboration across teams.",
      "Delivers structured, compliant, and reusable protocol templates."
    ],
    useCases: [
      "Creation of initial clinical trial protocols for new drug candidates.",
      "Rapid protocol development for investigator-initiated or adaptive trials.",
      "Regulatory re-submissions after amendment updates.",
      "Generating study rationale from literature evidence.",
      "Aligning protocols with global sponsor templates.",
      "Accelerating startup timelines in CRO-managed studies."
    ],
    pricing: "Custom pricing",
    rating: 4.8,
    reviews: 8
  }
  , "ZeroFind": {
    name: "ZeroFind",
    description: "AI-powered target identification and validation for early drug discovery.",
    icon: HelpCircle,
    category: "Biopharma",
    detailedDescription: "ZeroFind accelerates target discovery by integrating multi-omics datasets, literature mining, and predictive models to prioritize biologically relevant targets.",
    features: ["Multi-omics integration", "Literature evidence mining", "Target prioritization scores", "Pathway and network analysis"],
    benefits: ["Faster target identification", "Data-driven prioritization", "Reduced experimental costs"],
    useCases: ["Target discovery", "Biomarker identification", "Drug repurposing"],
    pricing: "Custom pricing",
    rating: 4.6,
    reviews: 12
  },
  "ZeroPredict": {
    name: "ZeroPredict",
    description: "Predictive toxicology and ADMET modeling using machine learning.",
    icon: Activity,
    category: "Biopharma",
    detailedDescription: "ZeroPredict provides in-silico ADMET and toxicity predictions to reduce early attrition and guide compound selection.",
    features: ["ADMET prediction", "Toxicity screening", "Model interpretability", "Batch scoring"],
    benefits: ["Reduce late-stage failures", "Faster candidate selection", "Cost savings in preclinical stages"],
    useCases: ["Lead optimization", "Safety assessment", "Compound triage"],
    pricing: "Custom pricing",
    rating: 4.5,
    reviews: 9
  },
  "ZeroScreen": {
    name: "ZeroScreen",
    description: "Virtual high-throughput screening and hit prioritization.",
    icon: Monitor,
    category: "Biopharma",
    detailedDescription: "ZeroScreen enables virtual screening at scale with optimized workflows for docking, scoring, and pharmacophore matching.",
    features: ["Large library screening", "Scoring and ranking", "Integration with in-vitro results", "Batch reporting"],
    benefits: ["Faster hit discovery", "Reduced screening costs", "Improved hit quality"],
    useCases: ["HTS replacement", "Lead identification", "Fragment screening"],
    pricing: "Custom pricing",
    rating: 4.4,
    reviews: 7
  },
  "ZeroReach": {
    name: "ZeroReach",
    description: "End-to-end patient recruitment, engagement and retention platform.",
    icon: Users,
    category: "Biopharma",
    detailedDescription: "ZeroReach streamlines patient recruitment using real-world data, targeted outreach, and engagement journeys to improve enrollment and retention rates.",
    features: ["Cohort discovery", "Targeted outreach", "Retention analytics", "Patient portals"],
    benefits: ["Faster enrollment", "Improved retention", "Lower trial costs"],
    useCases: ["Site feasibility", "Patient outreach", "Retention programs"],
    pricing: "Custom pricing",
    rating: 4.6,
    reviews: 15
  },
  "ZeroConsent": {
    name: "ZeroConsent",
    description: "Electronic informed consent (eConsent) and consent lifecycle management.",
    icon: FileText,
    category: "Biopharma",
    detailedDescription: "ZeroConsent simplifies the consenting process with compliant eConsent workflows, version tracking, and audit trails.",
    features: ["Interactive eConsent", "Version control", "Audit logs", "Multi-language support"],
    benefits: ["Higher consent completion rates", "Regulatory compliance", "Clear audit trails"],
    useCases: ["Clinical trial consenting", "Remote consent", "Participant onboarding"],
    pricing: "Custom pricing",
    rating: 4.5,
    reviews: 11
  },
  "ZeroFair": {
    name: "ZeroFair",
    description: "Bias detection and fairness auditing for biomedical AI models.",
    icon: Scale,
    category: "Biopharma",
    detailedDescription: "ZeroFair audits models for demographic and clinical biases, providing mitigation strategies and fairness reports suitable for regulatory review.",
    features: ["Bias metrics", "Subgroup analysis", "Mitigation recommendations", "Report generation"],
    benefits: ["Reduce bias-related risks", "Improve model generalizability", "Support regulatory submissions"],
    useCases: ["Model validation", "Regulatory dossiers", "Clinical deployment"],
    pricing: "Custom pricing",
    rating: 4.4,
    reviews: 8
  },
  "ZeroCapture": {
    name: "ZeroCapture",
    description: "Automated laboratory data capture and instrument integration.",
    icon: File,
    category: "Biopharma",
    detailedDescription: "ZeroCapture connects lab instruments, captures results digitally, and normalizes data for downstream analysis and reporting.",
    features: ["Instrument adapters", "Data normalization", "LIMS integration", "Automated QC"],
    benefits: ["Reduce manual transcription", "Improve data integrity", "Faster turnaround"],
    useCases: ["Assay result capture", "Genomics pipelines", "Sample QC"],
    pricing: "Custom pricing",
    rating: 4.6,
    reviews: 10
  },
  "ZeroVoice": {
    name: "ZeroVoice",
    description: "Clinical voice biomarkers and speech analysis for neurological and psychiatric assessments.",
    icon: MicIcon,
    category: "Biopharma",
    detailedDescription: "ZeroVoice extracts vocal biomarkers and speech features to assist in remote assessments and disease monitoring.",
    features: ["Speech feature extraction", "Biomarker modeling", "Longitudinal tracking", "Integration with EHRs"],
    benefits: ["Non-invasive monitoring", "Remote assessment capabilities", "Quantitative endpoints"],
    useCases: ["Neurology assessments", "Psychiatric monitoring", "Disease progression tracking"],
    pricing: "Custom pricing",
    rating: 4.5,
    reviews: 6
  },
  "ZeroPure": {
    name: "ZeroPure",
    description: "Sample QC and contamination detection for biomanufacturing and assays.",
    icon: AlertTriangle,
    category: "Biopharma",
    detailedDescription: "ZeroPure provides automated contamination checks and quality scoring for biological samples to ensure assay reliability.",
    features: ["Contamination detection", "QC scoring", "Batch reporting", "Alerts and lineage"],
    benefits: ["Improve assay reliability", "Reduce failed runs", "Maintain compliance"],
    useCases: ["Biomanufacturing QC", "Assay validation", "Sample triage"],
    pricing: "Custom pricing",
    rating: 4.4,
    reviews: 5
  },
  "ZeroWatch": {
    name: "ZeroWatch",
    description: "Real-time safety surveillance, pharmacovigilance and signal detection.",
    icon: ShieldIcon,
    category: "Biopharma",
    detailedDescription: "ZeroWatch ingests safety reports, EHR signals, and social media signals to detect safety signals using AI and rule-based systems.",
    features: ["Signal detection", "Case triage", "Integrations with PV systems", "Alerting workflows"],
    benefits: ["Faster signal detection", "Better regulatory readiness", "Improved patient safety"],
    useCases: ["Post-market surveillance", "Safety monitoring in trials", "PV case management"],
    pricing: "Custom pricing",
    rating: 4.6,
    reviews: 13
  },
  "ZeroForms": {
    name: "ZeroForms",
    description: "Electronic data capture (EDC) and eCRF management for clinical studies.",
    icon: StickyNote,
    category: "Biopharma",
    detailedDescription: "ZeroForms streamlines EDC workflows, supports complex eCRF logic, and provides audit trails and export capabilities for regulatory submissions.",
    features: ["eCRF builder", "Skip logic and validation", "Query management", "Export to CDISC/SDTM formats"],
    benefits: ["Faster data collection", "Regulatory-ready exports", "Reduced data errors"],
    useCases: ["Clinical data capture", "Study data management", "EDC migrations"],
    pricing: "Custom pricing",
    rating: 4.7,
    reviews: 16
  },
  "AI Email & Call Assistant": {
    name: "AI Email & Call Assistant",
    description: "Automate your communication with AI-driven email drafting and intelligent call handling capabilities.",
    icon: MailIcon,
    category: "Communication",
    detailedDescription: "Streamline your business communications with our AI Email & Call Assistant. This tool drafts professional emails, manages your inbox, and handles routine calls with natural language processing, ensuring you never miss an opportunity.",
    features: ["Smart Email Drafting", "Automated Call Screening", "Context-Aware Responses", "Meeting Scheduling Integration"],
    benefits: ["Save 15+ hours/week on communication", "Never miss a lead", "Professional interactions 24/7"],
    useCases: ["Sales Outreach", "Customer Support", "Executive Assistance"],
    pricing: "Starting at $29/month",
    rating: 4.8,
    reviews: 120
  },
  "AI Social Media Auto-Poster": {
    name: "AI Social Media Auto-Poster",
    description: "Schedule, generate, and auto-post content across all social media platforms with AI optimization.",
    icon: SocialIcon,
    category: "Marketing",
    detailedDescription: "Boost your social media presence effortlessly. Our AI generates engaging content, schedules posts at optimal times, and manages multiple platforms from a single dashboard.",
    features: ["Content Generation", "Multi-Platform Scheduling", "Trend Analysis", "Engagement Analytics"],
    benefits: ["3x Engagement Growth", "Consistent Brand Presence", "Time-saving Automation"],
    useCases: ["Brand Marketing", "Influencer Management", "Social Media Agencies"],
    pricing: "Starting at $49/month",
    rating: 4.7,
    reviews: 350
  },
  "AI CRM": {
    name: "AI CRM",
    description: "Next-gen Customer Relationship Management with predictive analytics and automated lead scoring.",
    icon: Users,
    category: "Business",
    detailedDescription: "Transform your sales process with AI CRM. Predict customer behavior, automate follow-ups, and score leads intelligently to focus your team on high-value opportunities.",
    features: ["Predictive Lead Scoring", "Automated Workflows", "Customer Sentiment Analysis", "Sales Forecasting"],
    benefits: ["Increase Sales by 40%", "Better Customer Retention", "Data-Driven Decisions"],
    useCases: ["Sales Management", "Customer Success", "Business Development"],
    pricing: "Starting at $99/month",
    rating: 4.9,
    reviews: 500
  },
  "AI Health Kiosk": {
    name: "AI Health Kiosk",
    description: "Advanced kiosk management system for patient guidance, check-ins, and crowd management.",
    icon: Activity,
    category: "Healthcare",
    detailedDescription: "Optimize patient flow and hospital efficiency with our AI Health Kiosks. These stations handle patient check-ins, provide wayfinding guidance, and manage crowd flow in real-time, reducing congestion and wait times.",
    features: ["Patient Check-In", "Crowd Management", "Wayfinding Guidance", "Queue Management"],
    benefits: ["Streamlined Patient Flow", "Reduced Wait Times", "Improved Hospital Navigation"],
    useCases: ["Hospital Entrances", "Outpatient Clinics", "Emergency Rooms"],
    pricing: "Custom Pricing",
    rating: 4.8,
    reviews: 80
  },
  "AI Healthcare Robot": {
    name: "AI Healthcare Robot",
    description: "Multi-functional service robots for real-time translation, patient guidance, and logistics.",
    icon: BotIcon,
    category: "Healthcare",
    detailedDescription: "Deploy autonomous service robots to assist patients and staff. From translating languages in real-time to guiding patients to their destination and delivering essential supplies, these robots are the future of hospital operations.",
    features: ["Real-time Translation", "Patient Guidance", "Autonomous Logistics", "Crowd Interaction"],
    benefits: ["Enhanced Patient Experience", "Multilingual Support", "Operational Efficiency"],
    useCases: ["International Wards", "Patient Transport", "Hospital Logistics"],
    pricing: "Custom Pricing",
    rating: 4.9,
    reviews: 45
  },
  "AI Interview Platform": {
    name: "AI Interview Platform",
    description: "Streamline hiring with AI-conducted interviews, behavioral analysis, and automated candidate scoring.",
    icon: Video,
    category: "HR",
    detailedDescription: "Revolutionize recruitment with our AI Interview Platform. Conduct bias-free, structured interviews at scale, analyzing candidate responses and behavior to identify the best fit.",
    features: ["Automated Interviewing", "Behavioral Analysis", "Bias Elimination", "Skill Assessment"],
    benefits: ["Reduce Hiring Time by 60%", "Fair Candidate Evaluation", "Scalable Recruitment"],
    useCases: ["High-Volume Hiring", "Technical Screening", "Remote Recruitment"],
    pricing: "Starting at $99/month",
    rating: 4.7,
    reviews: 210
  },
  "AI LMS": {
    name: "AI LMS",
    description: "Intelligent Learning Management System that adapts curriculum to each student's learning pace.",
    icon: GraduationCap,
    category: "Education",
    detailedDescription: "Create personalized learning experiences with AI LMS. Our platform adapts content delivery based on student performance, ensuring optimal engagement and retention.",
    features: ["Adaptive Learning Paths", "Performance Analytics", "Content Recommendation", "Skill Gap Analysis"],
    benefits: ["Personalized Learning Paths", "Higher Completion Rates", "Efficient Training"],
    useCases: ["Corporate Training", "Higher Education", "Online Courses"],
    pricing: "Starting at $79/month",
    rating: 4.8,
    reviews: 150
  },
  "Document Management System for Lifesciences": {
    name: "Document Management System for Lifesciences",
    description: "Secure, compliant document management solution designed specifically for life sciences and regulated industries.",
    icon: DocIcon,
    category: "Healthcare",
    detailedDescription: "Ensure full compliance with FDA 21 CFR Part 11 and EU Annex 11. Our DMS streamlines the creation, review, approval, and archiving of regulated content. From SOPs to clinical trial documentation, manage your entire document lifecycle with confidence.",
    features: ["Electronic Signatures", "Audit Trails", "Version Control", "Automated Workflows", "GxP Compliance Check"],
    benefits: ["Audit Readiness", "Reduced Compliance Risk", "Total Traceability", "Faster Approvals"],
    useCases: ["Clinical Trial Master Files", "SOP Management", "Regulatory Submissions"],
    pricing: "Custom Pricing",
    rating: 4.9,
    reviews: 65
  }
};

const ProductDetail = () => {
  const { productName } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Decode the product name from URL
    const decodedName = productName ? decodeURIComponent(productName) : '';
    const foundProduct = allProducts[decodedName as keyof typeof allProducts];

    if (foundProduct) {
      setProduct(foundProduct);
    }
    setIsLoading(false);
  }, [productName]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/products')} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Button
              onClick={() => navigate('/products')}
              variant="ghost"
              size="sm"
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="animate-fadeInUp text-center max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  {typeof product.icon === 'string' ? (
                    <img src={product.icon} alt={product.name} className="w-16 h-16" />
                  ) : (
                    <product.icon className="w-16 h-16 text-primary" />
                  )}
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                  <h1 className="text-4xl font-bold text-foreground">{product.name}</h1>
                </div>
              </div>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {product.detailedDescription}
              </p>

              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90" onClick={() => navigate('/contact')}>
                  <Play className="mr-2 h-4 w-4" />
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Benefits</h3>
              <div className="space-y-4">
                {product.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-black">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}


      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of teams already using {product.name} to transform their workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90" onClick={() => navigate('/contact')}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
            <Button size="lg" variant="ghost" onClick={() => navigate('/contact')}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
