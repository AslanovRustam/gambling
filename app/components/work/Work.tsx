"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import Title from "../title/Title";
import ModalCmp from "../modal/Modal";
import { CASES, NAVIGATION_MENU } from "@/app/utils/constants";
import { ICase } from "@/types";
import s from "./work.module.css";
import { TiltCard } from "../tiltCard/TiltCard";

function Work() {
  const [showAll, setShowAll] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [currentCase, setCurrentCase] = useState<ICase | null>(null);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const setCase = (id: string) => {
    setCurrentCase(CASES.find((item) => item.id === id) ?? null);
    onOpen();
  };

  return (
    <section className={s.section} id={NAVIGATION_MENU[2].id}>
      <Title text="Our Work" />
      <p className={s.subTitle}>
        Results you can see. We don’t just talk. We show.
      </p>
      <div className={`${s.wrapper} ${showAll ? s.expanded : s.collapsed}`}>
        <ul className={s.list}>
          {CASES.map((item) => (
            <TiltCard item={item} setCase={setCase} key={item.id} />
            // <li
            //   className={s.item}
            //   key={item.id}
            //   onClick={() => setCase(item.id)}
            // >
            //   <Image src={item.images[0]} alt={item.name} className={s.image} />
            //   <p className={s.name}>{item.name}</p>
            //   <p className={s.text}>{item.text}</p>
            // </li>
          ))}
        </ul>
      </div>
      <Button
        className="rounded-[999px] px-6 py-3 text-[var(--colors-common-red-500)] border-[var(--colors-common-red-500)] mt-10 mb-14"
        variant="bordered"
        onPress={toggleShowAll}
      >
        {showAll ? "Show less" : "Show more"}
      </Button>
      <ModalCmp
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        currentCase={currentCase}
      />
    </section>
  );
}

export default Work;
