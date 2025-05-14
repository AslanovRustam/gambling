import clsx from "clsx";
import s from "./navPanel.module.css";

type Props = {};

function NavPanel({}: Props) {
  return (
    <nav className={clsx(s.list)}>
      <li className={s.item}>
        <a href="#company" className={s.link}>
          Company
        </a>
      </li>
      <li className={s.item}>
        <a href="#services" className={s.link}>
          Services
        </a>
      </li>
      <li className={s.item}>
        <a href="#work" className={s.link}>
          Our Work
        </a>
      </li>
      <li className={s.item}>
        <a href="#reviews" className={s.link}>
          Reviews
        </a>
      </li>
    </nav>
  );
}

export default NavPanel;
