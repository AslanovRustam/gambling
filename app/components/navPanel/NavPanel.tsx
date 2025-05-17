import clsx from "clsx";
// Utils
import { NAVIGATION_MENU } from "@/app/utils/constants";
// Local
import s from "./navPanel.module.css";

function NavPanel() {
  return (
    <nav className={clsx(s.list)}>
      {NAVIGATION_MENU.map((item) => (
        <li className={s.item} key={item.name}>
          <a href={`#${item.id}`} className={s.link}>
            {item.name}
          </a>
        </li>
      ))}
    </nav>
  );
}

export default NavPanel;
