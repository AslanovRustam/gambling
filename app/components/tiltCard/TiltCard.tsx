"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
// Utils
import { ICase } from "@/types";
// Local
import s from "./tiltcard.module.css";

const ROTATION_RANGE = 10;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

interface Props {
  item: ICase;
  setCase: (id: string) => void;
}

export const TiltCard = ({ item, setCase }: Props) => {
  const ref = useRef<HTMLLIElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <li
      ref={ref}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setCase(item.id);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={s.item}
      onClick={() => setCase(item.id)}
    >
      <motion.div
        style={{
          transform,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            transform: "translateZ(100px)",
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src={item.images[0]}
            alt={item.name}
            className={s.image}
            width={319}
            height={370}
            quality={100}
          />
        </div>
      </motion.div>
      <p className={s.name}>{item.name}</p>
      <p className={s.text}>{item.text}</p>
    </li>
  );
};
