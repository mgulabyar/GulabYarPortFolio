import orange1 from "../../assets/orange (1).png";
import orange2 from "../../assets/orange (2).png";
import orange3 from "../../assets/orange (3).png";

import ghost from "../../assets/ghostwriter.png";
import ghost1 from "../../assets/ghostwriter (1).png";
import bi from "../../assets/BI Inteligence.png";
import bi1 from "../../assets/BI Inteligence (1).png";
import outlookCrm1 from "../../assets/outlookCrm1.png"
import outlookCrm2 from "../../assets/outlookCrm2.png"
import outlookCrm3 from "../../assets/outlookCrm3.png"
import whats_app1 from "../../assets/what's app (1).png";
import whats_app2 from "../../assets/what's app (2).png";
import whats_app3 from "../../assets/what's app (3).png";
import whats_app4 from "../../assets/what's app (4).png";
import whats_app5 from "../../assets/what's app (5).png";
import researchIQ1 from "../../assets/researchIQ1.png";
import researchIQ2 from "../../assets/researchIQ2.png";
import researchIQ3 from "../../assets/researchIQ3.png";
import franchiseOS1 from "../../assets/franchiseOS1.png";
import franchiseOS2 from "../../assets/franchiseOS2.png";
import franchiseOS3 from "../../assets/franchiseOS3.png";
import propertyPulse1 from "../../assets/propertyPulse1 (1).png";
import propertyPulse2 from "../../assets/propertyPulse1 (2).png";
import propertyPulse3 from "../../assets/propertyPulse1 (3).png";
import researchIQ_1 from "../../assets/researchIQ1 (1).png";
import researchIQ_2 from "../../assets/researchIQ1 (2).png";
import researchIQ_3 from "../../assets/researchIQ1 (3).png";
import pitchDeck1 from "../../assets/pitchDeck1 (1).png";
import pitchDeck2 from "../../assets/pitchDeck1 (2).png";
import pitchDeck3 from "../../assets/pitchDeck1 (3).png";
import driveSync1 from "../../assets/driveSync1 (1).png";
import driveSync2 from "../../assets/driveSync1 (2).png";
import driveSync3 from "../../assets/driveSync1 (3).png";
import driveSync4 from "../../assets/driveSync1 (4).png";
import nexusAI1 from "../../assets/nexusAI1 (1).png";
import nexusAI2 from "../../assets/nexusAI1 (2).png";
import mongoBridge1 from "../../assets/mongoBridge1 (1).png";
import mongoBridge2 from "../../assets/mongoBridge1 (2).png";
import legalGuard1 from "../../assets/legalGuard1 (1).png";
import legalGuard2 from "../../assets/legalGuard1 (2).png";
import legalGuard3 from "../../assets/legalGuard1 (3).png";
import legalGuard4 from "../../assets/legalGuard1 (4).png";
import legalGuard5 from "../../assets/legalGuard1 (5).png";
import scriptPilot1 from "../../assets/scriptPilot1 (1).png"
import scriptPilot2 from "../../assets/scriptPilot1 (2).png"
import scriptPilot3 from "../../assets/scriptPilot1 (3).png"
import scriptPilot4 from "../../assets/scriptPilot1 (3).png"

export interface Project {
  _id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  subType: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
}

export const projects: Project[] = [
{
  _id: "1",
  title: "Orange Ledger",
  tagline: "Automated QuickBooks & Google Sheets Sync.",
  category: "Google Add-ons",
  subType: "Google Sheet Add-ons",
  images: [orange1, orange2, orange3],
  description:
    "A high-performance Google Sheets add-on that automates real-time financial data synchronization with QuickBooks via secure OAuth 2.0. It streamlines ledger management and generates audit-ready reports, eliminating manual data entry for accounting and finance teams.",
  technologies: [
    "Google Apps Script",
    "QuickBooks API",
    "OAuth 2.0",
    "RESTful APIs",
    "Automation",
  ],
  liveUrl: "#",
},

{
  _id: "2",
  title: "GhostWriter Professional",
  tagline: "AI-Powered Google Docs Writing Assistant.",
  category: "Google Add-ons",
  subType: "Google Docs Add-ons",
  images: [ghost, ghost1],
  description:
    "A smart Google Docs extension powered by OpenAI's GPT-4o. It features a custom React-based sidebar for instant content rewriting, tone adjustment, and multi-language support, complete with a persistent history management system for professional content creators.",
  technologies: [
    "OpenAI API",
    "React.js",
    "Material UI",
    "Google Apps Script",
    "Prompt Engineering",
  ],
  liveUrl: "#",
},

{
  _id: "3",
  title: "Strategic BI Commander",
  tagline: "AI-Driven Executive Analytics & Business Intelligence Dashboard.",
  category: "Google Add-ons",
  subType: "Google Sheet Add-ons",
  images: [bi, bi1],
  description:
    "A powerful Google Sheets business intelligence add-on designed for executives, analysts, and operations teams. The platform automates strategic reporting by generating structured analytics dashboards, trend analysis, performance insights, predictive forecasting datasets, recovery planning reports, and marketing intelligence sheets. Built with a modern React and Material UI interface, it streamlines decision-making workflows by transforming raw spreadsheet data into executive-ready business reports with a single click.",
  technologies: [
    "Google Apps Script",
    "React.js",
    "Material UI",
    "Google Sheets API",
    "Business Intelligence",
    "Predictive Analytics",
    "Data Visualization",
    "Automation",
  ],
  liveUrl: "#",
},

{
  _id: "4",
  title: "AI Outlook CRM",
  tagline: "Intelligent Lead Extraction & Predictive Sales Scoring.",
  category: "Office Add-ins",
  subType: "Outlook Add-ins",
  images: [outlookCrm1, outlookCrm2, outlookCrm3],
  description:
    "An enterprise-grade Microsoft Outlook add-in that transforms incoming emails into actionable sales opportunities using advanced AI automation. Powered by GPT-4 and a FastAPI backend, the solution performs intelligent entity extraction to capture contact details, company information, job titles, and phone numbers directly from email conversations and signatures. A built-in predictive lead scoring engine evaluates prospect intent, budget signals, and engagement potential to automatically prioritize high-value opportunities. The platform synchronizes lead data in real time with MongoDB, creating a centralized CRM workflow that eliminates manual data entry and accelerates sales follow-up processes.",
  technologies: [
    "React.js",
    "Microsoft Office.js",
    "Microsoft Outlook Add-in",
    "FastAPI",
    "OpenAI GPT-4",
    "MongoDB",
    "Named Entity Recognition (NER)",
    "Predictive Lead Scoring",
    "REST APIs",
    "Automation",
  ],
  liveUrl: "#",
},

{
  _id: "5",
  title: "WhatsApp Campaign Hub",
  tagline: "Automated WhatsApp Messaging & Customer Engagement Platform.",
  category: "Google Add-ons",
  subType: "Google Sheet Add-ons",
  images: [whats_app1, whats_app2, whats_app3, whats_app4, whats_app5],
  description:
    "A powerful Google Sheets automation platform that enables businesses to launch personalized WhatsApp campaigns directly from spreadsheet data. Integrated with the WhatsApp Business API, the solution automates customer notifications, order updates, invoice delivery, and marketing outreach at scale. The system supports dynamic message templating with custom placeholders, allowing each recipient to receive highly personalized communication. A built-in delivery tracking engine provides real-time visibility into message statuses, including sent, delivered, and failed notifications. Designed for high-volume operations, the platform eliminates manual outreach workflows while maintaining privacy compliance and enterprise-grade reliability.",
  technologies: [
    "Google Apps Script",
    "Google Sheets API",
    "WhatsApp Business API",
    "Twilio API",
    "REST APIs",
    "Automation",
    "Message Personalization",
    "Campaign Management",
    "Status Tracking",
    "Workflow Automation",
  ],
  liveUrl: "#",
},

{
  _id: "6",
  title: "ResearchIQ Verifier",
  tagline: "AI-Powered Fact Verification & Smart Citation Assistant.",
  category: "Google Add-ons",
  subType: "Google Docs Add-ons",
  images: [researchIQ1, researchIQ2, researchIQ3],
  description:
    "An advanced Google Docs research assistant that combines artificial intelligence with live web intelligence to verify claims, validate facts, and generate professional citations without leaving the document workspace. Built with a modern React and Material UI interface, the platform integrates GPT-4o and real-time search capabilities to analyze highlighted content, cross-reference multiple sources, and provide instant fact verification. The system automatically generates properly formatted citations while delivering source credibility insights through a built-in confidence scoring framework. Designed for researchers, academics, journalists, and content teams, it significantly accelerates the research workflow while improving content accuracy and trustworthiness.",
  technologies: [
    "Google Apps Script",
    "Google Docs API",
    "React.js",
    "Material UI",
    "OpenAI GPT-4o",
    "Google Search API",
    "Fact Verification",
    "Citation Generation",
    "Prompt Engineering",
    "Real-Time Research",
    "Automation",
  ],
  liveUrl: "#",
},


{
  _id: "7",
  title: "FranchiseOS AI",
  tagline: "Multi-Tenant Franchise Management & AI Performance Intelligence Platform.",
  category: "Web Development",
  subType: "Enterprise SaaS Platform",
  images: [franchiseOS1, franchiseOS2, franchiseOS3],
  description:
    "A scalable enterprise SaaS platform built for organizations managing multiple franchises, branches, and business units from a single centralized ecosystem. Developed using the MERN stack, the platform features a secure multi-tenant architecture with advanced role-based access controls, ensuring complete data isolation across locations while providing executives with a unified operational view. The system includes financial analytics dashboards, performance benchmarking, branch comparison tools, and an AI-powered strategic advisory engine that conducts automated audits, identifies operational inefficiencies, and recommends data-driven growth opportunities. Designed for enterprise-scale operations, the platform empowers leadership teams to monitor, analyze, and optimize business performance across unlimited franchise locations from a single intelligent dashboard.",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Multi-Tenant Architecture",
    "Role-Based Access Control (RBAC)",
    "OpenAI GPT-4o",
    "Financial Analytics",
    "Business Intelligence",
    "REST APIs",
    "Data Visualization",
    "Enterprise SaaS",
  ],
  liveUrl: "#",
},


{
  _id: "8",
  title: "PropertyPulse AI",
  tagline: "AI-Powered Real Estate ROI Forecasting & Investment Intelligence.",
  category: "Google Add-ons",
  subType: "Google Sheet Add-ons",
  images: [propertyPulse1, propertyPulse2, propertyPulse3],
  description:
    "A sophisticated Google Sheets add-on designed for real estate investors, analysts, and property consultants to evaluate investment opportunities with precision. Built with a premium React and Material UI interface, the platform leverages GPT-4o and Google Apps Script to forecast long-term property appreciation, rental yields, and investment returns across multiple markets. The system features interactive financial dashboards, custom ROI visualization gauges, inflation-adjusted forecasting models, and automated risk analysis tools. An integrated AI Investment Advisor evaluates risk-to-reward ratios and delivers actionable acquisition recommendations, enabling investors to make faster, data-driven property decisions with greater confidence.",
  technologies: [
    "Google Apps Script",
    "React.js",
    "Material UI",
    "OpenAI GPT-4o",
    "Google Sheets API",
    "Real Estate Analytics",
    "ROI Forecasting",
    "Financial Modeling",
    "Data Visualization",
    "Investment Analysis",
    "Automation",
  ],
  liveUrl: "#",
},


{
  _id: "9",
  title: "ResearchIQ Verifier",
  tagline: "AI-Powered Fact Verification & Smart Citation Assistant.",
  category: "Google Add-ons",
  subType: "Google Docs Add-ons",
  images: [researchIQ_1, researchIQ_2, researchIQ_3],
  description:
    "An enterprise-grade Google Docs add-on that empowers researchers, academics, journalists, and content teams with real-time fact verification and intelligent citation generation. Built with a modern React and Material UI interface, the platform combines GPT-4o with live web search capabilities to validate claims directly within the document environment. Its dual-agent verification engine cross-references information across trusted sources, generates properly formatted citations in a single click, and provides source credibility analysis through an advanced confidence scoring framework. The system helps users identify questionable information, discover verified alternatives, and produce highly accurate, research-backed content without disrupting their writing workflow.",
  technologies: [
    "Google Apps Script",
    "Google Docs API",
    "React.js",
    "Material UI",
    "OpenAI GPT-4o",
    "Google Search API",
    "Fact Verification",
    "Citation Generation",
    "Prompt Engineering",
    "Source Authority Analysis",
    "Real-Time Research",
    "Automation",
  ],
  liveUrl: "#",
},


{
  _id: "10",
  title: "PitchDeck AI Architect",
  tagline: "AI-Powered Docs-to-Slides Presentation Generator.",
  category: "Google Add-ons",
  subType: "Google Slides Add-ons",
  images: [pitchDeck1, pitchDeck2, pitchDeck3],
  description:
    "A sophisticated Google Slides add-on that automatically transforms business documents into professionally designed presentations within minutes. Built with a premium React and Material UI interface, the platform leverages GPT-4o to analyze documents, extract key insights, and generate compelling slide content with intelligent storytelling. The system integrates AI-powered image generation to create custom visuals and utilizes a smart layout engine to automatically structure slides, apply design consistency, and optimize visual hierarchy. An interactive drag-and-drop presentation builder allows users to customize themes, layouts, and generated assets in real time, dramatically reducing the effort required to create investor-ready pitch decks, sales presentations, and business reports.",
  technologies: [
    "Google Apps Script",
    "Google Slides API",
    "Google Docs API",
    "React.js",
    "Material UI",
    "OpenAI GPT-4o",
    "DALL·E 3",
    "AI Image Generation",
    "Presentation Automation",
    "Smart Layout Engine",
    "Document Processing",
    "Automation",
  ],
  liveUrl: "#",
},


{
  _id: "11",
  title: "DriveSync Mail Manager",
  tagline: "Automated Gmail Attachment Organization & Google Drive Sync.",
  category: "Google Add-ons",
  subType: "Gmail Add-ons",
  images: [driveSync1, driveSync2, driveSync3, driveSync4],
  description:
    "A productivity-focused Gmail add-on designed to automate attachment management and streamline document organization workflows. Built using Google Apps Script and the Gmail Card Service framework, the solution intelligently activates when emails containing attachments are opened, providing users with a contextual side-panel experience. The platform automatically identifies files, displays them through a clean Material Design interface, and enables one-click synchronization to Google Drive without requiring local downloads. A smart folder management engine automatically creates and maintains organized storage structures, ensuring invoices, receipts, contracts, and project documents remain securely archived and easily accessible. The solution significantly reduces manual file handling while improving productivity, accessibility, and document retention.",
  technologies: [
    "Google Apps Script",
    "Gmail Add-ons",
    "Google Card Service",
    "Google Drive API",
    "Gmail API",
    "Material Design",
    "File Management",
    "Document Organization",
    "Workflow Automation",
    "Cloud Storage Integration",
  ],
  liveUrl: "#",
},


{
  _id: "12",
  title: "Nexus AI Omni-Agent",
  tagline: "Autonomous Excel Assistant with Memory & Natural Language Automation.",
  category: "Office Add-ins",
  subType: "Excel Add-ins",
  images: [nexusAI1, nexusAI2],
  description:
    "An advanced Microsoft Excel add-in that transforms spreadsheets into an intelligent command center powered by autonomous AI agents. Built with React, Office.js, and GPT-4 Turbo, the platform analyzes real-time worksheet structures to understand cell locations, data relationships, and user intent with exceptional accuracy. Unlike traditional spreadsheet assistants, the system features contextual memory and sheet-awareness capabilities, enabling it to execute complex multi-step operations such as table generation, data population, professional formatting, color theme application, and intelligent data transformations through simple natural language instructions. The solution empowers users to automate large-scale spreadsheet workflows, significantly reducing manual effort while improving accuracy and productivity across financial, operational, and analytical tasks.",
  technologies: [
    "React.js",
    "Microsoft Office.js",
    "Excel Add-ins",
    "OpenAI GPT-4 Turbo",
    "JavaScript",
    "Natural Language Processing",
    "Autonomous AI Agents",
    "Spreadsheet Automation",
    "Context Memory",
    "Data Visualization",
    "Workflow Automation",
  ],
  liveUrl: "#",
},


{
  _id: "13",
  title: "MongoSync AI Bridge",
  tagline: "Natural Language MongoDB Querying & Excel Data Synchronization.",
  category: "Office Add-ins",
  subType: "Excel Add-ins",
  images: [mongoBridge1, mongoBridge2],
  description:
    "A powerful Microsoft Excel add-in that enables business users to interact with MongoDB databases using simple natural language instead of complex query syntax. Built with React, FastAPI, and a specialized GPT-4-powered query engine, the platform intelligently translates user requests into optimized MongoDB filters and retrieves data in real time. The solution supports advanced search conditions, case-insensitive filtering, and high-speed data streaming through asynchronous database operations, eliminating the need for manual exports and CSV processing. A built-in formatting engine automatically transforms raw database records into professionally styled Excel tables, providing a seamless experience for analysts, operations teams, and decision-makers who require instant access to business data.",
  technologies: [
    "React.js",
    "Microsoft Office.js",
    "Excel Add-ins",
    "FastAPI",
    "MongoDB",
    "Motor Async Driver",
    "OpenAI GPT-4",
    "Natural Language Processing",
    "Database Automation",
    "Data Synchronization",
    "REST APIs",
    "Workflow Automation",
  ],
  liveUrl: "#",
},


{
  _id: "14",
  title: "LegalGuard AI Auditor",
  tagline: "AI-Powered Contract Risk Analysis & Compliance Intelligence.",
  category: "Office Add-ins",
  subType: "Word Add-ins",
  images: [legalGuard1, legalGuard2, legalGuard3, legalGuard4, legalGuard5],
  description:
    "An enterprise-grade Microsoft Word add-in designed to automate legal document review and compliance analysis through advanced artificial intelligence. Built with React, Office.js, FastAPI, and GPT-4, the platform acts as a virtual legal advisor by scanning contracts, agreements, and policy documents to identify hidden liabilities, unfair terms, and missing legal protections. The system generates comprehensive risk assessments with severity classifications, highlights potentially harmful clauses, and provides actionable remediation suggestions with alternative contract language. A built-in compliance intelligence engine evaluates document completeness, detects missing industry-standard provisions, and delivers instant legal transparency directly within the Word environment, enabling faster and more informed decision-making for businesses, consultants, and independent professionals.",
  technologies: [
    "React.js",
    "Microsoft Office.js",
    "Word Add-ins",
    "FastAPI",
    "OpenAI GPT-4",
    "Contract Analysis",
    "Legal AI",
    "Risk Assessment",
    "Compliance Auditing",
    "Natural Language Processing",
    "Document Intelligence",
    "Workflow Automation",
  ],
  liveUrl: "#",
},

{
  _id: "15",
  title: "ScriptPilot AI",
  tagline: "AI-Powered Apps Script Coding Assistant & Debugging Studio.",
  category: "Google Add-ons",
  subType: "Google Sheet Add-ons",
  images: [scriptPilot1, scriptPilot2, scriptPilot3, scriptPilot4],
  description:
    "A powerful Google Sheets development assistant that transforms Google Apps Script workflows through AI-driven code generation, debugging, and optimization. Built with a professional React and Material UI interface, the platform features an integrated dark-mode code editor with syntax-aware formatting, one-click code export, and an intelligent development workspace. Powered by GPT-4o, the system converts natural language requirements into production-ready Apps Script solutions, generates implementation guidance, and provides detailed logic explanations for every code block. An advanced debugging engine automatically detects syntax issues, API integration problems, and deployment errors while suggesting actionable fixes, enabling developers and business users to build, maintain, and deploy automation solutions significantly faster and more efficiently.",
  technologies: [
    "Google Apps Script",
    "Google Sheets API",
    "React.js",
    "Material UI",
    "OpenAI GPT-4o",
    "Code Generation",
    "AI Debugging",
    "Prompt Engineering",
    "JavaScript",
    "Developer Tools",
    "Workflow Automation",
    "Code Analysis",
  ],
  liveUrl: "#",
},

];
