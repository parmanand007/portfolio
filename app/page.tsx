import Projects from "@/components/Projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import IntroModern from "@/components/intro-modern";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroModern />
      <SectionDivider />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
