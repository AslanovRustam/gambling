import React from "react";
// Components
import NavPanel from "../navPanel/NavPanel";
import AnimatedHamburgerButton from "../burgerMenu/BurgerMenu";
import Form from "../form/Form";
// import DropDownCmp from "../dropDown/DropDownCmp";
// Local
import Logo from "../../../public/icons/logo.svg";
import s from "./header.module.css";

export default function HeaderCmp() {
  return (
    <header className={s.header}>
      <a href="https://clickable.agency/" target="_blank" rel="noreferrer">
        <Logo className="w-32 sm:w-48" />
      </a>
      <div className="hidden lg:flex">
        <NavPanel />
      </div>
      <div className="flex  lg:hidden">
        <AnimatedHamburgerButton />
      </div>
      {/* <div className="hidden lg:flex align-middle gap-2"> */}
      {/* <DropDownCmp /> */}
      {/* <ButtonCmp text={"Let’s Talk"} bgColor="red" /> */}
      {/* </div> */}
      <Form variant="header" />
    </header>
  );
}
