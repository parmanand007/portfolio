"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

const iconColors: Record<string, string> = {
  grad: "bg-gradient-to-br from-indigo-500 to-violet-600",
  work: "bg-gradient-to-br from-cyan-500 to-indigo-600",
  current: "bg-gradient-to-br from-indigo-600 to-cyan-500",
};

const workEntries = experiencesData.filter((e) =>
  ["Web Developer", "Backend Developer", "Full Stack Developer"].includes(e.title)
);
const eduEntries = experiencesData.filter(
  (e) => !["Web Developer", "Backend Developer", "Full Stack Developer"].includes(e.title)
);

const Experience = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <section ref={ref} id="experience" className="mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-8 text-slate-500 dark:text-slate-400">
        Building production-grade backend systems, SaaS platforms, and
        AI-powered tools across healthcare, insurance, and e-commerce.
      </p>

      {/* Work experience */}
      <div className="mb-6 flex flex-col gap-4">
        {workEntries.map((item, i) => {
          const isCurrent = item.date.includes("Present");
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[1.75rem] border p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 sm:p-8 ${
                isCurrent
                  ? "border-violet-500/30 bg-gradient-to-br from-violet-600/10 via-indigo-600/5 to-transparent shadow-lg shadow-violet-900/15 dark:border-violet-500/20 dark:from-violet-900/20 dark:via-indigo-900/10"
                  : "section-card shadow-lg shadow-slate-900/5"
              }`}
            >
              {isCurrent && (
                <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-[1.75rem] bg-gradient-to-br from-violet-600 to-pink-600 px-4 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.2em] text-white">
                  Current
                </div>
              )}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ${
                    isCurrent ? iconColors.current : iconColors.work
                  }`}
                >
                  {isCurrent ? (
                    <FaReact className="text-xl" />
                  ) : (
                    <CgWorkAlt className="text-xl" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="rounded-full border border-slate-200/60 bg-slate-100/80 px-3 py-0.5 text-[0.7rem] font-semibold text-slate-500 dark:border-white/10 dark:bg-white/8 dark:text-slate-400">
                      {item.date}
                    </span>
                  </div>
                  <p className="mb-3 text-sm font-semibold text-violet-600 dark:text-violet-400">
                    {item.location}
                  </p>
                  <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Education — compact row */}
      <div className="grid gap-4 sm:grid-cols-2">
        {eduEntries.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="section-card flex items-start gap-4 rounded-[1.5rem] p-5 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow ${iconColors.grad}`}
            >
              <LuGraduationCap className="text-lg" />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-slate-950 dark:text-white">
                {item.title}
              </p>
              <p className="mt-0.5 text-xs font-semibold text-violet-500 dark:text-violet-400">
                {item.location}
              </p>
              <p className="mt-0.5 text-[0.7rem] text-slate-400">{item.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
