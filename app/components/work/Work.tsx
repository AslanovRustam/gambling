import Image from "next/image";
import { CASES } from "@/app/utils/constants";
import Title from "../title/Title";
import s from "./work.module.css";

function Work() {
  return (
    <section className={s.section} id="work">
      <Title text="Our Work" />
      <p className={s.subTitle}>
        Results you can see. We don’t just talk. We show.
      </p>
      <ul className={s.list}>
        {CASES.map((item) => (
          <li className={s.item} key={item.id}>
            <Image src={item.images[0]} alt={item.name} />
            <p className={s.name}>{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Work;

/* <li className={s.item}>
          <p className={s.tags}>#Webdesign #UI/UX #Animation</p>
          <p className={s.name}>Education – Learning management system</p>
        </li>
        <li className={s.item}>
          <p className={s.tags}>#Webdesign #UI/UX #Animation</p>
          <p className={s.name}>CITF – Cyprus IT Forum website</p>
        </li>
        <li className={s.item}>
          <p className={s.tags}>#Webdesign #UI/UX #Animation</p>
          <p className={s.name}>CITF – Cyprus IT Forum website</p>
        </li>
        <li className={s.item}>
          <p className={s.tags}>#Webdesign #UI/UX #Animation</p>
          <p className={s.name}>Education – Learning management system</p>
        </li> */
