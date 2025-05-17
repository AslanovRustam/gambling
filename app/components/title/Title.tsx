"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
// Animations
import { FlipLinkInview } from "../flipLink/FlipLinkInview";
// Utils
import { textRevealMotion } from "@/app/utils/animations";
import { splitStringByWord } from "@/app/utils/splitString";
// Local
import s from "./title.module.css";

type Props = { text: string; accentColor?: boolean; noAnimate?: boolean };
type PropsTitleByWord = { text: string; accentColor?: boolean };

function Title({ text, accentColor, noAnimate }: Props) {
  return (
    <div className={clsx(s.title, accentColor && s.accentColor)}>
      {noAnimate ? (
        text
      ) : (
        <FlipLinkInview accentColor={accentColor ? accentColor : false}>
          {text}
        </FlipLinkInview>
      )}
    </div>
  );
}

export default Title;

// Title splited by word
export function TitleByWord({ text, accentColor }: PropsTitleByWord) {
  const subTitle = splitStringByWord(text);
  return (
    <div className={clsx(s.title, accentColor && s.accentColor)}>
      {subTitle.map((l, i) => (
        <motion.span
          initial="initial"
          animate="animate"
          variants={textRevealMotion(0.1, i)}
          className="inline-block"
          key={i}
        >
          {l === " " ? "\u00A0" : l}
        </motion.span>
      ))}
    </div>
  );
}
