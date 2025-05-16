"use client";
import Title from "../title/Title";
import s from "./partners.module.css";
import MarqueeCmp from "../marquee/marquee";

function Partners() {
  return (
    <section className={s.section} id="partners">
      <div className="max-w-[530px] text-center">
        <Title text="Who we work with" />
        <p className={s.subTitle}>Trusted by Leaders & Challengers</p>
        <p className={s.description}>
          From top-tier providers to bold new startups — we help gambling brands
          launch, grow and lead.
        </p>
      </div>

      <MarqueeCmp speed={40} key={1} className="mt-56" />
      <MarqueeCmp direction="right" speed={70} key={2} />

      {/* <Button
        className="rounded-[999px] px-6 py-3 text-[var(--colors-common-red-500)] border-[var(--colors-common-red-500)] mt-10 mb-14"
        variant="bordered"
      >
        Show More
      </Button> */}
    </section>
  );
}

export default Partners;
