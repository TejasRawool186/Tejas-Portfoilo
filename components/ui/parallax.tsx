"use client";

import { ReactNode, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
  axis?: "x" | "y";
};

export function Parallax({ children, className, offset = 28, axis = "y" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const movement = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-offset, offset]);
  const smoothMovement = useSpring(movement, {
    stiffness: 120,
    damping: 18,
    mass: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={axis === "x" ? { x: smoothMovement } : { y: smoothMovement }}
    >
      {children}
    </motion.div>
  );
}
