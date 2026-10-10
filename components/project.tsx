"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.84, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group last:mb-0"
    >
      <section className="section-card relative overflow-hidden rounded-[2rem] shadow-xl shadow-slate-900/6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-900/20">
        {/* Gradient top border */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-violet-500 opacity-90" />

        {/* Hover inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 ring-1 ring-inset ring-indigo-500/30 transition duration-300 group-hover:opacity-100" />

        <div className="flex flex-col gap-8 p-6 sm:h-[22rem] sm:flex-row sm:items-center sm:p-10">

          {/* ── Text side ── */}
          <div className="flex h-full flex-col sm:max-w-[52%]">
            <p className="mb-2 text-[0.65rem] font-black uppercase tracking-[0.28em] text-violet-500 dark:text-violet-400">
              Selected Work
            </p>
            <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
              {description}
            </p>

            {/* Links */}
            {(githubUrl || liveUrl) && (
              <div className="mt-4 flex items-center gap-5">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-400 transition hover:text-slate-800 dark:text-slate-500 dark:hover:text-white"
                  >
                    <FaGithub className="text-sm" />
                    GitHub
                  </a>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-violet-500 transition hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-300"
                  >
                    <HiExternalLink className="text-sm" />
                    Live Demo
                  </a>
                )}
              </div>
            )}

            {/* Tags */}
            <ul className="mt-auto flex flex-wrap gap-2 pt-5">
              {tags.map((tag, i) => (
                <li
                  key={i}
                  className="rounded-full border border-indigo-900/20 bg-indigo-950/80 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-indigo-200 shadow-sm dark:border-indigo-500/20 dark:bg-indigo-950/60 dark:text-indigo-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Image side ── */}
          <div className="relative flex-1 overflow-hidden rounded-[1.5rem]">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/25 via-cyan-400/15 to-pink-400/20 blur-xl" />
            <Image
              src={imageUrl}
              alt={`${title} preview`}
              quality={90}
              className="relative w-full rounded-[1.5rem] border border-white/50 object-cover shadow-2xl shadow-slate-900/20 transition duration-500 group-hover:scale-[1.03] dark:border-white/8"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
