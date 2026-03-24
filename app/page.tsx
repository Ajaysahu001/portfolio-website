import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

// Below-fold sections: lazily loaded + Suspense for streaming SSR
const Skills     = dynamic(() => import("@/components/sections/Skills"));
const Projects   = dynamic(() => import("@/components/sections/Projects"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Contact    = dynamic(() => import("@/components/sections/Contact"));

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={null}><Skills /></Suspense>
      <Suspense fallback={null}><Projects /></Suspense>
      <Suspense fallback={null}><Experience /></Suspense>
      <Suspense fallback={null}><Contact /></Suspense>
    </>
  );
}
