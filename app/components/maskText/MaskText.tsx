"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

interface Props {
  text: string;
  stagger?: number;
  styles?: string;
}

export function MaskText({ text, stagger = 0 }: Props) {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, amount: 0.5 });

  const animation = {
    initial: { y: "100%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div className="overflow-hidden" ref={body}>
      <motion.p
        custom={stagger}
        variants={animation}
        initial="initial"
        animate={isInView ? "enter" : ""}
      >
        {text}
      </motion.p>
    </div>
  );
}
