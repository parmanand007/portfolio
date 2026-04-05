"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import mainProfile from "@/public/DSC_1024-03.jpeg";

const metrics = [
  { value: "3+", label: "Years building backend products" },
  { value: "5,000+", label: "Medical professionals served" },
  { value: "50%", label: "API response improvement" },
];

export default function IntroModern() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-24 flex w-full max-w-6xl scroll-mt-[100rem] flex-col items-center px-2 text-center sm:mb-14"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="hero-shell w-full"
      >
        <div className="mb-8 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl" />
            <Image
              src={mainProfile}
              alt="Parmanand Prajapati"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="relative h-28 w-28 rounded-full border-4 border-white/80 object-cover shadow-2xl shadow-slate-900/20"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
              className="absolute bottom-0 right-0 grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg"
            >
              Hi
            </motion.span>
          </div>
        </div>

        <motion.p
          className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          Full Stack Developer (Backend Focused)
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Open to impactful product teams
        </motion.p>

        <motion.h1
          className="mx-auto mb-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-6xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I bring 3+ years of experience building scalable systems and high-performance infrastructure for modern, high-growth products.
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          I&apos;m Parmanand Prajapati, a full-stack developer with a strong focus on backend engineering.
          I have developed scalable systems using Python, Django, PostgreSQL, Redis, AWS, Docker, and Celery.
          My work is not limited to APIs—I design and build end-to-end systems, including background processing,
          system architecture, and frontend integrations using React. I have delivered high-performance platforms
          across healthcare and e-commerce with measurable performance improvements.
        </motion.p>

        <motion.div
          className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Let&apos;s work together
            <BsArrowRight className="opacity-80 transition group-hover:translate-x-1" />
          </Link>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:bg-white/5 dark:text-slate-100"
            href="/parmanand_prajapati.pdf"
            download
          >
            Download Resume
            <HiDownload className="opacity-70" />
          </a>

          <a
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-xl text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/15 dark:bg-white/5 dark:text-slate-100"
            href="https://www.linkedin.com/in/parmanand-prajapati-68499873/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-xl text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/15 dark:bg-white/5 dark:text-slate-100"
            href="https://github.com/parmanand007"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[1.75rem] border border-white/60 bg-white/72 px-6 py-5 text-left shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-1 text-3xl font-black text-slate-950 dark:text-white">
                {metric.value}
              </div>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}