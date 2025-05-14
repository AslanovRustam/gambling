import { useSwiper } from "swiper/react";
import Arrow from "../../../public/icons/arrowCustom.svg";
import s from "./testimonials.module.css";

function NavBtn() {
  const swiper = useSwiper();
  return (
    <div className={s.swiperBtns}>
      <div className={s.btnPrev} onClick={() => swiper.slidePrev()}>
        <Arrow className={s.arrow} />
      </div>
      <div className={s.btnNext} onClick={() => swiper.slideNext()}>
        <Arrow className={s.arrow} />
      </div>
    </div>
  );
}

export default NavBtn;
