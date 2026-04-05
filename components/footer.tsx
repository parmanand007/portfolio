import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-slate-500 dark:text-slate-400">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Parmanand Prajapati. Built for modern
        backend opportunities.
      </small>
      <p className="text-xs">
        Crafted with Next.js, TypeScript, Tailwind CSS, Framer Motion, React
        Email, and Resend.
      </p>
    </footer>
  );
};

export default Footer;
