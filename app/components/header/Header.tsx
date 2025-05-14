import s from "./header.module.css";
import Logo from "../../../public/icons/logo.svg";

import React from "react";
import ButtonCmp from "../button/Button";
import NavPanel from "../navPanel/NavPanel";
import DropDownCmp from "../dropDown/DropDownCmp";

type Props = {};

export default function HeaderCmp({}: Props) {
  return (
    <header className={s.header}>
      <a href="https://clickable.agency/" target="_blank">
        <Logo className="w-32 sm:w-48" />
      </a>
      <div className="hidden lg:flex">
        <NavPanel />
      </div>

      <div className="flex align-middle gap-2">
        <DropDownCmp />
        <ButtonCmp text={"Let’s Talk"} bgColor="red" />
      </div>
    </header>
  );
}
