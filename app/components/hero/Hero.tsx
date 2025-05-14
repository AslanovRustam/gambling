import clsx from "clsx";
import ButtonCmp from "../button/Button";
import Title from "../title/Title";
import AnimatedText from "../animatedText/AnimatedText";
import s from "./hero.module.css";

export default function Hero() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Title text="Design & Creative Powerhouse for the Gambling Industry" />

        <AnimatedText
          text="Full-cycle production for marketing assets, UI/UX, games & brand identity — built by a team with 10+ years in iGaming."
          tag="p"
          сlassName="text-white text-[20px] leading-7 opacity-40"
        />

        <div className="w-fit">
          <ButtonCmp text="Let’s Talk" bgColor="red" />
        </div>
      </div>
      <div
        className={clsx(
          s.imgWrapper,
          "w-[400px] h-[270px] lg:w-[800px] lg:h-[540px] bg-[radial-gradient(at_bottom_left,_rgba(255,25,35,0.15)_0%,_rgba(74,74,74,0.15)_50%,_rgba(72,24,120,0.15)_100%)]"
        )}
      ></div>
    </section>
  );
}
