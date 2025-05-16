import ButtonCmp from "../button/Button";
import Title from "../title/Title";
import s from "./cta.module.css";

function Cta() {
  return (
    <section className={s.section}>
      <div className={s.title}>
        <Title text="Need a reliable" />
        <Title text="Creative Partner?" accentColor />
      </div>
      <p className={s.subTitle}>Let’s build something that works — and wins.</p>{" "}
      <div className="mt-10">
        <ButtonCmp text="Book a call" bgColor="red" />
      </div>
    </section>
  );
}

export default Cta;
