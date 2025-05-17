import Slider from "./slider";
import Title from "../title/Title";
// Utils
import { NAVIGATION_MENU } from "@/app/utils/constants";
// Local
import Clutch from "../../../public/icons/clutch.svg";
import Star from "../../../public/icons/star.svg";
import s from "./testimonials.module.css";

function Testimonials() {
  return (
    <div className={s.container} id={NAVIGATION_MENU[3].id}>
      <Title text="Testimonials" />
      <p className={s.subTitle}>We stand for each our client anytime</p>
      <Clutch className={s.clutch} />
      <div className="flex items-center justify-center gap-1 mt-4">
        <Star className={s.star} />
        <Star className={s.star} />
        <Star className={s.star} />
        <Star className={s.star} />
        <Star className={s.star} />
        <span className={s.rating}>5.0</span>
      </div>
      <Slider />
    </div>
  );
}

export default Testimonials;
