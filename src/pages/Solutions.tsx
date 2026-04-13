import React, { useState, useEffect } from 'react';
import { FadeIn } from '../components/Animations';
import RequestAccessModal from '../components/RequestAccessModal';
import {
    FileText, GraduationCap, Microscope, ShieldCheck, Check, Search, ArrowLeft,
    Stethoscope, Cpu, Activity, Database, ActivitySquare, HeartPulse, BrainCircuit, FlaskConical, Users, ChartNetwork, Play, CircleDollarSign, Building2, Languages, Mail, AlignLeft, Share2
} from 'lucide-react';

interface SolutionDetails {
    title: string;
    subtitle: string;
    description: string;
    fullOverview: string[];
    servicesTitleText?: string;
    services: string[];
    benefitsTitleText?: string;
    benefits: string[];
    expertSupportText: string;
    sidebarTitle?: string;
    sidebarButtons?: { primary: string; secondary: string; primaryIcon?: boolean };
    sidebarListTitle?: string;
    sidebarListType?: 'bullets' | 'facts';
    quickFacts?: { label: string; value: string }[];
    whyChooseUs?: string[];
    colorClass: string;
    bgClass: string;
    icon: React.ReactNode;
    mainIcon: React.ReactNode;
    productOverviewTitleText?: string;
    productOverviewTitle: string;
    productOverviewFeatures: string[];
    productOverviewBenefits: string[];
    productOverviewCenterBox?: boolean;
    productOverviewHideLists?: boolean;
    footerTitle?: string;
    footerText?: string;
    footerButton?: string;
}

interface SolutionCategory {
    id: string;
    name: string;
    icon: React.ReactNode;
    solutions: SolutionDetails[];
}

const solutionsData: SolutionCategory[] = [
    {
        id: 'lifescience',
        name: 'Life Sciences',
        icon: <FlaskConical className="w-5 h-5" />,
        solutions: [
            {
                title: "DMS (Document Management System)",
                subtitle: "GAMP Solution",
                description: "Secure and compliant document control system.",
                fullOverview: [
                    "Secure and compliant document control system.",
                    "Our DMS enables controlled creation, approval, and archival of SOPs and records."
                ],
                services: ["Version control", "Approval workflows", "Electronic signatures", "Audit trails"],
                benefits: ["Improved document control", "Faster approvals", "Compliance readiness"],
                expertSupportText: "Our GAMP experts are ready to help your organization achieve and maintain regulatory compliance.",
                whyChooseUs: [
                    "Industry experts with 20+ years experience",
                    "Proven track record with 500+ validations",
                    "Full regulatory compliance assurance",
                    "End-to-end support and documentation"
                ],
                colorClass: "bg-gradient-to-r from-purple-600 to-pink-500",
                bgClass: "bg-purple-500",
                icon: <FileText className="w-6 h-6" />,
                mainIcon: <FileText className="w-24 h-24 text-white" />,
                productOverviewTitle: "DMS (Document Management System)",
                productOverviewFeatures: ["Version control", "Approval workflows", "Electronic signatures", "Audit trails"],
                productOverviewBenefits: ["Improved document control", "Faster approvals", "Compliance readiness"],
                productOverviewCenterBox: true
            },
            {
                title: "LMS (Learning Management System)",
                subtitle: "GAMP Solution",
                description: "Training and competency management system for regulated environments.",
                fullOverview: [
                    "Training and competency management system for regulated environments.",
                    "Our LMS ensures employees are trained, qualified, and compliant with SOPs and GxP requirements."
                ],
                services: ["Training tracking", "Role-based learning paths", "Certification management", "Audit-ready records"],
                benefits: ["Improved workforce competency", "Audit readiness", "Regulatory compliance"],
                expertSupportText: "Our GAMP experts are ready to help your organization achieve and maintain regulatory compliance.",
                whyChooseUs: [
                    "Industry experts with 20+ years experience",
                    "Proven track record with 500+ validations",
                    "Full regulatory compliance assurance",
                    "End-to-end support and documentation"
                ],
                colorClass: "bg-emerald-500",
                bgClass: "bg-emerald-500",
                icon: <GraduationCap className="w-6 h-6" />,
                mainIcon: <GraduationCap className="w-24 h-24 text-white" />,
                productOverviewTitle: "LMS (Learning Management System)",
                productOverviewFeatures: ["Training tracking", "Role-based learning paths", "Certification management", "Audit-ready records"],
                productOverviewBenefits: ["Improved workforce competency", "Audit readiness", "Regulatory compliance"],
                productOverviewCenterBox: true
            },
            {
                title: "LIMS (Laboratory Information Management System)",
                subtitle: "GAMP Solution",
                description: "Centralized laboratory data management system to ensure accuracy, traceability, and compliance.",
                fullOverview: [
                    "Centralized laboratory data management system to ensure accuracy, traceability, and compliance.",
                    "Our LIMS solution streamlines laboratory operations by managing samples, test results, workflows, and reporting while ensuring compliance with regulatory standards such as GLP, GMP, and ISO."
                ],
                services: [
                    "Sample lifecycle management", "Test and result tracking", "Instrument integration",
                    "Audit trails and electronic signatures", "Role-based access control", "Data integrity (ALCOA+)",
                    "Automated reporting", "Regulatory compliance support"
                ],
                benefits: [
                    "Improved laboratory efficiency", "Accurate and traceable data", "Regulatory compliance",
                    "Reduced manual errors", "Faster turnaround times", "Enhanced data security"
                ],
                expertSupportText: "Our GAMP experts are ready to help your organization achieve and maintain regulatory compliance.",
                whyChooseUs: [
                    "Industry experts with 20+ years experience",
                    "Proven track record with 500+ validations",
                    "Full regulatory compliance assurance",
                    "End-to-end support and documentation"
                ],
                colorClass: "bg-blue-600",
                bgClass: "bg-blue-600",
                icon: <Database className="w-6 h-6" />,
                mainIcon: <Microscope className="w-24 h-24 text-white" />,
                productOverviewTitle: "LIMS (Laboratory Information Management System)",
                productOverviewFeatures: [
                    "Sample lifecycle management", "Test and result tracking", "Instrument integration",
                    "Audit trails integration", "Role-based and electronic signatures", "Data integrity (ALCOA+)",
                    "Automated reporting", "Regulatory compliance support"
                ],
                productOverviewBenefits: [
                    "Improved laboratory efficiency", "Accurate and traceable data", "Regulatory compliance",
                    "Reduced manual errors", "Faster turnaround times", "Enhanced data security"
                ],
                productOverviewCenterBox: false
            },
            {
                title: "Automation Testing",
                subtitle: "GAMP Solution",
                description: "Automated testing frameworks for efficiency and rapid validation cycles.",
                fullOverview: [
                    "Automated testing frameworks for efficiency.",
                    "Automation testing accelerates validation cycles and improves coverage."
                ],
                services: ["Test automation", "CI/CD integration"],
                benefits: ["Faster testing", "Better ROI"],
                expertSupportText: "Our GAMP experts are ready to help your organization achieve and maintain regulatory compliance.",
                whyChooseUs: [
                    "Industry experts with 20+ years experience",
                    "Proven track record with 500+ validations",
                    "Full regulatory compliance assurance",
                    "End-to-end support and documentation"
                ],
                colorClass: "bg-gradient-to-r from-teal-500 to-green-500",
                bgClass: "bg-teal-500",
                icon: <ActivitySquare className="w-6 h-6" />,
                mainIcon: <Cpu className="w-24 h-24 text-white" />,
                productOverviewTitle: "Automation Testing",
                productOverviewFeatures: ["Test automation", "CI/CD integration"],
                productOverviewBenefits: ["Faster testing", "Better ROI"],
                productOverviewCenterBox: true
            },
            {
                title: "RIMS (Regulatory Information Management System)",
                subtitle: "GAMP Solution",
                description: "End-to-end regulatory data management for life sciences organizations.",
                fullOverview: [
                    "End-to-end regulatory data management for life sciences organizations.",
                    "Our RIMS platform helps life sciences companies manage regulatory submissions, approvals, and product registrations."
                ],
                services: [
                    "Regulatory submission tracking", "Product registration management",
                    "Health authority correspondence", "Change and variation management",
                    "Regulatory intelligence", "Document version control"
                ],
                benefits: ["Faster regulatory submissions", "Improved compliance visibility", "Reduced regulatory risk"],
                expertSupportText: "Our GAMP experts are ready to help your organization achieve and maintain regulatory compliance.",
                whyChooseUs: [
                    "Industry experts with 20+ years experience",
                    "Proven track record with 500+ validations",
                    "Full regulatory compliance assurance",
                    "End-to-end support and documentation"
                ],
                colorClass: "bg-cyan-600",
                bgClass: "bg-cyan-600",
                icon: <ShieldCheck className="w-6 h-6" />,
                mainIcon: <ChartNetwork className="w-24 h-24 text-white" />,
                productOverviewTitle: "RIMS (Regulatory Information Management System)",
                productOverviewFeatures: [
                    "Regulatory submission tracking", "Product registration management", "Health authority correspondence",
                    "Regulatory intelligence", "Document version control"
                ],
                productOverviewBenefits: [
                    "Faster regulatory submissions", "Improved compliance visibility", "Reduced regulatory risk"
                ],
                productOverviewCenterBox: false
            }
        ]
    },
    {
        id: 'healthcare',
        name: 'H-CAMP Solutions',
        icon: <Stethoscope className="w-5 h-5" />,
        solutions: [
            {
                title: "Insurance, Billing & Revenue AI",
                subtitle: "Revenue Cycle Management Platform",
                description: "We have built a fully automated AI-driven revenue cycle management (RCM) platform that streamlines medical billing, insurance claims, and payments.",
                fullOverview: [
                    "We have built a fully automated AI-driven revenue cycle management (RCM) platform that streamlines medical billing, insurance claims, and payments. The system reduces manual errors, accelerates reimbursements, and improves financial outcomes. Our solution supports multiple payers, insurers, and regulatory frameworks."
                ],
                servicesTitleText: "Key Features",
                services: [
                    "AI-based medical coding engine",
                    "Automated claims submission and validation",
                    "Real-time eligibility verification",
                    "Fraud detection and compliance monitoring",
                    "Revenue analytics and claim tracking"
                ],
                benefitsTitleText: "Use Cases",
                benefits: [
                    "Faster claim approvals",
                    "Reduced revenue leakage",
                    "Improved billing accuracy",
                    "Lower administrative costs"
                ],
                expertSupportText: "Transform your business with Insurance, Billing & Revenue AI. Request a demo or start your free trial.",
                sidebarTitle: "Get Started Today",
                sidebarListTitle: "Quick Facts",
                sidebarListType: "facts",
                quickFacts: [
                    { label: "Deployment", value: "Cloud & On-premise" },
                    { label: "Support", value: "24/7" },
                    { label: "Integration", value: "API Available" },
                    { label: "Setup Time", value: "Under 1 hour" }
                ],
                sidebarButtons: { primary: "Request Demo", secondary: "Contact Sales", primaryIcon: true },
                colorClass: "bg-amber-500",
                bgClass: "bg-amber-500",
                icon: <CircleDollarSign className="w-6 h-6" />,
                mainIcon: <CircleDollarSign className="w-24 h-24 text-white" />,
                productOverviewTitleText: "Watch Demo",
                productOverviewTitle: "INSURANCE, BILLING & REVENUE AI",
                productOverviewFeatures: [],
                productOverviewBenefits: [],
                productOverviewCenterBox: false,
                productOverviewHideLists: true,
                footerTitle: "Ready to Get Started?",
                footerText: "Join thousands of companies already using Insurance, Billing & Revenue AI",
                footerButton: "Start Free Trial"
            },
            {
                title: "Medical Education & Training",
                subtitle: "AI-Powered Learning Platform",
                description: "We have built an AI-powered Medical Education and Training platform designed to upskill healthcare professionals continuously.",
                fullOverview: [
                    "We have built an AI-powered Medical Education and Training platform designed to upskill healthcare professionals continuously. The platform adapts learning paths based on individual performance and role requirements. This platform supports doctors, nurses, technicians, and healthcare administrators."
                ],
                servicesTitleText: "Key Features",
                services: [
                    "AI-driven Healthcare Learning Management System (LMS)",
                    "Intelligent medical training simulations",
                    "Skill assessments and certification modules",
                    "Compliance and policy training",
                    "Performance analytics and reporting"
                ],
                benefitsTitleText: "Use Cases",
                benefits: [
                    "Faster onboarding of medical staff",
                    "Continuous professional development",
                    "Standardized training outcomes",
                    "Improved clinical competency"
                ],
                expertSupportText: "Transform your business with Medical Education & Training. Request a demo or start your free trial.",
                sidebarTitle: "Get Started Today",
                sidebarListTitle: "Quick Facts",
                sidebarListType: "facts",
                quickFacts: [
                    { label: "Deployment", value: "Cloud & On-premise" },
                    { label: "Support", value: "24/7" },
                    { label: "Integration", value: "API Available" },
                    { label: "Setup Time", value: "Under 1 hour" }
                ],
                sidebarButtons: { primary: "Request Demo", secondary: "Contact Sales", primaryIcon: true },
                colorClass: "bg-purple-600",
                bgClass: "bg-purple-600",
                icon: <GraduationCap className="w-6 h-6" />,
                mainIcon: <GraduationCap className="w-24 h-24 text-white" />,
                productOverviewTitleText: "Watch Demo",
                productOverviewTitle: "MEDICAL EDUCATION & TRAINING",
                productOverviewFeatures: [],
                productOverviewBenefits: [],
                productOverviewCenterBox: false,
                productOverviewHideLists: true,
                footerTitle: "Ready to Get Started?",
                footerText: "Join thousands of companies already using Medical Education & Training",
                footerButton: "Start Free Trial"
            },
            {
                title: "Hospital Operations & Automation",
                subtitle: "Hospital Operations Platform",
                description: "We have developed an AI-powered hospital operations platform that automates routine workflows and improves operational efficiency across healthcare facilities.",
                fullOverview: [
                    "We have developed an AI-powered hospital operations platform that automates routine workflows and improves operational efficiency across healthcare facilities. Our system intelligently coordinates tasks, alerts, and workflows to reduce delays, errors, and manual workload. This platform is designed for 24/7 hospital environments with high availability and reliability."
                ],
                servicesTitleText: "Key Features",
                services: [
                    "AI workflow automation engine",
                    "Smart nurse alert and escalation system",
                    "Biometric-based patient identification",
                    "Real-time hospital operations dashboard",
                    "Automated compliance and security monitoring"
                ],
                benefitsTitleText: "Use Cases",
                benefits: [
                    "Faster patient movement and reduced wait times",
                    "Improved staff productivity",
                    "Accurate patient identification and fraud prevention",
                    "Real-time operational visibility for hospital administrators"
                ],
                expertSupportText: "Transform your business with Hospital Operations & Automation. Request a demo or start your free trial.",
                sidebarTitle: "Get Started Today",
                sidebarListTitle: "Quick Facts",
                sidebarListType: "facts",
                quickFacts: [
                    { label: "Deployment", value: "Cloud & On-premise" },
                    { label: "Support", value: "24/7" },
                    { label: "Integration", value: "API Available" },
                    { label: "Setup Time", value: "Under 1 hour" }
                ],
                sidebarButtons: { primary: "Request Demo", secondary: "Contact Sales", primaryIcon: true },
                colorClass: "bg-emerald-500",
                bgClass: "bg-emerald-500",
                icon: <Building2 className="w-6 h-6" />,
                mainIcon: <Building2 className="w-24 h-24 text-white" />,
                productOverviewTitleText: "Watch Demo",
                productOverviewTitle: "HOSPITAL OPERATIONS & AUTOMATION",
                productOverviewFeatures: [],
                productOverviewBenefits: [],
                productOverviewCenterBox: false,
                productOverviewHideLists: true,
                footerTitle: "Ready to Get Started?",
                footerText: "Join thousands of companies already using Hospital Operations & Automation",
                footerButton: "Start Free Trial"
            },
            {
                title: "Clinical AI Solutions",
                subtitle: "Clinical AI Platform",
                description: "We have built a comprehensive Clinical AI platform designed to assist doctors and healthcare professionals at every stage of clinical decision-making.",
                fullOverview: [
                    "We have built a comprehensive Clinical AI platform designed to assist doctors and healthcare professionals at every stage of clinical decision-making. Our system uses advanced AI, NLP, and medical knowledge graphs to analyze patient data, clinical notes, lab results, and historical records to provide accurate, evidence-based insights. This solution is designed to integrate seamlessly with existing EHR systems and scales from clinics to large hospitals."
                ],
                servicesTitleText: "Key Features",
                services: [
                    "AI-driven clinical decision support engine",
                    "Real-time medical voice dictation and note structuring",
                    "Intelligent Clinical Documentation Improvement (CDI)",
                    "Risk prediction and early disease identification models",
                    "Personalized treatment recommendation system"
                ],
                benefitsTitleText: "Use Cases",
                benefits: [
                    "Reduces clinical documentation burden",
                    "Improves diagnostic accuracy",
                    "Enhances treatment personalization",
                    "Supports clinicians without replacing clinical judgment"
                ],
                expertSupportText: "Transform your business with Clinical AI Solutions. Request a demo or start your free trial.",
                sidebarTitle: "Get Started Today",
                sidebarListTitle: "Quick Facts",
                sidebarListType: "facts",
                quickFacts: [
                    { label: "Deployment", value: "Cloud & On-premise" },
                    { label: "Support", value: "24/7" },
                    { label: "Integration", value: "API Available" },
                    { label: "Setup Time", value: "Under 1 hour" }
                ],
                sidebarButtons: { primary: "Request Demo", secondary: "Contact Sales", primaryIcon: true },
                colorClass: "bg-blue-600",
                bgClass: "bg-blue-600",
                icon: <HeartPulse className="w-6 h-6" />,
                mainIcon: <HeartPulse className="w-24 h-24 text-white" />,
                productOverviewTitleText: "Watch Demo",
                productOverviewTitle: "CLINICAL AI SOLUTIONS",
                productOverviewFeatures: [],
                productOverviewBenefits: [],
                productOverviewCenterBox: false,
                productOverviewHideLists: true,
                footerTitle: "Ready to Get Started?",
                footerText: "Join thousands of companies already using Clinical AI Solutions",
                footerButton: "Start Free Trial"
            },
            {
                title: "Medical Imaging & Diagnostics",
                subtitle: "Medical Imaging AI Suite",
                description: "We have built a Medical Imaging AI suite that assists radiologists and clinicians by detecting diseases from medical images with high accuracy.",
                fullOverview: [
                    "We have built a Medical Imaging AI suite that assists radiologists and clinicians by detecting diseases from medical images with high accuracy. Our deep learning models analyze X-rays, CT scans, MRIs, retinal images, and ultrasound data to identify abnormalities at early stages. Our imaging AI acts as a clinical support tool, not a replacement for clinicians."
                ],
                servicesTitleText: "Key Features",
                services: [
                    "AI models for chest X-ray and lung CT analysis",
                    "Retinal disease detection (diabetic retinopathy, glaucoma)",
                    "AI screening for tuberculosis, pneumonia, and lung cancer",
                    "Orthopedic imaging analysis (osteoarthritis, mobility risk)",
                    "Kidney and chronic disease image-based detection"
                ],
                benefitsTitleText: "Use Cases",
                benefits: [
                    "Early disease detection",
                    "Reduced diagnostic turnaround time",
                    "Improved accuracy and consistency",
                    "Scalable diagnostics for underserved regions"
                ],
                expertSupportText: "Transform your business with Medical Imaging & Diagnostics. Request a demo or start your free trial.",
                sidebarTitle: "Get Started Today",
                sidebarListTitle: "Quick Facts",
                sidebarListType: "facts",
                quickFacts: [
                    { label: "Deployment", value: "Cloud & On-premise" },
                    { label: "Support", value: "24/7" },
                    { label: "Integration", value: "API Available" },
                    { label: "Setup Time", value: "Under 1 hour" }
                ],
                sidebarButtons: { primary: "Request Demo", secondary: "Contact Sales", primaryIcon: true },
                colorClass: "bg-indigo-500",
                bgClass: "bg-indigo-500",
                icon: <Search className="w-6 h-6" />,
                mainIcon: <Search className="w-24 h-24 text-white" />,
                productOverviewTitleText: "Watch Demo",
                productOverviewTitle: "MEDICAL IMAGING & DIAGNOSTICS",
                productOverviewFeatures: [],
                productOverviewBenefits: [],
                productOverviewCenterBox: false,
                productOverviewHideLists: true,
                footerTitle: "Ready to Get Started?",
                footerText: "Join thousands of companies already using Medical Imaging & Diagnostics",
                footerButton: "Start Free Trial"
            }
        ]
    },
    {
        id: 'ai',
        name: 'AI Solutions',
        icon: <BrainCircuit className="w-5 h-5" />,
        solutions: [
            {
                title: "Language Translation",
                subtitle: "AI Solution",
                description: "Break language barriers with real-time, high-accuracy AI translation for documents, websites, and communications.",
                fullOverview: [
                    "Break language barriers with real-time, high-accuracy AI translation for documents, websites, and communications.",
                    "Our Language Translation services utilize neural machine translation to provide fast and accurate translations in over 100 languages. Perfect for global businesses needing to localize content instantly."
                ],
                servicesTitleText: "Our Services Include",
                services: [
                    "Support for 100+ languages",
                    "Document translation (PDF, Docx)",
                    "Website localization API",
                    "Real-time chat translation",
                    "Glossary management",
                    "Tone and style adjustment",
                    "Batch processing",
                    "Human-in-the-loop options"
                ],
                benefitsTitleText: "Key Benefits",
                benefits: [
                    "Global market reach",
                    "Instant communication",
                    "Cost-effective localization",
                    "Consistent terminology",
                    "Faster turnaround",
                    "Enhanced customer support"
                ],
                expertSupportText: "Our AI experts are ready to help your organization achieve and maintain regulatory compliance.",
                sidebarTitle: "Get Expert Support",
                sidebarListTitle: "Why Choose Us",
                sidebarListType: "bullets",
                whyChooseUs: [
                    "Industry experts with 20+ years experience",
                    "Proven track record with 500+ validations",
                    "Full regulatory compliance assurance",
                    "End-to-end support and documentation"
                ],
                sidebarButtons: { primary: "Schedule Consultation", secondary: "Request Proposal", primaryIcon: false },
                colorClass: "bg-[#0ea5e9]", // Base cyan style adapted to Teal-ish or custom color
                bgClass: "bg-teal-500", // Wait, image one is Teal
                icon: <Languages className="w-6 h-6" />,
                mainIcon: <Languages className="w-24 h-24 text-white" />,
                productOverviewTitleText: "Watch Demo",
                productOverviewTitle: "LANGUAGE TRANSLATION",
                productOverviewFeatures: [],
                productOverviewBenefits: [],
                productOverviewCenterBox: false,
                productOverviewHideLists: true,
            },
            {
                title: "Email Automation",
                subtitle: "AI Solution",
                description: "Transform your email marketing with AI-driven automation sequences that nurture leads and drive conversions.",
                fullOverview: [
                    "Transform your email marketing with AI-driven automation sequences that nurture leads and drive conversions.",
                    "Our Email Automation suite helps you build complex, behavior-triggered email campaigns. From welcome sequences to re-engagement strategies, automate your communication while maintaining a personal touch."
                ],
                servicesTitleText: "Our Services Include",
                services: [
                    "Drag-and-drop workflow builder",
                    "Behavioral triggers and segmentation",
                    "A/B testing for subject lines",
                    "Dynamic content personalization",
                    "Automated list hygiene",
                    "Detailed open and click analytics",
                    "Template library",
                    "Spam score checking"
                ],
                benefitsTitleText: "Key Benefits",
                benefits: [
                    "Higher open rates",
                    "Increased engagement",
                    "Time-saving automation",
                    "Better lead nurturing",
                    "Data-driven insights",
                    "Scalable communication"
                ],
                expertSupportText: "Our AI experts are ready to help your organization achieve and maintain regulatory compliance.",
                sidebarTitle: "Get Expert Support",
                sidebarListTitle: "Why Choose Us",
                sidebarListType: "bullets",
                whyChooseUs: [
                    "Industry experts with 20+ years experience",
                    "Proven track record with 500+ validations",
                    "Full regulatory compliance assurance",
                    "End-to-end support and documentation"
                ],
                sidebarButtons: { primary: "Schedule Consultation", secondary: "Request Proposal", primaryIcon: false },
                colorClass: "bg-indigo-500",
                bgClass: "bg-indigo-500",
                icon: <Mail className="w-6 h-6" />,
                mainIcon: <Mail className="w-24 h-24 text-white" />,
                productOverviewTitleText: "Watch Demo",
                productOverviewTitle: "EMAIL AUTOMATION",
                productOverviewFeatures: [],
                productOverviewBenefits: [],
                productOverviewCenterBox: false,
                productOverviewHideLists: true,
            },
            {
                title: "OCR Model",
                subtitle: "AI Solution",
                description: "Advanced Optical Character Recognition representing the next leap in document digitization.",
                fullOverview: [
                    "Advanced Optical Character Recognition representing the next leap in document digitization.",
                    "Our OCR Model utilizes cutting-edge deep learning to accurately convert scanned documents, PDFs, and even handwritten notes into editable, searchable digital text. It is designed to handle complex layouts, varying fonts, and imperfect scans with exceptional precision."
                ],
                servicesTitleText: "Our Services Include",
                services: [
                    "Handwritten text recognition (HTR)",
                    "Multi-language document support",
                    "Table structure extraction",
                    "Receipt and invoice processing",
                    "Identity document verification",
                    "Layout preservation",
                    "Batch document processing",
                    "Secure data handling"
                ],
                benefitsTitleText: "Key Benefits",
                benefits: [
                    "Digitize archives instantly",
                    "Searchable document databases",
                    "Automated data entry",
                    "Reduced manual transcription",
                    "Enhanced accessibility",
                    "Seamless workflow integration"
                ],
                expertSupportText: "Our AI experts are ready to help your organization achieve and maintain regulatory compliance.",
                sidebarTitle: "Get Expert Support",
                sidebarListTitle: "Why Choose Us",
                sidebarListType: "bullets",
                whyChooseUs: [
                    "Industry experts with 20+ years experience",
                    "Proven track record with 500+ validations",
                    "Full regulatory compliance assurance",
                    "End-to-end support and documentation"
                ],
                sidebarButtons: { primary: "Schedule Consultation", secondary: "Request Proposal", primaryIcon: false },
                colorClass: "bg-[#e8751a]",
                bgClass: "bg-[#e8751a]",
                icon: <FileText className="w-6 h-6" />,
                mainIcon: <FileText className="w-24 h-24 text-white" />,
                productOverviewTitleText: "Watch Demo",
                productOverviewTitle: "OCR MODEL",
                productOverviewFeatures: [],
                productOverviewBenefits: [],
                productOverviewCenterBox: false,
                productOverviewHideLists: true,
            },
            {
                title: "Text Summarization",
                subtitle: "AI Solution",
                description: "Transform extensive documents into concise, easy-to-understand summaries with our AI Summarizer.",
                fullOverview: [
                    "Transform extensive documents into concise, easy-to-understand summaries with our AI Summarizer.",
                    "Our Text Summarization engine processes long-form content—reports, articles, whitepapers—and distills it into key insights and executive summaries. It understands context and nuance, ensuring that critical information is preserved while significantly reducing reading time."
                ],
                servicesTitleText: "Our Services Include",
                services: [
                    "Document and URL summarization",
                    "Abstractive and extractive modes",
                    "Adjustable summary length",
                    "Key point extraction",
                    "Multi-language support",
                    "Sentiment analysis integration",
                    "Bulk processing capabilities",
                    "Export to various formats (PDF, Word)"
                ],
                benefitsTitleText: "Key Benefits",
                benefits: [
                    "Save hours of reading time",
                    "Quick decision making",
                    "Enhanced knowledge retention",
                    "Simplified complex information",
                    "Consistent reporting format",
                    "Easy content repurposing"
                ],
                expertSupportText: "Our AI experts are ready to help your organization achieve and maintain regulatory compliance.",
                sidebarTitle: "Get Expert Support",
                sidebarListTitle: "Why Choose Us",
                sidebarListType: "bullets",
                whyChooseUs: [
                    "Industry experts with 20+ years experience",
                    "Proven track record with 500+ validations",
                    "Full regulatory compliance assurance",
                    "End-to-end support and documentation"
                ],
                sidebarButtons: { primary: "Schedule Consultation", secondary: "Request Proposal", primaryIcon: false },
                colorClass: "bg-[#0ea5e9]",
                bgClass: "bg-[#0ea5e9]",
                icon: <AlignLeft className="w-6 h-6" />,
                mainIcon: <AlignLeft className="w-24 h-24 text-white" />,
                productOverviewTitleText: "Watch Demo",
                productOverviewTitle: "TEXT SUMMARIZATION",
                productOverviewFeatures: [],
                productOverviewBenefits: [],
                productOverviewCenterBox: false,
                productOverviewHideLists: true,
            },
            {
                title: "AI Social Marketing",
                subtitle: "AI Solution",
                description: "Optimize your social media presence with AI-powered content scheduling, analysis, and engagement tools.",
                fullOverview: [
                    "Optimize your social media presence with AI-powered content scheduling, analysis, and engagement tools.",
                    "The AI Social Marketing suite is your all-in-one solution for managing multiple social platforms. Use AI to generate posts, schedule them for optimal times, and analyze performance across all channels."
                ],
                servicesTitleText: "Our Services Include",
                services: [
                    "Multi-platform scheduling",
                    "AI caption generation",
                    "Hashtag recommendations",
                    "Unified social inbox",
                    "Competitor analysis",
                    "Trend monitoring",
                    "Audience demographics",
                    "Automated reporting"
                ],
                benefitsTitleText: "Key Benefits",
                benefits: [
                    "Consistent brand presence",
                    "Time efficiency",
                    "Improved engagement metrics",
                    "Data-backed strategy",
                    "Streamlined workflow",
                    "Growth acceleration"
                ],
                expertSupportText: "Our AI experts are ready to help your organization achieve and maintain regulatory compliance.",
                sidebarTitle: "Get Expert Support",
                sidebarListTitle: "Why Choose Us",
                sidebarListType: "bullets",
                whyChooseUs: [
                    "Industry experts with 20+ years experience",
                    "Proven track record with 500+ validations",
                    "Full regulatory compliance assurance",
                    "End-to-end support and documentation"
                ],
                sidebarButtons: { primary: "Schedule Consultation", secondary: "Request Proposal", primaryIcon: false },
                colorClass: "bg-rose-600",
                bgClass: "bg-rose-600",
                icon: <Share2 className="w-6 h-6" />,
                mainIcon: <Share2 className="w-24 h-24 text-white" />,
                productOverviewTitleText: "Watch Demo",
                productOverviewTitle: "AI SOCIAL MARKETING",
                productOverviewFeatures: [],
                productOverviewBenefits: [],
                productOverviewCenterBox: false,
                productOverviewHideLists: true,
            }
        ]
    }
];

const Solutions: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('lifescience');
    const [selectedSolution, setSelectedSolution] = useState<SolutionDetails | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Reset scroll to top when detail view shows
    useEffect(() => {
        if (selectedSolution) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [selectedSolution]);

    if (selectedSolution) {
        return (
            <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
                {/* Banner */}
                <div className={`${selectedSolution.colorClass} pt-28 pb-16 px-6 relative overflow-hidden text-white`}>
                    <div className="max-w-6xl mx-auto align-middle">
                        <button
                            onClick={() => setSelectedSolution(null)}
                            className="flex items-center gap-2 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors mb-6 font-medium"
                        >
                            <ArrowLeft className="w-5 h-5" /> Back to Solutions
                        </button>
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 hidden md:block">
                                {selectedSolution.mainIcon}
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
                                    {selectedSolution.title}
                                </h1>
                                <p className="text-xl md:text-2xl text-white/90 font-light">
                                    {selectedSolution.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 mt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Left Content Area */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview Section */}
                            <section>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Overview</h2>
                                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                    {selectedSolution.fullOverview.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}
                                </div>
                            </section>

                            {/* Product Overview Feature Graphic */}
                            <section>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">{selectedSolution.productOverviewTitleText || "Product Overview"}</h2>
                                <div className={`w-full rounded-2xl overflow-hidden shadow-xl ${selectedSolution.colorClass} p-8 relative min-h-[400px] flex flex-col justify-center`}>
                                    {/* Background patterns */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-10 left-10"><Database className="w-16 h-16" /></div>
                                        <div className="absolute bottom-20 right-10"><Microscope className="w-20 h-20" /></div>
                                        <div className="absolute top-1/4 right-1/4"><Activity className="w-12 h-12" /></div>
                                        <div className="absolute bottom-1/3 left-1/4"><Users className="w-10 h-10" /></div>
                                    </div>

                                    {selectedSolution.productOverviewHideLists ? (
                                        <div className="relative z-10 flex h-full text-left">
                                            <div className="w-full md:w-2/3 md:pr-8 flex flex-col justify-center">
                                                <h3 className="text-3xl font-bold text-white mb-2 tracking-wide uppercase">{selectedSolution.productOverviewTitle}</h3>
                                                <p className="text-white/90 font-bold mb-4 text-xs tracking-wider uppercase">{selectedSolution.subtitle}</p>
                                                <p className="text-white/80 text-sm leading-relaxed max-w-lg">{selectedSolution.description}</p>
                                            </div>
                                            <div className="hidden md:flex w-1/3 items-center justify-center">
                                                <div className="bg-transparent opacity-90 p-8 rounded-full relative">
                                                    <div className="absolute inset-0 border-[3px] border-white/20 rounded-full scale-125 animate-[spin_10s_linear_infinite] opacity-50 border-t-transparent"></div>
                                                    <div className="absolute inset-0 border-[2px] border-white/20 rounded-full scale-150 animate-[spin_15s_linear_infinite_reverse] opacity-30 border-b-transparent"></div>
                                                    {selectedSolution.mainIcon}
                                                </div>
                                            </div>
                                        </div>
                                    ) : selectedSolution.productOverviewCenterBox ? (
                                        <div className="relative z-10 flex flex-col items-center justify-center text-center">
                                            <div className="bg-transparent border border-white/30 p-8 rounded-full mb-6 relative">
                                                <div className="absolute -inset-4 border border-white/20 rounded-full animate-pulse"></div>
                                                {selectedSolution.mainIcon}
                                            </div>
                                            <h3 className="text-3xl font-bold text-white mb-8">{selectedSolution.productOverviewTitle}</h3>

                                            <div className="flex w-full justify-between items-start text-left px-4">
                                                <div className="flex flex-col gap-2">
                                                    {selectedSolution.productOverviewFeatures.slice(0, 4).map((feat, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                                                            <Check className="w-4 h-4 text-emerald-300" /> {feat}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    {selectedSolution.productOverviewBenefits.slice(0, 3).map((ben, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                                                            <StarIcon className="w-4 h-4 text-amber-300" /> {ben}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative z-10 flex flex-col justify-center h-full">
                                            <h3 className="text-4xl font-extrabold text-white mb-2 text-center">{selectedSolution.title.split('(')[0]}</h3>
                                            <p className="text-white/80 text-center mb-10 max-w-lg mx-auto">{selectedSolution.description}</p>

                                            <div className="grid grid-cols-2 gap-8 text-white mt-4">
                                                <div>
                                                    <h4 className="text-xl font-bold mb-4 tracking-wider uppercase text-white/90 border-b border-white/20 pb-2 inline-block">Key Features</h4>
                                                    <ul className="space-y-3">
                                                        {selectedSolution.productOverviewFeatures.map((feat, idx) => (
                                                            <li key={idx} className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> {feat}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold mb-4 tracking-wider uppercase text-white/90 border-b border-white/20 pb-2 inline-block">Main Benefits</h4>
                                                    <ul className="space-y-3">
                                                        {selectedSolution.productOverviewBenefits.map((ben, idx) => (
                                                            <li key={idx} className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> {ben}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>

                            {/* Services Include */}
                            <section>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">{selectedSolution.servicesTitleText || "Our Services Include"}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedSolution.services.map((service, idx) => (
                                        <div key={idx} className="flex items-center bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="mr-4 text-emerald-500 bg-emerald-50 p-1.5 rounded-full">
                                                <Check className="w-5 h-5" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Key Benefits */}
                            <section>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">{selectedSolution.benefitsTitleText || "Key Benefits"}</h2>
                                <div className="space-y-4">
                                    {selectedSolution.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                                            <div className={`w-2 h-2 rounded-full ${selectedSolution.bgClass} mr-4`}></div>
                                            <span className="text-slate-700 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Sidebar Area */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{selectedSolution.sidebarTitle || "Get Expert Support"}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                                    {selectedSolution.expertSupportText}
                                </p>

                                <div className="space-y-4 mb-10">
                                    <button onClick={() => setIsModalOpen(true)} className={`w-full py-3.5 px-6 flex justify-center items-center gap-2 rounded-xl font-bold text-white shadow-md hover:shadow-lg transition-all ${selectedSolution.bgClass} hover:opacity-90`}>
                                        {selectedSolution.sidebarButtons?.primaryIcon && <Play className="w-4 h-4 fill-current" />}
                                        {selectedSolution.sidebarButtons?.primary || "Schedule Consultation"}
                                    </button>
                                    <button onClick={() => setIsModalOpen(true)} className={`w-full py-3.5 px-6 rounded-xl font-bold bg-white text-slate-800 border-[1.5px] border-slate-200 hover:border-slate-300 transition-all shadow-sm`}>
                                        {selectedSolution.sidebarButtons?.secondary || "Request Proposal"}
                                    </button>
                                </div>

                                <h4 className="font-bold text-slate-900 mb-6 tracking-wide text-[15px]">{selectedSolution.sidebarListTitle || "Why Choose Us"}</h4>
                                {selectedSolution.sidebarListType === 'facts' && selectedSolution.quickFacts ? (
                                    <ul className="space-y-4">
                                        {selectedSolution.quickFacts.map((fact, idx) => (
                                            <li key={idx} className="flex justify-between items-center border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                                <span className="text-slate-500 text-[13px]">{fact.label}</span>
                                                <span className="text-slate-800 text-[13px] font-bold">{fact.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <ul className="space-y-5">
                                        {selectedSolution.whyChooseUs?.map((reason, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className={`w-1.5 h-1.5 rounded-full ${selectedSolution.bgClass} mt-1.5 mr-3 shrink-0`}></div>
                                                <span className="text-slate-600 text-[13px] leading-relaxed">{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Banner */}
                <div className={`${selectedSolution.colorClass} text-white mt-20 py-16 text-center`}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{selectedSolution.footerTitle || "Ready to Achieve Compliance?"}</h2>
                    <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto font-light">
                        {selectedSolution.footerText || "Let our experts guide you through the validation process and ensure smooth operations."}
                    </p>
                    <button onClick={() => setIsModalOpen(true)} className="bg-white text-slate-900 font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                        {selectedSolution.footerButton || "Start Your Project"}
                    </button>
                </div>
                <RequestAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        );
    }

    const currentCategory = solutionsData.find(c => c.id === selectedCategory);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#050505] relative font-sans">
            <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16 relative">
                        <h1 className="text-5xl md:text-[5.5rem] font-extrabold text-white mb-6 tracking-tight relative inline-block">
                            OUR <span className="text-[#00e5ff]">SOLUTIONS</span>
                        </h1>
                        <p className="text-lg md:text-[17px] text-[#9ca3af] max-w-4xl mx-auto leading-relaxed font-normal">
                            Discover tailored enterprise solutions designed to solve modern regulatory, operational, and structural challenges. From life sciences to healthcare and artificial intelligence, our comprehensive platforms empower organizations with end-to-end automation, predictive analytics, and deeply integrated workflows. Explore solutions crafted for scale and compliance.
                        </p>
                    </div>
                </FadeIn>

                {/* Categories Tabs */}
                <FadeIn delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-4 mb-20 relative z-20">
                        {solutionsData.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center justify-center gap-3 px-8 py-3.5 rounded-[32px] font-semibold text-[16px] transition-all duration-300 outline-none ${selectedCategory === category.id
                                    ? 'bg-[#00e5ff] text-black shadow-[0_0_40px_rgba(0,229,255,0.4)] border border-transparent'
                                    : 'bg-[#121212] text-[#9ca3af] border border-white/5 hover:border-white/10 hover:text-white hover:bg-[#1a1a1a]'
                                    }`}
                            >
                                <span className={selectedCategory === category.id ? "text-black" : "text-[#9ca3af]"}>
                                    {category.icon}
                                </span>
                                {category.name}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Extra Category Data / Overview Section */}
                <FadeIn key={`header-${selectedCategory}`} delay={0.2}>
                    <div className="max-w-5xl mx-auto mb-16 p-8 md:p-10 rounded-[32px] bg-[#101010] border border-white/5 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                            {/* Descriptive Text */}
                            <div className="md:col-span-2 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                                    {selectedCategory === 'lifescience' && 'Empowering Life Sciences with GAMP-Compliant Systems'}
                                    {selectedCategory === 'healthcare' && 'Next-Generation H-CAMP Healthcare Infrastructure'}
                                    {selectedCategory === 'ai' && 'State-of-the-Art Enterprise AI Utilities'}
                                </h2>
                                <p className="text-[#9ca3af] text-[16px] leading-relaxed">
                                    {selectedCategory === 'lifescience' && 'Streamline your quality operations with our comprehensive suite of Life Sciences solutions. From Document Management (DMS) to advanced Regulatory Information Management (RIMS), our tools ensure top-tier compliance, robust data integrity, and automated operational efficiency for modern labs and enterprises.'}
                                    {selectedCategory === 'healthcare' && 'Revamp your hospital administration and clinical workflows. Our H-CAMP solutions integrate cutting-edge medical imaging AI, automated billing & revenue cycles, and smart clinical diagnostics to decrease overhead, eliminate bottlenecks, and maximize patient care quality across the board.'}
                                    {selectedCategory === 'ai' && 'Leverage our neural network-powered solutions to dramatically reduce manual workload. Our Artificial Intelligence suite brings high-accuracy OCR, real-time language translation, predictive text summarization, and intelligent social marketing automation directly to your enterprise workflows.'}
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="md:col-span-1 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10 space-y-6">
                                <div>
                                    <div className="text-4xl font-black text-[#00e5ff] tracking-tight mb-1">
                                        {selectedCategory === 'lifescience' && '100%'}
                                        {selectedCategory === 'healthcare' && '24/7'}
                                        {selectedCategory === 'ai' && '100+'}
                                    </div>
                                    <div className="text-sm font-semibold text-[#666666] uppercase tracking-wider">
                                        {selectedCategory === 'lifescience' && 'Compliance Ready'}
                                        {selectedCategory === 'healthcare' && 'System Uptime'}
                                        {selectedCategory === 'ai' && 'Language Support'}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-[#00e5ff] tracking-tight mb-1">
                                        {selectedCategory === 'lifescience' && '500+'}
                                        {selectedCategory === 'healthcare' && '< 1h'}
                                        {selectedCategory === 'ai' && '99.9%'}
                                    </div>
                                    <div className="text-sm font-semibold text-[#666666] uppercase tracking-wider">
                                        {selectedCategory === 'lifescience' && 'Deployments'}
                                        {selectedCategory === 'healthcare' && 'Deployment Time'}
                                        {selectedCategory === 'ai' && 'Accuracy Rate'}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-[#00e5ff] tracking-tight mb-1">
                                        {selectedCategory === 'lifescience' && '20+'}
                                        {selectedCategory === 'healthcare' && 'API'}
                                        {selectedCategory === 'ai' && '10x'}
                                    </div>
                                    <div className="text-sm font-semibold text-[#666666] uppercase tracking-wider">
                                        {selectedCategory === 'lifescience' && 'Years Experience'}
                                        {selectedCategory === 'healthcare' && 'Ready Integrations'}
                                        {selectedCategory === 'ai' && 'Speed Increase'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                {/* Healthcare AI Session Banner */}
                {selectedCategory === 'healthcare' && (
                    <FadeIn delay={0.3}>
                        <div className="max-w-5xl mx-auto mb-16 rounded-[32px] overflow-hidden border border-white/10 relative group shadow-[0_0_40px_rgba(0,229,255,0.1)]">
                            <div className="flex flex-col md:flex-row items-center p-8 md:p-12 gap-10 relative z-10">
                                <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-xl tracking-tight">AI-Powered Healthcare</h3>
                                    <p className="text-white/80 text-lg drop-shadow-md font-medium mb-8 leading-relaxed">
                                        Experience interactive and intelligent medical systems designed for the modern world. Empowering clinicians with predictive analytics and intelligent automation.
                                    </p>
                                    <div>
                                        <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-black/40 backdrop-blur-md border border-white/10 text-white text-sm font-semibold rounded-full shadow-lg">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e5ff]"></span>
                                            </span>
                                            Interactive Vision Model
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10">
                                        <img
                                            src="/AI.png"
                                            alt="Healthcare AI Platform"
                                            className="w-full h-auto object-contain transform group-hover:scale-[1.03] transition-transform duration-[1500ms] ease-out opacity-90 group-hover:opacity-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                )}

                {/* Render Solutions Grid */}
                <div className="relative">
                    {currentCategory?.solutions && currentCategory.solutions.length > 0 ? (
                        <div key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentCategory.solutions.map((solution, idx) => (
                                <FadeIn key={idx} delay={idx * 0.1}>
                                    <div
                                        onClick={() => setSelectedSolution(solution)}
                                        className="flex flex-col p-8 rounded-[24px] bg-[#101010] border border-white/5 hover:border-white/10 transition-all duration-300 group cursor-pointer hover:-translate-y-1 min-h-[380px]"
                                    >
                                        <div className={`mb-6 p-4 rounded-xl w-fit ${solution.colorClass.includes('from-') || solution.colorClass.includes('#') ? solution.colorClass : solution.bgClass} shadow-lg text-white`}>
                                            {solution.icon}
                                        </div>

                                        <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight leading-snug">
                                            {solution.title}
                                        </h3>

                                        <p className="text-[#888888] text-[15px] leading-relaxed font-light mb-8 pt-2 line-clamp-4">
                                            {solution.description}
                                        </p>

                                        {/* Spacer pushes bottom row down */}
                                        <div className="flex-grow"></div>

                                        <div className="pt-5 border-t border-white/5 flex justify-start items-center text-[14px] font-bold">
                                            <span className={`${selectedCategory === 'lifescience' && idx === 1 ? 'text-[#10b981]' : 'text-white'} group-hover:text-[#00e5ff] transition-colors duration-300 flex items-center gap-2`}>
                                                View Details
                                            </span>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    ) : (
                        <FadeIn>
                            <div className="text-center py-24 bg-[#111111] rounded-3xl border border-white/5">
                                <FlaskConical className="w-16 h-16 text-[#8f8f8f] mx-auto mb-6 opacity-30" />
                                <h3 className="text-2xl font-bold text-white mb-3">Solutions in Development</h3>
                                <p className="text-[#8f8f8f] max-w-md mx-auto">We are actively expanding our portfolio. Check back shortly for major updates.</p>
                            </div>
                        </FadeIn>
                    )}
                </div>
                <RequestAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </div>
    );
};

// Helper Icon for Product Overview (Star)
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}

export default Solutions;
