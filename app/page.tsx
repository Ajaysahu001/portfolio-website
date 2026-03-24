import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

// Below-fold sections: lazily loaded so the hero bundle stays small
const Skills     = dynamic(() => import("@/components/sections/Skills"));
const Projects   = dynamic(() => import("@/components/sections/Projects"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Contact    = dynamic(() => import("@/components/sections/Contact"));

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
