"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import s from "./testimonials.module.css";
import avatar from "../../../public/Avatar.png";
import Image from "next/image";
import Link from "next/link";
import NavBtn from "./NavBtn";

type Props = {};

function Slider({}: Props) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      modules={[Pagination, Navigation]}
      className="flex w-full mt-14  gap-5"
    >
      <SwiperSlide className={s.sliderItem}>
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
      </SwiperSlide>
      <SwiperSlide className={s.sliderItem}>
        <div className={s.head}>
          <Image src={avatar} alt="avatar HeroUI" className={s.avatar} />
          <div className={s.headInfo}>
            <p className={s.name}>HeroUI2</p>
            <p className={s.link}>
              <Link href="#">heroui.org2</Link>
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
      </SwiperSlide>
      <SwiperSlide className={s.sliderItem}>
        <div className={s.head}>
          <Image src={avatar} alt="avatar HeroUI" className={s.avatar} />
          <div className={s.headInfo}>
            <p className={s.name}>HeroUI3</p>
            <p className={s.link}>
              <Link href="#">heroui.org3</Link>
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
      </SwiperSlide>
      <NavBtn />
    </Swiper>
  );
}

export default Slider;
