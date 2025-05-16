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
  onClick?: () => void;
  styles?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
};

function ButtonCmp({ text, variant, bgColor, onClick, styles, color }: Props) {
  return (
    <Button
      className={clsx(
        bgColor === "red" ? "bg-[var(--colors-common-red-500)]" : "",
        "rounded-[999px] px-6 py-3 ",
        styles && styles
      )}
      variant={variant}
      onPress={onClick}
      color={color}
      id="al"
      aria-label={text}
    >
      {text}
    </Button>
  );
}

export default ButtonCmp;
