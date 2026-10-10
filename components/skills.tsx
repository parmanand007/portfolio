"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Core Skills</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-8 text-slate-500 dark:text-slate-400">
        Backend-first engineer — comfortable moving across the full stack when
        the product needs it.
      </p>

      <div className="flex flex-col gap-4">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: catIdx * 0.06, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.1 }}
            className="section-card flex flex-col gap-3 rounded-[1.75rem] p-5 shadow-lg shadow-slate-900/5 backdrop-blur-xl sm:flex-row sm:items-center"
          >
            <div className="w-full shrink-0 sm:w-36">
              <span className="inline-block rounded-xl bg-indigo-100 px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.2em] text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                {category.label}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="cursor-default rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-[0.8rem] font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-sm hover:shadow-indigo-100 dark:border-white/8 dark:bg-white/6 dark:text-white/82 dark:hover:border-indigo-500/40 dark:hover:bg-white/10"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
