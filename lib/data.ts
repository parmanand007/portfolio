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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Update JWT Algorithm",
    description:
      "I updated HSA256 JWT algorithm to RSA256 algorithm of legacy codebase which in python django",
    tags: ["Django", "Python", "GraphQL", "Saleor", "Postgresql","Docker"],
    imageUrl: corpcommentImg,
  },
  {
    title: "System Desgin For  Web App ",
    description:
      "From scratch create a plugin which can implemented on any website.Feature likes wallet,referal,coupon code creation & redemption are implemented.",
    tags: ["Django", "Python", "Pgsql"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Multitenancy in Existing System",
    description:
      "Scale existing codebase for multiple clients,create dashboard which support multitenant feature",
    tags: ["Django", "Python", "Postgresql", "Jenkins", "Docker","Graphql"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Apis for Analytics",
    description:
      "Create multiple apis in node,express & mongodb used for analytics such as top location,landing page,visitor-count,new-vs returning customer and sales etc.",
    tags: ["Node js", "Express", "JavaScript", "MongoDb"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Django",
  "Git",
  "GraphQL",
  "PostgreSQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "MongoDB",
  "Express",
  "Flutter",
] as const;