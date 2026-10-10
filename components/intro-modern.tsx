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
  { value: "4+", label: "Years" },
  { value: "10k+", label: "Users" },
  { value: "50%", label: "Perf boost" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function IntroModern() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 flex w-full max-w-6xl scroll-mt-[100rem] flex-col px-4 pt-4 sm:mb-16 sm:pt-10"
    >
      <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-20">

        {/* ── LEFT: Text ── */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">

          {/* Open-to-work badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-2 text-[0.7rem] font-black uppercase tracking-[0.24em] text-emerald-400 dark:border-emerald-500/20 dark:bg-emerald-500/8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to Work
          </motion.span>

          {/* Name label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
            className="font-display mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-slate-400 dark:text-slate-500"
          >
            Parmanand Prajapati
          </motion.p>

          {/* Main headline with glint on key words */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="font-display mb-6 text-[2.6rem] font-black leading-[1.06] tracking-tight text-slate-950 dark:text-white sm:text-[3.5rem] lg:text-[4.25rem]"
          >
            Building backend{" "}
            <span className="gradient-text">systems</span>
            <br className="hidden sm:block" />
            {" "}that actually{" "}
            <span className="gradient-text">scale.</span>
          </motion.h1>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease }}
            className="mb-8 max-w-[480px] text-base leading-8 text-slate-500 dark:text-slate-400 sm:text-[1.05rem]"
          >
            4 years turning hard problems into{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              fast, reliable systems
            </span>{" "}
            — scalable APIs, multi-tenant SaaS, performance optimization, and AI tooling
            across{" "}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400">
              healthcare, e-commerce &amp; insurance.
            </span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/50 hover:shadow-xl"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              {/* Shimmer sweep on hover */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              Let&apos;s work together
              <BsArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <a
              href="/parmanand_prajapati_a.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 dark:border-white/10 dark:bg-white/4 dark:text-slate-200 dark:hover:border-indigo-500/50"
            >
              Resume
              <HiDownload className="opacity-70" />
            </a>

            <a
              href="https://www.linkedin.com/in/parmanand-prajapati-68499873/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-lg text-slate-500 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/4 dark:text-slate-400 dark:hover:border-indigo-500/50 dark:hover:text-indigo-400"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://github.com/parmanand007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-lg text-slate-500 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/4 dark:text-slate-400 dark:hover:border-indigo-500/50 dark:hover:text-indigo-400"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Avatar + Metrics ── */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="flex flex-col items-center gap-8"
        >
          {/* Avatar with animated glow ring */}
          <div className="relative">
            {/* Outer ambient glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-indigo-600/40 via-cyan-500/20 to-violet-600/30 blur-2xl" />
            {/* Glow-pulse ring */}
            <div className="animate-glow-pulse relative rounded-full bg-gradient-to-br from-indigo-500 via-cyan-400 to-violet-500 p-[3px]">
              <div className="rounded-full bg-[#030614] p-[3px]">
                <Image
                  src={mainProfile}
                  alt="Parmanand Prajapati"
                  width={220}
                  height={220}
                  quality={95}
                  priority
                  className="h-40 w-40 rounded-full object-cover sm:h-52 sm:w-52"
                />
              </div>
            </div>
            {/* Hi badge */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 240, delay: 0.45 }}
              className="animate-float absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 text-xs font-black text-white shadow-lg shadow-indigo-500/40"
            >
              Hi!
            </motion.div>
          </div>

          {/* Metric cards */}
          <div className="flex gap-3">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 18, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.38 + i * 0.09, ease, duration: 0.5 }}
                className="glass-card flex min-w-[5.5rem] flex-col items-center rounded-2xl px-4 py-4 text-center shadow-lg shadow-indigo-900/8"
              >
                <span className="font-display gradient-text text-2xl font-black sm:text-3xl">
                  {m.value}
                </span>
                <span className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
