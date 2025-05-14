import s from "./testimonials.module.css";
import Clutch from "../../../public/icons/clutch.svg";
import Star from "../../../public/icons/star.svg";
import Title from "../title/Title";
import Slider from "./slider";

type Props = {};

function Testimonials({}: Props) {
  return (
    <div className={s.container} id="reviews">
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
