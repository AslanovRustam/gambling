import clsx from "clsx";
import { IItem } from "@/types";
import s from "./list.module.css";

type Props = {
  items: IItem[];
  styles?: string;
};

function List({ items, styles }: Props) {
  return (
    <ul className={s.list}>
      {items.map(({ id, name, text }) => (
        <li key={id} className={clsx(s.item, styles && styles)}>
          <p className={s.number}>{id}</p>
          <p className={s.name}>{name}</p>
          <p className={s.text}>{text}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
