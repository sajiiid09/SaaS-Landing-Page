"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

type Props = {
  children: string;
  className?: string;
  delay?: number;
  as?: any;
};

export const TextReveal = ({ children, className, delay = 0, as: Component = "h2" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Split text into words
  const words = children.split(" ");

  return (
    <Component ref={ref} className={clsx("overflow-hidden leading-tight", className)}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="block">
        {words.map((word, i) => (
          <span key={i} className="inline-block mr-[0.2em] overflow-hidden align-bottom">
            <motion.span
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: delay + (i * 0.03), // Stagger each word slightly
                ease: [0.33, 1, 0.68, 1], // "Swiss Design" ease (smooth snap)
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Component>
  );
};
