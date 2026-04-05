import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="mb-4 text-center text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
      {children}
    </h2>
  );
};

export default SectionHeading;
