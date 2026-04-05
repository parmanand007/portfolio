"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-8 text-slate-600 dark:text-slate-300">
        My recent work has centered on backend architecture, SaaS workflows,
        payment integrations, and performance improvements in production
        systems.
      </p>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.05)",
                boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
                border: theme === "light" ? "1px solid rgba(255,255,255,0.9)" : "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(18px)",
                textAlign: "left",
                borderRadius: "1.5rem",
                padding: "1.5rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid rgba(255,255,255,0.9)"
                    : "0.4rem solid rgba(255,255,255,0.05)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#0f172a" : "rgba(255,255,255,0.08)",
                color: "white",
                fontSize: "1.2rem",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.18)",
              }}
            >
              <h3 className="font-semibold capitalize text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <p className="!mt-1 text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
                {item.location}
              </p>
              <p className="!mt-4 !font-normal leading-7 text-slate-600 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
