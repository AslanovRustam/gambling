import { useSwiper } from "swiper/react";
// Local
import Arrow from "../../../public/icons/arrowCustom.svg";
import s from "./testimonials.module.css";

function NavBtn() {
  const swiper = useSwiper();
  return (
    <div className={s.swiperBtns}>
      <button
        type="button"
        className={s.btnPrev}
        onClick={() => swiper.slidePrev()}
      >
        <Arrow className={s.arrow} />
      </button>
      <button
        type="button"
        className={s.btnNext}
        onClick={() => swiper.slideNext()}
      >
        <Arrow className={s.arrow} />
      </button>
    </div>
  );
}

export default NavBtn;
