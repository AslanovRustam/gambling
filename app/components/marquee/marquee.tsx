import Marquee from "react-fast-marquee";
// Local
import CustomIcon from "../customIcon/CustomIcon";
import s from "./margue.module.css";

type Props = {
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  className?: string;
};

function MarqueeCmp({ direction = "left", speed = 50, className }: Props) {
  const icons: Array<
    | "casinochan"
    | "ggpoker"
    | "cashimo"
    | "fairspin"
    | "joker"
    | "kaizen"
    | "m88"
    | "megapartners"
    | "ncasino"
    | "okfun"
    | "pokerdom"
    | "playfina"
    | "sports"
    | "twin"
    | "weiss"
  > = [
    "casinochan",
    "ggpoker",
    "cashimo",
    "fairspin",
    "joker",
    "kaizen",
    "m88",
    "megapartners",
    "ncasino",
    "okfun",
    "pokerdom",
    "playfina",
    "sports",
    "twin",
    "weiss",
  ];
  return (
    <Marquee
      pauseOnHover
      //   gradient
      //   gradientColor="#0000004d"
      direction={direction}
      speed={speed}
      className={`${className && s[className]}`}
    >
      <ul className={s.list}>
        {icons.map((icon) => (
          <li className={s.item} key={icon}>
            <CustomIcon name={icon} className="" />
          </li>
        ))}
      </ul>
    </Marquee>
  );
}

export default MarqueeCmp;
