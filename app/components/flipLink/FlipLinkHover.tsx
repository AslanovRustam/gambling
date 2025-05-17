"use client";
import clsx from "clsx";
import { motion } from "motion/react";
// Utils
import { splitString } from "@/app/utils/splitString";

interface Props {
  children: string;
  accentColor?: boolean;
}

const DURATION = 0.15;
const STAGGER = 0.025;

export const FlipLinkHover = ({ children, accentColor }: Props) => {
  const subTitle = splitString(children);

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      //   className="relative block overflow-hidden whitespace-pre-wrap"
      className="inline-flex flex-wrap relative leading-none overflow-hidden"
    >
      <div>
        {subTitle.map((l, i) => (
          <motion.span
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
            key={i}
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
            variants={{
              initial: { y: "100%", opacity: 0 },
              hovered: { y: 0, opacity: 1 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className={clsx(
              "inline-block text-[#ff1923]",
              accentColor && "text-[#fff]"
            )}
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
