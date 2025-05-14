import clsx from "clsx";
import Title from "../title/Title";
import s from "./whyUs.module.css";

type Props = {};

function WhyUs({}: Props) {
  return (
    <section className={s.section}>
      <div className={s.containerLeft}>
        <div className={s.wrapper}>
          <div className={s.left}></div>
          <div className={s.right}>
            <Title text="Why Us" />
            <p className={s.subTitle}>We’re built for gambling projects</p>
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.left}>
            <div className={s.square}></div>
            <p className={s.number}>01</p>
          </div>
          <div className={s.right}>
            <p className={s.name}>10+ years in iGaming</p>
            <p className={s.description}>
              We know the challenges. We speak your language.
            </p>
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.left}>
            <div className={s.square}></div>
            <p className={s.number}>02</p>
          </div>
          <div className={s.right}>
            <p className={s.name}>Scalable teams</p>
            <p className={s.description}>
              Trained specifically for your project.
            </p>
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.left}>
            <div className={s.square}></div>
            <p className={s.number}>03</p>
          </div>
          <div className={s.right}>
            <p className={s.name}>You can rely on us</p>
            <p className={s.description}>
              We handle the boring stuff — from voiceover orders to licensing
              stock content.
            </p>
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.left}>
            <div className={s.square}></div>
            <p className={s.number}>04</p>
          </div>
          <div className={s.right}>
            <p className={s.name}>Our clients</p>
            <p className={s.description}>
              They stick with us. And we help them grow & win
            </p>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          s.containerRight,
          "w-[400px] h-[270px] lg:w-[800px] lg:h-[540px] bg-[radial-gradient(at_bottom_left,_rgba(255,25,35,0.15)_0%,_rgba(74,74,74,0.15)_50%,_rgba(72,24,120,0.15)_100%)]"
        )}
      ></div>
    </section>
  );
}

export default WhyUs;
