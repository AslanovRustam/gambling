import ButtonCmp from "../button/Button";
import Title from "../title/Title";
import { WORKS } from "@/app/utils/constants";
import s from "./howwework.module.css";

type Props = {};

function HowWeWork({}: Props) {
  return (
    <section className={s.section} id="work">
      <Title text="How We Work" />
      <p className={s.subTitle}>Smart. Structured. Scalable</p>{" "}
      <div className="mb-10">
        <ul className={s.list}>
          {WORKS.map(({ id, name, text }) => (
            <li key={id} className={s.item}>
              <p className={s.number}>{id}</p>
              <p className={s.name}>{name}</p>
              <p className={s.text}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <ButtonCmp text="Let's Talk" bgColor="red" />
    </section>
  );
}

export default HowWeWork;
