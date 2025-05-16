"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NavBtn from "./NavBtn";
import avatar from "../../../public/avatar.png";
import { TESTIMONIALS } from "@/app/utils/constants";
import s from "./testimonials.module.css";

function Slider() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      modules={[Pagination, Navigation]}
      className="flex w-full mt-14  gap-5"
    >
      {TESTIMONIALS.map(({ id, url, name, company, text }) => (
        <SwiperSlide className={s.sliderItem} key={id}>
          <div className={s.head}>
            <Image src={avatar} alt="Clutch logo" className={s.avatar} />
            <div className={s.headInfo}>
              <p className={s.name}>{company}</p>
              <p className={s.link}>{name}</p>
            </div>
          </div>
          <p className={s.text}>{text}</p>
          <p className={s.code}>
            <Link href={url!} target="_blank">
              Visit source on Clutch
            </Link>
          </p>
        </SwiperSlide>
      ))}
      <NavBtn />
    </Swiper>
  );
}

export default Slider;

{
  /* <SwiperSlide className={s.sliderItem}>
  <div className={s.head}>
    <Image src={avatar} alt="avatar HeroUI" className={s.avatar} />
    <div className={s.headInfo}>
      <p className={s.name}>HeroUI</p>
      <p className={s.link}>
        <Link href="#">heroui.org</Link>
      </p>
    </div>
  </div>
  <p className={s.text}>
    Room-filling sound, Intelligent assistant. Smart home control. Works
    seamlessly with iPhone. Check it out
  </p>
  <p className={s.code}>
    <Link href="#">Visit source code on Github.</Link>
  </p>
</SwiperSlide>; */
}
