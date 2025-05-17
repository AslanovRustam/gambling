import ButtonCmp from "../button/Button";
import Title from "../title/Title";
// Animations
import { MaskText } from "../maskText/MaskText";
// Utils
import { WORKS } from "@/app/utils/constants";
// Local
import s from "./howwework.module.css";

function HowWeWork() {
  return (
    <section className={s.section} id="work">
      <Title text="How We Work" />
      <p className={s.subTitle}>Smart. Structured. Scalable</p>{" "}
      <div className="mb-10">
        <ul className={s.list}>
          {WORKS.map(({ id, name, text }, i) => (
            <li key={id} className={s.item}>
              <div className={s.number}>
                <MaskText text={id} stagger={i} />
              </div>
              <div className={s.name}>
                <MaskText text={name} stagger={i} />
              </div>
              <div className={s.text}>
                <MaskText text={text} stagger={i} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ButtonCmp text="Let's Talk" bgColor="red" />
    </section>
  );
}

export default HowWeWork;
