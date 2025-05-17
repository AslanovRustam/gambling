import clsx from "clsx";
// Animations
import { MaskText } from "../maskText/MaskText";
// Utils
import { IItem } from "@/types";
// Local
import s from "./list.module.css";

type Props = {
  items: IItem[];
  styles?: string;
};

function List({ items, styles }: Props) {
  return (
    <ul className={s.list}>
      {items.map(({ id, name, text }, i) => (
        <li key={id} className={clsx(s.item, styles && styles)}>
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
  );
}

export default List;
