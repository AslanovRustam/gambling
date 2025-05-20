import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import WhyUs from "./components/whyUs/WhyUs";
import Partners from "./components/partners/Partners";
import Work from "./components/work/Work";
import HowWeWork from "./components/howWeWork/HowWeWork";
import Cta from "./components/cta/Cta";

export default function Home() {
  return (
    <section className="flex flex-col ">
      {/* <div className="relative flex flex-col lg:flex-row"> */}
      <Hero />
      {/* </div> */}
      <Partners />
      <Services />
      <WhyUs />
      <Work />
      <HowWeWork />
      <Testimonials />
      <Cta />
    </section>
  );
}
