import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Computer Applications",
    location: "BBDU Lucknow, Uttar Pradesh",
    description:
      "Built a strong programming foundation while studying computer science and software development fundamentals.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2021",
  },
  {
    title: "Master of Computer Applications",
    location: "IET Lucknow, Uttar Pradesh",
    description:
      "Completed MCA and secured AIR 81 in the UPMCA entrance exam among 50,000+ candidates statewide.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Web Developer Associate",
    location: "Brimo Software Solution, Lucknow",
    description:
      "Built loyalty features such as wallets, coupons, and referrals, and helped deliver a multitenant SaaS platform for 15+ client deployments.",
    icon: React.createElement(FaReact),
    date: "Mar 2023 - Aug 2023",
  },
  {
    title: "Web Developer",
    location: "Brimo Software Solution, Lucknow",
    description:
      "Deployed a loyalty program for 10,000+ users, integrated Stripe payments for 2,000+ monthly transactions, and improved load time by 45% with query optimization.",
    icon: React.createElement(FaReact),
    date: "Sep 2023 - Feb 2024",
  },
  {
    title: "Backend Developer",
    location: "DoctusTech, Remote",
    description:
      "Architected Django REST APIs for a healthcare SaaS used by 5,000+ medical professionals, improved response time by 50% with Redis caching, and reduced workflow time by 40%.",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Healthcare SaaS Platform",
    description:
      "Designed backend workflows and admin tooling for a production healthcare platform serving thousands of U.S. professionals, with a strong focus on API performance and automation.",
    tags: ["Django", "DRF", "PostgreSQL", "Redis", "React"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Multitenant Loyalty System",
    description:
      "Built loyalty, referral, wallet, and coupon features for a reusable SaaS product that supported 15+ client implementations with lower infrastructure cost.",
    tags: ["Django", "Python", "GraphQL", "PostgreSQL", "Docker"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Stratix",
    description:
      "Developed a college marketplace with authentication, listings, and messaging, combining backend architecture with a practical full-stack product experience.",
    tags: ["NestJS", "React", "PostgreSQL", "Auth", "Messaging"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "AI Workflow Tools",
    description:
      "Created AI-driven utilities including a timesheet assistant and an insurance RAG workflow to automate information retrieval and internal productivity tasks.",
    tags: ["Python", "LangChain", "RAG", "Node.js", "Automation"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Django",
  "DRF",
  "Git",
  "GraphQL",
  "PostgreSQL",
  "Redis",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "MongoDB",
  "Express",
  "NestJS",
  "Docker",
  "AWS",
  "Stripe API",
  "LangChain",
] as const;
