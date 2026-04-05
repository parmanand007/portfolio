"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group last:mb-0"
    >
      <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-xl shadow-slate-900/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/5">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500" />
        <div className="flex flex-col gap-8 p-6 sm:h-[21rem] sm:flex-row sm:items-center sm:p-10">
          <div className="flex h-full flex-col sm:max-w-[52%]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-300">
              Selected Work
            </p>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
              {title}
            </h3>
            <p className="mt-4 leading-7 text-slate-600 dark:text-white/70">
            {description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full border border-slate-200 bg-slate-950 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex-1">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-indigo-500/20 blur-2xl" />
            <Image
              src={imageUrl}
              alt={`${title} preview`}
              quality={95}
              className="relative w-full rounded-[1.5rem] border border-slate-200/80 shadow-2xl shadow-slate-900/10 transition duration-300 group-hover:scale-[1.02] dark:border-white/10"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
