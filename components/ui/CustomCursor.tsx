"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const dotSpringX = useSpring(dotX, { damping: 15, stiffness: 600 });
  const dotSpringY = useSpring(dotY, { damping: 15, stiffness: 600 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        cursorRef.current?.classList.add("scale-150", "border-violet-400", "bg-violet-400/10");
        dotRef.current?.classList.add("opacity-0");
      }
    };

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove("scale-150", "border-violet-400", "bg-violet-400/10");
      dotRef.current?.classList.remove("opacity-0");
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [mouseX, mouseY, dotX, dotY]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-violet-500/60 pointer-events-none z-[9999] transition-all duration-200 hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-violet-400 pointer-events-none z-[9999] transition-opacity duration-200 hidden md:block"
        style={{ x: dotSpringX, y: dotSpringY }}
      />
    </>
  );
}
