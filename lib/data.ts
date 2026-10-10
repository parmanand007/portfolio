import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import splitStrikerImg from "@/public/split-striker.png";
import stockPipelineImg from "@/public/stock-pipeline.png";
import medicalAiImg from "@/public/medical-ai.png";
import stratixImg from "@/public/stratix.png";
import kullImg from "@/public/kull-backend.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Computer Applications",
    location: "BBDU Lucknow, Uttar Pradesh",
    description:
      "Built a strong programming foundation while studying computer science and software development fundamentals.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 – 2021",
  },
  {
    title: "Master of Computer Applications",
    location: "IET Lucknow, Uttar Pradesh",
    description:
      "Completed MCA and secured AIR 81 in the UPMCA entrance exam among 50,000+ candidates statewide.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 – 2023",
  },
  {
    title: "Web Developer",
    location: "Brimo Software Solution, Lucknow",
    description:
      "Deployed loyalty program on plixlife.com, integrated Stripe for 2,000+ monthly transactions, built a multitenant SaaS for 15+ clients, and engineered RESTful APIs with sub-200ms response times.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 – Feb 2024",
  },
  {
    title: "Backend Developer",
    location: "DoctusTech, Remote",
    description:
      "Architected backend for a healthcare SaaS serving 5,000+ U.S. medical professionals. Implemented Redis caching for 50% API response improvement and contributed to React.js admin dashboards.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 – May 2026",
  },
  {
    title: "Full Stack Developer",
    location: "Aura Technologies, Remote",
    description:
      "Architecting scalable backend services for a multi-tenant B2B/B2C insurance platform using Python, Django, and PostgreSQL. Contributing to React.js dashboards and co-leading engineering team through technical decisions and delivery.",
    icon: React.createElement(FaReact),
    date: "May 2026 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Split Striker",
    description:
      "Full-stack expense splitting app — group management, real-time settlement tracking, and clean UX for managing shared costs. Live in production.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind"],
    imageUrl: splitStrikerImg,
    githubUrl: "https://github.com/parmanand007/split-striker",
    liveUrl: "https://splitwise.thestrikerhub.com/",
  },
  {
    title: "Stock Market Data Pipeline",
    description:
      "End-to-end data engineering pipeline — real-time stock data ingestion, dbt transformations, Apache Airflow orchestration, Snowflake warehousing.",
    tags: ["Python", "Snowflake", "dbt", "Airflow", "Data Engineering"],
    imageUrl: stockPipelineImg,
    githubUrl:
      "https://github.com/parmanand007/Stock-Market-Data-Engineering-Project-Snowflake-DBT-Airflow",
    liveUrl: "",
  },
  {
    title: "Medical Transcription AI",
    description:
      "AI-powered tool that transcribes medical audio and auto-generates structured SOAP notes — cutting documentation time for healthcare professionals.",
    tags: ["Python", "LLM", "Whisper", "LangChain", "Healthcare"],
    imageUrl: medicalAiImg,
    githubUrl: "https://github.com/parmanand007/Medical_transcribe_SOAP_generation",
    liveUrl: "",
  },
  {
    title: "Stratix",
    description:
      "College marketplace with JWT auth, product listings, search, and real-time messaging — modular NestJS REST API with a React.js frontend.",
    tags: ["NestJS", "React.js", "PostgreSQL", "JWT", "Messaging"],
    imageUrl: stratixImg,
    githubUrl: "https://github.com/parmanand007/stratix",
    liveUrl: "",
  },
  {
    title: "Kull — Social Backend",
    description:
      "Social backend where users join community groups (Kulls), share posts, and receive real-time updates via group-based content delivery.",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis", "Real-time"],
    imageUrl: kullImg,
    githubUrl: "https://github.com/vermaAtul1520/Kull-backend",
    liveUrl: "",
  },
] as const;

export const skillsData = [
  "Python", "Django", "DRF", "Celery", "Node.js", "Express.js", "GraphQL",
  "React.js", "Next.js", "JavaScript",
  "PostgreSQL", "MongoDB", "Redis",
  "AWS", "Docker", "CI/CD", "Nginx",
  "Git", "LangChain", "NestJS", "Stripe API", "Sentry",
] as const;

export const skillCategories = [
  {
    label: "Backend",
    skills: ["Python", "Django", "DRF", "Celery", "Node.js", "Express.js", "GraphQL"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "JavaScript"],
  },
  {
    label: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Nginx"],
  },
  {
    label: "Tools & AI",
    skills: ["Git", "LangChain", "NestJS", "Stripe API", "Sentry"],
  },
] as const;
