"use client";
import { motion, Variants } from "motion/react";
// Utils
import { splitString } from "../../utils/splitString";

type Props = {
  text: string;
  сlassName?: string;
  tag: keyof JSX.IntrinsicElements;
};

const chartVariants: Variants = {
  hidden: { opacity: 0 /* x: 50 */ },
  reveal: { opacity: 1 /*x: 0*/ },
};

function AnimatedText({ text, tag, сlassName }: Props) {
  const subTitle = splitString(text);
  const MotionTag = motion(tag);
  return (
    <MotionTag
      className={сlassName}
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.02 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {subTitle.map((item, index) => (
        <motion.span
          key={`${index}-${item}`}
          transition={{ duration: 0.1, ease: "easeOut" }}
          variants={chartVariants}
          className="inline-block"
        >
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </MotionTag>
  );
}

export default AnimatedText;
