import { Button } from "@heroui/button";
import clsx from "clsx";
import React from "react";

type Props = {
  text: string;
  bgColor?: string;
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
};

function ButtonCmp({ text, variant, bgColor }: Props) {
  return (
    <Button
      className={clsx(
        bgColor === "red" ? "bg-[var(--colors-common-red-500)]" : "",
        "rounded-[999px] px-6 py-3"
      )}
      variant={variant}
    >
      {text}
    </Button>
  );
}

export default ButtonCmp;
