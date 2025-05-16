import React from "react";
import ButtonCmp from "../button/Button";
import NavPanel from "../navPanel/NavPanel";
import Logo from "../../../public/icons/logo.svg";
import s from "./header.module.css";
import AnimatedHamburgerButton from "../burgerMenu/BurgerMenu";
// import DropDownCmp from "../dropDown/DropDownCmp";

export default function HeaderCmp() {
  return (
    <header className={s.header}>
      <a href="https://clickable.agency/" target="_blank" rel="noreferrer">
        <Logo className="w-32 sm:w-48" />
      </a>
      <div className="hidden lg:flex">
        <NavPanel />
      </div>
      <div className="flex lg:hidden">
        <AnimatedHamburgerButton />
      </div>
      <div className="hidden lg:flex align-middle gap-2">
        {/* <DropDownCmp /> */}
        <ButtonCmp text={"Let’s Talk"} bgColor="red" />
      </div>
    </header>
  );
}
