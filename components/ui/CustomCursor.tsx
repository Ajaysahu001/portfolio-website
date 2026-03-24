"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  // Dot tracks the mouse exactly — no spring lag
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Ring follows with gentle spring
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const ringX = useSpring(rawX, { damping: 28, stiffness: 280, mass: 0.6 });
  const ringY = useSpring(rawY, { damping: 28, stiffness: 280, mass: 0.6 });

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const DOT_OFFSET = 3;   // half of 6px dot
    const RING_OFFSET = 20; // half of 40px ring

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX - DOT_OFFSET);
      dotY.set(e.clientY - DOT_OFFSET);
      rawX.set(e.clientX - RING_OFFSET);
      rawY.set(e.clientY - RING_OFFSET);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "A" || t.tagName === "BUTTON" || t.closest("a") || t.closest("button")) {
        setHovering(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const t = e.relatedTarget as HTMLElement | null;
      if (!t || (t.tagName !== "A" && t.tagName !== "BUTTON" && !t.closest("a") && !t.closest("button"))) {
        setHovering(false);
      }
    };

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, [dotX, dotY, rawX, rawY]);

  // Never render on the server — avoids SSR/client transform mismatch
  if (!mounted) return null;

  return (
    <>
      {/* Outer ring — follows with spring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-9999 hidden md:block rounded-full"
        style={{
          x: ringX,
          y: ringY,
          borderStyle: "solid",
        }}
        animate={{
          width:  hovering ? 52 : clicking ? 30 : 40,
          height: hovering ? 52 : clicking ? 30 : 40,
          backgroundColor: hovering ? "rgba(139,92,246,0.12)" : "rgba(0,0,0,0)",
          borderColor: hovering
            ? "rgba(167,139,250,0.8)"
            : clicking
            ? "rgba(255,255,255,0.9)"
            : "rgba(255,255,255,0.35)",
          borderWidth: hovering ? 1.5 : 1,
          marginLeft: hovering ? -6 : clicking ? 5 : 0,
          marginTop:  hovering ? -6 : clicking ? 5 : 0,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />

      {/* Inner dot — exact mouse position, no lag */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-9999 hidden md:block"
        style={{ x: dotX, y: dotY }}
        animate={{
          backgroundColor: hovering ? "rgb(167,139,250)" : "rgb(255,255,255)",
          scale: hovering ? 1.4 : clicking ? 0.6 : 1,
          opacity: hovering ? 0.9 : 1,
        }}
        transition={{ duration: 0.12 }}
      />
    </>
  );
}
