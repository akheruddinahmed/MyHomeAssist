import type { ReactNode } from "react";
import { motion } from "framer-motion";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Adds a subtle lift-on-hover — used for cards that aren't already featured/highlighted */
  hoverLift?: boolean;
};

export function Card({ children, className = "", hoverLift = false }: CardProps) {
  return (
    <motion.div
      whileHover={hoverLift ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border border-border bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
