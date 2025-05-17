import ButtonCmp from "../button/Button";
import { TitleByWord } from "../title/Title";
// Animations
import AnimatedText from "../animatedText/AnimatedText";
// Utils
import { NAVIGATION_MENU } from "@/app/utils/constants";
// Local
import s from "./hero.module.css";

export default function Hero() {
  return (
    <section className={s.section} id={NAVIGATION_MENU[0].id}>
      <div className={s.container}>
        <TitleByWord text="Design & Creative Powerhouse for the Gambling Industry" />

        <AnimatedText
          text="Full-cycle production for marketing assets, UI/UX, games & brand identity — built by a team with 10+ years in iGaming."
          tag="p"
          сlassName="text-white text-[20px] leading-7 opacity-40 sm:max-w-[380px] lg:max-w-[500px]"
        />

        <div className="w-fit">
          <ButtonCmp text="Let’s Talk" bgColor="red" />
        </div>
      </div>
    </section>
  );
}
