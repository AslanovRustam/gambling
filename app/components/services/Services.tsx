import React from "react";
// Componetns
import Title from "../title/Title";
import List from "../list/List";
import Form from "../form/Form";
// Utils
import { NAVIGATION_MENU, SERVICES } from "@/app/utils/constants";
// Local
import s from "./services.module.css";

function Services() {
  return (
    <div className={s.container} id={NAVIGATION_MENU[1].id}>
      <Title text="Our Services" />
      <p className={s.subTitle}>What we do — all in one place</p>
      <div className="mb-10 w-full flex justify-center">
        <List items={SERVICES} styles="w-[345px]" />
      </div>
      {/* <ButtonCmp text={"Book a call"} bgColor="red" /> */}
      <Form variant="service" />
    </div>
  );
}

export default Services;
