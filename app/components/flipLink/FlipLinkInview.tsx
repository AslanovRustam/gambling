"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import clsx from "clsx";
// Utils
import { splitStringByWord } from "@/app/utils/splitString";

interface Props {
  children: string;
  accentColor?: boolean;
  inview?: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLinkInview = ({ children }: Props) => {
  const subTitle = splitStringByWord(children);
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: true,
    margin: `0px 0px -20% 0px`,
  });

  useEffect(() => {
    if (isInView) {
      controls.start("hovered");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      className="inline-flex flex-wrap relative leading-none overflow-hidden"
    >
      <div>
        {subTitle.map((l, i) => (
          <motion.span
            key={`initial-${i}`}
            variants={{
              initial: { y: 0, opacity: 1 },
              hovered: { y: "-100%", opacity: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>

      <div
        aria-hidden
        className="absolute inset-0 top-0 left-0 w-full h-full pointer-events-none"
      >
        {subTitle.map((l, i) => (
          <motion.span
            key={`hovered-${i}`}
            variants={{
              initial: { y: "100%", opacity: 0 },
              hovered: { y: 0, opacity: 1 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className={clsx("inline-block")}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
