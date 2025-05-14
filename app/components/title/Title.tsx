import clsx from "clsx";
import s from "./title.module.css";

type Props = { text: string; accentColor?: boolean };

function Title({ text, accentColor }: Props) {
  return <p className={clsx(s.title, accentColor && s.accentColor)}>{text}</p>;
}

export default Title;
