"use client";
import { MouseEvent, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import Title from "../title/Title";
import logo from "../../../public/3DClickablelogo.png";
import icon1 from "../../../public/Icon 01.png";
import icon2 from "../../../public/Icon 02.png";
import icon3 from "../../../public/Icon 03.png";
import icon4 from "../../../public/Icon 04.png";
import heart from "../../../public/heart.png";
import diomond from "../../../public/diomond.png";
import pike from "../../../public/pike.png";
import s from "./whyUs.module.css";

function WhyUs() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLImageElement>(null);
  const diomondRef = useRef<HTMLImageElement>(null);
  const pikeRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const container = parallaxRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 200).toFixed(2);
    const rotateY = (x / 200).toFixed(2);

    const inner = container.querySelector(`.${s.parallaxInner}`);
    inner?.setAttribute(
      "style",
      `transform: perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg); transition: transform 0.1s ease-out;`
    );

    heartRef.current?.setAttribute(
      "style",
      `transform: translate(${x / 30}px, ${y / 30}px); transition: transform 1s ease-out;`
    );

    diomondRef.current?.setAttribute(
      "style",
      `transform: translate(${-x / 20}px, ${-y / 40}px); transition: transform 1.2s ease-out;`
    );

    pikeRef.current?.setAttribute(
      "style",
      `transform: translate(${-x / 10}px, ${-y / 10}px); transition: transform 0.8s ease-out;`
    );
  };

  const resetTransform = () => {
    parallaxRef.current
      ?.querySelector(`.${s.parallaxInner}`)
      ?.setAttribute(
        "style",
        "transform: rotateX(0) rotateY(0); transition: transform 0.3s ease;"
      );

    heartRef.current?.setAttribute(
      "style",
      "transform: translate(0, 0); transition: transform 0.3s ease;"
    );

    diomondRef.current?.setAttribute(
      "style",
      "transform: translate(0, 0); transition: transform 0.3s ease;"
    );

    pikeRef.current?.setAttribute(
      "style",
      "transform: translateY(0); transition: transform 0.3s ease;"
    );
  };

  return (
    <section
      className={s.section}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      ref={parallaxRef}
    >
      <div className={s.containerLeft}>
        <div className={s.wrapper}>
          <div className={s.left}></div>
          <div className={s.right}>
            <Title text="Why Us" />
            <p className={s.subTitle}>We’re built for gambling projects</p>
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.left}>
            <div className={s.square}>
              <Image src={icon1} alt="01" />
            </div>
            <p className={s.number}>01</p>
          </div>
          <div className={s.right}>
            <p className={s.name}>10+ years in iGaming</p>
            <p className={s.description}>
              We know the challenges. We speak your language.
            </p>
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.left}>
            <div className={s.square}>
              <Image src={icon2} alt="02" />
            </div>
            <p className={s.number}>02</p>
          </div>
          <div className={s.right}>
            <p className={s.name}>Scalable teams</p>
            <p className={s.description}>
              Trained specifically for your project.
            </p>
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.left}>
            <div className={s.square}>
              <Image src={icon3} alt="03" />
            </div>
            <p className={s.number}>03</p>
          </div>
          <div className={s.right}>
            <p className={s.name}>You can rely on us</p>
            <p className={s.description}>
              We handle the boring stuff — from voiceover orders to licensing
              stock content.
            </p>
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.left}>
            <div className={s.square}>
              <Image src={icon4} alt="04" />
            </div>
            <p className={s.number}>04</p>
          </div>
          <div className={s.right}>
            <p className={s.name}>Our clients</p>
            <p className={s.description}>
              They stick with us. And we help them grow & win
            </p>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          s.containerRight,
          "w-[400px] h-[270px] sm:h-auto lg:w-[800px]  lg:h-[540px] flex items-center justify-center"
        )}
      >
        <div className={s.parallaxInner}>
          <Image
            src={logo}
            alt="Clickable logo"
            className="h-full w-auto z-10 relative"
          />
        </div>
        <Image
          src={heart}
          alt="card heart"
          className={s.heart}
          ref={heartRef}
        />
        <Image
          src={diomond}
          alt="card diomond"
          className={s.diomond}
          ref={diomondRef}
        />
        <Image src={pike} alt="card pike" className={s.pike} ref={pikeRef} />
      </div>
    </section>
  );
}

export default WhyUs;
