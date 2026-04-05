"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 w-[min(100%,42rem)] rounded-[2rem] border border-white/60 bg-white/75 px-6 py-10 text-center shadow-xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/5 sm:mb-28 sm:px-10"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Let&apos;s Build Something Useful</SectionHeading>
      <p className="-mt-2 text-base leading-8 text-slate-600 dark:text-white/80">
        Reach me directly at{" "}
        <a
          className="font-semibold text-slate-950 underline dark:text-white"
          href="mailto:parmanandprajapati0009@gmail.com"
        >
          parmanandprajapati0009@gmail.com
        </a>{" "}
        or send a quick message here.
      </p>

      <form
        className="mt-10 flex flex-col gap-3 dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          type="email"
          required
          maxLength={100}
          className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 shadow-sm outline-none transition-all focus:border-slate-900 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100"
          placeholder="Your email"
          name="senderEmail"
        />
        <textarea
            name="message"
          required
          maxLength={1000}
          className="h-52 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm outline-none transition-all focus:border-slate-900 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100"
          placeholder="Tell me about the role, team, or product you are building."
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
